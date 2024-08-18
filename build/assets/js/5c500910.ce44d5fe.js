"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[658],{6213:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var t=n(4848),i=n(8453);const r={},l="Disposer",d={id:"api/@thatopen/components/classes/Disposer",title:"Disposer",description:"A tool to safely remove meshes, geometries, materials and other items from memory to prevent memory leaks.",source:"@site/docs/api/@thatopen/components/classes/Disposer.md",sourceDirName:"api/@thatopen/components/classes",slug:"/api/@thatopen/components/classes/Disposer",permalink:"/api/@thatopen/components/classes/Disposer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DataSet\\<T\\>",permalink:"/api/@thatopen/components/classes/DataSet"},next:{title:"Event\\<T\\>",permalink:"/api/@thatopen/components/classes/Event"}},o={},h=[{value:"Extends",id:"extends",level:2},{value:"Properties",id:"properties",level:2},{value:"enabled",id:"enabled",level:3},{value:"Overrides",id:"overrides",level:4},{value:"uuid",id:"uuid",level:3},{value:"Methods",id:"methods",level:2},{value:"destroy()",id:"destroy",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"disposeGeometry()",id:"disposegeometry",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"get()",id:"get",level:3},{value:"Returns",id:"returns-2",level:4},{value:"isConfigurable()",id:"isconfigurable",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"isDisposeable()",id:"isdisposeable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"isHideable()",id:"ishideable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"isResizeable()",id:"isresizeable",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"isUpdateable()",id:"isupdateable",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-4",level:4}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"disposer",children:"Disposer"}),"\n",(0,t.jsxs)(s.p,{children:["A tool to safely remove meshes, geometries, materials and other items from memory to ",(0,t.jsx)(s.a,{href:"https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects",children:"prevent memory leaks"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"extends",children:"Extends"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component",children:(0,t.jsx)(s.code,{children:"Component"})})}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h3,{id:"enabled",children:"enabled"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"enabled"}),": ",(0,t.jsx)(s.code,{children:"boolean"})," = ",(0,t.jsx)(s.code,{children:"true"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component#enabled",children:"Component.enabled"})}),"\n",(0,t.jsx)(s.h4,{id:"overrides",children:"Overrides"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component",children:(0,t.jsx)(s.code,{children:"Component"})})," . ",(0,t.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component#enabled",children:(0,t.jsx)(s.code,{children:"enabled"})})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"uuid",children:"uuid"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"static"})," ",(0,t.jsx)(s.code,{children:"readonly"})," ",(0,t.jsx)(s.strong,{children:"uuid"}),": ",(0,t.jsx)(s.code,{children:'"76e9cd8e-ad8f-4753-9ef6-cbc60f7247fe"'})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"A unique identifier for the component.\r\nThis UUID is used to register the component within the Components system."}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(s.h3,{id:"destroy",children:"destroy()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"destroy"}),"(",(0,t.jsx)(s.code,{children:"object"}),", ",(0,t.jsx)(s.code,{children:"materials"}),", ",(0,t.jsx)(s.code,{children:"recursive"}),"): ",(0,t.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Removes a mesh, its geometry and its materials from memory. If you are\r\nusing any of these in other parts of the application, make sure that you\r\nremove them from the mesh before disposing it."}),"\n",(0,t.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Default value"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"object"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"Object3D"}),"<",(0,t.jsx)(s.code,{children:"Object3DEventMap"}),">"]}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"undefined"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:["the ",(0,t.jsx)(s.a,{href:"https://threejs.org/docs/#api/en/core/Object3D",children:"object"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"to remove."}),(0,t.jsx)(s.td,{style:{textAlign:"left"}}),(0,t.jsx)(s.td,{style:{textAlign:"left"}}),(0,t.jsx)(s.td,{style:{textAlign:"left"}})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"materials"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"boolean"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"true"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"whether to dispose the materials of the mesh."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"recursive"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"boolean"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"true"})}),(0,t.jsx)(s.td,{style:{textAlign:"left"},children:"whether to recursively dispose the children of the mesh."})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"void"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"disposegeometry",children:"disposeGeometry()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"disposeGeometry"}),"(",(0,t.jsx)(s.code,{children:"geometry"}),"): ",(0,t.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Disposes a geometry from memory."}),"\n",(0,t.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)(s.code,{children:"geometry"})}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)(s.code,{children:"BufferGeometry"}),"<",(0,t.jsx)(s.code,{children:"NormalBufferAttributes"}),">"]}),(0,t.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,t.jsx)("p",{children:"the"}),(0,t.jsx)("p",{children:(0,t.jsx)(s.a,{href:"https://threejs.org/docs/#api/en/core/BufferGeometry",children:"geometry"})})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{style:{textAlign:"left"},children:(0,t.jsx)("p",{children:" to remove."})}),(0,t.jsx)(s.td,{style:{textAlign:"left"}}),(0,t.jsx)(s.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"void"})}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"get",children:"get()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"get"}),"(): ",(0,t.jsx)(s.code,{children:"Set"}),"<",(0,t.jsx)(s.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Return the UUIDs of all disposed components."}),"\n",(0,t.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Set"}),"<",(0,t.jsx)(s.code,{children:"string"}),">"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"isconfigurable",children:"isConfigurable()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"isConfigurable"}),"(): ",(0,t.jsx)(s.code,{children:"this is Configurable<any>"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Whether is component is ",(0,t.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Configurable",children:"Configurable"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"this is Configurable<any>"})}),"\n",(0,t.jsx)(s.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component",children:(0,t.jsx)(s.code,{children:"Component"})})," . ",(0,t.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component#isconfigurable",children:(0,t.jsx)(s.code,{children:"isConfigurable"})})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"isdisposeable",children:"isDisposeable()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"isDisposeable"}),"(): ",(0,t.jsx)(s.code,{children:"this is Disposable"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Whether is component is ",(0,t.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:"Disposable"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"this is Disposable"})}),"\n",(0,t.jsx)(s.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component",children:(0,t.jsx)(s.code,{children:"Component"})})," . ",(0,t.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component#isdisposeable",children:(0,t.jsx)(s.code,{children:"isDisposeable"})})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"ishideable",children:"isHideable()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"isHideable"}),"(): ",(0,t.jsx)(s.code,{children:"this is Hideable"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Whether is component is ",(0,t.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Hideable",children:"Hideable"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"this is Hideable"})}),"\n",(0,t.jsx)(s.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component",children:(0,t.jsx)(s.code,{children:"Component"})})," . ",(0,t.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component#ishideable",children:(0,t.jsx)(s.code,{children:"isHideable"})})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"isresizeable",children:"isResizeable()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"isResizeable"}),"(): ",(0,t.jsx)(s.code,{children:"this is Resizeable"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Whether is component is ",(0,t.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Resizeable",children:"Resizeable"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"this is Resizeable"})}),"\n",(0,t.jsx)(s.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component",children:(0,t.jsx)(s.code,{children:"Component"})})," . ",(0,t.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component#isresizeable",children:(0,t.jsx)(s.code,{children:"isResizeable"})})]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"isupdateable",children:"isUpdateable()"}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"isUpdateable"}),"(): ",(0,t.jsx)(s.code,{children:"this is Updateable"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Whether is component is ",(0,t.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Updateable",children:"Updateable"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"this is Updateable"})}),"\n",(0,t.jsx)(s.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component",children:(0,t.jsx)(s.code,{children:"Component"})})," . ",(0,t.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component#isupdateable",children:(0,t.jsx)(s.code,{children:"isUpdateable"})})]})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>d});var t=n(6540);const i={},r=t.createContext(i);function l(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);