"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[876],{2886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var s=n(4848),r=n(8453);const l={},d="Event<T>",i={id:"api/@thatopen/components/classes/Event",title:"Event\\<T\\>",description:"Simple event handler by Jason Kleban. Keep in mind that if you want to remove it later, you might want to declare the callback as an object. If you want to maintain the reference to this, you will need to declare the callback as an arrow function.",source:"@site/docs/api/@thatopen/components/classes/Event.md",sourceDirName:"api/@thatopen/components/classes",slug:"/api/@thatopen/components/classes/Event",permalink:"/api/@thatopen/components/classes/Event",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Disposer",permalink:"/api/@thatopen/components/classes/Disposer"},next:{title:"EventManager",permalink:"/api/@thatopen/components/classes/EventManager"}},c={},a=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"enabled",id:"enabled",level:3},{value:"Methods",id:"methods",level:2},{value:"add()",id:"add",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"remove()",id:"remove",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"reset()",id:"reset",level:3},{value:"Returns",id:"returns-2",level:4},{value:"trigger()",id:"trigger",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"eventt",children:"Event<T>"}),"\n",(0,s.jsxs)(t.p,{children:["Simple event handler by ",(0,s.jsx)(t.a,{href:"https://gist.github.com/JasonKleban/50cee44960c225ac1993c922563aa540",children:"Jason Kleban"}),". Keep in mind that if you want to remove it later, you might want to declare the callback as an object. If you want to maintain the reference to ",(0,s.jsx)(t.code,{children:"this"}),", you will need to declare the callback as an arrow function."]}),"\n",(0,s.jsx)(t.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type parameter"})})}),(0,s.jsx)(t.tbody,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"T"})})})})]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(t.h3,{id:"enabled",children:"enabled"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"enabled"}),": ",(0,s.jsx)(t.code,{children:"boolean"})," = ",(0,s.jsx)(t.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Whether this event is active or not. If not, it won't trigger."}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.h3,{id:"add",children:"add()"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"add"}),"(",(0,s.jsx)(t.code,{children:"handler"}),"): ",(0,s.jsx)(t.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Add a callback to this event instance."}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"handler"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"T"})," ",(0,s.jsx)(t.em,{children:"extends"})," ",(0,s.jsx)(t.code,{children:"void"})," ? () => ",(0,s.jsx)(t.code,{children:"void"})," : (",(0,s.jsx)(t.code,{children:"data"}),") => ",(0,s.jsx)(t.code,{children:"void"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"the callback to be added to this event."})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"remove",children:"remove()"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"remove"}),"(",(0,s.jsx)(t.code,{children:"handler"}),"): ",(0,s.jsx)(t.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Removes a callback from this event instance."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"handler"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"T"})," ",(0,s.jsx)(t.em,{children:"extends"})," ",(0,s.jsx)(t.code,{children:"void"})," ? () => ",(0,s.jsx)(t.code,{children:"void"})," : (",(0,s.jsx)(t.code,{children:"data"}),") => ",(0,s.jsx)(t.code,{children:"void"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"the callback to be removed from this event."})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"reset",children:"reset()"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"reset"}),"(): ",(0,s.jsx)(t.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Gets rid of all the suscribed events."}),"\n",(0,s.jsx)(t.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"trigger",children:"trigger()"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"trigger"}),"(",(0,s.jsx)(t.code,{children:"data"}),"?): ",(0,s.jsx)(t.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Triggers all the callbacks assigned to this event."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"data"}),"?"]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"T"})})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var s=n(6540);const r={},l=s.createContext(r);function d(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);