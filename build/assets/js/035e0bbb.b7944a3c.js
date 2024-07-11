"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[4232],{9255:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(4848),r=t(8453);const a={},i=void 0,s={id:"Tutorials/Components/Core/OrthoPerspectiveCamera",title:"OrthoPerspectiveCamera",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Core/OrthoPerspectiveCamera.mdx",sourceDirName:"Tutorials/Components/Core",slug:"/Tutorials/Components/Core/OrthoPerspectiveCamera",permalink:"/Tutorials/Components/Core/OrthoPerspectiveCamera",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MiniMap",permalink:"/Tutorials/Components/Core/MiniMap"},next:{title:"Raycasters",permalink:"/Tutorials/Components/Core/Raycasters"}},c={},l=[{value:"\ud83d\udcf9 How to handle a fancy camera",id:"-how-to-handle-a-fancy-camera",level:3},{value:"\ud83c\udf0e Setting up the world AND the camera",id:"-setting-up-the-world-and-the-camera",level:3},{value:"\ud83e\uddca Creating a cube",id:"-creating-a-cube",level:3},{value:"\ud83c\udf9f\ufe0f Using camera events",id:"\ufe0f-using-camera-events",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83e\udde9 Building a camera UI",id:"-building-a-camera-ui",level:3},{value:"\ud83c\udf9b\ufe0f Navigation mode",id:"\ufe0f-navigation-mode",level:4},{value:"\ud83d\udcd0 Projections",id:"-projections",level:4},{value:"\u274c Toggling user input",id:"-toggling-user-input",level:4},{value:"\ud83d\udd0e Focusing objects",id:"-focusing-objects",level:4},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/OrthoPerspectiveCamera"}),"\n",(0,o.jsx)(n.admonition,{title:"Source",type:"info",children:(0,o.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,o.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/core/src/core/OrthoPerspectiveCamera/example.ts",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"-how-to-handle-a-fancy-camera",children:"\ud83d\udcf9 How to handle a fancy camera"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Sometimes, you need perspective for depth and realism. Other times, you need an orthographic camera to get precise measurements and proportions. Luckily for you, we have a camera that has both of those projections at the same time! It also has some cool functionality for navigation. In this tutorial, you'll learn to use it."}),"\n",(0,o.jsx)(n.admonition,{title:"Orthographic and Perspective cameras",type:"tip",children:(0,o.jsx)(n.p,{children:"The difference between Orthographic and Perspective cameras is that Orthographic cameras don't see things smaller when they are further away. This has some implications, like the camera being always \"outside\" of your scene. You can't see the interior of a room with an orthographic camera. The most common use for orthographic cameras are 2D floor plans and sections, but they can also be used to create cool-looking 3D scenes."})}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we will import:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Three.js"})," to get some 3D entities for our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/ui"})," to add some simple and cool UI menus."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import Stats from "stats.js";\nimport * as THREE from "three";\nimport * as BUI from "@thatopen/ui";\nimport * as OBC from "@thatopen/components";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-the-world-and-the-camera",children:"\ud83c\udf0e Setting up the world AND the camera"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial. But there's one difference: we will use the OrthoPerspectiveCamera for initializing the world."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\nlet components = new OBC.Components();\nlet worlds = components.get(OBC.Worlds);\n\nlet world = worlds.create<\n  OBC.SimpleScene,\n  OBC.OrthoPerspectiveCamera,\n  OBC.SimpleRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.OrthoPerspectiveCamera(components);\n\nworld.scene.setup();\n\nawait world.camera.controls.setLookAt(3, 3, 3, 0, 0, 0);\n\ncomponents.init();\n'})}),"\n",(0,o.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,o.jsx)(n.p,{children:"Easy, right? Believe it or not, this is all you need to use the OrthoPerspectiveCamera. Now, let's see it in action!"}),"\n",(0,o.jsx)(n.h3,{id:"-creating-a-cube",children:"\ud83e\uddca Creating a cube"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We will start by creating a simple cube and a grid that will serve as a reference point for our camera."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'let cubeGeometry = new THREE.BoxGeometry();\nlet cubeMaterial = new THREE.MeshStandardMaterial({ color: "#6528D7" });\nlet cube = new THREE.Mesh(cubeGeometry, cubeMaterial);\ncube.position.set(0, 0.5, 0);\n\nworld.scene.three.add(cube);\nworld.meshes.add(cube);\n\nlet grids = components.get(OBC.Grids);\nlet grid = grids.create(world);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-using-camera-events",children:"\ud83c\udf9f\ufe0f Using camera events"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["The OrthoPerspectiveCamera has a few events that you can use to manage the your scene. We will use the ",(0,o.jsx)(n.code,{children:"camera.projection.onChanged"})," event to update the grid, so that when using the Orthographic camera, the grid will fade out if the camera zooms away a lot."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'world.camera.projection.onChanged.add(() => {\n  const projection = world.camera.projection.current;\n  grid.fade = projection === "Perspective";\n});\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We'll use the ",(0,o.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-building-a-camera-ui",children:"\ud83e\udde9 Building a camera UI"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Now we will use @thatopen/ui to create a simple UI for the OrthoPerspectiveCamera. It will have 4 elements:"}),"\n",(0,o.jsx)(n.h4,{id:"\ufe0f-navigation-mode",children:"\ud83c\udf9b\ufe0f Navigation mode"}),"\n",(0,o.jsx)(n.p,{children:"This will control the navigation mode of the OrthoPerspectiveCamera. It will have 3 options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Orbit"}),": for 3D orbiting around the scene."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"FirstPerson"}),": for navigating the scene in with the mouse wheel in first person."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Plan"}),": for navigating 2d plans (blocking the orbit)."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"-projections",children:"\ud83d\udcd0 Projections"}),"\n",(0,o.jsx)(n.p,{children:"Like its name implies, the OrthoPerspectiveCamera has 2 projections, and it's really easy to toggle between them. The camera position will remain the same, which is really convenient when you switch between different projections!"}),"\n",(0,o.jsx)(n.h4,{id:"-toggling-user-input",children:"\u274c Toggling user input"}),"\n",(0,o.jsxs)(n.p,{children:["Sometimes you might want to remove control from the user. For example, imagine you are animating the camera and you don't want the user to move the camera around. You can use the ",(0,o.jsx)(n.code,{children:"setUserInput"})," method to toggle this."]}),"\n",(0,o.jsx)(n.h4,{id:"-focusing-objects",children:"\ud83d\udd0e Focusing objects"}),"\n",(0,o.jsxs)(n.p,{children:["The OrthoPerspectiveCamera has a ",(0,o.jsx)(n.code,{children:"fit"})," method that will fit the camera to a list of meshes. This is really useful when you want to bring attention to a specific part of the scene, or for allowing your user to navigate the scene by focusing objects."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'BUI.Manager.init();\n\nconst panel = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n    <bim-panel active label="Orthoperspective Camera Tutorial" class="options-menu">\n      <bim-panel-section collapsed label="Controls">\n         \n          <bim-dropdown required label="Navigation mode" \n            @change="${({ target }: { target: BUI.Dropdown }) => {\n              const selected = target.value[0] as OBC.NavModeID;\n\n              const { current } = world.camera.projection;\n              const isOrtho = current === "Orthographic";\n              const isFirstPerson = selected === "FirstPerson";\n              if (isOrtho && isFirstPerson) {\n                alert("First person is not compatible with ortho!");\n                target.value[0] = world.camera.mode.id;\n                return;\n              }\n              world.camera.set(selected);\n            }}">\n\n          <bim-option checked label="Orbit"></bim-option>\n          <bim-option label="FirstPerson"></bim-option>\n          <bim-option label="Plan"></bim-option>\n        </bim-dropdown>\n         \n      \n        <bim-dropdown required label="Camera projection" \n            @change="${({ target }: { target: BUI.Dropdown }) => {\n              const selected = target.value[0] as OBC.CameraProjection;\n              const isOrtho = selected === "Orthographic";\n              const isFirstPerson = world.camera.mode.id === "FirstPerson";\n              if (isOrtho && isFirstPerson) {\n                alert("First person is not compatible with ortho!");\n                target.value[0] = world.camera.projection.current;\n                return;\n              }\n              world.camera.projection.set(selected);\n            }}">\n          <bim-option checked label="Perspective"></bim-option>\n          <bim-option label="Orthographic"></bim-option>\n        </bim-dropdown>\n\n        <bim-checkbox \n          label="Allow user input" checked \n          @change="${({ target }: { target: BUI.Checkbox }) => {\n            world.camera.setUserInput(target.checked);\n          }}">  \n        </bim-checkbox>  \n        \n        <bim-button \n          label="Fit cube" \n          @click="${() => {\n            world.camera.fit([cube]);\n          }}">  \n        </bim-button>\n        \n        <bim-button \n          label="Reset scene" \n          @click="${async () => {\n            components.dispose();\n\n            components = new OBC.Components();\n            worlds = components.get(OBC.Worlds);\n\n            world = worlds.create<\n              OBC.SimpleScene,\n              OBC.OrthoPerspectiveCamera,\n              OBC.SimpleRenderer\n            >();\n\n            world.scene = new OBC.SimpleScene(components);\n            world.renderer = new OBC.SimpleRenderer(components, container);\n            world.camera = new OBC.OrthoPerspectiveCamera(components);\n\n            world.scene.setup();\n\n            await world.camera.controls.setLookAt(3, 3, 3, 0, 0, 0);\n\n            components.init();\n\n            world.scene.three.background = null;\n\n            cubeGeometry = new THREE.BoxGeometry();\n            cubeMaterial = new THREE.MeshStandardMaterial({ color: "#6528D7" });\n            cube = new THREE.Mesh(cubeGeometry, cubeMaterial);\n            cube.position.set(0, 0.5, 0);\n\n            world.scene.three.add(cube);\n            world.meshes.add(cube);\n\n            grids = components.get(OBC.Grids);\n            grid = grids.create(world);\n\n            world.camera.projection.onChanged.add(() => {\n              const projection = world.camera.projection.current;\n              grid.fade = projection === "Perspective";\n            });\n          }}">  \n        </bim-button>  \n\n      </bim-panel-section>\n    </bim-panel>\n    `;\n});\n\ndocument.body.append(panel);\n'})}),"\n",(0,o.jsx)(n.p,{children:"And we will make some logic that adds a button to the screen when the user is visiting our app from their phone, allowing to show or hide the menu. Otherwise, the menu would make the app unusable."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const button = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"\n        @click="${() => {\n          if (panel.classList.contains("options-menu-visible")) {\n            panel.classList.remove("options-menu-visible");\n          } else {\n            panel.classList.add("options-menu-visible");\n          }\n        }}">\n      </bim-button>\n    `;\n});\n\ndocument.body.append(button);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"That's it! We have created an OrthoPerspective camera that can be used to navigate a 3D scene with multiple projections and navigation modes, as well as a neat UI to control it. Great job!"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var o=t(6540);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);