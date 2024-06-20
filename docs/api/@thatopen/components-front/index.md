# @thatopen/components-front

## Classes

| Class | Description |
| :------ | :------ |
| [AngleMeasurement](classes/AngleMeasurement.md) | This component allows users to measure angles in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/AngleMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/AngleMeasurement). |
| [AreaMeasurement](classes/AreaMeasurement.md) | This component allows users to measure areas in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/AreaMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/AreaMeasurement). |
| [Civil3DNavigator](classes/Civil3DNavigator.md) | This component provides functionality for navigating and interacting with civil engineering data in a 3D environment. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Civil3DNavigator). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Civil3DNavigator). |
| [CivilCrossSectionNavigator](classes/CivilCrossSectionNavigator.md) | This component is used to navigate and visualize cross sections of a 3D model. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/CivilCrossSectionNavigator). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/CivilCrossSectionNavigator). |
| [CivilElevationNavigator](classes/CivilElevationNavigator.md) | This component is responsible for navigating and visualizing elevation data of infra/civil models (vertical alignments). 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/CivilElevationNavigator). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/CivilElevationNavigator). |
| [CivilNavigator](classes/CivilNavigator.md) | Abstract class representing a Civil Navigator. It provides functionality to navigate and interact with civil engineering data. |
| [CivilPlanNavigator](classes/CivilPlanNavigator.md) | This component is responsible for navigating and visualizing plan data of infra/civil models (horizontal alignments). 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/CivilPlanNavigator). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/CivilPlanNavigator). |
| [ClipEdges](classes/ClipEdges.md) | A component that can add fills and outlines to the Clipper. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/ClipEdges). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/ClipEdges). |
| [ClippingEdges](classes/ClippingEdges.md) | Class representing the ClippingEdges component. This is responsible for managing and rendering the edges of clipped objects. |
| [ClippingFills](classes/ClippingFills.md) | Class for managing and rendering the fills of a clipping plane. |
| [EdgeMeasurement](classes/EdgeMeasurement.md) | This component allows users to measure geometry edges in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/EdgeMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/EdgeMeasurement). |
| [EdgesPlane](classes/EdgesPlane.md) | A more advanced version of Clipper planes that also includes edges and fills. |
| [EdgesStyles](classes/EdgesStyles.md) | A class representing styles for clipping edges in a 3D scene. |
| [FaceMeasurement](classes/FaceMeasurement.md) | This component allows users to measure geometry faces in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/FaceMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/FaceMeasurement). |
| [GraphicVertexPicker](classes/GraphicVertexPicker.md) | A class that extends OBC.VertexPicker to provide a graphical marker for picking vertices in a 3D scene. |
| [Highlighter](classes/Highlighter.md) | This component allows highlighting and selecting fragments in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Highlighter). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Highlighter). |
| [IfcStreamer](classes/IfcStreamer.md) | The IfcStreamer component is responsible for managing and streaming tiled IFC data. It provides methods for loading, removing, and managing IFC models, as well as handling visibility and caching. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/IfcStreamer). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/IfcStreamer). |
| [LengthMeasurement](classes/LengthMeasurement.md) | A basic dimension tool to measure distances between 2 points in 3D and display a 3D symbol displaying the numeric value. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/LengthMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/LengthMeasurement). |
| [Mark](classes/Mark.md) | Represents a marker in the 3D world. |
| [Marker](classes/Marker.md) | Component for Managing Markers along with creating different types of markers. Every marker is a Simple2DMarker. For every marker that needs to be added, you can use the Manager to add the marker and change its look and feel. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Marker). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Marker). |
| [Plans](classes/Plans.md) | Component to easily define and navigate 2D floor plans. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Plans). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Plans). |
| [Postproduction](classes/Postproduction.md) | Class representing a post-processing effect manager for a 3D scene. It uses the EffectComposer from three.js to apply various post-processing effects. Thanks to [this](https://discourse.threejs.org/t/how-to-render-full-outlines-as-a-post-process-tutorial/22674). |
| [PostproductionRenderer](classes/PostproductionRenderer.md) | A class that extends RendererWith2D and adds post-processing capabilities. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/PostproductionRenderer). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/PostproductionRenderer). |
| [RendererWith2D](classes/RendererWith2D.md) | A basic renderer capable of rendering 3D and 2D objects ([Objec3Ds](https://threejs.org/docs/#api/en/core/Object3D) and [CSS2DObjects](https://threejs.org/docs/#examples/en/renderers/CSS2DRenderer) respectively). |
| [ShadowDropper](classes/ShadowDropper.md) | This component drops shadows on meshes in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/ShadowDropper). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/ShadowDropper). |
| [SimpleDimensionLine](classes/SimpleDimensionLine.md) | A class representing a simple dimension line in a 3D space. |
| [VolumeMeasurement](classes/VolumeMeasurement.md) | This component allows users to measure geometry volumes in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/VolumeMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/VolumeMeasurement). |

## Interfaces

| Interface | Description |
| :------ | :------ |
| [AreaSelection](interfaces/AreaSelection.md) | Represents a selection made by the user, containing area, perimeter, mesh, and label. |
| [BvhLineSegmentsGeometry](interfaces/BvhLineSegmentsGeometry.md) | A line segments geometry whose [BVH](https://github.com/gkjohnson/three-mesh-bvh) has been computed. |
| [ClipStyle](interfaces/ClipStyle.md) | A style defines the appearance of the lines of the [ClippingEdges](classes/ClippingEdges.md) for a set of meshes. |
| [DimensionData](interfaces/DimensionData.md) | Interface representing the data required to create a dimension line. |
| [Edge](interfaces/Edge.md) | The lines that are drawn when the clipping plane cuts the geometry specified by the [ClipStyle](interfaces/ClipStyle.md). |
| [HighlightEvents](interfaces/HighlightEvents.md) | Interface defining the events that the Highlighter class can trigger. Each highlighter has its own set of events, identified by the highlighter name. |
| [HighlighterConfig](interfaces/HighlighterConfig.md) | Interface defining the configuration options for the Highlighter class. |
| [IGroupedMarkers](interfaces/IGroupedMarkers.md) | Interface representing a group of markers. |
| [IMarker](interfaces/IMarker.md) | Interface representing a marker object. |
| [PlanView](interfaces/PlanView.md) | Necessary data to create a new floor plan in the navigator. |
| [PostproductionSettings](interfaces/PostproductionSettings.md) | Interface defining the settings for the post-processing effects. |
| [SerializedAreaMeasure](interfaces/SerializedAreaMeasure.md) | Represents a serialized version of an AreaSelection, used for saving and loading measurements. |
| [Shadow](interfaces/Shadow.md) | Represents a shadow object used in the application. |
| [Shadows](interfaces/Shadows.md) | Represents a collection of shadows, where each shadow is identified by a unique ID. The keys of the object are the IDs, and the values are the corresponding [Shadow](interfaces/Shadow.md) objects. |

## Type Aliases

| Type alias | Description |
| :------ | :------ |
| [CivilMarkerType](type-aliases/CivilMarkerType.md) | Represents the type of markers used in the CivilMarkerType class. |
| [Edges](type-aliases/Edges.md) | Type definition for the Edges object. The Edges object is a dictionary where the keys are strings and the values are of type [Edge](interfaces/Edge.md). It is used to store and manage multiple [Edge](interfaces/Edge.md) instances, each identified by a unique name. |
| [LineStyles](type-aliases/LineStyles.md) | A type representing a dictionary of [ClipStyle](interfaces/ClipStyle.md) objects, where the keys are the names of the styles. |
