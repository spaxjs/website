(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},"/zw+":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/table/map",function(){return t("iA8Z")}])},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("+wNj");function a(e,n){if(null==e)return{};var t,a,o=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var r=t("ERkP"),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"===typeof e?e(n):i({},n,{},e)),t},s=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},f="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),f=r,m=s["".concat(c,".").concat(f)]||s[f]||b[f]||o;return t?a.a.createElement(m,i({ref:n},l,{components:t})):a.a.createElement(m,i({ref:n},l))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[f]="string"===typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},iA8Z:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var r=t("cxan"),a=t("HbGN"),o=t("ERkP"),c=t.n(o),i=t("ZVZ0"),u=(c.a.createElement,{}),l="wrapper";function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(l,Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("nav",{className:"toc"},Object(i.b)("ol",Object(r.a)({parentName:"nav"},{className:"toc-level toc-level-1"}))),Object(i.b)("h1",{id:"map"},"Map"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"<JsonTable\n  data={Array(5).fill(0).map((_, index) => {\n    return {\n      id: index,\n      name: `Smith ${index}`,\n      surname: `Joe ${index}`,\n      birthYear: 1979,\n      birthCity: 77,\n      status: Math.floor(Math.random() * 3) - 1,\n    };\n  })}\n  dataSchema={{\n    name: { title: 'Name' },\n    surname: { title: 'Surname' },\n    birthYear: { title: 'Birth Year' },\n    birthCity: {\n      title: 'Birth Place',\n      map: { 76: '\u0130stanbul', 77: '\u015eanl\u0131urfa' },\n    },\n    status: {\n      title: 'Audit',\n      enum: [-1, 1, 0],\n      ui: {\n        enum: ['Pending', 'Accepted', 'Rejected'],\n      },\n    },\n  }}\n/>\n")))}p.isMDXComponent=!0}},[["/zw+",0,1]]]);