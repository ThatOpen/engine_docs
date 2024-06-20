"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[4891],{2867:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=l(4848),r=l(8453);const t={},i="AngleMeasurement",d={id:"api/@thatopen/components-front/classes/AngleMeasurement",title:"AngleMeasurement",description:"This component allows users to measure angles in a 3D scene. \ud83d\udcd5 Tutorial. \ud83d\udcd8 API.",source:"@site/docs/api/@thatopen/components-front/classes/AngleMeasurement.md",sourceDirName:"api/@thatopen/components-front/classes",slug:"/api/@thatopen/components-front/classes/AngleMeasurement",permalink:"/api/@thatopen/components-front/classes/AngleMeasurement",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@thatopen/components-front",permalink:"/api/@thatopen/components-front/"},next:{title:"AreaMeasurement",permalink:"/api/@thatopen/components-front/classes/AreaMeasurement"}},o={},c=[{value:"Extends",id:"extends",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"list",id:"list",level:3},{value:"onDisposed",id:"ondisposed",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"world?",id:"world",level:3},{value:"uuid",id:"uuid",level:3},{value:"Accessors",id:"accessors",level:2},{value:"enabled",id:"enabled",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"lineMaterial",id:"linematerial",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"workingPlane",id:"workingplane",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Methods",id:"methods",level:2},{value:"cancelCreation()",id:"cancelcreation",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"create()",id:"create",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"delete()",id:"delete",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"deleteAll()",id:"deleteall",level:3},{value:"Returns",id:"returns-6",level:4},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"endCreation()",id:"endcreation",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Implementation of",id:"implementation-of-5",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"anglemeasurement",children:"AngleMeasurement"}),"\n",(0,s.jsxs)(n.p,{children:["This component allows users to measure angles in a 3D scene. \ud83d\udcd5 ",(0,s.jsx)(n.a,{href:"https://docs.thatopen.com/Tutorials/Components/Front/AngleMeasurement",children:"Tutorial"}),". \ud83d\udcd8 ",(0,s.jsx)(n.a,{href:"https://docs.thatopen.com/api/@thatopen/components-front/classes/AngleMeasurement",children:"API"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Component"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"implements",children:"Implements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Createable"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Disposable"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"list",children:"list"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"list"}),": ",(0,s.jsx)(n.code,{children:"AngleMeasureElement"}),"[] = ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A list of all the angle measurement elements created by this component."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"ondisposed",children:"onDisposed"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"onDisposed"}),": ",(0,s.jsx)(n.code,{children:"Event"}),"<",(0,s.jsx)(n.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"OBC.Disposable.onDisposed"}),"\n",(0,s.jsx)(n.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"OBC.Disposable.onDisposed"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"world",children:"world?"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"optional"})," ",(0,s.jsx)(n.strong,{children:"world"}),": ",(0,s.jsx)(n.code,{children:"World"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The world in which the angle measurements are performed.\r\nThis property is optional and can be set to null if no world is available."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"uuid",children:"uuid"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"static"})," ",(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"uuid"}),": ",(0,s.jsx)(n.code,{children:'"622fb2c9-528c-4b0a-8a0e-6a1375f0a3aa"'})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A unique identifier for the component.\r\nThis UUID is used to register the component within the Components system."}),"\n",(0,s.jsx)(n.h2,{id:"accessors",children:"Accessors"}),"\n",(0,s.jsx)(n.h3,{id:"enabled",children:"enabled"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"get"})," ",(0,s.jsx)(n.strong,{children:"enabled"}),"(): ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"OBC.Component.enabled"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"set"})," ",(0,s.jsx)(n.strong,{children:"enabled"}),"(",(0,s.jsx)(n.code,{children:"value"}),"): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"OBC.Component.enabled"}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"value"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"boolean"})})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"linematerial",children:"lineMaterial"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"get"})," ",(0,s.jsx)(n.strong,{children:"lineMaterial"}),"(): ",(0,s.jsx)(n.code,{children:"LineMaterial"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Getter for the line material used for the angle measurement lines."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"set"})," ",(0,s.jsx)(n.strong,{children:"lineMaterial"}),"(",(0,s.jsx)(n.code,{children:"material"}),"): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Setter for the line material used for the angle measurement lines.\r\nDisposes the old material and sets the new one.\r\nAlso updates the resolution of the material to match the window size."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"material"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"LineMaterial"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"The new line material to use."})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"LineMaterial"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"workingplane",children:"workingPlane"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"get"})," ",(0,s.jsx)(n.strong,{children:"workingPlane"}),"(): ",(0,s.jsx)(n.code,{children:"null"})," | ",(0,s.jsx)(n.code,{children:"Plane"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Getter for the working plane for the angle measurement."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"set"})," ",(0,s.jsx)(n.strong,{children:"workingPlane"}),"(",(0,s.jsx)(n.code,{children:"plane"}),"): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Setter for the working plane for the angle measurement.\r\nSets the working plane for the vertex picker."}),"\n",(0,s.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"plane"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.code,{children:"null"})," | ",(0,s.jsx)(n.code,{children:"Plane"})]}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"The new working plane or null if no plane is to be used."})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"null"})," | ",(0,s.jsx)(n.code,{children:"Plane"})]}),"\n",(0,s.jsx)(n.p,{children:"The current working plane or null if no plane is being used."}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"cancelcreation",children:"cancelCreation()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"cancelCreation"}),"(): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"OBC.Createable.cancelCreation"}),"\n",(0,s.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"OBC.Createable.cancelCreation"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"create",children:"create()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"create"}),"(): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"OBC.Createable.create"}),"\n",(0,s.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h4,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"OBC.Createable.create"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"delete",children:"delete()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"delete"}),"(): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"OBC.Createable.delete"}),"\n",(0,s.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h4,{id:"implementation-of-3",children:"Implementation of"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"OBC.Createable.delete"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"deleteall",children:"deleteAll()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"deleteAll"}),"(): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Deletes all the dimensions that have been previously created."}),"\n",(0,s.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"dispose"}),"(): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"OBC.Disposable.dispose"}),"\n",(0,s.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h4,{id:"implementation-of-4",children:"Implementation of"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"OBC.Disposable.dispose"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"endcreation",children:"endCreation()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"endCreation"}),"(): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"OBC.Createable.endCreation"}),"\n",(0,s.jsx)(n.h4,{id:"returns-8",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.h4,{id:"implementation-of-5",children:"Implementation of"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"OBC.Createable.endCreation"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>d});var s=l(6540);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);