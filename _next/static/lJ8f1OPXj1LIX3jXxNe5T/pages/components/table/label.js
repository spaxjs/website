(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"+wNj":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("+wNj");function a(e,t){if(null==e)return{};var n,a,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},Km8e:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n("ERkP"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,m=b["".concat(c,".").concat(s)]||b[s]||f[s]||o;return n?a.a.createElement(m,i({ref:t},u,{components:n})):a.a.createElement(m,i({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"===typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},"aH4+":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),c=n.n(o),i=n("ZVZ0"),l=(c.a.createElement,{}),u="wrapper";function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(u,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("nav",{className:"toc"},Object(i.b)("ol",Object(r.a)({parentName:"nav"},{className:"toc-level toc-level-1"}))),Object(i.b)("h1",{id:"label"},"Label"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"ui.label")," is take advantage of ",Object(i.b)("inlineCode",{parentName:"p"},"title"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"<JsonTable\n  data={Array(5).fill(0).map((_, index) => {\n    return {\n      id: index,\n      name: `Smith ${index}`,\n      surname: `Joe ${index}`,\n      birthYear: 1979,\n      birthCity: 77,\n      status: Math.floor(Math.random() * 3) - 1,\n    };\n  })}\n  dataSchema={{\n    name: { title: 'Name' },\n    surname: { title: 'Surname' },\n    birthYear: { title: 'Birth Year' },\n    birthCity: { title: 'Birth Place', ui: { label: <icons.Europe /> } },\n    status: { title: 'Audit' },\n  }}\n/>\n")))}p.isMDXComponent=!0},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},rszC:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/table/label",function(){return n("aH4+")}])}},[["rszC",0,1]]]);