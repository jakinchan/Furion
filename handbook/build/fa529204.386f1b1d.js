(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{154:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),i=(t(0),t(160)),l={id:"view-engine",title:"17. \u89c6\u56fe\u5f15\u64ce",sidebar_label:"17. \u89c6\u56fe\u5f15\u64ce"},c={unversionedId:"view-engine",id:"view-engine",isDocsHomePage:!1,title:"17. \u89c6\u56fe\u5f15\u64ce",description:"17.1 \u5173\u4e8e\u89c6\u56fe\u5f15\u64ce",source:"@site/docs\\view-engine.mdx",slug:"/view-engine",permalink:"/furion/docs/view-engine",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/view-engine.mdx",version:"current",sidebar_label:"17. \u89c6\u56fe\u5f15\u64ce",sidebar:"docs",previous:{title:"16. CORS \u8de8\u57df",permalink:"/furion/docs/cors"},next:{title:"18. \u65e5\u5fd7\u8bb0\u5f55",permalink:"/furion/docs/logging"}},b=[{value:"17.1 \u5173\u4e8e\u89c6\u56fe\u5f15\u64ce",id:"171-\u5173\u4e8e\u89c6\u56fe\u5f15\u64ce",children:[]},{value:"17.2 \u89c6\u56fe\u5f15\u64ce\u4f5c\u7528",id:"172-\u89c6\u56fe\u5f15\u64ce\u4f5c\u7528",children:[]},{value:"17.3 \u57fa\u7840\u4f7f\u7528",id:"173-\u57fa\u7840\u4f7f\u7528",children:[{value:"17.3.1 \u6ce8\u518c\u670d\u52a1",id:"1731-\u6ce8\u518c\u670d\u52a1",children:[]},{value:"17.3.2 \u4f7f\u7528\u65b9\u5f0f",id:"1732-\u4f7f\u7528\u65b9\u5f0f",children:[]},{value:"17.3.3 \u5f31\u7c7b\u578b\u6a21\u677f",id:"1733-\u5f31\u7c7b\u578b\u6a21\u677f",children:[]},{value:"17.3.4 \u5f3a\u7c7b\u578b\u6a21\u677f",id:"1734-\u5f3a\u7c7b\u578b\u6a21\u677f",children:[]},{value:"17.3.5 \u9ad8\u6027\u80fd\u6a21\u677f\u7f13\u5b58 \ud83e\udd47",id:"1735-\u9ad8\u6027\u80fd\u6a21\u677f\u7f13\u5b58-\ud83e\udd47",children:[]}]},{value:"17.4 \u9ad8\u7ea7\u7528\u6cd5",id:"174-\u9ad8\u7ea7\u7528\u6cd5",children:[{value:"17.4.1 \u6dfb\u52a0\u7a0b\u5e8f\u96c6",id:"1741-\u6dfb\u52a0\u7a0b\u5e8f\u96c6",children:[]},{value:"17.4.2 \u6dfb\u52a0\u547d\u540d\u7a7a\u95f4",id:"1742-\u6dfb\u52a0\u547d\u540d\u7a7a\u95f4",children:[]},{value:"17.4.3 \u5b9a\u4e49\u6a21\u677f\u65b9\u6cd5",id:"1743-\u5b9a\u4e49\u6a21\u677f\u65b9\u6cd5",children:[]},{value:"17.4.4 \u8c03\u7528\u7c7b\u65b9\u6cd5",id:"1744-\u8c03\u7528\u7c7b\u65b9\u6cd5",children:[]}]},{value:"17.5 <code>IViewEngine</code> \u63a5\u53e3",id:"175-iviewengine-\u63a5\u53e3",children:[]},{value:"17.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"176-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],o={toc:b};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"171-\u5173\u4e8e\u89c6\u56fe\u5f15\u64ce"},"17.1 \u5173\u4e8e\u89c6\u56fe\u5f15\u64ce"),Object(i.b)("p",null,"\u89c6\u56fe\u5f15\u64ce\u8d1f\u8d23\u6839\u636e\u89c6\u56fe\u6a21\u677f\u521b\u5efa HTML\u3002\u89c6\u56fe\u901a\u5e38\u662f HTML \u548c\u7f16\u7a0b\u8bed\u8a00\u7684\u67d0\u79cd\u6df7\u5408\u3002\u652f\u6301\u53d8\u91cf\u5b9a\u4e49\u3001\u65b9\u6cd5\u8c03\u7528\u53ca\u903b\u8f91\u7f16\u5199\u3002"),Object(i.b)("p",null,"\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u5e95\u5c42\u96c6\u6210\u4e86\u5fae\u8f6f\u63d0\u4f9b\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"Razor")," \u89c6\u56fe\u5f15\u64ce\u7ec4\u4ef6\u5e76\u63d0\u4f9b\u66f4\u52a0\u7075\u6d3b\u65b9\u4fbf\u7684\u8bed\u6cd5\u7cd6\u3002"),Object(i.b)("h2",{id:"172-\u89c6\u56fe\u5f15\u64ce\u4f5c\u7528"},"17.2 \u89c6\u56fe\u5f15\u64ce\u4f5c\u7528"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u652f\u6301 ",Object(i.b)("inlineCode",{parentName:"strong"},"ASP.NET Core")," \u5b8c\u6574\u7684 ",Object(i.b)("inlineCode",{parentName:"strong"},"Razor")," \u8bed\u6cd5")),Object(i.b)("li",{parentName:"ul"},"\u6839\u636e\u4e0d\u540c\u7684\u6570\u636e\u7f16\u8bd1\u6a21\u677f\u4ea7\u751f\u4e0d\u540c\u7684\u8f93\u51fa"),Object(i.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u5f3a\u5927\u7684\u63d2\u4ef6\u5316\u673a\u5236"),Object(i.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u5168\u7ad9\u9875\u9762\u9759\u6001\u5316"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528\u4f5c\u90ae\u4ef6\u6a21\u677f\u3001\u77ed\u4fe1\u6a21\u677f\u3001\u4f18\u60e0\u5238\u4fe1\u606f\u6a21\u677f\u7b49")),Object(i.b)("h2",{id:"173-\u57fa\u7840\u4f7f\u7528"},"17.3 \u57fa\u7840\u4f7f\u7528"),Object(i.b)("h3",{id:"1731-\u6ce8\u518c\u670d\u52a1"},"17.3.1 \u6ce8\u518c\u670d\u52a1"),Object(i.b)("p",null,"\u4f7f\u7528\u4e4b\u524d\u9700\u5728 ",Object(i.b)("inlineCode",{parentName:"p"},"Startup.cs")," \u4e2d\u6ce8\u518c ",Object(i.b)("inlineCode",{parentName:"p"},"\u89c6\u56fe\u5f15\u64ce\u670d\u52a1"),"\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{3}","{3}":!0}),"public void ConfigureServices(IServiceCollection services)\n{\n    services.AddViewEngine();\n}\n")),Object(i.b)("h3",{id:"1732-\u4f7f\u7528\u65b9\u5f0f"},"17.3.2 \u4f7f\u7528\u65b9\u5f0f"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6784\u9020\u51fd\u6570\u6ce8\u5165 ",Object(i.b)("inlineCode",{parentName:"li"},"IViewEngine"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{2,9,12}","{2,9,12}":!0}),'using Furion.DynamicApiController;\nusing Furion.ViewEngine;\n\nnamespace Furion.Application\n{\n    public class ViewEngineService : IDynamicApiController\n    {\n        private readonly IViewEngine _viewEngine;\n        public ViewEngineService(IViewEngine viewEngine)\n        {\n            _viewEngine = viewEngine;\n            var result = _viewEngine.RunCompile("Hello @Model.Name", new { Name = "Furion" });\n        }\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\u65b9\u5f0f")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'var result = "Hello @Model.Name".RunCompile(new { Name = "Furion" });\n')),Object(i.b)("h3",{id:"1733-\u5f31\u7c7b\u578b\u6a21\u677f"},"17.3.3 \u5f31\u7c7b\u578b\u6a21\u677f"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'var result = _viewEngine.RunCompile("Hello @Model.Name", new { Name = "Furion" });\n')),Object(i.b)("p",null,"\u7ed3\u679c\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"Hello Furion\n")),Object(i.b)("p",null,"\u652f\u6301\u5f02\u6b65 ",Object(i.b)("inlineCode",{parentName:"p"},"RunCompileAsync")),Object(i.b)("h3",{id:"1734-\u5f3a\u7c7b\u578b\u6a21\u677f"},"17.3.4 \u5f3a\u7c7b\u578b\u6a21\u677f"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'var result = _viewEngine.RunCompile(@"\nHello @Model.Name\n@foreach(var item in Model.Items)\n{\n    <p>@item</p>\n}\n", new TestModel\n{\n    Name = "Furion",\n    Items = new[] { 3, 1, 2 }\n});\n')),Object(i.b)("p",null,"\u7ed3\u679c\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"Hello Furion\n<p>3</p>\n<p>1</p>\n<p>2</p>\n")),Object(i.b)("p",null,"\u652f\u6301\u5f02\u6b65 ",Object(i.b)("inlineCode",{parentName:"p"},"RunCompileAsync")),Object(i.b)("h3",{id:"1735-\u9ad8\u6027\u80fd\u6a21\u677f\u7f13\u5b58-\ud83e\udd47"},"17.3.5 \u9ad8\u6027\u80fd\u6a21\u677f\u7f13\u5b58 \ud83e\udd47"),Object(i.b)("p",null,"\u7531\u4e8e\u6a21\u677f\u7f16\u8bd1\u9700\u8981\u6d88\u8017\u5927\u91cf\u7684\u6027\u80fd\uff0c\u6240\u4ee5\u5efa\u8bae\u4f7f\u7528\u5e26 ",Object(i.b)("inlineCode",{parentName:"p"},"FromCached")," \u7ed3\u5c3e\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"RunCompileFromCached")," \u66ff\u4ee3\u3002\u8c03\u7528\u8be5\u65b9\u6cd5\u540e\u4f1a\u81ea\u52a8\u5c06\u6a21\u677f\u7f16\u8bd1\u6210 ",Object(i.b)("inlineCode",{parentName:"p"},".dll")," \u4ee5\u4fbf\u4e0b\u6b21\u4f7f\u7528\u3002\u51cf\u5c11\u7b2c\u4e8c\u6b21\u4e4b\u540e\u4f7f\u7528\u6a21\u677f\u7684\u6027\u80fd\u635f\u8017\u3002"),Object(i.b)("p",null,"\u5982\uff0c\u5f3a\u7c7b\u578b\u6a21\u677f\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'var result = _viewEngine.RunCompileFromCached(@"\nHello @Model.Name\n@foreach(var item in Model.Items)\n{\n    <p>@item</p>\n}\n", new TestModel\n{\n    Name = "Furion",\n    Items = new[] { 3, 1, 2 }\n});\n')),Object(i.b)("p",null,"\u7ed3\u679c\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"Hello Furion\n<p>3</p>\n<p>1</p>\n<p>2</p>\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"strong"},"RunCompileFromCached")," \u65b9\u6cd5\u4e4b\u540e\u5c06\u4f1a\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"strong"},"MD5")," \u52a0\u5bc6\u6a21\u677f\u5e76\u751f\u6210 ",Object(i.b)("inlineCode",{parentName:"strong"},"MD5"),"\u5b57\u7b26\u4e32\u7684 ",Object(i.b)("inlineCode",{parentName:"strong"},".dll")," \u5b58\u653e\u5728\u7f51\u7ad9\u6839\u76ee\u5f55\u4e0b\u7684 ",Object(i.b)("inlineCode",{parentName:"strong"},"templates")," \u76ee\u5f55\u4e2d\u3002\u53ea\u8981\u6a21\u677f\u5185\u5bb9\u4e0d\u53d8\uff0c\u6570\u636e\u53d1\u751f\u6539\u53d8\u4e5f\u4e0d\u4f1a\u91cd\u65b0\u7f16\u8bd1\u6a21\u677f\u3002\u8fd9\u6837\u5927\u5927\u7684\u63d0\u9ad8\u4e86\u9996\u6b21\u4e4b\u540e\u7684\u6027\u80fd\u3002")),Object(i.b)("p",null,"\u5982\uff0c\u4f20\u5165\u65b0\u7684\u6570\u636e\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{10}","{10}":!0}),'var result = _viewEngine.RunCompileFromCached(@"\nHello @Model.Name\n@foreach(var item in Model.Items)\n{\n    <p>@item</p>\n}\n", new TestModel\n{\n    Name = "Furion",\n    Items = new[] { 5,6,7,8 }\n});\n')),Object(i.b)("p",null,"\u7ed3\u679c\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"Hello Furion\n<p>5</p>\n<p>6</p>\n<p>7</p>\n<p>8</p>\n")),Object(i.b)("p",null,"\u6a21\u677f\u4e0d\u518d\u91cd\u65b0\u7f16\u8bd1\uff0c\u53ea\u662f\u91cd\u65b0\u66ff\u6362\u6570\u636e\u3002"),Object(i.b)("h2",{id:"174-\u9ad8\u7ea7\u7528\u6cd5"},"17.4 \u9ad8\u7ea7\u7528\u6cd5"),Object(i.b)("p",null,"\u9ad8\u7ea7\u7528\u6cd5\u652f\u6301\u5c06\u7279\u5b9a\u7a0b\u5e8f\u96c6\u3001\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u3001\u7279\u5b9a\u7c7b\u578b\u5f15\u5165\u5230\u6a21\u677f\u4e2d\u4f7f\u7528\u3002"),Object(i.b)("h3",{id:"1741-\u6dfb\u52a0\u7a0b\u5e8f\u96c6"},"17.4.1 \u6dfb\u52a0\u7a0b\u5e8f\u96c6"),Object(i.b)("p",null,"\u6bd4\u5982\u8fd9\u91cc\u6dfb\u52a0 ",Object(i.b)("inlineCode",{parentName:"p"},"System.IO")," \u7a0b\u5e8f\u96c6\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'var result = _viewEngine.RunCompileFromCached(@"<div>@System.IO.Path.Combine(""Furion"", ""ViewEngine"")</div>", builderAction: builder =>\n            {\n                builder.AddAssemblyReferenceByName("System.IO");\n            });\n')),Object(i.b)("p",null,"\u7ed3\u679c\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<div>Furion\\\\ViewEngine</div>\n")),Object(i.b)("p",null,"\u53e6\u5916\uff0c",Object(i.b)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u591a\u79cd\u65b9\u5f0f\u52a0\u8f7d\u7a0b\u5e8f\u96c6\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'builder.AddAssemblyReferenceByName("System.Security"); // \u901a\u8fc7\u540d\u79f0\nbuilder.AddAssemblyReference(typeof(System.IO.File)); // \u901a\u8fc7\u7c7b\u578b\nbuilder.AddAssemblyReference(Assembly.Load("source")); // \u901a\u8fc7\u5143\u6570\u636e\u5f15\u7528\n')),Object(i.b)("h3",{id:"1742-\u6dfb\u52a0\u547d\u540d\u7a7a\u95f4"},"17.4.2 \u6dfb\u52a0\u547d\u540d\u7a7a\u95f4"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'var result = _viewEngine.RunCompileFromCached(@"<div>@Path.Combine(""Furion"", ""ViewEngine"")</div>", builderAction: builder =>\n            {\n                builder.AddUsing("System.IO");\n                builder.AddAssemblyReferenceByName("System.IO");\n            });\n')),Object(i.b)("p",null,"\u7ed3\u679c\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<div>Furion\\\\ViewEngine</div>\n")),Object(i.b)("p",null,"\u4e5f\u652f\u6301\u52a0\u5165\u591a\u4e2a ",Object(i.b)("inlineCode",{parentName:"p"},"using"),"\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'builder.AddUsing("System.IO");\nbuilder.AddUsing("Furion");\n')),Object(i.b)("h3",{id:"1743-\u5b9a\u4e49\u6a21\u677f\u65b9\u6cd5"},"17.4.3 \u5b9a\u4e49\u6a21\u677f\u65b9\u6cd5"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'var result = _viewEngine.RunCompileFromCached(@"\n<area>\n    @{ RecursionTest(3); }\n</area>\n\n@{\n  void RecursionTest(int level)\n  {\n    if (level <= 0)\n    {\n        return;\n    }\n\n    <div>LEVEL: @level</div>\n    @{ RecursionTest(level - 1); }\n  }\n}\n");\n')),Object(i.b)("p",null,"\u7ed3\u679c\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<area>\n<div>LEVEL: 3</div>\n<div>LEVEL: 2</div>\n<div>LEVEL: 1</div>\n</area>\n")),Object(i.b)("h3",{id:"1744-\u8c03\u7528\u7c7b\u65b9\u6cd5"},"17.4.4 \u8c03\u7528\u7c7b\u65b9\u6cd5"),Object(i.b)("p",null,"\u5b9a\u4e49 ",Object(i.b)("inlineCode",{parentName:"p"},"CustomModel")," \u7c7b\u5e76\u7ee7\u627f ",Object(i.b)("inlineCode",{parentName:"p"},"ViewEngineModel")," \u57fa\u7c7b"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{1}","{1}":!0}),'public class CustomModel : ViewEngineModel\n{\n    public int A { get; set; }\n    public string B { get; set; }\n    public string Decorator(object value)\n    {\n        return "-=" + value + "=-";\n    }\n}\n')),Object(i.b)("p",null,"\u5728\u6a21\u677f\u4e2d\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"Decorator(value)")," \u65b9\u6cd5\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'var content = @"Hello @A, @B, @Decorator(123)";\n\nvar template = _viewEngine.Compile<CustomModel>(content);\n\nvar result = template.Run(instance =>\n{\n    instance.A = 10;\n    instance.B = "Alex";\n});\n')),Object(i.b)("p",null,"\u7ed3\u679c\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"Hello 10, Alex, -=123=-\n")),Object(i.b)("h2",{id:"175-iviewengine-\u63a5\u53e3"},"17.5 ",Object(i.b)("inlineCode",{parentName:"h2"},"IViewEngine")," \u63a5\u53e3"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"IViewEngine")," \u63d0\u4f9b\u4e86\u7b80\u5355\u65b9\u4fbf\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"RunCompile")," \u65b9\u6cd5\uff0c\u4e5f\u63d0\u4f9b\u4e86\u6700\u539f\u59cb\u5316\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"Compile")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"Run")," \u65b9\u6cd5\u3002"),Object(i.b)("p",null,"\u901a\u8fc7\u539f\u59cb\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"Compile")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"Run")," \u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0\u5f88\u591a\u590d\u6742\u7684\u903b\u8f91\u548c\u81ea\u5b9a\u4e49\u6307\u4ee4\u96c6\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'/// <summary>\n/// \u7f16\u8bd1\u6a21\u677f\n/// </summary>\n/// <param name="content"></param>\n/// <param name="builderAction"></param>\n/// <returns></returns>\nIViewEngineTemplate Compile(string content, Action<IViewEngineOptionsBuilder> builderAction = null);\n/// <summary>\n/// \u7f16\u8bd1\u6a21\u677f\n/// </summary>\n/// <param name="content"></param>\n/// <param name="builderAction"></param>\n/// <returns></returns>\nTask<IViewEngineTemplate> CompileAsync(string content, Action<IViewEngineOptionsBuilder> builderAction = null);\n/// <summary>\n/// \u7f16\u8bd1\u6a21\u677f\n/// </summary>\n/// <typeparam name="T"></typeparam>\n/// <param name="content"></param>\n/// <param name="builderAction"></param>\n/// <returns></returns>\nIViewEngineTemplate<T> Compile<T>(string content, Action<IViewEngineOptionsBuilder> builderAction = null)\n    where T : IViewEngineModel;\n/// <summary>\n/// \u7f16\u8bd1\u6a21\u677f\n/// </summary>\n/// <typeparam name="T"></typeparam>\n/// <param name="content"></param>\n/// <param name="builderAction"></param>\n/// <returns></returns>\nTask<IViewEngineTemplate<T>> CompileAsync<T>(string content, Action<IViewEngineOptionsBuilder> builderAction = null)\n    where T : IViewEngineModel;\n')),Object(i.b)("h2",{id:"176-\u53cd\u9988\u4e0e\u5efa\u8bae"},"17.6 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))))}p.isMDXComponent=!0},160:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),p=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(t),s=a,d=u["".concat(l,".").concat(s)]||u[s]||m[s]||i;return t?r.a.createElement(d,c(c({ref:n},o),{},{components:t})):r.a.createElement(d,c({ref:n},o))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=s;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<i;o++)l[o]=t[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);