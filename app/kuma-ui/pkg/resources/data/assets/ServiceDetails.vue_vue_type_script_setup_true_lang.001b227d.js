import{d as x,u as w,j as h,s as E,e as y,f as e,a as f,w as $,m as n,c as u,n as S,t as c,F as N,h as R,r as D,x as C,y as T,o as i,b as q,_ as B,cC as O,p as A,i as g,k as I,K as b}from"./index.04875eef.js";import{E as F}from"./EntityTag.00bbd1b8.js";import{E as L}from"./EntityURLControl.4f8a12bf.js";import{Y as V}from"./YamlView.eaa3134f.js";import{_ as K}from"./EmptyBlock.vue_vue_type_script_setup_true_lang.0fcd7b43.js";import{E as M}from"./ErrorBlock.08062bd2.js";import{_ as U}from"./LoadingBlock.vue_vue_type_script_setup_true_lang.4361c91d.js";const p=s=>(C("data-v-4b293ec8"),s=s(),T(),s),Y={class:"entity-summary entity-section-list"},z={class:"entity-title"},G=p(()=>e("span",{class:"kutil-sr-only"},"Service:",-1)),H={class:"definition"},J=p(()=>e("span",null,"Mesh:",-1)),P={class:"definition"},Q=p(()=>e("span",null,"Address:",-1)),W={class:"definition"},X=p(()=>e("span",null,"TLD:",-1)),Z={key:0},ee=p(()=>e("h4",null,"Tags",-1)),te={class:"tag-list"},se=x({__name:"ExternalServiceDetails",props:{externalService:{type:Object,required:!0}},setup(s){const t=s,o=w(),a=h(()=>({name:"external-service-detail-view",params:{service:t.externalService.name,mesh:t.externalService.mesh}})),r=h(()=>Object.entries(t.externalService.tags).map(([_,d])=>({label:_,value:d}))),l=h(()=>E(t.externalService));return(_,d)=>{const v=D("router-link");return i(),y("div",Y,[e("h3",z,[G,f(v,{to:n(a)},{default:$(()=>[q(c(s.externalService.name),1)]),_:1},8,["to"]),n(o).name!==n(a).name?(i(),u(L,{key:0,route:n(a)},null,8,["route"])):S("",!0)]),e("section",null,[e("div",H,[J,e("span",null,c(s.externalService.mesh),1)]),e("div",P,[Q,e("span",null,c(t.externalService.networking.address),1)]),e("div",W,[X,e("span",null,c(t.externalService.networking.tls.enabled?"Enabled":"Disabled"),1)])]),n(r).length>0?(i(),y("section",Z,[ee,e("div",te,[(i(!0),y(N,null,R(n(r),(m,j)=>(i(),u(F,{key:j,tag:m},null,8,["tag"]))),128))])])):S("",!0),f(V,{id:"code-block-external-service",content:n(l),"is-searchable":""},null,8,["content"])])}}});const ne=B(se,[["__scopeId","data-v-4b293ec8"]]),k=s=>(C("data-v-7f3dca86"),s=s(),T(),s),ae={class:"entity-summary entity-section-list"},ie={class:"entity-title"},re=k(()=>e("span",{class:"kutil-sr-only"},"Service:",-1)),ce={class:"definition"},oe=k(()=>e("span",null,"Mesh:",-1)),le={class:"definition"},ue=k(()=>e("span",null,"Data planes:",-1)),_e=x({__name:"ServiceInsightDetails",props:{serviceInsight:{type:Object,required:!0}},setup(s){const t=s,o=w(),a=h(()=>({name:"service-insight-detail-view",params:{service:t.serviceInsight.name,mesh:t.serviceInsight.mesh}})),r=h(()=>O[t.serviceInsight.status]),l=h(()=>E(t.serviceInsight));return(_,d)=>{const v=D("router-link");return i(),y("div",ae,[e("h3",ie,[re,f(v,{to:n(a)},{default:$(()=>[q(c(s.serviceInsight.name),1)]),_:1},8,["to"]),e("div",{class:A(`status status--${n(r).appearance}`),"data-testid":"data-plane-status-badge"},c(n(r).title.toLowerCase()),3),n(o).name!==n(a).name?(i(),u(L,{key:0,route:n(a)},null,8,["route"])):S("",!0)]),e("section",null,[e("div",ce,[oe,e("span",null,c(s.serviceInsight.mesh),1)]),e("div",le,[ue,e("span",null,"Total: "+c(t.serviceInsight.dataplanes.total)+" (online: "+c(t.serviceInsight.dataplanes.online)+")",1)])]),f(V,{id:"code-block-service-insight",content:n(l),"is-searchable":""},null,8,["content"])])}}});const de=B(_e,[["__scopeId","data-v-7f3dca86"]]),Se=x({__name:"ServiceDetails",props:{type:{type:String,required:!0},name:{type:String,required:!0},mesh:{type:String,required:!0}},setup(s){const t=s,o=g(null),a=g(null),r=g(!0),l=g(null);I(()=>t.mesh,function(){_()}),I(()=>t.name,function(){_()}),_();async function _(){r.value=!0,l.value=null,o.value=null,a.value=null;const d=t.mesh,v=t.name;try{t.type==="ServiceInsight"?o.value=await b.getServiceInsight({mesh:d,name:v}):a.value=await b.getExternalService({mesh:d,name:v})}catch(m){m instanceof Error?l.value=m:console.error(m)}finally{r.value=!1}}return(d,v)=>r.value?(i(),u(U,{key:0})):l.value!==null?(i(),u(M,{key:1,error:l.value},null,8,["error"])):o.value!==null?(i(),u(de,{key:2,"service-insight":o.value},null,8,["service-insight"])):a.value!==null?(i(),u(ne,{key:3,"external-service":a.value},null,8,["external-service"])):(i(),u(K,{key:4}))}});export{Se as _};