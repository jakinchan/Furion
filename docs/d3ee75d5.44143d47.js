(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(160)),i={id:"dbcontext-delete",title:"9.8 \u5220\u9664\u64cd\u4f5c",sidebar_label:"9.8 \u5220\u9664\u64cd\u4f5c"},o={unversionedId:"dbcontext-delete",id:"dbcontext-delete",isDocsHomePage:!1,title:"9.8 \u5220\u9664\u64cd\u4f5c",description:"9.8.1 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",source:"@site/docs\\dbcontext-delete.mdx",slug:"/dbcontext-delete",permalink:"/docs/dbcontext-delete",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/dbcontext-delete.mdx",version:"current",sidebar_label:"9.8 \u5220\u9664\u64cd\u4f5c",sidebar:"docs",previous:{title:"9.7 \u65b0\u589e\u6216\u66f4\u65b0\u64cd\u4f5c",permalink:"/docs/dbcontext-add-or-update"},next:{title:"9.9 \u6279\u91cf\u64cd\u4f5c",permalink:"/docs/dbcontext-batch"}},s=[{value:"9.8.1 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"981-\u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.8.2 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"982-\u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.8.3 \u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"983-\u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.8.4 \u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"984-\u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.8.5 \u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",id:"985-\u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.8.6 \u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u7acb\u5373\u63d0\u4ea4\uff09",id:"986-\u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u7acb\u5373\u63d0\u4ea4\uff09",children:[]},{value:"9.8.8 \u5047\u5220\u9664/\u8f6f\u5220\u9664",id:"988-\u5047\u5220\u9664\u8f6f\u5220\u9664",children:[{value:"9.8.8.1 \u6dfb\u52a0 <code>[FakeDelete]</code> \u6807\u8bb0",id:"9881-\u6dfb\u52a0-fakedelete-\u6807\u8bb0",children:[]},{value:"9.8.8.2 \u5047\u5220\u9664\u4f7f\u7528",id:"9882-\u5047\u5220\u9664\u4f7f\u7528",children:[]}]},{value:"9.8.9 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"989-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"981-\u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"9.8.1 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.Delete(user);\n\n// \u793a\u4f8b\u4e8c\nuser.Delete();\n\n// \u793a\u4f8b\u4e09\nrepository.ChangeEntityState(user, EntityState.Deleted);\n\n// \u793a\u4f8b\u56db\nrepository.Entities.Remove(user);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteAsync();\n")),Object(c.b)("h2",{id:"982-\u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"9.8.2 \u5220\u9664\u4e00\u4e2a\u5b9e\u4f53\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.DeleteNow(user);\n\n// \u793a\u4f8b\u4e8c\nuser.DeleteNow();\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteNowAsync(user);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteNowAsync();\n")),Object(c.b)("h2",{id:"983-\u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"9.8.3 \u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.Delete(1);\n\n// \u793a\u4f8b\u4e8c\nuser.Delete(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteAsync(1);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteAsync(1);\n")),Object(c.b)("h2",{id:"984-\u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"9.8.4 \u6839\u636e\u4e3b\u952e\u5220\u9664\u8bb0\u5f55\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.DeleteNow(1);\n\n// \u793a\u4f8b\u4e8c\nuser.DeleteNow(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteNowAsync(1);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteNowAsync(1);\n")),Object(c.b)("h2",{id:"985-\u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"},"9.8.5 \u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u4e0d\u7acb\u5373\u63d0\u4ea4\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.DeleteExists(1);\n\n// \u793a\u4f8b\u4e8c\nuser.DeleteExists(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteExistsAsync(1);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteExistsAsync(1);\n")),Object(c.b)("h2",{id:"986-\u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u7acb\u5373\u63d0\u4ea4\uff09"},"9.8.6 \u6570\u636e\u5b58\u5728\u624d\u6839\u636e\u4e3b\u952e\u5220\u9664\uff08\u7acb\u5373\u63d0\u4ea4\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.DeleteExistsNow(1);\n\n// \u793a\u4f8b\u4e8c\nuser.DeleteExistsNow(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.DeleteExistsNowAsync(1);\n\n// \u793a\u4f8b\u4e8c\nawait user.DeleteExistsNowAsync(1);\n")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"\u5c0f\u77e5\u8bc6")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u6240\u6709\u5e26 ",Object(c.b)("inlineCode",{parentName:"p"},"Now")," \u7ed3\u5c3e\u7684\u8868\u793a\u7acb\u5373\u63d0\u4ea4\u5230\u6570\u636e\u5e93\uff0c\u4e5f\u5c31\u662f\u7acb\u5373\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"SaveChanges")," \u6216 ",Object(c.b)("inlineCode",{parentName:"p"},"SaveChangesAsync"),"\u3002"))),Object(c.b)("h2",{id:"988-\u5047\u5220\u9664\u8f6f\u5220\u9664"},"9.8.8 \u5047\u5220\u9664/\u8f6f\u5220\u9664"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"[FakeDelete]")," \u7279\u6027\u6807\u8bb0\u5047\u5220\u9664\u7279\u6027\uff0c\u5982\uff1a"),Object(c.b)("h3",{id:"9881-\u6dfb\u52a0-fakedelete-\u6807\u8bb0"},"9.8.8.1 \u6dfb\u52a0 ",Object(c.b)("inlineCode",{parentName:"h3"},"[FakeDelete]")," \u6807\u8bb0"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{3}","{3}":!0}),"public class Model: IEntity\n{\n    [FakeDelete(true)]  // \u8bbe\u7f6e\u5047\u5220\u9664\u7684\u503c\n    public bool IsDeleted { get; set; }\n}\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"[FakeDelete]")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("strong",{parentName:"p"},"`","[FakeDelete]")," \u5c5e\u6027\u62e5\u6709\u5e26\u4e00\u4e2a\u53c2\u6570\u7684\u6784\u9020\u51fd\u6570\uff0c\u8fd9\u4e2a\u53c2\u6570\u662f\u5047\u5220\u9664\u7684\u503c"))),Object(c.b)("h3",{id:"9882-\u5047\u5220\u9664\u4f7f\u7528"},"9.8.8.2 \u5047\u5220\u9664\u4f7f\u7528"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nrepository.FakeDelete(entity);\n\n// \u793a\u4f8b\u4e8c\nrepository.FakeDeleteNow(entity);\n\n// \u793a\u4f8b\u4e09\nrepository.FakeDelete(1);\n\n// \u793a\u4f8b\u56db\nrepository.FakeDeleteNow(1);\n\n// \u793a\u4f8b\u4e94\nentity.FakeDelete();\n\n// \u793a\u4f8b\u516d\nrepository.UpdateInclude(user, u => u.IsDeleted);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nawait repository.FakeDeleteAsync(entity);\n\n// \u793a\u4f8b\u4e8c\nawait repository.FakeDeleteNowAsync(entity);\n\n// \u793a\u4f8b\u4e09\nawait repository.FakeDeleteAsync(1);\n\n// \u793a\u4f8b\u56db\nawait repository.FakeDeleteNowAsync(1);\n\n// \u793a\u4f8b\u4e94\nawait entity.FakeDeleteAsync();\n\n// \u793a\u4f8b\u516d\nawait repository.UpdateIncludeAsync(user, u => u.IsDeleted);\n")),Object(c.b)("h2",{id:"989-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.8.9 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))))}b.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||c;return n?r.a.createElement(m,o(o({ref:t},l),{},{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);