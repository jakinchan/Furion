(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(160)),o={id:"dbcontext-entitytrigger",title:"9.25. \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",sidebar_label:"9.25. \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668"},c={unversionedId:"dbcontext-entitytrigger",id:"dbcontext-entitytrigger",isDocsHomePage:!1,title:"9.25. \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",description:"9.25.1 \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",source:"@site/docs\\dbcontext-entitytrigger.mdx",slug:"/dbcontext-entitytrigger",permalink:"/docs/dbcontext-entitytrigger",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/dbcontext-entitytrigger.mdx",version:"current",sidebar_label:"9.25. \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",sidebar:"docs",previous:{title:"9.24 \u6570\u636e\u5e93\u64cd\u4f5c\u62e6\u622a\u5668",permalink:"/docs/dbcontext-Interceptor"},next:{title:"9.26 \u4e8b\u52a1\u548c\u5de5\u4f5c\u5355\u5143",permalink:"/docs/tran"}},m=[{value:"9.25.1 \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",id:"9251-\u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668",children:[]},{value:"9.25.2 \u6709\u4f55\u4f5c\u7528",id:"9252-\u6709\u4f55\u4f5c\u7528",children:[]},{value:"9.25.3 \u5982\u4f55\u4f7f\u7528",id:"9253-\u5982\u4f55\u4f7f\u7528",children:[{value:"9.25.3.1 \u542f\u7528\u6570\u636e\u76d1\u542c",id:"92531-\u542f\u7528\u6570\u636e\u76d1\u542c",children:[]},{value:"9.25.3.2 \u76d1\u542c\u7279\u5b9a\u5b9e\u4f53\u6570\u636e",id:"92532-\u76d1\u542c\u7279\u5b9a\u5b9e\u4f53\u6570\u636e",children:[]}]},{value:"9.25.4 <code>IEntityChangedListener</code> \u5b9a\u4e49",id:"9254-ientitychangedlistener-\u5b9a\u4e49",children:[]},{value:"9.29.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9295-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],s={toc:m};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"9251-\u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668"},"9.25.1 \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668"),Object(i.b)("p",null,"\u5728\u6700\u65b0\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"1.1.6+")," \u7248\u672c\u4e2d\uff0c\u65b0\u589e\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"IEntityChangedListener")," \u5b9e\u4f53\u6570\u636e\u76d1\u542c\u63a5\u53e3\uff0c\u53ef\u4ee5\u76d1\u542c ",Object(i.b)("inlineCode",{parentName:"p"},"EFCore")," \u4efb\u4f55\u5b9e\u4f53\u8868 ",Object(i.b)("inlineCode",{parentName:"p"},"\u589e\u5220\u6539")," \u64cd\u4f5c\u3002"),Object(i.b)("h2",{id:"9252-\u6709\u4f55\u4f5c\u7528"},"9.25.2 \u6709\u4f55\u4f5c\u7528"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u6570\u636e\u5e93 ",Object(i.b)("inlineCode",{parentName:"li"},"\u89e6\u53d1\u5668")," \u529f\u80fd\uff0c\u53ef\u5b9e\u73b0 ",Object(i.b)("inlineCode",{parentName:"li"},"\u589e\u5220\u6539")," \u76d1\u542c"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u5b9e\u73b0\u7279\u6b8a\u64cd\u4f5c\uff0c\u6bd4\u5982\u5237\u65b0\u7f13\u5b58\uff0c\u8bb0\u5f55\u65e5\u5fd7\u7b49")),Object(i.b)("h2",{id:"9253-\u5982\u4f55\u4f7f\u7528"},"9.25.3 \u5982\u4f55\u4f7f\u7528"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u9ed8\u8ba4\u4e0d\u542f\u7528\u5b9e\u4f53\u6570\u636e\u76d1\u542c\u5668\uff0c\u5982\u60f3\u542f\u7528\uff0c\u53ea\u9700\u8981\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u4e0a\u4e0b\u6587")," \u6784\u9020\u51fd\u6570\u4e2d\u542f\u7528\u5373\u53ef\uff1a"),Object(i.b)("h3",{id:"92531-\u542f\u7528\u6570\u636e\u76d1\u542c"},"9.25.3.1 \u542f\u7528\u6570\u636e\u76d1\u542c"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{11}","{11}":!0}),'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Furion.EntityFramework.Core\n{\n    [AppDbContext("Sqlite3ConnectionString")]\n    public class DefaultDbContext : AppDbContext<DefaultDbContext>\n    {\n        public DefaultDbContext(DbContextOptions<DefaultDbContext> options) : base(options)\n        {\n            EnabledEntityChangedListener = true;\n        }\n    }\n}\n')),Object(i.b)("h3",{id:"92532-\u76d1\u542c\u7279\u5b9a\u5b9e\u4f53\u6570\u636e"},"9.25.3.2 \u76d1\u542c\u7279\u5b9a\u5b9e\u4f53\u6570\u636e"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{9,30-41}","{9,30-41}":!0}),'using Furion.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.Extensions.Caching.Memory;\nusing System;\nusing System.Collections.Generic;\n\nnamespace Furion.Core\n{\n    public class Post : Entity, IEntityChangedListener<Post>\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Post()\n        {\n            CreatedTime = DateTimeOffset.UtcNow;\n            IsDeleted = false;\n        }\n\n        /// <summary>\n        /// \u540d\u79f0\n        /// </summary>\n        public string Name { get; set; }\n\n        /// <summary>\n        /// Person \u96c6\u5408\n        /// </summary>\n        public ICollection<Person> Persons { get; set; }\n\n        /// <summary>\n        /// \u5b9e\u4f53\u66f4\u6539\u540e\u89e6\u53d1\n        /// </summary>\n        /// <param name="entity">\u5b9e\u4f53\u6570\u636e</param>\n        /// <param name="dbContext">\u6570\u636e\u5e93\u4e0a\u4e0b\u6587</param>\n        /// <param name="dbContextLocator">\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\u5b9a\u4f4d\u5668</param>\n        /// <param name="state">\u5b9e\u4f53\u72b6\u6001</param>\n        public void OnChanged(Post entity, DbContext dbContext, Type dbContextLocator, EntityState state)\n        {\n            // \u5237\u65b0\u7f13\u5b58\n            App.GetService<IMemoryCache>().Set("Key", "Value");\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"9254-ientitychangedlistener-\u5b9a\u4e49"},"9.25.4 ",Object(i.b)("inlineCode",{parentName:"h2"},"IEntityChangedListener")," \u5b9a\u4e49"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'/// <summary>\n/// \u5b9e\u4f53\u6570\u636e\u6539\u53d8\u76d1\u542c\u4f9d\u8d56\u63a5\u53e3\n/// </summary>\n/// <typeparam name="TEntity"></typeparam>\npublic interface IEntityChangedListener<TEntity>\n    where TEntity : class, IPrivateEntity, new()\n{\n    /// <summary>\n    /// \u76d1\u542c\u6570\u636e\u6539\u53d8\u4e4b\u524d\uff08\u4ec5\u652f\u6301EFCore\u64cd\u4f5c\uff09\n    /// </summary>\n    /// <param name="entity"></param>\n    /// <param name="dbContext"></param>\n    /// <param name="dbContextLocator"></param>\n    /// <param name="state"></param>\n    void OnChanging(TEntity entity, DbContext dbContext, Type dbContextLocator, EntityState state) { }\n\n    /// <summary>\n    /// \u76d1\u542c\u6570\u636e\u6539\u53d8\u4e4b\u540e\uff08\u4ec5\u652f\u6301EFCore\u64cd\u4f5c\uff09\n    /// </summary>\n    /// <param name="entity"></param>\n    /// <param name="dbContext"></param>\n    /// <param name="dbContextLocator"></param>\n    /// <param name="state"></param>\n    void OnChanged(TEntity entity, DbContext dbContext, Type dbContextLocator, EntityState state);\n\n    /// <summary>\n    /// \u76d1\u542c\u6570\u636e\u6539\u53d8\u5931\u8d25\uff08\u4ec5\u652f\u6301EFCore\u64cd\u4f5c\uff09\n    /// </summary>\n    /// <param name="entity"></param>\n    /// <param name="dbContext"></param>\n    /// <param name="dbContextLocator"></param>\n    /// <param name="state"></param>\n    void OnChangeFailed(TEntity entity, DbContext dbContext, Type dbContextLocator, EntityState state) { }\n}\n')),Object(i.b)("h2",{id:"9295-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.29.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))))}p.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,u=b["".concat(o,".").concat(d)]||b[d]||l[d]||i;return n?r.a.createElement(u,c(c({ref:t},s),{},{components:n})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);