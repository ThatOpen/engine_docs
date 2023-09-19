"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,f=m["".concat(o,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={id:"components.FragmentIfcLoader",title:"Class: FragmentIfcLoader",sidebar_label:"FragmentIfcLoader",custom_edit_url:null},s=void 0,l={unversionedId:"api/classes/components.FragmentIfcLoader",id:"api/classes/components.FragmentIfcLoader",title:"Class: FragmentIfcLoader",description:"components.FragmentIfcLoader",source:"@site/docs/api/classes/components.FragmentIfcLoader.md",sourceDirName:"api/classes",slug:"/api/classes/components.FragmentIfcLoader",permalink:"/docs/api/classes/components.FragmentIfcLoader",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"components.FragmentIfcLoader",title:"Class: FragmentIfcLoader",sidebar_label:"FragmentIfcLoader",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"FragmentBoundingBox",permalink:"/docs/api/classes/components.FragmentBoundingBox"},next:{title:"FragmentManager",permalink:"/docs/api/classes/components.FragmentManager"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Methods",id:"methods",level:2},{value:"dispose",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"hasUI",id:"hasui",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"isDisposeable",id:"isdisposeable",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"isHideable",id:"ishideable",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"isResizeable",id:"isresizeable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"isUpdateable",id:"isupdateable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"load",id:"load",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/components"},"components"),".FragmentIfcLoader"),(0,i.kt)("p",null,"Reads all the geometry of the IFC file and generates a set of\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/fragment"},"fragments"),". It can also return the\nproperties as a JSON file, as well as other sets of information within\nthe IFC file."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Component"},(0,i.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"WEBIFC.IfcAPI"),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"FragmentIfcLoader"))))),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/components.Disposable"},(0,i.kt)("inlineCode",{parentName:"a"},"Disposable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/interfaces/components.UI"},(0,i.kt)("inlineCode",{parentName:"a"},"UI")))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"dispose"},"dispose"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.Disposable#dispose"},"dispose")),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.Disposable"},"Disposable"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.Disposable#dispose"},"dispose")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"temp/components/fragments/FragmentIfcLoader/index.ts:59"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hasui"},"hasUI"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"hasUI"),"(): this is UI"),(0,i.kt)("p",null,"Whether is component implements any kind of ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.UI"},"UI"),"."),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,"this is UI"),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Component#hasui"},"hasUI")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"temp/components/base-types/component.ts:50"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isdisposeable"},"isDisposeable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isDisposeable"),"(): this is Disposable"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.Disposable"},"Disposable"),"."),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,"this is Disposable"),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Component#isdisposeable"},"isDisposeable")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"temp/components/base-types/component.ts:28"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ishideable"},"isHideable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isHideable"),"(): this is Hideable"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.Hideable"},"Hideable"),"."),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,"this is Hideable"),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Component#ishideable"},"isHideable")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"temp/components/base-types/component.ts:45"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isresizeable"},"isResizeable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isResizeable"),"(): this is Resizeable"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.Resizeable"},"Resizeable"),"."),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,"this is Resizeable"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Component#isresizeable"},"isResizeable")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"temp/components/base-types/component.ts:33"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isupdateable"},"isUpdateable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isUpdateable"),"(): this is Updateable"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.Updateable"},"Updateable"),"."),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,"this is Updateable"),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Component#isupdateable"},"isUpdateable")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,"temp/components/base-types/component.ts:38"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"load"},"load"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"load"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"FragmentsGroup"),">"),(0,i.kt)("p",null,"Loads the IFC file and converts it to a set of fragments."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Uint8Array"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"FragmentsGroup"),">"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,"temp/components/fragments/FragmentIfcLoader/index.ts:71"))}c.isMDXComponent=!0}}]);