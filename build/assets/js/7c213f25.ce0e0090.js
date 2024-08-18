"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[1010],{9410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var s=n(4848),l=n(8453);const d={},r="DataSet<T>",i={id:"api/@thatopen/components/classes/DataSet",title:"DataSet\\<T\\>",description:"A class that extends the built-in Set class and provides additional functionality.",source:"@site/docs/api/@thatopen/components/classes/DataSet.md",sourceDirName:"api/@thatopen/components/classes",slug:"/api/@thatopen/components/classes/DataSet",permalink:"/api/@thatopen/components/classes/DataSet",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DataMap\\<K, V\\>",permalink:"/api/@thatopen/components/classes/DataMap"},next:{title:"Disposer",permalink:"/api/@thatopen/components/classes/Disposer"}},c={},h=[{value:"Extends",id:"extends",level:2},{value:"Type parameters",id:"type-parameters",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new DataSet()",id:"new-dataset",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"guard()",id:"guard",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"onCleared",id:"oncleared",level:3},{value:"onItemAdded",id:"onitemadded",level:3},{value:"onItemDeleted",id:"onitemdeleted",level:3},{value:"Methods",id:"methods",level:2},{value:"add()",id:"add",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"clear()",id:"clear",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"delete()",id:"delete",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns-5",level:4}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"datasett",children:"DataSet<T>"}),"\n",(0,s.jsx)(t.p,{children:"A class that extends the built-in Set class and provides additional functionality.\r\nIt triggers events when items are added, deleted, or the set is cleared."}),"\n",(0,s.jsx)(t.h2,{id:"extends",children:"Extends"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Set"}),"<",(0,s.jsx)(t.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"T"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The type of elements in the set."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(t.h3,{id:"new-dataset",children:"new DataSet()"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"new DataSet"}),"<",(0,s.jsx)(t.code,{children:"T"}),">(",(0,s.jsx)(t.code,{children:"iterable"}),"?): ",(0,s.jsx)(t.a,{href:"/api/@thatopen/components/classes/DataSet",children:(0,s.jsx)(t.code,{children:"DataSet"})}),"<",(0,s.jsx)(t.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Constructs a new instance of the DataSet class."}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"iterable"}),"?"]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"null"})," | ",(0,s.jsx)(t.code,{children:"Iterable"}),"<",(0,s.jsx)(t.code,{children:"T"}),">"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"An optional iterable object to initialize the set with."})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/@thatopen/components/classes/DataSet",children:(0,s.jsx)(t.code,{children:"DataSet"})}),"<",(0,s.jsx)(t.code,{children:"T"}),">"]}),"\n",(0,s.jsx)(t.h4,{id:"overrides",children:"Overrides"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Set<T>.constructor"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(t.h3,{id:"guard",children:"guard()"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"guard"}),": (",(0,s.jsx)(t.code,{children:"value"}),") => ",(0,s.jsx)(t.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"A function that acts as a guard for adding items to the set.\r\nIt determines whether a given value should be allowed to be added to the set."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"value"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"T"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The value to be checked against the guard."})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"boolean"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"oncleared",children:"onCleared"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"readonly"})," ",(0,s.jsx)(t.strong,{children:"onCleared"}),": ",(0,s.jsx)(t.a,{href:"/api/@thatopen/components/classes/Event",children:(0,s.jsx)(t.code,{children:"Event"})}),"<",(0,s.jsx)(t.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"An event that is triggered when the set is cleared."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"onitemadded",children:"onItemAdded"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"readonly"})," ",(0,s.jsx)(t.strong,{children:"onItemAdded"}),": ",(0,s.jsx)(t.a,{href:"/api/@thatopen/components/classes/Event",children:(0,s.jsx)(t.code,{children:"Event"})}),"<",(0,s.jsx)(t.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"An event that is triggered when a new item is added to the set."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"onitemdeleted",children:"onItemDeleted"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"readonly"})," ",(0,s.jsx)(t.strong,{children:"onItemDeleted"}),": ",(0,s.jsx)(t.a,{href:"/api/@thatopen/components/classes/Event",children:(0,s.jsx)(t.code,{children:"Event"})}),"<",(0,s.jsx)(t.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"An event that is triggered when an item is deleted from the set."}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.h3,{id:"add",children:"add()"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"add"}),"(...",(0,s.jsx)(t.code,{children:"value"}),"): ",(0,s.jsx)(t.a,{href:"/api/@thatopen/components/classes/DataSet",children:(0,s.jsx)(t.code,{children:"DataSet"})}),"<",(0,s.jsx)(t.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Adds one or multiple values to the set and triggers the onItemAdded event per each."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["...",(0,s.jsx)(t.code,{children:"value"})]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"T"}),"[]"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The value to add to the set."})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/api/@thatopen/components/classes/DataSet",children:(0,s.jsx)(t.code,{children:"DataSet"})}),"<",(0,s.jsx)(t.code,{children:"T"}),">"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The set instance."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"overrides-1",children:"Overrides"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Set.add"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"clear",children:"clear()"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"clear"}),"(): ",(0,s.jsx)(t.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Clears the set and triggers the onCleared event."}),"\n",(0,s.jsx)(t.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})}),"\n",(0,s.jsx)(t.h4,{id:"overrides-2",children:"Overrides"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Set.clear"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"delete",children:"delete()"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"delete"}),"(",(0,s.jsx)(t.code,{children:"value"}),"): ",(0,s.jsx)(t.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Deletes a value from the set and triggers the onItemDeleted event."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"value"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"T"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The value to delete from the set."})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"boolean"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"True if the value was successfully deleted, false otherwise."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"overrides-3",children:"Overrides"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Set.delete"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"dispose",children:"dispose()"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"dispose"}),"(): ",(0,s.jsx)(t.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Clears the set and resets the onItemAdded, onItemDeleted, and onCleared events."}),"\n",(0,s.jsx)(t.h4,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})})]})}function o(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(6540);const l={},d=s.createContext(l);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);