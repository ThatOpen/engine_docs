# @thatopen/components

## Classes

| Class | Description |
| :------ | :------ |
| [AsyncEvent](classes/AsyncEvent.md) | Simple event handler by [Jason Kleban](https://gist.github.com/JasonKleban/50cee44960c225ac1993c922563aa540). Keep in mind that if you want to remove it later, you might want to declare the callback as an object. If you want to maintain the reference to `this`, you will need to declare the callback as an arrow function. |
| [Base](classes/Base.md) | Base class of the library. Useful for finding out the interfaces something implements. |
| [BaseCamera](classes/BaseCamera.md) | Abstract class representing a camera in the 3D world. All cameras should use this class as a base. |
| [BaseRenderer](classes/BaseRenderer.md) | Abstract class representing a renderer for a 3D world. All renderers should use this class as a base. |
| [BaseScene](classes/BaseScene.md) | Abstract class representing a base scene in the application. All scenes should use this class as a base. |
| [BaseWorldItem](classes/BaseWorldItem.md) | One of the elements that make a world. It can be either a scene, a camera or a renderer. |
| [BoundingBoxer](classes/BoundingBoxer.md) | A simple implementation of bounding box that works for fragments. The resulting bbox is not 100% precise, but it's fast, and should suffice for general use cases such as camera zooming or general boundary determination. |
| [Clipper](classes/Clipper.md) | A lightweight component to easily create and handle [clipping planes](https://threejs.org/docs/#api/en/materials/Material.clippingPlanes). |
| [Component](classes/Component.md) | Components are the building blocks of this library. Components are singleton elements that contain specific functionality. For instance, the Clipper Component can create, delete and handle 3D clipping planes. Components must be unique (they can't be instanced more than once per Components instance), and have a static UUID that identifies them uniquely. The can be accessed globally using the [Components](classes/Components.md) instance. |
| [Components](classes/Components.md) | The entry point of the Components library. It can create and access all the components of the library globally, update all the updatable components automatically and dispose all the components, preventing memory leaks. |
| [CullerRenderer](classes/CullerRenderer.md) | A base renderer to determine visibility on screen. |
| [Cullers](classes/Cullers.md) | A component that manages and provides culling functionality for meshes in a 3D scene. |
| [Disposer](classes/Disposer.md) | A tool to safely remove meshes and geometries from memory to [prevent memory leaks](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects). |
| [Event](classes/Event.md) | Simple event handler by [Jason Kleban](https://gist.github.com/JasonKleban/50cee44960c225ac1993c922563aa540). Keep in mind that if you want to remove it later, you might want to declare the callback as an object. If you want to maintain the reference to `this`, you will need to declare the callback as an arrow function. |
| [FirstPersonMode](classes/FirstPersonMode.md) | A [NavigationMode](interfaces/NavigationMode.md) that allows first person navigation, simulating FPS video games. |
| [FragmentsManager](classes/FragmentsManager.md) | Object that can efficiently load binary files that contain [fragment geometry](https://github.com/ThatOpen/engine_fragment). |
| [Grids](classes/Grids.md) | A component that manages and provides access to multiple grid instances. Each grid is associated with a unique world. |
| [IfcJsonExporter](classes/IfcJsonExporter.md) | Object to export all the properties from an IFC to a JS object. |
| [IfcRelationsIndexer](classes/IfcRelationsIndexer.md) | Indexer for IFC entities, facilitating the indexing and retrieval of IFC entity relationships. It is designed to process models properties by indexing their IFC entities' relations based on predefined inverse attributes, and provides methods to query these relations. |
| [IfcStreamingSettings](classes/IfcStreamingSettings.md) | Configuration of the IFC-fragment streaming. |
| [MeshCullerRenderer](classes/MeshCullerRenderer.md) | A renderer to determine a mesh visibility on screen. |
| [MiniMaps](classes/MiniMaps.md) | A component that manages multiple MiniMap instances, each associated with a unique world ID. |
| [OrbitMode](classes/OrbitMode.md) | A [NavigationMode](interfaces/NavigationMode.md) that allows 3D navigation and panning like in many 3D and CAD softwares. |
| [OrthoPerspectiveCamera](classes/OrthoPerspectiveCamera.md) | A flexible camera that uses [yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to easily control the camera in 2D and 3D. It supports multiple navigation modes, such as 2D floor plan navigation, first person and 3D orbit. This class extends the SimpleCamera class and adds additional functionality for managing different camera projections and navigation modes. |
| [PlanMode](classes/PlanMode.md) | A [NavigationMode](interfaces/NavigationMode.md) that allows to navigate floorplans in 2D, like many BIM tools. |
| [ProjectionManager](classes/ProjectionManager.md) | Object to control the [CameraProjection](type-aliases/CameraProjection.md) of the [OrthoPerspectiveCamera](classes/OrthoPerspectiveCamera.md). |
| [PropertiesStreamingSettings](classes/PropertiesStreamingSettings.md) | Configuration of the IFC-fragment streaming. |
| [Raycasters](classes/Raycasters.md) | A component that manages raycasters for different worlds. It uses a Map to store raycasters for each world, and automatically disposes them when the world is disposed. |
| [SimpleCamera](classes/SimpleCamera.md) | A basic camera that uses [yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to easily control the camera in 2D and 3D. Check out it's API to find out what features it offers. |
| [SimplePlane](classes/SimplePlane.md) | Each of the planes created by the clipper. |
| [SimpleRenderer](classes/SimpleRenderer.md) | A basic renderer capable of rendering [Objec3Ds](https://threejs.org/docs/#api/en/core/Object3D). |
| [SimpleScene](classes/SimpleScene.md) | A basic 3D [scene](https://threejs.org/docs/#api/en/scenes/Scene) to add objects hierarchically, and easily dispose them when you are finished with it. |
| [SimpleWorld](classes/SimpleWorld.md) | A class representing a simple world in a 3D environment. It extends the Base class and implements the World interface. |
| [Worlds](classes/Worlds.md) | A class representing a collection of worlds within a game engine. It manages the creation, deletion, and update of worlds. |

## Interfaces

| Interface | Description |
| :------ | :------ |
| [CameraControllable](interfaces/CameraControllable.md) | Whether a camera uses the Camera Controls library. |
| [Configurable](interfaces/Configurable.md) | Whether this component supports to be configured. |
| [Createable](interfaces/Createable.md) | Whether this component supports create and destroy operations. This generally applies for components that work with instances, such as clipping planes or dimensions. |
| [CullerRendererSettings](interfaces/CullerRendererSettings.md) | Interface for settings to configure the CullerRenderer. |
| [Disposable](interfaces/Disposable.md) | Whether this component has to be manually destroyed once you are done with it to prevent [memory leaks](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects). This also ensures that the DOM events created by that component will be cleaned up. |
| [Hideable](interfaces/Hideable.md) | Whether the geometric representation of this component can be hidden or shown in the [Three.js scene](https://threejs.org/docs/#api/en/scenes/Scene). |
| [NavigationMode](interfaces/NavigationMode.md) | An object that determines the behavior of the camera controls and the user input (e.g. 2D floor plan mode, first person mode, etc). |
| [Progress](interfaces/Progress.md) | Basic type to describe the progress of any kind of process. |
| [Resizeable](interfaces/Resizeable.md) | Whether this component can be resized. The meaning of this can vary depending on the component: resizing a [Renderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer) component could mean changing its resolution, whereas resizing a [Mesh](https://threejs.org/docs/#api/en/objects/Mesh) would change its scale. |
| [SimpleSceneConfig](interfaces/SimpleSceneConfig.md) | Configuration interface for the [SimpleScene](classes/SimpleScene.md). Defines properties for directional and ambient lights. |
| [Updateable](interfaces/Updateable.md) | Whether this component should be updated each frame. |
| [World](interfaces/World.md) | Represents a 3D world with meshes, scene, camera, renderer, and other properties. |

## Type Aliases

| Type alias | Description |
| :------ | :------ |
| [CameraProjection](type-aliases/CameraProjection.md) | The projection system of the camera. |
| [NavModeID](type-aliases/NavModeID.md) | The extensible list of supported navigation modes. |
