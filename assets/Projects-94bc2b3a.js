import{j as e,d as h,r as o,a as d}from"./index-9347b508.js";import{u as x}from"./index.esm-5b874751.js";import{c as a,S as f}from"./Home-e6098159.js";import{F as m,k as g,l as j,u,m as b}from"./index-ad5e7b4f.js";const k="/sito-portfolio/assets/wmt-34d72a29.jpg";function w({link:i,image:l,alt:n,text:r,more:t,ariaLabel:c}){return e.jsx("a",{href:i,target:"blank",rel:"noreferrer",name:r,"aria-label":c,children:e.jsxs("article",{className:"hover:-translate-y-2 hover:shadow-lg hover:shadow-sdark transition duration-300 bg-dark-background2 md:w-full md:h-auto w-[300px] h-[300px] rounded-xl border-[1px] border-placeholder-dark",children:[e.jsx(h,{src:l,alt:n,className:"w-full md:h-[300px] h-[150px] rounded-t-xl object-cover object-bottom"}),e.jsxs("div",{className:"p-5",children:[e.jsx("p",{className:"text-lg font-bold text-center",children:r}),e.jsx("p",{className:"text-center",children:t})]})]})})}const N=()=>e.jsxs(o.Fragment,{children:[e.jsx("div",{className:`lg:hidden scale-animation ${a({right:"10%",bottom:"10%"})}`,children:e.jsx(m,{icon:g,className:`float-y ${a({fontSize:"3rem",color:"#0fd908",opacity:.5})}`})}),e.jsx("div",{className:`lg:hidden scale-animation ${a({right:"15%",bottom:"15%"})}`,children:e.jsx(m,{icon:j,className:`float-y ${a({fontSize:"4rem",color:"#0fd908",opacity:.5})}`})})]}),$=()=>{const[i,l]=x({threshold:50}),[n,r]=o.useState(!1),{t}=u();o.useEffect(()=>{i&&r(!0)},[i]);const c=[{id:"m2g-fotos",link:"https://m2g-fotos.web.app/",image:"https://ik.imagekit.io/lgqp0wffgtp/tr:w-318,h-180/M2g/Untitled_xhFWRyelS.jpg"},{id:"descubre-trinidad",image:"https://ik.imagekit.io/tx6beroitnm/tr:w-318,h-180/logo512_CvJ7zDrrn.png",link:"https://descubretrinidad.com"},{id:"findylin",image:"https://ik.imagekit.io/lgqp0wffgtp/findylin_kKPu-nu5FS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678490535881",link:"https://findylin-369a7.web.app/"}];return e.jsxs(f,{id:"projects",children:[e.jsx(N,{}),e.jsx("div",{className:"flex items-center justify-center flex-col h-full gap-4",ref:l,children:n?e.jsxs(o.Fragment,{children:[e.jsx(d,{delay:100,animation:"appear",children:e.jsx("h2",{className:"sm:text-3xl text-4xl font-bold text-center",children:t("_pages:home.projects.title")})}),e.jsx(d,{delay:200,animation:"appear",children:e.jsxs("p",{className:"text-center",children:[t("_pages:home.projects.text"),e.jsxs("a",{name:"github","aria-label":t("_pages:home.hero.social.github"),href:"https://github.com/SitoNumbis",rel:"noreferrer",target:"_blank",className:"m-auto hover:text-primary underline",children:[t("_common:buttons.see"),e.jsx(m,{icon:b,className:a({marginLeft:"5px",fontSize:"15px"})})]})]})}),e.jsx("ul",{className:"flex items-center justify-center flex-wrap gap-5",children:c.map((s,p)=>e.jsx("li",{className:"md:w-full",children:e.jsx(d,{delay:(p+1)*300,animation:"appear",children:e.jsx(w,{link:s.link,image:s.image||k,alt:`${s.title}-logo`,text:t(`_pages:home.projects.projects.${s.id}.title`),more:t(`_pages:home.projects.projects.${s.id}.text`),ariaLabel:`${t("_common:ariaLabels.linkTo")} ${s.link}`})})},s.id))})]}):null})]})};export{$ as default};
