# @thatopen/fragments

## Enumerations

| Enumeration | Description |
| :------ | :------ |
| [CurrentLod](enumerations/CurrentLod.md) | Enum representing the current level of detail (LOD) for a mesh. |
| [EditRequestType](enumerations/EditRequestType.md) | Types of edit requests. |
| [ItemConfigClass](enumerations/ItemConfigClass.md) | Enum representing the configuration class for an item in a Fragments model. |
| [SnappingClass](enumerations/SnappingClass.md) | Enum representing the snapping class for a raycast operation. |

## Classes

| Class | Description |
| :------ | :------ |
| [Editor](classes/Editor.md) | The Editor class provides functionality for editing and managing Fragments models. It handles operations like editing model elements, saving changes and managing edit history. |
| [FragmentsModel](classes/FragmentsModel.md) | The main class for managing a 3D model loaded from a fragments file. Handles geometry, materials, visibility, highlighting, sections, and more. This class orchestrates multiple specialized managers to handle different aspects of the model like mesh management, item data, raycasting, etc. It maintains the overall state and provides the main interface for interacting with the model. The model data is loaded and processed asynchronously across multiple threads. |
| [FragmentsModels](classes/FragmentsModels.md) | The main class for managing multiple 3D models loaded from fragments files. Handles loading, disposing, updating, raycasting, highlighting and coordinating multiple FragmentsModel instances. This class acts as the main entry point for working with fragments models. |
| [GeometryEngine](classes/GeometryEngine.md) | The geometry engine is responsible for generating geometry using web-ifc. It provides a high-level API to generate common BIM shapes like extrusions, sweeps, walls, and profiles. |
| [IfcImporter](classes/IfcImporter.md) | An objet to convert IFC files into fragments. |
| [SingleThreadedFragmentsModel](classes/SingleThreadedFragmentsModel.md) | The main class for managing a 3D model loaded from a fragments file in a single thread. It's designed for easy data querying in the backend, so all the 3D visualization logic is not present. |

## Interfaces

| Interface | Description |
| :------ | :------ |
| [Attributes](interfaces/Attributes.md) | Interface representing the attributes of a model item. |
| [BaseCreateRequest](interfaces/BaseCreateRequest.md) | Base interface for all create edit requests. |
| [BaseEditRequest](interfaces/BaseEditRequest.md) | Base interface for all edit requests. |
| [BaseUpdateRequest](interfaces/BaseUpdateRequest.md) | Base interface for all update edit requests. |
| [CreateGlobalTransformRequest](interfaces/CreateGlobalTransformRequest.md) | Interface for create global transform edit requests. |
| [CreateItemRequest](interfaces/CreateItemRequest.md) | Interface for create item edit requests. |
| [CreateLocalTransformRequest](interfaces/CreateLocalTransformRequest.md) | Interface for create local transform edit requests. |
| [CreateMaterialRequest](interfaces/CreateMaterialRequest.md) | Interface for create material edit requests. |
| [CreateRelationRequest](interfaces/CreateRelationRequest.md) | Interface for create relation edit requests. |
| [CreateRepresentationRequest](interfaces/CreateRepresentationRequest.md) | Interface for create representation edit requests. |
| [CreateSampleRequest](interfaces/CreateSampleRequest.md) | Interface for create sample edit requests. |
| [DeleteGlobalTransformRequest](interfaces/DeleteGlobalTransformRequest.md) | Interface for delete global transform edit requests. |
| [DeleteItemRequest](interfaces/DeleteItemRequest.md) | Interface for delete item edit requests. |
| [DeleteLocalTransformRequest](interfaces/DeleteLocalTransformRequest.md) | Interface for delete local transform edit requests. |
| [DeleteMaterialRequest](interfaces/DeleteMaterialRequest.md) | Interface for delete material edit requests. |
| [DeleteRelationRequest](interfaces/DeleteRelationRequest.md) | Interface for delete relation edit requests. |
| [DeleteRepresentationRequest](interfaces/DeleteRepresentationRequest.md) | Interface for delete representation edit requests. |
| [DeleteSampleRequest](interfaces/DeleteSampleRequest.md) | Interface for delete sample edit requests. |
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
| [UpdateGlobalTransformRequest](interfaces/UpdateGlobalTransformRequest.md) | Interface for update global transform edit requests. |
| [UpdateItemRequest](interfaces/UpdateItemRequest.md) | Interface for update item edit requests. |
| [UpdateLocalTransformRequest](interfaces/UpdateLocalTransformRequest.md) | Interface for update local transform edit requests. |
| [UpdateMaterialRequest](interfaces/UpdateMaterialRequest.md) | Interface for update material edit requests. |
| [UpdateMaxLocalIdRequest](interfaces/UpdateMaxLocalIdRequest.md) | Interface for update max local id edit requests. |
| [UpdateMetadataRequest](interfaces/UpdateMetadataRequest.md) | Interface for update metadata edit requests. |
| [UpdateRelationRequest](interfaces/UpdateRelationRequest.md) | Interface for update relation edit requests. |
| [UpdateRepresentationRequest](interfaces/UpdateRepresentationRequest.md) | Interface for update representation edit requests. |
| [UpdateSampleRequest](interfaces/UpdateSampleRequest.md) | Interface for update sample edit requests. |
| [UpdateSpatialStructureRequest](interfaces/UpdateSpatialStructureRequest.md) | Interface for update spatial structure edit requests. |
| [VirtualModelConfig](interfaces/VirtualModelConfig.md) | Interface representing the configuration for a virtual model. |
| [VirtualPropertiesConfig](interfaces/VirtualPropertiesConfig.md) | Interface representing the configuration for virtual properties in a Fragments model. |

