"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6630],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>b});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),l=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=l(e.components);return i.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=l(t),c=a,b=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return t?i.createElement(b,s(s({ref:n},m),{},{components:t})):i.createElement(b,s({ref:n},m))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=c;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r[d]="string"==typeof e?e:a,s[1]=r;for(var l=2;l<o;l++)s[l]=t[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(7462),a=(t(7294),t(3905));const o={id:"openbim_components.FragmentBoundingBox",title:"Class: FragmentBoundingBox",sidebar_label:"FragmentBoundingBox",custom_edit_url:null},s=void 0,r={unversionedId:"api/classes/openbim_components.FragmentBoundingBox",id:"api/classes/openbim_components.FragmentBoundingBox",title:"Class: FragmentBoundingBox",description:"openbim-components.FragmentBoundingBox",source:"@site/docs/api/classes/openbim_components.FragmentBoundingBox.md",sourceDirName:"api/classes",slug:"/api/classes/openbim_components.FragmentBoundingBox",permalink:"/api/classes/openbim_components.FragmentBoundingBox",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"openbim_components.FragmentBoundingBox",title:"Class: FragmentBoundingBox",sidebar_label:"FragmentBoundingBox",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Event",permalink:"/api/classes/openbim_components.Event"},next:{title:"FragmentIfcLoader",permalink:"/api/classes/openbim_components.FragmentIfcLoader"}},p={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"enabled",id:"enabled",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose",id:"dispose",level:3},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"hasUI",id:"hasui",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"isConfigurable",id:"isconfigurable",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"isDisposeable",id:"isdisposeable",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"isHideable",id:"ishideable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"isResizeable",id:"isresizeable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"isUpdateable",id:"isupdateable",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-7",level:4}],m={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/modules/openbim_components"},"openbim-components"),".FragmentBoundingBox"),(0,a.kt)("p",null,"A simple implementation of bounding box that works for fragments. The resulting bbox is not 100% precise, but\nit's fast, and should suffice for general use cases such as camera zooming or general boundary determination."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},(0,a.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"FragmentBoundingBox"))))),(0,a.kt)("h2",{id:"implements"},"Implements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/interfaces/openbim_components.Disposable"},(0,a.kt)("inlineCode",{parentName:"a"},"Disposable")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"enabled"},"enabled"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"enabled"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#enabled"},"Component.enabled")),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#enabled"},"enabled")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/fragments/FragmentBoundingBox/index.ts#L15"},"src/fragments/FragmentBoundingBox/index.ts:15")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"dispose"},"dispose"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#dispose"},"Disposable.dispose")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,a.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),".",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#dispose"},"dispose")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/fragments/FragmentBoundingBox/index.ts#L68"},"src/fragments/FragmentBoundingBox/index.ts:68")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hasui"},"hasUI"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"hasUI"),"(): this is UI"),(0,a.kt)("p",null,"Whether is component implements any kind of ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.UI"},"UI"),"."),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"this is UI"),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#hasui"},"hasUI")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L62"},"src/base-types/component.ts:62")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isconfigurable"},"isConfigurable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isConfigurable"),"(): this is Configurable<any",">"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Configurable"},"Configurable"),"."),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,"this is Configurable<any",">"),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isconfigurable"},"isConfigurable")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L57"},"src/base-types/component.ts:57")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isdisposeable"},"isDisposeable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isDisposeable"),"(): this is Disposable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),"."),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,"this is Disposable"),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isdisposeable"},"isDisposeable")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L35"},"src/base-types/component.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ishideable"},"isHideable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isHideable"),"(): this is Hideable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Hideable"},"Hideable"),"."),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,"this is Hideable"),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#ishideable"},"isHideable")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L52"},"src/base-types/component.ts:52")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isresizeable"},"isResizeable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isResizeable"),"(): this is Resizeable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable"},"Resizeable"),"."),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,"this is Resizeable"),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isresizeable"},"isResizeable")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L40"},"src/base-types/component.ts:40")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isupdateable"},"isUpdateable"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isUpdateable"),"(): this is Updateable"),(0,a.kt)("p",null,"Whether is component is ",(0,a.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable"},"Updateable"),"."),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,"this is Updateable"),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,a.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isupdateable"},"isUpdateable")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L45"},"src/base-types/component.ts:45")))}u.isMDXComponent=!0}}]);