"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[273],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),g=r,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8168:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={},p=void 0,s={unversionedId:"Tutorials/MiniMap",id:"Tutorials/MiniMap",title:"MiniMap",description:"\ud83c\udfc2 Navigate through BIM like Pro!",source:"@site/docs/Tutorials/MiniMap.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/MiniMap",permalink:"/Tutorials/MiniMap",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MaterialManager",permalink:"/Tutorials/MaterialManager"},next:{title:"OrthoPerspectiveCamera",permalink:"/Tutorials/OrthoPerspectiveCamera"}},c={},u=[{value:"\ud83c\udfc2 Navigate through BIM like Pro!",id:"-navigate-through-bim-like-pro",level:3},{value:"\ud83e\udde9 Adding Fragments",id:"-adding-fragments",level:3},{value:"\ud83d\uddfa Integrating Spatial Wonders",id:"-integrating-spatial-wonders",level:3},{value:"\ud83c\udfa9 Controlling Maps like a wizard!",id:"-controlling-maps-like-a-wizard",level:4}],m={toc:u},g="wrapper";function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(g,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"-navigate-through-bim-like-pro"},"\ud83c\udfc2 Navigate through BIM like Pro!"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"BIM Models are large and contain a lot of attributes.\nIt can become complicated to manage the elements and painfully difficult to navigate around.\ud83c\udf2a\nUnderstanding spatial relationships is crucial during the design and evaluation processes.\nBy having a MiniMap functionality for navigation it makes easier to collaborate and enhance the productivity,\nlet's see how you can integrate MiniMap in your BIM App! \ud83d\udca5"),(0,o.kt)("admonition",{title:"First, let's set up a simple scene!",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udc40 If you haven't started there, check out ",(0,o.kt)("a",{parentName:"p",href:"/Tutorials/SimpleScene"},"that tutorial first"),"!")),(0,o.kt)("p",null,"For this tutorial, we'll use the ",(0,o.kt)("a",{parentName:"p",href:"../api/classes/components.MiniMap"},(0,o.kt)("strong",{parentName:"a"},"MiniMap"))," component to create\na navigation functionality!"),(0,o.kt)("h3",{id:"-adding-fragments"},"\ud83e\udde9 Adding Fragments"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We'll start by adding a ",(0,o.kt)("strong",{parentName:"p"},"Fragment")," to our scene using ",(0,o.kt)("a",{parentName:"p",href:"../api/classes/components.FragmentManager"},(0,o.kt)("strong",{parentName:"a"},"FragmentManager")),".\nWe'll use a simple fragment for the purposes of this tutorial, but the code is capable of handling big files as well.\ud83c\udfd7\ufe0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const fragments = new OBC.FragmentManager(components);\nconst file = await fetch("../../../resources/small.frag");\nconst dataBlob = await file.arrayBuffer();\nconst buffer = new Uint8Array(dataBlob);\nfragments.load(buffer);\n')),(0,o.kt)("admonition",{title:"Showing Fragments in the Scene",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\ud83c\udfd4\ufe0f There is a dedicated tutorial on how to use Fragment Manager to load ",(0,o.kt)("strong",{parentName:"p"},"IFC files"),", checkout ",(0,o.kt)("a",{parentName:"p",href:"/Tutorials/FragmentManager"},"that tutorial here"),"!")),(0,o.kt)("h3",{id:"-integrating-spatial-wonders"},"\ud83d\uddfa Integrating Spatial Wonders"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now, that we have our setup ready. Let's start with the exciting stuff.\nWe will use ",(0,o.kt)("a",{parentName:"p",href:"../api/classes/components.MiniMap"},(0,o.kt)("strong",{parentName:"a"},"Mini Map"))," component which does all the work for us.\ud83d\udd2e\nWhen we create a ",(0,o.kt)("strong",{parentName:"p"},"Mini Map"),", a ",(0,o.kt)("strong",{parentName:"p"},"Map")," element is created at the ",(0,o.kt)("inlineCode",{parentName:"p"},"bottom-right")," of your browser window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const map = new OBC.MiniMap(components);\ncomponents.ui.add(map.uiElement.get("canvas"));\n')),(0,o.kt)("h4",{id:"-controlling-maps-like-a-wizard"},"\ud83c\udfa9 Controlling Maps like a wizard!"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"MiniMap Component makes it easy to add ",(0,o.kt)("strong",{parentName:"p"},"map")," to your app, and it also provides much easier way to manage the ",(0,o.kt)("strong",{parentName:"p"},"map"),".\nYou can set the scale for map using ",(0,o.kt)("inlineCode",{parentName:"p"},"map.zoom")," or modify the size of ",(0,o.kt)("strong",{parentName:"p"},"UI")," element using ",(0,o.kt)("inlineCode",{parentName:"p"},"map.getSize()"),",\nyou can find out about more controls ",(0,o.kt)("a",{parentName:"p",href:"../api/classes/components.MiniMap#implements"},(0,o.kt)("strong",{parentName:"a"},"here"))," \ud83c\udf9b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"map.lockRotation = false;\nmap.zoom = 0.2;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations")," \ud83c\udf89 on completing this short yet important tutorial!\nNow you can easily add navigation ",(0,o.kt)("strong",{parentName:"p"},"Map")," to your BIM Apps \ud83c\udfaf\nLet's keep it up and check out another tutorial! \ud83c\udf93"),(0,o.kt)("iframe",{src:"https://thatopen.github.io/engine_components/src/navigation/MiniMap/index.html"}))}d.isMDXComponent=!0}}]);