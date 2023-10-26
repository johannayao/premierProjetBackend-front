/*! For license information please see 6931-67c9c8b83a7721f595ca.js.LICENSE.txt */
(self.webpackChunk_unisporkal_global_nav=self.webpackChunk_unisporkal_global_nav||[]).push([[6931],{844:function(e,t,n){"use strict";n.d(t,{z:function(){return R}});var r=n(7462),o=n(3366),l=n(2747),u=(n(5697),n(4780)),s=n(8562);function i(e){return(0,s.Z)("MuiButton",e)}(0,n(1588).Z)("MuiButton",["root","active","disabled","focusVisible"]);let a,c=!0,f=!1;const d={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function v(e){e.metaKey||e.altKey||e.ctrlKey||(c=!0)}function p(){c=!1}function b(){"hidden"===this.visibilityState&&f&&(c=!0)}function y(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return c||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!d[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}function h(){const e=l.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",v,!0),t.addEventListener("mousedown",p,!0),t.addEventListener("pointerdown",p,!0),t.addEventListener("touchstart",p,!0),t.addEventListener("visibilitychange",b,!0))}),[]),t=l.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!y(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(f=!0,window.clearTimeout(a),a=window.setTimeout((()=>{f=!1}),100),t.current=!1,!0)},ref:e}}var m=n(3703),g=n(4397);var Z=n(148),k=n(1873),w=n(5893);const S=["action","children","disabled","focusableWhenDisabled","onFocusVisible","slotProps","slots"],R=l.forwardRef((function(e,t){var n;const{action:s,children:a,focusableWhenDisabled:c=!1,slotProps:f={},slots:d={}}=e,v=(0,o.Z)(e,S),p=l.useRef(),{active:b,focusVisible:y,setFocusVisible:R,getRootProps:P}=function(e={}){const{disabled:t=!1,focusableWhenDisabled:n,href:o,rootRef:u,tabIndex:s,to:i,type:a}=e,c=l.useRef(),[f,d]=l.useState(!1),{isFocusVisibleRef:v,onFocus:p,onBlur:b,ref:y}=h(),[Z,k]=l.useState(!1);t&&!n&&Z&&k(!1),l.useEffect((()=>{v.current=Z}),[Z,v]);const[w,S]=l.useState(""),R=e=>t=>{var n;Z&&t.preventDefault(),null==(n=e.onMouseLeave)||n.call(e,t)},P=e=>t=>{var n,r;c.current||(c.current=t.currentTarget),p(t),!0===v.current&&(k(!0),null==(r=e.onFocusVisible)||r.call(e,t)),null==(n=e.onFocus)||n.call(e,t)},T=()=>{const e=c.current;return"BUTTON"===w||"INPUT"===w&&["button","submit","reset"].includes(null==e?void 0:e.type)||"A"===w&&(null==e?void 0:e.href)},x=e=>n=>{var r;t||null==(r=e.onClick)||r.call(e,n)},N=e=>n=>{var r;t||(d(!0),document.addEventListener("mouseup",(()=>{d(!1)}),{once:!0})),null==(r=e.onMouseDown)||r.call(e,n)},E=e=>n=>{var r,o;null==(r=e.onKeyDown)||r.call(e,n),n.defaultMuiPrevented||(n.target!==n.currentTarget||T()||" "!==n.key||n.preventDefault(),n.target!==n.currentTarget||" "!==n.key||t||d(!0),n.target!==n.currentTarget||T()||"Enter"!==n.key||t||(null==(o=e.onClick)||o.call(e,n),n.preventDefault()))},A=e=>n=>{var r,o;n.target===n.currentTarget&&d(!1),null==(r=e.onKeyUp)||r.call(e,n),n.target!==n.currentTarget||T()||t||" "!==n.key||n.defaultMuiPrevented||null==(o=e.onClick)||o.call(e,n)},M=l.useCallback((e=>{var t;S(null!=(t=null==e?void 0:e.tagName)?t:"")}),[]),C=(0,m.Z)(M,u,y,c),D={};return void 0!==s&&(D.tabIndex=s),"BUTTON"===w?(D.type=null!=a?a:"button",n?D["aria-disabled"]=t:D.disabled=t):""!==w&&(o||i||(D.role="button",D.tabIndex=null!=s?s:0),t&&(D["aria-disabled"]=t,D.tabIndex=n?null!=s?s:0:-1)),{getRootProps:(t={})=>{const n=(0,r.Z)({},(0,g._)(e),(0,g._)(t)),o=(0,r.Z)({type:a},n,D,t,{onBlur:(l=n,e=>{var t;b(e),!1===v.current&&k(!1),null==(t=l.onBlur)||t.call(l,e)}),onClick:x(n),onFocus:P(n),onKeyDown:E(n),onKeyUp:A(n),onMouseDown:N(n),onMouseLeave:R(n),ref:C});var l;return delete o.onFocusVisible,o},focusVisible:Z,setFocusVisible:k,active:f,rootRef:C}}((0,r.Z)({},e,{focusableWhenDisabled:c}));l.useImperativeHandle(s,(()=>({focusVisible:()=>{R(!0),p.current.focus()}})),[R]);const T=(0,r.Z)({},e,{active:b,focusableWhenDisabled:c,focusVisible:y}),x=(e=>{const{active:t,disabled:n,focusVisible:r}=e,o={root:["root",n&&"disabled",r&&"focusVisible",t&&"active"]};return(0,u.Z)(o,(0,k.T)(i))})(T),N=v.href||v.to?"a":"button",E=null!=(n=d.root)?n:N,A=(0,Z.y)({elementType:E,getSlotProps:P,externalForwardedProps:v,externalSlotProps:f.root,additionalProps:{ref:t},ownerState:T,className:x.root});return(0,w.jsx)(E,(0,r.Z)({},A,{children:a}))}))},1873:function(e,t,n){"use strict";n.d(t,{T:function(){return u}});var r=n(2747);n(5893);const o={disableDefaultClasses:!1},l=r.createContext(o);function u(e){const{disableDefaultClasses:t}=r.useContext(l);return n=>t?"":e(n)}},4397:function(e,t,n){"use strict";function r(e,t=[]){if(void 0===e)return{};const n={};return Object.keys(e).filter((n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n))).forEach((t=>{n[t]=e[t]})),n}n.d(t,{_:function(){return r}})},8442:function(e,t,n){"use strict";function r(e){return"string"==typeof e}n.d(t,{X:function(){return r}})},148:function(e,t,n){"use strict";n.d(t,{y:function(){return d}});var r=n(7462),o=n(3366),l=n(3703),u=n(8442);function s(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=s(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var i=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=s(e))&&(r&&(r+=" "),r+=t);return r},a=n(4397);function c(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t]))).forEach((n=>{t[n]=e[n]})),t}const f=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function d(e){var t;const{elementType:n,externalSlotProps:s,ownerState:d,skipResolvingSlotProps:v=!1}=e,p=(0,o.Z)(e,f),b=v?{}:function(e,t,n){return"function"==typeof e?e(t,n):e}(s,d),{props:y,internalRef:h}=function(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:o,externalForwardedProps:l,className:u}=e;if(!t){const e=i(null==l?void 0:l.className,null==o?void 0:o.className,u,null==n?void 0:n.className),t=(0,r.Z)({},null==n?void 0:n.style,null==l?void 0:l.style,null==o?void 0:o.style),s=(0,r.Z)({},n,l,o);return e.length>0&&(s.className=e),Object.keys(t).length>0&&(s.style=t),{props:s,internalRef:void 0}}const s=(0,a._)((0,r.Z)({},l,o)),f=c(o),d=c(l),v=t(s),p=i(null==v?void 0:v.className,null==n?void 0:n.className,u,null==l?void 0:l.className,null==o?void 0:o.className),b=(0,r.Z)({},null==v?void 0:v.style,null==n?void 0:n.style,null==l?void 0:l.style,null==o?void 0:o.style),y=(0,r.Z)({},v,n,d,f);return p.length>0&&(y.className=p),Object.keys(b).length>0&&(y.style=b),{props:y,internalRef:v.ref}}((0,r.Z)({},p,{externalSlotProps:b})),m=(0,l.Z)(h,null==b?void 0:b.ref,null==(t=e.additionalProps)?void 0:t.ref),g=function(e,t,n){return void 0===e||(0,u.X)(e)?t:(0,r.Z)({},t,{ownerState:(0,r.Z)({},t.ownerState,n)})}(n,(0,r.Z)({},y,{ref:m}),d);return g}},4780:function(e,t,n){"use strict";function r(e,t,n=void 0){const r={};return Object.keys(e).forEach((o=>{r[o]=e[o].reduce(((e,r)=>{if(r){const o=t(r);""!==o&&e.push(o),n&&n[r]&&e.push(n[r])}return e}),[]).join(" ")})),r}n.d(t,{Z:function(){return r}})},8562:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});const r=e=>e;var o=(()=>{let e=r;return{configure(t){e=t},generate(t){return e(t)},reset(){e=r}}})();const l={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function u(e,t,n="Mui"){const r=l[t];return r?`${n}-${r}`:`${o.generate(e)}-${t}`}},1588:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(8562);function o(e,t,n="Mui"){const o={};return t.forEach((t=>{o[t]=(0,r.Z)(e,t,n)})),o}},7960:function(e,t,n){"use strict";function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:function(){return r}})},3703:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(2747),o=n(7960);function l(...e){return r.useMemo((()=>e.every((e=>null==e))?null:t=>{e.forEach((e=>{(0,o.Z)(e,t)}))}),e)}},6931:function(e,t,n){"use strict";n.d(t,{zx:function(){return d},tS:function(){return r},hZ:function(){return o}});var r,o,l=n(5893),u=n(2747),s=n(4184),i=n.n(s),a=n(844),c=n(7850);!function(e){e.EXTRA_SMALL="extraSmall",e.SMALL="small",e.MEDIUM="medium",e.LARGE="large"}(r||(r={})),function(e){e.PRIMARY="primary",e.SECONDARY="secondary",e.TERTIARY="tertiary",e.HOLLOW="hollow"}(o||(o={}));const f=(0,u.forwardRef)((({variant:e=o.PRIMARY,size:t=r.SMALL,children:n,className:u,fullWidth:s=!1,...f},d)=>{const v=(0,c.F)("button"),p=i()(v.Button,v[e],v[t],{[v.fullWidth]:s},u),b=i()(f.pendingClassName);return(0,l.jsx)(a.z,{...f,className:i()(p,{[b]:f.pending}),ref:d,children:f.pending&&f.pendingChildren?f.pendingChildren:n})}));f.displayName="Button";var d=f},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var u=o.apply(null,n);u&&e.push(u)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var s in n)r.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=6931-67c9c8b83a7721f595ca.js.map