import{r as t,j as e,Z as o}from"./index-584e2b42.js";import{u as l}from"./index.esm-84407acf.js";import{F as m,n as d,u as x}from"./index-862a7d1c.js";import{c as r,S as p}from"./Home-9c473e93.js";const f=()=>e.jsx(t.Fragment,{children:e.jsx("div",{className:`scale-animation ${r({width:"100px",height:"100px",right:"5%",top:"15%"})}`,children:e.jsx("div",{sx:{transform:"rotate(30deg)",display:"flex"},children:e.jsx(m,{icon:d,className:`float-y ${r({fontSize:"6rem",color:"#9494f5",opacity:.5})}`})})})}),h=t.memo(a=>e.jsx(f,{...a})),y=()=>{const[a,n]=l({threshold:50}),[i,c]=t.useState(!1),{t:s}=x();return t.useEffect(()=>{a&&c(!0)},[a]),e.jsxs(p,{id:"contact",background:"bg-dark-background2",children:[e.jsx(h,{}),e.jsx("div",{className:"flex items-center justify-center flex-col h-full gap-4",ref:n,children:i?e.jsxs(t.Fragment,{children:[e.jsx(o,{delay:100,animation:"appear",children:e.jsx("h2",{className:"sm:text-3xl text-4xl font-bold text-center",children:s("_pages:home.contact.title")})}),e.jsx(o,{delay:200,animation:"appear",children:e.jsx("p",{className:"text-center md:w-[90%] w-[50%] m-auto mb-4",children:s("_pages:home.contact.body")})}),e.jsx(o,{delay:300,animation:"appear",children:e.jsx("a",{name:"email to","aria-label":"email sito8943@gmail.com",href:"mailto:sito8943@gmail.com",target:"blank",rel:"noreferrer",className:"primary button filled",children:s("_pages:home.contact.button")})})]}):""})]})};export{y as default};