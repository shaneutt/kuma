(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9598d86e"],{"59e8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"circuit-breakers"},[a("FrameSkeleton",[a("DataOverview",{attrs:{"page-size":t.pageSize,"has-error":t.hasError,"is-loading":t.isLoading,"empty-state":t.empty_state,"display-data-table":!0,"table-data":t.tableData,"table-data-is-empty":t.tableDataIsEmpty,"table-data-function-text":"View","table-data-row":"name"},on:{tableAction:t.tableAction,reloadData:t.loadData}},[a("template",{slot:"pagination"},[a("Pagination",{attrs:{"has-previous":t.previous.length>0,"has-next":t.hasNext},on:{next:t.goToNextPage,previous:t.goToPreviousPage}})],1)],2),!1===t.isEmpty?a("Tabs",{attrs:{"has-error":t.hasError,"is-loading":t.isLoading,tabs:t.tabs,"tab-group-title":t.tabGroupTitle,"initial-tab-override":"overview"}},[a("template",{slot:"overview"},[a("LabelList",{attrs:{"has-error":t.entityHasError,"is-loading":t.entityIsLoading,"is-empty":t.entityIsEmpty}},[a("div",[a("ul",t._l(t.entity,(function(e,i){return a("li",{key:i},[a("h4",[t._v(t._s(i))]),a("p",[t._v("\n                  "+t._s(e)+"\n                ")])])})),0)])])],1),a("template",{slot:"yaml"},[a("YamlView",{attrs:{lang:"yaml",title:t.entityOverviewTitle,"has-error":t.entityHasError,"is-loading":t.entityIsLoading,"is-empty":t.entityIsEmpty,content:t.rawEntity}})],1)],2):t._e()],1)],1)},n=[],s=a("75fc"),r=(a("7f7f"),a("d7c2")),o=a("8218"),l=a("ad2f"),u=a("1d10"),c=a("1799"),h=a("2778"),p=a("251b"),y=a("ff9d"),m=a("0ada"),f={name:"FaultInjections",metaInfo:{title:"Fault Injections"},components:{FrameSkeleton:u["a"],Pagination:c["a"],DataOverview:h["a"],Tabs:p["a"],YamlView:y["a"],LabelList:m["a"]},mixins:[l["a"],o["a"]],data:function(){return{isLoading:!0,isEmpty:!1,hasError:!1,entityIsLoading:!0,entityIsEmpty:!1,entityHasError:!1,tableDataIsEmpty:!1,empty_state:{title:"No Data",message:"There are no Circuit Breakers present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Name",key:"name"},{label:"Mesh",key:"mesh"},{label:"Type",key:"type"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#yaml",title:"YAML"}],entity:[],rawEntity:null,firstEntity:null,pageSize:this.$pageSize,pageOffset:null,next:null,hasNext:!1,previous:[]}},computed:{tabGroupTitle:function(){var t=this.entity;return t?"Circuit Breaker: ".concat(t.name):null},entityOverviewTitle:function(){var t=this.entity;return t?"Entity Overview for ".concat(t.name):null},formattedRawEntity:function(){var t=this.formatForCLI(this.rawEntity);return t}},watch:{$route:function(t,e){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){this.loadData()},goToPreviousPage:function(){this.pageOffset=this.previous.pop(),this.next=null,this.loadData()},goToNextPage:function(){this.previous.push(this.pageOffset),this.pageOffset=this.next,this.next=null,this.loadData()},tableAction:function(t){var e=t;this.$store.dispatch("updateSelectedTab",this.tabs[0].hash),this.$store.dispatch("updateSelectedTableRow",e.name),this.getEntity(e)},loadData:function(){var t=this;this.isLoading=!0;var e=this.$route.params.mesh,a={size:this.pageSize,offset:this.pageOffset},i="all"===e?this.$api.getAllCircuitBreakers(a):this.$api.getAllCircuitBreakersFromMesh(e),n=function(){return i.then((function(e){if(e.items.length>0){var a=e.items;t.sortEntities(a),t.firstEntity=a[0].name,t.getEntity(a[0]),t.$store.dispatch("updateSelectedTableRow",t.firstEntity),t.tableData.data=Object(s["a"])(a),t.tableDataIsEmpty=!1,t.isEmpty=!1}else t.tableData.data=[],t.tableDataIsEmpty=!0,t.isEmpty=!0,t.getEntity(null)})).catch((function(e){t.hasError=!0,t.isEmpty=!0,console.error(e)})).finally((function(){setTimeout((function(){t.isLoading=!1}),"500")}))};n()},getEntity:function(t){var e=this;this.entityIsLoading=!0,this.entityIsEmpty=!1;var a=this.$route.params.mesh;if(t&&null!==t){var i="all"===a?t.mesh:a;return this.$api.getCircuitBreaker(i,t.name).then((function(t){if(t){var a=["type","name","mesh"];e.entity=Object(r["b"])(t,a),e.rawEntity=t}else e.entity=null,e.entityIsEmpty=!0})).catch((function(t){e.entityHasError=!0,console.error(t)})).finally((function(){setTimeout((function(){e.entityIsLoading=!1}),"500")}))}setTimeout((function(){e.entityIsEmpty=!0,e.entityIsLoading=!1}),"500")}}},d=f,g=a("2877"),v=Object(g["a"])(d,i,n,!1,null,null,null);e["default"]=v.exports},ad2f:function(t,e,a){"use strict";var i=a("e80b"),n=a.n(i);e["a"]={methods:{formatForCLI:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:'" | kumactl apply -f -',a='echo "',i=n()(t);return"".concat(a).concat(i).concat(e)}}}}}]);