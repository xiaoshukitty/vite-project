import{f as e}from"./vnode-sZ0dFU9Z.js";import{s as r,am as o}from"./index-T_AfnbBV.js";const t=(t,a)=>{const i={},n=r([]);return{children:n,addChild:r=>{i[r.uid]=r,n.value=((r,t,a)=>e(r.subTree).filter((e=>{var r;return o(e)&&(null==(r=e.type)?void 0:r.name)===t&&!!e.component})).map((e=>e.component.uid)).map((e=>a[e])).filter((e=>!!e)))(t,a,i)},removeChild:e=>{delete i[e],n.value=n.value.filter((r=>r.uid!==e))}}};export{t as u};
