(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"+wNj":function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return r}))},EOVG:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/table/row-component",function(){return t("jwBv")}])},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("+wNj");function o(e,n){if(null==e)return{};var t,o,a=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}},Km8e:function(e,n,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var r=t("ERkP"),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),s=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):i({},n,{},e)),t},l=function(e){var n=s(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(t),d=r,b=l["".concat(c,".").concat(d)]||l[d]||f[d]||a;return t?o.a.createElement(b,i({ref:n},p,{components:t})):o.a.createElement(b,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[d]="string"===typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},jwBv:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var r=t("cxan"),o=t("HbGN"),a=t("ERkP"),c=t.n(a),i=t("ZVZ0"),u=(c.a.createElement,{}),p="wrapper";function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("nav",{className:"toc"},Object(i.b)("ol",Object(r.a)({parentName:"nav"},{className:"toc-level toc-level-1"}))),Object(i.b)("h1",{id:"row-component"},"Row Component"),Object(i.b)("p",null,"Sort rows with react-dnd."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx",metastring:"live",live:!0}),"const TableRow_ = styled(TableRow)({\n  '&.drop-over-downward > td': {\n    borderBottom: '2px dashed #1890ff',\n  },\n  '&.drop-over-upward > td': {\n    borderTop: '2px dashed #1890ff',\n  },\n});\n\nconst [data, setData] = React.useState(Array(5).fill(0).map((_, index) => {\n  return {\n    id: index,\n    name: `Smith ${index}`,\n    surname: `Joe ${index}`,\n    birthYear: 1979,\n    birthCity: 77,\n    status: Math.floor(Math.random() * 3) - 1,\n  };\n}));\n\nreturn (\n  <DndProvider>\n    <JsonTable\n      data={data}\n      dataSchema={{\n        name: { title: 'Name' },\n        surname: { title: 'Surname' },\n        birthYear: { title: 'Birth Year' },\n        birthCity: { title: 'Birth Place' },\n        status: { title: 'Audit' },\n      }}\n      rowComponent={({ rowValue, rowIndex, scope, ...props }) => {\n        const ref = React.useRef();\n\n        const [{ isOver, dropClassName }, drop] = useDrop({\n          accept: 'tr',\n          collect: monitor => {\n            const { rowIndex: dragIndex } = monitor.getItem() || {};\n            if (dragIndex === rowIndex) {\n              return {};\n            }\n            return {\n              isOver: monitor.isOver(),\n              dropClassName: dragIndex < rowIndex ? ' drop-over-downward' : ' drop-over-upward',\n            };\n          },\n          drop: (item) => {\n            setData((v) => {\n              return update(v, {\n                $splice: [\n                  [item.rowIndex, 1],\n                  [rowIndex, 0, item.rowValue],\n                ],\n              });\n            });\n          },\n        });\n\n        const [, drag] = useDrag({\n          item: { type: 'tr', rowValue, rowIndex },\n          collect: (monitor) => ({\n            isDragging: monitor.isDragging(),\n          }),\n        });\n\n        drop(drag(ref));\n\n        return scope === 'head' ? (\n          <TableRow_\n            {...props}\n          />\n        ) : (\n          <TableRow_\n            ref={ref}\n            className={isOver ? dropClassName : ''}\n            style={{ cursor: 'move' }}\n            {...props}\n          />\n        );\n      }}\n    />\n  </DndProvider>\n);\n")))}s.isMDXComponent=!0}},[["EOVG",0,1]]]);