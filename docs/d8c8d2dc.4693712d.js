(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(160)),c={id:"dbcontext-sql-template",title:"9.16 Sql \u6a21\u677f",sidebar_label:"9.16 Sql \u6a21\u677f"},i={unversionedId:"dbcontext-sql-template",id:"dbcontext-sql-template",isDocsHomePage:!1,title:"9.16 Sql \u6a21\u677f",description:"9.16.1 Sql \u6a21\u677f",source:"@site/docs\\dbcontext-sql-template.mdx",slug:"/dbcontext-sql-template",permalink:"/docs/dbcontext-sql-template",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/dbcontext-sql-template.mdx",version:"current",sidebar_label:"9.16 Sql \u6a21\u677f",sidebar:"docs",previous:{title:"9.15 Sql \u64cd\u4f5c",permalink:"/docs/dbcontext-sql"},next:{title:"9.17 Sql \u9ad8\u7ea7\u4ee3\u7406",permalink:"/docs/dbcontext-sql-proxy"}},o=[{value:"9.16.1 <code>Sql</code> \u6a21\u677f",id:"9161-sql-\u6a21\u677f",children:[]},{value:"9.16.2 <code>Sql</code> \u6a21\u677f\u4f18\u7f3a\u70b9",id:"9162-sql-\u6a21\u677f\u4f18\u7f3a\u70b9",children:[{value:"9.16.2.1 \u4f18\u70b9",id:"91621-\u4f18\u70b9",children:[]},{value:"9.16.2.2 \u7f3a\u70b9",id:"91622-\u7f3a\u70b9",children:[]}]},{value:"9.16.3 \u5982\u4f55\u4f7f\u7528",id:"9163-\u5982\u4f55\u4f7f\u7528",children:[{value:"9.16.3.1 \u5e38\u89c4\u4f7f\u7528",id:"91631-\u5e38\u89c4\u4f7f\u7528",children:[]},{value:"9.16.3.2 \u9ad8\u7ea7\u5d4c\u5957",id:"91632-\u9ad8\u7ea7\u5d4c\u5957",children:[]}]},{value:"9.16.4 <code>Sql</code> \u6a21\u677f\u914d\u7f6e",id:"9164-sql-\u6a21\u677f\u914d\u7f6e",children:[{value:"9.16.4.1 \u666e\u901a\u6a21\u5f0f",id:"91641-\u666e\u901a\u6a21\u5f0f",children:[]},{value:"9.16.4.2 \u66f4\u591a\u914d\u7f6e",id:"91642-\u66f4\u591a\u914d\u7f6e",children:[]}]},{value:"9.16.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9165-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],b={toc:o};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"9161-sql-\u6a21\u677f"},"9.16.1 ",Object(l.b)("inlineCode",{parentName:"h2"},"Sql")," \u6a21\u677f"),Object(l.b)("p",null,"\u901a\u5e38\u6211\u4eec\u7a0b\u5e8f\u4e2d\u6267\u884c\u6570\u636e\u5e93\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"sql")," \u8bed\u53e5\u90fd\u5199\u5728\u4e86\u7a0b\u5e8f\u96c6\u4e2d\uff0c\u968f\u7a0b\u5e8f\u4e00\u8d77\u7f16\u8bd1\uff0c\u540e\u7eed\u9700\u8981\u4fee\u6539\uff0c\u5219\u91cd\u65b0\u7f16\u8bd1\u4ee3\u7801\u3002"),Object(l.b)("p",null,"\u6240\u4ee5\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"Furion")," \u521b\u9020\u51fa\u4e00\u79cd ",Object(l.b)("inlineCode",{parentName:"p"},"Sql")," \u6a21\u677f\u7684\u65b9\u5f0f\uff0c\u7a0b\u5e8f\u6267\u884c ",Object(l.b)("inlineCode",{parentName:"p"},"Sql")," \u65f6\uff0c\u53ea\u9700\u8981\u4f7f\u7528\u7279\u6b8a\u6807\u8bb0\u5373\u53ef\uff1a",Object(l.b)("inlineCode",{parentName:"p"},"#(\u6a21\u677fKey)"),"\uff0c\u8fd9\u4e9b\u771f\u5b9e\u7684 ",Object(l.b)("inlineCode",{parentName:"p"},"Sql")," \u914d\u7f6e\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},".json")," \u6216 ",Object(l.b)("inlineCode",{parentName:"p"},".xml")," \u914d\u7f6e\u6587\u4ef6\u4e2d\u3002"),Object(l.b)("p",null,"\u5982\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Json")," \u65b9\u5f0f")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Select.User": "select * from User where id > @id"\n}\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Xml")," \u65b9\u5f0f")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<configuration>\n  <Select.User>select * from User where id > @id</Select.User>\n</configuration>\n')),Object(l.b)("h2",{id:"9162-sql-\u6a21\u677f\u4f18\u7f3a\u70b9"},"9.16.2 ",Object(l.b)("inlineCode",{parentName:"h2"},"Sql")," \u6a21\u677f\u4f18\u7f3a\u70b9"),Object(l.b)("h3",{id:"91621-\u4f18\u70b9"},"9.16.2.1 \u4f18\u70b9"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u652f\u6301 ",Object(l.b)("inlineCode",{parentName:"li"},"Sql")," \u52a8\u6001\u914d\u7f6e\uff0c\u53ef\u5728\u7a0b\u5e8f\u8fd0\u884c\u65f6\u52a8\u6001\u8c03\u914d ",Object(l.b)("inlineCode",{parentName:"li"},"Sql")," \u8bed\u53e5"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u7a0b\u5e8f ",Object(l.b)("inlineCode",{parentName:"li"},"Sql")," \u8bed\u53e5\u52a0\u5bc6")),Object(l.b)("h3",{id:"91622-\u7f3a\u70b9"},"9.16.2.2 \u7f3a\u70b9"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u9700\u589e\u52a0\u5bf9\u5e94\u914d\u7f6e\u6587\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u5bb9\u6613\u8c03\u8bd5 ",Object(l.b)("inlineCode",{parentName:"li"},"Sql")," \u4ee3\u7801")),Object(l.b)("h2",{id:"9163-\u5982\u4f55\u4f7f\u7528"},"9.16.3 \u5982\u4f55\u4f7f\u7528"),Object(l.b)("p",null,"\u5728\u6267\u884c ",Object(l.b)("inlineCode",{parentName:"p"},"Sql")," \u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u586b\u5199\u6307\u5b9a\u6a21\u677f\u5373\u53ef\u3002"),Object(l.b)("h3",{id:"91631-\u5e38\u89c4\u4f7f\u7528"},"9.16.3.1 \u5e38\u89c4\u4f7f\u7528"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),'// \u4ed3\u50a8\u65b9\u5f0f\nvar users = repository.SqlQuery<User>("#(Select.User)", new { id = 1});\n\n// \u61d2\u4eba\u65b9\u5f0f\nvar users = "#(Select.User)".SqlQuery<User>(new { id = 1});\n\n// Sql \u4ee3\u7406\u65b9\u5f0f\n[SqlExecute("#(Select.User)")]\nList<User> GetUser(int id);\n')),Object(l.b)("h3",{id:"91632-\u9ad8\u7ea7\u5d4c\u5957"},"9.16.3.2 \u9ad8\u7ea7\u5d4c\u5957"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),'var users = repository.SqlQuery<User>(\n@"select * from user u\nleft join #(User.Detail) d on u.Id = d.UserId\nwhere id > @id");\n')),Object(l.b)("h2",{id:"9164-sql-\u6a21\u677f\u914d\u7f6e"},"9.16.4 ",Object(l.b)("inlineCode",{parentName:"h2"},"Sql")," \u6a21\u677f\u914d\u7f6e"),Object(l.b)("h3",{id:"91641-\u666e\u901a\u6a21\u5f0f"},"9.16.4.1 \u666e\u901a\u6a21\u5f0f"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Select.User": "select * from User"\n}\n')),Object(l.b)("h3",{id:"91642-\u66f4\u591a\u914d\u7f6e"},"9.16.4.2 \u66f4\u591a\u914d\u7f6e"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Select.User": {\n    "Sql": "select * from User where id > @id and Name = @name",\n    "Params": [\n      {\n        "Name": " Id",\n        "Value": "1",\n        "DbType": "Int16",\n        "Size": 10\n      },\n      {\n        "Name": " Name",\n        "Value": "\u767e\u5c0f\u50e7",\n        "DbType": "String",\n        "Size": 10\n      }\n    ]\n  }\n}\n')),Object(l.b)("h2",{id:"9165-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.16.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(l.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))))}s.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||l;return n?a.a.createElement(m,i(i({ref:t},b),{},{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<l;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);