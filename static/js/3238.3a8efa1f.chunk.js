"use strict";(self.webpackChunksito_portfolio=self.webpackChunksito_portfolio||[]).push([[3238,4538],{3238:function(t,e,n){n.r(e);var i=n(1413),o=n(2791),r=n(8992),u=n(184),a=(0,o.memo)((function(t){return(0,u.jsx)(r.ZP,(0,i.Z)({},t))}));e.default=a},8992:function(t,e,n){n.d(e,{ZP:function(){return E}});var i=n(1413),o=n(885),r=n(4925),u=n(2791),a=function(t,e){if(!t)return 0;var n=t.includes("px")?+t.split("px")[0]:t.includes("%")?+t.split("%")[0]*e*.01:t;return Number.isNaN(+n)?0:+n},c=function(t){if(!t||"undefined"==typeof window)return{width:0,height:0};var e=t.getBoundingClientRect(),n=window.getComputedStyle(t),i=n.width,o=n.height;return{width:a("".concat(i),e.width),height:a("".concat(o),e.height)}},s=function(t){var e=(0,u.useState)({width:0,height:0}),n=(0,o.Z)(e,2),i=n[0],r=n[1],a=function(){var e=c(t.current),n=e.width,i=e.height;r({width:n,height:i})};return(0,u.useEffect)((function(){return a()}),[t.current]),[i,a]},f=n(9798),d=n(3140),m=n(7291),l=n(470),h=n(7504),g=n(161),p=(0,g.F4)({"0%":{backgroundPosition:"200% 0"},to:{backgroundPosition:"-200% 0"}}),v=(0,g.zo)("div",{opacity:0,margin:"0 auto",position:"relative",overflow:"hidden",maxWidth:"100%",transition:"transform 250ms ease 0ms, opacity 200ms ease-in 0ms","@motion":{transition:"none"},variants:{ready:{true:{opacity:1},false:{opacity:0}}}}),w=(0,g.zo)("img",{size:"100%",display:"block"}),y=(0,g.zo)("div",{position:"absolute",top:0,left:0,right:0,bottom:0,size:"100%",borderRadius:"inherit",backgroundImage:"linear-gradient(270deg, $colors$accents1, $colors$accents2, $colors$accents2, $colors$accents1)",backgroundSize:"400% 100%",animation:"".concat(p," 5s ease-in-out infinite"),transition:"opacity 300ms ease-out"}),Z=n(8024),x=n(184),b=["opacity","css","className"],N=u.memo((function(t){var e=t.opacity,n=t.css,o=t.className,u=(0,r.Z)(t,b);return(0,x.jsx)(y,(0,i.Z)({className:(0,h.Z)("nextui-image-skeleton",o),css:(0,i.Z)({opacity:e},n)},u))}));l.Ts&&(N.displayName="NextUI.ImageSkeleton"),N.toString=function(){return".nextui-image-skeleton"};var k=(0,Z.Z)(N,{opacity:.5,className:""}),S=["src","width","height","showSkeleton","className","maxDelay","autoResize","objectFit","containerCss","css"],z=u.forwardRef((function(t,e){var n=t.src,a=t.width,c=t.height,l=t.showSkeleton,g=void 0===l||l,p=t.className,y=t.maxDelay,Z=void 0===y?3e3:y,b=t.autoResize,N=void 0!==b&&b,z=t.objectFit,E=void 0===z?"scale-down":z,j=t.containerCss,$=t.css,R=(0,r.Z)(t,S),C=(0,m.gy)(e),I=(0,u.useState)(!0),T=(0,o.Z)(I,2),F=T[0],P=T[1],L=(0,u.useState)(g),D=(0,o.Z)(L,2),M=D[0],U=D[1],_=(0,u.useMemo)((function(){return{w:a?"number"==typeof a?"".concat(a,"px"):a:"auto",h:c?"number"==typeof c?"".concat(c,"px"):c:"auto"}}),[a,c]),B=_.w,H=_.h,W=(0,f.Z)(H),q=(0,o.Z)(W,3),A=q[0],G=q[1],J=q[2],K=s(C),O=(0,o.Z)(K,2),Q=O[0],V=O[1],X=g&&!!a&&!!c;(0,u.useEffect)((function(){C.current&&C.current.complete&&(P(!1),U(!1))})),(0,u.useEffect)((function(){var t=setTimeout((function(){X&&U(!1),clearTimeout(t)}),Z);return function(){return clearTimeout(t)}}),[F]),(0,u.useEffect)((function(){if(N){var t=0===Q.width,e="auto"===J.current;!t&&a&&c&&(Q.width<a?!e&&G("auto"):e&&G(H))}}),[Q,a]),(0,d.Z)((function(){N&&V()}));var Y=(0,u.useMemo)((function(){return F?"loading":"ready"}),[F]);return(0,x.jsxs)(v,{className:(0,h.Z)("nextui-image-container","nextui-image--".concat(Y),p),css:(0,i.Z)({width:B,height:A},j),"data-state":Y,ready:!F||M,children:[M&&(0,x.jsx)(k,{opacity:1}),(0,x.jsx)(w,(0,i.Z)({ref:C,alt:t.alt||"",className:"nextui-image",css:(0,i.Z)({objectFit:E},$),"data-state":Y,height:c,src:n,width:a,onLoad:function(){P(!1)}},R))]})}));l.Ts&&(z.displayName="NextUI.Image"),z.toString=function(){return".nextui-image"};var E=u.memo(z)},9798:function(t,e,n){n.d(e,{Z:function(){return r}});var i=n(885),o=n(2791),r=function(t){var e=(0,o.useState)((function(){return"function"==typeof t?t():t})),n=(0,i.Z)(e,2),r=n[0],u=n[1],a=(0,o.useRef)(t);return(0,o.useEffect)((function(){a.current=r}),[r]),[r,function(t){var e="function"==typeof t?t(a.current):t;a.current=e,u(e)},a]}},3140:function(t,e,n){n.d(e,{Z:function(){return o}});var i=n(2791),o=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,i.useEffect)((function(){var n=function(){return t()};return e&&n(),window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[])}},470:function(t,e,n){n.d(e,{Ts:function(){return i},mf:function(){return o}});var i=!1;function o(t){return"function"==typeof t}},7291:function(t,e,n){n.d(e,{gy:function(){return o}});var i=n(2791);"undefined"==typeof window||!window.document||window.document.createElement;function o(t){var e=(0,i.useRef)(null);return(0,i.useImperativeHandle)(t,(function(){return e.current})),e}}}]);
//# sourceMappingURL=3238.3a8efa1f.chunk.js.map