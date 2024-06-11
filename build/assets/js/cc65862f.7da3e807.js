"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[2188],{1074:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var n=a(4848),r=a(8453);const s={},i="FragmentIdMap",p={id:"api/@thatopen/fragments/interfaces/FragmentIdMap",title:"FragmentIdMap",description:"A map that associates each fragmentID with a set of item IDs.",source:"@site/docs/api/@thatopen/fragments/interfaces/FragmentIdMap.md",sourceDirName:"api/@thatopen/fragments/interfaces",slug:"/api/@thatopen/fragments/interfaces/FragmentIdMap",permalink:"/api/@thatopen/fragments/interfaces/FragmentIdMap",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"StreamSerializer",permalink:"/api/@thatopen/fragments/classes/StreamSerializer"},next:{title:"IfcMetadata",permalink:"/api/@thatopen/fragments/interfaces/IfcMetadata"}},m={},o=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Template",id:"template",level:2},{value:"Template",id:"template-1",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"fragmentidmap",children:"FragmentIdMap"}),"\n",(0,n.jsx)(t.p,{children:"A map that associates each fragmentID with a set of item IDs."}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(t.p,{children:"This map is used to efficiently retrieve the item IDs associated with a given fragmentID.\r\nEach fragmentID is a unique identifier for a 3D model fragment, and the corresponding set of item IDs\r\nrepresents the items that are part of that fragment. Generally, the item ID correspond to the express ID of the IFC used to generate the fragments."}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'const fragmentIdMap: FragmentIdMap = {\r\n  "fragment1": new Set([1, 2, 3]),\r\n  "fragment2": new Set([4, 5]),\r\n};\n'})}),"\n",(0,n.jsx)(t.h2,{id:"template",children:"Template"}),"\n",(0,n.jsx)(t.p,{children:"The type of the fragmentID. In this case, it is a string."}),"\n",(0,n.jsx)(t.h2,{id:"template-1",children:"Template"}),"\n",(0,n.jsx)(t.p,{children:"The type of the itemID. In this case, it is a number."})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>p});var n=a(6540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);