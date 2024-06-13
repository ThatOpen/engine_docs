"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[4334],{701:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(4848),t=s(8453);const r={},l="MiniMap",o={id:"api/@thatopen/components/classes/MiniMap",title:"MiniMap",description:"A class representing a 2D minimap of a 3D world.",source:"@site/docs/api/@thatopen/components/classes/MiniMap.md",sourceDirName:"api/@thatopen/components/classes",slug:"/api/@thatopen/components/classes/MiniMap",permalink:"/api/@thatopen/components/classes/MiniMap",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MeshCullerRenderer",permalink:"/api/@thatopen/components/classes/MeshCullerRenderer"},next:{title:"MiniMaps",permalink:"/api/@thatopen/components/classes/MiniMaps"}},d={},c=[{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"backgroundColor",id:"backgroundcolor",level:3},{value:"enabled",id:"enabled",level:3},{value:"frontOffset",id:"frontoffset",level:3},{value:"onAfterUpdate",id:"onafterupdate",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"onBeforeUpdate",id:"onbeforeupdate",level:3},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"onDisposed",id:"ondisposed",level:3},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"onResize",id:"onresize",level:3},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"overrideMaterial",id:"overridematerial",level:3},{value:"renderer",id:"renderer",level:3},{value:"world",id:"world",level:3},{value:"Accessors",id:"accessors",level:2},{value:"lockRotation",id:"lockrotation",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"zoom",id:"zoom",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"get()",id:"get",level:3},{value:"Returns",id:"returns-3",level:4},{value:"getSize()",id:"getsize",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Implementation of",id:"implementation-of-5",level:4},{value:"resize()",id:"resize",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Implementation of",id:"implementation-of-6",level:4},{value:"update()",id:"update",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Implementation of",id:"implementation-of-7",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"minimap",children:"MiniMap"}),"\n",(0,i.jsx)(n.p,{children:"A class representing a 2D minimap of a 3D world."}),"\n",(0,i.jsx)(n.h2,{id:"implements",children:"Implements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Resizeable",children:(0,i.jsx)(n.code,{children:"Resizeable"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable",children:(0,i.jsx)(n.code,{children:"Updateable"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,i.jsx)(n.code,{children:"Disposable"})})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"backgroundcolor",children:"backgroundColor"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"backgroundColor"}),": ",(0,i.jsx)(n.code,{children:"Color"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The background color of the minimap.\r\nIt is used to set the background color of the minimap's renderer."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"enabled",children:"enabled"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"enabled"}),": ",(0,i.jsx)(n.code,{children:"boolean"})," = ",(0,i.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A flag indicating whether the minimap is enabled.\r\nIf disabled, the minimap will not update or render."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"frontoffset",children:"frontOffset"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"frontOffset"}),": ",(0,i.jsx)(n.code,{children:"number"})," = ",(0,i.jsx)(n.code,{children:"0"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The front offset of the minimap.\r\nIt determines how much the minimap's view is offset from the camera's view.\r\nBy pushing the map to the front, what the user sees on screen corresponds with what they see on the map"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"onafterupdate",children:"onAfterUpdate"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"onAfterUpdate"}),": ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,i.jsx)(n.code,{children:"Event"})}),"<",(0,i.jsx)(n.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable#onafterupdate",children:"Updateable.onAfterUpdate"})}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable",children:(0,i.jsx)(n.code,{children:"Updateable"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable#onafterupdate",children:(0,i.jsx)(n.code,{children:"onAfterUpdate"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"onbeforeupdate",children:"onBeforeUpdate"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"onBeforeUpdate"}),": ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,i.jsx)(n.code,{children:"Event"})}),"<",(0,i.jsx)(n.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable#onbeforeupdate",children:"Updateable.onBeforeUpdate"})}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable",children:(0,i.jsx)(n.code,{children:"Updateable"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable#onbeforeupdate",children:(0,i.jsx)(n.code,{children:"onBeforeUpdate"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ondisposed",children:"onDisposed"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"onDisposed"}),": ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,i.jsx)(n.code,{children:"Event"})}),"<",(0,i.jsx)(n.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#ondisposed",children:"Disposable.onDisposed"})}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,i.jsx)(n.code,{children:"Disposable"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#ondisposed",children:(0,i.jsx)(n.code,{children:"onDisposed"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"onresize",children:"onResize"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"onResize"}),": ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,i.jsx)(n.code,{children:"Event"})}),"<",(0,i.jsx)(n.code,{children:"Vector2"}),">"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Resizeable#onresize",children:"Resizeable.onResize"})}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of-3",children:"Implementation of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Resizeable",children:(0,i.jsx)(n.code,{children:"Resizeable"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Resizeable#onresize",children:(0,i.jsx)(n.code,{children:"onResize"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"overridematerial",children:"overrideMaterial"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"overrideMaterial"}),": ",(0,i.jsx)(n.code,{children:"MeshDepthMaterial"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The override material for the minimap.\r\nIt is used to render the depth information of the world onto the minimap."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"renderer",children:"renderer"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"renderer"}),": ",(0,i.jsx)(n.code,{children:"WebGLRenderer"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The WebGL renderer for the minimap.\r\nIt is used to render the minimap onto the screen."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"world",children:"world"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"world"}),": ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/World",children:(0,i.jsx)(n.code,{children:"World"})})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The world in which the minimap is displayed.\r\nIt provides access to the 3D scene, camera, and other relevant world elements."}),"\n",(0,i.jsx)(n.h2,{id:"accessors",children:"Accessors"}),"\n",(0,i.jsx)(n.h3,{id:"lockrotation",children:"lockRotation"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"get"})," ",(0,i.jsx)(n.strong,{children:"lockRotation"}),"(): ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Gets or sets whether the minimap rotation is locked.\r\nWhen rotation is locked, the minimap will always face the same direction as the camera."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"set"})," ",(0,i.jsx)(n.strong,{children:"lockRotation"}),"(",(0,i.jsx)(n.code,{children:"active"}),"): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Sets whether the minimap rotation is locked.\r\nWhen rotation is locked, the minimap will always face the same direction as the camera."}),"\n",(0,i.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"active"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["If ",(0,i.jsx)(n.code,{children:"true"}),", rotation is locked. If ",(0,i.jsx)(n.code,{children:"false"}),", rotation is not locked."]})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"boolean"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"zoom",children:"zoom"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"get"})," ",(0,i.jsx)(n.strong,{children:"zoom"}),"(): ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Gets the current zoom level of the minimap.\r\nThe zoom level determines how much of the world is visible on the minimap."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"set"})," ",(0,i.jsx)(n.strong,{children:"zoom"}),"(",(0,i.jsx)(n.code,{children:"value"}),"): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Sets the zoom level of the minimap.\r\nThe zoom level determines how much of the world is visible on the minimap."}),"\n",(0,i.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"value"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The new zoom level of the minimap."})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"number"})}),"\n",(0,i.jsx)(n.p,{children:"The current zoom level of the minimap."}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"dispose"}),"(): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#dispose",children:"Disposable.dispose"})}),"\n",(0,i.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of-4",children:"Implementation of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,i.jsx)(n.code,{children:"Disposable"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#dispose",children:(0,i.jsx)(n.code,{children:"dispose"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"get",children:"get()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"get"}),"(): ",(0,i.jsx)(n.code,{children:"OrthographicCamera"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Returns the camera used by the MiniMap"}),"\n",(0,i.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"OrthographicCamera"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"getsize",children:"getSize()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"getSize"}),"(): ",(0,i.jsx)(n.code,{children:"Vector2"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Resizeable#getsize",children:"Resizeable.getSize"})}),"\n",(0,i.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Vector2"})}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of-5",children:"Implementation of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Resizeable",children:(0,i.jsx)(n.code,{children:"Resizeable"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Resizeable#getsize",children:(0,i.jsx)(n.code,{children:"getSize"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"resize",children:"resize()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"resize"}),"(",(0,i.jsx)(n.code,{children:"size"}),"): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Resizeable#resize",children:"Resizeable.resize"})}),"\n",(0,i.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"size"})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"Vector2"})})]})})]}),"\n",(0,i.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of-6",children:"Implementation of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Resizeable",children:(0,i.jsx)(n.code,{children:"Resizeable"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Resizeable#resize",children:(0,i.jsx)(n.code,{children:"resize"})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"update",children:"update()"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"update"}),"(): ",(0,i.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable#update",children:"Updateable.update"})}),"\n",(0,i.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"void"})}),"\n",(0,i.jsx)(n.h4,{id:"implementation-of-7",children:"Implementation of"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable",children:(0,i.jsx)(n.code,{children:"Updateable"})})," . ",(0,i.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable#update",children:(0,i.jsx)(n.code,{children:"update"})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var i=s(6540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);