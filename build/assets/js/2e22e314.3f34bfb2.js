"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],i={},l=void 0,p={unversionedId:"Tutorials/Components/Core/Utils",id:"Tutorials/Components/Core/Utils",title:"Utils",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Core/Utils.mdx",sourceDirName:"Tutorials/Components/Core",slug:"/Tutorials/Components/Core/Utils",permalink:"/Tutorials/Components/Core/Utils",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Raycasters",permalink:"/Tutorials/Components/Core/Raycasters"},next:{title:"Worlds",permalink:"/Tutorials/Components/Core/Worlds"}},c={},m=[{value:"\ud83d\udccf Getting measurement information",id:"-getting-measurement-information",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83e\uddf3 Loading a BIM model",id:"-loading-a-bim-model",level:3},{value:"\ud83e\uddca Representing the data",id:"-representing-the-data",level:3},{value:"\ud83d\udcd0 Setting up the measurements",id:"-setting-up-the-measurements",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}],u={toc:m},d="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Source",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/main/packages/core/src/measurement/Utils/example.ts"},"here"),".")),(0,r.kt)("h3",{id:"-getting-measurement-information"},"\ud83d\udccf Getting measurement information"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Sometimes we need to know more about the geometry we are working with. For example, imagine you are building a takeoff and estimations app and need to give your user a tool to select the faces of different objects to take them into acccount in a specific takeoff computation. This is where the measurement utils of our libraries come in handy. In this tutorial, you'll learn to use them."),(0,r.kt)("admonition",{title:"Aren't faces easy?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Not really. The geometry within an IFC file is implicit, and we convert it to triangles to be able to show it in 3D. That means that a simple wall with some windows and doors might have hundreds of triangles. How do you know which one of them, for instance, belong to the outer face? This is what we do for you.")),(0,r.kt)("p",null,"In this tutorial, we will import:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"three.js")," to get create som 3D geometry."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@thatopen/ui")," to add some simple and cool UI menus."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@thatopen/components")," to set up the barebone of our app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Stats.js")," (optional) to measure the performance of our app.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import * as THREE from "three";\nimport Stats from "stats.js";\nimport * as OBC from "@thatopen/components";\n')),(0,r.kt)("h3",{id:"-setting-up-a-simple-scene"},"\ud83c\udf0e Setting up a simple scene"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBC.SimpleRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);\n\nworld.scene.setup();\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n')),(0,r.kt)("p",null,"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"world.scene.three.background = null;\n")),(0,r.kt)("h3",{id:"-loading-a-bim-model"},"\ud83e\uddf3 Loading a BIM model"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We'll start by adding a BIM model to our scene. That model is already converted to fragments, so it will load much faster than if we loaded the IFC file."),(0,r.kt)("admonition",{title:"Fragments?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are not familiar with fragments, check out the IfcLoader tutorial!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const fragments = new OBC.FragmentsManager(components);\nconst file = await fetch("https://thatopen.github.io/engine_components/resources/small.frag");\nconst data = await file.arrayBuffer();\nconst buffer = new Uint8Array(data);\nconst model = fragments.load(buffer);\nworld.scene.three.add(model);\n')),(0,r.kt)("h3",{id:"-representing-the-data"},"\ud83e\uddca Representing the data"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We're going to get the face information and represent it in 3D on top of the BIM model we just loaded when the user hover with the mouse over it. So first we need to create the 3D object that will show up on top of a hovered face. That's quite easy using three.js:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const edges = new THREE.EdgesGeometry();\nconst material = new THREE.LineBasicMaterial({\n  color: 0xff0000,\n  depthTest: false,\n});\nconst line = new THREE.LineSegments(edges, material);\nworld.scene.three.add(line);\n")),(0,r.kt)("h3",{id:"-setting-up-the-measurements"},"\ud83d\udcd0 Setting up the measurements"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now, to be able to make the user hover over the geometry, detect a face and get its ifnormation, we'll need to import 2 components: the measurements utils and the casters. We'll create a new caster in the current world. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const measurements = components.get(OBC.MeasurementUtils);\nconst casters = components.get(OBC.Raycasters);\nconst caster = casters.get(world);\n")),(0,r.kt)("p",null,"And now we are going to add an event to the current renderer. The idea is quite simple: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use the raycaster to get the face under the mouse of the user (if any). "),(0,r.kt)("li",{parentName:"ol"},"Use the measurement utils to get the face data."),(0,r.kt)("li",{parentName:"ol"},"Update the 3D object with the face data.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'if (world.renderer) {\n  const canvas = world.renderer.three.domElement;\n  canvas.addEventListener("mousemove", () => {\n    const result = caster.castRay([model]);\n\n    if (!result) return;\n    if (!(result.object instanceof THREE.Mesh)) return;\n    if (result.faceIndex === undefined) return;\n\n    const face = measurements.getFace(\n      result.object,\n      result.faceIndex,\n      result.instanceId,\n    );\n\n    if (face) {\n      const points: THREE.Vector3[] = [];\n      for (const edge of face.edges) {\n        points.push(...edge.points);\n      }\n      edges.setFromPoints(points);\n    }\n  });\n}\n')),(0,r.kt)("h3",{id:"\ufe0f-measuring-the-performance-optional"},"\u23f1\ufe0f Measuring the performance (optional)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We'll use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mrdoob/stats.js"},"Stats.js")," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n')),(0,r.kt)("h3",{id:"-wrap-up"},"\ud83c\udf89 Wrap up"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"That's it! You have created an app that allows user to pick geometry faces and represent them in 3D. You can now use this data to build Takeoff and estimations apps!"),(0,r.kt)("iframe",{src:"https://thatopen.github.io/engine_components/examples/Utils"}))}h.isMDXComponent=!0}}]);