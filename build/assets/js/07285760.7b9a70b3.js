"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[5648],{2163:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var o=t(4848),r=t(8453);const i={},s=void 0,a={id:"Tutorials/Components/Front/Highlighter",title:"Highlighter",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Front/Highlighter.mdx",sourceDirName:"Tutorials/Components/Front",slug:"/Tutorials/Components/Front/Highlighter",permalink:"/Tutorials/Components/Front/Highlighter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FaceMeasurement",permalink:"/Tutorials/Components/Front/FaceMeasurement"},next:{title:"IfcStreamer",permalink:"/Tutorials/Components/Front/IfcStreamer"}},l={},h=[{value:"\ud83d\udd26 Highlighting",id:"-highlighting",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83e\uddf3 Loading a BIM model",id:"-loading-a-bim-model",level:3},{value:"\ud83d\udca1 Getting the highlighter",id:"-getting-the-highlighter",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/Highlighter"}),"\n",(0,o.jsx)(n.admonition,{title:"Source",type:"info",children:(0,o.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,o.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/front/src/fragments/Highlighter/example.ts",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"-highlighting",children:"\ud83d\udd26 Highlighting"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"In 3D apps, users get some feedback when they hover or click on an object. Generally, it changes its color or shading. In this tutorial, you'll learn how to do that with the highlighter."}),"\n",(0,o.jsx)(n.admonition,{title:"Highlighting?",type:"tip",children:(0,o.jsx)(n.p,{children:"Highlighting means changing the color of one or many objects to make them stand out. This can be used for hovering, for selection, for bringing the attention of the user to certain items, etc."})}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we will import:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components-front"})," to use some frontend-oriented components."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import * as OBC from "@thatopen/components";\nimport * as OBCF from "@thatopen/components-front";\nimport Stats from "stats.js";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBC.SimpleRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);\n\nworld.scene.setup();\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n'})}),"\n",(0,o.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-loading-a-bim-model",children:"\ud83e\uddf3 Loading a BIM model"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We'll start by adding a BIM model to our scene. That model is already converted to fragments, so it will load much faster than if we loaded the IFC file."}),"\n",(0,o.jsx)(n.admonition,{title:"Fragments?",type:"tip",children:(0,o.jsx)(n.p,{children:"If you are not familiar with fragments, check out the IfcLoader tutorial!"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const fragments = new OBC.FragmentsManager(components);\nconst file = await fetch(\n  "https://thatopen.github.io/engine_components/resources/small.frag",\n);\nconst data = await file.arrayBuffer();\nconst buffer = new Uint8Array(data);\nconst model = fragments.load(buffer);\nworld.scene.three.add(model);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-getting-the-highlighter",children:"\ud83d\udca1 Getting the highlighter"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now, we will basically get the highlighter and set it up. This will create and configure 2 things:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Selecting: when clicking on an element."}),"\n",(0,o.jsx)(n.li,{children:"Hovering: when hovering the mouse over an element."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const highlighter = components.get(OBCF.Highlighter);\nhighlighter.setup({ world });\nhighlighter.zoomToSelection = true;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We'll use the ",(0,o.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"That's it! You have created an app that can highlight items on hover and on selection. Congratulations!"})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);