"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[8836],{2023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(4848),o=t(8453);const i={},a=void 0,l={id:"Tutorials/Components/Front/FaceMeasurement",title:"FaceMeasurement",description:'window.open("https://thatopen.github.io/engine_components/examples/FaceMeasurement")} >Go Full Screen',source:"@site/docs/Tutorials/Components/Front/FaceMeasurement.mdx",sourceDirName:"Tutorials/Components/Front",slug:"/Tutorials/Components/Front/FaceMeasurement",permalink:"/Tutorials/Components/Front/FaceMeasurement",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EdgeMeasurement",permalink:"/Tutorials/Components/Front/EdgeMeasurement"},next:{title:"Highlighter",permalink:"/Tutorials/Components/Front/Highlighter"}},r={},c=[{value:"\ud83d\udcd0 Measuring faces",id:"-measuring-faces",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83e\uddf3 Loading a BIM model",id:"-loading-a-bim-model",level:3},{value:"\ud83d\udee0\ufe0f Getting the face measurements",id:"\ufe0f-getting-the-face-measurements",level:3},{value:"\ud83d\uddb1\ufe0f Setting up mouse events",id:"\ufe0f-setting-up-mouse-events",level:3},{value:"\ud83e\uddf9 Deleting the Dimensions",id:"-deleting-the-dimensions",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83e\udde9 Adding some UI",id:"-adding-some-ui",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{style:{position:"relative"},children:[(0,s.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/FaceMeasurement"}),(0,s.jsx)("button",{class:"full-screen-btn",onClick:()=>window.open("https://thatopen.github.io/engine_components/examples/FaceMeasurement"),children:"Go Full Screen"})]}),"\n",(0,s.jsx)(n.admonition,{title:"Source",type:"info",children:(0,s.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,s.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/front/src/measurement/FaceMeasurement/example.ts",children:"here"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"-measuring-faces",children:"\ud83d\udcd0 Measuring faces"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Space control is one of the most important elements of BIM applications. In this tutorial, you'll learn how to expose an face measurement tool to your end users.\nWe will import:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"three"})," to create some 3D items."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"@thatopen/components-front"})," to use some frontend-oriented components."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import Stats from "stats.js";\nimport * as THREE from "three";\nimport * as OBC from "@thatopen/components";\nimport * as BUI from "@thatopen/ui";\nimport * as OBCF from "@thatopen/components-front";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBCF.PostproductionRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBCF.PostproductionRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(5, 5, 5, 0, 0, 0);\n\nworld.scene.setup();\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n'})}),"\n",(0,s.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"-loading-a-bim-model",children:"\ud83e\uddf3 Loading a BIM model"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"We'll start by adding a BIM model to our scene. That model is already converted to fragments, so it will load much faster than if we loaded the IFC file."}),"\n",(0,s.jsx)(n.admonition,{title:"Fragments?",type:"tip",children:(0,s.jsx)(n.p,{children:"If you are not familiar with fragments, check out the IfcLoader tutorial!"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const fragments = new OBC.FragmentsManager(components);\nconst file = await fetch(\n  "https://thatopen.github.io/engine_components/resources/small.frag",\n);\nconst data = await file.arrayBuffer();\nconst buffer = new Uint8Array(data);\nconst model = fragments.load(buffer);\nworld.scene.three.add(model);\n\nfor (const child of model.children) {\n  if (child instanceof THREE.Mesh) {\n    world.meshes.add(child);\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\ufe0f-getting-the-face-measurements",children:"\ud83d\udee0\ufe0f Getting the face measurements"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"First, let's get an instance of the face measurement component and initialize it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const dimensions = components.get(OBCF.FaceMeasurement);\ndimensions.world = world;\ndimensions.enabled = true;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\ufe0f-setting-up-mouse-events",children:"\ud83d\uddb1\ufe0f Setting up mouse events"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Now, we'll define how to create the edge dimensions. In this case, we'll keep it simple and use the double click event of the container HTML element."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"container.ondblclick = () => dimensions.create();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"-deleting-the-dimensions",children:"\ud83e\uddf9 Deleting the Dimensions"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["Now that we know how to make multiple dimensions, we'll learn how to delete them when necessary. Dimensions can be removed using the ",(0,s.jsx)(n.code,{children:"deleteAll()"})," method, which deletes all the created dimensions. You can also use the ",(0,s.jsx)(n.code,{children:"delete()"})," method to just delete one dimension (the one under the mouse cursor). Let's set up some basic key events that allow us to delete, save and recover the dimensions:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'let saved: OBCF.SerializedAreaMeasure[];\n\nwindow.addEventListener("keydown", (event) => {\n  if (event.code === "KeyO") {\n    dimensions.delete();\n  } else if (event.code === "KeyS") {\n    saved = dimensions.get();\n    dimensions.deleteAll();\n  } else if (event.code === "KeyL") {\n    if (saved) {\n      dimensions.set(saved);\n    }\n  }\n});\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["We'll use the ",(0,s.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,s.jsx)(n.h3,{id:"-adding-some-ui",children:"\ud83e\udde9 Adding some UI"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["We will use the ",(0,s.jsx)(n.code,{children:"@thatopen/ui"})," library to add some simple and cool UI elements to our app. First, we need to call the ",(0,s.jsx)(n.code,{children:"init"})," method of the ",(0,s.jsx)(n.code,{children:"BUI.Manager"})," class to initialize the library:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"BUI.Manager.init();\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now we will add some UI to have some control over the dimensions we create. For more information about the UI library, you can check the specific documentation for it!"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const panel = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n  <bim-panel active label="Face Measurement Tutorial" class="options-menu">\n      <bim-panel-section collapsed label="Controls">\n          <bim-label>Create dimension: Double click</bim-label>  \n          <bim-label>Delete dimension: Press O</bim-label> \n          <bim-label>Delete all dimensions: Press S</bim-label> \n          <bim-label>Set/Show saved dimensions: Press L</bim-label> \n      </bim-panel-section>\n      \n      <bim-panel-section collapsed label="Others">\n        <bim-checkbox checked label="Dimensions enabled" \n          @change="${({ target }: { target: BUI.Checkbox }) => {\n            dimensions.enabled = target.value;\n          }}"> \n        </bim-checkbox> \n        \n        <bim-button label="Delete all"\n          @click="${() => {\n            dimensions.deleteAll();\n          }}">\n        </bim-button>\n\n      </bim-panel-section>\n    </bim-panel>\n    `;\n});\n\ndocument.body.append(panel);\n'})}),"\n",(0,s.jsx)(n.p,{children:"And we will make some logic that adds a button to the screen when the user is visiting our app from their phone, allowing to show or hide the menu. Otherwise, the menu would make the app unusable."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const button = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"\n        @click="${() => {\n          if (panel.classList.contains("options-menu-visible")) {\n            panel.classList.remove("options-menu-visible");\n          } else {\n            panel.classList.add("options-menu-visible");\n          }\n        }}">\n      </bim-button>\n    `;\n});\n\ndocument.body.append(button);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"That's it! You have created an app that can create and delete face dimensions on any 3D object. Congratulations!"})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(6540);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);