"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[8081],{2548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(4848),s=t(8453);const r={},a=void 0,i={id:"Tutorials/Components/Front/VolumeMeasurement",title:"VolumeMeasurement",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Front/VolumeMeasurement.mdx",sourceDirName:"Tutorials/Components/Front",slug:"/Tutorials/Components/Front/VolumeMeasurement",permalink:"/Tutorials/Components/Front/VolumeMeasurement",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ShadowDropper",permalink:"/Tutorials/Components/Front/ShadowDropper"},next:{title:"UserInterface",permalink:"/Tutorials/UserInterface/"}},l={},c=[{value:"\ud83d\udcd0 Measuring volumes",id:"-measuring-volumes",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83e\uddf3 Loading a BIM model",id:"-loading-a-bim-model",level:3},{value:"\ud83d\udee0\ufe0f Getting the volume measurements",id:"\ufe0f-getting-the-volume-measurements",level:3},{value:"\ud83d\udd26 Getting the highlighter",id:"-getting-the-highlighter",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"Source",type:"info",children:(0,o.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,o.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/front/src/measurement/VolumeMeasurement/example.ts",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"-measuring-volumes",children:"\ud83d\udcd0 Measuring volumes"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Space control is one of the most important elements of BIM applications. In this tutorial, you'll learn how to expose an volume measurement tool to your end users.\nWe will import:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components-front"})," to use some frontend-oriented components."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import Stats from "stats.js";\nimport * as OBC from "@thatopen/components";\nimport * as OBCF from "@thatopen/components-front";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBCF.PostproductionRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBCF.PostproductionRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(5, 5, 5, 0, 0, 0);\n\nworld.scene.setup();\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n'})}),"\n",(0,o.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-loading-a-bim-model",children:"\ud83e\uddf3 Loading a BIM model"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We'll start by adding a BIM model to our scene. That model is already converted to fragments, so it will load much faster than if we loaded the IFC file."}),"\n",(0,o.jsx)(n.admonition,{title:"Fragments?",type:"tip",children:(0,o.jsx)(n.p,{children:"If you are not familiar with fragments, check out the IfcLoader tutorial!"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const fragments = new OBC.FragmentsManager(components);\nconst file = await fetch("https://thatopen.github.io/engine_components/resources/small.frag");\nconst data = await file.arrayBuffer();\nconst buffer = new Uint8Array(data);\nconst model = fragments.load(buffer);\nworld.scene.three.add(model);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-getting-the-volume-measurements",children:"\ud83d\udee0\ufe0f Getting the volume measurements"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"First, let's get an instance of the volume measurement component and initialize it."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const dimensions = components.get(OBCF.VolumeMeasurement);\ndimensions.world = world;\ndimensions.enabled = true;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-getting-the-highlighter",children:"\ud83d\udd26 Getting the highlighter"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now, let's get an instance of the highlighter component and initialize it to be able to highlight the computed volume."}),"\n",(0,o.jsx)(n.admonition,{title:"Highlighter?",type:"tip",children:(0,o.jsx)(n.p,{children:"If you are not familiar with the highlighter component, check out the highlighter tutorial!"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const highlighter = components.get(OBCF.Highlighter);\nhighlighter.setup({ world });\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now we'll simply take the computed volume and log it in the console. Also, when the highlighter is cleared, we'll also clear the volume dimension."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"highlighter.events.select.onHighlight.add((event) => {\n  const volume = dimensions.getVolumeFromFragments(event);\n  console.log(volume);\n});\n\nhighlighter.events.select.onClear.add(() => {\n  dimensions.clear();\n});\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We'll use the ",(0,o.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"That's it! You have created an app that can create and delete volume dimensions on any 3D object. Congratulations!"}),"\n",(0,o.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/VolumeMeasurement"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(6540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);