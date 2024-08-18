"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[9392],{488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=t(4848),i=t(8453);const s={},a=void 0,r={id:"Tutorials/Components/Core/IfcRelationsIndexer",title:"IfcRelationsIndexer",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Core/IfcRelationsIndexer.mdx",sourceDirName:"Tutorials/Components/Core",slug:"/Tutorials/Components/Core/IfcRelationsIndexer",permalink:"/Tutorials/Components/Core/IfcRelationsIndexer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IfcPropertiesTiler",permalink:"/Tutorials/Components/Core/IfcPropertiesTiler"},next:{title:"MeasurementUtils",permalink:"/Tutorials/Components/Core/MeasurementUtils"}},l={},d=[{value:"\ud83d\udd01 Getting relations (easy)",id:"-getting-relations-easy",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"\ud83e\uddf3 Loading a BIM model",id:"-loading-a-bim-model",level:3},{value:"\ud83d\udccb Indexing the model",id:"-indexing-the-model",level:3},{value:"\ud83d\udcc4 Getting element psets",id:"-getting-element-psets",level:3},{value:"\u2198\ufe0f Exporting the indexation",id:"\ufe0f-exporting-the-indexation",level:3},{value:"\u2197\ufe0f Loading back the relations index",id:"\ufe0f-loading-back-the-relations-index",level:3},{value:"\ud83e\udd0f Getting entities related with another",id:"-getting-entities-related-with-another",level:3},{value:"\u23f1\ufe0f Measuring the performance (optional)",id:"\ufe0f-measuring-the-performance-optional",level:3},{value:"\ud83e\udde9 Adding some UI",id:"-adding-some-ui",level:3},{value:"\ud83c\udf89 Wrap up",id:"-wrap-up",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("iframe",{src:"https://thatopen.github.io/engine_components/examples/IfcRelationsIndexer"}),"\n",(0,o.jsx)(n.admonition,{title:"Source",type:"info",children:(0,o.jsxs)(n.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,o.jsx)(n.a,{href:"https://github.com/ThatOpen/engine_components/blob/main/packages/core/src/ifc/IfcRelationsIndexer/example.ts",children:"here"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"-getting-relations-easy",children:"\ud83d\udd01 Getting relations (easy)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"If you're aware of the IFC schema, you should know that all the possible information an entity have is not directly inside its attributes. For example, the property sets, classifications, materials, etc, of a wall (or any other element) are not directly in the wall attributes \ud83e\udd2f but in other entities which are related to the wall using relations."}),"\n",(0,o.jsx)(n.admonition,{title:"Why so much indirection?",type:"tip",children:(0,o.jsxs)(n.p,{children:["Indirection is perfect for an schema like the IFC which aims to store all the building data within a single text file in the easiest way possible. However, is not that easy to work just because you need to find the relations you want to get to the element data you're looking for \ud83d\ude2a. Luckily for you, the ",(0,o.jsx)(n.code,{children:"IfcRelationsIndexer"})," already gives you an easy way to get the entities which are related with your elements thanks to the inverse attributes! \ud83d\udd25\ud83d\udd25"]})}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we will import:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/ui"})," to add some simple and cool UI menus."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"@thatopen/components"})," to set up the barebone of our app."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Stats.js"})," (optional) to measure the performance of our app."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import Stats from "stats.js";\nimport * as BUI from "@thatopen/ui";\nimport * as OBC from "@thatopen/components";\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const container = document.getElementById("container")!;\n\nconst components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create<\n  OBC.SimpleScene,\n  OBC.SimpleCamera,\n  OBC.SimpleRenderer\n>();\n\nworld.scene = new OBC.SimpleScene(components);\nworld.renderer = new OBC.SimpleRenderer(components, container);\nworld.camera = new OBC.SimpleCamera(components);\n\ncomponents.init();\n\nworld.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);\n\nworld.scene.setup();\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n'})}),"\n",(0,o.jsx)(n.p,{children:"We'll make the background of the scene transparent so that it looks good in our docs page, but you don't have to do that in your app!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"world.scene.three.background = null;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"-loading-a-bim-model",children:"\ud83e\uddf3 Loading a BIM model"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"We'll start by adding an IFC model to our scene."}),"\n",(0,o.jsx)(n.admonition,{title:"Loading an IFC?",type:"tip",children:(0,o.jsx)(n.p,{children:"If you are not familiar with IFC loading, check out the IFC Loader tutorial first!"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const ifcLoader = components.get(OBC.IfcLoader);\nawait ifcLoader.setup();\nconst file = await fetch(\n  "https://thatopen.github.io/engine_components/resources/small.ifc",\n);\nconst buffer = await file.arrayBuffer();\nconst typedArray = new Uint8Array(buffer);\nconst model = await ifcLoader.load(typedArray);\nworld.scene.three.add(model);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-indexing-the-model",children:"\ud83d\udccb Indexing the model"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Once the model is loaded in memory, you just need to get an instance of the IfcRelationsIndexer and process the model... it's as easy as that! \ud83d\ude0e"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const indexer = components.get(OBC.IfcRelationsIndexer);\nawait indexer.process(model);\n"})}),"\n",(0,o.jsx)(n.p,{children:"The result of that is basically a map where the keys are the expressIDs and the values are other expressIDs related to the first one and grouped by the type of relation. You don't need to worry too much about the details of that, as the usage is pretty straighforward \ud83d\udd1d. The only thing that matters is you've now an easy way to access the entities related to your element \ud83d\ude42"}),"\n",(0,o.jsx)(n.h3,{id:"-getting-element-psets",children:"\ud83d\udcc4 Getting element psets"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["One of the most important relations between different entities is the ",(0,o.jsx)(n.code,{children:"IfcRelDefinesByProperties"}),". That relation links together an arbitrary entity with a set of ",(0,o.jsx)(n.code,{children:"IfcPropertySet"})," entities that applies properties. Getting them with the indexer once the model is indexed is pretty easy:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const psets = indexer.getEntityRelations(model, 6518, "IsDefinedBy");\nif (psets) {\n  for (const expressID of psets) {\n    // You can get the pset attributes like this\n    const pset = await model.getProperties(expressID);\n    console.log(pset);\n    // You can get the pset props like this or iterate over pset.HasProperties yourself\n    await OBC.IfcPropertiesUtils.getPsetProps(\n      model,\n      expressID,\n      async (propExpressID) => {\n        const prop = await model.getProperties(propExpressID);\n        console.log(prop);\n      },\n    );\n  }\n}\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"IsDefinedBy is the inverse attribute name in the IFC Schema that holds the relations with property sets \ud83d\ude09"})}),"\n",(0,o.jsx)(n.p,{children:"Awesome! really easy right?"}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-exporting-the-indexation",children:"\u2198\ufe0f Exporting the indexation"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"In bigger models, the process to calculate the relations index may take some time. There is no reason to calculate over and over the relations index every time you load a model. If the model hasn't change, their properties shouldn't neither! So, let's download the relations index to load it later."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const downloadJSON = (json: string, name: string) => {\n  const file = new File([json], name);\n  const a = document.createElement("a");\n  a.href = URL.createObjectURL(file);\n  a.download = file.name;\n  a.click();\n  URL.revokeObjectURL(a.href);\n};\n\nconst json = indexer.serializeModelRelations(model);\nconsole.log(json);\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["As ",(0,o.jsx)(n.code,{children:"@thatopen/components"})," can be used in either NodeJS and Browser environments, the logic to generate a JSON file may vary!"]})}),"\n",(0,o.jsx)(n.p,{children:"Now, in case you've loaded several models and want to get all the computed relations, there is also a handy method to do it."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const allRelationsJSON = indexer.serializeAllRelations();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-loading-back-the-relations-index",children:"\u2197\ufe0f Loading back the relations index"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"What do we gain with having a pre-processed relations index if we can't use it again, right? Well, let's use the downloaded relations index \ud83d\ude0e"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'// Lets first delete the existing model relations\ndelete indexer.relationMaps[model.uuid];\nconst relationsIndexFile = await fetch(\n  "https://thatopen.github.io/engine_components/resources/small-relations.json",\n);\nconst relationsIndex = indexer.getRelationsMapFromJSON(\n  await relationsIndexFile.text(),\n);\n\nindexer.setRelationMap(model, relationsIndex);\n'})}),"\n",(0,o.jsx)(n.p,{children:"Great! Now try to get again the property sets and you will see everything working nice and neat. In fact, lets try to get the building storey of one element in the IFC \ud83d\udc47"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const buildingStorey = indexer.getEntityRelations(\n  model,\n  6518,\n  "ContainedInStructure",\n);\n\nif (buildingStorey && buildingStorey[0]) {\n  const storey = await model.getProperties(buildingStorey[0]);\n  console.log(storey);\n}\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Despite there are some relations that corresponds to only one element (e.g., an element can only have one associated building storey) the ",(0,o.jsx)(n.code,{children:"getEntityRelations"})," will always return an array. That's the reason we take the first buildingStorey relation despite it will always be the only one."]})}),"\n",(0,o.jsx)(n.h3,{id:"-getting-entities-related-with-another",children:"\ud83e\udd0f Getting entities related with another"}),"\n",(0,o.jsx)(n.p,{children:"There are situations in which you need to know elements related to another based on a specific inverse attribute. For example, to know all the elements that has a specific IfcPropertySet, all elements inside a known IfcBuildingStorey, all elements sharing a common IfcClassificationReference, etc. Let's take the following as examples of this feature!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'// This is the equivalent to say: All entities in the model that are contained in structure 138\nconst storeyElements = indexer.getEntitiesWithRelation(\n  model,\n  "ContainedInStructure",\n  138,\n);\n\nconsole.log(\n  `IfcBuildingStorey 138 has the following IfcElement: ${[...storeyElements]}`,\n);\n\n// This is the equivalent to say: All entities in the model that contains entity 138\nconst elementStorey = indexer.getEntitiesWithRelation(\n  model,\n  "ContainsElements",\n  186,\n);\n\nconsole.log(\n  `IfcElement 186 is located inside IfcBuildingStorey ${[...elementStorey][0]}`,\n);\n\n// This is the equivalent to say: All entities in the model that are defined by entity 303\nconst psetDefinitions = indexer.getEntitiesWithRelation(\n  model,\n  "IsDefinedBy",\n  303,\n);\n\nconsole.log(`${[...psetDefinitions]} are defined by IfcPropertySet 303`);\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:'Needless to say, you must know the expressID of the entity you want to find its relations with (138 is the expressID of the IfcBuildingStorey named "Nivel 1" in the example model).'})}),"\n",(0,o.jsx)(n.h3,{id:"\ufe0f-measuring-the-performance-optional",children:"\u23f1\ufe0f Measuring the performance (optional)"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We'll use the ",(0,o.jsx)(n.a,{href:"https://github.com/mrdoob/stats.js",children:"Stats.js"})," to measure the performance of our app. We will add it to the top left corner of the viewport. This way, we'll make sure that the memory consumption and the FPS of our app are under control."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const stats = new Stats();\nstats.showPanel(2);\ndocument.body.append(stats.dom);\nstats.dom.style.left = "0px";\nstats.dom.style.zIndex = "unset";\nworld.renderer.onBeforeUpdate.add(() => stats.begin());\nworld.renderer.onAfterUpdate.add(() => stats.end());\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-adding-some-ui",children:"\ud83e\udde9 Adding some UI"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["We will use the ",(0,o.jsx)(n.code,{children:"@thatopen/ui"})," library to add some simple and cool UI elements to our app. First, we need to call the ",(0,o.jsx)(n.code,{children:"init"})," method of the ",(0,o.jsx)(n.code,{children:"BUI.Manager"})," class to initialize the library:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"BUI.Manager.init();\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now we will add some UI export the relations that we just generated. For more information about the UI library, you can check the specific documentation for it!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const panel = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n  <bim-panel active label="IFC Relations Indexer Tutorial" class="options-menu">\n  <bim-panel-section collapsed label="Controls">\n      <bim-panel-section style="padding-top: 10px;">\n      \n        <bim-button \n          label="Download relations" \n          @click="${async () => {\n            downloadJSON(allRelationsJSON, "relations-index-all.json");\n          }}">  \n        </bim-button>        \n\n      </bim-panel-section>\n    </bim-panel>\n    `;\n});\n\ndocument.body.append(panel);\n'})}),"\n",(0,o.jsx)(n.p,{children:"And we will make some logic that adds a button to the screen when the user is visiting our app from their phone, allowing to show or hide the menu. Otherwise, the menu would make the app unusable."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const button = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n      <bim-button class="phone-menu-toggler" icon="solar:settings-bold"\n        @click="${() => {\n          if (panel.classList.contains("options-menu-visible")) {\n            panel.classList.remove("options-menu-visible");\n          } else {\n            panel.classList.add("options-menu-visible");\n          }\n        }}">\n      </bim-button>\n    `;\n});\n\ndocument.body.append(button);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"-wrap-up",children:"\ud83c\udf89 Wrap up"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"That's it! Now you know how to get an easy way to get the relations of your model. Keep going with more tutorials! \ud83d\udcaa"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(6540);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);