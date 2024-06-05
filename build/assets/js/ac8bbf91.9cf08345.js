"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),b=r,d=m["".concat(s,".").concat(b)]||m[b]||c[b]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"UserInterface"},s=void 0,u={unversionedId:"Tutorials/UserInterface/index",id:"Tutorials/UserInterface/index",title:"UserInterface",description:"TOC",source:"@site/docs/Tutorials/UserInterface/index.md",sourceDirName:"Tutorials/UserInterface",slug:"/Tutorials/UserInterface/",permalink:"/Tutorials/UserInterface/",draft:!1,tags:[],version:"current",frontMatter:{title:"UserInterface"},sidebar:"tutorialSidebar",previous:{title:"VolumeMeasurement",permalink:"/Tutorials/Components/Front/VolumeMeasurement"},next:{title:"Component",permalink:"/Tutorials/UserInterface/Core/Component"}},p={},m=[{value:"How it works? \ud83e\udd13",id:"how-it-works-",level:2},{value:"Why a monorepo? \ud83e\udd37\u200d\u2640\ufe0f",id:"why-a-monorepo-\ufe0f",level:3},{value:"Does these components works in my favorite framework? \ud83e\udd14",id:"does-these-components-works-in-my-favorite-framework-",level:3},{value:"Getting Started",id:"getting-started",level:2}],c={toc:m},b="wrapper";function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)(b,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{align:"center"},(0,a.kt)("a",{href:"https://thatopen.com/"},"TOC"),"|",(0,a.kt)("a",{href:"https://docs.thatopen.com/intro"},"Documentation"),"|",(0,a.kt)("a",{href:""},"Demo"),"|",(0,a.kt)("a",{href:"https://people.thatopen.com/"},"Community"),"|",(0,a.kt)("a",{href:""},"NPM Package")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://thatopen.github.io/engine_ui-components/resources/cover.png",alt:"cover"})),(0,a.kt)("h1",null,"BIM UI Components ",(0,a.kt)("img",{src:"https://thatopen.github.io/engine_ui-components/resources/favicon.ico",width:"22"})),(0,a.kt)("p",null,"BIM UI Components is the ultimate set of user interface elements you need to create fully featured BIM applications \ud83d\ude80"),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"how-it-works-"},"How it works? \ud83e\udd13"),(0,a.kt)("p",null,"This library is a monorepo where separate but correlated repositories exists in the packages folder. The main repository resides in ",(0,a.kt)("inlineCode",{parentName:"p"},"core"),"."),(0,a.kt)("br",null),"* **@thatopen/ui:** This is the core library. Here, you will find all the core components needed to build your user interfaces, so you can expect a button, panel, toolbar, table, inputs, and some other components.",(0,a.kt)("br",null),(0,a.kt)("p",null,"Now, from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@thatopen/ui")," you can't expect to have functionalities in your components. In other words, if you need a button component to load an IFC file from ",(0,a.kt)("inlineCode",{parentName:"p"},"@thatopen/components")," you will need to code that by yourself \ud83d\ude41. However, as the goal of the library is to save you as much time as possible, we've created implementations of the components based on things we know you're probably going to need at some point \ud83d\udcaa. Here is were it comes the other repository in the monorepo."),(0,a.kt)("br",null),(0,a.kt)("p",null,"Think on the following repository as plug-n-play functional components that uses the core library to build ready to go pieces of UI with the functionalities to work nice and neat:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"@thatopen/ui-obc:")," Here you will find pre-made functional components for many things in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/thatopen/engine_components"},"@thatopen/components")," (the entry point of That Open Engine). You can expect to have from a button that loads an IFC file, to a table to configure your app tools or a panel to view all your model classifications. Basically, @thatopen/components gives you the functionality, while @thatopen/ui-obc gives you the UI to interact with those functionalities.",(0,a.kt)("br",null))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!IMPORTANT]","\nAll the implementation libraries need ",(0,a.kt)("inlineCode",{parentName:"p"},"@thatopen/ui")," to be installed along with the respective packages they are giving UIs to. See the respective package.json files in each repository.")),(0,a.kt)("h3",{id:"why-a-monorepo-\ufe0f"},"Why a monorepo? \ud83e\udd37\u200d\u2640\ufe0f"),(0,a.kt)("p",null,"Easy, because we care about your final app bundle size. You see, the repositories that contains implementations of the UIComponents for different libraries, relies on the libraries to be installed in the project because they're required as peerDependencies. So, if we included all the pre-built UIComponents from ",(0,a.kt)("inlineCode",{parentName:"p"},"@thatopen/ui-obc")," in the core library, you will always need to have ",(0,a.kt)("inlineCode",{parentName:"p"},"@thatopen/components")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@thatopen/components-front")," installed in your project even tough you're not using it."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"does-these-components-works-in-my-favorite-framework-"},"Does these components works in my favorite framework? \ud83e\udd14"),(0,a.kt)("p",null,"Well... yes! You name it, React? Angular? Vue? Svelte? The answer is absolutely yes. Basically, you can use these componentes anywhere HTML is accepted. If you're wondering how is that possible, is becase we're using ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Components"},"Web Components")," \ud83d\udd25"),(0,a.kt)("p",null,"If you're new to Web Components, no worries! Simply put, Web Components is a browser API that let's you define your own HTML tags (DOM Elements) to be used in the document. They define the look and behavior of the elements. Have you ever seen an HTML that looks something like this?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<div>\n  <unknown-tag />\n</div>\n")),(0,a.kt)("p",null,"As you may recall from your HTML knowledge, ",(0,a.kt)("inlineCode",{parentName:"p"},"<unkown-tag />")," is not somethings built-in in HTML... well, that's because is a Web Component! So the developer created it's own tag to use it in the document."),(0,a.kt)("p",null,"Web Components are extremely powerfull because they do mostly the same as the components you create in any framework, just they are framework agnostic and feel way more built-in. In other words, if you create a component in your framework you're not allowed to write the following directly in your HTML file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<my-framework-component />\n")),(0,a.kt)("p",null,"You always need to rely on your framework tools in order to render your component, so you must use JavaScript. However, if you create a Web Component you can use it in your HTML with nothing else needed."),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!IMPORTANT]","\nDespite Web Components is a browser API, we used ",(0,a.kt)("a",{parentName:"p",href:"https://lit.dev/"},"Lit")," to create the components as it makes the process way much easier. Also, we recommend checking your favorite framework documentation to implement web components, some of them needs a pretty basic setup to get up and running.")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"To use the UIComponents, you need to install at least the core library from your terminal like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i @thatopen/ui\n")),(0,a.kt)("p",null,"Then, you need to tell the library to register the components, so you can use them in any HTML syntax. To do it, in your entry JavaScript file execute the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { UIManager } from "@thatopen/ui"\n\nUIManager.init()\n')),(0,a.kt)("p",null,"Finally, in your HTML file you can start to use the components! "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<bim-grid id="grid">\n  <bim-toolbars-container style="grid-area: header">\n    <bim-toolbar label="Toolbar A" active>\n      <bim-toolbar-section label="Build">\n        <bim-button vertical label="My Button" icon="solar:bookmark-square-minimalistic-bold"></bim-button>\n        <bim-toolbar-group>\n          <bim-button icon="solar:album-bold"></bim-button>\n          <bim-button icon="solar:archive-linear"></bim-button>\n          <bim-button icon="solar:battery-charge-minimalistic-broken"></bim-button>\n          <bim-button icon="solar:bluetooth-square-outline"></bim-button>\n        </bim-toolbar-group>\n      </bim-toolbar-section>\n    </bim-toolbar>\n    <bim-toolbar label="Toolbar B">\n      <bim-toolbar-section label="Section">\n        <bim-button vertical label="Button A" icon="bx:command"></bim-button>\n        <bim-button vertical label="Button B" icon="bx:fast-forward-circle"></bim-button>\n        <bim-button vertical label="Button C" icon="bx:support"></bim-button>\n      </bim-toolbar-section>\n    </bim-toolbar>\n  </bim-toolbars-container>\n  <div id="my-panel" style="grid-area: sidebar; background-color: var(--bim-ui_bg-base)">\n    <bim-panel label="Panel A">\n      <bim-panel-section label="Build">\n        <bim-text-input label="Tool Name" value="BCFManager"></bim-text-input>\n        <bim-input label="Position" vertical>\n          <bim-number-input pref="X" min="1" value="10" max="50" suffix="m" slider></bim-number-input>\n          <bim-number-input pref="X" min="1" value="20" max="50" suffix="m" slider></bim-number-input>\n          <bim-number-input pref="X" min="1" value="30" max="50" suffix="m" slider></bim-number-input>\n        </bim-input>\n        <bim-dropdown label="IFC Entity">\n          <bim-option label="IFCWALL"></bim-option>\n          <bim-option label="IFCWINDOW"></bim-option>\n          <bim-option label="IFCSLAB"></bim-option>\n        </bim-dropdown>\n      </bim-panel-section>\n    </bim-panel>\n  </div>\n</bim-grid>\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!TIP]","\nYou can get any icon from ",(0,a.kt)("a",{parentName:"p",href:"https://icon-sets.iconify.design/"},"Iconify"),"!")),(0,a.kt)("p",null,"And, in your JavaScript file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const grid = document.getElementById("grid")\n\ngrid.layouts = {\n  main: `\n    "header header" auto\n    "sidebar content" 1fr\n    "sidebar content" 1fr\n    / auto 1fr\n  `\n}\n\ngrid.setLayout("main")\n')),(0,a.kt)("p",null,"To know more about the UIComponents, you can explore the README files in each repository under the packages folder and also explore the documentation. You can find the link at the top of this README file."))}d.isMDXComponent=!0}}]);