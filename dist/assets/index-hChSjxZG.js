import{L as a,D as s,o as l}from"./el-icon-TdbfcGnA.js";import{E as e,a as i}from"./el-tab-pane-1qr3iu7_.js";import{E as n,a as t,b as o}from"./el-col-CKooeGaj.js";import{l as u,c as d,D as c,M as m,u as r,K as f,G as _,o as v,a8 as p,aL as b,aS as g,aR as D,_ as y,r as h,ae as k,f as x,aT as j,ai as C,A as w,E,F as L,aa as V,B as z,L as I,aO as M}from"./index-hwwiOv53.js";import"./index-Wlw2hyad.js";import"./index-rbGaf3qG.js";import"./use-form-item-U2th8Ig_.js";const T={class:"song_info_head"},U=["src"],q={class:"details_right"},A={class:"details_name"},B={class:"details_info fs12"},F={class:"details_song fs12"},G={class:"details_btn"},K=y(u({__name:"index",props:{albumData:{}},setup:s=>(s,l)=>{var e,i,t;const o=n;return v(),d("div",T,[c("img",{src:null==(e=s.albumData)?void 0:e.picUrl,alt:""},null,8,U),c("div",q,[c("div",A,m(null==(i=s.albumData)?void 0:i.name),1),c("div",B,m(s.albumData.artist.name),1),c("div",F,[c("span",null,m(r(a)(null==(t=s.albumData)?void 0:t.publishTime)),1)]),c("div",G,[f(o,{type:"success",icon:r(b),round:""},{default:_((()=>[p("播放全部")])),_:1},8,["icon"]),f(o,{icon:r(g),round:""},{default:_((()=>[p("收藏")])),_:1},8,["icon"]),f(o,{icon:r(D),circle:""},null,8,["icon"])])])])}}),[["__scopeId","data-v-f5cacc00"]]),N={key:0},O={class:"song_list"},R={class:"df"},S={class:"music_mv"},$={style:{display:"flex","margin-left":"5px"}},H={style:{display:"flex","align-items":"center"}},J=y(u({__name:"index",setup(a){const n=h(),u=h([]),g=k(),D=Number(g.query.id),y=h("song"),T=h();x((async()=>{const{album:a,songs:s}=await j(D);n.value=a,u.value=s,T.value=s.length}));const{playMusic:U}=C();return(a,g)=>{const h=t,k=o,x=l,j=i,C=e;return v(),d(L,null,[n.value?(v(),d("div",N,[f(K,{albumData:n.value},null,8,["albumData"])])):w("",!0),n.value?(v(),E(C,{key:1,modelValue:y.value,"onUpdate:modelValue":g[0]||(g[0]=a=>y.value=a),class:"demo-tabs"},{default:_((()=>[f(j,{label:`歌曲 ${T.value}`,name:"song"},{default:_((()=>[f(k,{class:"fs14 mt20"},{default:_((()=>[f(h,{span:14},{default:_((()=>[p("歌曲")])),_:1}),f(h,{span:8},{default:_((()=>[p("专辑")])),_:1}),f(h,{span:2},{default:_((()=>[p("时长")])),_:1})])),_:1}),c("div",O,[(v(!0),d(L,null,V(u.value,((a,l)=>(v(),E(k,{class:z(["h50 song_info",{playing:r(D)===a.id}]),key:l,onDblclick:s=>r(U)(a.id)},{default:_((()=>[f(h,{class:"music_song lh50",span:14},{default:_((()=>[c("div",R,[c("div",S,[c("div",null,m(a.name),1),c("div",$,[f(x,{class:"mv_hover",size:20,color:"#000",onClick:I((s=>{a.id}),["stop"])},{default:_((()=>[f(r(M))])),_:2},1032,["onClick"])])]),c("div",H,[f(x,{class:"icon",size:20,color:"#fff",onClick:I((s=>r(U)(a.id)),["stop"])},{default:_((()=>[f(r(b))])),_:2},1032,["onClick"])])])])),_:2},1024),f(h,{class:"collection lh50",span:8},{default:_((()=>[p(m(a.al.name),1)])),_:2},1024),f(h,{class:"duration lh50",span:2},{default:_((()=>[p(m(r(s)(a.dt/1e3)),1)])),_:2},1024)])),_:2},1032,["onDblclick","class"])))),128))])])),_:1},8,["label"]),f(j,{label:"评论",name:"review"},{default:_((()=>[p("review")])),_:1}),f(j,{label:"专辑详情",name:"albumDetails"},{default:_((()=>[p("albumDetails")])),_:1})])),_:1},8,["modelValue"])):w("",!0)],64)}}}),[["__scopeId","data-v-27340a09"]]);export{J as default};
