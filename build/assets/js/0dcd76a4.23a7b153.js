"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[1230],{4553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(4848),i=n(8453);const a={},r=void 0,s={id:"Tutorials/UserInterface/OBC/EntityAttributes",title:"EntityAttributes",description:'window.open("https://thatopen.github.io/engine_ui-components/examples/EntityAttributes")} >Go Full Screen',source:"@site/docs/Tutorials/UserInterface/OBC/EntityAttributes.mdx",sourceDirName:"Tutorials/UserInterface/OBC",slug:"/Tutorials/UserInterface/OBC/EntityAttributes",permalink:"/Tutorials/UserInterface/OBC/EntityAttributes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ElementProperties",permalink:"/Tutorials/UserInterface/OBC/ElementProperties"},next:{title:"ModelsList",permalink:"/Tutorials/UserInterface/OBC/ModelsList"}},l={},c=[{value:"Displaying data the advanced way \ud83d\udd25\ud83d\udd25",id:"displaying-data-the-advanced-way-",level:2},{value:"\ud83d\udd96 Importing our Libraries",id:"-importing-our-libraries",level:3},{value:"\ud83d\udccb Initializing the UI",id:"-initializing-the-ui",level:3},{value:"\ud83c\udf0e Setting up a simple scene",id:"-setting-up-a-simple-scene",level:3},{value:"Loading a model and computing it&#39;s relations",id:"loading-a-model-and-computing-its-relations",level:3},{value:"Preconfiguring the table",id:"preconfiguring-the-table",level:3},{value:"Creating a panel to append the table",id:"creating-a-panel-to-append-the-table",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{style:{position:"relative"},children:[(0,o.jsx)("iframe",{src:"https://thatopen.github.io/engine_ui-components/examples/EntityAttributes"}),(0,o.jsx)("button",{class:"full-screen-btn",onClick:()=>window.open("https://thatopen.github.io/engine_ui-components/examples/EntityAttributes"),children:"Go Full Screen"})]}),"\n",(0,o.jsx)(t.admonition,{title:"Source",type:"info",children:(0,o.jsxs)(t.p,{children:["Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,o.jsx)(t.a,{href:"https://github.com/ThatOpen/engine_ui-components/blob/main/packages/obc/src/components/tables/EntityAttributes/example.ts",children:"here"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"displaying-data-the-advanced-way-",children:"Displaying data the advanced way \ud83d\udd25\ud83d\udd25"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"What is a good BIM app if you don't give users a nice way to visualize its model properties, right? Well, hold tight as here you will learn all you need to know in order to use the power of UI Components to accomplish that!"}),"\n",(0,o.jsx)(t.h3,{id:"-importing-our-libraries",children:"\ud83d\udd96 Importing our Libraries"}),"\n",(0,o.jsx)(t.p,{children:"In this tutorial, we will import:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"web-ifc to get some IFC items."}),"\n",(0,o.jsx)(t.li,{children:"@thatopen/ui to add some simple and cool UI menus."}),"\n",(0,o.jsx)(t.li,{children:"@thatopen/components to set up the barebone of our app."}),"\n",(0,o.jsx)(t.li,{children:"@thatopen/components-front to use some frontend-oriented components."}),"\n",(0,o.jsx)(t.li,{children:"@thatopen/ui-obc to add some cool pre-made UI menus for components."}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'/* eslint-disable no-alert import * as WEBIFC from "web-ifc";\nimport * as BUI from "@thatopen/ui";\nimport * as OBC from "@thatopen/components";\nimport * as OBCF from "@thatopen/components-front";\n// You have to import from "@thatopen/ui-obc"\nimport * as BUIC from "../..";\n'})}),"\n",(0,o.jsx)(t.h3,{id:"-initializing-the-ui",children:"\ud83d\udccb Initializing the UI"}),"\n",(0,o.jsx)(t.p,{children:"As always, let's first initialize the UI library. Remember you only have to do it once in your entire app."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"BUI.Manager.init();\n"})}),"\n",(0,o.jsx)(t.h3,{id:"-setting-up-a-simple-scene",children:"\ud83c\udf0e Setting up a simple scene"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"We will start by creating a simple scene with a camera and a renderer. If you don't know how to set up a scene, you can check the Worlds tutorial."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const components = new OBC.Components();\n\nconst worlds = components.get(OBC.Worlds);\n\nconst world = worlds.create();\nconst sceneComponent = new OBC.SimpleScene(components);\nsceneComponent.setup();\nworld.scene = sceneComponent;\n\nconst viewport = document.createElement("bim-viewport");\nconst rendererComponent = new OBC.SimpleRenderer(components, viewport);\nworld.renderer = rendererComponent;\n\nconst cameraComponent = new OBC.SimpleCamera(components);\nworld.camera = cameraComponent;\ncameraComponent.controls.setLookAt(10, 5.5, 5, -4, -1, -6.5);\n\nviewport.addEventListener("resize", () => {\n  rendererComponent.resize();\n  cameraComponent.updateAspect();\n});\n\ncomponents.init();\n\nconst grids = components.get(OBC.Grids);\ngrids.create(world);\n'})}),"\n",(0,o.jsx)(t.h3,{id:"loading-a-model-and-computing-its-relations",children:"Loading a model and computing it's relations"}),"\n",(0,o.jsx)(t.p,{children:"First things first... let's load a model \ud83d\udc47"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const ifcLoader = components.get(OBC.IfcLoader);\nawait ifcLoader.setup();\nconst file = await fetch(\n  "https://thatopen.github.io/engine_ui-components/resources/small.ifc",\n);\nconst buffer = await file.arrayBuffer();\nconst typedArray = new Uint8Array(buffer);\nconst model = await ifcLoader.load(typedArray);\nworld.scene.three.add(model);\n'})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"You don't need to add the model into the scene to display its properties. However, as we are going to display the attributes for each selected element, then having the model into the scene is obvious, right?"})}),"\n",(0,o.jsxs)(t.p,{children:["Now, in order to get the most out of the entities table, you need to calculate the relations index of your model. To do it, you will need to use the ",(0,o.jsx)(t.a,{href:"/Tutorials/Components/Core/IfcRelationsIndexer",children:"IfcRelationsIndexer"})," component from ",(0,o.jsx)(t.code,{children:"@thatopen/components"})," to speed up the process."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const indexer = components.get(OBC.IfcRelationsIndexer);\nawait indexer.process(model);\n"})}),"\n",(0,o.jsx)(t.h3,{id:"preconfiguring-the-table",children:"Preconfiguring the table"}),"\n",(0,o.jsx)(t.p,{children:"The attributes table has some optional configurations. One of them is the ability to modify the styles of the cell value based on the attribute value (e.g., colorizing entities with a specific string in its name, or numeric values based on a codition ). For it, let's first create a simple base style that all our cell overwrites will share:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const baseStyle: Record<string, string> = {\n  padding: "0.25rem",\n  borderRadius: "0.25rem",\n};\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Then, let's create an object where the keys are the attribute values you want to overwrite its styles, and the values are functions that returns an ",(0,o.jsx)(t.code,{children:"html"})," template result."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["If you want to learn more about the ",(0,o.jsx)(t.code,{children:"html"})," template tag and how to use it, just take a look at the tutorial on how to make a custom component."]})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const tableDefinition: BUI.TableDataTransform = {\n  Entity: (entity) => {\n    let style = {};\n    if (entity === OBC.IfcCategoryMap[WEBIFC.IFCPROPERTYSET]) {\n      style = {\n        ...baseStyle,\n        backgroundColor: "purple",\n        color: "white",\n      };\n    }\n    if (String(entity).includes("IFCWALL")) {\n      style = {\n        ...baseStyle,\n        backgroundColor: "green",\n        color: "white",\n      };\n    }\n    return BUI.html`<bim-label style=${BUI.styleMap(style)}>${entity}</bim-label>`;\n  },\n  PredefinedType: (type) => {\n    const colors = ["#1c8d83", "#3c1c8d", "#386c19", "#837c24"];\n    const randomIndex = Math.floor(Math.random() * colors.length);\n    const backgroundColor = colors[randomIndex];\n    const style = { ...baseStyle, backgroundColor, color: "white" };\n    return BUI.html`<bim-label style=${BUI.styleMap(style)}>${type}</bim-label>`;\n  },\n  NominalValue: (value) => {\n    let style = {};\n    if (typeof value === "boolean" && value === false) {\n      style = { ...baseStyle, backgroundColor: "#b13535", color: "white" };\n    }\n    if (typeof value === "boolean" && value === true) {\n      style = { ...baseStyle, backgroundColor: "#18882c", color: "white" };\n    }\n    return BUI.html`<bim-label style=${BUI.styleMap(style)}>${value}</bim-label>`;\n  },\n};\n'})}),"\n",(0,o.jsx)(t.p,{children:"Keep in mind the step above is optional! Not needed for the table to work. Now its time to create the table using the predefine functional component that ships with the library \ud83d\ude42"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const [attributesTable, updateAttributesTable] = BUIC.tables.entityAttributes({\n  components,\n  fragmentIdMap: {},\n  tableDefinition,\n  attributesToInclude: () => {\n    const attributes: any[] = [\n      "Name",\n      "ContainedInStructure",\n      "HasProperties",\n      "HasPropertySets",\n      (name: string) => name.includes("Value"),\n      (name: string) => name.startsWith("Material"),\n      (name: string) => name.startsWith("Relating"),\n      (name: string) => {\n        const ignore = ["IsGroupedBy", "IsDecomposedBy"];\n        return name.startsWith("Is") && !ignore.includes(name);\n      },\n    ];\n    return attributes;\n  },\n});\n\nattributesTable.expanded = true;\nattributesTable.indentationInText = true;\nattributesTable.preserveStructureOnFilter = true;\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Cool! attributes table created. Then after, let's tell the attributes table to update each time the user makes a selection over the model. For it, we will use the ",(0,o.jsx)(t.a,{href:"/Tutorials/Components/Front/Highlighter",children:"Highlighter"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const highlighter = components.get(OBCF.Highlighter);\nhighlighter.setup({ world });\n\nhighlighter.events.select.onHighlight.add((fragmentIdMap) => {\n  updateAttributesTable({ fragmentIdMap });\n});\n\nhighlighter.events.select.onClear.add(() =>\n  updateAttributesTable({ fragmentIdMap: {} }),\n);\n"})}),"\n",(0,o.jsx)(t.h3,{id:"creating-a-panel-to-append-the-table",children:"Creating a panel to append the table"}),"\n",(0,o.jsx)(t.p,{children:"Allright! Let's now create a BIM Panel to control some aspects of the attributes table and to trigger some functionalities like copying the values to TSV or exporing the data to JSON \ud83d\ude09"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const entityAttributesPanel = BUI.Component.create(() => {\n  const onSearchInput = (e: Event) => {\n    const input = e.target as BUI.TextInput;\n    attributesTable.queryString = input.value;\n  };\n\n  const onPreserveStructureChange = (e: Event) => {\n    const checkbox = e.target as BUI.Checkbox;\n    attributesTable.preserveStructureOnFilter = checkbox.checked;\n  };\n\n  const onExportJSON = () => {\n    attributesTable.downloadData("entities-attributes");\n  };\n\n  const onCopyTSV = async () => {\n    await navigator.clipboard.writeText(attributesTable.tsv);\n    alert(\n      "Table data copied as TSV in clipboard! Try to paste it in a spreadsheet app.",\n    );\n  };\n\n  const onAttributesChange = (e: Event) => {\n    const dropdown = e.target as BUI.Dropdown;\n    updateAttributesTable({\n      attributesToInclude: () => {\n        const attributes: any[] = [\n          ...dropdown.value,\n          (name: string) => name.includes("Value"),\n          (name: string) => name.startsWith("Material"),\n          (name: string) => name.startsWith("Relating"),\n          (name: string) => {\n            const ignore = ["IsGroupedBy", "IsDecomposedBy"];\n            return name.startsWith("Is") && !ignore.includes(name);\n          },\n        ];\n        return attributes;\n      },\n    });\n  };\n\n  return BUI.html`\n    <bim-panel>\n      <bim-panel-section label="Entity Attributes" fixed>\n        <div style="display: flex; gap: 0.5rem; justify-content: space-between;">\n          <div style="display: flex; gap: 0.5rem;">\n            <bim-text-input @input=${onSearchInput} type="search" placeholder="Search" debounce="250"></bim-text-input>\n            <bim-checkbox @change=${onPreserveStructureChange} label="Preserve Structure" inverted checked></bim-checkbox>\n          </div>\n          <div style="display: flex; gap: 0.5rem;">\n            <bim-dropdown @change=${onAttributesChange} multiple>\n              <bim-option label="Name" checked></bim-option> \n              <bim-option label="ContainedInStructure" checked></bim-option>\n              <bim-option label="ForLayerSet"></bim-option>\n              <bim-option label="LayerThickness"></bim-option>\n              <bim-option label="HasProperties" checked></bim-option>\n              <bim-option label="HasAssociations"></bim-option>\n              <bim-option label="HasAssignments"></bim-option>\n              <bim-option label="HasPropertySets" checked></bim-option>\n              <bim-option label="PredefinedType"></bim-option>\n              <bim-option label="Quantities"></bim-option>\n              <bim-option label="ReferencedSource"></bim-option>\n              <bim-option label="Identification"></bim-option>\n              <bim-option label="Prefix"></bim-option>\n              <bim-option label="LongName"></bim-option>\n            </bim-dropdown>\n            <bim-button @click=${onCopyTSV} icon="solar:copy-bold" tooltip-title="Copy TSV" tooltip-text="Copy the table contents as tab separated text values, so you can copy them into a spreadsheet."></bim-button>\n            <bim-button @click=${onExportJSON} icon="ph:export-fill" tooltip-title="Export JSON" tooltip-text="Download the table contents as a JSON file."></bim-button>\n          </div>\n        </div>\n        ${attributesTable}\n      </bim-panel-section>\n    </bim-panel>\n  `;\n});\n'})}),"\n",(0,o.jsx)(t.p,{children:"Finally, let's create a BIM Grid element and provide both the panel and the viewport to display everything."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const app = document.createElement("bim-grid");\napp.layouts = {\n  main: {\n    template: `\n      "viewport" 1fr\n      "entityAttributesPanel" 1fr\n    `,\n    elements: { entityAttributesPanel, viewport },\n  },\n};\n\napp.layout = "main";\ndocument.body.append(app);\n'})}),"\n",(0,o.jsx)(t.p,{children:"Congratulations! You have now created a fully working advanced attributes table for your app in less than 10 minutes of work. Keep going with more tutorials! \ud83d\udcaa"})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(6540);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);