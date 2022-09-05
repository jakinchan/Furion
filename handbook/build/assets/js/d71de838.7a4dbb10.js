"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[263],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4942:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),o=["components"],s={id:"corsaccessorsettings",title:"2. \u8de8\u57df\u914d\u7f6e",sidebar_label:"2. \u8de8\u57df\u914d\u7f6e"},l=void 0,c={unversionedId:"settings/corsaccessorsettings",id:"settings/corsaccessorsettings",title:"2. \u8de8\u57df\u914d\u7f6e",description:"\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u30102.7 JSON Schema \u4f7f\u7528\u3011",source:"@site/docs/settings/corsaccessorsettings.mdx",sourceDirName:"settings",slug:"/settings/corsaccessorsettings",permalink:"/furion/docs/settings/corsaccessorsettings",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/settings/corsaccessorsettings.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1659267650,formattedLastUpdatedAt:"Jul 31, 2022",frontMatter:{id:"corsaccessorsettings",title:"2. \u8de8\u57df\u914d\u7f6e",sidebar_label:"2. \u8de8\u57df\u914d\u7f6e"},sidebar:"settings",previous:{title:"1. \u5e94\u7528\u914d\u7f6e",permalink:"/furion/docs/settings/appsettings"},next:{title:"3. \u9a8c\u8bc1\u6d88\u606f\u914d\u7f6e",permalink:"/furion/docs/settings/validationTypemessagesettings"}},p={},m=[{value:"2.1 \u5173\u4e8e\u914d\u7f6e",id:"21-\u5173\u4e8e\u914d\u7f6e",level:2},{value:"2.2 \u914d\u7f6e\u4fe1\u606f",id:"22-\u914d\u7f6e\u4fe1\u606f",level:2},{value:"2.3 \u914d\u7f6e\u793a\u4f8b",id:"23-\u914d\u7f6e\u793a\u4f8b",level:2},{value:"2.4 \u4f7f\u7528 <code>axios</code> \u524d\u7aef\u6ce8\u610f\u4e8b\u9879",id:"24-\u4f7f\u7528-axios-\u524d\u7aef\u6ce8\u610f\u4e8b\u9879",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u914d\u7f6e\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u9700\u7f16\u5199\u914d\u7f6e\u7684\u65f6\u5019\u63d0\u4f9b\u667a\u80fd\u63d0\u793a\u548c\u6821\u9a8c\uff0c\u53ef\u67e5\u770b \u3010",(0,a.kt)("a",{parentName:"p",href:"../jsonschema"},"2.7 JSON Schema \u4f7f\u7528"),"\u3011"),(0,a.kt)("p",{parentName:"admonition"},"\u53ea\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},".json")," \u6587\u4ef6\u5934\u90e8\u6dfb\u52a0\u4e0b\u5217\u914d\u7f6e\u5373\u53ef\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers {2}",showLineNumbers:!0,"{2}":!0},'{\n  "$schema": "https://gitee.com/dotnetchina/Furion/raw/net6/schemas/v3/furion-schema.json"\n}\n'))),(0,a.kt)("h2",{id:"21-\u5173\u4e8e\u914d\u7f6e"},"2.1 \u5173\u4e8e\u914d\u7f6e"),(0,a.kt)("p",null,"\u8de8\u57df\u914d\u7f6e\u6307\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u5ba2\u6237\u7aef\u8de8\u57df\u914d\u7f6e\u9009\u9879\u3002"),(0,a.kt)("h2",{id:"22-\u914d\u7f6e\u4fe1\u606f"},"2.2 \u914d\u7f6e\u4fe1\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CorsAccessorSettings"),"\uff1a\u914d\u7f6e\u6839\u8282\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PolicyName"),"\uff1a\u8de8\u57df\u7b56\u7565\u540d\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string")," \u7c7b\u578b\uff0c\u5fc5\u586b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"App.Cors.Policy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WithOrigins"),"\uff1a\u5141\u8bb8\u8de8\u57df\u7684\u57df\u540d\u5217\u8868\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string[]")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"*")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WithHeaders"),"\uff1a\u8bf7\u6c42\u8868\u5934\uff0c\u6ca1\u6709\u914d\u7f6e\u5219\u5141\u8bb8\u6240\u6709\u8868\u5934\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string[]")," \u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WithExposedHeaders"),"\uff1a\u8bbe\u7f6e\u5ba2\u6237\u7aef\u53ef\u83b7\u53d6\u7684\u54cd\u5e94\u6807\u5934\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string[]")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},'["access-token", "x-access-token"]')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WithMethods"),"\uff1a\u8bbe\u7f6e\u8de8\u57df\u5141\u8bb8\u8bf7\u6c42\u8c13\u8bcd\uff0c\u6ca1\u6709\u914d\u7f6e\u5219\u5141\u8bb8\u6240\u6709\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string[]")," \u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AllowCredentials"),"\uff1a\u662f\u5426\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u4e2d\u7684\u51ed\u636e\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SetPreflightMaxAge"),"\uff1a\u8bbe\u7f6e\u9884\u68c0\u8fc7\u671f\u65f6\u95f4\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"int")," \u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c ",(0,a.kt)("inlineCode",{parentName:"li"},"24\u5c0f\u65f6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FixedClientToken"),"\uff1a\u662f\u5426\u9ed8\u8ba4\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"WithExposedHeaders"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SignalRSupport"),"\uff1a\u662f\u5426\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"SignalR")," \u8de8\u57df\u652f\u6301\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))))),(0,a.kt)("h2",{id:"23-\u914d\u7f6e\u793a\u4f8b"},"2.3 \u914d\u7f6e\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "CorsAccessorSettings": {\n    "PolicyName": "MyPolicy",\n    "WithOrigins": ["http://localhost:4200", "https://furion.icu"]\n  }\n}\n')),(0,a.kt)("h2",{id:"24-\u4f7f\u7528-axios-\u524d\u7aef\u6ce8\u610f\u4e8b\u9879"},"2.4 \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"axios")," \u524d\u7aef\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("p",null,"\u7531\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," \u5bf9\u8de8\u57df\u6709\u7279\u5b9a\u7684\u9700\u8981\uff0c\u9700\u8981\u54cd\u5e94\u62a5\u6587\u4e2d\u6dfb\u52a0\u7279\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"Header")," \u624d\u80fd\u653e\u884c\uff0c\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Expose-Headers: xxxxx"),"\uff0c\u6240\u4ee5\uff0c\u5982\u679c\u524d\u7aef\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," \u8bf7\u6c42\uff0c\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "CorsAccessorSettings": {\n    "WithExposedHeaders": ["X-Pagination","access-token","x-access-token"]\n  }\n}\n')))}d.isMDXComponent=!0}}]);