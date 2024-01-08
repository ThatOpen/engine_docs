"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6599],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>b});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),r=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=r(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=r(t),u=i,b=d["".concat(l,".").concat(u)]||d[u]||c[u]||p;return t?a.createElement(b,o(o({ref:n},m),{},{components:t})):a.createElement(b,o({ref:n},m))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,o=new Array(p);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var r=2;r<p;r++)o[r]=t[r];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3867:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>r});var a=t(7462),i=(t(7294),t(3905));const p={id:"openbim_components.CubeMap",title:"Class: CubeMap",sidebar_label:"CubeMap",custom_edit_url:null},o=void 0,s={unversionedId:"api/classes/openbim_components.CubeMap",id:"api/classes/openbim_components.CubeMap",title:"Class: CubeMap",description:"openbim-components.CubeMap",source:"@site/docs/api/classes/openbim_components.CubeMap.md",sourceDirName:"api/classes",slug:"/api/classes/openbim_components.CubeMap",permalink:"/api/classes/openbim_components.CubeMap",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"openbim_components.CubeMap",title:"Class: CubeMap",sidebar_label:"CubeMap",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/api/classes/openbim_components.Components"},next:{title:"Disposer",permalink:"/api/classes/openbim_components.Disposer"}},l={},r=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"enabled",id:"enabled",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"offset",id:"offset",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"onAfterUpdate",id:"onafterupdate",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"onBeforeUpdate",id:"onbeforeupdate",level:3},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"onDisposed",id:"ondisposed",level:3},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods",level:2},{value:"hasUI",id:"hasui",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"isConfigurable",id:"isconfigurable",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"isDisposeable",id:"isdisposeable",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"isHideable",id:"ishideable",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"isResizeable",id:"isresizeable",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"isUpdateable",id:"isupdateable",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-10",level:4}],m={toc:r},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/modules/openbim_components"},"openbim-components"),".CubeMap"),(0,i.kt)("p",null,"A simple navigation cube to zoom the scene to its basic views (top, bottom,\nleft, right, back and front)."),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},(0,i.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLDivElement"),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"CubeMap"))))),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/interfaces/openbim_components.Updateable"},(0,i.kt)("inlineCode",{parentName:"a"},"Updateable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/interfaces/openbim_components.Hideable"},(0,i.kt)("inlineCode",{parentName:"a"},"Hideable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/interfaces/openbim_components.Disposable"},(0,i.kt)("inlineCode",{parentName:"a"},"Disposable")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"enabled"},"enabled"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"enabled"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#enabled"},"Component.enabled")),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#enabled"},"enabled")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/components/blob/0c38d20/src/navigation/CubeMap/index.ts#L40"},"temp/components/src/navigation/CubeMap/index.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"offset"},"offset"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"offset"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("p",null,"The minimum zoom distance to the scene."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/components/blob/0c38d20/src/navigation/CubeMap/index.ts#L49"},"temp/components/src/navigation/CubeMap/index.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onafterupdate"},"onAfterUpdate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"onAfterUpdate"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,i.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.CubeMap"},(0,i.kt)("inlineCode",{parentName:"a"},"CubeMap")),">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable#onafterupdate"},"Updateable.onAfterUpdate")),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable"},"Updateable"),".",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable#onafterupdate"},"onAfterUpdate")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/components/blob/0c38d20/src/navigation/CubeMap/index.ts#L43"},"temp/components/src/navigation/CubeMap/index.ts:43")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onbeforeupdate"},"onBeforeUpdate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"onBeforeUpdate"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,i.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.CubeMap"},(0,i.kt)("inlineCode",{parentName:"a"},"CubeMap")),">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable#onbeforeupdate"},"Updateable.onBeforeUpdate")),(0,i.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable"},"Updateable"),".",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable#onbeforeupdate"},"onBeforeUpdate")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/components/blob/0c38d20/src/navigation/CubeMap/index.ts#L46"},"temp/components/src/navigation/CubeMap/index.ts:46")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ondisposed"},"onDisposed"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"onDisposed"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,i.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#ondisposed"},"Disposable.onDisposed")),(0,i.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),".",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#ondisposed"},"onDisposed")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/components/blob/0c38d20/src/navigation/CubeMap/index.ts#L37"},"temp/components/src/navigation/CubeMap/index.ts:37")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"hasui"},"hasUI"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"hasUI"),"(): this is UI"),(0,i.kt)("p",null,"Whether is component implements any kind of ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.UI"},"UI"),"."),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,"this is UI"),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#hasui"},"hasUI")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L62"},"temp/components/src/base-types/component.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isconfigurable"},"isConfigurable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isConfigurable"),"(): this is Configurable<any",">"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Configurable"},"Configurable"),"."),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,"this is Configurable<any",">"),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isconfigurable"},"isConfigurable")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L57"},"temp/components/src/base-types/component.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isdisposeable"},"isDisposeable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isDisposeable"),"(): this is Disposable"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),"."),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,"this is Disposable"),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isdisposeable"},"isDisposeable")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L35"},"temp/components/src/base-types/component.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ishideable"},"isHideable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isHideable"),"(): this is Hideable"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Hideable"},"Hideable"),"."),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,"this is Hideable"),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#ishideable"},"isHideable")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L52"},"temp/components/src/base-types/component.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isresizeable"},"isResizeable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isResizeable"),"(): this is Resizeable"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Resizeable"},"Resizeable"),"."),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,"this is Resizeable"),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isresizeable"},"isResizeable")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L40"},"temp/components/src/base-types/component.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isupdateable"},"isUpdateable"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isUpdateable"),"(): this is Updateable"),(0,i.kt)("p",null,"Whether is component is ",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Updateable"},"Updateable"),"."),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,"this is Updateable"),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},"Component"),".",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component#isupdateable"},"isUpdateable")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L45"},"temp/components/src/base-types/component.ts:45")))}c.isMDXComponent=!0}}]);