(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+wNj":function(n,e,t){"use strict";function r(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}t.d(e,"a",(function(){return r}))},HbGN:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t("+wNj");function a(n,e){if(null==n)return{};var t,a,o=Object(r.a)(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(a=0;a<c.length;a++)t=c[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}},Km8e:function(n,e,t){"use strict";var r=Object.assign.bind(Object);n.exports=r,n.exports.default=n.exports},ZVZ0:function(n,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return d}));var r=t("ERkP"),a=t.n(r);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=a.a.createContext({}),s=function(n){var e=a.a.useContext(u),t=e;return n&&(t="function"===typeof n?n(e):i({},e,{},n)),t},p=function(n){var e=s(n.components);return a.a.createElement(u.Provider,{value:e},n.children)},f="mdxType",b={inlineCode:"code",wrapper:function(n){var e=n.children;return a.a.createElement(a.a.Fragment,{},e)}},m=Object(r.forwardRef)((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,c=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),p=s(t),f=r,m=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return t?a.a.createElement(m,i({ref:e},u,{components:t})):a.a.createElement(m,i({ref:e},u))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"===typeof n||r){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i[f]="string"===typeof n?n:r,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},a8jH:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return s}));var r=t("cxan"),a=t("HbGN"),o=t("ERkP"),c=t.n(o),i=t("ZVZ0"),l=(c.a.createElement,{}),u="wrapper";function s(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(i.b)(u,Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("nav",{className:"toc"},Object(i.b)("ol",Object(r.a)({parentName:"nav"},{className:"toc-level toc-level-1"}))),Object(i.b)("h1",{id:"action"},"Action"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"const [data, setData] = React.useState(Array(5).fill(0).map((_, index) => {\n  return {\n    id: index,\n    name: `Smith ${index}`,\n    surname: `Joe ${index}`,\n    birthYear: 1979,\n    birthCity: 77,\n    status: Math.floor(Math.random() * 3) - 1,\n    selected: Math.random() > 0.5,\n  };\n}));\n\nconst dataSchema = React.useMemo(() => {\n  return {\n    name: { title: 'Name' },\n    surname: { title: 'Surname' },\n    birthYear: { title: 'Birth Year' },\n    birthCity: {\n      title: 'Birth Place',\n      map: { 76: '\u0130stanbul', 77: '\u015eanl\u0131urfa' },\n    },\n    status: {\n      title: 'Audit',\n      enum: [-1, 1, 0],\n      ui: {\n        enum: ['Pending', 'Accepted', 'Rejected'],\n      },\n    },\n    actions: {\n      title: 'Actions',\n      type: 'null',\n      ui: {\n        component: ({ children, rowValue, rowIndex, scope }) => {\n          return scope === 'body' ? (\n            <TableCell>\n              <Button\n                variant=\"contained\"\n                color=\"danger\"\n                onClick={() => {\n                  setConfirm([\n                    JSON.stringify(rowValue, null, 2),\n                    () => {\n                      setData((v) => v.filter((_, idx) => idx !== rowIndex))\n                    }\n                  ]);\n                }}\n              >\n                Delete\n              </Button>\n              <Button variant=\"contained\">Download</Button>\n            </TableCell>\n          ) : (\n            <TableCell>{children}</TableCell>\n          );\n        }\n      }\n    }\n  };\n})\n\nconst [[message, callback], setConfirm] = React.useState([]);\n\nconst handleCancel = React.useCallback(() => {\n  setConfirm([]);\n}, []);\n\nconst handleConfirm = React.useCallback(() => {\n  callback();\n  setConfirm([]);\n}, [callback]);\n\nreturn (\n  <>\n    <JsonTable\n      data={data}\n      dataSchema={dataSchema}\n    />\n    {message ? (\n      <Confirm\n        title=\"Confirm\"\n        onCancel={handleCancel}\n        onConfirm={handleConfirm}\n      >\n        Are you sure you want to delete\n        <pre>{message}</pre>\n      </Confirm>\n    ) : null}\n  </>\n);\n")))}s.isMDXComponent=!0},cxan:function(n,e,t){"use strict";function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}t.d(e,"a",(function(){return r}))},xl69:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/table/action",function(){return t("a8jH")}])}},[["xl69",0,1]]]);