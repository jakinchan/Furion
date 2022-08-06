"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9931],{652:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],l={id:"idgenerator",title:"27. \u5206\u5e03\u5f0f ID \u751f\u6210",sidebar_label:"27. \u5206\u5e03\u5f0f ID \u751f\u6210"},u=void 0,d={unversionedId:"idgenerator",id:"idgenerator",title:"27. \u5206\u5e03\u5f0f ID \u751f\u6210",description:"27.1 \u4e3a\u4ec0\u4e48\u9700\u8981\u5206\u5e03\u5f0f ID",source:"@site/docs/idgenerator.mdx",sourceDirName:".",slug:"/idgenerator",permalink:"/furion/docs/idgenerator",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/idgenerator.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651894493,formattedLastUpdatedAt:"May 7, 2022",frontMatter:{id:"idgenerator",title:"27. \u5206\u5e03\u5f0f ID \u751f\u6210",sidebar_label:"27. \u5206\u5e03\u5f0f ID \u751f\u6210"},sidebar:"docs",previous:{title:"26. \u5b9a\u65f6\u4efb\u52a1/\u540e\u53f0\u4efb\u52a1",permalink:"/furion/docs/job"},next:{title:"28. \u6a21\u5757\u5316\u5f00\u53d1",permalink:"/furion/docs/module-dev"}},p={},s=[{value:"27.1 \u4e3a\u4ec0\u4e48\u9700\u8981\u5206\u5e03\u5f0f ID",id:"271-\u4e3a\u4ec0\u4e48\u9700\u8981\u5206\u5e03\u5f0f-id",level:2},{value:"27.2 \u5206\u5e03\u5f0f ID \u6709\u54ea\u4e9b",id:"272-\u5206\u5e03\u5f0f-id-\u6709\u54ea\u4e9b",level:2},{value:"27.3 \u5982\u4f55\u4f7f\u7528",id:"273-\u5982\u4f55\u4f7f\u7528",level:2},{value:"27.3.1 <code>\u8fde\u7eed GUID</code> \u65b9\u5f0f",id:"2731-\u8fde\u7eed-guid-\u65b9\u5f0f",level:3},{value:"27.3.2 <code>\u77ed ID</code>",id:"2732-\u77ed-id",level:3},{value:"27.3.3 <code>\u96ea\u82b1\u7b97\u6cd5 ID</code>",id:"2733-\u96ea\u82b1\u7b97\u6cd5-id",level:3},{value:"27.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"274-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],c={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"271-\u4e3a\u4ec0\u4e48\u9700\u8981\u5206\u5e03\u5f0f-id"},"27.1 \u4e3a\u4ec0\u4e48\u9700\u8981\u5206\u5e03\u5f0f ID"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"\u5168\u5c40\u552f\u4e00\u6027"),": \u4e0d\u80fd\u51fa\u73b0\u91cd\u590d\u7684 ID \u53f7, \u65e2\u7136\u662f\u552f\u4e00\u6807\u8bc6, \u8fd9\u662f\u6700\u57fa\u672c\u7684\u8981\u6c42\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"\u8d8b\u52bf\u9012\u589e"),": \u5728 MySQL InnoDB \u5f15\u64ce\u4e2d\u4f7f\u7528\u7684\u662f\u805a\u96c6\u7d22\u5f15, \u7531\u4e8e\u591a\u6570 RDBMS \u4f7f\u7528 B-tree \u7684\u6570\u636e\u7ed3\u6784\u6765\u5b58\u50a8\u7d22\u5f15\u6570\u636e, \u5728\u4e3b\u952e\u7684\u9009\u62e9\u4e0a\u9762\u6211\u4eec\u5e94\u8be5\u5c3d\u91cf\u4f7f\u7528\u6709\u5e8f\u7684\u4e3b\u952e\u4fdd\u8bc1\u5199\u5165\u6027\u80fd\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"\u5355\u8c03\u9012\u589e"),": \u4fdd\u8bc1\u4e0b\u4e00\u4e2a ID \u4e00\u5b9a\u5927\u4e8e\u4e0a\u4e00\u4e2a ID, \u4f8b\u5982\u4e8b\u52a1\u7248\u672c\u53f7, IM \u589e\u91cf\u6d88\u606f, \u6392\u5e8f\u7b49\u7279\u6b8a\u9700\u6c42\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"\u4fe1\u606f\u5b89\u5168"),": \u5982\u679c ID \u662f\u8fde\u7eed\u7684, \u6076\u610f\u7528\u6237\u7684\u6252\u53d6\u5de5\u4f5c\u5c31\u975e\u5e38\u5bb9\u6613\u505a\u4e86, \u76f4\u63a5\u6309\u7167\u987a\u5e8f\u4e0b\u8f7d\u6307\u5b9a URL \u5373\u53ef; \u5982\u679c\u662f\u8ba2\u5355\u53f7\u5c31\u66f4\u5371\u9669\u4e86, \u7ade\u5bf9\u53ef\u4ee5\u76f4\u63a5\u77e5\u9053\u6211\u4eec\u4e00\u5929\u7684\u5355\u91cf\u3002 \u6240\u4ee5\u5728\u4e00\u4e9b\u5e94\u7528\u573a\u666f\u4e0b, \u4f1a\u9700\u8981 ID \u65e0\u89c4\u5219, \u4e0d\u89c4\u5219\u3002"))),(0,i.kt)("h2",{id:"272-\u5206\u5e03\u5f0f-id-\u6709\u54ea\u4e9b"},"27.2 \u5206\u5e03\u5f0f ID \u6709\u54ea\u4e9b"),(0,i.kt)("p",null,"\u5e38\u89c1\u7684\u5206\u5e03\u5f0f ID \u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u8fde\u7eed GUID"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\u77ed ID"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"\u96ea\u82b1\u7b97\u6cd5 ID"),"\u3002"),(0,i.kt)("h2",{id:"273-\u5982\u4f55\u4f7f\u7528"},"27.3 \u5982\u4f55\u4f7f\u7528"),(0,i.kt)("h3",{id:"2731-\u8fde\u7eed-guid-\u65b9\u5f0f"},"27.3.1 ",(0,i.kt)("inlineCode",{parentName:"h3"},"\u8fde\u7eed GUID")," \u65b9\u5f0f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9759\u6001 ",(0,i.kt)("inlineCode",{parentName:"li"},"IDGen")," \u65b9\u5f0f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var guid = IDGen.NextID();\n\n// \u8fd8\u53ef\u4ee5\u914d\u7f6e\u66f4\u591a\u53c2\u6570\nvar guid2 = IDGen.NextID(new SequentialGuidSettings { LittleEndianBinary16Format = true }));    // SequentialGuidSettings \u53c2\u6570\u53d6\u51b3\u4e8e\u4f60\u7684\u5206\u5e03\u5f0fID\u7684\u5b9e\u73b0\n")),(0,i.kt)("admonition",{title:"\u7279\u522b\u63d0\u9192",type:"important"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5728\u5faa\u73af\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"IDGen")," \u9759\u6001\u7c7b\u65b9\u5f0f\uff0c\u6027\u80fd\u6700\u5dee\uff0c\u539f\u56e0\u662f\u5e95\u5c42\u4e0d\u65ad\u89e3\u6790\u670d\u52a1\u3002\u5982\u679c\u975e\u5faa\u73af\u4e2d\uff0c\u6027\u80fd\u7b49\u4e8e\u4e0b\u9762\u4e24\u79cd\u7528\u6cd5\u3002")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IDistributedIDGenerator")," \u6ce8\u5165\u65b9\u5f0f ",(0,i.kt)("strong",{parentName:"li"},"\u63a8\u8350"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {2,6}",showLineNumbers:!0,"":!0,"{2,6}":!0},"private readonly IDistributedIDGenerator _idGenerator;\npublic AppServices(IDistributedIDGenerator idGenerator)\n{\n    _idGenerator = idGenerator;\n\n    var guidObject =  _idGenerator.Create();\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SequentialGuidIDGenerator")," \u65b9\u5f0f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"var idGen = new SequentialGuidIDGenerator();\nvar guid = idGen.Create();\n\n// \u66f4\u591a\u53c2\u6570\nvar idGen2 = new SequentialGuidIDGenerator();\nvar guid2 = idGen2.Create(new SequentialGuidSettings { LittleEndianBinary16Format = true });\n")),(0,i.kt)("h3",{id:"2732-\u77ed-id"},"27.3.2 ",(0,i.kt)("inlineCode",{parentName:"h3"},"\u77ed ID")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u77ed ID")," \u6309\u9053\u7406\u4e0d\u5e94\u8be5\u653e\u5728\u5206\u5e03\u5f0f ID \u751f\u6210\u8fd9\u4e2a\u7ae0\u8282\uff0c\u5b83\u7684\u4f5c\u7528\u7528\u9014\u5e38\u7528\u4e8e\u5e76\u53d1\u4e0d\u5f3a\u7684\u5185\u90e8\u7cfb\u7edf\u4e2d\uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u4efb\u52a1ID"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Issue \u7f16\u53f7")," \u7b49\u7b49\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var shortid = ShortIDGen.NextID(); // \u751f\u6210\u4e00\u4e2a\u5305\u542b\u6570\u5b57\uff0c\u5b57\u6bcd\uff0c\u4e0d\u5305\u542b\u7279\u6b8a\u7b26\u53f7\u7684 8 \u4f4d\u77edid\n\n// \u6dfb\u52a0\u66f4\u591a\u914d\u7f6e\nvar shortid = ShortIDGen.NextID(new GenerationOptions {\n    UseNumbers = false, // \u4e0d\u5305\u542b\u6570\u5b57\n    UseSpecialCharacters = true, // \u5305\u542b\u7279\u6b8a\u7b26\u53f7\n    Length = 8// \u8bbe\u7f6e\u957f\u5ea6\uff0c\u6ce8\u610f\uff1a\u4e0d\u8bbe\u7f6e\u6b21\u957f\u5ea6\u662f\u968f\u673a\u957f\u5ea6\uff01\uff01\uff01\uff01\uff01\uff01\uff01\n});\n\n// \u81ea\u5b9a\u4e49\u751f\u6210\u77ed ID \u53c2\u4e0e\u8fd0\u7b97\u5b57\u7b26\nstring characters = "\u24b6\u24b7\u24b8\u24b9\u24ba\u24bb\u24bc\u24bd\u24be\u24bf\u24c0\u24c1\u24c2\u24c3\u24c4\u24c5\u24c6\u24c7\u24c8\u24c9\u24ca\u24cb\u24cc\u24cd\u24ce\u24cf\u24d0\u24d1\u24d2\u24d3\u24d4\u24d5\u24d6\u24d7\u24d8\u24d9\u24da\u24db\u24dc\u24dd\u24de\u24df\u24e0\u24e1\u24e2\u24e3\u24e4\u24e5\u24e6\u24e7\u24e8\u24e9\u2460\u2461\u2462\u2463\u2464\u2465\u2466\u2467\u2468\u2469\u246a\u246b"; //whatever you want;\nShortIDGen.SetCharacters(characters);\n\n// \u81ea\u5b9a\u4e49\u968f\u673a\u6570\uff08for\uff09\u6b65\u957f\nint seed = 1939048828;\nShortIDGen.SetSeed(seed);\n\n// \u91cd\u8f7d\u6240\u6709\u81ea\u5b9a\u4e49\u914d\u7f6e\nShortIDGen.Reset();\n')),(0,i.kt)("h3",{id:"2733-\u96ea\u82b1\u7b97\u6cd5-id"},"27.3.3 ",(0,i.kt)("inlineCode",{parentName:"h3"},"\u96ea\u82b1\u7b97\u6cd5 ID")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u5728\u6700\u65b0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"2.1 +")," \u7248\u672c\u79fb\u9664\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"\u96ea\u82b1\u7b97\u6cd5 ID")," \u529f\u80fd\uff0c\u539f\u56e0\u662f\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u76ee\u524d\uff0c",(0,i.kt)("inlineCode",{parentName:"strong"},"\u96ea\u82b1\u7b97\u6cd5 ID")," \u4f7f\u7528\u9891\u7387\u4e0d\u9ad8\uff0c\u800c\u4e14\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"strong"},"\u96ea\u82b1\u7b97\u6cd5 ID")," \u7684\u65b9\u5f0f\u4e5f\u662f\u5343\u5dee\u4e07\u522b\uff0c\u6240\u4ee5\u6846\u67b6\u79fb\u9664\u8be5\u529f\u80fd\uff0c\u91c7\u7528\u62d3\u5c55\u6216\u81ea\u96c6\u6210\u65b9\u5f0f\u3002")),(0,i.kt)("h2",{id:"274-\u53cd\u9988\u4e0e\u5efa\u8bae"},"27.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")),(0,i.kt)("hr",null))}m.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,k=c["".concat(u,".").concat(m)]||c[m]||s[m]||i;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);