import{F as e}from"./el-icon-GoL-NjNe.js";import{s as r,aq as a}from"./index-oPTR38Ik.js";const i=(i,o)=>{const t={},l=r([]);return{children:l,addChild:r=>{t[r.uid]=r,l.value=((r,i,o)=>e(r.subTree).filter((e=>{var r;return a(e)&&(null==(r=e.type)?void 0:r.name)===i&&!!e.component})).map((e=>e.component.uid)).map((e=>o[e])).filter((e=>!!e)))(i,o,t)},removeChild:e=>{delete t[e],l.value=l.value.filter((r=>r.uid!==e))}}};export{i as u};
