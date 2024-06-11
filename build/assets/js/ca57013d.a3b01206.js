"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[5275],{8462:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=o(4848),s=o(8453);const a={},r=void 0,i={id:"Tutorials/Components/Front/ShadowDropper",title:"ShadowDropper",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Front/ShadowDropper.mdx",sourceDirName:"Tutorials/Components/Front",slug:"/Tutorials/Components/Front/ShadowDropper",permalink:"/Tutorials/Components/Front/ShadowDropper",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PostproductionRenderer",permalink:"/Tutorials/Components/Front/PostproductionRenderer"},next:{title:"VolumeMeasurement",permalink:"/Tutorials/Components/Front/VolumeMeasurement"}},d={},l=[{value:"\u26f1\ufe0f Dropping shadows",id:"\ufe0f-dropping-shadows",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83c\udfb2 Creating a Cube Mesh",id:"-creating-a-cube-mesh",level:3},{value:"\ud83c\udf1a Adding Beautiful Shadow",id:"-adding-beautiful-shadow",level:3},{value:"\ud83c\udfa8 Rendering the shadow",id:"-rendering-the-shadow",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83e\udde9 Adding some UI",id:"-adding-some-ui",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"Source",type:"info",children:(0,t.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,t.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/front/src/core/ShadowDropper/example.ts",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"\ufe0f-dropping-shadows",children:"\u26f1\ufe0f Dropping shadows"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"Shadows are usually not very performant. But there's a small trick that allows us to have a neat projected shadow under our models that make our apps look great with almost zero performance impact. In this tutorial, you'll learn how to use it."}),"\n",(0,t.jsx)(n.admonition,{title:"Dropped shadows?",type:"tip",children:(0,t.jsx)(n.p,{children:"Generally, there are 2 types of shadows: self shadows (the ones that an object project on itself) and projected shadows (the ones that are casted to other objects). Both are computationally expensive to compute, but in this tutorial we'll bake and display a very neat shadow that has no performance impact."})}),"\n",(0,t.jsx)(n.p,{children:"In this tutorial, we will import:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"web-ifc"})," to get some IFC items."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@thatopen/ui"})," to add some simple and cool UI menus."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@thatopen/components-front"})," to use some frontend-oriented components."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import * as THREE from "three";\nimport * as OBC from "@thatopen/components";\nimport Stats from "stats.js";\nimport * as BUI from "@thatopen/ui";\nimport * as OBCF from "@thatopen/components-front";\n'})}),"\n",(0,t.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBCF.RendererWith2D\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBCF.RendererWith2D(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\nworld.scene.setup();\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(5, 5, 5, 0, 0, 0);\n\ncontainer.appendChild(world.renderer.three2D.domElement);\n\nconst grids = components.get(OBC.Grids);\ngrids.config.color.setHex(0xdddddd);\ngrids.create(world);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"-creating-a-cube-mesh",children:"\ud83c\udfb2 Creating a Cube Mesh"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["Let's start by adding a simple ",(0,t.jsx)(n.a,{href:"https://threejs.org/docs/index.html?q=box#api/en/geometries/BoxGeometry",children:"Cube"})," to our scene."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);\nconst cubeMaterial = new THREE.MeshStandardMaterial({ color: "#6528D7" });\nconst cube = new THREE.Mesh(cubeGeometry, cubeMaterial);\ncube.position.set(0, 1.5, 0);\nworld.scene.three.add(cube);\nworld.meshes.add(cube);\n'})}),"\n",(0,t.jsx)(n.p,{children:"Next, we'll make the background of our scene white to make the shadow more visible. Of course, this is not compulsory, but shadows are a bit harder to see on darker backgrounds."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'world.scene.three.background = new THREE.Color("white");\n'})}),"\n",(0,t.jsx)(n.h3,{id:"-adding-beautiful-shadow",children:"\ud83c\udf1a Adding Beautiful Shadow"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"Now, to add a shadow, we can simply get an instance of the shadow dropper, which will make all the heavy lifting for us:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const shadows = components.get(OBCF.ShadowDropper);\nshadows.shadowExtraScaleFactor = 15;\nshadows.shadowOffset = 0.1;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"-rendering-the-shadow",children:"\ud83c\udfa8 Rendering the shadow"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"Now, we will use shadow dropper to create shadows for the cube we created before. Of course, this would also work for your BIM models exactly the same way."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const shadowID = "example";\nshadows.create([cube], shadowID, world);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["We'll use the ",(0,t.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,t.jsx)(n.h3,{id:"-adding-some-ui",children:"\ud83e\udde9 Adding some UI"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["We will use the ",(0,t.jsx)(n.code,{children:"@thatopen/ui"})," library to add some simple and cool UI elements to our app. First, we need to call the ",(0,t.jsx)(n.code,{children:"init"})," method of the ",(0,t.jsx)(n.code,{children:"BUI.Manager"})," class to initialize the library:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"BUI.Manager.init();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now we will add some UI to control and re-render the shadow we have created. For more information about the UI library, you can check the specific documentation for it!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const panel = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n  <bim-panel active label="Shadow dropper Tutorial" class="options-menu">\n    <bim-panel-section collapsed label="Controls">\n          \n        <bim-number-input \n          slider label="Extra scale factor" step="1" \n          value="${shadows.shadowExtraScaleFactor}" min="0" max="20"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            shadows.shadowExtraScaleFactor = target.value;\n            shadows.deleteShadow(shadowID);\n            shadows.create([cube], shadowID, world);\n          }}">\n        </bim-number-input> \n                  \n        <bim-number-input \n          slider label="Amount" step="1" \n          value="${shadows.amount}" min="0" max="20"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            shadows.amount = target.value;\n            shadows.deleteShadow(shadowID);\n            shadows.create([cube], shadowID, world);\n          }}">\n        </bim-number-input>    \n                       \n        <bim-number-input \n          slider label="Shadow offset" step="0.01" \n          value="${shadows.shadowOffset}" min="0" max="3"\n          @change="${({ target }: { target: BUI.NumberInput }) => {\n            shadows.shadowOffset = target.value;\n            shadows.deleteShadow(shadowID);\n            shadows.create([cube], shadowID, world);\n          }}">\n        </bim-number-input> \n\n      </bim-panel-section>\n    </bim-panel>\n    `;\n});\n\ndocument.body.append(panel);\n'})}),"\n",(0,t.jsx)(n.p,{children:"And we will make some logic that adds a button to the screen when the user is visiting our app from their phone, allowing to show or hide the menu. Otherwise, the menu would make the app unusable."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const button = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"\n        @click="${() => {\n          if (panel.classList.contains("options-menu-visible")) {\n            panel.classList.remove("options-menu-visible");\n          } else {\n            panel.classList.add("options-menu-visible");\n          }\n        }}">\n      </bim-button>\n    `;\n});\n\ndocument.body.append(button);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"That's it! You have created a scene where you can create a super efficient projected shadow on any object. Congratulations!"}),"\n",(0,t.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/ShadowDropper"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>i});var t=o(6540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);