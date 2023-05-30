"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={},l=void 0,s={unversionedId:"Tutorials/UIManager",id:"Tutorials/UIManager",title:"UIManager",description:"\ud83c\udf9b\ufe0f Making your user interactive",source:"@site/docs/Tutorials/UIManager.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/UIManager",permalink:"/docs/Tutorials/UIManager",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ToolsComponent",permalink:"/docs/Tutorials/ToolsComponent"}},i={},u=[{value:"\ud83c\udf9b\ufe0f Making your user interactive",id:"\ufe0f-making-your-user-interactive",level:3},{value:"\ud83c\udfa8 Adding styles",id:"-adding-styles",level:3},{value:"\ud83e\uddf0 Creating a toolbar",id:"-creating-a-toolbar",level:3},{value:"\ud83c\udfa2 Using existing UIs",id:"-using-existing-uis",level:3},{value:"\ud83d\udc68\u200d\ud83c\udfa8 Creating your own UIs",id:"-creating-your-own-uis",level:3},{value:"\ud83c\udf0d Preparing the scene",id:"-preparing-the-scene",level:3},{value:"\ud83c\udf32 Composing menus",id:"-composing-menus",level:3},{value:"\ud83d\udc01 Context menu",id:"-context-menu",level:3}],c={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\ufe0f-making-your-user-interactive"},"\ud83c\udf9b\ufe0f Making your user interactive"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"One of the most important things about making a BIM app is to give the user the ability to interact with the\nfunctionalities you are creating \ud83d\ude80. The catch is you need to create a decent user interface so your end-user\nis able to interact in an easy and intuitive way. While creating a simple set of buttons is not particularly\ndifficult, we all agree is time-consuming \u23f1\ufe0f. This is where ",(0,a.kt)("inlineCode",{parentName:"p"},"UI Components")," come to the rescue!"),(0,a.kt)("admonition",{title:"Components, but for UI",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("a",{parentName:"p",href:"../api/interfaces/components.UIComponent"},"UI Components")," are similar to the rest of the components of the library.\nThe only difference is that their mission is to display an UI in HTML structures, including buttons, toolbars, menus,\nwindows, etc.")),(0,a.kt)("h3",{id:"-adding-styles"},"\ud83c\udfa8 Adding styles"),(0,a.kt)("p",null,"The first step is to get the CSS file with the default styles. You can get it from .................."),(0,a.kt)("h3",{id:"-creating-a-toolbar"},"\ud83e\uddf0 Creating a toolbar"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We need buttons to allow the user to interact with our viewer. But even before that, we need a place to put them: this\nplace is called a ",(0,a.kt)("inlineCode",{parentName:"p"},"Toolbar"),". Creating and adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"Toolbar")," to the viewer is as simple as this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const mainToolbar = new OBC.Toolbar(components, { name: 'Main Toolbar', position: 'bottom' });\ncomponents.ui.addToolbar(mainToolbar);\n")),(0,a.kt)("p",null,"By default, the toolbar is added to the bottom \ud83d\udc47 of the viewer container, so you technically don't need to type\n",(0,a.kt)("inlineCode",{parentName:"p"},'position: "bootom"')," in the options argument of your toolbar, but we just did it so that you know you can change\nthe toolbar position to either top, right, bottom or left."),(0,a.kt)("admonition",{title:"What about more complex layouts?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can create multiple toolbars in the same position, and the component just takes care about\nstacking all toolbars nice and neat \ud83e\udd2f.")),(0,a.kt)("h3",{id:"-using-existing-uis"},"\ud83c\udfa2 Using existing UIs"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"If you are using components from this library or from the marketplace, you won't need to create any UI: components\nusually include ready-to-use menus so that you can add them to your app in seconds. These components implement the\n",(0,a.kt)("a",{parentName:"p",href:"../api/interfaces/components.UI"},"UI Interface"),". Let's see them in action! \ud83d\udc47"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"")),(0,a.kt)("h3",{id:"-creating-your-own-uis"},"\ud83d\udc68\u200d\ud83c\udfa8 Creating your own UIs"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Of course, UI Components can also be used stand-alone, either to build your own components or to add menus to your\napp very fast! Let's start with a simple one: a Button Component that sends an alert message. \ud83c\udf7c  Button components\ncan only be added inside a toolbar. To do so, we can simply add the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const alertButton = new OBC.Button(components, { materialIconName: 'info' });\nmainToolbar.addButton(alertButton);\nalertButton.onclick = () => {\nalert('I\\'ve been clicked!');\n}\n")),(0,a.kt)("admonition",{title:"Where do these cool icons come from?",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"We are fetching the icons from\n",(0,a.kt)("a",{parentName:"p",href:"https://fonts.google.com/icons?selected=Material+Symbols+Outlined:home:FILL@0;wght@400;GRAD@0;opsz@48"},"material icons"),",\na very popular icon repository. You can simply pass the name of the icon in ",(0,a.kt)("inlineCode",{parentName:"p"},"materialIconName")," and the button will\ndisplay it! \ud83e\udde8")),(0,a.kt)("h3",{id:"-preparing-the-scene"},"\ud83c\udf0d Preparing the scene"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Of course, this UI is not very exciting, because it only adds a single button that throws an alert. But we can\ndo much more with UI components. Let's build a menu that creates and deletes geometry in our scene! We will make\na simple tool that creates and delete boxes from the scene. First, we'll need to define basic information of the\nboxes. We will also create a super simple function to get a random number within a given limit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const boxes = [];\nconst boxGeometry = new THREE.BoxGeometry();\nconst boxMaterial = new THREE.MeshLambertMaterial({ color: 'red' });\n")),(0,a.kt)("p",null,"\ud83d\udd22 Next, let's define some simple functions. To create a random number:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function getRandomNumber(limit) {\nreturn Math.random() * limit;\n}\n")),(0,a.kt)("p",null,"\u2705\ud83d\udce6 To delete a box from the scene:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function createBox() {\nconst mesh = new THREE.Mesh(boxGeometry, boxMaterial);\nscene.add(mesh);\nmesh.position.x = getRandomNumber(10);\nmesh.position.y = getRandomNumber(10);\nmesh.position.z = getRandomNumber(10);\nboxes.push(mesh);\n}\n")),(0,a.kt)("p",null,"\u274e\ud83d\udce6 To delete a box from the scene:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function deleteBox() {\nif(!boxes.length) return;\nconst box = boxes.pop();\nbox.removeFromParent();\n}\n")),(0,a.kt)("p",null,"\u274e\ud83d\udce6\ud83d\udce6\ud83d\udce6 To delete all existing boxes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function deleteAllBoxes() {\nconst count = boxes.length;\nfor(let i = 0; i < count; i++) {\ndeleteBox();\n}\n}\n")),(0,a.kt)("p",null,"\ud83d\udd04\ud83d\udce6\ud83d\udce6\ud83d\udce6 And to animate all the boxes, so that our scene is more interesting:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function animateBoxes() {\nconst oneDegree = Math.PI / 180;\nfor(const box of boxes) {\nbox.rotation.x += oneDegree;\nbox.rotation.y += oneDegree;\nbox.rotation.z += oneDegree;\n}\n}\ncomponents.renderer.beforeUpdate.on(animateBoxes);\n")),(0,a.kt)("h3",{id:"-composing-menus"},"\ud83c\udf32 Composing menus"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Buttons can be nested to build complex menus! For example, let's say that we want 3 buttons that add a box, delete a\nbox and delete all boxes respectively. We want to organize these menus together, so let's start by creating a button\nthat will contain the rest:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const cubeTools = new OBC.Button(components, {\nmaterialIconName: 'widgets'\n});\nmainToolbar.addButton(cubeTools);\n")),(0,a.kt)("p",null,"Let's start with the button to create boxes. This buttons needs a couple of extra things:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," so that it displays the text."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"closeOnClick: false")," so that the menu doesn't close after being clicked"),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("inlineCode",{parentName:"li"},"onclick")," event so that the function ",(0,a.kt)("inlineCode",{parentName:"li"},"createBox")," is triggered after pressing the button.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const createCubeButton = new OBC.Button(components, {\nmaterialIconName: 'add_box',\nname: 'Create box',\ncloseOnClick: false\n});\ncreateCubeButton.onclick = () => createBox();\ncubeTools.addButton(createCubeButton);\n")),(0,a.kt)("p",null,'Now, let\'s go with the "delete single" and "delete all buttons" buttons. Both are related, so we will group them\ntogether (yes, multiple-level nesting is allowed!). So first, let\'s create the parent button:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const deleteCubeButtons = new OBC.Button(components, {\nmaterialIconName: 'disabled_by_default',\nname: 'Delete box'\n});\ncubeTools.addButton(deleteCubeButtons);\n")),(0,a.kt)("p",null,'Next, the "delete single" button:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const deleteSingleCubeButton = new OBC.Button(components, {\nmaterialIconName: 'disabled_by_default',\nname: 'Single',\ncloseOnClick: false\n});\ndeleteSingleCubeButton.onclick = () => deleteBox();\ndeleteCubeButtons.addButton(deleteSingleCubeButton);\n")),(0,a.kt)("p",null,'And finally the "delete all" button:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const deleteAllCubesButton = new OBC.Button(components, {\nmaterialIconName: 'disabled_by_default',\nname: 'All'\n});\ndeleteAllCubesButton.onclick = () => deleteAllBoxes();\ndeleteCubeButtons.addButton(deleteAllCubesButton);\n")),(0,a.kt)("p",null,"And this is it! Easy, right? You can now create add menus to your components and easily share them with other\nBIM software developers!"),(0,a.kt)("h3",{id:"-context-menu"},"\ud83d\udc01 Context menu"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"There's a special menu that is used in menu BIM applications: the context menu! You know, that menu that shows up\nwhen you right-click somewhere. Don't worry, this is also supported by ",(0,a.kt)("inlineCode",{parentName:"p"},"UI Components"),"! The\n",(0,a.kt)("a",{parentName:"p",href:"../api/classes/components.UIManager"},"UI Manager")," has a default Toolbar that is already set up as a context menu.\nAll the nesting logic mentioned before works here as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const contextDeleteButtons = new OBC.Button(components, {\nmaterialIconName: 'widgets',\nname: \"Delete\"\n});\nconst deleteAllCubesContextButton = new OBC.Button(components, {\nmaterialIconName: 'widgets',\nname: \"All cubes\"\n});\ndeleteAllCubesContextButton.onclick = () => deleteAllBoxes();\ncontextDeleteButtons.addButton(deleteAllCubesContextButton);\ncomponents.ui.contextMenu.addButton(contextDeleteButtons);\n")),(0,a.kt)("p",null,"And this is it! \ud83e\udd73 Cool, right? Now you can easily use the UI elements in the components of this library and the\nmarketplace, as well as create your own custom menus in minutes. \ud83d\udcaa\ud83c\udfa8 You are now one step closer to create your\nBIM applications from scratch. \ud83d\udd25"),(0,a.kt)("iframe",{src:"https://ifcjs.github.io/components/src/ui/UIManager/index.html"}))}p.isMDXComponent=!0}}]);