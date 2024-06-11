"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[7736],{6538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(4848),s=n(8453);const a={},i="IfcProperties",o={id:"api/@thatopen/fragments/interfaces/IfcProperties",title:"IfcProperties",description:"Represents a map of IFC properties.",source:"@site/docs/api/@thatopen/fragments/interfaces/IfcProperties.md",sourceDirName:"api/@thatopen/fragments/interfaces",slug:"/api/@thatopen/fragments/interfaces/IfcProperties",permalink:"/api/@thatopen/fragments/interfaces/IfcProperties",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IfcMetadata",permalink:"/api/@thatopen/fragments/interfaces/IfcMetadata"},next:{title:"IndexedGeometry",permalink:"/api/@thatopen/fragments/interfaces/IndexedGeometry"}},c={},p=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Indexable",id:"indexable",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"ifcproperties",children:"IfcProperties"}),"\n",(0,r.jsx)(t.p,{children:"Represents a map of IFC properties."}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"Each property is associated with an expressID, which is a unique identifier for the IFC entity.\r\nThe properties are stored as an object with attribute names as keys and their corresponding values."}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'const ifcProperties: IfcProperties = {\r\n  123: { name: "Wall", color: "red" },\r\n  456: { name: "Door", height: 2.1 },\r\n};\n'})}),"\n",(0,r.jsx)(t.h2,{id:"indexable",children:"Indexable"}),"\n",(0,r.jsxs)(t.p,{children:["[",(0,r.jsx)(t.code,{children:"expressID"}),": ",(0,r.jsx)(t.code,{children:"number"}),"]: ",(0,r.jsx)(t.code,{children:"object"})]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(6540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);