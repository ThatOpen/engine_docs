"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1361],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||s;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3652:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={},a=void 0,i={unversionedId:"Tutorials/IfcPropertiesProcessor",id:"Tutorials/IfcPropertiesProcessor",title:"IfcPropertiesProcessor",description:"\ud83e\uddf6 View all IFC properties FAST",source:"@site/docs/Tutorials/IfcPropertiesProcessor.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/IfcPropertiesProcessor",permalink:"/Tutorials/IfcPropertiesProcessor",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IfcPropertiesManager",permalink:"/Tutorials/IfcPropertiesManager"},next:{title:"LengthMeasurement",permalink:"/Tutorials/LengthMeasurement"}},l={},c=[{value:"\ud83e\uddf6 View all IFC properties FAST",id:"-view-all-ifc-properties-fast",level:3}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"-view-all-ifc-properties-fast"},"\ud83e\uddf6 View all IFC properties FAST"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"IFC elements have tons of data, and it's often indirectly\nbound to the elements. Luckily, getting all the data for any\nIFC element is trivial with these libraries. Let\xb4s see how! First,\nas usually, we'll load our classic fragment model and set up\nthe fragment highlighter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const fragments = new OBC.FragmentManager(components);\nconst file = await fetch("../../../resources/small.frag");\nconst dataBlob = await file.arrayBuffer();\nconst buffer = new Uint8Array(dataBlob);\nconst model = await fragments.load(buffer);\nconst properties = await fetch("../../../resources/small.json");\nmodel.properties = await properties.json();\nconst highlighter = new OBC.FragmentHighlighter(components, fragments);\nhighlighter.setup();\ncomponents.renderer.postproduction.customEffects.outlineEnabled = true;\nhighlighter.outlinesEnabled = true;\n')),(0,o.kt)("p",null,"Next, we will create a new instance of the component to navigate\nIFC properties: the ",(0,o.kt)("inlineCode",{parentName:"p"},"IfcPropertiesProcessor"),". We will also\nmake its built-in floating window visible by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const propsProcessor = new OBC.IfcPropertiesProcessor(components)\npropsProcessor.uiElement.get("propertiesWindow").visible = true\n')),(0,o.kt)("p",null,"Now, to view the properties of a model we need to process it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"propsProcessor.process(model);\n")),(0,o.kt)("p",null,"And now, we will bind the highlihgter logic to the properties\nprocessor, so that each time that we click on an element, its\nproperties will be shown:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const highlighterEvents = highlighter.events;\nhighlighterEvents.select.onClear.add(() => {\npropsProcessor.cleanPropertiesList();\n});\nhighlighterEvents.select.onHighlight.add(\n(selection) => {\nconst fragmentID = Object.keys(selection)[0];\nconst expressID = Number([...selection[fragmentID]][0]);\nlet model\nfor (const group of fragments.groups) {\nconst fragmentFound = Object.values(group.keyFragments).find(id => id === fragmentID)\nif (fragmentFound) model = group;\n}\npropsProcessor.renderProperties(model, expressID);\n}\n);\n")),(0,o.kt)("p",null,"Finally, we will add the main built-in button of the properties\nprocessor to a simple toolbar at the bottom of our app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const mainToolbar = new OBC.Toolbar(components);\ncomponents.ui.addToolbar(mainToolbar);\nmainToolbar.addChild(propsProcessor.uiElement.get("main"));\n')),(0,o.kt)("p",null,"This is it! Congratulations, now you can see and navigate\nthe properties of any IFC model you load in your apps. Now,\nlet's continue navigating these docs for more cool open BIM tools!"),(0,o.kt)("iframe",{src:"https://ifcjs.github.io/components/src/ifc/IfcPropertiesProcessor/index.html"}))}f.isMDXComponent=!0}}]);