"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[1248],{4817:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(4848),s=t(8453);const r={},i=void 0,a={id:"Tutorials/Components/Core/IfcPropertiesTiler",title:"IfcPropertiesTiler",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Core/IfcPropertiesTiler.mdx",sourceDirName:"Tutorials/Components/Core",slug:"/Tutorials/Components/Core/IfcPropertiesTiler",permalink:"/Tutorials/Components/Core/IfcPropertiesTiler",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IfcLoader",permalink:"/Tutorials/Components/Core/IfcLoader"},next:{title:"IfcRelationsIndexer",permalink:"/Tutorials/Components/Core/IfcRelationsIndexer"}},l={},c=[{value:"\ud83e\udde9 Tiling BIM properties",id:"-tiling-bim-properties",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83e\uddf3 Loading a BIM model",id:"-loading-a-bim-model",level:3},{value:"\u2198\ufe0f Setting up downloads",id:"\ufe0f-setting-up-downloads",level:3},{value:"\ud83d\udccb Getting the streamer",id:"-getting-the-streamer",level:3},{value:"\ud83d\udcc5 Setting up the events",id:"-setting-up-the-events",level:3},{value:"\ud83d\udd25 Generating the tiles",id:"-generating-the-tiles",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83e\udde9 Adding some UI",id:"-adding-some-ui",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"Source",type:"info",children:(0,o.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,o.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/core/src/fragments/IfcPropertiesTiler/example.ts",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"-tiling-bim-properties",children:"\ud83e\udde9 Tiling BIM properties"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.admonition,{title:"Tiles?",type:"tip",children:(0,o.jsx)(n.p,{children:"If you haven't checked out the geometry tiling tutorial, we recommend that you do it first! This tutorial assumes that you already have done it."})}),"\n",(0,o.jsx)(n.p,{children:"You can also stream the properties of an IFC file. Why? Because some files can have\nmillions of properties, and trying to save them naively in a normal DB is not very\nscalable/affordable. Using this system, you'll be able to store and retrieve the\ndata of models of any size without big cloud costs.\nIn this tutorial, we will import:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"web-ifc"})," to get some IFC items."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import Stats from "stats.js";\nimport * as BUI from "@thatopen/ui";\nimport * as OBC from "@thatopen/components";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBC.SimpleRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);\n\nworld.scene.setup();\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n'})}),"\n",(0,o.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-loading-a-bim-model",children:"\ud83e\uddf3 Loading a BIM model"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We'll start by adding a BIM model to our scene. That model is already converted to fragments, so it will load much faster than if we loaded the IFC file."}),"\n",(0,o.jsx)(n.admonition,{title:"Fragments?",type:"tip",children:(0,o.jsx)(n.p,{children:"If you are not familiar with fragments, check out the IfcLoader tutorial!"})}),"\n",(0,o.jsx)(n.p,{children:"This is not compulsory, as the data will come from an .ifc file, not from fragments. But at least we'll see the model whose properties we will be converting to tiles!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const fragments = new OBC.FragmentsManager(components);\nconst fragFile = await fetch("https://thatopen.github.io/engine_components/resources/small.frag");\nconst fragData = await fragFile.arrayBuffer();\nconst fragBuffer = new Uint8Array(fragData);\nconst model = fragments.load(fragBuffer);\nworld.scene.three.add(model);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-setting-up-downloads",children:"\u2198\ufe0f Setting up downloads"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now we will define some helper download functions that will allow us to get the property tiles that we generate in our computer."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'function downloadFile(name: string, bits: Blob) {\n  const file = new File([bits], name);\n  const anchor = document.createElement("a");\n  const url = URL.createObjectURL(file);\n  anchor.href = url;\n  anchor.download = file.name;\n  anchor.click();\n  URL.revokeObjectURL(url);\n}\n\nasync function downloadFilesSequentially(\n  fileList: { name: string; bits: Blob }[],\n) {\n  for (const { name, bits } of fileList) {\n    downloadFile(name, bits);\n    await new Promise((resolve) => {\n      setTimeout(resolve, 100);\n    });\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-getting-the-streamer",children:"\ud83d\udccb Getting the streamer"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now we will get the property streamer component from the library and initialize it."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const propsStreamer = components.get(OBC.IfcPropertiesTiler);\n\npropsStreamer.settings.wasm = {\n  path: "https://unpkg.com/web-ifc@0.0.53/",\n  absolute: true,\n};\n'})}),"\n",(0,o.jsx)(n.p,{children:"We need to generate properties JSON with the following structure:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"interface StreamedProperties {\n  types: {\n    [typeID: number]: number[];\n  };\n\n  ids: {\n    [id: number]: number;\n  };\n\n  indexesFile: string;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"So we will define an object where we will store the tiles as we generate them."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const jsonFile: StreamedProperties = {\n  types: {},\n  ids: {},\n  indexesFile: "small.ifc-processed-properties-indexes",\n};\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-the-events",children:"\ud83d\udcc5 Setting up the events"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["Similarly to geometries, here you will also get data and progress notification using events. In addition to properties, you will get ",(0,o.jsx)(n.code,{children:"indices"}),", which is an indexation data of the properties to be able to use them effectively when streamed. Let's set up those events now!"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let counter = 0;\n\nconst files: { name: string; bits: Blob }[] = [];\n\npropsStreamer.onPropertiesStreamed.add(async (props) => {\n  if (!jsonFile.types[props.type]) {\n    jsonFile.types[props.type] = [];\n  }\n  jsonFile.types[props.type].push(counter);\n\n  for (const id in props.data) {\n    jsonFile.ids[id] = counter;\n  }\n\n  const name = `small.ifc-processed-properties-${counter}`;\n  const bits = new Blob([JSON.stringify(props.data)]);\n  files.push({ bits, name });\n\n  counter++;\n});\n\npropsStreamer.onProgress.add(async (progress) => {\n  console.log(progress);\n});\n\npropsStreamer.onIndicesStreamed.add(async (props) => {\n  files.push({\n    name: `small.ifc-processed-properties.json`,\n    bits: new Blob([JSON.stringify(jsonFile)]),\n  });\n\n  const relations = components.get(OBC.IfcRelationsIndexer);\n  const serializedRels = relations.serializeRelations(props);\n\n  files.push({\n    name: "small.ifc-processed-properties-indexes",\n    bits: new Blob([serializedRels]),\n  });\n\n  await downloadFilesSequentially(files);\n});\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-generating-the-tiles",children:"\ud83d\udd25 Generating the tiles"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Great! Now that we have everything setup, is time to finally convert the IFC file. In order to trigger the conversion, we can just do the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'async function processFile() {\n  const fetchedIfc = await fetch("https://thatopen.github.io/engine_components/resources/small.ifc");\n  const ifcBuffer = await fetchedIfc.arrayBuffer();\n  // We will need this information later to also convert the properties\n  const ifcArrayBuffer = new Uint8Array(ifcBuffer);\n  // This triggers the conversion, so the listeners start to be called\n  await propsStreamer.streamFromBuffer(ifcArrayBuffer);\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"If everything went as expected, you should now be seeing some files being downloaded from your app \ud83e\udd2f Do not get scary if they're a lot, as big models tend to have many files! All of that is the information the streaming uses in order to display the geometry in the most efficient way possible. \ud83d\udcaa"}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We'll use the ",(0,o.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-adding-some-ui",children:"\ud83e\udde9 Adding some UI"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We will use the ",(0,o.jsx)(n.code,{children:"@thatopen/ui"})," library to add some simple and cool UI elements to our app. First, we need to call the ",(0,o.jsx)(n.code,{children:"init"})," method of the ",(0,o.jsx)(n.code,{children:"BUI.Manager"})," class to initialize the library:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"BUI.Manager.init();\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now we will add some UI to generate and download the tiles to our computer. For more information about the UI library, you can check the specific documentation for it!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const panel = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n  <bim-panel active label="Property Tiles Tutorial" class="options-menu">\n   <bim-panel-section collapsed label="Controls">\n      \n      <bim-panel-section style="padding-top: 12px;">\n      \n        <bim-button label="Load IFC"\n          @click="${() => {\n            processFile();\n          }}">\n        </bim-button>  \n      \n      </bim-panel-section>\n      \n    </bim-panel>\n  `;\n});\n\ndocument.body.append(panel);\n'})}),"\n",(0,o.jsx)(n.p,{children:"And we will make some logic that adds a button to the screen when the user is visiting our app from their phone, allowing to show or hide the menu. Otherwise, the menu would make the app unusable."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const button = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"\n        @click="${() => {\n          if (panel.classList.contains("options-menu-visible")) {\n            panel.classList.remove("options-menu-visible");\n          } else {\n            panel.classList.add("options-menu-visible");\n          }\n        }}">\n      </bim-button>\n    `;\n});\n\ndocument.body.append(button);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"That's it! You have created an app that can generate the property BIM tiles for an IFC and download them to your computer. Now you have the power to process big IFC files! To consume these tiles, check out the IFC streamer tutorial."}),"\n",(0,o.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/IfcPropertiesTiler"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);