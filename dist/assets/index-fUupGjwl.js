import{E as a}from"./el-icon-lLev9OLe.js";import{a as s,E as l}from"./el-tab-pane-F7bpWYkm.js";import{E as e,a as i}from"./el-col-o0kNqxtr.js";import{h as t,c as n,y as o,z as d,u,t as c,m,o as r,ac as f,aB as p,aC as v,az as _,_ as b,r as g,a3 as y,a as j,f as x,b7 as D,a7 as h,A as k,l as C,Z as w,$ as z,s as E,M as V,aT as q}from"./index-qsd7PtRw.js";import{E as I}from"./el-button-M2FsBp1g.js";import{b as M,c as N}from"./index-EHufyRH-.js";import"./error-lyDbv7Kx.js";import"./event-DkVV3hnh.js";import"./index-cN2GK1zA.js";import"./index-5mjrU7A1.js";import"./use-global-config-CwZlgeMO.js";import"./use-form-item--ao8u_XJ.js";const T={class:"song_info_head"},U=["src"],$={class:"details_right"},A={class:"details_name"},B={class:"details_info fs12"},Z={class:"details_song fs12"},F={class:"details_btn"},G=b(t({__name:"index",props:{albumData:{}},setup:a=>(a,s)=>{var l,e,i;const t=I;return r(),n("div",T,[o("img",{src:null==(l=a.albumData)?void 0:l.picUrl,alt:""},null,8,U),o("div",$,[o("div",A,d(null==(e=a.albumData)?void 0:e.name),1),o("div",B,d(a.albumData.artist.name),1),o("div",Z,[o("span",null,d(u(M)(null==(i=a.albumData)?void 0:i.publishTime)),1)]),o("div",F,[c(t,{type:"success",icon:u(p),round:""},{default:m((()=>[f("播放全部")])),_:1},8,["icon"]),c(t,{icon:u(v),round:""},{default:m((()=>[f("收藏")])),_:1},8,["icon"]),c(t,{icon:u(_),circle:""},null,8,["icon"])])])])}}),[["__scopeId","data-v-f5cacc00"]]),H={style:{padding:"20px"}},J={key:0},K={class:"song_list"},L={class:"df"},O={class:"music_mv"},P={style:{display:"flex","margin-left":"5px"}},Q={style:{display:"flex","align-items":"center"}},R=b(t({__name:"index",setup(t){const v=g(),_=g([]),b=y(),I=Number(b.query.id),M=g("song"),T=g();j((async()=>{U(I)})),x((()=>b.query.id),((a,s)=>{a!==s&&U(Number(a))}));const U=async a=>{const{album:s,songs:l}=await D(a);v.value=s,_.value=l,T.value=l.length},{playMusic:$}=h();return(t,b)=>{const g=e,y=i,j=a,x=l,D=s;return r(),n("div",H,[v.value?(r(),n("div",J,[c(G,{albumData:v.value},null,8,["albumData"])])):k("",!0),v.value?(r(),C(D,{key:1,modelValue:M.value,"onUpdate:modelValue":b[0]||(b[0]=a=>M.value=a),class:"demo-tabs"},{default:m((()=>[c(x,{label:`歌曲 ${T.value}`,name:"song"},{default:m((()=>[c(y,{class:"fs14 mt20"},{default:m((()=>[c(g,{span:14},{default:m((()=>[f("歌曲")])),_:1}),c(g,{span:8},{default:m((()=>[f("专辑")])),_:1}),c(g,{span:2},{default:m((()=>[f("时长")])),_:1})])),_:1}),o("div",K,[(r(!0),n(w,null,z(_.value,((a,s)=>(r(),C(y,{class:E(["h50 song_info",{playing:u(I)===a.id}]),key:s,onDblclick:s=>u($)(a.id)},{default:m((()=>[c(g,{class:"music_song lh50",span:14},{default:m((()=>[o("div",L,[o("div",O,[o("div",null,d(a.name),1),o("div",P,[c(j,{class:"mv_hover",size:20,color:"#000",onClick:V((s=>{a.id}),["stop"])},{default:m((()=>[c(u(q))])),_:2},1032,["onClick"])])]),o("div",Q,[c(j,{class:"icon",size:20,color:"#fff",onClick:V((s=>u($)(a.id)),["stop"])},{default:m((()=>[c(u(p))])),_:2},1032,["onClick"])])])])),_:2},1024),c(g,{class:"collection lh50",span:8},{default:m((()=>[f(d(a.al.name),1)])),_:2},1024),c(g,{class:"duration lh50",span:2},{default:m((()=>[f(d(u(N)(a.dt/1e3)),1)])),_:2},1024)])),_:2},1032,["onDblclick","class"])))),128))])])),_:1},8,["label"]),c(x,{label:"评论",name:"review"},{default:m((()=>[f("review")])),_:1}),c(x,{label:"专辑详情",name:"albumDetails"},{default:m((()=>[f("albumDetails")])),_:1})])),_:1},8,["modelValue"])):k("",!0)])}}}),[["__scopeId","data-v-96f50237"]]);export{R as default};
