"use strict";(self.webpackChunkengine_docs=self.webpackChunkengine_docs||[]).push([[2094],{8371:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var r=s(4848),i=s(8453);const t={},l="OrthoPerspectiveCamera",d={id:"api/@thatopen/components/classes/OrthoPerspectiveCamera",title:"OrthoPerspectiveCamera",description:"A flexible camera that uses yomotsu's cameracontrols to control the camera in 2D and 3D. It supports multiple navigation modes, such as 2D floor plan navigation, first person and 3D orbit. This class extends the SimpleCamera class and adds additional functionality for managing different camera projections and navigation modes. \ud83d\udcd5 Tutorial. \ud83d\udcd8 API.",source:"@site/docs/api/@thatopen/components/classes/OrthoPerspectiveCamera.md",sourceDirName:"api/@thatopen/components/classes",slug:"/api/@thatopen/components/classes/OrthoPerspectiveCamera",permalink:"/api/@thatopen/components/classes/OrthoPerspectiveCamera",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OrbitMode",permalink:"/api/@thatopen/components/classes/OrbitMode"},next:{title:"PlanMode",permalink:"/api/@thatopen/components/classes/PlanMode"}},a={},o=[{value:"Extends",id:"extends",level:2},{value:"Properties",id:"properties",level:2},{value:"currentWorld",id:"currentworld",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"onAfterUpdate",id:"onafterupdate",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"onAspectUpdated",id:"onaspectupdated",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"onBeforeUpdate",id:"onbeforeupdate",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"onDisposed",id:"ondisposed",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"onWorldChanged",id:"onworldchanged",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"action",id:"action",level:5},{value:"world",id:"world",level:5},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"projection",id:"projection",level:3},{value:"three",id:"three",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"threeOrtho",id:"threeortho",level:3},{value:"threePersp",id:"threepersp",level:3},{value:"Accessors",id:"accessors",level:2},{value:"controls",id:"controls",level:3},{value:"Returns",id:"returns",level:4},{value:"enabled",id:"enabled",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"mode",id:"mode",level:3},{value:"Throws",id:"throws",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Methods",id:"methods",level:2},{value:"dispose()",id:"dispose",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides",level:4},{value:"fit()",id:"fit",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"hasCameraControls()",id:"hascameracontrols",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"isConfigurable()",id:"isconfigurable",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"isDisposeable()",id:"isdisposeable",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"isHideable()",id:"ishideable",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"isResizeable()",id:"isresizeable",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"isUpdateable()",id:"isupdateable",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"set()",id:"set",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-11",level:4},{value:"setUserInput()",id:"setuserinput",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-12",level:4},{value:"update()",id:"update",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"updateAspect()",id:"updateaspect",level:3},{value:"Returns",id:"returns-14",level:4},{value:"Inherited from",id:"inherited-from-14",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"orthoperspectivecamera",children:"OrthoPerspectiveCamera"}),"\n",(0,r.jsxs)(n.p,{children:["A flexible camera that uses ",(0,r.jsx)(n.a,{href:"https://github.com/yomotsu/camera-controls",children:"yomotsu's cameracontrols"})," to control the camera in 2D and 3D. It supports multiple navigation modes, such as 2D floor plan navigation, first person and 3D orbit. This class extends the SimpleCamera class and adds additional functionality for managing different camera projections and navigation modes. \ud83d\udcd5 ",(0,r.jsx)(n.a,{href:"https://docs.thatopen.com/Tutorials/Components/Core/OrthoPerspectiveCamera",children:"Tutorial"}),". \ud83d\udcd8 ",(0,r.jsx)(n.a,{href:"https://docs.thatopen.com/api/@thatopen/components/classes/OrthoPerspectiveCamera",children:"API"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"currentworld",children:"currentWorld"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"currentWorld"}),": ",(0,r.jsx)(n.code,{children:"null"})," | ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/World",children:(0,r.jsx)(n.code,{children:"World"})})," = ",(0,r.jsx)(n.code,{children:"null"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The current world this item is associated with. It can be null if no world is currently active."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera#currentworld",children:(0,r.jsx)(n.code,{children:"currentWorld"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"onafterupdate",children:"onAfterUpdate"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"onAfterUpdate"}),": ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,r.jsx)(n.code,{children:"Event"})})," <",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable#onafterupdate",children:"Updateable.onAfterUpdate"})}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera#onafterupdate",children:(0,r.jsx)(n.code,{children:"onAfterUpdate"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"onaspectupdated",children:"onAspectUpdated"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"onAspectUpdated"}),": ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,r.jsx)(n.code,{children:"Event"})}),"<",(0,r.jsx)(n.code,{children:"unknown"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Event that is triggered when the aspect of the camera has been updated.\r\nThis event is useful when you need to perform actions after the aspect of the camera has been changed."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera#onaspectupdated",children:(0,r.jsx)(n.code,{children:"onAspectUpdated"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"onbeforeupdate",children:"onBeforeUpdate"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"onBeforeUpdate"}),": ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,r.jsx)(n.code,{children:"Event"})})," <",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable#onbeforeupdate",children:"Updateable.onBeforeUpdate"})}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera#onbeforeupdate",children:(0,r.jsx)(n.code,{children:"onBeforeUpdate"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"ondisposed",children:"onDisposed"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"onDisposed"}),": ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,r.jsx)(n.code,{children:"Event"})}),"<",(0,r.jsx)(n.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#ondisposed",children:"Disposable.onDisposed"})}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera#ondisposed",children:(0,r.jsx)(n.code,{children:"onDisposed"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"onworldchanged",children:"onWorldChanged"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"onWorldChanged"}),": ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/Event",children:(0,r.jsx)(n.code,{children:"Event"})}),"<",(0,r.jsx)(n.code,{children:"object"}),">"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Event that is triggered when a world is added or removed from the ",(0,r.jsx)(n.code,{children:"worlds"}),' map.\r\nThe event payload contains the world instance and the action ("added" or "removed").']}),"\n",(0,r.jsx)(n.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,r.jsx)(n.h5,{id:"action",children:"action"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"action"}),": ",(0,r.jsx)(n.code,{children:'"added"'})," | ",(0,r.jsx)(n.code,{children:'"removed"'})]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"world",children:"world"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"world"}),": ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/World",children:(0,r.jsx)(n.code,{children:"World"})})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-5",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera#onworldchanged",children:(0,r.jsx)(n.code,{children:"onWorldChanged"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"projection",children:"projection"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"projection"}),": ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/ProjectionManager",children:(0,r.jsx)(n.code,{children:"ProjectionManager"})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A ProjectionManager instance that manages the projection modes of the camera."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"three",children:"three"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"three"}),": ",(0,r.jsx)(n.code,{children:"PerspectiveCamera"})," | ",(0,r.jsx)(n.code,{children:"OrthographicCamera"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A three.js PerspectiveCamera or OrthographicCamera instance.\r\nThis camera is used for rendering the scene."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-6",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera#three",children:(0,r.jsx)(n.code,{children:"three"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"threeortho",children:"threeOrtho"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"threeOrtho"}),": ",(0,r.jsx)(n.code,{children:"OrthographicCamera"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A THREE.OrthographicCamera instance that represents the orthographic camera.\r\nThis camera is used when the projection mode is set to orthographic."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"threepersp",children:"threePersp"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"readonly"})," ",(0,r.jsx)(n.strong,{children:"threePersp"}),": ",(0,r.jsx)(n.code,{children:"PerspectiveCamera"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A THREE.PerspectiveCamera instance that represents the perspective camera.\r\nThis camera is used when the projection mode is set to perspective."}),"\n",(0,r.jsx)(n.h2,{id:"accessors",children:"Accessors"}),"\n",(0,r.jsx)(n.h3,{id:"controls",children:"controls"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"get"})," ",(0,r.jsx)(n.strong,{children:"controls"}),"(): ",(0,r.jsx)(n.code,{children:"CameraControls"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The object that controls the camera. An instance of\r\n",(0,r.jsx)(n.a,{href:"https://github.com/yomotsu/camera-controls",children:"yomotsu's cameracontrols"}),".\r\nTransforming the camera directly will have no effect: you need to use this\r\nobject to move, rotate, look at objects, etc."]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"CameraControls"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"enabled",children:"enabled"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"get"})," ",(0,r.jsx)(n.strong,{children:"enabled"}),"(): ",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Getter for the enabled state of the camera controls.\r\nIf the current world is null, it returns false.\r\nOtherwise, it returns the enabled state of the camera controls."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"set"})," ",(0,r.jsx)(n.strong,{children:"enabled"}),"(",(0,r.jsx)(n.code,{children:"enabled"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Setter for the enabled state of the camera controls.\r\nIf the current world is not null, it sets the enabled state of the camera controls to the provided value."}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"enabled"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The new enabled state of the camera controls."})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"boolean"})}),"\n",(0,r.jsx)(n.p,{children:"The enabled state of the camera controls."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"mode",children:"mode"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"get"})," ",(0,r.jsx)(n.strong,{children:"mode"}),"(): ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/NavigationMode",children:(0,r.jsx)(n.code,{children:"NavigationMode"})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Getter for the current navigation mode.\r\nThrows an error if the mode is not found or the camera is not initialized."}),"\n",(0,r.jsx)(n.h4,{id:"throws",children:"Throws"}),"\n",(0,r.jsx)(n.p,{children:"Throws an error if the mode is not found or the camera is not initialized."}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/NavigationMode",children:(0,r.jsx)(n.code,{children:"NavigationMode"})})}),"\n",(0,r.jsx)(n.p,{children:"The current navigation mode."}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"dispose",children:"dispose()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"dispose"}),"(): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable#dispose",children:"Disposable.dispose"})}),"\n",(0,r.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera#dispose",children:(0,r.jsx)(n.code,{children:"dispose"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"fit",children:"fit()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"fit"}),"(",(0,r.jsx)(n.code,{children:"meshes"}),", ",(0,r.jsx)(n.code,{children:"offset"}),"): ",(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Make the camera view fit all the specified meshes."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Default value"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"meshes"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:"Iterable"}),"<",(0,r.jsx)(n.code,{children:"Mesh"}),"<",(0,r.jsx)(n.code,{children:"BufferGeometry"}),"<",(0,r.jsx)(n.code,{children:"NormalBufferAttributes"}),">, ",(0,r.jsx)(n.code,{children:"Material"})," | ",(0,r.jsx)(n.code,{children:"Material"}),"[], ",(0,r.jsx)(n.code,{children:"Object3DEventMap"}),">>"]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"undefined"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"the meshes to fit. If it is not defined, it will"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"evaluate Components.meshes."}),(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"}}),(0,r.jsx)(n.td,{style:{textAlign:"left"}})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"offset"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"1.5"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"the distance to the fit object"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Promise"}),"<",(0,r.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"hascameracontrols",children:"hasCameraControls()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"hasCameraControls"}),"(): ",(0,r.jsx)(n.code,{children:"this is CameraControllable"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Checks whether the instance is ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/CameraControllable",children:"CameraControllable"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"this is CameraControllable"})}),"\n",(0,r.jsx)(n.p,{children:"True if the instance is controllable, false otherwise."}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-7",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera#hascameracontrols",children:(0,r.jsx)(n.code,{children:"hasCameraControls"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"isconfigurable",children:"isConfigurable()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"isConfigurable"}),"(): ",(0,r.jsx)(n.code,{children:"this is Configurable<any, any>"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Whether is component is ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Configurable",children:"Configurable"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"this is Configurable<any, any>"})}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-8",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera#isconfigurable",children:(0,r.jsx)(n.code,{children:"isConfigurable"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"isdisposeable",children:"isDisposeable()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"isDisposeable"}),"(): ",(0,r.jsx)(n.code,{children:"this is Disposable"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Whether is component is ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Disposable",children:"Disposable"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"this is Disposable"})}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-9",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera#isdisposeable",children:(0,r.jsx)(n.code,{children:"isDisposeable"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"ishideable",children:"isHideable()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"isHideable"}),"(): ",(0,r.jsx)(n.code,{children:"this is Hideable"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Whether is component is ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Hideable",children:"Hideable"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"returns-8",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"this is Hideable"})}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-10",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera#ishideable",children:(0,r.jsx)(n.code,{children:"isHideable"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"isresizeable",children:"isResizeable()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"isResizeable"}),"(): ",(0,r.jsx)(n.code,{children:"this is Resizeable"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Whether is component is ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Resizeable",children:"Resizeable"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"returns-9",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"this is Resizeable"})}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-11",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera#isresizeable",children:(0,r.jsx)(n.code,{children:"isResizeable"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"isupdateable",children:"isUpdateable()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"isUpdateable"}),"(): ",(0,r.jsx)(n.code,{children:"this is Updateable"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Whether is component is ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable",children:"Updateable"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"returns-10",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"this is Updateable"})}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-12",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera#isupdateable",children:(0,r.jsx)(n.code,{children:"isUpdateable"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"set",children:"set()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"set"}),"(",(0,r.jsx)(n.code,{children:"mode"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Sets a new ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/NavigationMode",children:"NavigationMode"})," and disables the previous one."]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"mode"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"/api/@thatopen/components/type-aliases/NavModeID",children:(0,r.jsx)(n.code,{children:"NavModeID"})})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["The ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/NavigationMode",children:"NavigationMode"})," to set."]})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-11",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setuserinput",children:"setUserInput()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"setUserInput"}),"(",(0,r.jsx)(n.code,{children:"active"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Allows or prevents all user input."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"active"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"whether to enable or disable user inputs."})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-12",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"update",children:"update()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"update"}),"(",(0,r.jsx)(n.code,{children:"_delta"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/@thatopen/components/interfaces/Updateable#update",children:"Updateable.update"})}),"\n",(0,r.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"_delta"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"number"})})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-13",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-13",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera#update",children:(0,r.jsx)(n.code,{children:"update"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"updateaspect",children:"updateAspect()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"updateAspect"}),"(): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Updates the aspect of the camera to match the size of the\r\nComponents.renderer."}),"\n",(0,r.jsx)(n.h4,{id:"returns-14",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.h4,{id:"inherited-from-14",children:"Inherited from"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera",children:(0,r.jsx)(n.code,{children:"SimpleCamera"})})," . ",(0,r.jsx)(n.a,{href:"/api/@thatopen/components/classes/SimpleCamera#updateaspect",children:(0,r.jsx)(n.code,{children:"updateAspect"})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var r=s(6540);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);