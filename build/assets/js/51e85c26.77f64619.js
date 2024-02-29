"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4345],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(t),k=i,u=d["".concat(s,".").concat(k)]||d[k]||c[k]||r;return t?a.createElement(u,o(o({ref:n},m),{},{components:t})):a.createElement(u,o({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=k;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5563:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=t(7462),i=(t(7294),t(3905));const r={id:"openbim_components.Components",title:"Class: Components",sidebar_label:"Components",custom_edit_url:null},o=void 0,p={unversionedId:"api/classes/openbim_components.Components",id:"api/classes/openbim_components.Components",title:"Class: Components",description:"openbim-components.Components",source:"@site/docs/api/classes/openbim_components.Components.md",sourceDirName:"api/classes",slug:"/api/classes/openbim_components.Components",permalink:"/api/classes/openbim_components.Components",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"openbim_components.Components",title:"Class: Components",sidebar_label:"Components",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Component",permalink:"/api/classes/openbim_components.Component"},next:{title:"CubeMap",permalink:"/api/classes/openbim_components.CubeMap"}},s={},l=[{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"meshes",id:"meshes",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"onDisposed",id:"ondisposed",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"onInitialized",id:"oninitialized",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"tools",id:"tools",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"uiEnabled",id:"uienabled",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Accessors",id:"accessors",level:2},{value:"camera",id:"camera",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"raycaster",id:"raycaster",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"renderer",id:"renderer",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"scene",id:"scene",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"ui",id:"ui",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose",id:"dispose",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"init",id:"init",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-15",level:4}],m={toc:l},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/modules/openbim_components"},"openbim-components"),".Components"),(0,i.kt)("p",null,"The entry point of Open BIM Components.\nIt contains the basic items to create a BIM 3D scene based on Three.js, as\nwell as all the tools provided by this library. It also manages the update\nloop of everything. Each instance has to be initialized with ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Components#init"},"init"),"."),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/interfaces/openbim_components.Disposable"},(0,i.kt)("inlineCode",{parentName:"a"},"Disposable")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"meshes"},"meshes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"meshes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Mesh"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"NormalBufferAttributes"),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Material"),"[], ",(0,i.kt)("inlineCode",{parentName:"p"},"Object3DEventMap"),">",">"),(0,i.kt)("p",null,"All the loaded ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/objects/Mesh"},"meshes"),".\nThis includes fragments, 3D scans, etc."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/Components/index.ts#L29"},"temp/engine_components/src/core/Components/index.ts:29")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ondisposed"},"onDisposed"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"onDisposed"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,i.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#ondisposed"},"Disposable.onDisposed")),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),".",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#ondisposed"},"onDisposed")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/Components/index.ts#L38"},"temp/engine_components/src/core/Components/index.ts:38")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"oninitialized"},"onInitialized"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"onInitialized"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Event"},(0,i.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Components"},(0,i.kt)("inlineCode",{parentName:"a"},"Components")),">"),(0,i.kt)("p",null,"Event that fires when this instance has been fully initialized and is\nready to work (scene, camera and renderer are ready)."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/Components/index.ts#L35"},"temp/engine_components/src/core/Components/index.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tools"},"tools"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"tools"),": ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.ToolComponent"},(0,i.kt)("inlineCode",{parentName:"a"},"ToolComponent"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.ToolComponent"},"ToolComponent")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/Components/index.ts#L23"},"temp/engine_components/src/core/Components/index.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"uienabled"},"uiEnabled"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"uiEnabled"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("p",null,"Whether UI components should be created."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/Components/index.ts#L45"},"temp/engine_components/src/core/Components/index.ts:45")),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"camera"},"camera"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"camera"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},(0,i.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Camera"),">"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/cameras/Camera"},"Three.js camera"),"\nthat determines the point of view of the renderer."),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},(0,i.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Camera"),">"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/Components/index.ts#L103"},"temp/engine_components/src/core/Components/index.ts:103")),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," ",(0,i.kt)("strong",{parentName:"p"},"camera"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"camera"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"This needs to be initialized before calling init()."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"camera")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/api/classes/openbim_components.Component"},(0,i.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Camera"),">")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/Components/index.ts#L113"},"temp/engine_components/src/core/Components/index.ts:113")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"raycaster"},"raycaster"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"raycaster"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseRaycaster")),(0,i.kt)("p",null,"A component using the ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/core/Raycaster"},"Three.js raycaster"),"\nused primarily to pick 3D items with the mouse or a touch screen."),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"BaseRaycaster")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/Components/index.ts#L121"},"temp/engine_components/src/core/Components/index.ts:121")),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," ",(0,i.kt)("strong",{parentName:"p"},"raycaster"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"raycaster"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Although this is not necessary to make the library work, it's necessary\nto initialize this if any component that needs a raycaster is used."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"raycaster")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"BaseRaycaster"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/Components/index.ts#L132"},"temp/engine_components/src/core/Components/index.ts:132")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"renderer"},"renderer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"renderer"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.BaseRenderer"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRenderer"))),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/renderers/WebGLRenderer"},"Three.js renderer"),"\nused to render the scene. This library provides multiple renderer\ncomponents with pre-made functionality (e.g. rendering of 2D CSS elements."),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.BaseRenderer"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRenderer"))),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/Components/index.ts#L67"},"temp/engine_components/src/core/Components/index.ts:67")),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," ",(0,i.kt)("strong",{parentName:"p"},"renderer"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"renderer"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"This needs to be initialized before calling init()."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"renderer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/api/classes/openbim_components.BaseRenderer"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRenderer")))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/Components/index.ts#L77"},"temp/engine_components/src/core/Components/index.ts:77")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scene"},"scene"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"scene"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},(0,i.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Scene"),">"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/scenes/Scene"},"Three.js scene"),"\nwhere all the rendered items are placed."),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Component"},(0,i.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Scene"),">"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/Components/index.ts#L85"},"temp/engine_components/src/core/Components/index.ts:85")),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," ",(0,i.kt)("strong",{parentName:"p"},"scene"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"scene"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"This needs to be initialized before calling init()."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"scene")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/api/classes/openbim_components.Component"},(0,i.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Scene"),">")))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/Components/index.ts#L95"},"temp/engine_components/src/core/Components/index.ts:95")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ui"},"ui"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"ui"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.UIManager"},(0,i.kt)("inlineCode",{parentName:"a"},"UIManager"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.UIManager"},"UIManager")),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.UIManager"},(0,i.kt)("inlineCode",{parentName:"a"},"UIManager"))),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/Components/index.ts#L55"},"temp/engine_components/src/core/Components/index.ts:55")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"dispose"},"dispose"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Disposes the memory of all the components and tools of this instance of\nthe library. A memory leak will be created if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An instance of the library ends up out of scope and this function isn't\ncalled. This is especially relevant in Single Page Applications (React,\nAngular, Vue, etc).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Any of the objects of this instance (meshes, geometries, etc) is\nreferenced by a reference type (object or array)."))),(0,i.kt)("p",null,"You can learn more about how Three.js handles memory leaks\n",(0,i.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects"},"here"),"."),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),".",(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#dispose"},"dispose")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/Components/index.ts#L174"},"temp/engine_components/src/core/Components/index.ts:174")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"init"},"init"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"init"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Initializes the library. It should be called at the start of the app after\ninitializing the scene, the renderer and the\ncamera. Additionally, if any component that need a raycaster is\nused, the ",(0,i.kt)("a",{parentName:"p",href:"/api/classes/openbim_components.Components#raycaster"},"raycaster")," will need to be initialized."),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/Components/index.ts#L148"},"temp/engine_components/src/core/Components/index.ts:148")))}c.isMDXComponent=!0}}]);