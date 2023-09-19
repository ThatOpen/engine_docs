"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1284],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(t),k=r,u=m["".concat(s,".").concat(k)]||m[k]||c[k]||i;return t?a.createElement(u,l(l({ref:n},d),{},{components:t})):a.createElement(u,l({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=k;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9014:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={id:"components.Components",title:"Class: Components",sidebar_label:"Components",custom_edit_url:null},l=void 0,o={unversionedId:"api/classes/components.Components",id:"api/classes/components.Components",title:"Class: Components",description:"components.Components",source:"@site/docs/api/classes/components.Components.md",sourceDirName:"api/classes",slug:"/api/classes/components.Components",permalink:"/docs/api/classes/components.Components",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"components.Components",title:"Class: Components",sidebar_label:"Components",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Component",permalink:"/docs/api/classes/components.Component"},next:{title:"Disposer",permalink:"/docs/api/classes/components.Disposer"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"meshes",id:"meshes",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"onInitialized",id:"oninitialized",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"tools",id:"tools",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"ui",id:"ui",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Accessors",id:"accessors",level:2},{value:"camera",id:"camera",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"raycaster",id:"raycaster",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"renderer",id:"renderer",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"scene",id:"scene",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose",id:"dispose",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"init",id:"init",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-13",level:4}],d={toc:p},m="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules/components"},"components"),".Components"),(0,r.kt)("p",null,"The entry point of Open BIM Components.\nIt contains the basic items to create a BIM 3D scene based on Three.js, as\nwell as all the tools provided by this library. It also manages the update\nloop of everything. Each instance has to be initialized with ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Components#init"},"init"),"."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"meshes"},"meshes"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"meshes"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"BufferGeometry"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"NormalBufferAttributes"),">",", ",(0,r.kt)("inlineCode",{parentName:"p"},"Material")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Material"),"[]",">","[] = ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")),(0,r.kt)("p",null,"All the loaded ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/objects/Mesh"},"meshes"),".\nThis includes fragments, 3D scans, etc."),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,"temp/components/core/Components/index.ts:32"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"oninitialized"},"onInitialized"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"onInitialized"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Event"},(0,r.kt)("inlineCode",{parentName:"a"},"Event")),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Components"},(0,r.kt)("inlineCode",{parentName:"a"},"Components")),">"),(0,r.kt)("p",null,"Event that fires when this instance has been fully initialized and is\nready to work (scene, camera and renderer are ready)."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,"temp/components/core/Components/index.ts:38"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tools"},"tools"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"tools"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.ToolComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"ToolComponent"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.ToolComponent"},"ToolComponent")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,"temp/components/core/Components/index.ts:23"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ui"},"ui"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"ui"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.UIManager"},(0,r.kt)("inlineCode",{parentName:"a"},"UIManager"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.UIManager"},"UIManager")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,"temp/components/core/Components/index.ts:26"),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"camera"},"camera"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"camera"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Component"},(0,r.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Camera"),">"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/cameras/Camera"},"Three.js camera"),"\nthat determines the point of view of the renderer."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Component"},(0,r.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Camera"),">"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,"temp/components/core/Components/index.ts:88"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," ",(0,r.kt)("strong",{parentName:"p"},"camera"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"camera"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"This needs to be initialized before calling init()."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"camera")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/classes/components.Component"},(0,r.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Camera"),">")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,"temp/components/core/Components/index.ts:98"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"raycaster"},"raycaster"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"raycaster"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseRaycaster")),(0,r.kt)("p",null,"A component using the ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/core/Raycaster"},"Three.js raycaster"),"\nused primarily to pick 3D items with the mouse or a touch screen."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BaseRaycaster")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,"temp/components/core/Components/index.ts:106"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," ",(0,r.kt)("strong",{parentName:"p"},"raycaster"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"raycaster"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Although this is not necessary to make the library work, it's necessary\nto initialize this if any component that needs a raycaster is used."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"raycaster")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BaseRaycaster"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,"temp/components/core/Components/index.ts:117"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"renderer"},"renderer"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"renderer"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.BaseRenderer"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRenderer"))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/renderers/WebGLRenderer"},"Three.js renderer"),"\nused to render the scene. This library provides multiple renderer\ncomponents with pre-made functionality (e.g. rendering of 2D CSS elements."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.BaseRenderer"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRenderer"))),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,"temp/components/core/Components/index.ts:52"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," ",(0,r.kt)("strong",{parentName:"p"},"renderer"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"renderer"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"This needs to be initialized before calling init()."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"renderer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/classes/components.BaseRenderer"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRenderer")))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,"temp/components/core/Components/index.ts:62"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scene"},"scene"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"scene"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Component"},(0,r.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Scene"),">"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/scenes/Scene"},"Three.js scene"),"\nwhere all the rendered items are placed."),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Component"},(0,r.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Scene"),">"),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,"temp/components/core/Components/index.ts:70"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," ",(0,r.kt)("strong",{parentName:"p"},"scene"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"scene"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"This needs to be initialized before calling init()."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"scene")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/classes/components.Component"},(0,r.kt)("inlineCode",{parentName:"a"},"Component")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Scene"),">")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,"temp/components/core/Components/index.ts:80"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"dispose"},"dispose"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Disposes the memory of all the components and tools of this instance of\nthe library. A memory leak will be created if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An instance of the library ends up out of scope and this function isn't\ncalled. This is especially relevant in Single Page Applications (React,\nAngular, Vue, etc).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Any of the objects of this instance (meshes, geometries, etc) is\nreferenced by a reference type (object or array)."))),(0,r.kt)("p",null,"You can learn more about how Three.js handles memory leaks\n",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects"},"here"),"."),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,"temp/components/core/Components/index.ts:157"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"init"},"init"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"init"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Initializes the library. It should be called at the start of the app after\ninitializing the scene, the renderer and the\ncamera. Additionally, if any component that need a raycaster is\nused, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/classes/components.Components#raycaster"},"raycaster")," will need to be initialized."),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,"temp/components/core/Components/index.ts:134"))}c.isMDXComponent=!0}}]);