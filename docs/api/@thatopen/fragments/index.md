# @thatopen/fragments

## Enumerations

| Enumeration | Description |
| :------ | :------ |
| [CurrentLod](enumerations/CurrentLod.md) | Enum representing the current level of detail (LOD) for a mesh. |
| [ItemConfigClass](enumerations/ItemConfigClass.md) | Enum representing the configuration class for an item in a Fragments model. |
| [SnappingClass](enumerations/SnappingClass.md) | Enum representing the snapping class for a raycast operation. |

## Classes

| Class | Description |
| :------ | :------ |
| [FragmentsModel](classes/FragmentsModel.md) | The main class for managing a 3D model loaded from a fragments file. Handles geometry, materials, visibility, highlighting, sections, and more. This class orchestrates multiple specialized managers to handle different aspects of the model like mesh management, item data, raycasting, etc. It maintains the overall state and provides the main interface for interacting with the model. The model data is loaded and processed asynchronously across multiple threads. |
| [FragmentsModels](classes/FragmentsModels.md) | The main class for managing multiple 3D models loaded from fragments files. Handles loading, disposing, updating, raycasting, highlighting and coordinating multiple FragmentsModel instances. This class acts as the main entry point for working with fragments models. |
| [IfcImporter](classes/IfcImporter.md) | An objet to convert IFC files into fragments. |
| [SingleThreadedFragmentsModel](classes/SingleThreadedFragmentsModel.md) | The main class for managing a 3D model loaded from a fragments file in a single thread. It's designed for easy data querying in the backend, so all the 3D visualization logic is not present. |

## Interfaces

| Interface | Description |
| :------ | :------ |
| [Attributes](interfaces/Attributes.md) | Interface representing the attributes of a model item. |
| [ItemAttribute](interfaces/ItemAttribute.md) | Interface representing the attributes of an item in a Fragments model. |
| [ItemData](interfaces/ItemData.md) | Interface representing the data of an item in a Fragments model. |
| [ItemsDataConfig](interfaces/ItemsDataConfig.md) | Interface representing the configuration for item data in a Fragments model. |
| [MappedInformationResult](interfaces/MappedInformationResult.md) | Interface representing the result of an information query for a specific item type. |
| [MappedResultInput](interfaces/MappedResultInput.md) | Interface representing the input for a result query in a Fragments model. |
| [MappedSelectionInput](interfaces/MappedSelectionInput.md) | Interface representing the input for a selection query in a Fragments model. |
| [ModelIdMap](interfaces/ModelIdMap.md) | Interface representing a map of model IDs to their corresponding local IDs. |
| [RaycastData](interfaces/RaycastData.md) | Interface representing the data for a raycast operation. |
| [RaycastResult](interfaces/RaycastResult.md) | Interface representing the result of a raycast operation. |
| [RectangleRaycastData](interfaces/RectangleRaycastData.md) | Interface representing the data for a rectangle raycast operation. |
| [RectangleRaycastResult](interfaces/RectangleRaycastResult.md) | Interface representing the result of a rectangle raycast operation. |
| [RelsModifyChange](interfaces/RelsModifyChange.md) | Interface representing a change event when relations are modified in a model item. |
| [SpatialTreeItem](interfaces/SpatialTreeItem.md) | Interface representing an item in a spatial tree. |
| [VirtualModelConfig](interfaces/VirtualModelConfig.md) | Interface representing the configuration for a virtual model. |
| [VirtualPropertiesConfig](interfaces/VirtualPropertiesConfig.md) | Interface representing the configuration for virtual properties in a Fragments model. |

## Type Aliases

| Type alias | Description |
| :------ | :------ |
| [AttributeData](type-aliases/AttributeData.md) | Represents attribute data for a model item. |
| [AttrsChange](type-aliases/AttrsChange.md) | Union type representing all possible attribute change types. |
| [BIMMaterial](type-aliases/BIMMaterial.md) | Union type representing all possible material types. |
| [BIMMesh](type-aliases/BIMMesh.md) | Union type representing all possible mesh types. |
| [DataBuffer](type-aliases/DataBuffer.md) | Union type representing all possible data buffer types. |
| [Identifier](type-aliases/Identifier.md) | Type representing a unique identifier for a model item. This can be either a string or a number. |
| [InformationResultType](type-aliases/InformationResultType.md) | Type representing the result of an information query for a specific item type. |
| [ItemInformationType](type-aliases/ItemInformationType.md) | Union type representing all possible item information types. |
| [ItemSelectionType](type-aliases/ItemSelectionType.md) | Union type representing all possible item selection types. |
| [MaterialDefinition](type-aliases/MaterialDefinition.md) | Interface representing the definition of a material. |
| [MeshData](type-aliases/MeshData.md) | Interface representing the data of a mesh. |
| [RelsChange](type-aliases/RelsChange.md) | Union type representing all possible relation change types. |
| [ResultInputType](type-aliases/ResultInputType.md) | Union type representing all possible result input types. |
| [SelectionInputType](type-aliases/SelectionInputType.md) | Union type representing all possible selection input types. |

## Variables

| Variable | Description |
| :------ | :------ |
| [ifcCategoryMap](variables/ifcCategoryMap.md) | A map that associates each unique integer identifier (IFC Entity ID) with its corresponding category name. This map is used to map IFC entities to their respective categories for easier identification and processing. |
| [limitOf2Bytes](variables/limitOf2Bytes.md) | The maximum value for a 2-byte unsigned integer. |

## Functions

| Function | Description |
| :------ | :------ |
| [getObject](functions/getObject.md) | Recursively converts a Flatbuffers object into a plain JavaScript object. This function traverses the prototype chain of the Flatbuffers object and extracts all properties and their values, handling both primitive values and nested objects/arrays. |
