"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[4942],{6559:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=s(4848),t=s(8453);const o={},r="BCFTopicsConfig",l={id:"api/@thatopen/components/interfaces/BCFTopicsConfig",title:"BCFTopicsConfig",description:"Configuration settings for managing BCF topics.",source:"@site/docs/api/@thatopen/components/interfaces/BCFTopicsConfig.md",sourceDirName:"api/@thatopen/components/interfaces",slug:"/api/@thatopen/components/interfaces/BCFTopicsConfig",permalink:"/api/@thatopen/components/interfaces/BCFTopicsConfig",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AttributeListener",permalink:"/api/@thatopen/components/interfaces/AttributeListener"},next:{title:"CameraControllable",permalink:"/api/@thatopen/components/interfaces/CameraControllable"}},c={},d=[{value:"Properties",id:"properties",level:2},{value:"author",id:"author",level:3},{value:"fallbackVersionOnImport",id:"fallbackversiononimport",level:3},{value:"ignoreIncompleteTopicsOnImport",id:"ignoreincompletetopicsonimport",level:3},{value:"includeAllExtensionsOnExport",id:"includeallextensionsonexport",level:3},{value:"includeSelectionTag",id:"includeselectiontag",level:3},{value:"labels",id:"labels",level:3},{value:"priorities",id:"priorities",level:3},{value:"stages",id:"stages",level:3},{value:"statuses",id:"statuses",level:3},{value:"strict",id:"strict",level:3},{value:"types",id:"types",level:3},{value:"updateExtensionsOnImport",id:"updateextensionsonimport",level:3},{value:"users",id:"users",level:3},{value:"version",id:"version",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"bcftopicsconfig",children:"BCFTopicsConfig"}),"\n",(0,i.jsx)(n.p,{children:"Configuration settings for managing BCF topics.\r\nThis interface defines the properties and their meanings used to control the behavior of exporting and importing BCF topics."}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"author",children:"author"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"author"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The email of the user creating topics using this component."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"fallbackversiononimport",children:"fallbackVersionOnImport"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"fallbackVersionOnImport"}),": ",(0,i.jsx)(n.code,{children:"null"})," | ",(0,i.jsx)(n.code,{children:"BCFVersion"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Version to be used when importing if no bcf.version file is present in the incoming data.\r\nWhen null, the importer will throw an error if the version is missing or is not supported."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"ignoreincompletetopicsonimport",children:"ignoreIncompleteTopicsOnImport"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ignoreIncompleteTopicsOnImport"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If true, do not import a topic with missing information (guid, type, status, title, creationDate or creationAuthor).\r\nIf false, use default values for missing data."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"includeallextensionsonexport",children:"includeAllExtensionsOnExport"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"includeAllExtensionsOnExport"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If true, export the extensions (types, status, etc.) based on topics data. This doesn't update the extensions in the config.\r\nIf false, only export the extensions defined in each collection of possibilities set in the config.\r\nIn all cases, all the values from each collection of extensions defined in the config are going to be exported."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"includeselectiontag",children:"includeSelectionTag"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"includeSelectionTag"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Whether or not to include the AuthoringSoftwareId in the viewpoint components during export."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"labels",children:"labels"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"labels"}),": ",(0,i.jsx)(n.code,{children:"Set"}),"<",(0,i.jsx)(n.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The set of allowed topic labels. This is exported inside the\r\n",(0,i.jsx)(n.a,{href:"https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure",children:"bcf.extensions"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"priorities",children:"priorities"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"priorities"}),": ",(0,i.jsx)(n.code,{children:"Set"}),"<",(0,i.jsx)(n.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The set of allowed topic priorities. This is exported inside the\r\n",(0,i.jsx)(n.a,{href:"https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure",children:"bcf.extensions"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"stages",children:"stages"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"stages"}),": ",(0,i.jsx)(n.code,{children:"Set"}),"<",(0,i.jsx)(n.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The set of allowed topic stages. This is exported inside the\r\n",(0,i.jsx)(n.a,{href:"https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure",children:"bcf.extensions"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"statuses",children:"statuses"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"statuses"}),": ",(0,i.jsx)(n.code,{children:"Set"}),"<",(0,i.jsx)(n.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The set of allowed topic statuses. This is exported inside the\r\n",(0,i.jsx)(n.a,{href:"https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure",children:"bcf.extensions"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"strict",children:"strict"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"strict"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Only allow to use the extensions (types, statuses, etc.) defined in the config when setting the corresponding data in a topic."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"types",children:"types"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"types"}),": ",(0,i.jsx)(n.code,{children:"Set"}),"<",(0,i.jsx)(n.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The set of allowed topic types. This is exported inside the\r\n",(0,i.jsx)(n.a,{href:"https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure",children:"bcf.extensions"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"updateextensionsonimport",children:"updateExtensionsOnImport"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"updateExtensionsOnImport"}),": ",(0,i.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Updates the types, statuses, users, etc., after importing an external BCF."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"users",children:"users"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"users"}),": ",(0,i.jsx)(n.code,{children:"Set"}),"<",(0,i.jsx)(n.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The set of allowed topic users. This is exported inside the\r\n",(0,i.jsx)(n.a,{href:"https://github.com/buildingSMART/BCF-XML/tree/release_3_0/Documentation#bcf-file-structure",children:"bcf.extensions"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"version",children:"version"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"version"}),": ",(0,i.jsx)(n.code,{children:"BCFVersion"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The BCF version used during export."})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(6540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);