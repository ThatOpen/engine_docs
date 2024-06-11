"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[3812],{9109:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=n(4848),t=n(8453);const r={},l="Raycasters",d={id:"api/@thatopen/components/classes/Raycasters",title:"Raycasters",description:"A component that manages raycasters for different worlds. It uses a Map to store raycasters for each world, and automatically disposes them when the world is disposed.",source:"@site/docs/api/@thatopen/components/classes/Raycasters.md",sourceDirName:"api/@thatopen/components/classes",slug:"/api/@thatopen/components/classes/Raycasters",permalink:"/api/@thatopen/components/classes/Raycasters",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PropertiesStreamingSettings",permalink:"/api/@thatopen/components/classes/PropertiesStreamingSettings"},next:{title:"SimpleCamera",permalink:"/api/@thatopen/components/classes/SimpleCamera"}},o={},c=[{value:"Extends",id:"extends",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"enabled",id:"enabled",level:3},{value:"Overrides",id:"overrides",level:4},{value:"list",id:"list",level:3},{value:"onDisposed",id:"ondisposed",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"uuid",id:"uuid",level:3},{value:"Methods",id:"methods",level:2},{value:"delete()",id:"delete",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"get()",id:"get",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"isConfigurable()",id:"isconfigurable",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"isDisposeable()",id:"isdisposeable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"isHideable()",id:"ishideable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"isResizeable()",id:"isresizeable",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"isUpdateable()",id:"isupdateable",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-4",level:4}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"raycasters",children:"Raycasters"}),"\n",(0,i.jsx)(s.p,{children:"A component that manages raycasters for different worlds. It uses a Map to store raycasters for each world, and automatically disposes them when the world is disposed."}),"\n",(0,i.jsx)(s.h2,{id:"extends",children:"Extends"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component",children:(0,i.jsx)(s.code,{children:"Component"})})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"implements",children:"Implements"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,i.jsx)(s.code,{children:"Disposable"})})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(s.h3,{id:"enabled",children:"enabled"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"enabled"}),": ",(0,i.jsx)(s.code,{children:"boolean"})," = ",(0,i.jsx)(s.code,{children:"true"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component#enabled",children:"Component.enabled"})}),"\n",(0,i.jsx)(s.h4,{id:"overrides",children:"Overrides"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component",children:(0,i.jsx)(s.code,{children:"Component"})})," . ",(0,i.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component#enabled",children:(0,i.jsx)(s.code,{children:"enabled"})})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"list",children:"list"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"list"}),": ",(0,i.jsx)(s.code,{children:"Map"}),"<",(0,i.jsx)(s.code,{children:"string"}),", ",(0,i.jsx)(s.code,{children:"SimpleRaycaster"}),">"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"A Map that stores raycasters for each world.\r\nThe key is the world's UUID, and the value is the corresponding SimpleRaycaster instance."}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"ondisposed",children:"onDisposed"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"onDisposed"}),": ",(0,i.jsx)(s.a,{href:"/api/@thatopen/components/classes/Event",children:(0,i.jsx)(s.code,{children:"Event"})}),"<",(0,i.jsx)(s.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Disposable#ondisposed",children:"Disposable.onDisposed"})}),"\n",(0,i.jsx)(s.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,i.jsx)(s.code,{children:"Disposable"})})," . ",(0,i.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Disposable#ondisposed",children:(0,i.jsx)(s.code,{children:"onDisposed"})})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"uuid",children:"uuid"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"static"})," ",(0,i.jsx)(s.code,{children:"readonly"})," ",(0,i.jsx)(s.strong,{children:"uuid"}),": ",(0,i.jsx)(s.code,{children:'"d5d8bdf0-db25-4952-b951-b643af207ace"'})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"A unique identifier for the component.\r\nThis UUID is used to register the component within the Components system."}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"delete",children:"delete()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"delete"}),"(",(0,i.jsx)(s.code,{children:"world"}),"): ",(0,i.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Deletes the SimpleRaycaster instance associated with the given world.\r\nIf a SimpleRaycaster instance exists for the given world, it will be disposed and removed from the list."}),"\n",(0,i.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"world"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/World",children:(0,i.jsx)(s.code,{children:"World"})})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"The world for which to delete the SimpleRaycaster instance."})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"void"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"dispose",children:"dispose()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"dispose"}),"(): ",(0,i.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Disposable#dispose",children:"Disposable.dispose"})}),"\n",(0,i.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"void"})}),"\n",(0,i.jsx)(s.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:(0,i.jsx)(s.code,{children:"Disposable"})})," . ",(0,i.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Disposable#dispose",children:(0,i.jsx)(s.code,{children:"dispose"})})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"get",children:"get()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"get"}),"(",(0,i.jsx)(s.code,{children:"world"}),"): ",(0,i.jsx)(s.code,{children:"SimpleRaycaster"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Retrieves a SimpleRaycaster instance for the given world.\r\nIf a SimpleRaycaster instance already exists for the world, it will be returned.\r\nOtherwise, a new SimpleRaycaster instance will be created and added to the list."}),"\n",(0,i.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"world"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/World",children:(0,i.jsx)(s.code,{children:"World"})})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:"The world for which to retrieve or create a SimpleRaycaster instance."})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"SimpleRaycaster"})}),"\n",(0,i.jsx)(s.p,{children:"The SimpleRaycaster instance for the given world."}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"isconfigurable",children:"isConfigurable()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"isConfigurable"}),"(): ",(0,i.jsx)(s.code,{children:"this is Configurable<any>"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Whether is component is ",(0,i.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Configurable",children:"Configurable"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"this is Configurable<any>"})}),"\n",(0,i.jsx)(s.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component",children:(0,i.jsx)(s.code,{children:"Component"})})," . ",(0,i.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component#isconfigurable",children:(0,i.jsx)(s.code,{children:"isConfigurable"})})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"isdisposeable",children:"isDisposeable()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"isDisposeable"}),"(): ",(0,i.jsx)(s.code,{children:"this is Disposable"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Whether is component is ",(0,i.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:"Disposable"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"this is Disposable"})}),"\n",(0,i.jsx)(s.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component",children:(0,i.jsx)(s.code,{children:"Component"})})," . ",(0,i.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component#isdisposeable",children:(0,i.jsx)(s.code,{children:"isDisposeable"})})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"ishideable",children:"isHideable()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"isHideable"}),"(): ",(0,i.jsx)(s.code,{children:"this is Hideable"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Whether is component is ",(0,i.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Hideable",children:"Hideable"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"this is Hideable"})}),"\n",(0,i.jsx)(s.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component",children:(0,i.jsx)(s.code,{children:"Component"})})," . ",(0,i.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component#ishideable",children:(0,i.jsx)(s.code,{children:"isHideable"})})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"isresizeable",children:"isResizeable()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"isResizeable"}),"(): ",(0,i.jsx)(s.code,{children:"this is Resizeable"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Whether is component is ",(0,i.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Resizeable",children:"Resizeable"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"this is Resizeable"})}),"\n",(0,i.jsx)(s.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component",children:(0,i.jsx)(s.code,{children:"Component"})})," . ",(0,i.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component#isresizeable",children:(0,i.jsx)(s.code,{children:"isResizeable"})})]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"isupdateable",children:"isUpdateable()"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"isUpdateable"}),"(): ",(0,i.jsx)(s.code,{children:"this is Updateable"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Whether is component is ",(0,i.jsx)(s.a,{href:"/api/@thatopen/components/interfaces/Updateable",children:"Updateable"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"this is Updateable"})}),"\n",(0,i.jsx)(s.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component",children:(0,i.jsx)(s.code,{children:"Component"})})," . ",(0,i.jsx)(s.a,{href:"/api/@thatopen/components/classes/Component#isupdateable",children:(0,i.jsx)(s.code,{children:"isUpdateable"})})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>d});var i=n(6540);const t={},r=i.createContext(t);function l(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);