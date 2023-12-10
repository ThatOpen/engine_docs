"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},s=void 0,i={unversionedId:"Tutorials/ShadowDropper",id:"Tutorials/ShadowDropper",title:"ShadowDropper",description:"\ud83c\udf12 Adding Realism",source:"@site/docs/Tutorials/ShadowDropper.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/ShadowDropper",permalink:"/Tutorials/ShadowDropper",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ScreenCuller",permalink:"/Tutorials/ScreenCuller"},next:{title:"Simple2DScene",permalink:"/Tutorials/Simple2DScene"}},l={},p=[{value:"\ud83c\udf12 Adding Realism",id:"-adding-realism",level:3},{value:"\ud83c\udfb2 Creating a Cube Mesh",id:"-creating-a-cube-mesh",level:3},{value:"\ud83c\udf1a Adding Beautiful Shadow",id:"-adding-beautiful-shadow",level:3},{value:"\ud83c\udfa8 Rendering Shadow",id:"-rendering-shadow",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"-adding-realism"},"\ud83c\udf12 Adding Realism"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Have you ever wondered what makes a scene look realistic?\nAdding ",(0,r.kt)("strong",{parentName:"p"},"Shadow")," to 3D objects may quickly add depth to your creations.\ud83d\ude0e\nIn this tutorial, we'll show you how to use Shadow Dropper to quickly apply shadows.\nIn less than 5 minutes, you can create realistic shadows for all the meshes inside your scene.\u23f1\ufe0f"),(0,r.kt)("admonition",{title:"First, let's set up a simple scene!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udc40 If you haven't started there, check out ",(0,r.kt)("a",{parentName:"p",href:"/Tutorials/SimpleScene"},"that tutorial first"),"!")),(0,r.kt)("h3",{id:"-creating-a-cube-mesh"},"\ud83c\udfb2 Creating a Cube Mesh"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Let's start by adding a Cube, which we can dissect.\nWe will create a ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/index.html?q=box#api/en/geometries/BoxGeometry"},"Cube"),"\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"3x3x3")," dimensions and use red color for the material."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);\nconst cubeMaterial = new THREE.MeshStandardMaterial({color: '#6528D7'});\nconst cube = new THREE.Mesh(cubeGeometry, cubeMaterial);\ncube.position.set(0, 1.5, 0);\n")),(0,r.kt)("p",null,"Now, we will add the Cube to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Scene"),". We must also add the ",(0,r.kt)("strong",{parentName:"p"},"cube")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"components.meshes"),",\nwhich is simply an array of all the meshes in the Scene \ud83d\uddc4\ufe0f.\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"components.meshes"))," acts as a store to help you manage your elements centrally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'scene.background = new THREE.Color("gray");\nscene.add(cube);\ncomponents.meshes.push(cube);\n')),(0,r.kt)("h3",{id:"-adding-beautiful-shadow"},"\ud83c\udf1a Adding Beautiful Shadow"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This completes our scene setup. Let's now include Shadows,\nwe'll use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ShadowDropper"))," and pass ",(0,r.kt)("inlineCode",{parentName:"p"},"components")," as an argument to it.\ud83d\udd17"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const shadows = new OBC.ShadowDropper(components);\n")),(0,r.kt)("p",null,"Shadow Dropper Component not only adds shadows to the scene, but it also helps you manage the ",(0,r.kt)("strong",{parentName:"p"},"Shadows"),".\nTo obtain the required results, you can alter the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShadowDropper")," parameters.\ud83d\udd27"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"shadows.shadowExtraScaleFactor = 15;\nshadows.darkness = 2;\nshadows.shadowOffset = 0.1;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shadowExtraScalarFactor")," - With this, the shadow's area of impact can be adjusted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"darkness")," - This is used to increase or decrease the intensity of Shadow.",(0,r.kt)("admonition",{parentName:"li",title:"SHADOW and realism \u2728",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Read the ",(0,r.kt)("strong",{parentName:"p"},"Shadow Dropper")," API for more on this.\nThe Shadow Dropper API offers more configuration options to render realistic shadows.")))),(0,r.kt)("h3",{id:"-rendering-shadow"},"\ud83c\udfa8 Rendering Shadow"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now, we will use Shadow Dropper to create shadows for the element.\nWe will use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"renderShadow()"))," to generate shadow for the ",(0,r.kt)("inlineCode",{parentName:"p"},"cube")," we created."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'shadows.renderShadow([cube], "example");\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"renderShadow")," requires two parameter, the ",(0,r.kt)("inlineCode",{parentName:"p"},"element")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"shadowID"),".\n",(0,r.kt)("strong",{parentName:"p"},"shadowID")," needs to be unique for the entire scene."),(0,r.kt)("admonition",{title:"Deleting Shadows",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u274e If you want to safely delete the shadow using ",(0,r.kt)("strong",{parentName:"p"},"shadowID")," you can call\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"shadows.deleteShadow(shadowId);")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congratulations")," \ud83c\udf89 on completing this tutorial!\nNow you can add shadows to BIM Models or any 3D Object in minutes using\n",(0,r.kt)("strong",{parentName:"p"},"Shadow Dropper")," \ud83c\udf17\nLet's keep it up and check out another tutorial! \ud83c\udf93"),(0,r.kt)("iframe",{src:"https://ifcjs.github.io/components/src/navigation/ShadowDropper/index.html"}))}c.isMDXComponent=!0}}]);