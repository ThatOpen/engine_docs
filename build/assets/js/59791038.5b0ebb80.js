"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={id:"openbim_components.CloudStorage",title:"Class: CloudStorage",sidebar_label:"CloudStorage",custom_edit_url:null},o=void 0,s={unversionedId:"api/classes/openbim_components.CloudStorage",id:"api/classes/openbim_components.CloudStorage",title:"Class: CloudStorage",description:"openbim-components.CloudStorage",source:"@site/docs/api/classes/openbim_components.CloudStorage.md",sourceDirName:"api/classes",slug:"/api/classes/openbim_components.CloudStorage",permalink:"/api/classes/openbim_components.CloudStorage",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"openbim_components.CloudStorage",title:"Class: CloudStorage",sidebar_label:"CloudStorage",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"BaseRenderer",permalink:"/api/classes/openbim_components.BaseRenderer"},next:{title:"Component",permalink:"/api/classes/openbim_components.Component"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"enabled",id:"enabled",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"name",id:"name",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Accessors",id:"accessors",level:2},{value:"token",id:"token",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"get",id:"get",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"hasUI",id:"hasui",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"isConfigurable",id:"isconfigurable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"isDisposeable",id:"isdisposeable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"isHideable",id:"ishideable",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"isResizeable",id:"isresizeable",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"isUpdateable",id:"isupdateable",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-10",level:4}],d={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/openbim_components"},"openbim-components"),".CloudStorage"),(0,a.kt)("p",null,"An object to easily use the services of That Open Platform."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},(0,a.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"[]",">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CloudStorage"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"enabled"},"enabled"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"enabled"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#enabled"},"Component.enabled")),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#enabled"},"enabled")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/services/CloudStorage/index.ts#L18"},"src/services/CloudStorage/index.ts:18")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"CloudProcessor"')),(0,a.kt)("p",null,"Component.name"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/services/CloudStorage/index.ts#L15"},"src/services/CloudStorage/index.ts:15")),(0,a.kt)("h2",{id:"accessors"},"Accessors"),(0,a.kt)("h3",{id:"token"},"token"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"token"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The authentication token generated in\n",(0,a.kt)("a",{parentName:"p",href:"https://platform.thatopen.com/app"},"That Open Platform")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/services/CloudStorage/index.ts#L50"},"src/services/CloudStorage/index.ts:50")),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"set")," ",(0,a.kt)("strong",{parentName:"p"},"token"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"The authentication token generated in\n",(0,a.kt)("a",{parentName:"p",href:"https://platform.thatopen.com/app"},"That Open Platform")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"value")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/services/CloudStorage/index.ts#L61"},"src/services/CloudStorage/index.ts:61")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"get"},"get"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"get"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,a.kt)("p",null,"Retrieves a tool component by its name."),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,a.kt)("h4",{id:"overrides-1"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#get"},"get")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/services/CloudStorage/index.ts#L42"},"src/services/CloudStorage/index.ts:42")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hasui"},"hasUI"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"hasUI"),"(): this is UI"),(0,a.kt)("p",null,"Whether is component implements any kind of ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.UI"},"UI"),"."),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,"this is UI"),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#hasui"},"hasUI")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L62"},"src/base-types/component.ts:62")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isconfigurable"},"isConfigurable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isConfigurable"),"(): this is Configurable<any",">"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Configurable"},"Configurable"),"."),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,"this is Configurable<any",">"),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isconfigurable"},"isConfigurable")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L57"},"src/base-types/component.ts:57")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isdisposeable"},"isDisposeable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isDisposeable"),"(): this is Disposable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),"."),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,"this is Disposable"),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isdisposeable"},"isDisposeable")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L35"},"src/base-types/component.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ishideable"},"isHideable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isHideable"),"(): this is Hideable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Hideable"},"Hideable"),"."),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,"this is Hideable"),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#ishideable"},"isHideable")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L52"},"src/base-types/component.ts:52")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isresizeable"},"isResizeable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isResizeable"),"(): this is Resizeable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable"},"Resizeable"),"."),(0,a.kt)("h4",{id:"returns-7"},"Returns"),(0,a.kt)("p",null,"this is Resizeable"),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isresizeable"},"isResizeable")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L40"},"src/base-types/component.ts:40")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isupdateable"},"isUpdateable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isUpdateable"),"(): this is Updateable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable"},"Updateable"),"."),(0,a.kt)("h4",{id:"returns-8"},"Returns"),(0,a.kt)("p",null,"this is Updateable"),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isupdateable"},"isUpdateable")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L45"},"src/base-types/component.ts:45")))}u.isMDXComponent=!0}}]);