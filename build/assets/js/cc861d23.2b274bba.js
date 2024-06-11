"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[1957],{148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var l=n(4848),i=n(8453);const r={},s="Alignment",c={id:"api/@thatopen/fragments/classes/Alignment",title:"Alignment",description:"Represents an alignment in a civil engineering project. An alignment consists of vertical, horizontal, and absolute civil curves.",source:"@site/docs/api/@thatopen/fragments/classes/Alignment.md",sourceDirName:"api/@thatopen/fragments/classes",slug:"/api/@thatopen/fragments/classes/Alignment",permalink:"/api/@thatopen/fragments/classes/Alignment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@thatopen/fragments",permalink:"/api/@thatopen/fragments/"},next:{title:"CivilCurve",permalink:"/api/@thatopen/fragments/classes/CivilCurve"}},h={},d=[{value:"Properties",id:"properties",level:2},{value:"absolute",id:"absolute",level:3},{value:"horizontal",id:"horizontal",level:3},{value:"initialKP",id:"initialkp",level:3},{value:"vertical",id:"vertical",level:3},{value:"Methods",id:"methods",level:2},{value:"getCurveAt()",id:"getcurveat",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"curve",id:"curve",level:5},{value:"percentage",id:"percentage",level:5},{value:"Throws",id:"throws",level:4},{value:"getLength()",id:"getlength",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getPointAt()",id:"getpointat",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Throws",id:"throws-1",level:4}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"alignment",children:"Alignment"}),"\n",(0,l.jsx)(t.p,{children:"Represents an alignment in a civil engineering project. An alignment consists of vertical, horizontal, and absolute civil curves."}),"\n",(0,l.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsx)(t.h3,{id:"absolute",children:"absolute"}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"absolute"}),": ",(0,l.jsx)(t.a,{href:"/api/@thatopen/fragments/classes/CivilCurve",children:(0,l.jsx)(t.code,{children:"CivilCurve"})}),"[] = ",(0,l.jsx)(t.code,{children:"[]"})]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Absolute civil curves in the alignment."}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"horizontal",children:"horizontal"}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"horizontal"}),": ",(0,l.jsx)(t.a,{href:"/api/@thatopen/fragments/classes/CivilCurve",children:(0,l.jsx)(t.code,{children:"CivilCurve"})}),"[] = ",(0,l.jsx)(t.code,{children:"[]"})]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Horizontal civil curves in the alignment."}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"initialkp",children:"initialKP"}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"initialKP"}),": ",(0,l.jsx)(t.code,{children:"number"})," = ",(0,l.jsx)(t.code,{children:"0"})]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Initial KP (Kilometer Point) of the alignment."}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"vertical",children:"vertical"}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"vertical"}),": ",(0,l.jsx)(t.a,{href:"/api/@thatopen/fragments/classes/CivilCurve",children:(0,l.jsx)(t.code,{children:"CivilCurve"})}),"[] = ",(0,l.jsx)(t.code,{children:"[]"})]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Vertical civil curves in the alignment."}),"\n",(0,l.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(t.h3,{id:"getcurveat",children:"getCurveAt()"}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"getCurveAt"}),"(",(0,l.jsx)(t.code,{children:"percentage"}),", ",(0,l.jsx)(t.code,{children:"type"}),"): ",(0,l.jsx)(t.code,{children:"object"})]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Returns the curve and the percentage at the specified percentage along the specified alignment type.\r\nIf the percentage is out of range, it will be clamped to the nearest valid value (0 or 1).\r\nIf the point cannot be computed, an error will be thrown."}),"\n",(0,l.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"percentage"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"number"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The percentage along the alignment type (between zero and one)."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"type"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/api/@thatopen/fragments/type-aliases/AlignmentType",children:(0,l.jsx)(t.code,{children:"AlignmentType"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The type of alignment (vertical, horizontal, or absolute)."})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"object"})}),"\n",(0,l.jsx)(t.p,{children:"An object containing the curve and the percentage along the curve."}),"\n",(0,l.jsx)(t.h5,{id:"curve",children:"curve"}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"curve"}),": ",(0,l.jsx)(t.a,{href:"/api/@thatopen/fragments/classes/CivilCurve",children:(0,l.jsx)(t.code,{children:"CivilCurve"})})]}),"\n"]}),"\n",(0,l.jsx)(t.h5,{id:"percentage",children:"percentage"}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"percentage"}),": ",(0,l.jsx)(t.code,{children:"number"})]}),"\n"]}),"\n",(0,l.jsx)(t.h4,{id:"throws",children:"Throws"}),"\n",(0,l.jsx)(t.p,{children:"Will throw an error if the percentage is out of range or if the point cannot be computed."}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"getlength",children:"getLength()"}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"getLength"}),"(",(0,l.jsx)(t.code,{children:"type"}),"): ",(0,l.jsx)(t.code,{children:"number"})]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Returns the total length of the specified alignment type."}),"\n",(0,l.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"type"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/api/@thatopen/fragments/type-aliases/AlignmentType",children:(0,l.jsx)(t.code,{children:"AlignmentType"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The type of alignment (vertical, horizontal, or absolute)."})]})})]}),"\n",(0,l.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"number"})}),"\n",(0,l.jsx)(t.p,{children:"The total length of the specified alignment type."}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"getpointat",children:"getPointAt()"}),"\n",(0,l.jsxs)(t.blockquote,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"getPointAt"}),"(",(0,l.jsx)(t.code,{children:"percentage"}),", ",(0,l.jsx)(t.code,{children:"type"}),"): ",(0,l.jsx)(t.code,{children:"Vector3"})]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Returns the point at the specified percentage along the specified alignment type."}),"\n",(0,l.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"percentage"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"number"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The percentage along the alignment type (between zero and one)."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"type"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/api/@thatopen/fragments/type-aliases/AlignmentType",children:(0,l.jsx)(t.code,{children:"AlignmentType"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The type of alignment (vertical, horizontal, or absolute)."})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"returns-2",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"Vector3"})}),"\n",(0,l.jsx)(t.p,{children:"The point at the specified percentage along the specified alignment type."}),"\n",(0,l.jsx)(t.h4,{id:"throws-1",children:"Throws"}),"\n",(0,l.jsx)(t.p,{children:"Will throw an error if the percentage is out of range or if the point cannot be computed."})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var l=n(6540);const i={},r=l.createContext(i);function s(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);