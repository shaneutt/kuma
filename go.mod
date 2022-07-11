module github.com/kumahq/kuma

go 1.16

require (
	cirello.io/pglock v1.8.0
	github.com/Masterminds/semver/v3 v3.1.1
	github.com/Masterminds/sprig v2.22.0+incompatible
	github.com/Nordix/simple-ipam v1.0.0
	github.com/asaskevich/govalidator v0.0.0-20210307081110-f21760c49a8d
	github.com/dgrijalva/jwt-go v3.2.0+incompatible
	github.com/emicklei/go-restful v2.15.0+incompatible
	github.com/envoyproxy/go-control-plane v0.10.2-0.20220325020618-49ff273808a1
	github.com/envoyproxy/protoc-gen-validate v0.6.2
	github.com/ghodss/yaml v1.0.0
	github.com/go-errors/errors v1.0.2-0.20180813162953-d98b870cc4e0
	github.com/go-git/go-git/v5 v5.4.2
	github.com/go-kit/kit v0.11.0
	github.com/go-logr/logr v1.2.3
	github.com/go-logr/zapr v1.2.0
	github.com/golang-migrate/migrate/v4 v4.14.1
	github.com/golang/protobuf v1.5.2
	github.com/grpc-ecosystem/go-grpc-prometheus v1.2.0
	github.com/gruntwork-io/terratest v0.30.15
	github.com/hoisie/mustache v0.0.0-20160804235033-6375acf62c69
	github.com/iancoleman/orderedmap v0.2.0
	github.com/kelseyhightower/envconfig v1.4.0
	github.com/kumahq/kuma/pkg/transparentproxy/istio v0.0.0-00010101000000-000000000000
	github.com/kumahq/protoc-gen-kumadoc v0.1.7
	github.com/lib/pq v1.10.6
	github.com/miekg/dns v1.1.43
	github.com/onsi/ginkgo v1.16.5
	github.com/onsi/gomega v1.17.0
	github.com/patrickmn/go-cache v2.1.0+incompatible
	github.com/pkg/errors v0.9.1
	github.com/prometheus/client_golang v1.12.2
	github.com/prometheus/client_model v0.2.0
	github.com/prometheus/common v0.32.1
	github.com/prometheus/prometheus v0.0.0-00010101000000-000000000000
	github.com/sethvargo/go-retry v0.1.0
	github.com/slok/go-http-metrics v0.9.0
	github.com/soheilhy/cmux v0.1.5
	github.com/spf13/cobra v1.4.0
	github.com/spiffe/go-spiffe v0.0.0-20190820222348-6adcf1eecbcc
	github.com/spiffe/spire v1.3.2
	go.uber.org/multierr v1.7.0
	go.uber.org/zap v1.21.0
	golang.org/x/net v0.0.0-20220624214902-1bab6f366d9e
	golang.org/x/sys v0.0.0-20220624220833-87e55d714810
	golang.org/x/time v0.0.0-20220411224347-583f2d630306
	google.golang.org/genproto v0.0.0-20220624142145-8cd45d7dbd1f
	google.golang.org/grpc v1.47.0
	google.golang.org/protobuf v1.28.0
	gopkg.in/natefinch/lumberjack.v2 v2.0.0
	gopkg.in/yaml.v2 v2.4.0
	helm.sh/helm/v3 v3.3.4
	k8s.io/api v0.23.6
	k8s.io/apiextensions-apiserver v0.23.5
	k8s.io/apimachinery v0.23.6
	k8s.io/client-go v0.23.6
	k8s.io/utils v0.0.0-20211116205334-6203023598ed
	sigs.k8s.io/controller-runtime v0.11.2
	sigs.k8s.io/testing_frameworks v0.1.2
)

replace (
	github.com/kumahq/kuma/pkg/transparentproxy/istio => ./pkg/transparentproxy/istio
	github.com/prometheus/prometheus => ./vendored/github.com/prometheus/prometheus
)