## Type Aliases

| Type alias | Description |
| :------ | :------ |
| [AttributeData](type-aliases/AttributeData.md) | Represents attribute data for a model item. |
| [AttrsChange](type-aliases/AttrsChange.md) | Union type representing all possible attribute change types. |
| [BIMMaterial](type-aliases/BIMMaterial.md) | Union type representing all possible material types. |
| [BIMMesh](type-aliases/BIMMesh.md) | Union type representing all possible mesh types. |
| [CreateRequest](type-aliases/CreateRequest.md) | Type for create edit requests. |
| [DataBuffer](type-aliases/DataBuffer.md) | Union type representing all possible data buffer types. |
| [DeleteRequest](type-aliases/DeleteRequest.md) | Type for delete edit requests. |
| [EditRequest](type-aliases/EditRequest.md) | Type for all edit requests. |
| [ElementData](type-aliases/ElementData.md) | Container of all the data of an element of a fragments model. |
| [Identifier](type-aliases/Identifier.md) | Type representing a unique identifier for a model item. This can be either a string or a number. |
| [InformationResultType](type-aliases/InformationResultType.md) | Type representing the result of an information query for a specific item type. |
| [ItemInformationType](type-aliases/ItemInformationType.md) | Union type representing all possible item information types. |
| [ItemSelectionType](type-aliases/ItemSelectionType.md) | Union type representing all possible item selection types. |
| [MaterialDefinition](type-aliases/MaterialDefinition.md) | Interface representing the definition of a material. |
| [MeshData](type-aliases/MeshData.md) | Interface representing the data of a mesh. |
| [NewElementData](type-aliases/NewElementData.md) | Data defining a new element of a fragments model. |
| [RawCircleExtrusion](type-aliases/RawCircleExtrusion.md) | Data defining a circle extrusion geometry (e.g. reinforcement bars). |
| [RawGlobalTransformData](type-aliases/RawGlobalTransformData.md) | Data defining a global transform of a mesh. |
| [RawItemData](type-aliases/RawItemData.md) | Data defining a fragments item. It can be anything, from a property to property set or a physical element like a wall or a beam. |
| [RawMaterial](type-aliases/RawMaterial.md) | Data defining a fragments material. |
| [RawMetadataData](type-aliases/RawMetadataData.md) | Data defining metadata of the fragments model. |
| [RawRelationData](type-aliases/RawRelationData.md) | Data defining a fragments relation. |
| [RawRepresentation](type-aliases/RawRepresentation.md) | Data defining a representation of a geometry. |
| [RawSample](type-aliases/RawSample.md) | Data defining a sample (instance) of a mesh. |
| [RawShell](type-aliases/RawShell.md) | Data defining a shell geometry (e.g. a brep). |
| [RawTransformData](type-aliases/RawTransformData.md) | Data defining a transform (local or global) of a mesh. |
| [RelsChange](type-aliases/RelsChange.md) | Union type representing all possible relation change types. |
| [ResultInputType](type-aliases/ResultInputType.md) | Union type representing all possible result input types. |
| [SelectionInputType](type-aliases/SelectionInputType.md) | Union type representing all possible selection input types. |
| [UpdateRequest](type-aliases/UpdateRequest.md) | Type for update edit requests. |

## Variables

| Variable | Description |
| :------ | :------ |
| [EditRequestTypeNames](variables/EditRequestTypeNames.md) | Names of the edit request types (e.g. to display in a history UI). |
| [ifcCategoryMap](variables/ifcCategoryMap.md) | A map that associates each unique integer identifier (IFC Entity ID) with its corresponding category name. This map is used to map IFC entities to their respective categories for easier identification and processing. |
| [limitOf2Bytes](variables/limitOf2Bytes.md) | The maximum value for a 2-byte unsigned integer. |

## Functions

| Function | Description |
| :------ | :------ |
| [getObject](functions/getObject.md) | Recursively converts a Flatbuffers object into a plain JavaScript object. This function traverses the prototype chain of the Flatbuffers object and extracts all properties and their values, handling both primitive values and nested objects/arrays. |
