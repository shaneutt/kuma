import{d as g,S as l,f,o,k as s,a as d,I as v,u as r,w as c,l as a,t,y as i,F as E,n as B,b as u,K as w,R as b,c as S,T as h,A as x,B as I,C}from"./index.ea0d4a24.js";const k=e=>(x("data-v-34e1ea64"),e=e(),I(),e),K={class:"error-block"},N={class:"card-icon mb-3"},V=k(()=>a("p",null,"An error has occurred while trying to load this data.",-1)),A=k(()=>a("summary",null,"Details",-1)),D={key:0},F={key:0,class:"badge-list"},T=g({__name:"ErrorBlock",props:{error:{type:[Error,l],required:!1,default:null}},setup(e){const n=e,_=f(()=>n.error instanceof Error),p=f(()=>n.error instanceof l?n.error.causes:[]);return(j,q)=>(o(),s("div",K,[d(r(b),{"cta-is-hidden":""},v({title:c(()=>[a("div",N,[d(r(w),{class:"kong-icon--centered",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"42"})]),V]),_:2},[r(_)||r(p).length>0?{name:"message",fn:c(()=>[a("details",null,[A,r(_)?(o(),s("p",D,t(e.error.message),1)):i("",!0),a("ul",null,[(o(!0),s(E,null,B(r(p),(m,y)=>(o(),s("li",{key:y},[a("b",null,[a("code",null,t(m.field),1)]),u(": "+t(m.message),1)]))),128))])])]),key:"0"}:void 0]),1024),e.error instanceof r(l)?(o(),s("div",F,[e.error.code?(o(),S(r(h),{key:0,appearance:"warning"},{default:c(()=>[u(t(e.error.code),1)]),_:1})):i("",!0),d(r(h),{appearance:"warning"},{default:c(()=>[u(t(e.error.statusCode),1)]),_:1})])):i("",!0)]))}});const L=C(T,[["__scopeId","data-v-34e1ea64"]]);export{L as E};