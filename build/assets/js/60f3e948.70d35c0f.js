"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[2206],{3377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=t(4848),a=t(8453);const i={},s=void 0,r={id:"Tutorials/Components/Core/MiniMap",title:"MiniMap",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Core/MiniMap.mdx",sourceDirName:"Tutorials/Components/Core",slug:"/Tutorials/Components/Core/MiniMap",permalink:"/Tutorials/Components/Core/MiniMap",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MeasurementUtils",permalink:"/Tutorials/Components/Core/MeasurementUtils"},next:{title:"OrthoPerspectiveCamera",permalink:"/Tutorials/Components/Core/OrthoPerspectiveCamera"}},l={},c=[{value:"\ud83d\uddfa\ufe0f Orientating your user in the scene",id:"\ufe0f-orientating-your-user-in-the-scene",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83c\udfe0 Loading a model",id:"-loading-a-model",level:3},{value:"\ud83d\uddfa Setting up the map",id:"-setting-up-the-map",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83e\udde9 Adding some UI",id:"-adding-some-ui",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/MiniMap"}),"\n",(0,o.jsx)(n.admonition,{title:"Source",type:"info",children:(0,o.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,o.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/core/src/core/MiniMap/example.ts",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-orientating-your-user-in-the-scene",children:"\ud83d\uddfa\ufe0f Orientating your user in the scene"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial you'll learn how to use the Minimap, which is a small 2D representation of the 3D world."}),"\n",(0,o.jsx)(n.admonition,{title:"Do you mean a floorplan?",type:"tip",children:(0,o.jsx)(n.p,{children:"Not quite. The minimap is a simple 2D representation of the 3D world. It is useful to help your user understand where they are, and to have a simple top view of their surrounding."})}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we will import:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/ui"})," to add some simple and cool UI menus."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import Stats from "stats.js";\nimport * as BUI from "@thatopen/ui";\nimport * as OBC from "@thatopen/components";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBC.SimpleRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\nworld.scene.setup();\n\ncomponents.init();\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n\nworld.camera.controls.setLookAt(1, 2, -2, -2, 0, -5);\n'})}),"\n",(0,o.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-loading-a-model",children:"\ud83c\udfe0 Loading a model"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now that we have a scene, let's load a model. We will use the Fragment Manager for it."}),"\n",(0,o.jsx)(n.admonition,{title:"Showing Fragments in the Scene",type:"info",children:(0,o.jsxs)(n.p,{children:["\ud83c\udfd4\ufe0f There is a dedicated tutorial on how to use Fragment Manager to load ",(0,o.jsx)(n.strong,{children:"IFC files"}),", check it out if you haven't already!"]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const fragments = new OBC.FragmentsManager(components);\n\nconst file = await fetch(\n  "https://thatopen.github.io/engine_components/resources/small.frag",\n);\nconst dataBlob = await file.arrayBuffer();\nconst buffer = new Uint8Array(dataBlob);\nconst model = fragments.load(buffer);\nworld.scene.three.add(model);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-the-map",children:"\ud83d\uddfa Setting up the map"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now, that we have our setup ready. Let's start with the exciting stuff.\nWe will use MiniMap component, which does all the work for us.\ud83d\udd2e"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const maps = new OBC.MiniMaps(components);\nconst map = maps.create(world);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We have already created a simple DIV element with id ",(0,o.jsx)(n.code,{children:"minimap"})," in our HTML file. We need to fetch it to add the canvas where our minimap is rendered to it. We'll also add a rounded border to make it look better."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const mapContainer = document.getElementById("minimap") as HTMLDivElement;\nconst canvas = map.renderer.domElement;\ncanvas.style.borderRadius = "12px";\nmapContainer.append(canvas);\nmap.resize();\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We'll use the ",(0,o.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-adding-some-ui",children:"\ud83e\udde9 Adding some UI"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We will use the ",(0,o.jsx)(n.code,{children:"@thatopen/ui"})," library to add some simple and cool UI elements to our app. First, we need to call the ",(0,o.jsx)(n.code,{children:"init"})," method of the ",(0,o.jsx)(n.code,{children:"BUI.Manager"})," class to initialize the library:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"BUI.Manager.init();\n"})}),"\n",(0,o.jsx)(n.p,{children:"we'll also need a reference to the  size of the minimap to control it:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const mapSize = map.getSize();\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now we will create a new panel with some inputs to control the different parameters of the MiniMap, like zoom, size and front offset. For more information about the UI library, you can check the specific documentation for it!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const panel = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n    <bim-panel label="Minimap Tutorial" class="options-menu">\n      <bim-panel-section collapsed label="Controls">\n      \n        <bim-checkbox checked="true" label="Enabled" \n          @change="${({ target }: { target: BUI.Checkbox }) => {\n            map.enabled = target.value;\n          }}">  \n        </bim-checkbox>\n        \n        <bim-checkbox checked="true" label="Visible" \n          @change="${({ target }: { target: BUI.Checkbox }) => {\n            map.config.visible = target.value;\n          }}">  \n        </bim-checkbox>\n        \n        <bim-checkbox checked label="Lock rotation" \n          @change="${({ target }: { target: BUI.Checkbox }) => {\n            map.config.lockRotation = target.value;\n          }}">  \n        </bim-checkbox>\n        \n        <bim-number-input \n          slider label="Zoom" value="${map.zoom}" min="0.01" max="0.5" step="0.01" \n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            map.config.zoom = target.value;\n          }}">\n        </bim-number-input>\n        \n        <bim-number-input \n          slider label="Front offset" value="${map.frontOffset}" min="0" max="5" step="1" \n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            map.config.frontOffset = target.value;\n          }}">\n        </bim-number-input>\n                \n        <div style="display: flex; gap: 12px">\n        \n          <bim-number-input slider value="${mapSize.x}" pref="Size X" min="100" max="500" step="10"              \n            @change="${({ target }: { target: BUI.NumberInput }) => {\n              map.config.sizeX = target.value;\n            }}">\n          </bim-number-input>        \n        \n          <bim-number-input slider value="${mapSize.y}" pref="Size Y" min="100" max="500" step="10"            \n            @change="${({ target }: { target: BUI.NumberInput }) => {\n              map.config.sizeY = target.value;\n            }}">\n          </bim-number-input>\n        </div>\n  \n        \n      </bim-panel-section>\n    </bim-panel>\n    `;\n});\n\ndocument.body.append(panel);\n'})}),"\n",(0,o.jsx)(n.p,{children:"And we will make some logic that adds a button to the screen when the user is visiting our app from their phone, allowing to show or hide the menu. Otherwise, the menu would make the app unusable."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const button = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"\n        @click="${() => {\n          if (panel.classList.contains("options-menu-visible")) {\n            panel.classList.remove("options-menu-visible");\n          } else {\n            panel.classList.add("options-menu-visible");\n          }\n        }}">\n      </bim-button>\n    `;\n});\n\ndocument.body.append(button);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"That's it! You have created a simple app that loads a BIM model and displays a MiniMap of it. You can play around with the different parameters of the MiniMap and see how it changes in real time."})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(6540);const a={},i=o.createContext(a);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);