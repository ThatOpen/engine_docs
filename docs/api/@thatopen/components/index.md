# @thatopen/components

## Classes

| Class | Description |
| :------ | :------ |
| [AsyncEvent](classes/AsyncEvent.md) | Simple event handler by [Jason Kleban](https://gist.github.com/JasonKleban/50cee44960c225ac1993c922563aa540). Keep in mind that if you want to remove it later, you might want to declare the callback as an object. If you want to maintain the reference to `this`, you will need to declare the callback as an arrow function. |
| [Base](classes/Base.md) | Base class of the library. Useful for finding out the interfaces something implements. |
| [BaseCamera](classes/BaseCamera.md) | Abstract class representing a camera in a 3D world. All cameras should use this class as a base. |
| [BaseRenderer](classes/BaseRenderer.md) | Abstract class representing a renderer for a 3D world. All renderers should use this class as a base. |
| [BaseScene](classes/BaseScene.md) | Abstract class representing a base scene in the application. All scenes should use this class as a base. |
| [BaseWorldItem](classes/BaseWorldItem.md) | One of the elements that make a world. It can be either a scene, a camera or a renderer. |
| [BoundingBoxer](classes/BoundingBoxer.md) | A simple implementation of bounding box that works for fragments. The resulting bbox is not 100% precise, but it's fast, and should suffice for general use cases such as camera zooming or general boundary determination. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/BoundingBoxer). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/BoundingBoxer). |
| [Classifier](classes/Classifier.md) | The Classifier component is responsible for classifying and categorizing fragments based on various criteria. It provides methods to add, remove, find, and filter fragments based on their classification. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Classifier). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Classifier). |
| [Clipper](classes/Clipper.md) | A lightweight component to easily create, delete and handle [clipping planes](https://threejs.org/docs/#api/en/materials/Material.clippingPlanes). 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Clipper). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Clipper). |
| [Comment](classes/Comment.md) | Represents a comment in a BCF Topic. |
| [Component](classes/Component.md) | Components are the building blocks of this library. Components are singleton elements that contain specific functionality. For instance, the Clipper Component can create, delete and handle 3D clipping planes. Components must be unique (they can't be instanced more than once per Components instance), and have a static UUID that identifies them uniquely. The can be accessed globally using the [Components](classes/Components.md) instance. |
| [Components](classes/Components.md) | The entry point of the Components library. It can create, delete and access all the components of the library globally, update all the updatable components automatically and dispose all the components, preventing memory leaks. |
| [CullerRenderer](classes/CullerRenderer.md) | A base renderer to determine visibility on screen. |
| [Cullers](classes/Cullers.md) | A component that provides culling functionality for meshes in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Cullers). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Cullers). |
| [DataMap](classes/DataMap.md) | A class that extends the built-in Map class and provides additional events for item set, update, delete, and clear operations. |
| [DataSet](classes/DataSet.md) | A class that extends the built-in Set class and provides additional functionality. It triggers events when items are added, deleted, or the set is cleared. |
| [Disposer](classes/Disposer.md) | A tool to safely remove meshes, geometries, materials and other items from memory to [prevent memory leaks](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects). |
| [Event](classes/Event.md) | Simple event handler by [Jason Kleban](https://gist.github.com/JasonKleban/50cee44960c225ac1993c922563aa540). Keep in mind that if you want to remove it later, you might want to declare the callback as an object. If you want to maintain the reference to `this`, you will need to declare the callback as an arrow function. |
| [Exploder](classes/Exploder.md) | The Exploder component is responsible for managing the explosion of 3D model fragments (generally by floor). 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Exploder). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Exploder). |
| [FirstPersonMode](classes/FirstPersonMode.md) | A [NavigationMode](interfaces/NavigationMode.md) that allows first person navigation, simulating FPS video games. |
| [FragmentsManager](classes/FragmentsManager.md) | Component to load, delete and manage [fragments](https://github.com/ThatOpen/engine_fragment) efficiently. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/FragmentsManager). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/FragmentsManager). |
| [Grids](classes/Grids.md) | A component that manages grid instances. Each grid is associated with a unique world. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Grids). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Grids). |
| [Hider](classes/Hider.md) | A component that hides or isolates fragments within a 3D scene. It extends the base Component class and provides methods to control fragment visibility and isolation. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Hider). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Hider). |
| [IfcFragmentSettings](classes/IfcFragmentSettings.md) | Configuration of the IFC-fragment conversion. |
| [IfcGeometryTiler](classes/IfcGeometryTiler.md) | A component that handles the tiling of IFC geometries for efficient streaming. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IfcGeometryTiler). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IfcGeometryTiler). |
| [IfcJsonExporter](classes/IfcJsonExporter.md) | Component to export all the properties from an IFC to a JS object. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IfcJsonExporter). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IfcJsonExporter). |
| [IfcLoader](classes/IfcLoader.md) | The IfcLoader component is responsible for loading and processing IFC files. It utilizes the Web-IFC library to handle the IFC data and the Three.js library for 3D rendering. The class provides methods for setting up, loading, and cleaning up IFC files. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IfcLoader). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IfcLoader). |
| [IfcPropertiesManager](classes/IfcPropertiesManager.md) | Component to manage and edit properties and Psets in IFC files. |
| [IfcPropertiesTiler](classes/IfcPropertiesTiler.md) | A component that converts the properties of an IFC file to tiles. It uses the Web-IFC library to read and process the IFC data. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IfcPropertiesTiler). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IfcPropertiesTiler). |
| [IfcRelationsIndexer](classes/IfcRelationsIndexer.md) | Indexer component for IFC entities, facilitating the indexing and retrieval of IFC entity relationships. It is designed to process models properties by indexing their IFC entities' relations based on predefined inverse attributes, and provides methods to query these relations. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IfcRelationsIndexer). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IfcRelationsIndexer). |
| [IfcStreamingSettings](classes/IfcStreamingSettings.md) | Settings for streaming IFC geometry and assets. Extends [IfcFragmentSettings](classes/IfcFragmentSettings.md) to inherit common settings. |
| [MeasurementUtils](classes/MeasurementUtils.md) | Utility component for performing measurements on 3D meshes by providing methods for measuring distances between edges and faces. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/MeasurementUtils). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/MeasurementUtils). |
| [MeshCullerRenderer](classes/MeshCullerRenderer.md) | A renderer to hide/show meshes depending on their visibility from the user's point of view. |
| [MiniMap](classes/MiniMap.md) | A class representing a 2D minimap of a 3D world. |
| [MiniMaps](classes/MiniMaps.md) | A component that manages multiple [MiniMap](classes/MiniMap.md) instances, each associated with a unique world ID. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/MiniMap). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/MiniMaps). |
| [Mouse](classes/Mouse.md) | A helper to easily get the real position of the mouse in the Three.js canvas to work with tools like the [raycaster](https://threejs.org/docs/#api/en/core/Raycaster), even if it has been transformed through CSS or doesn't occupy the whole screen. |
| [OrbitMode](classes/OrbitMode.md) | A [NavigationMode](interfaces/NavigationMode.md) that allows 3D navigation and panning like in many 3D and CAD softwares. |
| [OrthoPerspectiveCamera](classes/OrthoPerspectiveCamera.md) | A flexible camera that uses [yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to control the camera in 2D and 3D. It supports multiple navigation modes, such as 2D floor plan navigation, first person and 3D orbit. This class extends the SimpleCamera class and adds additional functionality for managing different camera projections and navigation modes. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/OrthoPerspectiveCamera). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/OrthoPerspectiveCamera). |
| [PlanMode](classes/PlanMode.md) | A [NavigationMode](interfaces/NavigationMode.md) that allows to navigate floorplans in 2D, like many BIM tools. |
| [ProjectionManager](classes/ProjectionManager.md) | Object to control the [CameraProjection](type-aliases/CameraProjection.md) of the [OrthoPerspectiveCamera](classes/OrthoPerspectiveCamera.md). |
| [PropertiesStreamingSettings](classes/PropertiesStreamingSettings.md) | Settings for streaming properties. Extends [IfcFragmentSettings](classes/IfcFragmentSettings.md) to inherit common settings. |
| [Raycasters](classes/Raycasters.md) | A component that manages a raycaster for each world and automatically disposes it when its corresponding world is disposed. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Raycasters). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Raycasters). |
| [ShadowedScene](classes/ShadowedScene.md) | A scene that supports efficient cast shadows. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/ShadowedScene). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/ShadowedScene). |
| [SimpleCamera](classes/SimpleCamera.md) | A basic camera that uses [yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to control the camera in 2D and 3D. Check out it's API to find out what features it offers. |
| [SimpleGrid](classes/SimpleGrid.md) | An infinite grid. Created by [fyrestar](https://github.com/Fyrestar/THREE.InfiniteGridHelper) and translated to typescript by [dkaraush](https://github.com/dkaraush/THREE.InfiniteGridHelper/blob/master/InfiniteGridHelper.ts). |
| [SimplePlane](classes/SimplePlane.md) | Each of the clipping planes created by the clipper. |
| [SimpleRaycaster](classes/SimpleRaycaster.md) | A simple [raycaster](https://threejs.org/docs/#api/en/core/Raycaster) that allows to easily get items from the scene using the mouse and touch events. |
| [SimpleRenderer](classes/SimpleRenderer.md) | A basic renderer capable of rendering [Objec3Ds](https://threejs.org/docs/#api/en/core/Object3D). |
| [SimpleScene](classes/SimpleScene.md) | A basic 3D [scene](https://threejs.org/docs/#api/en/scenes/Scene) to add objects hierarchically, and easily dispose them when you are finished with it. |
| [SimpleWorld](classes/SimpleWorld.md) | A class representing a simple world in a 3D environment. It extends the Base class and implements the World interface. |
| [VertexPicker](classes/VertexPicker.md) | A class that provides functionality for picking vertices in a 3D scene. |
| [Worlds](classes/Worlds.md) | A class representing a collection of worlds within a game engine. It manages the creation, deletion, and update of worlds. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Worlds). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Worlds). |

## Interfaces

| Interface | Description |
| :------ | :------ |
| [AttributeListener](interfaces/AttributeListener.md) | Interface representing a map of attribute listeners. The keys are model UUIDs, and the values are objects with express IDs as keys, and objects with attribute names as keys, and Event objects as values. |
| [BCFTopicsConfig](interfaces/BCFTopicsConfig.md) | Configuration settings for managing BCF topics. This interface defines the properties and their meanings used to control the behavior of exporting and importing BCF topics. |
| [CameraControllable](interfaces/CameraControllable.md) | Whether a camera uses the Camera Controls library. |
| [ChangeMap](interfaces/ChangeMap.md) | Interface representing a map of changed entities in a model. The keys are model UUIDs, and the values are sets of express IDs of changed entities. |
| [Classification](interfaces/Classification.md) | Interface representing a classification system. The classification is organized by system and class name, and each class contains a map of fragment IDs with extra information. |
| [Configurable](interfaces/Configurable.md) | Whether this component supports to be configured. |
| [Createable](interfaces/Createable.md) | Whether this component supports create and destroy operations. This generally applies for components that work with instances, such as clipping planes or dimensions. |
| [CullerRendererSettings](interfaces/CullerRendererSettings.md) | Settings to configure the CullerRenderer. |
| [Disposable](interfaces/Disposable.md) | Whether this component has to be manually destroyed once you are done with it to prevent [memory leaks](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects). This also ensures that the DOM events created by that component will be cleaned up. |
| [GridConfig](interfaces/GridConfig.md) | Configuration interface for the [SimpleGrid](classes/SimpleGrid.md) class. |
| [Hideable](interfaces/Hideable.md) | Whether the geometric representation of this component can be hidden or shown in the [Three.js scene](https://threejs.org/docs/#api/en/scenes/Scene). |
| [MeasureEdge](interfaces/MeasureEdge.md) | Represents an edge measurement result. |
| [NavigationMode](interfaces/NavigationMode.md) | An object that determines the behavior of the camera controls and the user input (e.g. 2D floor plan mode, first person mode, etc). |
| [Progress](interfaces/Progress.md) | Basic type to describe the progress of any kind of process. |
| [Resizeable](interfaces/Resizeable.md) | Whether this component can be resized. The meaning of this can vary depending on the component: resizing a [Renderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer) component could mean changing its resolution, whereas resizing a [Mesh](https://threejs.org/docs/#api/en/objects/Mesh) would change its scale. |
| [ShadowedSceneConfig](interfaces/ShadowedSceneConfig.md) | Configuration interface for the [ShadowedScene](classes/ShadowedScene.md). Defines properties for directional and ambient lights, as well as shadows. |
| [SimpleSceneConfig](interfaces/SimpleSceneConfig.md) | Configuration interface for the [SimpleScene](classes/SimpleScene.md). Defines properties for directional and ambient lights. |
| [StreamedAsset](interfaces/StreamedAsset.md) | A streamed asset, which consists of multiple geometries. Each geometry in the asset is identified by a unique number (geometryID), and contains information about its transformation and color. |
| [StreamedGeometries](interfaces/StreamedGeometries.md) | A dictionary of geometries streamed from a server. Each geometry is identified by a unique number (id), and contains information about its bounding box, whether it has holes, and an optional file path for the geometry data. |
| [Updateable](interfaces/Updateable.md) | Whether this component should be updated each frame. |
| [VertexPickerConfig](interfaces/VertexPickerConfig.md) | Configuration interface for the VertexPicker component. |
| [World](interfaces/World.md) | Represents a 3D world with meshes, scene, camera, renderer, and other properties. |

## Type Aliases

| Type alias | Description |
| :------ | :------ |
| [BooleanPropTypes](type-aliases/BooleanPropTypes.md) | Types for boolean properties in IFC schema. |
| [CameraProjection](type-aliases/CameraProjection.md) | The projection system of the camera. |
| [NavModeID](type-aliases/NavModeID.md) | The extensible list of supported navigation modes. |
| [NumericPropTypes](type-aliases/NumericPropTypes.md) | Types for numeric properties in IFC schema. |
| [StringPropTypes](type-aliases/StringPropTypes.md) | Types for string properties in IFC schema. |

## Variables

| Variable | Description |
| :------ | :------ |
| [GeometryTypes](variables/GeometryTypes.md) | A Set of unique numbers representing different types of IFC geometries. |
| [IfcCategoryMap](variables/IfcCategoryMap.md) | A map that associates each unique integer identifier (IFC Entity ID) with its corresponding category name. This map is used to map IFC entities to their respective categories for easier identification and processing. |
| [IfcElements](variables/IfcElements.md) | A map of IFC element types to their corresponding names. The keys are the IFC entity type numbers, and the values are the names of the IFC entities. |
