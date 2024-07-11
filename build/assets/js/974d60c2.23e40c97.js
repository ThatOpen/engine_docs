"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[1166],{3460:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=s(4848),l=s(8453);const i={},r="Components",o={id:"api/@thatopen/components/classes/Components",title:"Components",description:"The entry point of the Components library. It can create, delete and access all the components of the library globally, update all the updatable components automatically and dispose all the components, preventing memory leaks.",source:"@site/docs/api/@thatopen/components/classes/Components.md",sourceDirName:"api/@thatopen/components/classes",slug:"/api/@thatopen/components/classes/Components",permalink:"/api/@thatopen/components/classes/Components",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"abstract Component",permalink:"/api/@thatopen/components/classes/Component"},next:{title:"CullerRenderer",permalink:"/api/@thatopen/components/classes/CullerRenderer"}},d={},c=[{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"enabled",id:"enabled",level:3},{value:"list",id:"list",level:3},{value:"onDisposed",id:"ondisposed",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"release",id:"release",level:3},{value:"Methods",id:"methods",level:2},{value:"add()",id:"add",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Throws",id:"throws",level:4},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"get()",id:"get",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Throws",id:"throws-1",level:4},{value:"init()",id:"init",level:3},{value:"Returns",id:"returns-3",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"components",children:"Components"}),"\n",(0,t.jsx)(n.p,{children:"The entry point of the Components library. It can create, delete and access all the components of the library globally, update all the updatable components automatically and dispose all the components, preventing memory leaks."}),"\n",(0,t.jsx)(n.h2,{id:"implements",children:"Implements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,t.jsx)(n.code,{children:"Disposable"})})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"enabled",children:"enabled"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"enabled"}),": ",(0,t.jsx)(n.code,{children:"boolean"})," = ",(0,t.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"If disabled, the animation loop will be stopped.\r\nDefault value is false."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"list",children:"list"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"list"}),": ",(0,t.jsx)(n.code,{children:"Map"}),"<",(0,t.jsx)(n.code,{children:"string"}),", ",(0,t.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component",children:(0,t.jsx)(n.code,{children:"Component"})}),">"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The list of components created in this app.\r\nThe keys are UUIDs and the values are instances of the components."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"ondisposed",children:"onDisposed"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"onDisposed"}),": ",(0,t.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,t.jsx)(n.code,{children:"Event"})}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#ondisposed",children:"Disposable.onDisposed"})}),"\n",(0,t.jsx)(n.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,t.jsx)(n.code,{children:"Disposable"})})," . ",(0,t.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#ondisposed",children:(0,t.jsx)(n.code,{children:"onDisposed"})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"release",children:"release"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"static"})," ",(0,t.jsx)(n.code,{children:"readonly"})," ",(0,t.jsx)(n.strong,{children:"release"}),": ",(0,t.jsx)(n.code,{children:'"2.1.2"'})," = ",(0,t.jsx)(n.code,{children:'"2.1.2"'})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The version of the @thatopen/components library."}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"add",children:"add()"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Internal"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"add"}),"(",(0,t.jsx)(n.code,{children:"uuid"}),", ",(0,t.jsx)(n.code,{children:"instance"}),"): ",(0,t.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Adds a component to the list of components.\r\nThrows an error if a component with the same UUID already exists."}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"uuid"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The unique identifier of the component."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"instance"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component",children:(0,t.jsx)(n.code,{children:"Component"})})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The instance of the component to be added."})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"void"})}),"\n",(0,t.jsx)(n.h4,{id:"throws",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if a component with the same UUID already exists."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"dispose"}),"(): ",(0,t.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Disposes the memory of all the components and tools of this instance of\r\nthe library. A memory leak will be created if:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"An instance of the library ends up out of scope and this function isn't\r\ncalled. This is especially relevant in Single Page Applications (React,\r\nAngular, Vue, etc)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Any of the objects of this instance (meshes, geometries,materials, etc) is\r\nreferenced by a reference type (object or array)."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can learn more about how Three.js handles memory leaks\r\n",(0,t.jsx)(n.a,{href:"https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"void"})}),"\n",(0,t.jsx)(n.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,t.jsx)(n.code,{children:"Disposable"})})," . ",(0,t.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#dispose",children:(0,t.jsx)(n.code,{children:"dispose"})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"get",children:"get()"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Internal"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"get"}),"<",(0,t.jsx)(n.code,{children:"U"}),">(",(0,t.jsx)(n.code,{children:"Component"}),"): ",(0,t.jsx)(n.code,{children:"U"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Retrieves a component instance by its constructor function.\r\nIf the component does not exist in the list, it will be created and added."}),"\n",(0,t.jsx)(n.h4,{id:"type-parameters",children:"Type parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type parameter"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,t.jsx)(n.code,{children:"U"})," ",(0,t.jsx)(n.em,{children:"extends"})," ",(0,t.jsx)(n.a,{href:"/api/@thatopen/components/classes/Component",children:(0,t.jsx)(n.code,{children:"Component"})})]}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The type of the component to retrieve."})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"Component"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"Object"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"The constructor function of the component to retrieve."})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"U"})}),"\n",(0,t.jsx)(n.p,{children:"The instance of the requested component."}),"\n",(0,t.jsx)(n.h4,{id:"throws-1",children:"Throws"}),"\n",(0,t.jsx)(n.p,{children:"Will throw an error if a component with the same UUID already exists."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"init",children:"init()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"init"}),"(): ",(0,t.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Initializes the Components instance.\r\nThis method starts the animation loop, sets the enabled flag to true,\r\nand calls the update method."}),"\n",(0,t.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"void"})})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(6540);const l={},i=t.createContext(l);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);