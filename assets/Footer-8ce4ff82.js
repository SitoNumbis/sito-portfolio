import{Y as n,j as t}from"./index-e1edf8b2.js";import{F as r}from"./index-a2224b7a.js";import{c as s,a as o,b as l,d as c,e as m}from"./Home-93baa833.js";const h=()=>{const{colors:i}=n(),a=[{text:"github",link:"https://github.com/SitoNumbis",icon:o},{text:"instagram",link:"https://www.instagram.com/sito.8943/",icon:l},{text:"twitter",link:"https://twitter.com/sito8943",icon:c},{text:"linkedin",link:"https://www.linkedin.com/in/sito8943",icon:m}];return t.jsx("footer",{id:"footer",className:"items-center justify-center flex px-3 min-h-[50px] py-2 bg-dark-background flex-wrap",children:t.jsxs("div",{className:"w-[90%] flex items-center justify-between flex-wrap gap-y-5 sm:my-5",children:[t.jsx("div",{className:"flex",children:t.jsx("p",{className:"logo",children:`<Sito /> © ${new Date().getFullYear()}`})}),t.jsx("div",{className:"flex items-center sm:gap-3 gap-5",children:a.map((e,x)=>t.jsx("a",{href:e.link,rel:"noreferrer",target:"_blank",name:e.text,"aria-label":e.text,className:`transition ${s({"&:hover":{color:i.primary.light}})}`,children:t.jsx(r,{className:s({fontSize:"25px"}),icon:e.icon})},e.link))})]})})};export{h as default};