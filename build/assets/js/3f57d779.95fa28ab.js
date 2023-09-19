"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(n),k=r,u=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={id:"components.Createable",title:"Interface: Createable",sidebar_label:"Createable",custom_edit_url:null},i=void 0,p={unversionedId:"api/interfaces/components.Createable",id:"api/interfaces/components.Createable",title:"Interface: Createable",description:"components.Createable",source:"@site/docs/api/interfaces/components.Createable.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/components.Createable",permalink:"/docs/api/interfaces/components.Createable",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"components.Createable",title:"Interface: Createable",sidebar_label:"Createable",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Serializer",permalink:"/docs/api/classes/fragment.Serializer"},next:{title:"Disposable",permalink:"/docs/api/interfaces/components.Disposable"}},o={},d=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"cancelCreation",id:"cancelcreation",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"create",id:"create",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"delete",id:"delete",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:"endCreation",id:"endcreation",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-3",level:4},{value:"onAfterCancel",id:"onaftercancel",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"onAfterCreate",id:"onaftercreate",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"onAfterDelete",id:"onafterdelete",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"onBeforeCancel",id:"onbeforecancel",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"onBeforeDelete",id:"onbeforedelete",level:3},{value:"Defined in",id:"defined-in-8",level:4}],s={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules/components"},"components"),".Createable"),(0,r.kt)("p",null,"Whether this component supports create and destroy operations. This generally\napplies for components that work with instances, such as clipping planes or\ndimensions."),(0,r.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/classes/components.LengthMeasurement"},(0,r.kt)("inlineCode",{parentName:"a"},"LengthMeasurement"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/classes/components.SimpleClipper"},(0,r.kt)("inlineCode",{parentName:"a"},"SimpleClipper")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"cancelcreation"},"cancelCreation"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"cancelCreation"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Cancels the creation process of the component, going back to the state\nbefore starting to create."),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,"temp/components/base-types/base-types.ts:153"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"create"},"create"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"create"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Creates a new instance of an element (e.g. a new Dimension)."),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,"temp/components/base-types/base-types.ts:135"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"delete"},"delete"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"delete"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Deletes an existing instance of an element (e.g. a Dimension)."),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,"temp/components/base-types/base-types.ts:162"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"endcreation"},"endCreation"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"endCreation"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Finish the creation process of the component, successfully creating an\ninstance of whatever the component creates."),(0,r.kt)("h5",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h5",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,"temp/components/base-types/base-types.ts:144"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onaftercancel"},"onAfterCancel"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"onAfterCancel"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Event"},(0,r.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("p",null,"Fired after calling ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.Createable#cancelcreation"},"cancelCreation"),"."),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,"temp/components/base-types/base-types.ts:156"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onaftercreate"},"onAfterCreate"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"onAfterCreate"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Event"},(0,r.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("p",null,"Fired after successfully calling ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.Createable#create"},"create")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,"temp/components/base-types/base-types.ts:138"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onafterdelete"},"onAfterDelete"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"onAfterDelete"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Event"},(0,r.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("p",null,"Fired after successfully calling ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.Createable#delete"},"()")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,"temp/components/base-types/base-types.ts:165"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onbeforecancel"},"onBeforeCancel"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"onBeforeCancel"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Event"},(0,r.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("p",null,"Fired before calling ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.Createable#cancelcreation"},"cancelCreation"),"."),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,"temp/components/base-types/base-types.ts:147"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onbeforedelete"},"onBeforeDelete"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"onBeforeDelete"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Event"},(0,r.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,r.kt)("p",null,"Fired before calling ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/components.Createable#delete"},"delete"),"."),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,"temp/components/base-types/base-types.ts:159"))}m.isMDXComponent=!0}}]);