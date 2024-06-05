"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={},l=void 0,c={unversionedId:"Tutorials/UserInterface/Core/Component",id:"Tutorials/UserInterface/Core/Component",title:"Component",description:"Copying and pasting? We've got you covered! You can find the full source code of this tutorial here.",source:"@site/docs/Tutorials/UserInterface/Core/Component.mdx",sourceDirName:"Tutorials/UserInterface/Core",slug:"/Tutorials/UserInterface/Core/Component",permalink:"/Tutorials/UserInterface/Core/Component",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UserInterface",permalink:"/Tutorials/UserInterface/"},next:{title:"ClassificationsTree",permalink:"/Tutorials/UserInterface/OBC/ClassificationsTree"}},p={},u=[{value:"Leveling up your app with custom components! \ud83d\udd0c",id:"leveling-up-your-app-with-custom-components-",level:2},{value:"Creating an stateless component",id:"creating-an-stateless-component",level:3},{value:"Creating a statefull component",id:"creating-a-statefull-component",level:3},{value:"Nesting components",id:"nesting-components",level:3}],m={toc:u},d="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Source",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Copying and pasting? We've got you covered! You can find the full source code of this tutorial ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatOpen/engine_ui-components/blob/main/packages/core/src/core/Component/example.ts"},"here"),".")),(0,i.kt)("h2",{id:"leveling-up-your-app-with-custom-components-"},"Leveling up your app with custom components! \ud83d\udd0c"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"One of the greatest things about the library is that you can create your own reactive and non reactive elements (statefull and stateless components respectively) in a very simple and efficient way, all thanks to the power of ",(0,i.kt)("a",{parentName:"p",href:"https://lit.dev/docs/libraries/standalone-templates/"},"lit-html")," \ud83d\udcaa.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"Component")," class has a static method to create functional components (UI defined as a function) that can be updated anytime. The method is ",(0,i.kt)("inlineCode",{parentName:"p"},"Component.create"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Despite the ",(0,i.kt)("inlineCode",{parentName:"p"},"Component")," is a class that can be instantiated or extended, from a developer perspective using the library is most likely it will only use the create method.")),(0,i.kt)("h3",{id:"creating-an-stateless-component"},"Creating an stateless component"),(0,i.kt)("p",null,"To start learning how to create custom components, let's create a custom component that uses the panel section:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const statelessPanelSection = BUI.Component.create<BUI.PanelSection>(() => {\n  return BUI.html`\n    <bim-panel-section label="Stateless Panel Section">\n      <bim-color-input label="Color"></bim-color-input>\n    </bim-panel-section>\n  `;\n});\n')),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Remember to first call ",(0,i.kt)("inlineCode",{parentName:"p"},"Manager.init()")," before anything else!")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Component.create")," requires you to provide a function declaration that returns an HTML string made with the ",(0,i.kt)("inlineCode",{parentName:"p"},"html")," tag function, and the result of the function is the HTMLElement it self. "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Tag functions are special declarations that are always set before a template literal to process the string.")),(0,i.kt)("p",null,"Did you notice the component is named ",(0,i.kt)("inlineCode",{parentName:"p"},"statelessPanelSection"),"? Well, the reason is because components can have an optional state. Technically speaking, that makes the create method to have two overloads: one for components with state (statefull) and another for components without state (stateless).\nThe main difference is that statefull components lets you update them with new states (so the UI component will efficiently re-render and display new data) while stateless components never needs to be updated as they are static.\nThe component we just created is stateless, because it doesn't have any state in which its user interface depends on. "),(0,i.kt)("h3",{id:"creating-a-statefull-component"},"Creating a statefull component"),(0,i.kt)("p",null,"Now, let's take a look at how to create a component that can be updated based on state changes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'interface PanelSectionUIState {\n  label: string;\n  counter: number;\n}\n\nconst [statefullPanelSection, updateStatefullPanelSection] =\n  BUI.Component.create<BUI.PanelSection, PanelSectionUIState>(\n    (state: PanelSectionUIState) => {\n      const { label, counter } = state;\n      const msg = `This panel section has been updated ${counter} ${counter === 1 ? "time" : "times"}`;\n      return BUI.html`\n      <bim-panel-section label=${label}>\n        <bim-label>${msg}</bim-label>\n      </bim-panel-section>\n    `;\n    },\n    { label: "Statefull Panel Section", counter: 0 },\n  );\n')),(0,i.kt)("p",null,"When you pass an object as the argument in your create function, the component has now become statefull. As you see, there are a couple of differences between the stateless and statefull components:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The statefull component requires an state object (it must be an object) to be passed in the function declaration. Think on this as the classic properties object you pass to a component in a framework like React."),(0,i.kt)("li",{parentName:"ol"},"When the component is statefull, ",(0,i.kt)("inlineCode",{parentName:"li"},"Component.create")," must have a second argument to specify the initial state of the component."),(0,i.kt)("li",{parentName:"ol"},"Now, ",(0,i.kt)("inlineCode",{parentName:"li"},"Component.create")," does not return the HTMLElement it self, but an array where the first item is the HTMLElement and second is a function to update the component based on an updated state. Think on this as when you use the useState hook in frameworks like React.",(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"As for now, a statefull component can't update itself! However, you can nest other components that updates the state of some other.")))),(0,i.kt)("h3",{id:"nesting-components"},"Nesting components"),(0,i.kt)("p",null,"Now, in order to see the two components in action, let's create a third component to integrate (nest) the two previous:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const panel = BUI.Component.create<BUI.Panel>(() => {\n  let counter = 0;\n  const onUpdateBtnClick = () => {\n    counter++;\n    if (counter >= 5) {\n      updateStatefullPanelSection({\n        label: "Powered Statefull Panel Section \ud83d\udcaa",\n        counter,\n      });\n    } else {\n      updateStatefullPanelSection({ counter });\n    }\n  };\n\n  return BUI.html`\n    <bim-panel label="My Panel">\n      <bim-panel-section label="Update Functions">\n        <bim-button @click=${onUpdateBtnClick} label="Update Statefull Section"></bim-button>\n      </bim-panel-section>\n      ${statelessPanelSection}\n      ${statefullPanelSection}\n    </bim-panel>\n  `;\n});\n')),(0,i.kt)("p",null,"As you see, the create function doesn't need to immediately return the HTML, but you can also do any other logic you want inside. In this case, the logic adds a listener to ",(0,i.kt)("inlineCode",{parentName:"p"},"bim-button")," in order to update the state of the statefullPanelSection we created earlier. A couple of things to notice here: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You're not forced to update the whole component state, but just the things you need. In this case, we just updated the panel section label in case the counter is greater than or equals to 5. However, in this case the counter is always updated."),(0,i.kt)("li",{parentName:"ol"},"Despite we updated the component inside the logic of the panel, you can update your statefull components from anywhere in your code by just using the update function."),(0,i.kt)("li",{parentName:"ol"},"You can nest any component in any other: statefull in stateless, stateless in stateless, etc. In this case, panel is a stateless component, but it has an statefull component inside. That means contents of a stateless component can be updated but because that content is a statefull component."),(0,i.kt)("li",{parentName:"ol"},"You see how we integrated the two previous components into the panel? Yes, its as easy as adding them as an expression (",(0,i.kt)("inlineCode",{parentName:"li"},"${statelessPanelSection}")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"${statefullPanelSection}")," in this case).",(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In order to know the syntax you can write inside the template literal tagged by the html function, look at the ",(0,i.kt)("a",{parentName:"p",href:"https://lit.dev/docs/templates/overview/"},"lit-html")," documentation.")),"Finally, you can add your panel component anywhere you want as its an HTMLElement just like any other!")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"document.body.append(panel);\n")),(0,i.kt)("p",null,"Congratulations! You already know how to create your own custom reactive components. Don't stop learning! Take a look at more tutorials in the documentation \ud83d\ude42."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The complementary packages of the library such as ",(0,i.kt)("inlineCode",{parentName:"p"},"@thatopen/ui-obc")," have premade functional components just like the ones we've learned to create in this tutorial, so you don't need to bother to create them by yourself \ud83d\ude09")),(0,i.kt)("iframe",{src:"https://thatopen.github.io/engine_ui-components/examples/Component"}))}h.isMDXComponent=!0}}]);