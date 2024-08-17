import{c as e,e as t,s as a,t as l,u as s,E as i,_ as n,o,w as r,v as u}from"./el-icon-zROW0xRP.js";import{E as c,a as d,b as v}from"./el-skeleton-item-P0Xel5jp.js";import{u as m,a as p,_ as h,M as f}from"./index-h3-D1126.js";import{u as g}from"./user-49O2DwXC.js";import{D as y,r as k,j as _,u as I,f as w,X as b,a as x,b as C,E as M,C as S,k as E,ag as L,h as j,o as H,c as N,y as T,l as D,m as A,s as B,M as P,ah as $,t as V,H as O,I as R,T as z,A as q,ai as U,q as W,n as X,Z as Y,$ as K,z as Z,x as F,O as G,ab as J,Y as Q,_ as ee,a2 as te,a7 as ae,a9 as le,aa as se}from"./index--VxVIP3C.js";import{u as ie}from"./index-pm9-tzLE.js";import{t as ne,P as oe}from"./index-m5WVTvVs.js";import"./index-L2wJn9kn.js";import"./index-MVxKL2lZ.js";const re=e({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),ue={change:(e,a)=>[e,a].every(t)},ce=Symbol("carouselContextKey"),de=(e,t,s)=>{const{children:i,addChild:n,removeChild:o}=ie(S(),"ElCarouselItem"),r=y(),u=k(-1),c=k(null),d=k(!1),v=k(),m=k(0),p=k(!0),h=_((()=>"never"!==e.arrow&&!I(j))),f=_((()=>i.value.some((e=>e.props.label.toString().length>0)))),g=_((()=>"card"===e.type)),j=_((()=>"vertical"===e.direction)),H=_((()=>"auto"!==e.height?{height:e.height}:{height:`${m.value}px`,overflow:"hidden"})),N=ne((e=>{P(e)}),300,{trailing:!0}),T=ne((t=>{!function(t){"hover"===e.trigger&&t!==u.value&&(u.value=t)}(t)}),300);function D(){c.value&&(clearInterval(c.value),c.value=null)}function A(){e.interval<=0||!e.autoplay||c.value||(c.value=setInterval((()=>B()),e.interval))}const B=()=>{u.value<i.value.length-1?u.value=u.value+1:e.loop&&(u.value=0)};function P(t){if(E(t)){const e=i.value.filter((e=>e.props.name===t));e.length>0&&(t=i.value.indexOf(e[0]))}if(t=Number(t),Number.isNaN(t)||t!==Math.floor(t))return;const a=i.value.length,l=u.value;u.value=t<0?e.loop?a-1:0:t>=a?e.loop?0:a-1:t,l===u.value&&$(l),V()}function $(e){i.value.forEach(((t,a)=>{t.translateItem(a,u.value,e)}))}function V(){D(),e.pauseOnHover||A()}w((()=>u.value),((e,a)=>{$(a),p.value&&(e%=2,a%=2),a>-1&&t("change",e,a)})),w((()=>e.autoplay),(e=>{e?A():D()})),w((()=>e.loop),(()=>{P(u.value)})),w((()=>e.interval),(()=>{V()}));const O=b();return x((()=>{w((()=>i.value),(()=>{i.value.length>0&&P(e.initialIndex)}),{immediate:!0}),O.value=a(v.value,(()=>{$()})),A()})),C((()=>{D(),v.value&&O.value&&O.value.stop()})),M(ce,{root:v,isCardType:g,isVertical:j,items:i,loop:e.loop,addItem:n,removeItem:o,setActiveItem:P,setContainerHeight:function(t){"auto"===e.height&&(m.value=t)}}),{root:v,activeIndex:u,arrowDisplay:h,hasLabel:f,hover:d,isCardType:g,items:i,isVertical:j,containerStyle:H,isItemsTwoLength:p,handleButtonEnter:function(e){I(j)||i.value.forEach(((t,a)=>{e===function(e,t){var a,l,s,n;const o=I(i),r=o.length;if(0===r||!e.states.inStage)return!1;const u=t+1,c=t-1,d=r-1,v=o[d].states.active,m=o[0].states.active,p=null==(l=null==(a=o[u])?void 0:a.states)?void 0:l.active,h=null==(n=null==(s=o[c])?void 0:s.states)?void 0:n.active;return t===d&&m||p?"left":!!(0===t&&v||h)&&"right"}(t,a)&&(t.states.hover=!0)}))},handleButtonLeave:function(){I(j)||i.value.forEach((e=>{e.states.hover=!1}))},handleIndicatorClick:function(e){u.value=e},handleMouseEnter:function(){d.value=!0,e.pauseOnHover&&D()},handleMouseLeave:function(){d.value=!1,A()},setActiveItem:P,prev:function(){P(u.value-1)},next:function(){P(u.value+1)},PlaceholderItem:function(){var t;const a=null==(t=r.default)?void 0:t.call(r);if(!a)return null;const s=l(a).filter((e=>L(e)&&"ElCarouselItem"===e.type.name));return 2===(null==s?void 0:s.length)&&e.loop&&!g.value?(p.value=!0,s):(p.value=!1,null)},isTwoLengthShow:e=>!p.value||(u.value<=1?e<=1:e>1),throttledArrowClick:N,throttledIndicatorHover:T}},ve=["onMouseenter","onClick"],me={key:0},pe=j({name:"ElCarousel"});var he=n(j({...pe,props:re,emits:ue,setup(e,{expose:t,emit:a}){const l=e,{root:n,activeIndex:o,arrowDisplay:r,hasLabel:u,hover:c,isCardType:d,items:v,isVertical:m,containerStyle:p,handleButtonEnter:h,handleButtonLeave:f,handleIndicatorClick:g,handleMouseEnter:y,handleMouseLeave:k,setActiveItem:w,prev:b,next:x,PlaceholderItem:C,isTwoLengthShow:M,throttledArrowClick:S,throttledIndicatorHover:E}=de(l,a),L=s("carousel"),j=_((()=>{const e=[L.b(),L.m(l.direction)];return I(d)&&e.push(L.m("card")),e})),F=_((()=>{const e=[L.e("indicators"),L.em("indicators",l.direction)];return I(u)&&e.push(L.em("indicators","labels")),"outside"===l.indicatorPosition&&e.push(L.em("indicators","outside")),I(m)&&e.push(L.em("indicators","right")),e}));return t({setActiveItem:w,prev:b,next:x}),(e,t)=>(H(),N("div",{ref_key:"root",ref:n,class:B(I(j)),onMouseenter:t[6]||(t[6]=P(((...e)=>I(y)&&I(y)(...e)),["stop"])),onMouseleave:t[7]||(t[7]=P(((...e)=>I(k)&&I(k)(...e)),["stop"]))},[T("div",{class:B(I(L).e("container")),style:X(I(p))},[I(r)?(H(),D(z,{key:0,name:"carousel-arrow-left",persisted:""},{default:A((()=>[R(T("button",{type:"button",class:B([I(L).e("arrow"),I(L).em("arrow","left")]),onMouseenter:t[0]||(t[0]=e=>I(h)("left")),onMouseleave:t[1]||(t[1]=(...e)=>I(f)&&I(f)(...e)),onClick:t[2]||(t[2]=P((e=>I(S)(I(o)-1)),["stop"]))},[V(I(i),null,{default:A((()=>[V(I($))])),_:1})],34),[[O,("always"===e.arrow||I(c))&&(l.loop||I(o)>0)]])])),_:1})):q("v-if",!0),I(r)?(H(),D(z,{key:1,name:"carousel-arrow-right",persisted:""},{default:A((()=>[R(T("button",{type:"button",class:B([I(L).e("arrow"),I(L).em("arrow","right")]),onMouseenter:t[3]||(t[3]=e=>I(h)("right")),onMouseleave:t[4]||(t[4]=(...e)=>I(f)&&I(f)(...e)),onClick:t[5]||(t[5]=P((e=>I(S)(I(o)+1)),["stop"]))},[V(I(i),null,{default:A((()=>[V(I(U))])),_:1})],34),[[O,("always"===e.arrow||I(c))&&(l.loop||I(o)<I(v).length-1)]])])),_:1})):q("v-if",!0),V(I(C)),W(e.$slots,"default")],6),"none"!==e.indicatorPosition?(H(),N("ul",{key:0,class:B(I(F))},[(H(!0),N(Y,null,K(I(v),((t,a)=>R((H(),N("li",{key:a,class:B([I(L).e("indicator"),I(L).em("indicator",e.direction),I(L).is("active",a===I(o))]),onMouseenter:e=>I(E)(a),onClick:P((e=>I(g)(a)),["stop"])},[T("button",{class:B(I(L).e("button"))},[I(u)?(H(),N("span",me,Z(t.props.label),1)):q("v-if",!0)],2)],42,ve)),[[O,I(M)(a)]]))),128))],2)):q("v-if",!0)],34))}}),[["__file","carousel.vue"]]);const fe=e({name:{type:String,default:""},label:{type:[String,Number],default:""}}),ge=(e,t)=>{const a=F(ce),l=S(),s=.83,i=k(),n=k(!1),r=k(0),u=k(1),c=k(!1),d=k(!1),v=k(!1),m=k(!1),{isCardType:p,isVertical:h}=a;const f=(e,t,l)=>{var n;const f=I(p),g=null!=(n=a.items.value.length)?n:Number.NaN,y=e===t;f||o(l)||(m.value=y||e===l),!y&&g>2&&a.loop&&(e=function(e,t,a){const l=a-1,s=a/2;return 0===t&&e===l?-1:t===l&&0===e?a:e<t-1&&t-e>=s?a+1:e>t+1&&e-t>=s?-2:e}(e,t,g));const k=I(h);c.value=y,f?(v.value=Math.round(Math.abs(e-t))<=1,r.value=function(e,t){var l,s;const i=I(h)?(null==(l=a.root.value)?void 0:l.offsetHeight)||0:(null==(s=a.root.value)?void 0:s.offsetWidth)||0;return v.value?i*(1.17*(e-t)+1)/4:e<t?-1.83*i/4:3.83*i/4}(e,t),u.value=I(c)?1:s):r.value=function(e,t,l){const s=a.root.value;return s?((l?s.offsetHeight:s.offsetWidth)||0)*(e-t):0}(e,t,k),d.value=!0,y&&i.value&&a.setContainerHeight(i.value.offsetHeight)};return x((()=>{a.addItem({props:e,states:G({hover:n,translate:r,scale:u,active:c,ready:d,inStage:v,animating:m}),uid:l.uid,translateItem:f})})),J((()=>{a.removeItem(l.uid)})),{carouselItemRef:i,active:c,animating:m,hover:n,inStage:v,isVertical:h,translate:r,isCardType:p,scale:u,ready:d,handleItemClick:function(){if(a&&I(p)){const e=a.items.value.findIndex((({uid:e})=>e===l.uid));a.setActiveItem(e)}}}},ye=j({name:"ElCarouselItem"});var ke=n(j({...ye,props:fe,setup(e){const t=e,a=s("carousel"),{carouselItemRef:l,active:i,animating:n,hover:o,inStage:r,isVertical:u,translate:c,isCardType:d,scale:v,ready:m,handleItemClick:p}=ge(t),h=_((()=>({transform:[`${"translate"+(I(u)?"Y":"X")}(${I(c)}px)`,`scale(${I(v)})`].join(" ")})));return(e,t)=>R((H(),N("div",{ref_key:"carouselItemRef",ref:l,class:B([I(a).e("item"),I(a).is("active",I(i)),I(a).is("in-stage",I(r)),I(a).is("hover",I(o)),I(a).is("animating",I(n)),{[I(a).em("item","card")]:I(d),[I(a).em("item","card-vertical")]:I(d)&&I(u)}]),style:X(I(h)),onClick:t[0]||(t[0]=(...e)=>I(p)&&I(p)(...e))},[I(d)?R((H(),N("div",{key:0,class:B(I(a).e("mask"))},null,2)),[[O,!I(i)]]):q("v-if",!0),W(e.$slots,"default")],6)),[[O,I(m)]])}}),[["__file","carousel-item.vue"]]);const _e=r(he,{CarouselItem:ke}),Ie=u(ke),we={class:"swiper"},be={class:"skelton-carousel"},xe=["src","onClick"],Ce=ee(j({__name:"index",setup(e){const{getBanners:t}=m(),{banners:a}=Q(m()),{skeletonLoading:l}=Q(g());x((async()=>{await t()}));return(e,t)=>{const s=c,i=Ie,n=_e,o=d,r=v;return H(),N("div",we,[V(r,{style:{width:"100%"},fill:""},{default:A((()=>[V(o,{class:"skelton",animated:"",count:1,loading:I(l)},{template:A((()=>[T("div",be,[V(s,{variant:"h3",class:"skelton-title1"}),V(s,{variant:"h3",class:"skelton-title2"}),V(s,{variant:"h3",class:"skelton-title3"})])])),default:A((()=>[V(n,{interval:2e3,type:"card",height:"250px",trigger:"click","pause-on-hover":!1,autoplay:!1},{default:A((()=>[(H(!0),N(Y,null,K(I(a),(e=>(H(),D(i,{key:e.bannerId},{default:A((()=>[T("img",{class:"swiper_img",src:e.pic,alt:"",onClick:e=>{}},null,8,xe)])),_:2},1024)))),128))])),_:1})])),_:1},8,["loading"])])),_:1})])}}}),[["__scopeId","data-v-4b8cd7c6"]]),Me={class:"exclusive_playlist"},Se={class:"skelton-list"},Ee={style:{"margin-top":"10px"}},Le={class:"block"},je=["onClick"],He={class:"text"},Ne=ee(j({__name:"index",setup(e){const{exclusivePlaylistData:t}=Q(p()),{skeletonLoading:a}=Q(g()),{getExclusivePlaylistData:l}=p(),s=te();return x((async()=>{await l()})),(e,l)=>{const i=c,n=d,o=v;return H(),N("div",Me,[V(o,{style:{width:"100%"},fill:""},{default:A((()=>[V(n,{class:"skelton",animated:"",count:1,loading:I(a)},{template:A((()=>[V(i,{variant:"h3",class:"skelton-title"})])),default:A((()=>[V(h,{title:"专属歌单"})])),_:1},8,["loading"]),V(n,{class:"skelton",animated:"",count:10,loading:I(a)},{template:A((()=>[T("div",Se,[V(i,{variant:"image",style:{height:"300px"}}),T("div",Ee,[V(i,{variant:"h3",style:{width:"70%"}})])])])),default:A((()=>[T("div",Le,[(H(!0),N(Y,null,K(I(t),((e,t)=>(H(),N("div",{class:"block_list",key:t},[T("div",{class:"block_item",onClick:t=>(e=>{s.push({path:"/playList",query:{id:e.id}})})(e)},[V(oe,{imgSrc:e.picUrl},null,8,["imgSrc"])],8,je),T("div",He,Z(e.name),1)])))),128))])])),_:1},8,["loading"])])),_:1})])}}}),[["__scopeId","data-v-80b9ed33"]]),Te={class:"RecommendedMusic"},De={class:"skelton-list"},Ae={class:"skelton-img"},Be={class:"skelton-text"},Pe={class:"music_list"},$e=["onDblclick"],Ve=["src"],Oe={class:"music_item_right"},Re=ee(j({__name:"index",setup(e){const{recommendedMusicData:t}=Q(p()),{getRecommendedMusicData:a}=p(),{playMusic:l}=ae(),{skeletonLoading:s}=Q(g());return x((async()=>{await a()})),(e,a)=>{const i=c,n=d,o=v;return H(),N("div",Te,[V(o,{style:{width:"100%"},fill:""},{default:A((()=>[V(n,{class:"skelton",animated:"",count:1,loading:I(s)},{template:A((()=>[V(i,{variant:"h3",class:"skelton-title"})])),default:A((()=>[V(h,{title:"推荐新音乐"})])),_:1},8,["loading"]),V(n,{class:"skelton",animated:"",count:10,loading:I(s)},{template:A((()=>[T("div",De,[T("div",Ae,[V(i,{variant:"image",class:"skelton-img"})]),T("div",Be,[V(i,{variant:"h3",style:{width:"70%"}}),V(i,{variant:"h3",style:{width:"70%"}})])])])),default:A((()=>[T("div",Pe,[(H(!0),N(Y,null,K(I(t),(e=>(H(),N("div",{class:"music_item",key:e.id,onDblclick:t=>I(l)(e.id)},[T("img",{src:e.picUrl,alt:""},null,8,Ve),T("div",Oe,[T("div",null,Z(e.name),1),T("div",null,Z(e.song.artists[0].name),1)])],40,$e)))),128))])])),_:1},8,["loading"])])),_:1})])}}}),[["__scopeId","data-v-9159c790"]]),ze={class:"discover"},qe=(e=>(le("data-v-c46f35de"),e=e(),se(),e))((()=>T("h1",null,"推荐",-1))),Ue=ee(j({__name:"index",setup:e=>(e,t)=>(H(),N("div",ze,[qe,V(Ce),V(Ne),V(Re),V(f)]))}),[["__scopeId","data-v-c46f35de"]]);export{Ue as default};
