# @thatopen/components

## Enumerations

| Enumeration | Description |
| :------ | :------ |
| [RendererMode](enumerations/RendererMode.md) | The mode of the renderer. If MANUAL, the renderer will be updated on command. If AUTO, the renderer will render on every update tick. |

## Classes

| Class | Description |
| :------ | :------ |
| [AsyncEvent](classes/AsyncEvent.md) | Simple event handler by [Jason Kleban](https://gist.github.com/JasonKleban/50cee44960c225ac1993c922563aa540). Keep in mind that if you want to remove it later, you might want to declare the callback as an object. If you want to maintain the reference to `this`, you will need to declare the callback as an arrow function. |
| [BCFTopics](classes/BCFTopics.md) | BCFTopics manages Building Collaboration Format (BCF) data the engine. It provides functionality for importing, exporting, and manipulating BCF data. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/BCFTopics). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/BCFTopics). |
| [Base](classes/Base.md) | Base class of the library. Useful for finding out the interfaces something implements. |
| [BaseCamera](classes/BaseCamera.md) | Abstract class representing a camera in a 3D world. All cameras should use this class as a base. |
| [BaseRenderer](classes/BaseRenderer.md) | Abstract class representing a renderer for a 3D world. All renderers should use this class as a base. |
| [BaseScene](classes/BaseScene.md) | Abstract class representing a base scene in the application. All scenes should use this class as a base. |
| [BaseWorldItem](classes/BaseWorldItem.md) | One of the elements that make a world. It can be either a scene, a camera or a renderer. |
| [BoundingBoxer](classes/BoundingBoxer.md) | An implementation of bounding box utilities that works for fragments. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/BoundingBoxer). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/BoundingBoxer). |
| [Classifier](classes/Classifier.md) | The Classifier component is responsible for grouping items from different models based on criteria. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Classifier). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Classifier). |
| [Clipper](classes/Clipper.md) | A lightweight component to easily create, delete and handle [clipping planes](https://threejs.org/docs/#api/en/materials/Material.clippingPlanes). 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Clipper). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Clipper). |
| [Comment](classes/Comment.md) | Represents a comment in a BCF Topic. |
| [Component](classes/Component.md) | Components are the building blocks of this library. Components are singleton elements that contain specific functionality. For instance, the Clipper Component can create, delete and handle 3D clipping planes. Components must be unique (they can't be instanced more than once per Components instance), and have a static UUID that identifies them uniquely. The can be accessed globally using the [Components](classes/Components.md) instance. |
| [Components](classes/Components.md) | The entry point of the Components library. It can create, delete and access all the components of the library globally, update all the updatable components automatically and dispose all the components, preventing memory leaks. |
| [ConfigManager](classes/ConfigManager.md) | A tool to manage all the configuration from the app centrally. 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/ConfigManager). |
| [DataMap](classes/DataMap.md) | A class that extends the built-in Map class and provides additional events for item set, update, delete, and clear operations. |
| [DataSet](classes/DataSet.md) | A class that extends the built-in Set class and provides additional functionality. It triggers events when items are added, deleted, or the set is cleared. |
| [Disposer](classes/Disposer.md) | A tool to safely remove meshes, geometries, materials and other items from memory to [prevent memory leaks](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Disposer). |
| [Event](classes/Event.md) | Simple event handler by [Jason Kleban](https://gist.github.com/JasonKleban/50cee44960c225ac1993c922563aa540). Keep in mind that if you want to remove it later, you might want to declare the callback as an object. If you want to maintain the reference to `this`, you will need to declare the callback as an arrow function. |
| [EventManager](classes/EventManager.md) | Simple class to easily toggle and reset event lists. |
| [FinderQuery](classes/FinderQuery.md) | Represents a finder query for retrieving items based on specified parameters. This class encapsulates the query logic, caching mechanism, and result management. |
| [FirstPersonMode](classes/FirstPersonMode.md) | A [NavigationMode](interfaces/NavigationMode.md) that allows first person navigation, simulating FPS video games. |
| [FragmentsManager](classes/FragmentsManager.md) | Component to load, delete and manage [fragments](https://github.com/ThatOpen/engine_fragment) efficiently. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/FragmentsManager). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/FragmentsManager). |
| [Grids](classes/Grids.md) | A component that manages grid instances. Each grid is associated with a unique world. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Grids). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Grids). |
| [Hider](classes/Hider.md) | A component that manages visibility of fragments within a 3D scene. It extends the base Component class and provides methods to control fragment visibility and isolation. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Hider). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Hider). |
| [IDSSpecification](classes/IDSSpecification.md) | Represents a single specification from the Information Delivery Specification (IDS) standard. |
| [IDSSpecifications](classes/IDSSpecifications.md) | Component that manages Information Delivery Specification (IDS) data. It provides functionality for importing, exporting, and manipulating IDS data. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IDSSpecifications). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IDSSpecifications). |
| [IfcFragmentSettings](classes/IfcFragmentSettings.md) | Configuration of the IFC-fragment conversion. |
| [IfcLoader](classes/IfcLoader.md) | The IfcLoader component is responsible of converting IFC files into Fragments. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IfcLoader). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IfcLoader). |
| [ItemsFinder](classes/ItemsFinder.md) | Manages and executes queries to find items within models based on specified criteria. This class provides functionalities to create, store, and execute FinderQuery instances, allowing for efficient retrieval of items that match given query parameters. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/ItemsFinder). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/ItemsFinder). |
| [MeasurementUtils](classes/MeasurementUtils.md) | Utility component for performing measurements on 3D meshes by providing methods for measuring distances between edges and faces. 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/MeasurementUtils). |
| [ModelIdMapUtils](classes/ModelIdMapUtils.md) | Utility class for manipulating and managing `ModelIdMap` objects. A `ModelIdMap` is a mapping of model identifiers (strings) to sets of local IDs (numbers). This class provides methods for joining, intersecting, cloning, adding, removing, and comparing `ModelIdMap` objects, as well as converting between `ModelIdMap` and plain JavaScript objects. |
| [Mouse](classes/Mouse.md) | A helper to easily get the real position of the mouse in the Three.js canvas to work with tools like the [raycaster](https://threejs.org/docs/#api/en/core/Raycaster), even if it has been transformed through CSS or doesn't occupy the whole screen. |
| [OrbitMode](classes/OrbitMode.md) | A [NavigationMode](interfaces/NavigationMode.md) that allows 3D navigation and panning like in many 3D and CAD softwares. |
| [OrthoPerspectiveCamera](classes/OrthoPerspectiveCamera.md) | A flexible camera that uses [yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to control the camera in 2D and 3D. It supports multiple navigation modes, such as 2D floor plan navigation, first person and 3D orbit. This class extends the SimpleCamera class and adds additional functionality for managing different camera projections and navigation modes. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/OrthoPerspectiveCamera). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/OrthoPerspectiveCamera). |
| [PlanMode](classes/PlanMode.md) | A [NavigationMode](interfaces/NavigationMode.md) that allows to navigate floorplans in 2D, like many BIM tools. |
| [ProjectionManager](classes/ProjectionManager.md) | Object to control the [CameraProjection](type-aliases/CameraProjection.md) of the [OrthoPerspectiveCamera](classes/OrthoPerspectiveCamera.md). |
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
| [Viewpoint](classes/Viewpoint.md) | Represents a BCF compliant viewpoint from BuildingSMART. The Viewpoint class provides methods for managing and interacting with viewpoints. It includes functionality for setting viewpoint properties, updating the camera, applying color to components, and serializing the viewpoint for export. |
| [Views](classes/Views.md) | The `Views` class is responsible for managing and interacting with a collection of 2D sections. It provides methods for creating, opening, closing, and managing views, as well as generating views from specific configurations such as IFC storeys or bounding boxes. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Views). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Views). |
| [Worlds](classes/Worlds.md) | A class representing a collection of worlds within a game engine. It manages the creation, deletion, and update of worlds. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Worlds). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Worlds). |

