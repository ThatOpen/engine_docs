"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"Tutorials/SimpleRaycaster",id:"Tutorials/SimpleRaycaster",title:"SimpleRaycaster",description:"\ud83e\udd0f Touching things",source:"@site/docs/Tutorials/SimpleRaycaster.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/SimpleRaycaster",permalink:"/Tutorials/SimpleRaycaster",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SimpleClipper",permalink:"/Tutorials/SimpleClipper"},next:{title:"SimpleScene",permalink:"/Tutorials/SimpleScene"}},l={},c=[{value:"\ud83e\udd0f Touching things",id:"-touching-things",level:3},{value:"\ud83d\udd04 Spinning up the cubes",id:"-spinning-up-the-cubes",level:3},{value:"\u26a1 Casting rays around",id:"-casting-rays-around",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"-touching-things"},"\ud83e\udd0f Touching things"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In this tutorial, we'll learn to ",(0,a.kt)("strong",{parentName:"p"},"interact with our scene"),". This will work both for a mouse \ud83d\udc00 and for the touch\nscreen of a phone \ud83d\udcf1 or tablet \ud83c\udf4e. This might sound daunting, but it's actually very easy! Let's see ",(0,a.kt)("strong",{parentName:"p"},"how to do that\nin 5 minutes"),"."),(0,a.kt)("admonition",{title:"First, let's set up a simple scene!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you haven't started there, check out ",(0,a.kt)("a",{parentName:"p",href:"/Tutorials/SimpleScene"},"that tutorial first"),"!")),(0,a.kt)("p",null,"Next, we will add some objects to pick. We need 5 meshes that can share the same cube geometry\n(as all the geometry of the cubes is the same)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const cubeMaterial = new THREE.MeshStandardMaterial({color: '#6528D7'});\nconst greenMaterial = new THREE.MeshStandardMaterial({color: '#BCF124'});\nconst boxGeometry = new THREE.BoxGeometry(3, 3, 3);\nconst cube1 = new THREE.Mesh(boxGeometry, cubeMaterial);\nconst cube2 = new THREE.Mesh(boxGeometry, cubeMaterial);\nconst cube3 = new THREE.Mesh(boxGeometry, cubeMaterial);\nscene.add(cube1, cube2, cube3);\nconst cubes = [cube1, cube2, cube3];\n")),(0,a.kt)("p",null,"Let's give the cubes a different position so that we can see all of them in the scene:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"cube2.position.x = 5;\ncube3.position.x = -5;\n")),(0,a.kt)("h3",{id:"-spinning-up-the-cubes"},"\ud83d\udd04 Spinning up the cubes"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"To spice things up a little, let's create an animation loop that rotates the cubes each frame. You can do this super\neasily by creating a function and adding it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeUpdate")," event of the ",(0,a.kt)("strong",{parentName:"p"},"RendererComponent")," inside\n",(0,a.kt)("strong",{parentName:"p"},"Components")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"on()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const oneDegree = Math.PI / 180;\nfunction rotateCubes() {\ncube1.rotation.x += oneDegree;\ncube1.rotation.y += oneDegree;\ncube2.rotation.x += oneDegree;\ncube2.rotation.z += oneDegree;\ncube3.rotation.y += oneDegree;\ncube3.rotation.z += oneDegree;\n}\ncomponents.renderer.onBeforeUpdate.add(rotateCubes);\n")),(0,a.kt)("admonition",{title:"Turning off animations",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can turn off animations simply by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"off()")," method.\n",(0,a.kt)("a",{parentName:"p",href:"../api/classes/components.Event"},"This works for any event"),"\nin the library! \u231a")),(0,a.kt)("h3",{id:"-casting-rays-around"},"\u26a1 Casting rays around"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Finally, we will use the raycaster. This is very easy using the\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../api/classes/components.SimpleRaycaster"},"raycaster component")),", which solves this for all screen sizes.\nWe will create an event that fires every time that the user moves the mouse. \ud83d\udc47"),(0,a.kt)("admonition",{title:"How does it really work?",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"We will simply reset the material of the previous selection (if it exists), and then apply the green material to the\nfound object (if any). This might sound like a lot, but it's actually very little code. \ud83d\ude09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let previousSelection;\nwindow.onmousemove = () => {\nconst result = components.raycaster.castRay(cubes);\nif (previousSelection) {\npreviousSelection.material = cubeMaterial;\n}\nif (!result) {\nreturn;\n}\nresult.object.material = greenMaterial;\npreviousSelection = result.object;\n}\n")),(0,a.kt)("p",null,"Great job! \ud83c\udf89 Now you know how to pick geometry in your 3D scene using a\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../api/classes/components.SimpleRaycaster"},"raycaster component"))," component! \ud83d\udcaa You are now one step closer\nto build your own BIM software. Let's keep it up and check out another tutorials!"),(0,a.kt)("iframe",{src:"https://ifcjs.github.io/components/src/core/SimpleRaycaster/index.html"}))}m.isMDXComponent=!0}}]);