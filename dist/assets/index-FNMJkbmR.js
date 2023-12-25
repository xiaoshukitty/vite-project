import{j as e,k as a,n as t,F as l,u as s,o as n,_ as i,z as o,w as r,G as u}from"./el-icon-GoL-NjNe.js";import{t as c,u as v,a as d,_ as m,P as p,M as h}from"./index-LVFEk8Oh.js";import{n as f,r as g,d as y,u as I,w as _,s as k,f as b,h as w,p as C,g as x,k as M,aq as S,l as E,o as H,c as L,D as N,E as T,G as B,B as D,L as A,ar as P,K as j,z as R,y as V,T as $,A as O,as as z,C as F,O as G,F as K,aa as U,M as W,Q as q,R as Q,at as X,a9 as Y,_ as J,ai as Z,ak as ee,al as ae}from"./index-oPTR38Ik.js";import{u as te}from"./index-QCE77Mdp.js";import"./index-E3BcS86H.js";const le=e({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),se={change:(e,t)=>[e,t].every(a)},ne=Symbol("carouselContextKey"),ie=(e,a,s)=>{const{children:n,addChild:i,removeChild:o}=te(x(),"ElCarouselItem"),r=f(),u=g(-1),v=g(null),d=g(!1),m=g(),p=g(0),h=g(!0),E=y((()=>"never"!==e.arrow&&!I(N))),H=y((()=>n.value.some((e=>e.props.label.toString().length>0)))),L=y((()=>"card"===e.type)),N=y((()=>"vertical"===e.direction)),T=y((()=>"auto"!==e.height?{height:e.height}:{height:`${p.value}px`,overflow:"hidden"})),B=c((e=>{R(e)}),300,{trailing:!0}),D=c((a=>{!function(a){"hover"===e.trigger&&a!==u.value&&(u.value=a)}(a)}),300);function A(){v.value&&(clearInterval(v.value),v.value=null)}function P(){e.interval<=0||!e.autoplay||v.value||(v.value=setInterval((()=>j()),e.interval))}const j=()=>{u.value<n.value.length-1?u.value=u.value+1:e.loop&&(u.value=0)};function R(a){if(M(a)){const e=n.value.filter((e=>e.props.name===a));e.length>0&&(a=n.value.indexOf(e[0]))}if(a=Number(a),Number.isNaN(a)||a!==Math.floor(a))return;const t=n.value.length,l=u.value;u.value=a<0?e.loop?t-1:0:a>=t?e.loop?0:t-1:a,l===u.value&&V(l),$()}function V(e){n.value.forEach(((a,t)=>{a.translateItem(t,u.value,e)}))}function $(){A(),e.pauseOnHover||P()}_((()=>u.value),((e,t)=>{V(t),h.value&&(e%=2,t%=2),t>-1&&a("change",e,t)})),_((()=>e.autoplay),(e=>{e?P():A()})),_((()=>e.loop),(()=>{R(u.value)})),_((()=>e.interval),(()=>{$()}));const O=k();return b((()=>{_((()=>n.value),(()=>{n.value.length>0&&R(e.initialIndex)}),{immediate:!0}),O.value=t(m.value,(()=>{V()})),P()})),w((()=>{A(),m.value&&O.value&&O.value.stop()})),C(ne,{root:m,isCardType:L,isVertical:N,items:n,loop:e.loop,addItem:i,removeItem:o,setActiveItem:R,setContainerHeight:function(a){"auto"===e.height&&(p.value=a)}}),{root:m,activeIndex:u,arrowDisplay:E,hasLabel:H,hover:d,isCardType:L,items:n,isVertical:N,containerStyle:T,isItemsTwoLength:h,handleButtonEnter:function(e){I(N)||n.value.forEach(((a,t)=>{e===function(e,a){var t,l,s,i;const o=I(n),r=o.length;if(0===r||!e.states.inStage)return!1;const u=a+1,c=a-1,v=r-1,d=o[v].states.active,m=o[0].states.active,p=null==(l=null==(t=o[u])?void 0:t.states)?void 0:l.active,h=null==(i=null==(s=o[c])?void 0:s.states)?void 0:i.active;return a===v&&m||p?"left":!!(0===a&&d||h)&&"right"}(a,t)&&(a.states.hover=!0)}))},handleButtonLeave:function(){I(N)||n.value.forEach((e=>{e.states.hover=!1}))},handleIndicatorClick:function(e){u.value=e},handleMouseEnter:function(){d.value=!0,e.pauseOnHover&&A()},handleMouseLeave:function(){d.value=!1,P()},setActiveItem:R,prev:function(){R(u.value-1)},next:function(){R(u.value+1)},PlaceholderItem:function(){var a;const t=null==(a=r.default)?void 0:a.call(r);if(!t)return null;const s=l(t).filter((e=>S(e)&&"ElCarouselItem"===e.type.name));return 2===(null==s?void 0:s.length)&&e.loop&&!L.value?(h.value=!0,s):(h.value=!1,null)},isTwoLengthShow:e=>!h.value||(u.value<=1?e<=1:e>1),throttledArrowClick:B,throttledIndicatorHover:D}},oe=["onMouseenter","onClick"],re={key:0},ue=E({name:"ElCarousel"});var ce=i(E({...ue,props:le,emits:se,setup(e,{expose:a,emit:t}){const l=e,{root:i,activeIndex:o,arrowDisplay:r,hasLabel:u,hover:c,isCardType:v,items:d,isVertical:m,containerStyle:p,handleButtonEnter:h,handleButtonLeave:f,handleIndicatorClick:g,handleMouseEnter:_,handleMouseLeave:k,setActiveItem:b,prev:w,next:C,PlaceholderItem:x,isTwoLengthShow:M,throttledArrowClick:S,throttledIndicatorHover:E}=ie(l,t),q=s("carousel"),Q=y((()=>{const e=[q.b(),q.m(l.direction)];return I(v)&&e.push(q.m("card")),e})),X=y((()=>{const e=[q.e("indicators"),q.em("indicators",l.direction)];return I(u)&&e.push(q.em("indicators","labels")),"outside"===l.indicatorPosition&&e.push(q.em("indicators","outside")),I(m)&&e.push(q.em("indicators","right")),e}));return a({setActiveItem:b,prev:w,next:C}),(e,a)=>(H(),L("div",{ref_key:"root",ref:i,class:D(I(Q)),onMouseenter:a[6]||(a[6]=A(((...e)=>I(_)&&I(_)(...e)),["stop"])),onMouseleave:a[7]||(a[7]=A(((...e)=>I(k)&&I(k)(...e)),["stop"]))},[N("div",{class:D(I(q).e("container")),style:G(I(p))},[I(r)?(H(),T($,{key:0,name:"carousel-arrow-left",persisted:""},{default:B((()=>[V(N("button",{type:"button",class:D([I(q).e("arrow"),I(q).em("arrow","left")]),onMouseenter:a[0]||(a[0]=e=>I(h)("left")),onMouseleave:a[1]||(a[1]=(...e)=>I(f)&&I(f)(...e)),onClick:a[2]||(a[2]=A((e=>I(S)(I(o)-1)),["stop"]))},[j(I(n),null,{default:B((()=>[j(I(P))])),_:1})],34),[[R,("always"===e.arrow||I(c))&&(l.loop||I(o)>0)]])])),_:1})):O("v-if",!0),I(r)?(H(),T($,{key:1,name:"carousel-arrow-right",persisted:""},{default:B((()=>[V(N("button",{type:"button",class:D([I(q).e("arrow"),I(q).em("arrow","right")]),onMouseenter:a[3]||(a[3]=e=>I(h)("right")),onMouseleave:a[4]||(a[4]=(...e)=>I(f)&&I(f)(...e)),onClick:a[5]||(a[5]=A((e=>I(S)(I(o)+1)),["stop"]))},[j(I(n),null,{default:B((()=>[j(I(z))])),_:1})],34),[[R,("always"===e.arrow||I(c))&&(l.loop||I(o)<I(d).length-1)]])])),_:1})):O("v-if",!0),j(I(x)),F(e.$slots,"default")],6),"none"!==e.indicatorPosition?(H(),L("ul",{key:0,class:D(I(X))},[(H(!0),L(K,null,U(I(d),((a,t)=>V((H(),L("li",{key:t,class:D([I(q).e("indicator"),I(q).em("indicator",e.direction),I(q).is("active",t===I(o))]),onMouseenter:e=>I(E)(t),onClick:A((e=>I(g)(t)),["stop"])},[N("button",{class:D(I(q).e("button"))},[I(u)?(H(),L("span",re,W(a.props.label),1)):O("v-if",!0)],2)],42,oe)),[[R,I(M)(t)]]))),128))],2)):O("v-if",!0)],34))}}),[["__file","carousel.vue"]]);const ve=e({name:{type:String,default:""},label:{type:[String,Number],default:""}}),de=(e,a)=>{const t=q(ne),l=x(),s=.83,n=g(),i=g(!1),r=g(0),u=g(1),c=g(!1),v=g(!1),d=g(!1),m=g(!1),{isCardType:p,isVertical:h}=t;const f=(e,a,l)=>{var i;const f=I(p),g=null!=(i=t.items.value.length)?i:Number.NaN,y=e===a;f||o(l)||(m.value=y||e===l),!y&&g>2&&t.loop&&(e=function(e,a,t){const l=t-1,s=t/2;return 0===a&&e===l?-1:a===l&&0===e?t:e<a-1&&a-e>=s?t+1:e>a+1&&e-a>=s?-2:e}(e,a,g));const _=I(h);c.value=y,f?(d.value=Math.round(Math.abs(e-a))<=1,r.value=function(e,a){var l,s;const n=I(h)?(null==(l=t.root.value)?void 0:l.offsetHeight)||0:(null==(s=t.root.value)?void 0:s.offsetWidth)||0;return d.value?n*(1.17*(e-a)+1)/4:e<a?-1.83*n/4:3.83*n/4}(e,a),u.value=I(c)?1:s):r.value=function(e,a,l){const s=t.root.value;return s?((l?s.offsetHeight:s.offsetWidth)||0)*(e-a):0}(e,a,_),v.value=!0,y&&n.value&&t.setContainerHeight(n.value.offsetHeight)};return b((()=>{t.addItem({props:e,states:Q({hover:i,translate:r,scale:u,active:c,ready:v,inStage:d,animating:m}),uid:l.uid,translateItem:f})})),X((()=>{t.removeItem(l.uid)})),{carouselItemRef:n,active:c,animating:m,hover:i,inStage:d,isVertical:h,translate:r,isCardType:p,scale:u,ready:v,handleItemClick:function(){if(t&&I(p)){const e=t.items.value.findIndex((({uid:e})=>e===l.uid));t.setActiveItem(e)}}}},me=E({name:"ElCarouselItem"});var pe=i(E({...me,props:ve,setup(e){const a=e,t=s("carousel"),{carouselItemRef:l,active:n,animating:i,hover:o,inStage:r,isVertical:u,translate:c,isCardType:v,scale:d,ready:m,handleItemClick:p}=de(a),h=y((()=>({transform:[`${"translate"+(I(u)?"Y":"X")}(${I(c)}px)`,`scale(${I(d)})`].join(" ")})));return(e,a)=>V((H(),L("div",{ref_key:"carouselItemRef",ref:l,class:D([I(t).e("item"),I(t).is("active",I(n)),I(t).is("in-stage",I(r)),I(t).is("hover",I(o)),I(t).is("animating",I(i)),{[I(t).em("item","card")]:I(v),[I(t).em("item","card-vertical")]:I(v)&&I(u)}]),style:G(I(h)),onClick:a[0]||(a[0]=(...e)=>I(p)&&I(p)(...e))},[I(v)?V((H(),L("div",{key:0,class:D(I(t).e("mask"))},null,2)),[[R,!I(n)]]):O("v-if",!0),F(e.$slots,"default")],6)),[[R,I(m)]])}}),[["__file","carousel-item.vue"]]);const he=r(ce,{CarouselItem:pe}),fe=u(pe),ge={class:"swiper"},ye=["src","onClick"],Ie=J(E({__name:"index",setup(e){const{getBanners:a}=v(),{banners:t}=Y(v());b((async()=>{await a()}));return(e,a)=>{const l=fe,s=he;return H(),L("div",ge,[j(s,{interval:2e3,type:"card",height:"250px",trigger:"click","pause-on-hover":!1,autoplay:!1},{default:B((()=>[(H(!0),L(K,null,U(I(t),(e=>(H(),T(l,{key:e.bannerId},{default:B((()=>[N("img",{class:"swiper_img",src:e.pic,alt:"",onClick:e=>{}},null,8,ye)])),_:2},1024)))),128))])),_:1})])}}}),[["__scopeId","data-v-fa860417"]]),_e={class:"exclusive_playlist"},ke={class:"block"},be={class:"block_item"},we={class:"text"},Ce=J(E({__name:"index",setup(e){const{exclusivePlaylistData:a}=Y(d()),{getExclusivePlaylistData:t}=d();return b((async()=>{await t()})),(e,t)=>(H(),L("div",_e,[j(m,{title:"专属歌单"}),N("div",ke,[(H(!0),L(K,null,U(I(a),((e,a)=>(H(),L("div",{class:"block_list",key:a},[N("div",be,[j(p,{imgSrc:e.picUrl},null,8,["imgSrc"])]),N("div",we,W(e.name),1)])))),128))])]))}}),[["__scopeId","data-v-2cd979ce"]]),xe={class:"RecommendedMusic"},Me={class:"music_list"},Se=["onDblclick"],Ee=["src"],He={class:"music_item_right"},Le=J(E({__name:"index",setup(e){const{recommendedMusicData:a}=Y(d()),{getRecommendedMusicData:t}=d(),{playMusic:l}=Z();return b((async()=>{await t()})),(e,t)=>(H(),L("div",xe,[j(m,{title:"推荐新音乐"}),N("div",Me,[(H(!0),L(K,null,U(I(a),(e=>(H(),L("div",{class:"music_item",key:e.id,onDblclick:a=>I(l)(e.id)},[N("img",{src:e.picUrl,alt:""},null,8,Ee),N("div",He,[N("div",null,W(e.name),1),N("div",null,W(e.song.artists[0].name),1)])],40,Se)))),128))])]))}}),[["__scopeId","data-v-0aa15fa7"]]),Ne={class:"discover"},Te=(e=>(ee("data-v-42bdcabc"),e=e(),ae(),e))((()=>N("h1",null,"推荐",-1))),Be=J(E({__name:"index",setup:e=>(e,a)=>(H(),L("div",Ne,[Te,j(Ie),j(Ce),j(Le),j(h)]))}),[["__scopeId","data-v-42bdcabc"]]);export{Be as default};