## Interfaces

| Interface | Description |
| :------ | :------ |
| [AddClassificationConfig](interfaces/AddClassificationConfig.md) | Configuration options for adding a classification. |
| [BCFTopicsConfig](interfaces/BCFTopicsConfig.md) | Configuration settings for managing BCF topics. This interface defines the properties and their meanings used to control the behavior of exporting and importing BCF topics. |
| [BCFViewpoint](interfaces/BCFViewpoint.md) | Represents a Building Collaboration Format (BCF) viewpoint. This interface is compliant with the BCF API specifications. |
| [CameraControllable](interfaces/CameraControllable.md) | Whether a camera uses the Camera Controls library. |
| [ClassificationGroupData](interfaces/ClassificationGroupData.md) | Represents the data structure for a classification group. |
| [ClassificationGroupQuery](interfaces/ClassificationGroupQuery.md) | Represents a query for a classification group. |
| [ClassifyItemRelationsConfig](interfaces/ClassifyItemRelationsConfig.md) | Configuration interface for classifying item by relation values. |
| [Configurable](interfaces/Configurable.md) | Whether this component supports to be configured. |
| [CreateElevationViewsConfig](interfaces/CreateElevationViewsConfig.md) | Configuration options for creating views from bounding boxes. |
| [CreateViewConfig](interfaces/CreateViewConfig.md) | Configuration options for creating views from a plane. |
| [CreateViewFromIfcStoreysConfig](interfaces/CreateViewFromIfcStoreysConfig.md) | Configuration options for creating a view from IFC storeys. |
| [Createable](interfaces/Createable.md) | Whether this component supports create and destroy operations. This generally applies for components that work with instances, such as clipping planes or dimensions. |
| [Disposable](interfaces/Disposable.md) | Whether this component has to be manually destroyed once you are done with it to prevent [memory leaks](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects). This also ensures that the DOM events created by that component will be cleaned up. |
| [Eventable](interfaces/Eventable.md) | Whether it has events or not. |
| [Hideable](interfaces/Hideable.md) | Whether the geometric representation of this component can be hidden or shown in the [Three.js scene](https://threejs.org/docs/#api/en/scenes/Scene). |
| [MeasureEdge](interfaces/MeasureEdge.md) | Represents an edge measurement result. |
| [NavigationMode](interfaces/NavigationMode.md) | An object that determines the behavior of the camera controls and the user input (e.g. 2D floor plan mode, first person mode, etc). |
| [Progress](interfaces/Progress.md) | Basic type to describe the progress of any kind of process. |
| [QueryTestConfig](interfaces/QueryTestConfig.md) | Configuration for testing queries. |
| [RemoveClassifierItemsConfig](interfaces/RemoveClassifierItemsConfig.md) | Configuration options for removing items from a classifier. |
| [Resizeable](interfaces/Resizeable.md) | Whether this component can be resized. The meaning of this can vary depending on the component: resizing a [Renderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer) component could mean changing its resolution, whereas resizing a [Mesh](https://threejs.org/docs/#api/en/objects/Mesh) would change its scale. |
| [SerializedFinderQuery](interfaces/SerializedFinderQuery.md) | Represents a serialized query for an item finder. |
| [SerializedQueryParameters](interfaces/SerializedQueryParameters.md) | Represents the serialized query parameters used for item finding. |
| [ShadowedSceneConfig](interfaces/ShadowedSceneConfig.md) | Configuration interface for the [ShadowedScene](classes/ShadowedScene.md). Defines properties for directional and ambient lights, as well as shadows. |
| [SimpleGridConfig](interfaces/SimpleGridConfig.md) | Configuration interface for the [SimpleGrid](classes/SimpleGrid.md). |
| [SimpleSceneConfig](interfaces/SimpleSceneConfig.md) | Configuration interface for the [SimpleScene](classes/SimpleScene.md). |
| [Updateable](interfaces/Updateable.md) | Whether this component should be updated each frame. |
| [VertexPickerConfig](interfaces/VertexPickerConfig.md) | Configuration interface for the VertexPicker component. |
| [ViewpointBitmap](interfaces/ViewpointBitmap.md) | Represents a bitmap image associated with a viewpoint. This interface is compliant with the BCF API specifications. |
| [ViewpointCamera](interfaces/ViewpointCamera.md) | Represents the properties of a camera viewpoint in a 3D space. This interface is compliant with the BCF API specifications. |
| [ViewpointClippingPlane](interfaces/ViewpointClippingPlane.md) | Represents a clipping plane in a viewpoint, defined by its location and direction. This interface is compliant with the BCF API specifications. |
| [ViewpointColoring](interfaces/ViewpointColoring.md) | Represents the coloring information for a viewpoint, including the color and associated components. This interface is compliant with the BCF API specifications. |
| [ViewpointComponent](interfaces/ViewpointComponent.md) | Represents a component within a viewpoint, typically used in Building Information Modeling (BIM) workflows. This interface is compliant with the BCF API specifications. |
| [ViewpointComponents](interfaces/ViewpointComponents.md) | Represents the components of a viewpoint in the BCF API. This interface is compliant with the BCF API specifications. |
| [ViewpointLine](interfaces/ViewpointLine.md) | Represents a line defined by a start and end point in a viewpoint. This interface is compliant with the BCF API specifications. |
| [ViewpointSnapshot](interfaces/ViewpointSnapshot.md) | Represents a snapshot of a viewpoint, including its type and data. This interface is compliant with the BCF API specifications. |
| [ViewpointVector](interfaces/ViewpointVector.md) | Represents a 3D vector with x, y, and z coordinates. |
| [ViewpointVisibility](interfaces/ViewpointVisibility.md) | Represents the visibility settings for a viewpoint. This interface is compliant with the BCF API specifications. |
| [WithUi](interfaces/WithUi.md) | Whether it has a UI or not. |
| [World](interfaces/World.md) | Represents a 3D world with meshes, scene, camera, renderer, and other properties. |

## Type Aliases

| Type alias | Description |
| :------ | :------ |
| [CameraProjection](type-aliases/CameraProjection.md) | The projection system of the camera. |
| [ClassifierIntersectionInput](type-aliases/ClassifierIntersectionInput.md) | Represents the input structure for a classifier intersection operation. Defines a record where the keys are classification names and the values are arrays of group names within those classifications. |
| [IDSCheckResult](type-aliases/IDSCheckResult.md) | The result of a check performed by an IDSFacet test. |
| [ModelIdMap](type-aliases/ModelIdMap.md) | Mapping of model identifiers to a collection of numbers representing localIds. |
| [NavModeID](type-aliases/NavModeID.md) | The extensible list of supported navigation modes. |
| [QueryResultAggregation](type-aliases/QueryResultAggregation.md) | Represents the type of aggregation used in a query result. `inclusive`: Equivalent to OR. `exclusive`: Equivalent to AND. |
| [ViewpointOrthogonalCamera](type-aliases/ViewpointOrthogonalCamera.md) | Represents an orthogonal camera viewpoint, extending the base `ViewpointCamera` type. This interface is compliant with the BCF API specifications. |
| [ViewpointPerspectiveCamera](type-aliases/ViewpointPerspectiveCamera.md) | Represents a perspective camera viewpoint compliant with the BCF API specifications. Extends the `ViewpointCamera` type and includes additional properties specific to perspective cameras. |
