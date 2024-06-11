"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[4911],{8376:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=o(4848),i=o(8453);const r={title:"UserInterface"},s=void 0,a={id:"Tutorials/UserInterface/index",title:"UserInterface",description:"TOC",source:"@site/docs/Tutorials/UserInterface/index.md",sourceDirName:"Tutorials/UserInterface",slug:"/Tutorials/UserInterface/",permalink:"/Tutorials/UserInterface/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"UserInterface"},sidebar:"tutorialSidebar",previous:{title:"VolumeMeasurement",permalink:"/Tutorials/Components/Front/VolumeMeasurement"},next:{title:"Component",permalink:"/Tutorials/UserInterface/Core/Component"}},l={},c=[{value:"How it works? \ud83e\udd13",id:"how-it-works-",level:2},{value:"Why a monorepo? \ud83e\udd37\u200d\u2640\ufe0f",id:"why-a-monorepo-\ufe0f",level:3},{value:"Does these components works in my favorite framework? \ud83e\udd14",id:"does-these-components-works-in-my-favorite-framework-",level:3},{value:"Getting Started",id:"getting-started",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{align:"center",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)("a",{href:"https://thatopen.com/",children:"TOC"}),"\n|\n",(0,t.jsx)("a",{href:"https://docs.thatopen.com/intro",children:"Documentation"}),"\n|\n",(0,t.jsx)("a",{href:"",children:"Demo"}),"\n|\n",(0,t.jsx)("a",{href:"https://people.thatopen.com/",children:"Community"}),"\n|\n",(0,t.jsx)("a",{href:"",children:"NPM Package"})]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://thatopen.github.io/engine_ui-components/resources/cover.png",alt:"cover"})}),"\n",(0,t.jsxs)("h1",{children:["BIM UI Components ",(0,t.jsx)("img",{src:"https://thatopen.github.io/engine_ui-components/resources/favicon.ico",width:"22"})]}),"\n",(0,t.jsx)(n.p,{children:"BIM UI Components is the ultimate set of user interface elements you need to create fully featured BIM applications \ud83d\ude80"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works-",children:"How it works? \ud83e\udd13"}),"\n",(0,t.jsxs)(n.p,{children:["This library is a monorepo where separate but correlated repositories exists in the packages folder. The main repository resides in ",(0,t.jsx)(n.code,{children:"core"}),"."]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"@thatopen/ui:"})," This is the core library. Here, you will find all the core components needed to build your user interfaces, so you can expect a button, panel, toolbar, table, inputs, and some other components."]}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.p,{children:["Now, from the ",(0,t.jsx)(n.code,{children:"@thatopen/ui"})," you can't expect to have functionalities in your components. In other words, if you need a button component to load an IFC file from ",(0,t.jsx)(n.code,{children:"@thatopen/components"})," you will need to code that by yourself \ud83d\ude41. However, as the goal of the library is to save you as much time as possible, we've created implementations of the components based on things we know you're probably going to need at some point \ud83d\udcaa. Here is were it comes the other repository in the monorepo."]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:"Think on the following repository as plug-n-play functional components that uses the core library to build ready to go pieces of UI with the functionalities to work nice and neat:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"@thatopen/ui-obc:"})," Here you will find pre-made functional components for many things in ",(0,t.jsx)(n.a,{href:"https://github.com/thatopen/engine_components",children:"@thatopen/components"})," (the entry point of That Open Engine). You can expect to have from a button that loads an IFC file, to a table to configure your app tools or a panel to view all your model classifications. Basically, @thatopen/components gives you the functionality, while @thatopen/ui-obc gives you the UI to interact with those functionalities."]}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["[!IMPORTANT]\nAll the implementation libraries need ",(0,t.jsx)(n.code,{children:"@thatopen/ui"})," to be installed along with the respective packages they are giving UIs to. See the respective package.json files in each repository."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"why-a-monorepo-\ufe0f",children:"Why a monorepo? \ud83e\udd37\u200d\u2640\ufe0f"}),"\n",(0,t.jsxs)(n.p,{children:["Easy, because we care about your final app bundle size. You see, the repositories that contains implementations of the UIComponents for different libraries, relies on the libraries to be installed in the project because they're required as peerDependencies. So, if we included all the pre-built UIComponents from ",(0,t.jsx)(n.code,{children:"@thatopen/ui-obc"})," in the core library, you will always need to have ",(0,t.jsx)(n.code,{children:"@thatopen/components"})," and ",(0,t.jsx)(n.code,{children:"@thatopen/components-front"})," installed in your project even tough you're not using it."]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h3,{id:"does-these-components-works-in-my-favorite-framework-",children:"Does these components works in my favorite framework? \ud83e\udd14"}),"\n",(0,t.jsxs)(n.p,{children:["Well... yes! You name it, React? Angular? Vue? Svelte? The answer is absolutely yes. Basically, you can use these componentes anywhere HTML is accepted. If you're wondering how is that possible, is becase we're using ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Components",children:"Web Components"})," \ud83d\udd25"]}),"\n",(0,t.jsx)(n.p,{children:"If you're new to Web Components, no worries! Simply put, Web Components is a browser API that let's you define your own HTML tags (DOM Elements) to be used in the document. They define the look and behavior of the elements. Have you ever seen an HTML that looks something like this?"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<div>\n  <unknown-tag />\n</div>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As you may recall from your HTML knowledge, ",(0,t.jsx)(n.code,{children:"<unkown-tag />"})," is not somethings built-in in HTML... well, that's because is a Web Component! So the developer created it's own tag to use it in the document."]}),"\n",(0,t.jsx)(n.p,{children:"Web Components are extremely powerfull because they do mostly the same as the components you create in any framework, just they are framework agnostic and feel way more built-in. In other words, if you create a component in your framework you're not allowed to write the following directly in your HTML file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<my-framework-component />\n"})}),"\n",(0,t.jsx)(n.p,{children:"You always need to rely on your framework tools in order to render your component, so you must use JavaScript. However, if you create a Web Component you can use it in your HTML with nothing else needed."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["[!IMPORTANT]\nDespite Web Components is a browser API, we used ",(0,t.jsx)(n.a,{href:"https://lit.dev/",children:"Lit"})," to create the components as it makes the process way much easier. Also, we recommend checking your favorite framework documentation to implement web components, some of them needs a pretty basic setup to get up and running."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(n.p,{children:"To use the UIComponents, you need to install at least the core library from your terminal like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm i @thatopen/ui\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then, you need to tell the library to register the components, so you can use them in any HTML syntax. To do it, in your entry JavaScript file execute the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { UIManager } from "@thatopen/ui"\n\nUIManager.init()\n'})}),"\n",(0,t.jsx)(n.p,{children:"Finally, in your HTML file you can start to use the components!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<bim-grid id="grid">\n  <bim-toolbars-container style="grid-area: header">\n    <bim-toolbar label="Toolbar A" active>\n      <bim-toolbar-section label="Build">\n        <bim-button vertical label="My Button" icon="solar:bookmark-square-minimalistic-bold"></bim-button>\n        <bim-toolbar-group>\n          <bim-button icon="solar:album-bold"></bim-button>\n          <bim-button icon="solar:archive-linear"></bim-button>\n          <bim-button icon="solar:battery-charge-minimalistic-broken"></bim-button>\n          <bim-button icon="solar:bluetooth-square-outline"></bim-button>\n        </bim-toolbar-group>\n      </bim-toolbar-section>\n    </bim-toolbar>\n    <bim-toolbar label="Toolbar B">\n      <bim-toolbar-section label="Section">\n        <bim-button vertical label="Button A" icon="bx:command"></bim-button>\n        <bim-button vertical label="Button B" icon="bx:fast-forward-circle"></bim-button>\n        <bim-button vertical label="Button C" icon="bx:support"></bim-button>\n      </bim-toolbar-section>\n    </bim-toolbar>\n  </bim-toolbars-container>\n  <div id="my-panel" style="grid-area: sidebar; background-color: var(--bim-ui_bg-base)">\n    <bim-panel label="Panel A">\n      <bim-panel-section label="Build">\n        <bim-text-input label="Tool Name" value="BCFManager"></bim-text-input>\n        <bim-input label="Position" vertical>\n          <bim-number-input pref="X" min="1" value="10" max="50" suffix="m" slider></bim-number-input>\n          <bim-number-input pref="X" min="1" value="20" max="50" suffix="m" slider></bim-number-input>\n          <bim-number-input pref="X" min="1" value="30" max="50" suffix="m" slider></bim-number-input>\n        </bim-input>\n        <bim-dropdown label="IFC Entity">\n          <bim-option label="IFCWALL"></bim-option>\n          <bim-option label="IFCWINDOW"></bim-option>\n          <bim-option label="IFCSLAB"></bim-option>\n        </bim-dropdown>\n      </bim-panel-section>\n    </bim-panel>\n  </div>\n</bim-grid>\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["[!TIP]\nYou can get any icon from ",(0,t.jsx)(n.a,{href:"https://icon-sets.iconify.design/",children:"Iconify"}),"!"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"And, in your JavaScript file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const grid = document.getElementById("grid")\n\ngrid.layouts = {\n  main: `\n    "header header" auto\n    "sidebar content" 1fr\n    "sidebar content" 1fr\n    / auto 1fr\n  `\n}\n\ngrid.setLayout("main")\n'})}),"\n",(0,t.jsx)(n.p,{children:"To know more about the UIComponents, you can explore the README files in each repository under the packages folder and also explore the documentation. You can find the link at the top of this README file."})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(6540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);