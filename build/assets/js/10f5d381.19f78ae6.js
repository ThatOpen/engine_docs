"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,f=m["".concat(o,".").concat(k)]||m[k]||c[k]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={id:"openbim_components.Createable",title:"Interface: Createable",sidebar_label:"Createable",custom_edit_url:null},l=void 0,p={unversionedId:"api/interfaces/openbim_components.Createable",id:"api/interfaces/openbim_components.Createable",title:"Interface: Createable",description:"openbim-components.Createable",source:"@site/docs/api/interfaces/openbim_components.Createable.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/openbim_components.Createable",permalink:"/api/interfaces/openbim_components.Createable",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"openbim_components.Createable",title:"Interface: Createable",sidebar_label:"Createable",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Configurable",permalink:"/api/interfaces/openbim_components.Configurable"},next:{title:"Disposable",permalink:"/api/interfaces/openbim_components.Disposable"}},o={},s=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"cancelCreation",id:"cancelcreation",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"create",id:"create",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"delete",id:"delete",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:"endCreation",id:"endcreation",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-3",level:4},{value:"onAfterCancel",id:"onaftercancel",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"onAfterCreate",id:"onaftercreate",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"onAfterDelete",id:"onafterdelete",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"onBeforeCancel",id:"onbeforecancel",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"onBeforeDelete",id:"onbeforedelete",level:3},{value:"Defined in",id:"defined-in-8",level:4}],d={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/openbim_components"},"openbim-components"),".Createable"),(0,r.kt)("p",null,"Whether this component supports create and destroy operations. This generally\napplies for components that work with instances, such as clipping planes or\ndimensions."),(0,r.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.LengthMeasurement"},(0,r.kt)("inlineCode",{parentName:"a"},"LengthMeasurement"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/classes/openbim_components.SimpleClipper"},(0,r.kt)("inlineCode",{parentName:"a"},"SimpleClipper")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"cancelcreation"},"cancelCreation"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"cancelCreation"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Cancels the creation process of the component, going back to the state\nbefore starting to create."),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/base-types.ts#L157"},"temp/engine_components/src/base-types/base-types.ts:157")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"create"},"create"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"create"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Creates a new instance of an element (e.g. a new Dimension)."),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/base-types.ts#L139"},"temp/engine_components/src/base-types/base-types.ts:139")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"delete"},"delete"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"delete"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Deletes an existing instance of an element (e.g. a Dimension)."),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/base-types.ts#L166"},"temp/engine_components/src/base-types/base-types.ts:166")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"endcreation"},"endCreation"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"endCreation"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Finish the creation process of the component, successfully creating an\ninstance of whatever the component creates."),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/base-types.ts#L148"},"temp/engine_components/src/base-types/base-types.ts:148")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onaftercancel"},"onAfterCancel"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"onAfterCancel"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,r.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("p",null,"Fired after calling ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Createable#cancelcreation"},"Createable.cancelCreation"),"."),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/base-types.ts#L160"},"temp/engine_components/src/base-types/base-types.ts:160")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onaftercreate"},"onAfterCreate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"onAfterCreate"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,r.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("p",null,"Fired after successfully calling ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Createable#create"},"Createable.create")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/base-types.ts#L142"},"temp/engine_components/src/base-types/base-types.ts:142")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onafterdelete"},"onAfterDelete"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"onAfterDelete"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,r.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("p",null,"Fired after successfully calling ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Createable#delete"},"()")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/base-types.ts#L169"},"temp/engine_components/src/base-types/base-types.ts:169")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onbeforecancel"},"onBeforeCancel"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"onBeforeCancel"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,r.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("p",null,"Fired before calling ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Createable#cancelcreation"},"Createable.cancelCreation"),"."),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/base-types.ts#L151"},"temp/engine_components/src/base-types/base-types.ts:151")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onbeforedelete"},"onBeforeDelete"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"onBeforeDelete"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,r.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("p",null,"Fired before calling ",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Createable#delete"},"Createable.delete"),"."),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/base-types.ts#L163"},"temp/engine_components/src/base-types/base-types.ts:163")))}c.isMDXComponent=!0}}]);