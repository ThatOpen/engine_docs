"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[6861],{522:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var i=l(4848),s=l(8453);const t={},a="Label",d={id:"api/@thatopen/ui/classes/Label",title:"Label",description:"A custom label web component for BIM applications. HTML tag: bim-label",source:"@site/docs/api/@thatopen/ui/classes/Label.md",sourceDirName:"api/@thatopen/ui/classes",slug:"/api/@thatopen/ui/classes/Label",permalink:"/api/@thatopen/ui/classes/Label",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Input",permalink:"/api/@thatopen/ui/classes/Input"},next:{title:"Manager",permalink:"/api/@thatopen/ui/classes/Manager"}},o={},c=[{value:"Extends",id:"extends",level:2},{value:"Properties",id:"properties",level:2},{value:"icon?",id:"icon",level:3},{value:"Default",id:"default",level:4},{value:"Examples",id:"examples",level:4},{value:"iconHidden",id:"iconhidden",level:3},{value:"Default",id:"default-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"img?",id:"img",level:3},{value:"Default",id:"default-2",level:4},{value:"Examples",id:"examples-2",level:4},{value:"labelHidden",id:"labelhidden",level:3},{value:"Default",id:"default-3",level:4},{value:"Examples",id:"examples-3",level:4},{value:"vertical",id:"vertical",level:3},{value:"Default",id:"default-4",level:4},{value:"Examples",id:"examples-4",level:4},{value:"styles",id:"styles",level:3},{value:"Overrides",id:"overrides",level:4}];function r(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"label",children:"Label"}),"\n",(0,i.jsx)(n.p,{children:"A custom label web component for BIM applications. HTML tag: bim-label"}),"\n",(0,i.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"LitElement"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"icon",children:"icon?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"icon"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Specifies the icon to be used in the component. This property is intended for displaying an icon alongside the label or image.\r\nWhen the ",(0,i.jsx)(n.code,{children:"icon"})," property changes, the displayed icon updates accordingly. If the icon is hidden (controlled by ",(0,i.jsx)(n.code,{children:"iconHidden"}),"), changing this property will not affect the visibility of the icon.\r\nNote: The actual rendering of the icon is managed by a nested ",(0,i.jsx)(n.code,{children:"<bim-icon>"})," component in the shadow DOM."]}),"\n",(0,i.jsx)(n.h4,{id:"default",children:"Default"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"undefined\n"})}),"\n",(0,i.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'<bim-label icon="solar:settings-bold">My Label</bim-label>\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const labelComponent = document.createElement('bim-label');\r\nlabelComponent.icon = 'example-icon';\r\ndocument.body.appendChild(labelComponent);\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"iconhidden",children:"iconHidden"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"iconHidden"}),": ",(0,i.jsx)(n.code,{children:"boolean"})," = ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Controls the visibility of the icon. When ",(0,i.jsx)(n.code,{children:"true"}),", the icon is not rendered to the user.\r\nChanging this property to ",(0,i.jsx)(n.code,{children:"true"})," hides the icon if it was previously visible. Setting it to ",(0,i.jsx)(n.code,{children:"false"})," will show the icon if it is defined.\r\nNote: This does not affect the visibility of the label or image, only the icon."]}),"\n",(0,i.jsx)(n.h4,{id:"default-1",children:"Default"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"false\n"})}),"\n",(0,i.jsx)(n.h4,{id:"examples-1",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"<bim-label icon-hidden>My Label</bim-label>\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const labelComponent = document.createElement('bim-label');\r\nlabelComponent.iconHidden = true;\r\ndocument.body.appendChild(labelComponent);\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"img",children:"img?"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"optional"})," ",(0,i.jsx)(n.strong,{children:"img"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Specifies the image URL for the component. When set, an ",(0,i.jsx)(n.code,{children:"<img>"})," element is rendered within the component.\r\nChanging this property updates the source of the image. If the property is not set or removed, the image will not be displayed."]}),"\n",(0,i.jsx)(n.h4,{id:"default-2",children:"Default"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"undefined\n"})}),"\n",(0,i.jsx)(n.h4,{id:"examples-2",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'<bim-label img="path/to/image.png">My Label</bim-label>\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const labelComponent = document.createElement('bim-label');\r\nlabelComponent.img = 'path/to/image.png';\r\ndocument.body.appendChild(labelComponent);\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"labelhidden",children:"labelHidden"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"labelHidden"}),": ",(0,i.jsx)(n.code,{children:"boolean"})," = ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Controls the visibility of the label text. When ",(0,i.jsx)(n.code,{children:"true"}),", the label text is not rendered to the user.\r\nChanging this property to ",(0,i.jsx)(n.code,{children:"true"})," hides the label text if it was previously visible. Setting it to ",(0,i.jsx)(n.code,{children:"false"})," will show the label text if it is defined."]}),"\n",(0,i.jsx)(n.h4,{id:"default-3",children:"Default"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"false\n"})}),"\n",(0,i.jsx)(n.h4,{id:"examples-3",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"<bim-label label-hidden>My Label</bim-label>\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const labelComponent = document.createElement('bim-label');\r\nlabelComponent.labelHidden = true;\r\ndocument.body.appendChild(labelComponent);\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"vertical",children:"vertical"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"vertical"}),": ",(0,i.jsx)(n.code,{children:"boolean"})," = ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Determines the orientation of the component. When ",(0,i.jsx)(n.code,{children:"true"}),", the component's contents (label, image, and icon) are stacked vertically.\r\nChanging this property affects the layout of the component, switching between a horizontal and vertical arrangement of its contents."]}),"\n",(0,i.jsx)(n.h4,{id:"default-4",children:"Default"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"false\n"})}),"\n",(0,i.jsx)(n.h4,{id:"examples-4",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'<bim-label vertical icon="solar:settings-bold">My Label</bim-label>\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const labelComponent = document.createElement('bim-label');\r\nlabelComponent.vertical = true;\r\ndocument.body.appendChild(labelComponent);\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"styles",children:"styles"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"static"})," ",(0,i.jsx)(n.strong,{children:"styles"}),": ",(0,i.jsx)(n.code,{children:"CSSResult"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"CSS styles for the component."}),"\n",(0,i.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"LitElement.styles"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>d});var i=l(6540);const s={},t=i.createContext(s);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);