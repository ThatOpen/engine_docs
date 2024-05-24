"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],i={},l=void 0,c={unversionedId:"Tutorials/Components/Core/Raycasters",id:"Tutorials/Components/Core/Raycasters",title:"Raycasters",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Core/Raycasters.mdx",sourceDirName:"Tutorials/Components/Core",slug:"/Tutorials/Components/Core/Raycasters",permalink:"/Tutorials/Components/Core/Raycasters",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OrthoPerspectiveCamera",permalink:"/Tutorials/Components/Core/OrthoPerspectiveCamera"},next:{title:"Worlds",permalink:"/Tutorials/Components/Core/Worlds"}},p={},u=[{value:"\ud83d\udc01 Picking things with the mouse",id:"-picking-things-with-the-mouse",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83e\uddca Adding some cubes to the scene",id:"-adding-some-cubes-to-the-scene",level:3},{value:"\u26a1 Setting up the raycaster",id:"-setting-up-the-raycaster",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}],m={toc:u},d="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Source",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/main/packages/core/src/core/Raycasters/example.ts"},"here"),".")),(0,a.kt)("h3",{id:"-picking-things-with-the-mouse"},"\ud83d\udc01 Picking things with the mouse"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In this tutorial you'll learn how to use the Raycaster to pick objects in the scene with the mouse."),(0,a.kt)("admonition",{title:"What's ray casting?",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Ray casting is the process of casting a ray from a point in space to another point in space. We will cast a ray from the mouse position to the 3D world and check if there is an object in its way. That way, when you hover or click on an object, we can know which one it is and do something with it.")),(0,a.kt)("p",null,"In this tutorial, we will import:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Three.js")," to get some 3D entities for our app."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@thatopen/components")," to set up the barebone of our app."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Stats.js")," (optional) to measure the performance of our app.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import * as THREE from "three";\nimport Stats from "stats.js";\nimport * as OBC from "@thatopen/components";\n')),(0,a.kt)("h3",{id:"-setting-up-a-simple-scene"},"\ud83c\udf0e Setting up a simple scene"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBC.SimpleRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(10, 10, 10, 0, 0, 0);\n\nworld.scene.setup();\n')),(0,a.kt)("p",null,"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"world.scene.three.background = null;\n")),(0,a.kt)("h3",{id:"-adding-some-cubes-to-the-scene"},"\ud83e\uddca Adding some cubes to the scene"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now we will add some cubes to the scene and create some materials. The idea for this app is simple: when you click on a cube, it will change its color to green."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const cubeMaterial = new THREE.MeshStandardMaterial({ color: "#6528D7" });\nconst greenMaterial = new THREE.MeshStandardMaterial({ color: "#BCF124" });\n\nconst boxGeometry = new THREE.BoxGeometry(3, 3, 3);\n\nconst cube1 = new THREE.Mesh(boxGeometry, cubeMaterial);\nconst cube2 = new THREE.Mesh(boxGeometry, cubeMaterial);\nconst cube3 = new THREE.Mesh(boxGeometry, cubeMaterial);\nworld.scene.three.add(cube1, cube2, cube3);\nconst cubes = [cube1, cube2, cube3];\n\ncube2.position.x = 5;\ncube3.position.x = -5;\n')),(0,a.kt)("p",null,"To make this more interesting, we will add a rotation to the cubes. We can do it by subscribing to the ",(0,a.kt)("inlineCode",{parentName:"p"},"onBeforeUpdate")," event of the world, which fires 60 times per second."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const oneDegree = Math.PI / 180;\n\nfunction rotateCubes() {\n  cube1.rotation.x += oneDegree;\n  cube1.rotation.y += oneDegree;\n  cube2.rotation.x += oneDegree;\n  cube2.rotation.z += oneDegree;\n  cube3.rotation.y += oneDegree;\n  cube3.rotation.z += oneDegree;\n}\n\nworld.renderer.onBeforeUpdate.add(rotateCubes);\n")),(0,a.kt)("h3",{id:"-setting-up-the-raycaster"},"\u26a1 Setting up the raycaster"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Next, we will set up the raycaster. We will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Raycasters")," component. Instead of instantiating it, we will get it from the ",(0,a.kt)("inlineCode",{parentName:"p"},"components")," object, which is usually safer, as all components are meant to be singletons."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const casters = components.get(OBC.Raycasters);\n")),(0,a.kt)("p",null,"Each raycaster is bound to a specific world. In this case, we will get the raycaster from the ",(0,a.kt)("inlineCode",{parentName:"p"},"world")," we are using for our scene:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const caster = casters.get(world);\n")),(0,a.kt)("p",null,"Finally, we will subscribe to the mousemove event of the window. We will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"castRay")," method of the raycaster to find out if the mouse is over a cube. If it is, we will change its color to green. Otherwise, we will change its color to the original color."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let previousSelection: THREE.Mesh | null = null;\n\nwindow.onmousemove = () => {\n  const result = caster.castRay(cubes);\n  if (previousSelection) {\n    previousSelection.material = cubeMaterial;\n  }\n  if (!result || !(result.object instanceof THREE.Mesh)) {\n    return;\n  }\n  result.object.material = greenMaterial;\n  previousSelection = result.object;\n};\n")),(0,a.kt)("h3",{id:"\ufe0f-measuring-the-performance-optional"},"\u23f1\ufe0f Measuring the performance (optional)"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We'll use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrdoob/stats.js"},"Stats.js")," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n')),(0,a.kt)("h3",{id:"-wrap-up"},"\ud83c\udf89 Wrap up"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"That's it! We have created a simple app that uses the Raycaster to pick objects in the scene with the mouse. Easy, right? Now you can allow your users to interact with your 3D world."),(0,a.kt)("iframe",{src:"https://thatopen.github.io/engine_components/examples/Raycasters"}))}h.isMDXComponent=!0}}]);