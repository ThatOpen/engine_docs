"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[3291],{1455:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var t=l(4848),i=l(8453);const s={},r="Highlighter",d={id:"api/@thatopen/components-front/classes/Highlighter",title:"Highlighter",description:"This component allows highlighting and selecting fragments in a 3D scene. \ud83d\udcd5 Tutorial. \ud83d\udcd8 API.",source:"@site/docs/api/@thatopen/components-front/classes/Highlighter.md",sourceDirName:"api/@thatopen/components-front/classes",slug:"/api/@thatopen/components-front/classes/Highlighter",permalink:"/api/@thatopen/components-front/classes/Highlighter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GraphicVertexPicker",permalink:"/api/@thatopen/components-front/classes/GraphicVertexPicker"},next:{title:"IfcStreamer",permalink:"/api/@thatopen/components-front/classes/IfcStreamer"}},h={},o=[{value:"Extends",id:"extends",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"autoToggle",id:"autotoggle",level:3},{value:"backupColor",id:"backupcolor",level:3},{value:"colors",id:"colors",level:3},{value:"config",id:"config",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"enabled",id:"enabled",level:3},{value:"Overrides",id:"overrides",level:4},{value:"events",id:"events",level:3},{value:"isSetup",id:"issetup",level:3},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"multiple",id:"multiple",level:3},{value:"onAfterUpdate",id:"onafterupdate",level:3},{value:"onBeforeUpdate",id:"onbeforeupdate",level:3},{value:"onDisposed",id:"ondisposed",level:3},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"onSetup",id:"onsetup",level:3},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"selectable",id:"selectable",level:3},{value:"Index signature",id:"index-signature",level:4},{value:"selection",id:"selection",level:3},{value:"Index signature",id:"index-signature-1",level:4},{value:"zoomFactor",id:"zoomfactor",level:3},{value:"zoomToSelection",id:"zoomtoselection",level:3},{value:"uuid",id:"uuid",level:3},{value:"Methods",id:"methods",level:2},{value:"add()",id:"add",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Throws",id:"throws",level:4},{value:"clear()",id:"clear",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Throws",id:"throws-1",level:4},{value:"Throws",id:"throws-2",level:4},{value:"Throws",id:"throws-3",level:4},{value:"Throws",id:"throws-4",level:4},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"highlight()",id:"highlight",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Throws",id:"throws-5",level:4},{value:"Throws",id:"throws-6",level:4},{value:"Throws",id:"throws-7",level:4},{value:"Throws",id:"throws-8",level:4},{value:"Throws",id:"throws-9",level:4},{value:"highlightByID()",id:"highlightbyid",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Throws",id:"throws-10",level:4},{value:"Throws",id:"throws-11",level:4},{value:"Throws",id:"throws-12",level:4},{value:"Throws",id:"throws-13",level:4},{value:"setup()",id:"setup",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Implementation of",id:"implementation-of-5",level:4},{value:"Throws",id:"throws-14",level:4},{value:"Throws",id:"throws-15",level:4},{value:"Throws",id:"throws-16",level:4},{value:"Throws",id:"throws-17",level:4},{value:"Throws",id:"throws-18",level:4},{value:"updateFragments()",id:"updatefragments",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"highlighter",children:"Highlighter"}),"\n",(0,t.jsxs)(n.p,{children:["This component allows highlighting and selecting fragments in a 3D scene. \ud83d\udcd5 ",(0,t.jsx)(n.a,{href:"https://docs.thatopen.com/Tutorials/Components/Front/Highlighter",children:"Tutorial"}),". \ud83d\udcd8 ",(0,t.jsx)(n.a,{href:"https://docs.thatopen.com/api/@thatopen/components-front/classes/Highlighter",children:"API"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Component"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"implements",children:"Implements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Disposable"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Configurable"})," <",(0,t.jsx)(n.a,{href:"/api/@thatopen/components-front/interfaces/HighlighterConfig",children:(0,t.jsx)(n.code,{children:"HighlighterConfig"})}),">"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"autotoggle",children:"autoToggle"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"autoToggle"}),": ",(0,t.jsx)(n.code,{children:"Set"}),"<",(0,t.jsx)(n.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Styles with auto toggle will be unselected when selected twice."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"backupcolor",children:"backupColor"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"backupColor"}),": ",(0,t.jsx)(n.code,{children:"null"})," | ",(0,t.jsx)(n.code,{children:"Color"})," = ",(0,t.jsx)(n.code,{children:"null"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Stores the backup color before selection."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"colors",children:"colors"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"colors"}),": ",(0,t.jsx)(n.code,{children:"Map"}),"<",(0,t.jsx)(n.code,{children:"string"}),", ",(0,t.jsx)(n.code,{children:"Color"}),">"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Stores the colors used for highlighting selections."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"config",children:"config"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"config"}),": ",(0,t.jsx)(n.code,{children:"Required"})," <",(0,t.jsx)(n.a,{href:"/api/@thatopen/components-front/interfaces/HighlighterConfig",children:(0,t.jsx)(n.code,{children:"HighlighterConfig"})}),">"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Stores the configuration options for the Highlighter."}),"\n",(0,t.jsx)(n.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"OBC.Configurable.config"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"enabled",children:"enabled"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"enabled"}),": ",(0,t.jsx)(n.code,{children:"boolean"})," = ",(0,t.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"OBC.Component.enabled"}),"\n",(0,t.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"OBC.Component.enabled"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"events",children:"events"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"events"}),": ",(0,t.jsx)(n.a,{href:"/api/@thatopen/components-front/interfaces/HighlightEvents",children:(0,t.jsx)(n.code,{children:"HighlightEvents"})})," = ",(0,t.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Stores the events triggered by the Highlighter."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"issetup",children:"isSetup"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"isSetup"}),": ",(0,t.jsx)(n.code,{children:"boolean"})," = ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Indicates whether the Highlighter is setup."}),"\n",(0,t.jsx)(n.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"OBC.Configurable.isSetup"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"multiple",children:"multiple"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"multiple"}),": ",(0,t.jsx)(n.code,{children:'"none"'})," | ",(0,t.jsx)(n.code,{children:'"ctrlKey"'})," | ",(0,t.jsx)(n.code,{children:'"shiftKey"'})," = ",(0,t.jsx)(n.code,{children:'"ctrlKey"'})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Determines the multiple selection behavior."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"onafterupdate",children:"onAfterUpdate"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"onAfterUpdate"}),": ",(0,t.jsx)(n.code,{children:"Event"})," <",(0,t.jsx)(n.a,{href:"/api/@thatopen/components-front/classes/Highlighter",children:(0,t.jsx)(n.code,{children:"Highlighter"})}),">"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"OBC.Updateable.onAfterUpdate"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"onbeforeupdate",children:"onBeforeUpdate"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"onBeforeUpdate"}),": ",(0,t.jsx)(n.code,{children:"Event"})," <",(0,t.jsx)(n.a,{href:"/api/@thatopen/components-front/classes/Highlighter",children:(0,t.jsx)(n.code,{children:"Highlighter"})}),">"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"OBC.Updateable.onBeforeUpdate"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"ondisposed",children:"onDisposed"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"onDisposed"}),": ",(0,t.jsx)(n.code,{children:"Event"}),"<",(0,t.jsx)(n.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"OBC.Disposable.onDisposed"}),"\n",(0,t.jsx)(n.h4,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"OBC.Disposable.onDisposed"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"onsetup",children:"onSetup"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"onSetup"}),": ",(0,t.jsx)(n.code,{children:"Event"})," <",(0,t.jsx)(n.a,{href:"/api/@thatopen/components-front/classes/Highlighter",children:(0,t.jsx)(n.code,{children:"Highlighter"})}),">"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Event triggered when the Highlighter is setup."}),"\n",(0,t.jsx)(n.h4,{id:"implementation-of-3",children:"Implementation of"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"OBC.Configurable.onSetup"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"selectable",children:"selectable"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"selectable"}),": ",(0,t.jsx)(n.code,{children:"object"})," = ",(0,t.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If defined, only the specified elements will be selected by the specified style."}),"\n",(0,t.jsx)(n.h4,{id:"index-signature",children:"Index signature"}),"\n",(0,t.jsxs)(n.p,{children:["[",(0,t.jsx)(n.code,{children:"name"}),": ",(0,t.jsx)(n.code,{children:"string"}),"]: ",(0,t.jsx)(n.code,{children:"FragmentIdMap"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"selection",children:"selection"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"selection"}),": ",(0,t.jsx)(n.code,{children:"object"})," = ",(0,t.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Stores the current selection."}),"\n",(0,t.jsx)(n.h4,{id:"index-signature-1",children:"Index signature"}),"\n",(0,t.jsxs)(n.p,{children:["[",(0,t.jsx)(n.code,{children:"selectionID"}),": ",(0,t.jsx)(n.code,{children:"string"}),"]: ",(0,t.jsx)(n.code,{children:"FRAGS.FragmentIdMap"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"zoomfactor",children:"zoomFactor"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"zoomFactor"}),": ",(0,t.jsx)(n.code,{children:"number"})," = ",(0,t.jsx)(n.code,{children:"1.5"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Zoom factor applied when zooming to selection."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"zoomtoselection",children:"zoomToSelection"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"zoomToSelection"}),": ",(0,t.jsx)(n.code,{children:"boolean"})," = ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Indicates whether to zoom to the selection when highlighting."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"uuid",children:"uuid"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"static"})," ",(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"uuid"}),": ",(0,t.jsx)(n.code,{children:'"cb8a76f2-654a-4b50-80c6-66fd83cafd77"'})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A unique identifier for the component.\r\nThis UUID is used to register the component within the Components system."}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"add",children:"add()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"add"}),"(",(0,t.jsx)(n.code,{children:"name"}),", ",(0,t.jsx)(n.code,{children:"color"}),"): ",(0,t.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Adds a new selection with the given name and color.\r\nThrows an error if a selection with the same name already exists."}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The name of the new selection."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"color"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"Color"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The color to be used for highlighting the selection."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"void"})}),"\n",(0,t.jsx)(n.h4,{id:"throws",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if a selection with the same name already exists."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"clear",children:"clear()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"clear"}),"(",(0,t.jsx)(n.code,{children:"name"}),"?): ",(0,t.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Clears the selection for the given name or all selections if no name is provided."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,t.jsx)(n.code,{children:"name"}),"?"]}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The name of the selection to clear. If not provided, clears all selections."})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"void"})}),"\n",(0,t.jsx)(n.h4,{id:"throws-1",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the FragmentsManager is not found."}),"\n",(0,t.jsx)(n.h4,{id:"throws-2",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the fragment or its geometry is not found."}),"\n",(0,t.jsx)(n.h4,{id:"throws-3",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the item ID is not found."}),"\n",(0,t.jsx)(n.h4,{id:"throws-4",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the fragment does not belong to a FragmentsGroup."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"dispose"}),"(): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Disposable.dispose"}),"\n",(0,t.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(n.h4,{id:"implementation-of-4",children:"Implementation of"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"OBC.Disposable.dispose"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"highlight",children:"highlight()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"highlight"}),"(",(0,t.jsx)(n.code,{children:"name"}),", ",(0,t.jsx)(n.code,{children:"removePrevious"}),", ",(0,t.jsx)(n.code,{children:"zoomToSelection"}),", ",(0,t.jsx)(n.code,{children:"exclude"}),"): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"null"})," | ",(0,t.jsx)(n.code,{children:"object"}),">"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Highlights a fragment based on a raycast from the mouse position."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Default value"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The name of the selection."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"removePrevious"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"true"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Whether to remove previous highlights."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"zoomToSelection"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Whether to zoom to the highlighted selection."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"exclude"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"FragmentIdMap"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"{}"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Fragments to exclude from the highlight."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"null"})," | ",(0,t.jsx)(n.code,{children:"object"}),">"]}),"\n",(0,t.jsx)(n.p,{children:"The highlighted fragment and its ID, or null if no fragment was highlighted."}),"\n",(0,t.jsx)(n.h4,{id:"throws-5",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the world or a required component is not found."}),"\n",(0,t.jsx)(n.h4,{id:"throws-6",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the selection does not exist."}),"\n",(0,t.jsx)(n.h4,{id:"throws-7",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the fragment or its geometry is not found."}),"\n",(0,t.jsx)(n.h4,{id:"throws-8",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the item ID is not found."}),"\n",(0,t.jsx)(n.h4,{id:"throws-9",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the fragment does not belong to a FragmentsGroup."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"highlightbyid",children:"highlightByID()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"highlightByID"}),"(",(0,t.jsx)(n.code,{children:"name"}),", ",(0,t.jsx)(n.code,{children:"fragmentIdMap"}),", ",(0,t.jsx)(n.code,{children:"removePrevious"}),", ",(0,t.jsx)(n.code,{children:"zoomToSelection"}),", ",(0,t.jsx)(n.code,{children:"exclude"}),", ",(0,t.jsx)(n.code,{children:"fillMesh"}),", ",(0,t.jsx)(n.code,{children:"isPicking"}),"): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Highlights a fragment based on a given fragment ID map."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Default value"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The name of the selection."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"fragmentIdMap"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"FragmentIdMap"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The fragment ID map to highlight."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"removePrevious"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"true"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Whether to remove previous highlights."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"zoomToSelection"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Whether to zoom to the highlighted selection."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"exclude"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"FragmentIdMap"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"{}"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Fragments to exclude from the highlight."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"fillMesh"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,t.jsx)(n.code,{children:"undefined"})," | ",(0,t.jsx)(n.code,{children:"Mesh"}),"<",(0,t.jsx)(n.code,{children:"BufferGeometry"}),"<",(0,t.jsx)(n.code,{children:"NormalBufferAttributes"}),">, ",(0,t.jsx)(n.code,{children:"Material"})," | ",(0,t.jsx)(n.code,{children:"Material"}),"[], ",(0,t.jsx)(n.code,{children:"Object3DEventMap"}),">"]}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The fill mesh to also highlight, if any."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"isPicking"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Whether this function is called when picking with the mouse."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(n.p,{children:"Promise that resolves when the highlighting is complete."}),"\n",(0,t.jsx)(n.h4,{id:"throws-10",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the selection does not exist."}),"\n",(0,t.jsx)(n.h4,{id:"throws-11",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the fragment or its geometry is not found."}),"\n",(0,t.jsx)(n.h4,{id:"throws-12",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the item ID is not found."}),"\n",(0,t.jsx)(n.h4,{id:"throws-13",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the fragment does not belong to a FragmentsGroup."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"setup",children:"setup()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"setup"}),"(",(0,t.jsx)(n.code,{children:"config"}),"?): ",(0,t.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Sets up the Highlighter with the provided configuration."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,t.jsx)(n.code,{children:"config"}),"?"]}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,t.jsx)(n.code,{children:"Partial"})," <",(0,t.jsx)(n.a,{href:"/api/@thatopen/components-front/interfaces/HighlighterConfig",children:(0,t.jsx)(n.code,{children:"HighlighterConfig"})}),">"]}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Optional configuration for the Highlighter."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"If not provided, the Highlighter will use the default configuration."}),(0,t.jsx)(n.td,{style:{textAlign:"left"}}),(0,t.jsx)(n.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"void"})}),"\n",(0,t.jsx)(n.h4,{id:"implementation-of-5",children:"Implementation of"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"OBC.Configurable.setup"})}),"\n",(0,t.jsx)(n.h4,{id:"throws-14",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the world or a required component is not found."}),"\n",(0,t.jsx)(n.h4,{id:"throws-15",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the selection already exists."}),"\n",(0,t.jsx)(n.h4,{id:"throws-16",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the fragment or its geometry is not found."}),"\n",(0,t.jsx)(n.h4,{id:"throws-17",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the item ID is not found."}),"\n",(0,t.jsx)(n.h4,{id:"throws-18",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if the fragment does not belong to a FragmentsGroup."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"updatefragments",children:"updateFragments()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"updateFragments"}),"(",(0,t.jsx)(n.code,{children:"fragments"}),"): ",(0,t.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Applies all the existing styles to the given fragments. Useful when combining the highlighter with streaming."}),"\n",(0,t.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"fragments"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,t.jsx)(n.code,{children:"Iterable"}),"<",(0,t.jsx)(n.code,{children:"Fragment"}),">"]}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The list of fragment to update."})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"void"})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>d});var t=l(6540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);