"use strict";(self.webpackChunksito_portfolio=self.webpackChunksito_portfolio||[]).push([[2271],{2271:function(e,t,n){function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){return e instanceof r(e).Element||e instanceof Element}function o(e){return e instanceof r(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!==typeof ShadowRoot&&(e instanceof r(e).ShadowRoot||e instanceof ShadowRoot)}n.d(t,{ZP:function(){return Tt}});var s=Math.max,c=Math.min,u=Math.round;function f(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function p(){return!/^((?!chrome|android).)*safari/i.test(f())}function d(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var a=e.getBoundingClientRect(),s=1,c=1;t&&o(e)&&(s=e.offsetWidth>0&&u(a.width)/e.offsetWidth||1,c=e.offsetHeight>0&&u(a.height)/e.offsetHeight||1);var f=(i(e)?r(e):window).visualViewport,d=!p()&&n,l=(a.left+(d&&f?f.offsetLeft:0))/s,m=(a.top+(d&&f?f.offsetTop:0))/c,v=a.width/s,h=a.height/c;return{width:v,height:h,top:m,right:l+v,bottom:m+h,left:l,x:l,y:m}}function l(e){var t=r(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function m(e){return e?(e.nodeName||"").toLowerCase():null}function v(e){return((i(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return d(v(e)).left+l(e).scrollLeft}function g(e){return r(e).getComputedStyle(e)}function b(e){var t=g(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function y(e,t,n){void 0===n&&(n=!1);var i=o(t),a=o(t)&&function(e){var t=e.getBoundingClientRect(),n=u(t.width)/e.offsetWidth||1,r=u(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),s=v(t),c=d(e,a,n),f={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(i||!i&&!n)&&(("body"!==m(t)||b(s))&&(f=function(e){return e!==r(e)&&o(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:l(e);var t}(t)),o(t)?((p=d(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):s&&(p.x=h(s))),{x:c.left+f.scrollLeft-p.x,y:c.top+f.scrollTop-p.y,width:c.width,height:c.height}}function w(e){var t=d(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function x(e){return"html"===m(e)?e:e.assignedSlot||e.parentNode||(a(e)?e.host:null)||v(e)}function O(e){return["html","body","#document"].indexOf(m(e))>=0?e.ownerDocument.body:o(e)&&b(e)?e:O(x(e))}function E(e,t){var n;void 0===t&&(t=[]);var i=O(e),o=i===(null==(n=e.ownerDocument)?void 0:n.body),a=r(i),s=o?[a].concat(a.visualViewport||[],b(i)?i:[]):i,c=t.concat(s);return o?c:c.concat(E(x(s)))}function A(e){return["table","td","th"].indexOf(m(e))>=0}function T(e){return o(e)&&"fixed"!==g(e).position?e.offsetParent:null}function j(e){for(var t=r(e),n=T(e);n&&A(n)&&"static"===g(n).position;)n=T(n);return n&&("html"===m(n)||"body"===m(n)&&"static"===g(n).position)?t:n||function(e){var t=/firefox/i.test(f());if(/Trident/i.test(f())&&o(e)&&"fixed"===g(e).position)return null;var n=x(e);for(a(n)&&(n=n.host);o(n)&&["html","body"].indexOf(m(n))<0;){var r=g(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var D="top",L="bottom",k="right",C="left",P="auto",S=[D,L,k,C],H="start",M="end",R="viewport",V="popper",W=S.reduce((function(e,t){return e.concat([t+"-"+H,t+"-"+M])}),[]),B=[].concat(S,[P]).reduce((function(e,t){return e.concat([t,t+"-"+H,t+"-"+M])}),[]),N=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function I(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function _(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var U={placement:"bottom",modifiers:[],strategy:"absolute"};function q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function $(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,a=void 0===o?U:o;return function(e,t,n){void 0===n&&(n=a);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},U,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],c=!1,u={state:o,setOptions:function(n){var c="function"===typeof n?n(o.options):n;f(),o.options=Object.assign({},a,o.options,c),o.scrollParents={reference:i(e)?E(e):e.contextElement?E(e.contextElement):[],popper:E(t)};var p=function(e){var t=I(e);return N.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=p.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var a=i({state:o,name:t,instance:u,options:r}),c=function(){};s.push(a||c)}})),u.update()},forceUpdate:function(){if(!c){var e=o.elements,t=e.reference,n=e.popper;if(q(t,n)){o.rects={reference:y(t,j(n),"fixed"===o.options.strategy),popper:w(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,s=i.options,f=void 0===s?{}:s,p=i.name;"function"===typeof a&&(o=a({state:o,options:f,name:p,instance:u})||o)}else o.reset=!1,r=-1}}},update:_((function(){return new Promise((function(e){u.forceUpdate(),e(o)}))})),destroy:function(){f(),c=!0}};if(!q(e,t))return u;function f(){s.forEach((function(e){return e()})),s=[]}return u.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var F={passive:!0};function z(e){return e.split("-")[0]}function X(e){return e.split("-")[1]}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function J(e){var t,n=e.reference,r=e.element,i=e.placement,o=i?z(i):null,a=i?X(i):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(o){case D:t={x:s,y:n.y-r.height};break;case L:t={x:s,y:n.y+n.height};break;case k:t={x:n.x+n.width,y:c};break;case C:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=o?Y(o):null;if(null!=u){var f="y"===u?"height":"width";switch(a){case H:t[u]=t[u]-(n[f]/2-r[f]/2);break;case M:t[u]=t[u]+(n[f]/2-r[f]/2)}}return t}var Z={top:"auto",right:"auto",bottom:"auto",left:"auto"};function G(e){var t,n=e.popper,i=e.popperRect,o=e.placement,a=e.variation,s=e.offsets,c=e.position,f=e.gpuAcceleration,p=e.adaptive,d=e.roundOffsets,l=e.isFixed,m=s.x,h=void 0===m?0:m,b=s.y,y=void 0===b?0:b,w="function"===typeof d?d({x:h,y:y}):{x:h,y:y};h=w.x,y=w.y;var x=s.hasOwnProperty("x"),O=s.hasOwnProperty("y"),E=C,A=D,T=window;if(p){var P=j(n),S="clientHeight",H="clientWidth";if(P===r(n)&&"static"!==g(P=v(n)).position&&"absolute"===c&&(S="scrollHeight",H="scrollWidth"),o===D||(o===C||o===k)&&a===M)A=L,y-=(l&&P===T&&T.visualViewport?T.visualViewport.height:P[S])-i.height,y*=f?1:-1;if(o===C||(o===D||o===L)&&a===M)E=k,h-=(l&&P===T&&T.visualViewport?T.visualViewport.width:P[H])-i.width,h*=f?1:-1}var R,V=Object.assign({position:c},p&&Z),W=!0===d?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:u(t*r)/r||0,y:u(n*r)/r||0}}({x:h,y:y}):{x:h,y:y};return h=W.x,y=W.y,f?Object.assign({},V,((R={})[A]=O?"0":"",R[E]=x?"0":"",R.transform=(T.devicePixelRatio||1)<=1?"translate("+h+"px, "+y+"px)":"translate3d("+h+"px, "+y+"px, 0)",R)):Object.assign({},V,((t={})[A]=O?y+"px":"",t[E]=x?h+"px":"",t.transform="",t))}var K={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];o(i)&&m(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});o(r)&&m(r)&&(Object.assign(r.style,a),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};var Q={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.offset,o=void 0===i?[0,0]:i,a=B.reduce((function(e,n){return e[n]=function(e,t,n){var r=z(e),i=[C,D].indexOf(r)>=0?-1:1,o="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=o[0],s=o[1];return a=a||0,s=(s||0)*i,[C,k].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,o),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},ee={left:"right",right:"left",bottom:"top",top:"bottom"};function te(e){return e.replace(/left|right|bottom|top/g,(function(e){return ee[e]}))}var ne={start:"end",end:"start"};function re(e){return e.replace(/start|end/g,(function(e){return ne[e]}))}function ie(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&a(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function oe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ae(e,t,n){return t===R?oe(function(e,t){var n=r(e),i=v(e),o=n.visualViewport,a=i.clientWidth,s=i.clientHeight,c=0,u=0;if(o){a=o.width,s=o.height;var f=p();(f||!f&&"fixed"===t)&&(c=o.offsetLeft,u=o.offsetTop)}return{width:a,height:s,x:c+h(e),y:u}}(e,n)):i(t)?function(e,t){var n=d(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):oe(function(e){var t,n=v(e),r=l(e),i=null==(t=e.ownerDocument)?void 0:t.body,o=s(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=s(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),c=-r.scrollLeft+h(e),u=-r.scrollTop;return"rtl"===g(i||n).direction&&(c+=s(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:a,x:c,y:u}}(v(e)))}function se(e,t,n,r){var a="clippingParents"===t?function(e){var t=E(x(e)),n=["absolute","fixed"].indexOf(g(e).position)>=0&&o(e)?j(e):e;return i(n)?t.filter((function(e){return i(e)&&ie(e,n)&&"body"!==m(e)})):[]}(e):[].concat(t),u=[].concat(a,[n]),f=u[0],p=u.reduce((function(t,n){var i=ae(e,n,r);return t.top=s(i.top,t.top),t.right=c(i.right,t.right),t.bottom=c(i.bottom,t.bottom),t.left=s(i.left,t.left),t}),ae(e,f,r));return p.width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p}function ce(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ue(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function fe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,a=n.strategy,s=void 0===a?e.strategy:a,c=n.boundary,u=void 0===c?"clippingParents":c,f=n.rootBoundary,p=void 0===f?R:f,l=n.elementContext,m=void 0===l?V:l,h=n.altBoundary,g=void 0!==h&&h,b=n.padding,y=void 0===b?0:b,w=ce("number"!==typeof y?y:ue(y,S)),x=m===V?"reference":V,O=e.rects.popper,E=e.elements[g?x:m],A=se(i(E)?E:E.contextElement||v(e.elements.popper),u,p,s),T=d(e.elements.reference),j=J({reference:T,element:O,strategy:"absolute",placement:o}),C=oe(Object.assign({},O,j)),P=m===V?C:T,H={top:A.top-P.top+w.top,bottom:P.bottom-A.bottom+w.bottom,left:A.left-P.left+w.left,right:P.right-A.right+w.right},M=e.modifiersData.offset;if(m===V&&M){var W=M[o];Object.keys(H).forEach((function(e){var t=[k,L].indexOf(e)>=0?1:-1,n=[D,L].indexOf(e)>=0?"y":"x";H[e]+=W[n]*t}))}return H}function pe(e,t,n){return s(e,c(t,n))}var de={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,o=void 0===i||i,a=n.altAxis,u=void 0!==a&&a,f=n.boundary,p=n.rootBoundary,d=n.altBoundary,l=n.padding,m=n.tether,v=void 0===m||m,h=n.tetherOffset,g=void 0===h?0:h,b=fe(t,{boundary:f,rootBoundary:p,padding:l,altBoundary:d}),y=z(t.placement),x=X(t.placement),O=!x,E=Y(y),A="x"===E?"y":"x",T=t.modifiersData.popperOffsets,P=t.rects.reference,S=t.rects.popper,M="function"===typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,R="number"===typeof M?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),V=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(T){if(o){var B,N="y"===E?D:C,I="y"===E?L:k,_="y"===E?"height":"width",U=T[E],q=U+b[N],$=U-b[I],F=v?-S[_]/2:0,J=x===H?P[_]:S[_],Z=x===H?-S[_]:-P[_],G=t.elements.arrow,K=v&&G?w(G):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Q[N],te=Q[I],ne=pe(0,P[_],K[_]),re=O?P[_]/2-F-ne-ee-R.mainAxis:J-ne-ee-R.mainAxis,ie=O?-P[_]/2+F+ne+te+R.mainAxis:Z+ne+te+R.mainAxis,oe=t.elements.arrow&&j(t.elements.arrow),ae=oe?"y"===E?oe.clientTop||0:oe.clientLeft||0:0,se=null!=(B=null==V?void 0:V[E])?B:0,ce=U+ie-se,ue=pe(v?c(q,U+re-se-ae):q,U,v?s($,ce):$);T[E]=ue,W[E]=ue-U}if(u){var de,le="x"===E?D:C,me="x"===E?L:k,ve=T[A],he="y"===A?"height":"width",ge=ve+b[le],be=ve-b[me],ye=-1!==[D,C].indexOf(y),we=null!=(de=null==V?void 0:V[A])?de:0,xe=ye?ge:ve-P[he]-S[he]-we+R.altAxis,Oe=ye?ve+P[he]+S[he]-we-R.altAxis:be,Ee=v&&ye?function(e,t,n){var r=pe(e,t,n);return r>n?n:r}(xe,ve,Oe):pe(v?xe:ge,ve,v?Oe:be);T[A]=Ee,W[A]=Ee-ve}t.modifiersData[r]=W}},requiresIfExists:["offset"]};var le={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,i=e.options,o=n.elements.arrow,a=n.modifiersData.popperOffsets,s=z(n.placement),c=Y(s),u=[C,k].indexOf(s)>=0?"height":"width";if(o&&a){var f=function(e,t){return ce("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ue(e,S))}(i.padding,n),p=w(o),d="y"===c?D:C,l="y"===c?L:k,m=n.rects.reference[u]+n.rects.reference[c]-a[c]-n.rects.popper[u],v=a[c]-n.rects.reference[c],h=j(o),g=h?"y"===c?h.clientHeight||0:h.clientWidth||0:0,b=m/2-v/2,y=f[d],x=g-p[u]-f[l],O=g/2-p[u]/2+b,E=pe(y,O,x),A=c;n.modifiersData[r]=((t={})[A]=E,t.centerOffset=E-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&ie(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function me(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ve(e){return[D,k,L,C].some((function(t){return e[t]>=0}))}var he=$({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,i=e.options,o=i.scroll,a=void 0===o||o,s=i.resize,c=void 0===s||s,u=r(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&f.forEach((function(e){e.addEventListener("scroll",n.update,F)})),c&&u.addEventListener("resize",n.update,F),function(){a&&f.forEach((function(e){e.removeEventListener("scroll",n.update,F)})),c&&u.removeEventListener("resize",n.update,F)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=J({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,o=n.adaptive,a=void 0===o||o,s=n.roundOffsets,c=void 0===s||s,u={placement:z(t.placement),variation:X(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,G(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,G(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},K,Q,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,o=void 0===i||i,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,f=n.boundary,p=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,m=void 0===l||l,v=n.allowedAutoPlacements,h=t.options.placement,g=z(h),b=c||(g===h||!m?[te(h)]:function(e){if(z(e)===P)return[];var t=te(e);return[re(e),t,re(t)]}(h)),y=[h].concat(b).reduce((function(e,n){return e.concat(z(n)===P?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,o=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?B:c,f=X(r),p=f?s?W:W.filter((function(e){return X(e)===f})):S,d=p.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=p);var l=d.reduce((function(t,n){return t[n]=fe(e,{placement:n,boundary:i,rootBoundary:o,padding:a})[z(n)],t}),{});return Object.keys(l).sort((function(e,t){return l[e]-l[t]}))}(t,{placement:n,boundary:f,rootBoundary:p,padding:u,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,A=y[0],T=0;T<y.length;T++){var j=y[T],M=z(j),R=X(j)===H,V=[D,L].indexOf(M)>=0,N=V?"width":"height",I=fe(t,{placement:j,boundary:f,rootBoundary:p,altBoundary:d,padding:u}),_=V?R?k:C:R?L:D;w[N]>x[N]&&(_=te(_));var U=te(_),q=[];if(o&&q.push(I[M]<=0),s&&q.push(I[_]<=0,I[U]<=0),q.every((function(e){return e}))){A=j,E=!1;break}O.set(j,q)}if(E)for(var $=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},F=m?3:1;F>0;F--){if("break"===$(F))break}t.placement!==A&&(t.modifiersData[r]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},de,le,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,a=fe(t,{elementContext:"reference"}),s=fe(t,{altBoundary:!0}),c=me(a,r),u=me(s,i,o),f=ve(c),p=ve(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":p})}}]}),ge="tippy-content",be="tippy-backdrop",ye="tippy-arrow",we="tippy-svg-arrow",xe={passive:!0,capture:!0},Oe=function(){return document.body};function Ee(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function Ae(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function Te(e,t){return"function"===typeof e?e.apply(void 0,t):e}function je(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function De(e){return[].concat(e)}function Le(e,t){-1===e.indexOf(t)&&e.push(t)}function ke(e){return e.split("-")[0]}function Ce(e){return[].slice.call(e)}function Pe(e){return Object.keys(e).reduce((function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t}),{})}function Se(){return document.createElement("div")}function He(e){return["Element","Fragment"].some((function(t){return Ae(e,t)}))}function Me(e){return Ae(e,"MouseEvent")}function Re(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function Ve(e){return He(e)?[e]:function(e){return Ae(e,"NodeList")}(e)?Ce(e):Array.isArray(e)?e:Ce(document.querySelectorAll(e))}function We(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function Be(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function Ne(e){var t,n=De(e)[0];return null!=n&&null!=(t=n.ownerDocument)&&t.body?n.ownerDocument:document}function Ie(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}function _e(e,t){for(var n=t;n;){var r;if(e.contains(n))return!0;n=null==n.getRootNode||null==(r=n.getRootNode())?void 0:r.host}return!1}var Ue={isTouch:!1},qe=0;function $e(){Ue.isTouch||(Ue.isTouch=!0,window.performance&&document.addEventListener("mousemove",Fe))}function Fe(){var e=performance.now();e-qe<20&&(Ue.isTouch=!1,document.removeEventListener("mousemove",Fe)),qe=e}function ze(){var e=document.activeElement;if(Re(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}var Xe=!!("undefined"!==typeof window&&"undefined"!==typeof document)&&!!window.msCrypto;var Ye={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Je=Object.assign({appendTo:Oe,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Ye,{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),Ze=Object.keys(Je);function Ge(e){var t=(e.plugins||[]).reduce((function(t,n){var r,i=n.name,o=n.defaultValue;i&&(t[i]=void 0!==e[i]?e[i]:null!=(r=Je[i])?r:o);return t}),{});return Object.assign({},e,t)}function Ke(e,t){var n=Object.assign({},t,{content:Te(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(Ge(Object.assign({},Je,{plugins:t}))):Ze).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(i){t[n]=r}return t}),{})}(e,t.plugins));return n.aria=Object.assign({},Je.aria,n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function Qe(e,t){e.innerHTML=t}function et(e){var t=Se();return!0===e?t.className=ye:(t.className=we,He(e)?t.appendChild(e):Qe(t,e)),t}function tt(e,t){He(t.content)?(Qe(e,""),e.appendChild(t.content)):"function"!==typeof t.content&&(t.allowHTML?Qe(e,t.content):e.textContent=t.content)}function nt(e){var t=e.firstElementChild,n=Ce(t.children);return{box:t,content:n.find((function(e){return e.classList.contains(ge)})),arrow:n.find((function(e){return e.classList.contains(ye)||e.classList.contains(we)})),backdrop:n.find((function(e){return e.classList.contains(be)}))}}function rt(e){var t=Se(),n=Se();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=Se();function i(n,r){var i=nt(t),o=i.box,a=i.content,s=i.arrow;r.theme?o.setAttribute("data-theme",r.theme):o.removeAttribute("data-theme"),"string"===typeof r.animation?o.setAttribute("data-animation",r.animation):o.removeAttribute("data-animation"),r.inertia?o.setAttribute("data-inertia",""):o.removeAttribute("data-inertia"),o.style.maxWidth="number"===typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?o.setAttribute("role",r.role):o.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||tt(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(o.removeChild(s),o.appendChild(et(r.arrow))):o.appendChild(et(r.arrow)):s&&o.removeChild(s)}return r.className=ge,r.setAttribute("data-state","hidden"),tt(r,e.props),t.appendChild(n),n.appendChild(r),i(e.props,e.props),{popper:t,onUpdate:i}}rt.$$tippy=!0;var it=1,ot=[],at=[];function st(e,t){var n,r,i,o,a,s,c,u,f=Ke(e,Object.assign({},Je,Ge(Pe(t)))),p=!1,d=!1,l=!1,m=!1,v=[],h=je(X,f.interactiveDebounce),g=it++,b=(u=f.plugins).filter((function(e,t){return u.indexOf(e)===t})),y={id:g,reference:e,popper:Se(),popperInstance:null,props:f,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:b,clearDelayTimeouts:function(){clearTimeout(n),clearTimeout(r),cancelAnimationFrame(i)},setProps:function(t){0;if(y.state.isDestroyed)return;H("onBeforeUpdate",[y,t]),F();var n=y.props,r=Ke(e,Object.assign({},n,Pe(t),{ignoreAttributes:!0}));y.props=r,$(),n.interactiveDebounce!==r.interactiveDebounce&&(V(),h=je(X,r.interactiveDebounce));n.triggerTarget&&!r.triggerTarget?De(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded");R(),S(),O&&O(n,r);y.popperInstance&&(G(),Q().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));H("onAfterUpdate",[y,t])},setContent:function(e){y.setProps({content:e})},show:function(){0;var e=y.state.isVisible,t=y.state.isDestroyed,n=!y.state.isEnabled,r=Ue.isTouch&&!y.props.touch,i=Ee(y.props.duration,0,Je.duration);if(e||t||n||r)return;if(L().hasAttribute("disabled"))return;if(H("onShow",[y],!1),!1===y.props.onShow(y))return;y.state.isVisible=!0,D()&&(x.style.visibility="visible");S(),I(),y.state.isMounted||(x.style.transition="none");if(D()){var o=C(),a=o.box,c=o.content;We([a,c],0)}s=function(){var e;if(y.state.isVisible&&!m){if(m=!0,x.offsetHeight,x.style.transition=y.props.moveTransition,D()&&y.props.animation){var t=C(),n=t.box,r=t.content;We([n,r],i),Be([n,r],"visible")}M(),R(),Le(at,y),null==(e=y.popperInstance)||e.forceUpdate(),H("onMount",[y]),y.props.animation&&D()&&function(e,t){U(e,t)}(i,(function(){y.state.isShown=!0,H("onShown",[y])}))}},function(){var e,t=y.props.appendTo,n=L();e=y.props.interactive&&t===Oe||"parent"===t?n.parentNode:Te(t,[n]);e.contains(x)||e.appendChild(x);y.state.isMounted=!0,G(),!1}()},hide:function(){0;var e=!y.state.isVisible,t=y.state.isDestroyed,n=!y.state.isEnabled,r=Ee(y.props.duration,1,Je.duration);if(e||t||n)return;if(H("onHide",[y],!1),!1===y.props.onHide(y))return;y.state.isVisible=!1,y.state.isShown=!1,m=!1,p=!1,D()&&(x.style.visibility="hidden");if(V(),_(),S(!0),D()){var i=C(),o=i.box,a=i.content;y.props.animation&&(We([o,a],r),Be([o,a],"hidden"))}M(),R(),y.props.animation?D()&&function(e,t){U(e,(function(){!y.state.isVisible&&x.parentNode&&x.parentNode.contains(x)&&t()}))}(r,y.unmount):y.unmount()},hideWithInteractivity:function(e){0;k().addEventListener("mousemove",h),Le(ot,h),h(e)},enable:function(){y.state.isEnabled=!0},disable:function(){y.hide(),y.state.isEnabled=!1},unmount:function(){0;y.state.isVisible&&y.hide();if(!y.state.isMounted)return;K(),Q().forEach((function(e){e._tippy.unmount()})),x.parentNode&&x.parentNode.removeChild(x);at=at.filter((function(e){return e!==y})),y.state.isMounted=!1,H("onHidden",[y])},destroy:function(){0;if(y.state.isDestroyed)return;y.clearDelayTimeouts(),y.unmount(),F(),delete e._tippy,y.state.isDestroyed=!0,H("onDestroy",[y])}};if(!f.render)return y;var w=f.render(y),x=w.popper,O=w.onUpdate;x.setAttribute("data-tippy-root",""),x.id="tippy-"+y.id,y.popper=x,e._tippy=y,x._tippy=y;var E=b.map((function(e){return e.fn(y)})),A=e.hasAttribute("aria-expanded");return $(),R(),S(),H("onCreate",[y]),f.showOnCreate&&ee(),x.addEventListener("mouseenter",(function(){y.props.interactive&&y.state.isVisible&&y.clearDelayTimeouts()})),x.addEventListener("mouseleave",(function(){y.props.interactive&&y.props.trigger.indexOf("mouseenter")>=0&&k().addEventListener("mousemove",h)})),y;function T(){var e=y.props.touch;return Array.isArray(e)?e:[e,0]}function j(){return"hold"===T()[0]}function D(){var e;return!(null==(e=y.props.render)||!e.$$tippy)}function L(){return c||e}function k(){var e=L().parentNode;return e?Ne(e):document}function C(){return nt(x)}function P(e){return y.state.isMounted&&!y.state.isVisible||Ue.isTouch||o&&"focus"===o.type?0:Ee(y.props.delay,e?0:1,Je.delay)}function S(e){void 0===e&&(e=!1),x.style.pointerEvents=y.props.interactive&&!e?"":"none",x.style.zIndex=""+y.props.zIndex}function H(e,t,n){var r;(void 0===n&&(n=!0),E.forEach((function(n){n[e]&&n[e].apply(n,t)})),n)&&(r=y.props)[e].apply(r,t)}function M(){var t=y.props.aria;if(t.content){var n="aria-"+t.content,r=x.id;De(y.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n);if(y.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var i=t&&t.replace(r,"").trim();i?e.setAttribute(n,i):e.removeAttribute(n)}}))}}function R(){!A&&y.props.aria.expanded&&De(y.props.triggerTarget||e).forEach((function(e){y.props.interactive?e.setAttribute("aria-expanded",y.state.isVisible&&e===L()?"true":"false"):e.removeAttribute("aria-expanded")}))}function V(){k().removeEventListener("mousemove",h),ot=ot.filter((function(e){return e!==h}))}function W(t){if(!Ue.isTouch||!l&&"mousedown"!==t.type){var n=t.composedPath&&t.composedPath()[0]||t.target;if(!y.props.interactive||!_e(x,n)){if(De(y.props.triggerTarget||e).some((function(e){return _e(e,n)}))){if(Ue.isTouch)return;if(y.state.isVisible&&y.props.trigger.indexOf("click")>=0)return}else H("onClickOutside",[y,t]);!0===y.props.hideOnClick&&(y.clearDelayTimeouts(),y.hide(),d=!0,setTimeout((function(){d=!1})),y.state.isMounted||_())}}}function B(){l=!0}function N(){l=!1}function I(){var e=k();e.addEventListener("mousedown",W,!0),e.addEventListener("touchend",W,xe),e.addEventListener("touchstart",N,xe),e.addEventListener("touchmove",B,xe)}function _(){var e=k();e.removeEventListener("mousedown",W,!0),e.removeEventListener("touchend",W,xe),e.removeEventListener("touchstart",N,xe),e.removeEventListener("touchmove",B,xe)}function U(e,t){var n=C().box;function r(e){e.target===n&&(Ie(n,"remove",r),t())}if(0===e)return t();Ie(n,"remove",a),Ie(n,"add",r),a=r}function q(t,n,r){void 0===r&&(r=!1),De(y.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),v.push({node:e,eventType:t,handler:n,options:r})}))}function $(){var e;j()&&(q("touchstart",z,{passive:!0}),q("touchend",Y,{passive:!0})),(e=y.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(q(e,z),e){case"mouseenter":q("mouseleave",Y);break;case"focus":q(Xe?"focusout":"blur",J);break;case"focusin":q("focusout",J)}}))}function F(){v.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,i=e.options;t.removeEventListener(n,r,i)})),v=[]}function z(e){var t,n=!1;if(y.state.isEnabled&&!Z(e)&&!d){var r="focus"===(null==(t=o)?void 0:t.type);o=e,c=e.currentTarget,R(),!y.state.isVisible&&Me(e)&&ot.forEach((function(t){return t(e)})),"click"===e.type&&(y.props.trigger.indexOf("mouseenter")<0||p)&&!1!==y.props.hideOnClick&&y.state.isVisible?n=!0:ee(e),"click"===e.type&&(p=!n),n&&!r&&te(e)}}function X(e){var t=e.target,n=L().contains(t)||x.contains(t);if("mousemove"!==e.type||!n){var r=Q().concat(x).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:f}:null})).filter(Boolean);(function(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,i=e.popperState,o=e.props.interactiveBorder,a=ke(i.placement),s=i.modifiersData.offset;if(!s)return!0;var c="bottom"===a?s.top.y:0,u="top"===a?s.bottom.y:0,f="right"===a?s.left.x:0,p="left"===a?s.right.x:0,d=t.top-r+c>o,l=r-t.bottom-u>o,m=t.left-n+f>o,v=n-t.right-p>o;return d||l||m||v}))})(r,e)&&(V(),te(e))}}function Y(e){Z(e)||y.props.trigger.indexOf("click")>=0&&p||(y.props.interactive?y.hideWithInteractivity(e):te(e))}function J(e){y.props.trigger.indexOf("focusin")<0&&e.target!==L()||y.props.interactive&&e.relatedTarget&&x.contains(e.relatedTarget)||te(e)}function Z(e){return!!Ue.isTouch&&j()!==e.type.indexOf("touch")>=0}function G(){K();var t=y.props,n=t.popperOptions,r=t.placement,i=t.offset,o=t.getReferenceClientRect,a=t.moveTransition,c=D()?nt(x).arrow:null,u=o?{getBoundingClientRect:o,contextElement:o.contextElement||L()}:e,f={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(D()){var n=C().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}},p=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},f];D()&&c&&p.push({name:"arrow",options:{element:c,padding:3}}),p.push.apply(p,(null==n?void 0:n.modifiers)||[]),y.popperInstance=he(u,x,Object.assign({},n,{placement:r,onFirstUpdate:s,modifiers:p}))}function K(){y.popperInstance&&(y.popperInstance.destroy(),y.popperInstance=null)}function Q(){return Ce(x.querySelectorAll("[data-tippy-root]"))}function ee(e){y.clearDelayTimeouts(),e&&H("onTrigger",[y,e]),I();var t=P(!0),r=T(),i=r[0],o=r[1];Ue.isTouch&&"hold"===i&&o&&(t=o),t?n=setTimeout((function(){y.show()}),t):y.show()}function te(e){if(y.clearDelayTimeouts(),H("onUntrigger",[y,e]),y.state.isVisible){if(!(y.props.trigger.indexOf("mouseenter")>=0&&y.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&p)){var t=P(!1);t?r=setTimeout((function(){y.state.isVisible&&y.hide()}),t):i=requestAnimationFrame((function(){y.hide()}))}}else _()}}function ct(e,t){void 0===t&&(t={});var n=Je.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",$e,xe),window.addEventListener("blur",ze);var r=Object.assign({},t,{plugins:n}),i=Ve(e).reduce((function(e,t){var n=t&&st(t,r);return n&&e.push(n),e}),[]);return He(e)?i[0]:i}ct.defaultProps=Je,ct.setDefaultProps=function(e){Object.keys(e).forEach((function(t){Je[t]=e[t]}))},ct.currentInput=Ue;Object.assign({},K,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}});ct.setDefaultProps({render:rt});var ut=ct,ft=n(2791),pt=n(4164);function dt(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var lt="undefined"!==typeof window&&"undefined"!==typeof document;function mt(e,t){e&&("function"===typeof e&&e(t),{}.hasOwnProperty.call(e,"current")&&(e.current=t))}function vt(){return lt&&document.createElement("div")}function ht(e,t){if(e===t)return!0;if("object"===typeof e&&null!=e&&"object"===typeof t&&null!=t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e){if(!t.hasOwnProperty(n))return!1;if(!ht(e[n],t[n]))return!1}return!0}return!1}function gt(e){var t=[];return e.forEach((function(e){t.find((function(t){return ht(e,t)}))||t.push(e)})),t}function bt(e,t){var n,r;return Object.assign({},t,{popperOptions:Object.assign({},e.popperOptions,t.popperOptions,{modifiers:gt([].concat((null==(n=e.popperOptions)?void 0:n.modifiers)||[],(null==(r=t.popperOptions)?void 0:r.modifiers)||[]))})})}var yt=lt?ft.useLayoutEffect:ft.useEffect;function wt(e){var t=(0,ft.useRef)();return t.current||(t.current="function"===typeof e?e():e),t.current}function xt(e,t,n){n.split(/\s+/).forEach((function(n){n&&e.classList[t](n)}))}var Ot={name:"className",defaultValue:"",fn:function(e){var t=e.popper.firstElementChild,n=function(){var t;return!!(null==(t=e.props.render)?void 0:t.$$tippy)};function r(){e.props.className&&!n()||xt(t,"add",e.props.className)}return{onCreate:r,onBeforeUpdate:function(){n()&&xt(t,"remove",e.props.className)},onAfterUpdate:r}}};function Et(e){return function(t){var n=t.children,r=t.content,i=t.visible,o=t.singleton,a=t.render,s=t.reference,c=t.disabled,u=void 0!==c&&c,f=t.ignoreAttributes,p=void 0===f||f,d=(t.__source,t.__self,dt(t,["children","content","visible","singleton","render","reference","disabled","ignoreAttributes","__source","__self"])),l=void 0!==i,m=void 0!==o,v=(0,ft.useState)(!1),h=v[0],g=v[1],b=(0,ft.useState)({}),y=b[0],w=b[1],x=(0,ft.useState)(),O=x[0],E=x[1],A=wt((function(){return{container:vt(),renders:1}})),T=Object.assign({ignoreAttributes:p},d,{content:A.container});l&&(T.trigger="manual",T.hideOnClick=!1),m&&(u=!0);var j=T,D=T.plugins||[];a&&(j=Object.assign({},T,{plugins:m&&null!=o.data?[].concat(D,[{fn:function(){return{onTrigger:function(e,t){var n=o.data.children.find((function(e){return e.instance.reference===t.currentTarget}));e.state.$$activeSingletonInstance=n.instance,E(n.content)}}}}]):D,render:function(){return{popper:A.container}}}));var L=[s].concat(n?[n.type]:[]);return yt((function(){var t=s;s&&s.hasOwnProperty("current")&&(t=s.current);var n=e(t||A.ref||vt(),Object.assign({},j,{plugins:[Ot].concat(T.plugins||[])}));return A.instance=n,u&&n.disable(),i&&n.show(),m&&o.hook({instance:n,content:r,props:j,setSingletonContent:E}),g(!0),function(){n.destroy(),null==o||o.cleanup(n)}}),L),yt((function(){var e;if(1!==A.renders){var t=A.instance;t.setProps(bt(t.props,j)),null==(e=t.popperInstance)||e.forceUpdate(),u?t.disable():t.enable(),l&&(i?t.show():t.hide()),m&&o.hook({instance:t,content:r,props:j,setSingletonContent:E})}else A.renders++})),yt((function(){var e;if(a){var t=A.instance;t.setProps({popperOptions:Object.assign({},t.props.popperOptions,{modifiers:[].concat(((null==(e=t.props.popperOptions)?void 0:e.modifiers)||[]).filter((function(e){return"$$tippyReact"!==e.name})),[{name:"$$tippyReact",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t,n=e.state,r=null==(t=n.modifiersData)?void 0:t.hide;y.placement===n.placement&&y.referenceHidden===(null==r?void 0:r.isReferenceHidden)&&y.escaped===(null==r?void 0:r.hasPopperEscaped)||w({placement:n.placement,referenceHidden:null==r?void 0:r.isReferenceHidden,escaped:null==r?void 0:r.hasPopperEscaped}),n.attributes.popper={}}}])})})}}),[y.placement,y.referenceHidden,y.escaped].concat(L)),ft.createElement(ft.Fragment,null,n?(0,ft.cloneElement)(n,{ref:function(e){A.ref=e,mt(n.ref,e)}}):null,h&&(0,pt.createPortal)(a?a(function(e){var t={"data-placement":e.placement};return e.referenceHidden&&(t["data-reference-hidden"]=""),e.escaped&&(t["data-escaped"]=""),t}(y),O,A.instance):r,A.container))}}var At=function(e,t){return(0,ft.forwardRef)((function(n,r){var i=n.children,o=dt(n,["children"]);return ft.createElement(e,Object.assign({},t,o),i?(0,ft.cloneElement)(i,{ref:function(e){mt(r,e),mt(i.ref,e)}}):null)}))},Tt=At(Et(ut))}}]);
//# sourceMappingURL=2271.c60f383b.chunk.js.map