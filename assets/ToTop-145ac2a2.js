import{r as t,j as r,s as l}from"./index-584e2b42.js";import{F as n,o as a}from"./index-862a7d1c.js";import{g as i}from"./Home-9c473e93.js";const u=()=>{const[s,o]=t.useState(!1),e=t.useCallback(c=>{(window.pageYOffset||document.documentElement.scrollTop)>100?o(!0):o(!1)},[o]);return t.useEffect(()=>(window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}),[e]),r.jsx(l,{onClick:()=>i.scrollTo(0),icon:r.jsx(n,{icon:a}),style:{zIndex:s?10:-1,transform:s?"scale(1)":"scale(0)"},shape:"filled",className:"icon-button transition-all to-top fixed bottom-5 right-5 rounded-full primary !text-white"})};export{u as default};