"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},l=void 0,i={unversionedId:"Tutorials/FragmentExploder",id:"Tutorials/FragmentExploder",title:"FragmentExploder",description:"\ud83d\udca3 Breaking down Model Dynamically",source:"@site/docs/Tutorials/FragmentExploder.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/FragmentExploder",permalink:"/Tutorials/FragmentExploder",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FragmentClipStyler",permalink:"/Tutorials/FragmentClipStyler"},next:{title:"FragmentHider",permalink:"/Tutorials/FragmentHider"}},s={},p=[{value:"\ud83d\udca3 Breaking down Model Dynamically",id:"-breaking-down-model-dynamically",level:3},{value:"\ud83e\udde9 Adding Fragments",id:"-adding-fragments",level:3},{value:"\ud83d\uddc2\ufe0f Strategically Classifying Fragments",id:"\ufe0f-strategically-classifying-fragments",level:3},{value:"Getting Properties",id:"getting-properties",level:4},{value:"\ud83d\udca5 Exploding the Fragment",id:"-exploding-the-fragment",level:3},{value:"\ud83c\udf21\ufe0f Screen Culling for Better Performance",id:"\ufe0f-screen-culling-for-better-performance",level:3}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"-breaking-down-model-dynamically"},"\ud83d\udca3 Breaking down Model Dynamically"),(0,a.kt)("p",null,"You may have previously used the Simple Clipper component to dismantle a 3D models.\nAlthough Simple Clipper is fantastic for dissecting,\nthere may be instances when you need to inspect the model while keeping it intact.\ud83d\udd27\nAt such times, Fragment Exploder is useful for giving you an exploded view of all the Elements inside the BIM Model."),(0,a.kt)("admonition",{title:"First, let's set up a simple scene!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\ud83d\udc40 If you haven't started there, check out ",(0,a.kt)("a",{parentName:"p",href:"/Tutorials/SimpleScene"},"that tutorial first"),"!")),(0,a.kt)("p",null,"This tutorial will show you how to use ",(0,a.kt)("strong",{parentName:"p"},"Fragment Exploder")," for exploring BIM Models in detail.\ud83d\udc53"),(0,a.kt)("h3",{id:"-adding-fragments"},"\ud83e\udde9 Adding Fragments"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We'll start by adding a ",(0,a.kt)("strong",{parentName:"p"},"Fragment")," to our scene using ",(0,a.kt)("a",{parentName:"p",href:"../api/classes/components.FragmentManager"},(0,a.kt)("strong",{parentName:"a"},"FragmentManager")),".\nWe'll use a simple fragment for the purposes of this tutorial, but the code is capable of handling big files as well.\ud83c\udfd7\ufe0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const fragments = new OBC.FragmentManager(components);\nconst file = await fetch("../../../resources/small.frag");\nconst data = await file.arrayBuffer();\nconst buffer = new Uint8Array(data);\nconst model = await fragments.load(buffer);\n')),(0,a.kt)("admonition",{title:"Showing Fragments in the Scene",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\ud83c\udfd4\ufe0f There is a dedicated tutorial on how to use Fragment Manager to load ",(0,a.kt)("strong",{parentName:"p"},"IFC files"),", checkout ",(0,a.kt)("a",{parentName:"p",href:"/Tutorials/FragmentManager"},"that tutorial here"),"!")),(0,a.kt)("h3",{id:"\ufe0f-strategically-classifying-fragments"},"\ud83d\uddc2\ufe0f Strategically Classifying Fragments"),(0,a.kt)("p",null,"In this tutorial, we will deconstruct the model into floors. But before we explode them, we need to classify them by floor.\nFor breaking down the model in the required way, we'll utilize ",(0,a.kt)("a",{parentName:"p",href:"../api/classes/components.FragmentClassifier"},(0,a.kt)("strong",{parentName:"a"},"FragmentClassifier")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const classifier = new OBC.FragmentClassifier(components);\n")),(0,a.kt)("h4",{id:"getting-properties"},"Getting Properties"),(0,a.kt)("p",null,"Fragment Classifier requires model properties that will help the classifier in identifying the floors included inside the Fragment.\ud83e\uddee\nWe will fetch the properties from ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," file and store it in ",(0,a.kt)("inlineCode",{parentName:"p"},"model.properties"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const properties = await fetch("../../../resources/small.json");\nmodel.properties = await properties.json();\n')),(0,a.kt)("p",null,"Now that we have the properties, we will pass the model to classifier and use ",(0,a.kt)("inlineCode",{parentName:"p"},"classifier.byStorey()")," which will group the Fragments according to Floors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"classifier.byStorey(model);\n")),(0,a.kt)("h3",{id:"-exploding-the-fragment"},"\ud83d\udca5 Exploding the Fragment"),(0,a.kt)("p",null,"Now that we've completed the setup, we'll use the ",(0,a.kt)("inlineCode",{parentName:"p"},"FragmentExploder")," and send the ",(0,a.kt)("strong",{parentName:"p"},"fragment")," and ",(0,a.kt)("strong",{parentName:"p"},"classifier")," data to it.\nOur Fragment Exploder is now complete, and we can simply explode the model by calling ",(0,a.kt)("a",{parentName:"p",href:"../api/classes/components.FragmentExploder.explode"},(0,a.kt)("inlineCode",{parentName:"a"},"exploder.explode()")),".\ud83d\udcaa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const exploder = new OBC.FragmentExploder(components);\n")),(0,a.kt)("h3",{id:"\ufe0f-screen-culling-for-better-performance"},"\ud83c\udf21\ufe0f Screen Culling for Better Performance"),(0,a.kt)("p",null,"We will also add ",(0,a.kt)("a",{parentName:"p",href:"../api/classes/components.ScreenCuller"},"Screen Culler")," which will enhance the performance of our\nBIM App by removing Fragment elements that are not in our viewing area."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const culler = new OBC.ScreenCuller(components);\ncontainer.addEventListener("mouseup", () => culler.needsUpdate = true);\ncontainer.addEventListener("wheel", () => culler.needsUpdate = true);\nfor(const fragment of model.items) {\nculler.add(fragment.mesh);\n}\nculler.needsUpdate = true;\n')),(0,a.kt)("admonition",{title:"Culling unnecessary Fragments",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\ud83d\ude85 If you're wondering how to add Screen Culler to your BIM app, we have a dedicated tutorial for it! Checkout ",(0,a.kt)("a",{parentName:"p",href:"/Tutorials/ScreenCuller"},"that tutorial here"),"!")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Congratulations")," \ud83c\udf89 on completing this tutorial!\nYour BIM App now has the power to deconstruct a model on a single click using ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../api/classes/components.FragmentExploder"},"Fragment Exploder")),"\ud83d\ude0e\nLet's keep it up and check out another tutorial! \ud83c\udf93"),(0,a.kt)("iframe",{src:"https://ifcjs.github.io/components/src/fragments/FragmentExploder/index.html"}))}d.isMDXComponent=!0}}]);