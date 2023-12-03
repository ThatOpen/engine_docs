"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"Tutorials/FragmentCacher",id:"Tutorials/FragmentCacher",title:"FragmentCacher",description:"\ud83d\udce6 Process once, load fast forever",source:"@site/docs/Tutorials/FragmentCacher.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/FragmentCacher",permalink:"/Tutorials/FragmentCacher",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FragmentBoundingBox",permalink:"/Tutorials/FragmentBoundingBox"},next:{title:"FragmentClipStyler",permalink:"/Tutorials/FragmentClipStyler"}},s={},c=[{value:"\ud83d\udce6 Process once, load fast forever",id:"-process-once-load-fast-forever",level:3},{value:"\ud83d\udc85 Adding some UI",id:"-adding-some-ui",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"-process-once-load-fast-forever"},"\ud83d\udce6 Process once, load fast forever"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"If you have checked the ",(0,r.kt)("inlineCode",{parentName:"p"},"FragmentIfcLoader")," tutorial, you know how\neasy it is to convert IFCs to fragment. But IFC has its limitations,\nyou probably want your app to be as fast as possible. You can\ndo this very easily with the ",(0,r.kt)("inlineCode",{parentName:"p"},"FragmentCacher"),"."),(0,r.kt)("admonition",{title:"Persisting data in frontend",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"All browsers have access to the memory of the device where they run.\nThat means that you can save the fragments you generate from the IFC,\nso that the next time the user enters the app, you can load the\nfragments directly, which is 10 times faster!")),(0,r.kt)("p",null,"Let's start by initializing the ",(0,r.kt)("inlineCode",{parentName:"p"},"FragmentManager")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FragmentIfcLoader"),".\nIf you haven't seen those tutorials, check them out before going forward!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const fragments = new OBC.FragmentManager(components);\nlet fragmentIfcLoader = new OBC.FragmentIfcLoader(components);\nfragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;\nfragmentIfcLoader.settings.webIfc.OPTIMIZE_PROFILES = true;\nfragmentIfcLoader.settings.wasm = {\npath: "https://unpkg.com/web-ifc@0.0.46/",\nabsolute: true\n}\n')),(0,r.kt)("h3",{id:"-adding-some-ui"},"\ud83d\udc85 Adding some UI"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now, we will start creating some basic UI to test the caching system. Let's\nadd a toolbar and a button to reload the app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const mainToolbar = new OBC.Toolbar(components, { name: 'Main Toolbar', position: 'bottom' });\ncomponents.ui.addToolbar(mainToolbar);\nconst reloadButton = new OBC.Button(components);\nreloadButton.materialIcon = \"replay\";\nreloadButton.tooltip = \"Reload page\";\nmainToolbar.addChild(reloadButton);\nreloadButton.onclick = () => location.reload();\n")),(0,r.kt)("p",null,"Next, we need a way to load IFC files. To do that, we will simply use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," that the ",(0,r.kt)("inlineCode",{parentName:"p"},"FragmentIfcLoader")," has built-in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const ifcButton = fragmentIfcLoader.uiElement.get("main");\nmainToolbar.addChild(ifcButton);\n')),(0,r.kt)("p",null,"Finally, we will add the caching component. You can simply add it using\nits built-in button:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const cacher = new OBC.FragmentCacher(components);\nconst cacherButton = cacher.uiElement.get("main");\nmainToolbar.addChild(cacherButton);\n')),(0,r.kt)("p",null,"This should already work! Now you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Load an IFC."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},"Use the save button to save it in the cache."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:3},(0,r.kt)("li",{parentName:"ol"},"Reload the app."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:4},(0,r.kt)("li",{parentName:"ol"},"Use the load button to load it from cache.",(0,r.kt)("admonition",{parentName:"li",title:"Have it your way!",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can also do this without UI components, if you prefer to use your own UI\nor want to do it automatically (without the user clicking anything). For that\nyou can simply use the methods ",(0,r.kt)("inlineCode",{parentName:"p"},"getFragmentGroup")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"saveFragmentGroup"),".")),"Congratulations! Now you know how to cache fragments, so that the next time\nyour user opens an IFC that was already processed, they will see it load\nsuper fast, almost like magic! Now, let's continue our journey with more\ntutorials.")))),(0,r.kt)("iframe",{src:"https://ifcjs.github.io/components/src/fragments/FragmentCacher/index.html"}))}m.isMDXComponent=!0}}]);