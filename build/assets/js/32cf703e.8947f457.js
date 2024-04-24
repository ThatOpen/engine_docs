"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3053],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=o,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7967:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},l=void 0,c={unversionedId:"Tutorials/IfcPropertiesManager",id:"Tutorials/IfcPropertiesManager",title:"IfcPropertiesManager",description:"\u270d Edit properties at will!",source:"@site/docs/Tutorials/IfcPropertiesManager.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/IfcPropertiesManager",permalink:"/Tutorials/IfcPropertiesManager",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IfcPropertiesFinder",permalink:"/Tutorials/IfcPropertiesFinder"},next:{title:"IfcPropertiesProcessor",permalink:"/Tutorials/IfcPropertiesProcessor"}},p={},u=[{value:"\u270d Edit properties at will!",id:"-edit-properties-at-will",level:3},{value:"\u2728 Setting up highlighting and selecting",id:"-setting-up-highlighting-and-selecting",level:3}],d={toc:u},g="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(g,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"-edit-properties-at-will"},"\u270d Edit properties at will!"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Viewing IFC files fast is great, but often the data inside\nthem is not correct or complete. Luckily, we can now directly\nedit and add data super easily! First, let's start by adding\nour classic fragment model:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const fragments = new OBC.FragmentManager(components);\nconst file = await fetch("../../../resources/small.frag");\nconst dataBlob = await file.arrayBuffer();\nconst buffer = new Uint8Array(dataBlob);\nconst model = await fragments.load(buffer);\nconst properties = await fetch("../../../resources/small.json");\nconst props = await properties.json();\nmodel.setLocalProperties(props);\n')),(0,a.kt)("p",null,"Then, we'll instance the tool that we need for editing properties:\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"IfcPropertiesManager"),"! It's designed as an extension of the\n",(0,a.kt)("inlineCode",{parentName:"p"},"IfcPropertiesProcessor"),", so if you haven't seen that tutorial\nyet, check it out before reading further."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const propsProcessor = new OBC.IfcPropertiesProcessor(components);\nconst propsManager = new OBC.IfcPropertiesManager(components);\npropsProcessor.propertiesManager = propsManager;\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IfcPropertiesManager")," can edit IFCs and export new IFC models.\nDespite you can do it using the methods in the tool instance,\nlet's process the model using the ",(0,a.kt)("inlineCode",{parentName:"p"},"IfcPropertiesProcessor")," to use\nthe built-in UI, because is easier!\n:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'propsProcessor.process(model);\npropsManager.onRequestFile.add(async () => {\nconst fetched = await fetch("../../../resources/small.ifc");\nconst buffer = await fetched.arrayBuffer()\nconst ifc = await propsManager.saveToIfc(model, new Uint8Array(buffer));\nconst a = document.createElement("a");\nconst url = URL.createObjectURL(new Blob([ifc]));\na.href = url;\na.download = model.name;\na.click();\nURL.revokeObjectURL(url);\n})\n')),(0,a.kt)("h3",{id:"-setting-up-highlighting-and-selecting"},"\u2728 Setting up highlighting and selecting"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now, we will set up highlighting logic to make our app more\ninteresting. It's done in a similar way to other tutorials,\nso wander around the docs if you haven't already!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const highlighter = new OBC.FragmentHighlighter(components, fragments);\nhighlighter.setup();\ncomponents.renderer.postproduction.customEffects.outlineEnabled = true;\nhighlighter.outlinesEnabled = true;\nconst highlighterEvents = highlighter.events;\nhighlighterEvents.select.onClear.add(() => {\npropsProcessor.cleanPropertiesList();\n});\n")),(0,a.kt)("p",null,"Now, we will configure the highlighter so that each time that\nwe cick on the model, the properties menu is updated to display\nits properties, just like we did in the ",(0,a.kt)("inlineCode",{parentName:"p"},"IfcPropertiesProcessor"),"\ntutorial:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"highlighterEvents.select.onHighlight.add(\n(selection) => {\nconst fragmentID = Object.keys(selection)[0];\nconst expressID = [...selection[fragmentID]][0];\nlet model\nfor (const group of fragments.groups) {\nfor(const [_key, value] of group.keyFragments) {\nif(value === fragmentID) {\nmodel = group;\nbreak;\n}\n}\n}\nif(model) {\npropsProcessor.renderProperties(model, expressID);\n}\n}\n);\n")),(0,a.kt)("p",null,"Finally, we will add the UI to the app by creating a simple\ntoolbar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const mainToolbar = new OBC.Toolbar(components);\ncomponents.ui.addToolbar(mainToolbar);\nmainToolbar.addChild(propsProcessor.uiElement.get("main"));\n')),(0,a.kt)("p",null,"Great job! Now you know how to support IFC property editing and\nexport in your apps. Check out the rest of the tutorials of\nthese docs for other cool BIM features."),(0,a.kt)("iframe",{src:"https://thatopen.github.io/engine_components/src/ifc/IfcPropertiesManager/index.html"}))}f.isMDXComponent=!0}}]);