"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[8544],{6102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=t(4848),l=t(8453);const i={},s=void 0,r={id:"Tutorials/Components/Front/ClipEdges",title:"ClipEdges",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Front/ClipEdges.mdx",sourceDirName:"Tutorials/Components/Front",slug:"/Tutorials/Components/Front/ClipEdges",permalink:"/Tutorials/Components/Front/ClipEdges",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CivilPlanNavigator",permalink:"/Tutorials/Components/Front/CivilPlanNavigator"},next:{title:"EdgeMeasurement",permalink:"/Tutorials/Components/Front/EdgeMeasurement"}},a={},c=[{value:"\u2702\ufe0f Fancy clippings",id:"\ufe0f-fancy-clippings",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83e\udde9 Adding Objects to Scene",id:"-adding-objects-to-scene",level:3},{value:"\u2694\ufe0f Getting the components",id:"\ufe0f-getting-the-components",level:3},{value:"\ud83d\udd8c\ufe0f Creating the styles",id:"\ufe0f-creating-the-styles",level:3},{value:"\ud83e\udd1d Performing Clipping Events",id:"-performing-clipping-events",level:3},{value:"\ud83e\uddf9 Deleting the Clipping Planes",id:"-deleting-the-clipping-planes",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83e\udde9 Adding some UI",id:"-adding-some-ui",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/ClipEdges"}),"\n",(0,o.jsx)(n.admonition,{title:"Source",type:"info",children:(0,o.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,o.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/front/src/core/ClipEdges/example.ts",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-fancy-clippings",children:"\u2702\ufe0f Fancy clippings"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Clipping planes are very common in BIM applications. They are used for floor plans, sections, looking inside a 3D model, etc. But simple clipping planes are not enough: they don't have fills or outlines, which are common in BIM software. The Edges Clipper can do them, and in this tutorial you'll learn how to do it."}),"\n",(0,o.jsx)(n.admonition,{title:"Fills and outlines?",type:"tip",children:(0,o.jsx)(n.p,{children:"Traditionally, architects created plans with a certain style. For instance, thick lines with solid fill for cutted walls and structure, thin lines for cutted doors and windows, etc. These same conventions are still common in BIM software."})}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we will import:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"three"})," to create some 3D items."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/ui"})," to add some simple and cool UI menus."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components-front"})," to use some frontend-oriented components."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import Stats from "stats.js";\nimport * as BUI from "@thatopen/ui";\nimport * as THREE from "three";\nimport * as OBC from "@thatopen/components";\nimport * as OBCF from "@thatopen/components-front";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\nconst components = new OBC.Components();\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBCF.PostproductionRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBCF.PostproductionRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\nworld.renderer.postproduction.enabled = true;\nworld.renderer.postproduction.customEffects.outlineEnabled = true;\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);\n\nworld.scene.setup();\n\nconst grids = components.get(OBC.Grids);\ngrids.config.color.setHex(0x666666);\nconst grid = grids.create(world);\nworld.renderer.postproduction.customEffects.excludedMeshes.push(grid.three);\n'})}),"\n",(0,o.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-adding-objects-to-scene",children:"\ud83e\udde9 Adding Objects to Scene"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["Now, let's start by adding two Cubes, we will create a ",(0,o.jsx)(n.a,{href:"https://threejs.org/docs/index.html?q=box#api/en/geometries/BoxGeometry",children:"Box Geometry"})," and use it for both Meshes."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);\n\nconst cubeMaterial = new THREE.MeshStandardMaterial({ color: "#6528D7" });\nconst cube = new THREE.Mesh(cubeGeometry, cubeMaterial);\ncube.position.set(-2, 1.5, 0);\nworld.scene.three.add(cube);\nworld.meshes.add(cube);\n\nconst cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial);\ncube2.position.set(2, 1.5, 0);\nworld.scene.three.add(cube2);\nworld.meshes.add(cube2);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-getting-the-components",children:"\u2694\ufe0f Getting the components"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now we will get all the components we will use for this small app. These are:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"The Raycasters, to create a clipping plane when clicking a cube."}),"\n",(0,o.jsx)(n.li,{children:"The Clipper to create the clipping planes."}),"\n",(0,o.jsx)(n.li,{children:"The Clip Edges to create the fills and outlines."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const casters = components.get(OBC.Raycasters);\ncasters.get(world);\n\nconst clipper = components.get(OBC.Clipper);\nclipper.enabled = true;\n\nconst edges = components.get(OBCF.ClipEdges);\nclipper.Type = OBCF.EdgesPlane;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-creating-the-styles",children:"\ud83d\udd8c\ufe0f Creating the styles"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now it's time to create the styles for the clipping planes. We will create two styles, one for each cube. One will be red, and the other will be blue."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const blueFill = new THREE.MeshBasicMaterial({ color: "lightblue", side: 2 });\nconst blueLine = new THREE.LineBasicMaterial({ color: "blue" });\nconst blueOutline = new THREE.MeshBasicMaterial({\n  color: "blue",\n  opacity: 0.5,\n  side: 2,\n  transparent: true,\n});\n\nedges.styles.create(\n  "Red lines",\n  new Set([cube]),\n  world,\n  blueLine,\n  blueFill,\n  blueOutline,\n);\n\nconst salmonFill = new THREE.MeshBasicMaterial({ color: "salmon", side: 2 });\nconst redLine = new THREE.LineBasicMaterial({ color: "red" });\nconst redOutline = new THREE.MeshBasicMaterial({\n  color: "red",\n  opacity: 0.5,\n  side: 2,\n  transparent: true,\n});\n\nedges.styles.create(\n  "Blue lines",\n  new Set([cube2]),\n  world,\n  redLine,\n  salmonFill,\n  redOutline,\n);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-performing-clipping-events",children:"\ud83e\udd1d Performing Clipping Events"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["Now we need a method for creating clipping planes. For this tutorial, we will use ",(0,o.jsx)(n.strong,{children:"Double Click"}),", to create a Clipper that will generate a plane on the 3D object's face."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"container.ondblclick = () => {\n  if (clipper.enabled) {\n    clipper.create(world);\n  }\n};\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-deleting-the-clipping-planes",children:"\ud83e\uddf9 Deleting the Clipping Planes"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["Now that we know how to make multiple clippers, we must also know how to delete them when necessary. Clipping Edges can be removed using ",(0,o.jsx)(n.code,{children:"clipper.delete()"})," or ",(0,o.jsx)(n.code,{children:"clipper.delete(plane)"}),", which deletes a single plane."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'window.onkeydown = (event) => {\n  if (event.code === "Delete" || event.code === "Backspace") {\n    if (clipper.enabled) {\n      clipper.delete(world);\n    }\n  }\n};\n'})}),"\n",(0,o.jsx)(n.admonition,{title:"Delete all Clipping Planes",type:"tip",children:(0,o.jsxs)(n.p,{children:["\u274e If you want to safely delete all the clipping edges that were created you can simply call\n",(0,o.jsx)(n.code,{children:"clipper.deleteAll()"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We'll use the ",(0,o.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-adding-some-ui",children:"\ud83e\udde9 Adding some UI"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We will use the ",(0,o.jsx)(n.code,{children:"@thatopen/ui"})," library to add some simple and cool UI elements to our app. First, we need to call the ",(0,o.jsx)(n.code,{children:"init"})," method of the ",(0,o.jsx)(n.code,{children:"BUI.Manager"})," class to initialize the library:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"BUI.Manager.init();\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now we will add some UI to play around with the clipping plane properties. For more information about the UI library, you can check the specific documentation for it!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const panel = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n  <bim-panel active label="Edges Clipper Tutorial" class="options-menu">\n      <bim-panel-section collapsed label="Controls">\n      \n        <bim-label>Double click: Create clipping plane</bim-label>\n        <bim-label>Delete key: Delete clipping plane</bim-label>\n       \n        \n      </bim-panel-section>\n      <bim-panel-section collapsed label="Others">\n          \n        <bim-checkbox label="Clipper enabled" checked \n          @change="${({ target }: { target: BUI.Checkbox }) => {\n            clipper.enabled = target.value;\n            edges.visible = target.value;\n          }}">\n        </bim-checkbox>\n        \n        <bim-checkbox label="Clipper visible" checked \n          @change="${({ target }: { target: BUI.Checkbox }) => {\n            clipper.visible = target.value;\n          }}">\n        </bim-checkbox>   \n      \n        <bim-color-input \n          label="Planes Color" color="#202932" \n          @input="${({ target }: { target: BUI.ColorInput }) => {\n            clipper.material.color.set(target.color);\n          }}">\n        </bim-color-input>\n        \n        <bim-number-input \n          slider step="0.01" label="Planes opacity" value="0.2" min="0.1" max="1"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            clipper.material.opacity = target.value;\n          }}">\n        </bim-number-input>\n        \n        <bim-number-input \n          slider step="0.1" label="Planes size" value="5" min="2" max="10"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            clipper.size = target.value;\n          }}">\n        </bim-number-input>\n        \n        <bim-button \n          label="Delete all" \n          @click="${() => {\n            clipper.deleteAll();\n          }}">  \n        </bim-button>        \n        \n        <bim-button \n          label="Rotate cubes" \n          @click="${() => {\n            cube.rotation.x = 2 * Math.PI * Math.random();\n            cube.rotation.y = 2 * Math.PI * Math.random();\n            cube.rotation.z = 2 * Math.PI * Math.random();\n            cube.updateMatrixWorld();\n\n            cube2.rotation.x = 2 * Math.PI * Math.random();\n            cube2.rotation.y = 2 * Math.PI * Math.random();\n            cube2.rotation.z = 2 * Math.PI * Math.random();\n            cube2.updateMatrixWorld();\n\n            edges.update(true);\n          }}">  \n        </bim-button>\n       \n        \n      </bim-panel-section>\n    </bim-panel>\n    `;\n});\n\ndocument.body.append(panel);\n'})}),"\n",(0,o.jsx)(n.p,{children:"And we will make some logic that adds a button to the screen when the user is visiting our app from their phone, allowing to show or hide the menu. Otherwise, the menu would make the app unusable."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const button = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"\n        @click="${() => {\n          if (panel.classList.contains("options-menu-visible")) {\n            panel.classList.remove("options-menu-visible");\n          } else {\n            panel.classList.add("options-menu-visible");\n          }\n        }}">\n      </bim-button>\n    `;\n});\n\ndocument.body.append(button);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"That's it! You have created an app that can create, manipulate, edit and delete clipping planes on any 3D object. Congratulations!"})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(6540);const l={},i=o.createContext(l);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);