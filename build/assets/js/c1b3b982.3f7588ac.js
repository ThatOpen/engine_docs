"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[8383],{7207:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(4848),s=t(8453);const r={},a=void 0,i={id:"Tutorials/Components/Front/AreaMeasurement",title:"AreaMeasurement",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Front/AreaMeasurement.mdx",sourceDirName:"Tutorials/Components/Front",slug:"/Tutorials/Components/Front/AreaMeasurement",permalink:"/Tutorials/Components/Front/AreaMeasurement",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AngleMeasurement",permalink:"/Tutorials/Components/Front/AngleMeasurement"},next:{title:"Civil3DNavigator",permalink:"/Tutorials/Components/Front/Civil3DNavigator"}},l={},c=[{value:"\ud83d\udcd0 Measuring areas",id:"-measuring-areas",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83c\udfb2 Creating a Cube Mesh",id:"-creating-a-cube-mesh",level:3},{value:"\ud83d\udee0\ufe0f Getting the area measurements",id:"\ufe0f-getting-the-area-measurements",level:3},{value:"\ud83d\uddb1\ufe0f Setting up mouse events",id:"\ufe0f-setting-up-mouse-events",level:3},{value:"\ud83e\uddf9 Deleting the Dimensions",id:"-deleting-the-dimensions",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/AreaMeasurement"}),"\n",(0,o.jsx)(n.admonition,{title:"Source",type:"info",children:(0,o.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,o.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/front/src/measurement/AreaMeasurement/example.ts",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"-measuring-areas",children:"\ud83d\udcd0 Measuring areas"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Space control is one of the most important elements of BIM applications. In this tutorial, you'll learn how to expose an area measurement tool to your end users.\nWe will import:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"three"})," to create some 3D items."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components-front"})," to use some frontend-oriented components."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import Stats from "stats.js";\nimport * as OBC from "@thatopen/components";\nimport * as THREE from "three";\nimport * as OBCF from "@thatopen/components-front";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBCF.PostproductionRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBCF.PostproductionRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\nworld.camera.controls.setLookAt(5, 5, 5, 0, 0, 0);\nworld.scene.setup();\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n'})}),"\n",(0,o.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-creating-a-cube-mesh",children:"\ud83c\udfb2 Creating a Cube Mesh"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["For this tutorial we will use a Cube, you can add any geometry as per your preference. We will create a ",(0,o.jsx)(n.a,{href:"https://threejs.org/docs/index.html?q=box#api/en/geometries/BoxGeometry",children:"Cube"})," with ",(0,o.jsx)(n.code,{children:"3x3x3"})," dimensions and use red color for the material."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);\nconst cubeMaterial = new THREE.MeshStandardMaterial({ color: "#6528D7" });\nconst cube = new THREE.Mesh(cubeGeometry, cubeMaterial);\ncube.position.set(0, 1.5, 0);\nworld.scene.three.add(cube);\nworld.meshes.add(cube);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-getting-the-area-measurements",children:"\ud83d\udee0\ufe0f Getting the area measurements"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"First, let's get an instance of the area measurement component and initialize it:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const areaDims = components.get(OBCF.AreaMeasurement);\nareaDims.world = world;\nareaDims.enabled = true;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-setting-up-mouse-events",children:"\ud83d\uddb1\ufe0f Setting up mouse events"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now, we'll define how to create the area dimensions. In this case, we'll keep it simple and use the double click event of the container HTML element. We'll also use the right mouse button to end the creation of the area."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"container.ondblclick = () => areaDims.create();\ncontainer.oncontextmenu = () => areaDims.endCreation();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-deleting-the-dimensions",children:"\ud83e\uddf9 Deleting the Dimensions"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["Now that we know how to make multiple dimensions, we'll learn how to delete them when necessary. Dimensions can be removed using the ",(0,o.jsx)(n.code,{children:"deleteAll()"})," method, which deletes all the created dimensions. Again, we'll keep it simple and bind this event to the keydown event. Specifically, it will fire when the user presses the ",(0,o.jsx)(n.code,{children:"Delete"})," or ",(0,o.jsx)(n.code,{children:"Backspace"})," key."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'window.onkeydown = (event) => {\n  if (event.code === "Delete" || event.code === "Backspace") {\n    areaDims.deleteAll();\n  }\n};\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We'll use the ",(0,o.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"That's it! You have created an app that can create and delete area dimensions on any 3D object. Congratulations!"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(6540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);