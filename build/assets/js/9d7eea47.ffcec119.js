"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[1813],{8968:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(4848),s=t(8453);const r={sidebar_position:2},i="\ud83e\uddbe Making your own",a={id:"components/creating-components",title:"\ud83e\uddbe Making your own",description:"\ud83d\udc6a Create it",source:"@site/docs/components/creating-components.md",sourceDirName:"components",slug:"/components/creating-components",permalink:"/components/creating-components",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude80 Getting started",permalink:"/components/getting-started"},next:{title:"\ud83e\uddf9 Keeping them clean",permalink:"/components/clean-components-guide"}},l={},c=[{value:"\ud83d\udc6a Create it",id:"-create-it",level:2},{value:"\ud83c\udf0d Availability",id:"-availability",level:2},{value:"\u267b\ufe0f Lifecycle",id:"\ufe0f-lifecycle",level:2},{value:"\ud83e\uddf9 Cleanliness",id:"-cleanliness",level:2},{value:"\ud83d\udc85\ud83c\udffb UI",id:"-ui",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"-making-your-own",children:"\ud83e\uddbe Making your own"}),"\n",(0,o.jsx)(n.h2,{id:"-create-it",children:"\ud83d\udc6a Create it"}),"\n",(0,o.jsxs)(n.p,{children:["Our libraries have ",(0,o.jsx)(n.strong,{children:"many components"}),", but the BIM world is vast and it's impossible to cover all use cases. But that's the biggest power of components: ",(0,o.jsx)(n.strong,{children:"they are flexible and can be extended"})," to cover all use cases."]}),"\n",(0,o.jsx)(n.admonition,{title:"We like types, but you don't have to",type:"danger",children:(0,o.jsx)(n.p,{children:"We are going to do the examples in TypeScript, but don't worry if you only know JavaScript! Translating these examples to JavaScript would be exactly the same but removing all the type definitions. \ud83e\udd1d"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Creating a component"})," is as simple as creating a class that extends the basic ",(0,o.jsx)(n.code,{children:"Component"}),' class. For example, let\'s create a "Hello world" component, whose only mission is to log a greeting message in the console. \ud83d\udc4b\ud83c\udffb']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'import * as OBC from "@thatopen/components";\r\n\r\n/**\r\n * A basic component to say hello in the console.\r\n */\r\nexport class HelloWorldComponent extends OBC.Component {\r\n\r\n  static readonly uuid = "60bd6763-f9ff-4820-a04f-2054922c0297" as const;\r\n\r\n  enabled = true;\r\n\r\n  private readonly _message = "Hello";\r\n\r\n  constructor(components: OBC.Components) {\r\n    super(components);\r\n\tcomponents.add(HelloWorldComponent.uuid, this);\r\n  }\r\n\r\n  greet(name: string) {\r\n    const message = `${this._message} ${name}!`;\r\n    console.log(message);\r\n  }\r\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["As you can see, the structure of the component is very simple. The Component base class ",(0,o.jsx)(n.strong,{children:"requires certain things"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"A static UUID (v4)"})," that identifies it uniquely within the ",(0,o.jsx)(n.code,{children:"Components"})," instance that is used to create it."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"A constructor"})," where the only parameter is the object ",(0,o.jsx)(n.code,{children:"Components"}),". This ",(0,o.jsx)(n.code,{children:"Components"})," object will be available as a public property of the class automatically. Also, you need to add the component to the ",(0,o.jsx)(n.code,{children:"Components"})," instance in the constructor."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsxs)(n.strong,{children:["An ",(0,o.jsx)(n.code,{children:"enabled"})," property"]})," that indicates whether the component is active or not."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Now, you can use this component just as any of the components you will get to know in the ",(0,o.jsx)(n.a,{href:"../Tutorials/Components/Core/Worlds",children:"tutorials"}),"! \ud83d\udc69\ud83c\udffb\u200d\ud83c\udfeb"]}),"\n",(0,o.jsx)(n.h2,{id:"-availability",children:"\ud83c\udf0d Availability"}),"\n",(0,o.jsxs)(n.p,{children:["As you can see, components have a static UUID (v4) and are registered in the ",(0,o.jsx)(n.code,{children:"Components"})," instance. That way, we make sure that they are ",(0,o.jsx)(n.strong,{children:"unique and globally available"})," through your entire application (or ",(0,o.jsx)(n.code,{children:"Components"})," instance). You can access that component instance anywhere else in your application like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// Somewhere in your app:\r\n\r\nconst helloWorldComponent = new HelloWorldComponent(components);\r\n\r\n// Somewhere else in your app:\r\n\r\nconst hwComponent = await components.get(HelloWorldComponent);\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We strongly recommend that you always get the ",(0,o.jsx)(n.strong,{children:"library built-in components"})," using the ",(0,o.jsx)(n.code,{children:"get"})," method directly, never instantiating them yourself. Don't worry, if they are not instanced, they library will do it for you automatically! \ud83e\udd16"]}),"\n",(0,o.jsx)(n.h2,{id:"\ufe0f-lifecycle",children:"\u267b\ufe0f Lifecycle"}),"\n",(0,o.jsxs)(n.p,{children:["The library will take care of ",(0,o.jsx)(n.strong,{children:"updating your components"})," and ",(0,o.jsx)(n.strong,{children:"releasing their memory"})," when your 3D app is diposed, preventing memory leaks. You can set up your component easily using the interfaces provided by the library. For example:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["With ",(0,o.jsx)(n.code,{children:"Updateable"}),", the library will automatically update your component every frame. \ud83d\udd04\ufe0f"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["With ",(0,o.jsx)(n.code,{children:"Disposable"}),", the library will release the memory of your component when the application is disposed, preventing memory leaks. \ud83e\uddf9"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Let's see them in action!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'import * as THREE from "three";\r\nimport * as OBC from "@thatopen/components";\r\n\r\n/**\r\n * A basic component to say hello in the console.\r\n */\r\nexport class HelloWorldComponent extends OBC.Component\r\n  implements OBC.Disposable, OBC.Updateable  {\r\n\tstatic readonly uuid = "0f89b34b-fc6b-4b97-b56d-1edeb0a308a2";\r\n\r\n\treadonly onAfterUpdate = new OBC.Event();\r\n\r\n\treadonly onBeforeUpdate = new OBC.Event();\r\n\r\n    readonly onDisposed = new OBC.Event();\r\n\r\n\tenabled = true;\r\n\r\n\tsomeMesh = new THREE.Mesh(); \r\n\r\n\tprivate readonly _message = "Hello";\r\n\r\n\tconstructor(components: OBC.Components) {\r\n\t\tsuper(components);\r\n\t\tcomponents.add(HelloWorldComponent.uuid, this);\r\n\t}\r\n\r\n\tgreet(name: string) {\r\n\t\tconst message = `${this._message} ${name}!`;\r\n\t\tconsole.log(message);\r\n\t}\r\n\r\n\tdispose() {\r\n\t\tthis.enabled = false;\r\n\t\t// Make sure to clean up the events\r\n\t\tthis.onBeforeUpdate.reset();\r\n\t\tthis.onAfterUpdate.reset();\r\n\t\t// Use the disposer component to easily dispose THREE.js objects\r\n\t\tconst disposer = this.components.get(OBC.Disposer);\r\n\t\tdisposer.destroy(this.someMesh);\r\n        this.onDisposed.trigger();\r\n\t\tthis.onDisposed.reset();\r\n    }\r\n\r\n    async update(delta?: number) {\r\n\t\tthis.onBeforeUpdate.trigger();\r\n\t\tconsole.log("Updated! Delta: " + delta);\r\n\t\tthis.onAfterUpdate.trigger();\r\n\t}\r\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This is it! Now, the library will take care of ",(0,o.jsx)(n.strong,{children:"updating and disposing"})," your component automatically. \ud83d\udcaa\ud83c\udffb\ud83e\udd16"]}),"\n",(0,o.jsx)(n.h2,{id:"-cleanliness",children:"\ud83e\uddf9 Cleanliness"}),"\n",(0,o.jsxs)(n.p,{children:["It's important that you keep your components ",(0,o.jsx)(n.strong,{children:"clean and tidy"}),"! To do that, check out the short guide for ",(0,o.jsx)(n.a,{href:"/components/clean-components-guide",children:"avoiding smells when creating components"}),". \ud83e\ude90"]}),"\n",(0,o.jsx)(n.h2,{id:"-ui",children:"\ud83d\udc85\ud83c\udffb UI"}),"\n",(0,o.jsxs)(n.p,{children:["We strongly recommend that you ",(0,o.jsx)(n.strong,{children:"don't include UI logic in your components"}),". Rather, we have a UI Components library that is specific for building BIM UIs super easily. The code of both libraries (components and UI components) is completely decoupled. We encourage you to do the same. \ud83c\udf50\ud83c\udf4e"]}),"\n",(0,o.jsxs)(n.p,{children:["Check out the ",(0,o.jsx)(n.strong,{children:"UI Components tutorials"})," for more details about how to build your own UI elements."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);