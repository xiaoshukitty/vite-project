import{a4 as a,r as e,ak as t,h as s,o as i,c as n,z as l,_ as c,al as u,am as o,an as r,ao as v,ap as m,aq as d,a2 as g,Y as p,a as D,t as y,y as M,Z as _,$ as h,M as f,u as x}from"./index-qsd7PtRw.js";import{P as w}from"./index-TM552BGQ.js";import{r as S}from"./index-EHufyRH-.js";const k=a("BannerStore",(()=>{const a=e([]);return{banners:a,getBanners:async()=>{a.value.length||(a.value=await t())}}})),R=c(s({__name:"index",props:{title:{}},setup:a=>(a,e)=>(i(),n("h2",null,l(a.title),1))}),[["__scopeId","data-v-954d9e1f"]]),j=a("useMusicStore",(()=>{const a=e([]),t=e([]),s=e([]),i=e([]),n=e([]),l=e([]);return{exclusivePlaylistData:a,getExclusivePlaylistData:async()=>{if(a.value.length)return;let e=await u();a.value=S(e,10)},recommendedMusicData:t,getRecommendedMusicData:async()=>{t.value.length||(t.value=await o())},recommendedMvData:s,getRecommendedMvData:async()=>{s.value.length||(s.value=await r())},exclusiveMusicData:i,getExclusiveMusicData:async()=>{i.value.length||(i.value=await v(4))},recommendationStationData:n,getRecommendationStationData:async()=>{i.value.length||(n.value=await m())},officialListData:l,getOfficialListData:async()=>{l.value.length||(l.value=await d())}}})),P={class:"mv"},b={class:"mv_list"},q=["onClick"],B=c(s({__name:"index",setup(a){const e=g(),{recommendedMvData:t}=p(j()),{getRecommendedMvData:s}=j();return D((async()=>{await s()})),(a,s)=>(i(),n("div",P,[y(R,{title:"推荐MV"}),M("div",b,[(i(!0),n(_,null,h(x(t),(a=>(i(),n("div",{class:"mv_item",key:a.id,onClick:f((t=>{return s="mvDetail",i=a.id,void e.push({path:s,query:{id:i}});var s,i}),["stop"])},[y(w,{imgSrc:a.picUrl},null,8,["imgSrc"]),M("div",null,l(a.name),1),M("div",null,l(a.artistName),1)],8,q)))),128))])]))}}),[["__scopeId","data-v-7c7b2f0e"]]);export{B as M,R as _,j as a,k as u};
