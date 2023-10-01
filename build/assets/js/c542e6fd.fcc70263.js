"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8566],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),g=p(n),d=o,c=g["".concat(s,".").concat(d)]||g[d]||u[d]||r;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i=void 0,l={unversionedId:"Tutorials/FragmentBoundingBox",id:"Tutorials/FragmentBoundingBox",title:"FragmentBoundingBox",description:"\ud83e\uddf3 Gathering BIM Data",source:"@site/docs/Tutorials/FragmentBoundingBox.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/FragmentBoundingBox",permalink:"/docs/Tutorials/FragmentBoundingBox",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EdgesClipper",permalink:"/docs/Tutorials/EdgesClipper"},next:{title:"FragmentCacher",permalink:"/docs/Tutorials/FragmentCacher"}},s={},p=[{value:"\ud83e\uddf3 Gathering BIM Data",id:"-gathering-bim-data",level:3},{value:"\ud83e\udde9 Adding Fragments",id:"-adding-fragments",level:3},{value:"\ud83c\udfb2 Creation of Bounding Boxes",id:"-creation-of-bounding-boxes",level:3},{value:"\ud83d\udc53 Reading the Mesh Data",id:"-reading-the-mesh-data",level:4},{value:"\u23cf\ufe0f Creating a Toolbar for Navigating the Model",id:"\ufe0f-creating-a-toolbar-for-navigating-the-model",level:3},{value:"\ud83c\udfae Managing Zoom Events",id:"-managing-zoom-events",level:3}],m={toc:p},g="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"-gathering-bim-data"},"\ud83e\uddf3 Gathering BIM Data"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Fragment help you to render your BIM files faster than ever.\ud83d\ude85 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/fragment"},(0,o.kt)("strong",{parentName:"a"},"Fragment"))," is a group of ",(0,o.kt)("inlineCode",{parentName:"p"},"FragmentMeshes"),"\nwhich are clubbed together to visualize the BIM model.\nWhen working with ",(0,o.kt)("strong",{parentName:"p"},"large")," BIM models, you may need to quit the navigation to see the whole model.\ud83d\udccc\nTo accomplish this, we must extract Mesh data from the Fragment and use ",(0,o.kt)("inlineCode",{parentName:"p"},"control")," APIs to display the complete Fragment."),(0,o.kt)("admonition",{title:"First, let's set up a simple scene!",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udc40 If you haven't started there, check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/Tutorials/SimpleScene"},"that tutorial first"),"!")),(0,o.kt)("p",null,"For this tutorial, we'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"FragmentBoundingBox")," component, which will provide us with the ",(0,o.kt)("strong",{parentName:"p"},"mesh")," by using the Fragment Model."),(0,o.kt)("h3",{id:"-adding-fragments"},"\ud83e\udde9 Adding Fragments"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We'll start by adding a ",(0,o.kt)("strong",{parentName:"p"},"Fragment")," to our scene using ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../api/classes/components.FragmentManager"},"FragmentManager")),".\nWe'll use a simple fragment for the purposes of this tutorial, but the code is capable of handling big files as well.\ud83c\udfd7\ufe0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const fragments = new OBC.FragmentManager(components);\nconst file = await fetch("../../../resources/small.frag");\nconst data = await file.arrayBuffer();\nconst buffer = new Uint8Array(data);\nconst model = await fragments.load(buffer);\n')),(0,o.kt)("h3",{id:"-creation-of-bounding-boxes"},"\ud83c\udfb2 Creation of Bounding Boxes"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now that our setup is done, lets see how you can use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../api/classes/components.FragmentBoundingBox"},(0,o.kt)("inlineCode",{parentName:"a"},"FragmentBoundingBox()"))),".\nYou will be amazed to see how easy it is to create ",(0,o.kt)("a",{parentName:"p",href:"https://threejs.org/docs/?q=bound#api/en/math/Box3"},"bounding box")," using ",(0,o.kt)("strong",{parentName:"p"},"components"),".\ud83d\udcaa\nWe will use ",(0,o.kt)("inlineCode",{parentName:"p"},"OBC.FragmentBoundingBox()")," and add the Fragment model to it using ",(0,o.kt)("inlineCode",{parentName:"p"},"add(model)"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fragmentBbox = new OBC.FragmentBoundingBox(components);\nfragmentBbox.add(model);\n")),(0,o.kt)("h4",{id:"-reading-the-mesh-data"},"\ud83d\udc53 Reading the Mesh Data"),(0,o.kt)("p",null,"After adding the model, we can now read the mesh from bounding box using ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"getMesh()"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const bbox = fragmentBbox.getMesh();\nfragmentBbox.reset();\n")),(0,o.kt)("h3",{id:"\ufe0f-creating-a-toolbar-for-navigating-the-model"},"\u23cf\ufe0f Creating a Toolbar for Navigating the Model"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We'll make a ",(0,o.kt)("strong",{parentName:"p"},"Toolbar Component")," and set it at the bottom.\nIn addition, we will add a ",(0,o.kt)("strong",{parentName:"p"},"zoom in")," button to this toolbar that will be used to zoom in at the BIM Model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const toolbar = new OBC.Toolbar(components, {position: "bottom"});\ncomponents.ui.addToolbar(toolbar);\nconst button = new OBC.Button(components);\nbutton.materialIcon = "zoom_in_map";\nbutton.tooltip = "Zoom to building";\ntoolbar.addChild(button);\n')),(0,o.kt)("admonition",{title:"Simplistic and Powerful Toolbar!",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\ud83c\udf9b\ufe0f We have a dedicated tutorial on how to implement ",(0,o.kt)("strong",{parentName:"p"},"Toolbar"),", check ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/Tutorials/UIManager"},"Toolbar and UIManager"))," tutorial if you have any doubts!")),(0,o.kt)("h3",{id:"-managing-zoom-events"},"\ud83c\udfae Managing Zoom Events"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now that all the setup is done, we need to trigger the zoom event on a button click.\ud83d\uddb1\nWe will use ",(0,o.kt)("inlineCode",{parentName:"p"},"fitToSphere")," from ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../api/classes/components.SimpleCamera#controls"},"camera.controls")),",\nwhich takes the ",(0,o.kt)("inlineCode",{parentName:"p"},"mesh")," as a parameter and zooms to it.\nAlso, we will enable a nice transition effect while zooming to the mesh by setting the last parameter as ",(0,o.kt)("strong",{parentName:"p"},"true")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const controls = components.camera.controls;\nbutton.onClick.add(() => {\ncontrols.fitToSphere(bbox, true);\n})\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations")," \ud83c\udf89 on completing this short yet useful tutorial!\nYou can now easily zoom to Fragment ",(0,o.kt)("strong",{parentName:"p"},"Mesh")," using ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../api/classes/components.FragmentBoundingBox"},"FragmentBoundingBox")),"\ud83d\ude0e\nLet's keep it up and check out another tutorial! \ud83c\udf93"),(0,o.kt)("iframe",{src:"https://ifcjs.github.io/components/src/fragments/FragmentBoundingBox/index.html"}))}u.isMDXComponent=!0}}]);