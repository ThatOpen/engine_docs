"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},s=void 0,c={unversionedId:"Tutorials/Components/Front/IfcStreamer",id:"Tutorials/Components/Front/IfcStreamer",title:"IfcStreamer",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/Components/Front/IfcStreamer.mdx",sourceDirName:"Tutorials/Components/Front",slug:"/Tutorials/Components/Front/IfcStreamer",permalink:"/Tutorials/Components/Front/IfcStreamer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EdgesClipper",permalink:"/Tutorials/Components/Front/EdgesClipper"},next:{title:"LengthMeasurement",permalink:"/Tutorials/Components/Front/LengthMeasurement"}},m={},p=[],u={toc:p},d="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Source",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_components/blob/main/packages/front/src/fragments/IfcStreamer/example.ts"},"here"),".")),(0,a.kt)("p",null,"Now, streaming works by updating the scene depending on the user's perspective\nand getting the necessary geometries from the backend. A simple way to achieve\nthis is by updating the scene each time the user stops the camera:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'world.camera.controls.addEventListener("sleep", () => {\n  loader.culler.needsUpdate = true;\n});\n')),(0,a.kt)("p",null,"As you can imagine, downloading the geometries from the server each time can\ntake time, especially for heavier geometries. This is why the stream loader\nautomatically caches the files locally to get them much faster. This means that\nthe loading experience the first time might be a bit slower, but then later\nit will be much better. You can control this using the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCache")," property\nand clear the cache using the ",(0,a.kt)("inlineCode",{parentName:"p"},"clearCache()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"loader.useCache = true;\n\nasync function clearCache() {\n  await loader.clearCache();\n  window.location.reload();\n}\n")),(0,a.kt)("p",null,"You can also customize the loader through the ",(0,a.kt)("inlineCode",{parentName:"p"},"culler")," property:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Threshold determines how bit an object must be in the screen to stream it."),(0,a.kt)("li",{parentName:"ul"},"maxHiddenTime determines how long an object must be lost to remove it from the scene."),(0,a.kt)("li",{parentName:"ul"},"maxLostTime determines how long an object must be lost to remove it from memory.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"loader.culler.threshold = 10;\nloader.culler.maxHiddenTime = 1000;\nloader.culler.maxLostTime = 40000;\n")),(0,a.kt)("p",null,"This is it! Now you should be able to stream your own IFC models and open them anywhere,\nno matter how big they are! \ud83d\udcaa We will keep improving and making this API more powerful\nto handle any model on any device smoothly."),(0,a.kt)("iframe",{src:"https://thatopen.github.io/engine_components/examples/IfcStreamer"}))}h.isMDXComponent=!0}}]);