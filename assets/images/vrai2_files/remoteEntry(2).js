var customer_notifications;!function(){"use strict";var e,n,t,r,o,i,u,c,f,a,l,s,d,b,h,m,p,g,y,v={5805:function(e,n,t){var r={"./CustomerNotifications":function(){return Promise.all([t.e(951),t.e(561),t.e(747),t.e(201),t.e(737),t.e(979)]).then((function(){return function(){return t(9391)}}))},"./UserPanel":function(){return Promise.all([t.e(747),t.e(201),t.e(868)]).then((function(){return function(){return t(7868)}}))}},o=function(e,n){return t.R=n,n=t.o(r,e)?r[e]():Promise.resolve().then((function(){throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,n},i=function(e,n){if(t.S){var r="default",o=t.S[r];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[r]=e,t.I(r,n)}};t.d(n,{get:function(){return o},init:function(){return i}})}},k={};function w(e){var n=k[e];if(void 0!==n)return n.exports;var t=k[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,w),t.loaded=!0,t.exports}w.m=v,w.c=k,w.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return w.d(n,{a:n}),n},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},w.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var o=Object.create(null);w.r(o);var i={};e=e||[null,n({}),n([]),n(n)];for(var u=2&r&&t;"object"==typeof u&&!~e.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return t[e]}}));return i.default=function(){return t},w.d(o,i),o},w.d=function(e,n){for(var t in n)w.o(n,t)&&!w.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},w.f={},w.e=function(e){return Promise.all(Object.keys(w.f).reduce((function(n,t){return w.f[t](e,n),n}),[]))},w.u=function(e){return({10:"config-locales-istock-tr-yml",24:"config-locales-istock-ko-yml",28:"config-locales-istock-fi-yml",115:"config-locales-istock-ja-yml",137:"config-locales-istock-hu-yml",149:"config-locales-istock-sv-yml",263:"config-locales-istock-cs-yml",330:"config-locales-istock-es-yml",359:"config-locales-istock-en-gb-yml",413:"config-locales-istock-uk-yml",415:"config-locales-istock-pl-yml",429:"config-locales-istock-fr-yml",432:"config-locales-istock-vi-yml",514:"config-locales-istock-it-yml",584:"config-locales-istock-nl-yml",644:"config-locales-istock-ru-yml",653:"config-locales-istock-de-yml",698:"config-locales-istock-ro-yml",904:"config-locales-istock-pt-pt-yml",911:"config-locales-istock-pt-br-yml",936:"config-locales-istock-en-us-yml",938:"config-locales-istock-zh-hk-yml",945:"config-locales-istock-id-yml",955:"config-locales-istock-th-yml"}[e]||e)+"-"+{10:"045e535fc2eed849fee8",24:"4d155634aaa87ec3f2cb",28:"35fc001990359f7dcafb",36:"72b78a776ed80a9dc845",56:"9344c1985bbbf4e586b1",79:"844e3f8eb9996a18f2f0",115:"eea119b65187553ca4bf",137:"3e04e561666f87a37f24",149:"6259e1a66d0275c2cb39",198:"fe55fc36129e254d8b17",201:"d6890afda0332b13ce6a",263:"39894441e7e8333965ac",294:"e67a82b3f4cdc4992c39",330:"2ce52ef162ac5766832e",359:"b126fe9dc35fad64211a",413:"f2470ba5dc2b5db4804e",415:"c2d3b6007d0d799f3be6",429:"d9b5d8813de9dea820fc",432:"8b36ddc574340d3b83c6",456:"4d211bba404ee266e6ba",514:"922b86f5a2802c5ef007",561:"b5db0b2d577f9b021c2a",584:"6cbb423e82036de5d25f",585:"9a77a359aa356f72f050",601:"18edf20b7bc4f28abe41",644:"855de164a52dd5350bde",653:"530687322af1314d1d11",698:"2750eaf228349239c03b",721:"be973b268e7961e1f4d2",730:"a0b82c202563ca61db87",737:"324e6f1f190eca02cfe6",747:"b8eeedb2bfb92a86f46f",789:"c7b8eca37f272ffb60a5",798:"aec996b0750eda8175b1",868:"445bf11039e4a7a977e0",904:"e0fa28f8c55a1377aa02",911:"8500f188abf18a86e548",935:"dc9e991d9d106e589685",936:"bf23f02d972b2932d812",938:"4fa3db161f049ed9f95d",945:"ff09eeb2ef44262996f6",951:"58ddd848edb45de2b18a",955:"276db1130a7ed9ed4568",979:"a488ae59943527f0ba5c"}[e]+".js"},w.miniCssF=function(e){return"css/"+e+"-"+{79:"3a2e25ce",868:"b32a7438",979:"3f74dd83"}[e]+".chunk.css"},w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t={},r="@unisporkal/customer-notifications:",w.l=function(e,n,o,i){if(t[e])t[e].push(n);else{var u,c;if(void 0!==o)for(var f=document.getElementsByTagName("script"),a=0;a<f.length;a++){var l=f[a];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+o){u=l;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,w.nc&&u.setAttribute("nonce",w.nc),u.setAttribute("data-webpack",r+o),u.src=e),t[e]=[n];var s=function(n,r){u.onerror=u.onload=null,clearTimeout(d);var o=t[e];if(delete t[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(r)})),n)return n(r)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),c&&document.head.appendChild(u)}},w.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},w.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){w.S={};var e={},n={};w.I=function(t,r){r||(r=[]);var o=n[t];if(o||(o=n[t]={}),!(r.indexOf(o)>=0)){if(r.push(o),e[t])return e[t];w.o(w.S,t)||(w.S[t]={});var i=w.S[t],u="@unisporkal/customer-notifications",c=function(e,n,t,r){var o=i[e]=i[e]||{},c=o[n];(!c||!c.loaded&&(!r!=!c.eager?r:u>c.from))&&(o[n]={get:t,from:u,eager:!!r})},f=[];if("default"===t)c("axios","1.1.3",(function(){return w.e(721).then((function(){return function(){return w(1721)}}))})),c("pubsub-js","1.9.4",(function(){return w.e(798).then((function(){return function(){return w(1798)}}))})),c("react-cookie","4.1.1",(function(){return Promise.all([w.e(747),w.e(601),w.e(789)]).then((function(){return function(){return w(3456)}}))})),c("react-dom","18.2.0",(function(){return Promise.all([w.e(935),w.e(747)]).then((function(){return function(){return w(3935)}}))})),c("react-transition-group","4.4.2",(function(){return Promise.all([w.e(198),w.e(747),w.e(56)]).then((function(){return function(){return w(4198)}}))})),c("react","18.2.0",(function(){return w.e(294).then((function(){return function(){return w(7294)}}))})),c("sanitize-html","2.4.0",(function(){return Promise.all([w.e(36),w.e(730)]).then((function(){return function(){return w(1036)}}))})),c("universal-cookie","4.0.4",(function(){return w.e(585).then((function(){return function(){return w(9585)}}))}));return f.length?e[t]=Promise.all(f).then((function(){return e[t]=1})):e[t]=1}}}(),w.p="/components/customer-notifications/static/",o=function(e){var n=function(e){return e.split(".").map((function(e){return+e==e?+e:e}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=t[1]?n(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,n(t[2]))),t[3]&&(r.push([]),r.push.apply(r,n(t[3]))),r},i=function(e,n){e=o(e),n=o(n);for(var t=0;;){if(t>=e.length)return t<n.length&&"u"!=(typeof n[t])[0];var r=e[t],i=(typeof r)[0];if(t>=n.length)return"u"==i;var u=n[t],c=(typeof u)[0];if(i!=c)return"o"==i&&"n"==c||"s"==c||"u"==i;if("o"!=i&&"u"!=i&&r!=u)return r<u;t++}},u=function(e,n){if(0 in e){n=o(n);var t=e[0],r=t<0;r&&(t=-t-1);for(var i=0,c=1,f=!0;;c++,i++){var a,l,s=c<e.length?(typeof e[c])[0]:"";if(i>=n.length||"o"==(l=(typeof(a=n[i]))[0]))return!f||("u"==s?c>t&&!r:""==s!=r);if("u"==l){if(!f||"u"!=s)return!1}else if(f)if(s==l)if(c<=t){if(a!=e[c])return!1}else{if(r?a>e[c]:a<e[c])return!1;a!=e[c]&&(f=!1)}else if("s"!=s&&"n"!=s){if(r||c<=t)return!1;f=!1,c--}else{if(c<=t||l<s!=r)return!1;f=!1}else"s"!=s&&"n"!=s&&(f=!1,c--)}}var d=[],b=d.pop.bind(d);for(i=1;i<e.length;i++){var h=e[i];d.push(1==h?b()|b():2==h?b()&b():h?u(h,n):!b())}return!!b()},c=function(e,n){var t=e[n];return Object.keys(t).reduce((function(e,n){return!e||!t[e].loaded&&i(e,n)?n:e}),0)},f=function(e,n,t,r){var o=c(e,t);return u(r,o)||"undefined"!=typeof console&&console.warn,l(e[t][o])},a=function(e,n,t){var r=e[n];return(n=Object.keys(r).reduce((function(e,n){return!u(t,n)||e&&!i(e,n)?e:n}),0))&&r[n]},l=function(e){return e.loaded=1,e.get()},d=(s=function(e){return function(n,t,r,o){var i=w.I(n);return i&&i.then?i.then(e.bind(e,n,w.S[n],t,r,o)):e(n,w.S[n],t,r,o)}})((function(e,n,t,r,o){return n&&w.o(n,t)?f(n,0,t,r):o()})),b=s((function(e,n,t,r,o){var i=n&&w.o(n,t)&&a(n,t,r);return i?l(i):o()})),h={},m={2747:function(){return d("default","react",[4,18,2,0],(function(){return w.e(294).then((function(){return function(){return w(7294)}}))}))},601:function(){return b("default","universal-cookie",[1,4,0,0],(function(){return w.e(585).then((function(){return function(){return w(9585)}}))}))},56:function(){return d("default","react-dom",[4,18,2,0],(function(){return w.e(935).then((function(){return function(){return w(3935)}}))}))},99:function(){return b("default","sanitize-html",[4,2,4,0],(function(){return Promise.all([w.e(36),w.e(730)]).then((function(){return function(){return w(1036)}}))}))},2973:function(){return b("default","axios",[4,1,1,3],(function(){return w.e(721).then((function(){return function(){return w(1721)}}))}))},4662:function(){return b("default","pubsub-js",[4,1,9,4],(function(){return w.e(798).then((function(){return function(){return w(1798)}}))}))},3737:function(){return b("default","react-transition-group",[4,4,4,2],(function(){return w.e(198).then((function(){return function(){return w(4198)}}))}))},518:function(){return b("default","universal-cookie",[4,4,0,4],(function(){return w.e(585).then((function(){return function(){return w(9585)}}))}))},5970:function(){return b("default","react-cookie",[4,4,1,1],(function(){return Promise.all([w.e(601),w.e(456)]).then((function(){return function(){return w(3456)}}))}))}},p={56:[56],201:[99,2973,4662],601:[601],737:[3737],747:[2747],979:[56,518,5970]},w.f.consumes=function(e,n){w.o(p,e)&&p[e].forEach((function(e){if(w.o(h,e))return n.push(h[e]);var t=function(n){h[e]=0,w.m[e]=function(t){delete w.c[e],t.exports=n()}},r=function(n){delete h[e],w.m[e]=function(t){throw delete w.c[e],n}};try{var o=m[e]();o.then?n.push(h[e]=o.then(t).catch(r)):t(o)}catch(e){r(e)}}))},g=function(e){return new Promise((function(n,t){var r=w.miniCssF(e),o=w.p+r;if(function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=(u=t[r]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(o===e||o===n))return u}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var u;if((o=(u=i[r]).getAttribute("data-href"))===e||o===n)return u}}(r,o))return n();!function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var u=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||n,f=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=u,f.request=c,o.parentNode.removeChild(o),r(f)}},o.href=n,(e=>{document.body.appendChild(e)})(o)}(e,o,n,t)}))},y={123:0},w.f.miniCss=function(e,n){y[e]?n.push(y[e]):0!==y[e]&&{79:1,868:1,979:1}[e]&&n.push(y[e]=g(e).then((function(){y[e]=0}),(function(n){throw delete y[e],n})))},function(){var e={123:0};w.f.j=function(n,t){var r=w.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^([26]01|56|737|747)$/.test(n))e[n]=0;else{var o=new Promise((function(t,o){r=e[n]=[t,o]}));t.push(r[2]=o);var i=w.p+w.u(n),u=new Error;w.l(i,(function(t){if(w.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,r[1](u)}}),"chunk-"+n,n)}};var n=function(n,t){var r,o,i=t[0],u=t[1],c=t[2],f=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)w.o(u,r)&&(w.m[r]=u[r]);if(c)c(w)}for(n&&n(t);f<i.length;f++)o=i[f],w.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk_unisporkal_customer_notifications=self.webpackChunk_unisporkal_customer_notifications||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var P=w(5805);customer_notifications=P}();
//# sourceMappingURL=remoteEntry.js.map