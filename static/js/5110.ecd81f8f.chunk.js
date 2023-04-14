"use strict";(self.webpackChunksito_portfolio=self.webpackChunksito_portfolio||[]).push([[5110],{5110:function(t,n,e){e.d(n,{m:function(){return rt}});var r=e(9388),o=e(2791),a=e(9606),i=e(3552),u=e(5646),s=e(7996),l=Object.keys(i.A),c=l.length;var d=(0,o.createContext)({transformPagePoint:function(t){return t},isStatic:!1,reducedMotion:"never"}),f=(0,o.createContext)({});var p=e(131),v=e(6219),m=v.j?o.useLayoutEffect:o.useEffect,y={current:null},g=!1;function h(){return!g&&function(){if(g=!0,v.j)if(window.matchMedia){var t=window.matchMedia("(prefers-reduced-motion)"),n=function(){return y.current=t.matches};t.addListener(n),n()}else y.current=!1}(),(0,r.CR)((0,o.useState)(y.current),1)[0]}function C(t,n,e,r){var a=(0,o.useContext)(s.u),i=(0,o.useContext)(f).visualElement,u=(0,o.useContext)(p.O),l=function(){var t=h(),n=(0,o.useContext)(d).reducedMotion;return"never"!==n&&("always"===n||t)}(),c=(0,o.useRef)(void 0);r||(r=a.renderer),!c.current&&r&&(c.current=r(t,{visualState:n,parent:i,props:e,presenceId:null===u||void 0===u?void 0:u.id,blockInitialAnimation:!1===(null===u||void 0===u?void 0:u.initial),shouldReduceMotion:l}));var v=c.current;return m((function(){null===v||void 0===v||v.syncRender()})),(0,o.useEffect)((function(){var t;null===(t=null===v||void 0===v?void 0:v.animationState)||void 0===t||t.animateChanges()})),m((function(){return function(){return null===v||void 0===v?void 0:v.notifyUnmount()}}),[]),v}function S(t){return"object"===typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}var w=e(9103);function E(t){var n=function(t,n){if((0,w.O6)(t)){var e=t.initial,r=t.animate;return{initial:!1===e||(0,w.$L)(e)?e:void 0,animate:(0,w.$L)(r)?r:void 0}}return!1!==t.inherit?n:{}}(t,(0,o.useContext)(f)),e=n.initial,r=n.animate;return(0,o.useMemo)((function(){return{initial:e,animate:r}}),[x(e),x(r)])}function x(t){return Array.isArray(t)?t.join(" "):t}var M=e(9829),b=!1,P=1;var V=(0,o.createContext)({}),A=(0,o.createContext)({});var j=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return(0,r.ZT)(n,t),n.prototype.getSnapshotBeforeUpdate=function(){return this.updateProps(),null},n.prototype.componentDidUpdate=function(){},n.prototype.updateProps=function(){var t=this.props,n=t.visualElement,e=t.props;n&&n.setProps(e)},n.prototype.render=function(){return this.props.children},n}(o.Component);function L(t){var n=t.preloadedFeatures,e=t.createVisualElement,p=t.projectionNodeConstructor,m=t.useRender,y=t.useVisualState,g=t.Component;return n&&(0,i.K)(n),(0,o.forwardRef)((function(t,h){var w=function(t){var n,e=t.layoutId,r=null===(n=(0,o.useContext)(V))||void 0===n?void 0:n.id;return r&&void 0!==e?r+"-"+e:e}(t);t=(0,r.pi)((0,r.pi)({},t),{layoutId:w});var x=(0,o.useContext)(d),L=null,T=E(t),k=x.isStatic?void 0:(0,M.h)((function(){if(b)return P++})),O=y(t,x.isStatic);return!x.isStatic&&v.j&&(T.visualElement=C(g,O,(0,r.pi)((0,r.pi)({},x),t),e),function(t,n,e,r){var a,i=n.layoutId,u=n.layout,s=n.drag,l=n.dragConstraints,c=n.layoutScroll,d=(0,o.useContext)(A);r&&e&&!(null===e||void 0===e?void 0:e.projection)&&(e.projection=new r(t,e.getLatestValues(),null===(a=e.parent)||void 0===a?void 0:a.projection),e.projection.setOptions({layoutId:i,layout:u,alwaysMeasureLayout:Boolean(s)||l&&S(l),visualElement:e,scheduleRender:function(){return e.scheduleRender()},animationType:"string"===typeof u?u:"both",initialPromotionConfig:d,layoutScroll:c}))}(k,t,T.visualElement,p||i.A.projectionNodeConstructor),L=function(t,n,e){var d=[],f=(0,o.useContext)(s.u);if(!n)return null;"production"!==a.O&&e&&f.strict&&(0,u.k)(!1,"You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");for(var p=0;p<c;p++){var v=l[p],m=i.A[v],y=m.isEnabled,g=m.Component;y(t)&&g&&d.push(o.createElement(g,(0,r.pi)({key:v},t,{visualElement:n})))}return d}(t,T.visualElement,n)),o.createElement(j,{visualElement:T.visualElement,props:(0,r.pi)((0,r.pi)({},x),t)},L,o.createElement(f.Provider,{value:T},m(g,t,k,function(t,n,e){return(0,o.useCallback)((function(r){var o;r&&(null===(o=t.mount)||void 0===o||o.call(t,r)),n&&(r?n.mount(r):n.unmount()),e&&("function"===typeof e?e(r):S(e)&&(e.current=r))}),[n])}(O,T.visualElement,h),O,x.isStatic,T.visualElement)))}))}var T=e(7171),k=e(7125),O=e(1453),R=e(9634),D=function(){return{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}};function B(t,n,e){for(var r in n)(0,O.i)(n[r])||(0,k.j)(r,e)||(t[r]=n[r])}function I(t,n,e){var a={};return B(a,t.style||{},t),Object.assign(a,function(t,n,e){var a=t.transformTemplate;return(0,o.useMemo)((function(){var t={style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}};(0,R.r)(t,n,{enableHardwareAcceleration:!e},a);var o=t.vars,i=t.style;return(0,r.pi)((0,r.pi)({},o),i)}),[n])}(t,n,e)),t.transformValues&&(a=t.transformValues(a)),a}function H(t,n,e){var r={},o=I(t,n,e);return Boolean(t.drag)&&!1!==t.dragListener&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=!0===t.drag?"none":"pan-".concat("x"===t.drag?"y":"x")),r.style=o,r}var U=new Set(["initial","animate","exit","style","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","whileDrag","onPan","onPanStart","onPanEnd","onPanSessionStart","onTap","onTapStart","onTapCancel","onHoverStart","onHoverEnd","whileFocus","whileTap","whileHover","whileInView","onViewportEnter","onViewportLeave","viewport","layoutScroll"]);function F(t){return U.has(t)}var K,_=function(t){return!F(t)};try{(K=require("@emotion/is-prop-valid").default)&&(_=function(t){return t.startsWith("on")?!F(t):K(t)})}catch(ot){}var W=e(919),q=function(){return(0,r.pi)((0,r.pi)({},{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}),{attrs:{}})};function N(t,n){var e=(0,o.useMemo)((function(){var e=q();return(0,W.i)(e,n,{enableHardwareAcceleration:!1},t.transformTemplate),(0,r.pi)((0,r.pi)({},e.attrs),{style:(0,r.pi)({},e.style)})}),[n]);if(t.style){var a={};B(a,t.style,t),e.style=(0,r.pi)((0,r.pi)({},a),e.style)}return e}function Y(t){void 0===t&&(t=!1);return function(n,e,a,i,u,s){var l=u.latestValues,c=((0,T.q)(n)?N:H)(e,l,s),d=function(t,n,e){var r={};for(var o in t)(_(o)||!0===e&&F(o)||!n&&!F(o)||t.draggable&&o.startsWith("onDrag"))&&(r[o]=t[o]);return r}(e,"string"===typeof n,t),f=(0,r.pi)((0,r.pi)((0,r.pi)({},d),c),{ref:i});return a&&(f["data-projection-id"]=a),(0,o.createElement)(n,f)}}var $=e(9014),z=e(8927),Q=e(8597),X=e(1471);function Z(t){var n=(0,O.i)(t)?t.get():t;return(0,X.p)(n)?n.toValue():n}function G(t,n,e,r){var o=t.scrapeMotionValuesFromProps,a=t.createRenderState,i=t.onMount,u={latestValues:tt(n,e,r,o),renderState:a()};return i&&(u.mount=function(t){return i(n,t,u)}),u}var J=function(t){return function(n,e){var r=(0,o.useContext)(f),a=(0,o.useContext)(p.O);return e?G(t,n,r,a):(0,M.h)((function(){return G(t,n,r,a)}))}};function tt(t,n,e,o){var a={},i=!1===(null===e||void 0===e?void 0:e.initial),u=o(t);for(var s in u)a[s]=Z(u[s]);var l=t.initial,c=t.animate,d=(0,w.O6)(t),f=(0,w.e8)(t);n&&f&&!d&&!1!==t.inherit&&(null!==l&&void 0!==l||(l=n.initial),null!==c&&void 0!==c||(c=n.animate));var p=i||!1===l,v=p?c:l;v&&"boolean"!==typeof v&&!(0,Q.H)(v)&&(Array.isArray(v)?v:[v]).forEach((function(n){var e=(0,w.oQ)(t,n);if(e){var o=e.transitionEnd;e.transition;var i=(0,r._T)(e,["transitionEnd","transition"]);for(var u in i){var s=i[u];if(Array.isArray(s))s=s[p?s.length-1:0];null!==s&&(a[u]=s)}for(var u in o)a[u]=o[u]}}));return a}var nt={useVisualState:J({scrapeMotionValuesFromProps:z.U,createRenderState:q,onMount:function(t,n,e){var r=e.renderState,o=e.latestValues;try{r.dimensions="function"===typeof n.getBBox?n.getBBox():n.getBoundingClientRect()}catch(a){r.dimensions={x:0,y:0,width:0,height:0}}(0,W.i)(r,o,{enableHardwareAcceleration:!1},t.transformTemplate),(0,$.K)(n,r)}})},et={useVisualState:J({scrapeMotionValuesFromProps:e(2034).U,createRenderState:D})};var rt=function(t){function n(n,e){return void 0===e&&(e={}),L(t(n,e))}if("undefined"===typeof Proxy)return n;var e=new Map;return new Proxy(n,{get:function(t,r){return e.has(r)||e.set(r,n(r)),e.get(r)}})}((function(t,n,e,o,a){var i=n.forwardMotionProps,u=void 0!==i&&i,s=(0,T.q)(t)?nt:et;return(0,r.pi)((0,r.pi)({},s),{preloadedFeatures:e,useRender:Y(u),createVisualElement:o,projectionNodeConstructor:a,Component:t})}))}}]);
//# sourceMappingURL=5110.ecd81f8f.chunk.js.map