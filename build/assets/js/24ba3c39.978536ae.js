"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9922],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1797:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={},o=void 0,s={unversionedId:"Tutorials/FragmentPlans",id:"Tutorials/FragmentPlans",title:"FragmentPlans",description:"\ud83d\udcc3\ud83d\udcdc\ud83d\udcc4 Navigating our 3D world in 2D",source:"@site/docs/Tutorials/FragmentPlans.mdx",sourceDirName:"Tutorials",slug:"/Tutorials/FragmentPlans",permalink:"/docs/Tutorials/FragmentPlans",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FragmentManager",permalink:"/docs/Tutorials/FragmentManager"},next:{title:"FragmentTree",permalink:"/docs/Tutorials/FragmentTree"}},i={},c=[{value:"\ud83d\udcc3\ud83d\udcdc\ud83d\udcc4 Navigating our 3D world in 2D",id:"-navigating-our-3d-world-in-2d",level:3},{value:"\u2728 Styling our floorplans",id:"-styling-our-floorplans",level:3},{value:"\u26c4 Global white material",id:"-global-white-material",level:3},{value:"\ud83e\udd16 Generating the plans",id:"-generating-the-plans",level:3}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"-navigating-our-3d-world-in-2d"},"\ud83d\udcc3\ud83d\udcdc\ud83d\udcc4 Navigating our 3D world in 2D"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Before 3D existed, architects and engineers had to represent the\nbuilt reality in 2D drawings. We still use those 2D representations,\nand floor plans are the king of this 2D realm. Creating and\nnavigating floor plans is really easy! First, let's start an\ninstance of the culler (check out its tutorial if you haven't\nalready):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const culler = new OBC.ScreenCuller(components);\ncontainer.addEventListener('mouseup', () => culler.needsUpdate = true);\ncontainer.addEventListener('wheel', () => culler.needsUpdate = true);\n")),(0,r.kt)("p",null,"Next, let's load our classic fragment model and add it to the\nscene and to the culler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fragments = new OBC.FragmentManager(components);\nconst file = await fetch('../../../resources/small.frag');\nconst data = await file.arrayBuffer();\nconst buffer = new Uint8Array(data);\nconst model = await fragments.load(buffer);\nconst properties = await fetch('../../../resources/small.json');\nmodel.properties = await properties.json();\nfor(const fragment of model.items) {\nculler.add(fragment.mesh);\n}\nculler.needsUpdate = true;\n")),(0,r.kt)("h3",{id:"-styling-our-floorplans"},"\u2728 Styling our floorplans"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now we will decide how we want our floorplans to look like. To do\nthat, we will instantiate the ",(0,r.kt)("inlineCode",{parentName:"p"},"EdgesClipper")," and define two styles:\none for thick lines, and another one for thin lines:"),(0,r.kt)("admonition",{title:"Edges?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you haven't seen the tutorial of the edges clipper yet, check\nit out before continuing!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const clipper = new OBC.EdgesClipper(components, OBC.EdgesPlane);\nconst sectionMaterial = new THREE.LineBasicMaterial({color: 'black'});\nconst fillMaterial = new THREE.MeshBasicMaterial({color: 'gray', side: 2});\nconst fillOutline = new THREE.MeshBasicMaterial({color: 'black', side: 1, opacity: 0.5, transparent: true});\nclipper.styles.create(\"filled\", new Set(), sectionMaterial, fillMaterial, fillOutline);\nclipper.styles.create(\"projected\", new Set(), sectionMaterial);\nconst styles = clipper.styles.get();\n")),(0,r.kt)("p",null,"Don't forget to enable the outline effect or you won't see the\nclipping outline!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"postproduction.customEffects.outlineEnabled = true;\n")),(0,r.kt)("p",null,"We want to apply the styles depending on the category of each\nelement. Luckily for us, the ",(0,r.kt)("inlineCode",{parentName:"p"},"FragmentClassifier")," makes this\ntask a piece of cake:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const classifier = new OBC.FragmentClassifier(components);\nclassifier.byEntity(model);\nclassifier.byStorey(model);\nconst found = classifier.find({entities: ["IFCWALLSTANDARDCASE", "IFCWALL"]});\n')),(0,r.kt)("p",null,"Now we can assign each geometry to its corresponding style\nby using 2 simple loops:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"for (const fragID in found) {\nconst {mesh} = fragments.list[fragID];\nstyles.filled.fragments[fragID] = new Set(found[fragID]);\nstyles.filled.meshes.add(mesh);\n}\nconst meshes = [];\nfor (const fragment of model.items) {\nconst {mesh} = fragment;\nmeshes.push(mesh);\nstyles.projected.meshes.add(mesh);\n}\n")),(0,r.kt)("h3",{id:"-global-white-material"},"\u26c4 Global white material"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"As you might now, floorplans are usually white (as they were\nprinted on paper). We can achieve this same effect by using\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"MaterialManager"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const whiteColor = new THREE.Color("white");\nconst whiteMaterial = new THREE.MeshBasicMaterial({color: whiteColor});\nconst materialManager = new OBC.MaterialManager(components);\nmaterialManager.addMaterial("white", whiteMaterial);\nmaterialManager.addMeshes("white", meshes);\n')),(0,r.kt)("h3",{id:"-generating-the-plans"},"\ud83e\udd16 Generating the plans"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Creating the plans is super easy using the ",(0,r.kt)("inlineCode",{parentName:"p"},"FragmentPlans"),"\ntool. We can just use the ",(0,r.kt)("inlineCode",{parentName:"p"},"computeAllPlanViews")," and it will\nprocess everything automatically!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const plans = new OBC.FragmentPlans(components);\nawait plans.computeAllPlanViews(model);\n")),(0,r.kt)("p",null,"Let's also add some functionality to our floorplans. We will allow\nthe user to highlight and hide / show elements depending on their\nfloorplan. To do that, we can start by starting the ",(0,r.kt)("inlineCode",{parentName:"p"},"FragmentHider"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"FragmentHighlighter"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const hider = new OBC.FragmentHider(components);\nconst highlighter = new OBC.FragmentHighlighter(components);\n")),(0,r.kt)("p",null,"Then, set up the fragmentHighlighter like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const highlightMat =  new THREE.MeshBasicMaterial({\ndepthTest: false,\ncolor: 0xBCF124,\ntransparent: true,\nopacity: 0.3\n});\nhighlighter.add("default", highlightMat);\nconst canvas = renderer.get().domElement;\ncanvas.addEventListener("click", () => highlighter.clear("default"))\nhighlighter.update();\n')),(0,r.kt)("p",null,"And let's add these features to the floorplans as extra commands\nand update the plan list to update the UI plan list that we\nwill see in a moment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'plans.commands = {\n"Select": async (plan) => {\nconst found = await classifier.find({storeys: [plan.name]});\nhighlighter.highlightByID("default", found);\n},\n"Show": async (plan) => {\nconst found = await classifier.find({storeys: [plan.name]});\nhider.set(true, found);\n},\n"Hide": async (plan) => {\nconst found = await classifier.find({storeys: [plan.name]});\nhider.set(false, found);\n},\n}\nplans.updatePlansList();\n')),(0,r.kt)("p",null,"Now, the final piece: let's add the built-in plan list menu to our\napp. You can do it simply by creating a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Toolbar")," and adding\nthe button that comes with the fragment plans component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const mainToolbar = new OBC.Toolbar(components);\nmainToolbar.name = \"Main Toolbar\";\ncomponents.ui.addToolbar(mainToolbar);\nmainToolbar.addChild(plans.uiElement.get('main'));\n")),(0,r.kt)("p",null,"And don't forget to set up the events so that when you navigate\ninto a floorplan, we the scene display is set up correctly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'plans.onNavigated.add(() => {\npostproduction.customEffects.glossEnabled = false;\nmaterialManager.setBackgroundColor(whiteColor);\nmaterialManager.set(true, ["white"]);\ngrid.visible = false;\n});\nplans.onExited.add(() => {\npostproduction.customEffects.glossEnabled = true;\nmaterialManager.resetBackgroundColor();\nmaterialManager.set(false, ["white"]);\ngrid.visible = true;\n});\n')),(0,r.kt)("p",null,"Fantastic job! You have created a 3D app that can create and\nnavigate 2D floorplans of fragments and IFC models. This will\nbring your BIM apps to the next level. See you in other tutorials\nof these docs!"),(0,r.kt)("iframe",{src:"https://ifcjs.github.io/components/src/fragments/FragmentPlans/index.html"}))}u.isMDXComponent=!0}}]);