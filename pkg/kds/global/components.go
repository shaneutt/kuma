package global

import (
	"fmt"
	"net"
	"strconv"
	"strings"

	"github.com/Kong/kuma/pkg/core/resources/apis/system"

	"github.com/Kong/kuma/pkg/config/mode"

	"github.com/Kong/kuma/pkg/config/core/resources/store"
	"github.com/Kong/kuma/pkg/core"
	"github.com/Kong/kuma/pkg/core/resources/apis/mesh"
	"github.com/Kong/kuma/pkg/core/resources/model"
	"github.com/Kong/kuma/pkg/core/runtime"
	"github.com/Kong/kuma/pkg/core/runtime/component"
	"github.com/Kong/kuma/pkg/kds/client"
	kds_server "github.com/Kong/kuma/pkg/kds/server"
	sync_store "github.com/Kong/kuma/pkg/kds/store"
	"github.com/Kong/kuma/pkg/kds/util"
	util_xds "github.com/Kong/kuma/pkg/util/xds"
)

var (
	kdsGlobalLog  = core.Log.WithName("kds-global")
	providedTypes = []model.ResourceType{
		mesh.MeshType,
		mesh.DataplaneType,
		mesh.CircuitBreakerType,
		mesh.FaultInjectionType,
		mesh.HealthCheckType,
		mesh.TrafficLogType,
		mesh.TrafficPermissionType,
		mesh.TrafficRouteType,
		mesh.TrafficTraceType,
		mesh.ProxyTemplateType,
		system.SecretType,
	}
	consumedTypes = []model.ResourceType{
		mesh.DataplaneType,
		mesh.DataplaneInsightType,
	}
)

func SetupComponent(rt runtime.Runtime) error {
	syncStore := sync_store.NewResourceSyncer(kdsGlobalLog, rt.ResourceStore())

	clientFactory := func(zoneIP string) client.ClientFactory {
		return func() (kdsClient client.KDSClient, err error) {
			return client.New(zoneIP)
		}
	}

	for _, zone := range rt.Config().Mode.Global.Zones {
		log := kdsGlobalLog.WithValues("zoneIP", zone.Remote)
		dataplaneSink := client.NewKDSSink(log, rt.Config().Mode.Global.LBAddress, consumedTypes,
			clientFactory(zone.Remote.Address), Callbacks(syncStore, rt.Config().Store.Type == store.KubernetesStore, zone))
		if err := rt.Add(component.NewResilientComponent(log, dataplaneSink)); err != nil {
			return err
		}
	}
	return nil
}

func SetupServer(rt runtime.Runtime) error {
	hasher, cache := kds_server.NewXdsContext(kdsGlobalLog)
	generator := kds_server.NewSnapshotGenerator(rt, providedTypes, filter)
	versioner := kds_server.NewVersioner()
	reconciler := kds_server.NewReconciler(hasher, cache, generator, versioner)
	syncTracker := kds_server.NewSyncTracker(kdsGlobalLog, reconciler, rt.Config().KDSServer.RefreshInterval)
	callbacks := util_xds.CallbacksChain{
		util_xds.LoggingCallbacks{Log: kdsGlobalLog},
		syncTracker,
	}
	srv := kds_server.NewServer(cache, callbacks, kdsGlobalLog, "global")
	return rt.Add(kds_server.NewKDSServer(srv, *rt.Config().KDSServer))
}

// filter excludes Dataplanes and Ingresses from 'clusterID' cluster
func filter(clusterID string, r model.Resource) bool {
	if r.GetType() != mesh.DataplaneType {
		return true
	}
	if !r.(*mesh.DataplaneResource).Spec.IsIngress() {
		return false
	}
	return clusterID != util.ZoneTag(r)
}

func Callbacks(s sync_store.ResourceSyncer, k8sStore bool, cfg *mode.ZoneConfig) *client.Callbacks {
	return &client.Callbacks{
		OnResourcesReceived: func(clusterName string, rs model.ResourceList) error {
			if len(rs.GetItems()) == 0 {
				return nil
			}
			util.AddPrefixToNames(rs.GetItems(), clusterName)
			// if type of Store is Kubernetes then we want to store upstream resources in dedicated Namespace.
			// KubernetesStore parses Name and considers substring after the last dot as a Namespace's Name.
			if k8sStore {
				util.AddSuffixToNames(rs.GetItems(), "default")
			}
			adjustIngressNetworking(cfg, rs)
			return s.Sync(rs, sync_store.PrefilterBy(func(r model.Resource) bool {
				return strings.HasPrefix(r.GetMeta().GetName(), fmt.Sprintf("%s.", clusterName))
			}))
		},
	}
}

func adjustIngressNetworking(cfg *mode.ZoneConfig, rs model.ResourceList) {
	if rs.GetItemType() != mesh.DataplaneType {
		return
	}
	host, portStr, _ := net.SplitHostPort(cfg.Ingress.Address) // err is ignored because we rely on the config validation
	port, _ := strconv.ParseUint(portStr, 10, 32)
	for _, r := range rs.GetItems() {
		if !r.(*mesh.DataplaneResource).Spec.IsIngress() {
			continue
		}
		r.(*mesh.DataplaneResource).Spec.Networking.Address = host
		r.(*mesh.DataplaneResource).Spec.Networking.Inbound[0].Port = uint32(port)
	}
}
