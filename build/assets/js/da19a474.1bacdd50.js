"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[8646],{1515:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(4848),r=t(8453);const s={},a=void 0,i={id:"Tutorials/Components/Front/IfcStreamer",title:"IfcStreamer",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Front/IfcStreamer.mdx",sourceDirName:"Tutorials/Components/Front",slug:"/Tutorials/Components/Front/IfcStreamer",permalink:"/Tutorials/Components/Front/IfcStreamer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Highlighter",permalink:"/Tutorials/Components/Front/Highlighter"},next:{title:"LengthMeasurement",permalink:"/Tutorials/Components/Front/LengthMeasurement"}},l={},c=[{value:"\ud83d\udc33 Let&#39;s go BIG",id:"-lets-go-big",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83e\uddf0 Getting the streamer",id:"-getting-the-streamer",level:3},{value:"\ud83d\udcfa Streaming the model",id:"-streaming-the-model",level:3},{value:"\ud83d\udd04\ufe0f Updating the streamer",id:"\ufe0f-updating-the-streamer",level:3},{value:"\ud83e\udde0 Stream cache",id:"-stream-cache",level:3},{value:"\u2699\ufe0f Streaming config",id:"\ufe0f-streaming-config",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/IfcStreamer"}),"\n",(0,o.jsx)(n.admonition,{title:"Source",type:"info",children:(0,o.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,o.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/front/src/fragments/IfcStreamer/example.ts",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"-lets-go-big",children:"\ud83d\udc33 Let's go BIG"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Opening big BIM models is not easy, especially if we are in a browser or in devices that are not so powerful. In this tutorial, we'll learn how to do it using streaming, which allows to open gigabytes of data in seconds on any device."}),"\n",(0,o.jsx)(n.admonition,{title:"Streaming?",type:"tip",children:(0,o.jsx)(n.p,{children:'Streaming consists of converting the IFC file to "tiles", and then loading only the data that the user sees. If you haven\'t heard of streaming before, check out the geometry tiles and property tiles tutorials first!'})}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we will import:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components-front"})," to use some frontend-oriented components."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import Stats from "stats.js";\nimport * as OBC from "@thatopen/components";\nimport * as OBCF from "@thatopen/components-front";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial. Notice how we use the PostproductionRenderer in this case."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBC.SimpleRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\nworld.scene.setup();\n\nworld.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n'})}),"\n",(0,o.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-getting-the-streamer",children:"\ud83e\uddf0 Getting the streamer"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now we are ready to start streaming a BIM model. We have already a bunch of tiles prepared in our repository as example, but you can also convert your own IFC to tiles (check the geometry and property tiles tutorials for more information). First, let's get an instance of the IFC streamer:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const loader = components.get(OBCF.IfcStreamer);\nloader.world = world;\nloader.dbCleaner.enabled = true;\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now, we need to set the base URL where the streamer needs to look for the tiles. In our case, we'll use the tiles we have prepared in our repository, but this should also work with your own backend."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'loader.url =\n  "https://thatopen.github.io/engine_components/resources/streaming/";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-streaming-the-model",children:"\ud83d\udcfa Streaming the model"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now we'll create a function that will stream the given model. We will also allow to stream the properties optionally."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"async function loadModel(geometryURL: string, propertiesURL?: string) {\n  const rawGeometryData = await fetch(geometryURL);\n  const geometryData = await rawGeometryData.json();\n  let propertiesData;\n  if (propertiesURL) {\n    const rawPropertiesData = await fetch(propertiesURL);\n    propertiesData = await rawPropertiesData.json();\n  }\n\n  const model = await loader.load(geometryData, true, propertiesData);\n  console.log(model);\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Next, let's call this function and start streaming our model right away!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'await loadModel(\n  "https://thatopen.github.io/engine_components/resources/streaming/small.ifc-processed.json",\n  "https://thatopen.github.io/engine_components/resources/streaming/small.ifc-processed-properties.json",\n);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-updating-the-streamer",children:"\ud83d\udd04\ufe0f Updating the streamer"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now, streaming works by updating the scene depending on the user's perspective and getting the necessary geometries from the backend. A simple way to achieve this is by updating the scene each time the user stops the camera:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'world.camera.controls.addEventListener("sleep", () => {\n  loader.culler.needsUpdate = true;\n});\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-stream-cache",children:"\ud83e\udde0 Stream cache"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["As you can imagine, downloading the geometries from the server each time can take time, especially for heavier geometries. This is why the stream loader automatically caches the files locally to get them much faster. This means that the loading experience the first time might be a bit slower, but then later it will be much better. You can control this using the ",(0,o.jsx)(n.code,{children:"useCache"})," property and clear the cache using the ",(0,o.jsx)(n.code,{children:"clearCache()"})," method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"loader.useCache = true;\n\nasync function clearCache() {\n  await loader.clearCache();\n  window.location.reload();\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-streaming-config",children:"\u2699\ufe0f Streaming config"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["You can also customize the loader through the ",(0,o.jsx)(n.code,{children:"culler"})," property:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Threshold determines how bit an object must be in the screen to stream it."}),"\n",(0,o.jsx)(n.li,{children:"maxHiddenTime determines how long an object must be lost to remove it from the scene."}),"\n",(0,o.jsx)(n.li,{children:"maxLostTime determines how long an object must be lost to remove it from memory."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"loader.culler.threshold = 10;\nloader.culler.maxHiddenTime = 1000;\nloader.culler.maxLostTime = 3000;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We'll use the ",(0,o.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"This is it! Now you should be able to stream your own IFC models and open them anywhere, no matter how big they are! \ud83d\udcaa We will keep improving and making this API more powerful to handle any model on any device smoothly."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(6540);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);