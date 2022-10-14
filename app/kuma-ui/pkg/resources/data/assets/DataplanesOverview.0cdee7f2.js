import{_ as v,a5 as O,K as g,Z as y,cR as x,c as w,w as l,r as s,o as _,a as i,e as u,f as e,t as b,p as P}from"./index.04875eef.js";import{L as N}from"./LoadingBox.98c7c1f7.js";import{O as k}from"./OnboardingNavigation.10db69d1.js";import{O as B,a as L}from"./OnboardingPage.0d0494e0.js";const T={name:"DataplanesOverview",components:{OnboardingNavigation:k,OnboardingHeading:B,OnboardingPage:L,LoadingBox:N},metaInfo(){return{title:this.title}},data(){return{productName:O,tableHeaders:[{label:"Mesh",key:"mesh"},{label:"Name",key:"name"},{label:"Status",key:"status"}],tableData:{total:0,data:[]},timeout:null}},computed:{title(){return this.tableData.data.length?"Success":"Waiting for DPPs"},description(){return this.tableData.data.length?"The following data plane proxies (DPPs) are connected to the control plane:":null}},created(){this.getAllDataplanes()},beforeUnmount(){clearTimeout(this.timeout)},methods:{async getAllDataplanes(){let r=!1;const c=[];try{const p=(await g.getAllDataplanes({size:10})).items;for(let t=0;t<p.length;t++){const{name:a,mesh:n}=p[t],{status:o}=await g.getDataplaneOverviewFromMesh({mesh:n,name:a}).then(h=>y(h.dataplaneInsight));o===x&&(r=!0),c.push({status:o,name:a,mesh:n})}}catch(d){console.error(d)}this.tableData.data=c,this.tableData.total=this.tableData.data.length,r&&(this.timeout=setTimeout(()=>{this.getAllDataplanes()},1e3))}}},A={key:0,class:"justify-center flex my-4"},C={key:1},F={class:"flex justify-center mt-10 mb-16 pb-16"},H={class:"w-full sm:w-3/5 p-4"},I={class:"font-bold mb-4"},K=e("span",{class:"entity-status__dot"},null,-1),S={class:"entity-status__label"};function E(r,c,d,p,t,a){const n=s("OnboardingHeading"),o=s("LoadingBox"),h=s("KTable"),f=s("OnboardingNavigation"),D=s("OnboardingPage");return _(),w(D,null,{header:l(()=>[i(n,{title:a.title,description:a.description},null,8,["title","description"])]),content:l(()=>[t.tableData.data.length?(_(),u("div",C,[e("div",F,[e("div",H,[e("p",I," Found "+b(t.tableData.data.length)+" DPPs: ",1),i(h,{class:"onboarding-dataplane-table",fetcher:()=>t.tableData,headers:t.tableHeaders,"disable-pagination":"","is-small":""},{status:l(({rowValue:m})=>[e("div",{class:P(["entity-status",{"is-offline":m.toLowerCase()==="offline"||m===!1}])},[K,e("span",S,b(m),1)],2)]),_:1},8,["fetcher","headers"])])])])):(_(),u("div",A,[i(o)]))]),navigation:l(()=>[i(f,{"next-step":"onboarding-completed","previous-step":"onboarding-add-services-code","should-allow-next":t.tableData.data.length>0},null,8,["should-allow-next"])]),_:1})}const U=v(T,[["render",E]]);export{U as default};