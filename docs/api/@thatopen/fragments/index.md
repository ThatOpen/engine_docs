# @thatopen/fragments

## Classes

| Class | Description |
| :------ | :------ |
| [Alignment](classes/Alignment.md) | Represents an alignment in a civil engineering project. An alignment consists of vertical, horizontal, and absolute civil curves. |
| [CivilCurve](classes/CivilCurve.md) | Represents an alignment curve of a civil engineering model. |
| [CurveMesh](classes/CurveMesh.md) | Represents an alignment 3D curve mesh with additional civil engineering properties. Extends THREE.LineSegments to provide geometry and material for the curve. |
| [Fragment](classes/Fragment.md) | Class representing a fragment of a 3D model. Fragments are just a simple wrapper around THREE.InstancedMesh. Each fragment can contain Items (identified by ItemID) which are mapped to one or many instances inside this THREE.InstancedMesh. Fragments also implement features like instance buffer resizing and hiding out of the box. |
| [FragmentMesh](classes/FragmentMesh.md) | A class representing a THREE.InstancedMesh with additional properties for fragment data. |
| [FragmentsGroup](classes/FragmentsGroup.md) | A class representing a group of 3D fragments. This class extends THREE.Group and adds additional properties and methods for managing and interacting with the fragments it contains. |
| [Serializer](classes/Serializer.md) | Serializer class for handling the serialization and deserialization of 3D model data. It uses the [flatbuffers library](https://flatbuffers.dev/) for efficient data serialization and deserialization. |
| [StreamSerializer](classes/StreamSerializer.md) | A class for serializing and deserializing geometry data in a streamed format. |

## Interfaces

| Interface | Description |
| :------ | :------ |
| [FragmentIdMap](interfaces/FragmentIdMap.md) | A map that associates each fragmentID with a set of item IDs. |
| [IfcMetadata](interfaces/IfcMetadata.md) | Represents metadata related to the IFC model. |
| [IfcProperties](interfaces/IfcProperties.md) | Represents a map of IFC properties. |
| [IndexedGeometry](interfaces/IndexedGeometry.md) | Represents a THREE.js geometry with an index attribute. We always work with indexed geometries, and this allows us to not check the existence of the index attribute each time we access it. |
| [Item](interfaces/Item.md) | Represents an item in the 3D model. |

## Type Aliases

| Type alias | Description |
| :------ | :------ |
| [AlignmentType](type-aliases/AlignmentType.md) | Represents the type of alignment, which can be vertical, horizontal, or absolute. |
| [IfcSchema](type-aliases/IfcSchema.md) | Represents the version of the IFC schema used in the model. |
| [StreamedGeometries](type-aliases/StreamedGeometries.md) | Represents a map of streamed geometries. |
