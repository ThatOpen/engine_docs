"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[2415],{7434:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var l=t(4848),s=t(8453);const i={},a="Panel",r={id:"api/@thatopen/ui/classes/Panel",title:"Panel",description:"A custom panel web component for BIM applications. HTML tag: bim-panel",source:"@site/docs/api/@thatopen/ui/classes/Panel.md",sourceDirName:"api/@thatopen/ui/classes",slug:"/api/@thatopen/ui/classes/Panel",permalink:"/api/@thatopen/ui/classes/Panel",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Option",permalink:"/api/@thatopen/ui/classes/Option"},next:{title:"PanelSection",permalink:"/api/@thatopen/ui/classes/PanelSection"}},d={},c=[{value:"Extends",id:"extends",level:2},{value:"Implements",id:"implements",level:2},{value:"Properties",id:"properties",level:2},{value:"headerHidden",id:"headerhidden",level:3},{value:"Default",id:"default",level:4},{value:"Attribute",id:"attribute",level:4},{value:"Reflect",id:"reflect",level:4},{value:"Example",id:"example",level:4},{value:"icon?",id:"icon",level:3},{value:"Default",id:"default-1",level:4},{value:"Examples",id:"examples",level:4},{value:"label?",id:"label",level:3},{value:"Default",id:"default-2",level:4},{value:"Examples",id:"examples-1",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"name?",id:"name",level:3},{value:"Default",id:"default-3",level:4},{value:"Examples",id:"examples-2",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"valueTransform",id:"valuetransform",level:3},{value:"Example",id:"example-1",level:4},{value:"styles",id:"styles",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Accessors",id:"accessors",level:2},{value:"hidden",id:"hidden",level:3},{value:"Fires",id:"fires",level:4},{value:"Parameters",id:"parameters",level:4},{value:"value",id:"value",level:3},{value:"Default",id:"default-4",level:4},{value:"Examples",id:"examples-3",level:4},{value:"Examples",id:"examples-4",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"collapseSections()",id:"collapsesections",level:3},{value:"Returns",id:"returns-1",level:4},{value:"expandSections()",id:"expandsections",level:3},{value:"Returns",id:"returns-2",level:4}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"panel",children:"Panel"}),"\n",(0,l.jsx)(n.p,{children:"A custom panel web component for BIM applications. HTML tag: bim-panel"}),"\n",(0,l.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"LitElement"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"implements",children:"Implements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/api/@thatopen/ui/interfaces/HasName",children:(0,l.jsx)(n.code,{children:"HasName"})})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/api/@thatopen/ui/interfaces/HasValue",children:(0,l.jsx)(n.code,{children:"HasValue"})})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsx)(n.h3,{id:"headerhidden",children:"headerHidden"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"headerHidden"}),": ",(0,l.jsx)(n.code,{children:"boolean"})," = ",(0,l.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Represents a boolean property that controls the visibility of the panel's header.\r\nWhen ",(0,l.jsx)(n.code,{children:"true"}),", the header (containing the label and icon) is hidden.\r\nWhen ",(0,l.jsx)(n.code,{children:"false"}),", the header is visible."]}),"\n",(0,l.jsx)(n.h4,{id:"default",children:"Default"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"false\n"})}),"\n",(0,l.jsx)(n.h4,{id:"attribute",children:"Attribute"}),"\n",(0,l.jsxs)(n.p,{children:["header-hidden - The attribute that reflects the ",(0,l.jsx)(n.code,{children:"headerHidden"})," property to the HTML element."]}),"\n",(0,l.jsx)(n.h4,{id:"reflect",children:"Reflect"}),"\n",(0,l.jsx)(n.p,{children:"true - Indicates that the property should be reflected to the HTML attribute."}),"\n",(0,l.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// Setting the `headerHidden` property to `true`\r\npanel.headerHidden = true;\n\n// Setting the `header-hidden` attribute to `true`\r\npanel.setAttribute('header-hidden', 'true');\n\n// Getting the `headerHidden` property value\r\nconsole.log(panel.headerHidden); // Output: true\n\n// Getting the `header-hidden` attribute value\r\nconsole.log(panel.getAttribute('header-hidden')); // Output: 'true'\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"icon",children:"icon?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"icon"}),": ",(0,l.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Represents the icon to be displayed on the and panel and panel's activation button. This icon is a visual representation\r\nthat can be used to give users a hint about the panel's purpose or content. When the ",(0,l.jsx)(n.code,{children:"icon"})," property changes,\r\nthe icon on the activation button is updated accordingly. This property is reflected to an attribute, meaning\r\nany changes to the property will also update the corresponding attribute on the HTML element, and vice versa."]}),"\n",(0,l.jsx)(n.h4,{id:"default-1",children:"Default"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"undefined\n"})}),"\n",(0,l.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:'<bim-panel icon="settings"></bim-panel>\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const panel = document.createElement('bim-panel');\r\npanel.icon = 'settings';\r\ndocument.body.appendChild(panel);\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"label",children:"label?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"label"}),": ",(0,l.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["The label of the panel, which is displayed on the panel's activation button. This property is intended\r\nfor a more descriptive text than what ",(0,l.jsx)(n.code,{children:"name"})," might provide. If the ",(0,l.jsx)(n.code,{children:"label"})," property is set, it takes\r\nprecedence over the ",(0,l.jsx)(n.code,{children:"name"})," property for the button's display. When the ",(0,l.jsx)(n.code,{children:"label"})," changes, the activation\r\nbutton's label is updated to reflect this change. This property is also reflected to an attribute, ensuring\r\nconsistency between the property value and the HTML attribute."]}),"\n",(0,l.jsx)(n.h4,{id:"default-2",children:"Default"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"undefined\n"})}),"\n",(0,l.jsx)(n.h4,{id:"examples-1",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:'<bim-panel label="User Settings"></bim-panel>\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const panel = document.createElement('bim-panel');\r\npanel.label = 'User Settings';\r\ndocument.body.appendChild(panel);\n"})}),"\n",(0,l.jsx)(n.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"HasName.label"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"name?"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"optional"})," ",(0,l.jsx)(n.strong,{children:"name"}),": ",(0,l.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["The name of the panel. This property serves as an identifier and can also be displayed on the panel's\r\nactivation button if the ",(0,l.jsx)(n.code,{children:"label"})," property is not set. Changing the ",(0,l.jsx)(n.code,{children:"name"})," property will update the label\r\nof the activation button to reflect the new name if no label is explicitly provided. This property is\r\nreflected to an attribute, allowing for synchronization between the property and the HTML attribute."]}),"\n",(0,l.jsx)(n.h4,{id:"default-3",children:"Default"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"undefined\n"})}),"\n",(0,l.jsx)(n.h4,{id:"examples-2",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:'<bim-panel name="user-settings"></bim-panel>\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const panel = document.createElement('bim-panel');\r\npanel.name = 'user-settings';\r\ndocument.body.appendChild(panel);\n"})}),"\n",(0,l.jsx)(n.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"HasName.name"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"valuetransform",children:"valueTransform"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"valueTransform"}),": ",(0,l.jsx)(n.code,{children:"Record"}),"<",(0,l.jsx)(n.code,{children:"string"}),", (",(0,l.jsx)(n.code,{children:"value"}),") => ",(0,l.jsx)(n.code,{children:"any"}),"> = ",(0,l.jsx)(n.code,{children:"{}"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["A record that maps element names or labels to transformation functions.\r\nThis record is used to transform the values from elements before they are returned as part of the ",(0,l.jsx)(n.code,{children:"value"})," property."]}),"\n",(0,l.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"// Example usage of ValueTransform\r\nconst valueTransform = {\r\n  date: (value: string) => new Date(value), // Transform date value from string to Date object\r\n};\n\nconst panel = document.getElementById('your-bim-panel'); // should have some inputs inside\r\npanel.valueTransform = valueTransform;\n\n// Now, when accessing the `value` property of the panel, the values of the specified elements will be transformed accordingly\r\nconsole.log(panel.value); // Output: { date: Date object }\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"styles",children:"styles"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"static"})," ",(0,l.jsx)(n.strong,{children:"styles"}),": ",(0,l.jsx)(n.code,{children:"CSSResult"}),"[]"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"CSS styles for the component."}),"\n",(0,l.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"LitElement.styles"})}),"\n",(0,l.jsx)(n.h2,{id:"accessors",children:"Accessors"}),"\n",(0,l.jsx)(n.h3,{id:"hidden",children:"hidden"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"set"})," ",(0,l.jsx)(n.strong,{children:"hidden"}),"(",(0,l.jsx)(n.code,{children:"value"}),"): ",(0,l.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Sets the hidden state of the panel."}),"\n",(0,l.jsx)(n.h4,{id:"fires",children:"Fires"}),"\n",(0,l.jsx)(n.p,{children:"hiddenchange - Fired when the hidden state changes."}),"\n",(0,l.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"value"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"boolean"})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["The new hidden state. If ",(0,l.jsx)(n.code,{children:"true"}),", the panel will be hidden. If ",(0,l.jsx)(n.code,{children:"false"}),", the panel will be shown."]})]})})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"value",children:"value"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"get"})," ",(0,l.jsx)(n.strong,{children:"value"}),"(): ",(0,l.jsx)(n.code,{children:"Record"}),"<",(0,l.jsx)(n.code,{children:"string"}),", ",(0,l.jsx)(n.code,{children:"any"}),">"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"value"})," getter computes and returns the current state of the panel's form elements as an object. This property is dynamic and reflects the current input values within the panel. When accessed, it traverses the panel's child elements, collecting values from those that have a ",(0,l.jsx)(n.code,{children:"name"})," or ",(0,l.jsx)(n.code,{children:"label"})," attribute, and constructs an object where each key corresponds to the ",(0,l.jsx)(n.code,{children:"name"})," or ",(0,l.jsx)(n.code,{children:"label"})," of the element, and the value is the element's value. This property is particularly useful for forms or interactive panels where the user's input needs to be retrieved programmatically. The value returned is a snapshot of the panel's state at the time of access, and it does not maintain a live link to the input elements."]}),"\n",(0,l.jsx)(n.h4,{id:"default-4",children:"Default"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"{}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"examples-3",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"<bim-panel></bim-panel> \x3c!-- Access via JavaScript to get value --\x3e\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const panel = document.createElement('bim-panel');\r\ndocument.body.appendChild(panel);\r\nconsole.log(panel.value); // Logs the current value object of the panel\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"set"})," ",(0,l.jsx)(n.strong,{children:"value"}),"(",(0,l.jsx)(n.code,{children:"data"}),"): ",(0,l.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"value"})," setter allows programmatically updating the values of the panel's form elements. When a data object is passed to this property, it attempts to match the object's keys with the ",(0,l.jsx)(n.code,{children:"name"})," or ",(0,l.jsx)(n.code,{children:"label"})," attributes of the panel's child elements. If a match is found, the corresponding element's value is updated to the value associated with the key in the data object. This property is useful for initializing the panel with specific data or updating its state based on external inputs. Note that this operation does not affect elements without a matching ",(0,l.jsx)(n.code,{children:"name"})," or ",(0,l.jsx)(n.code,{children:"label"}),", and it only updates the values of elements that are direct children of the panel."]}),"\n",(0,l.jsx)(n.h4,{id:"examples-4",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"<bim-panel></bim-panel> \x3c!-- Set value via JavaScript --\x3e\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const panel = document.createElement('bim-panel');\r\ndocument.body.appendChild(panel);\r\npanel.value = { 'input-name': 'John Doe', 'checkbox-name': true };\n"})}),"\n",(0,l.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"data"})}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,l.jsx)(n.code,{children:"Record"}),"<",(0,l.jsx)(n.code,{children:"string"}),", ",(0,l.jsx)(n.code,{children:"any"}),">"]})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Record"}),"<",(0,l.jsx)(n.code,{children:"string"}),", ",(0,l.jsx)(n.code,{children:"any"}),">"]}),"\n",(0,l.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(n.h3,{id:"collapsesections",children:"collapseSections()"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"collapseSections"}),"(): ",(0,l.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Collapses all ",(0,l.jsx)(n.code,{children:"bim-panel-section"})," elements within the panel.\r\nThis method iterates over each ",(0,l.jsx)(n.code,{children:"bim-panel-section"})," found within the panel's DOM and sets their ",(0,l.jsx)(n.code,{children:"collapsed"})," property to ",(0,l.jsx)(n.code,{children:"true"}),",\r\neffectively hiding their content from view. This can be used to programmatically minimize the space taken up by sections\r\nwithin the panel, making the panel more compact or to hide details that are not immediately necessary."]}),"\n",(0,l.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"void"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"expandsections",children:"expandSections()"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"expandSections"}),"(): ",(0,l.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Expands all ",(0,l.jsx)(n.code,{children:"bim-panel-section"})," elements within the panel.\r\nThis method iterates over each ",(0,l.jsx)(n.code,{children:"bim-panel-section"})," found within the panel's DOM and sets their ",(0,l.jsx)(n.code,{children:"collapsed"})," property to ",(0,l.jsx)(n.code,{children:"false"}),",\r\neffectively showing their content. This can be used to programmatically reveal the content of sections within the panel,\r\nmaking the panel more informative or to display details that are necessary for the user."]}),"\n",(0,l.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"void"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var l=t(6540);const s={},i=l.createContext(s);function a(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);