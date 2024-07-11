"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[7064],{5932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(4848),r=t(8453);const s={},l=void 0,a={id:"Tutorials/Components/Core/Cullers",title:"Cullers",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Core/Cullers.mdx",sourceDirName:"Tutorials/Components/Core",slug:"/Tutorials/Components/Core/Cullers",permalink:"/Tutorials/Components/Core/Cullers",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Clipper",permalink:"/Tutorials/Components/Core/Clipper"},next:{title:"Exploder",permalink:"/Tutorials/Components/Core/Exploder"}},i={},c=[{value:"\ud83d\ude85 Managing Performance",id:"-managing-performance",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83e\uddf0 Creating Screen Culler",id:"-creating-screen-culler",level:3},{value:"\ud83e\uddf1 Adding a ton of cubes",id:"-adding-a-ton-of-cubes",level:3},{value:"\ud83d\udd04\ufe0f Updating the Culler",id:"\ufe0f-updating-the-culler",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/Cullers"}),"\n",(0,o.jsx)(n.admonition,{title:"Source",type:"info",children:(0,o.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,o.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/core/src/core/Cullers/example.ts",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"-managing-performance",children:"\ud83d\ude85 Managing Performance"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["There are occasions when your scene has too many objects. Multiple objects being rendered simultaneously ",(0,o.jsx)(n.strong,{children:"lengthens computation time"}),"\u231b\ufe0f and ",(0,o.jsx)(n.strong,{children:"degrades performance"}),".\ud83c\udf21\ufe0f In this tutorial, we will use ",(0,o.jsx)(n.strong,{children:"ScreenCuller"})," to improve performance by reducing unnecessary computations.\ud83d\ude80"]}),"\n",(0,o.jsx)(n.admonition,{title:'What\'s "culling"?',type:"tip",children:(0,o.jsx)(n.p,{children:"Culling is a process where we hide some objects of the scene. In this case, we'll hide objects that are not visible, either because they are outside of the scope of the camera, or because there are other objects in front of them, hiding them from the camera. The goal is simple: only compute the objects visible by the camera. This is great in BIM models, because we generally don't want to see ALL the objects at the same time."})}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we will import:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Three.js"})," to get some 3D entities for our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import * as THREE from "three";\nimport Stats from "stats.js";\nimport * as OBC from "@thatopen/components";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBC.SimpleRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(13, 13, 13, 0, 0, 0);\n\nworld.scene.setup();\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n'})}),"\n",(0,o.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-creating-screen-culler",children:"\ud83e\uddf0 Creating Screen Culler"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["Although adding Screen Culler to your project can appear difficult, it is actually very easy. We just need to get the ",(0,o.jsx)(n.code,{children:"Cullers"})," component and create a new instance of ",(0,o.jsx)(n.code,{children:"ScreenCuller"}),". Remember that although you can instance the Cullers component, it's better to get it from the ",(0,o.jsx)(n.code,{children:"components"})," object, as all the components are meant to be singletons within a Component instance, and this ensures that."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const cullers = components.get(OBC.Cullers);\nconst culler = cullers.create(world);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can use the ",(0,o.jsx)(n.code,{children:"threshold"})," property to control the minimum size of an element in screen in order for it to be revealed by the culler. Higher numbers result in less objects visible, but more performance:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"culler.threshold = 200;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Additionally, we will activate the ",(0,o.jsx)(n.code,{children:"culler.renderDebugFrame"})," so that we can see the 2D screen of the elements that are not occluded. We will get the ",(0,o.jsx)(n.strong,{children:"domElement"})," and attach it to the body so that we can see this frame in real-time. To see it in your app, just comment out the ",(0,o.jsx)(n.code,{children:'debugFrame.style.visibility = "collapse";'})," line."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'culler.renderDebugFrame = true;\nconst debugFrame = culler.renderer.domElement;\ndocument.body.appendChild(debugFrame);\ndebugFrame.style.position = "fixed";\ndebugFrame.style.left = "0";\ndebugFrame.style.bottom = "0";\ndebugFrame.style.visibility = "collapse";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-adding-a-ton-of-cubes",children:"\ud83e\uddf1 Adding a ton of cubes"}),"\n",(0,o.jsxs)(n.p,{children:["We'll add the Simple 3D Cube and do it ",(0,o.jsx)(n.strong,{children:"300 times"}),"!\ud83e\udd2f We'll generate box geometry and use Lambert material."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const cubes: THREE.Mesh[] = [];\nconst geometry = new THREE.BoxGeometry(2, 2, 2);\nconst material = new THREE.MeshLambertMaterial({ color: "#6528D7" });\n'})}),"\n",(0,o.jsx)(n.admonition,{title:"Randomising the Cubes Placement",type:"info",children:(0,o.jsxs)(n.p,{children:["We'll write a quick ",(0,o.jsx)(n.strong,{children:"utility"})," function that returns a random number between 0 and the specified upper limit. You can use this for a variety of purposes, but for this tutorial it will be used to generate random positions for cubes that we will add later to our scene.\ud83d\udccc"]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"function getRandomNumber(limit: number) {\n  return Math.random() * limit;\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now, using the ",(0,o.jsx)(n.code,{children:"getRandomNumber()"})," method we previously created, we will add the 300 ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"cube"})})," meshes to our scene at random positions. We'll add the cube to the scene and adjust its position between 0 and 10.\nAdditionally, we will add meshes to the ",(0,o.jsx)(n.code,{children:"culler"})," object, which will help the culler  recognize and draw the elements that are visible to the camera, which can be done with the culler's ",(0,o.jsx)(n.code,{children:"add()"})," method."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"function regenerateCubes() {\n  for (let i = 0; i < 300; i++) {\n    const cube = new THREE.Mesh(geometry, material);\n    cube.position.x = getRandomNumber(10);\n    cube.position.y = getRandomNumber(10);\n    cube.position.z = getRandomNumber(10);\n    cube.updateMatrix();\n    world.scene.three.add(cube);\n    culler.add(cube);\n    cubes.push(cube);\n  }\n}\n\nregenerateCubes();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-updating-the-culler",children:"\ud83d\udd04\ufe0f Updating the Culler"}),"\n",(0,o.jsxs)(n.p,{children:["Here comes the most crucial part! The core aim of ",(0,o.jsx)(n.strong,{children:"ScreenCuller"})," is to output just those components that are visible to the camera."]}),"\n",(0,o.jsx)(n.admonition,{title:"How often should you update the culler?",type:"info",children:(0,o.jsx)(n.p,{children:"It depends on the experience you are looking for. Naturally, the most often you update it, the faster your user will discover new objects that were hidden before, but that also means that your app will be less performant."})}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial we are updating it each time the camera stops moving, which generally works well for most apps."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'culler.needsUpdate = true;\nworld.camera.controls.addEventListener("controlend", () => {\n  culler.needsUpdate = true;\n});\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We'll use the ",(0,o.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Great job! \ud83c\udf89 Now you know how to optimise your 3D scene using a\n",(0,o.jsx)(n.strong,{children:"Screen Culler"})," component! Your BIM app will now have unmatched performance and can render huge scenes easily."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var o=t(6540);const r={},s=o.createContext(r);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);