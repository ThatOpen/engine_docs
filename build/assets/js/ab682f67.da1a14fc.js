"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[m]="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const s={id:"openbim_components.Mouse",title:"Class: Mouse",sidebar_label:"Mouse",custom_edit_url:null},i=void 0,a={unversionedId:"api/classes/openbim_components.Mouse",id:"api/classes/openbim_components.Mouse",title:"Class: Mouse",description:"openbim-components.Mouse",source:"@site/docs/api/classes/openbim_components.Mouse.md",sourceDirName:"api/classes",slug:"/api/classes/openbim_components.Mouse",permalink:"/api/classes/openbim_components.Mouse",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"openbim_components.Mouse",title:"Class: Mouse",sidebar_label:"Mouse",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"MaterialManager",permalink:"/api/classes/openbim_components.MaterialManager"},next:{title:"OrthoPerspectiveCamera",permalink:"/api/classes/openbim_components.OrthoPerspectiveCamera"}},p={},l=[{value:"Implements",id:"implements",level:2},{value:"Accessors",id:"accessors",level:2},{value:"position",id:"position",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose",id:"dispose",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/modules/openbim_components"},"openbim-components"),".Mouse"),(0,r.kt)("p",null,"A helper to easily get the real position of the mouse in the Three.js canvas\nto work with tools like the\n",(0,r.kt)("a",{parentName:"p",href:"https://threejs.org/docs/#api/en/core/Raycaster"},"raycaster"),", even if it has\nbeen transformed through CSS or doesn't occupy the whole screen."),(0,r.kt)("h2",{id:"implements"},"Implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/interfaces/openbim_components.Disposable"},(0,r.kt)("inlineCode",{parentName:"a"},"Disposable")))),(0,r.kt)("h2",{id:"accessors"},"Accessors"),(0,r.kt)("h3",{id:"position"},"position"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"position"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,r.kt)("p",null,"The real position of the mouse of the Three.js canvas."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Vector2")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/base-types/mouse.ts#L21"},"src/base-types/mouse.ts:21")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"dispose"},"dispose"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"dispose"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#dispose"},"Disposable.dispose")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable"},"Disposable"),".",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/openbim_components.Disposable#dispose"},"dispose")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ifcjs/components/blob/e46138a/src/base-types/mouse.ts#L31"},"src/base-types/mouse.ts:31")))}u.isMDXComponent=!0}}]);