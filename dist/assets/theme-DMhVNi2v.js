import{w as e,u as t,Y as s}from"./index-Tuum5K4I.js";class a extends Error{constructor(e){super(e),this.name="ElementPlusError"}}function o(e,t){throw new a(`[${e}] ${t}`)}function r(e,t){}const n="update:modelValue",m="change",c="input",i=({from:s,replacement:a,scope:o,version:r,ref:n,type:m="API"},c)=>{e((()=>t(c)),(e=>{}),{immediate:!0})},l=(e,t)=>{localStorage.setItem(e,t)},u=e=>localStorage.getItem(e),p=s("theme",{state:()=>({theme:u("THEME")}),getters:{getTheme:e=>e.theme},actions:{}});export{m as C,u as G,c as I,l as S,n as U,p as a,r as d,o as t,i as u};
