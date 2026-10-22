# @thatopen/fragments

## Enumerations

| Enumeration | Description |
| :------ | :------ |
| [CurrentLod](enumerations/CurrentLod.md) | Enum representing the current level of detail (LOD) for a mesh. |
| [EditRequestType](enumerations/EditRequestType.md) | Types of edit requests. |
| [ItemConfigClass](enumerations/ItemConfigClass.md) | Enum representing the configuration class for an item in a Fragments model. |
| [LodMode](enumerations/LodMode.md) | Enum representing the mode of the LOD / culling system. |
| [SnappingClass](enumerations/SnappingClass.md) | Enum representing the snapping class for a raycast operation. |

## Classes

| Class | Description |
| :------ | :------ |
| [Editor](classes/Editor.md) | The Editor class provides functionality for editing and managing Fragments models. It handles operations like editing model elements, saving changes and managing edit history. |
| [FragmentsModel](classes/FragmentsModel.md) | The main class for managing a 3D model loaded from a fragments file. Handles geometry, materials, visibility, highlighting, sections, and more. This class orchestrates multiple specialized managers to handle different aspects of the model like mesh management, item data, raycasting, etc. It maintains the overall state and provides the main interface for interacting with the model. The model data is loaded and processed asynchronously across multiple threads. |
| [FragmentsModels](classes/FragmentsModels.md) | The main class for managing multiple 3D models loaded from fragments files. Handles loading, disposing, updating, raycasting, highlighting and coordinating multiple FragmentsModel instances. This class acts as the main entry point for working with fragments models. A FragmentsModels instance needs a worker to process fragments off the main thread. The recommended way to obtain the worker URL is via the static FragmentsModels.getWorker method, which fetches the version-matched worker from unpkg. Check the method docs for more info. |
| [GeometryEngine](classes/GeometryEngine.md) | The geometry engine is responsible for generating geometry using web-ifc. It provides a high-level API to generate common BIM shapes like extrusions, sweeps, walls, and profiles. |
| [IfcDecoderStream](classes/IfcDecoderStream.md) | - |
| [IfcImporter](classes/IfcImporter.md) | An objet to convert IFC files into fragments. |
| [IfcParserStream](classes/IfcParserStream.md) | Parses the ISO 10303-21 statements of an IFC file into web-ifc entities, matching the shape `IfcAPI.GetLine` returns (attributes hold typed value wrappers, refs are `{ type: 5, value }` handles, omitted attributes are `null`). Statements may span physical lines, share a line, or be interleaved with `/* ... */` comments and blank lines. Entity types outside the file's declared schema are skipped, like web-ifc does. The stream errors on corrupted statements and on input that ends before `END-ISO-10303-21;`, so truncated files are not mistaken for complete ones. |
| [IfcSplitter](classes/IfcSplitter.md) | Splits large IFC files into smaller valid IFC files, or extracts a set of building elements into a new one, streaming the input so the whole file never has to be held as text in memory.  Each output file is a valid IFC containing its share of elements plus all shared infrastructure (spatial structure, geometry, materials, properties). Coupled elements (wall + opening + door, roof + slabs) are kept together.  File access goes through an [IfcSplitterIO](interfaces/IfcSplitterIO.md), so the same class works in Node.js, in the browser or against any other storage. |
| [LoadAbortedError](classes/LoadAbortedError.md) | Error thrown when a model load is aborted via `FragmentsModels.abort()`. |
| [SingleThreadedFragmentsModel](classes/SingleThreadedFragmentsModel.md) | The main class for managing a 3D model loaded from a fragments file in a single thread. It's designed for easy data querying in the backend, so all the 3D visualization logic is not present. |

## Interfaces

| Interface | Description |
| :------ | :------ |
| [AggregateMap](interfaces/AggregateMap.md) | Parent-child aggregation relationships between building elements (e.g. roof to slabs). |
| [Attributes](interfaces/Attributes.md) | Interface representing the attributes of a model item. |
| [BaseCreateRequest](interfaces/BaseCreateRequest.md) | Base interface for all create edit requests. |
| [BaseEditRequest](interfaces/BaseEditRequest.md) | Base interface for all edit requests. |
| [BaseUpdateRequest](interfaces/BaseUpdateRequest.md) | Base interface for all update edit requests. |
| [CRSData](interfaces/CRSData.md) | Interface representing the Coordinate Reference System (CRS) data extracted from an IFC model's IFCPROJECTEDCRS and IFCMAPCONVERSION entities. |
| [CreateGlobalTransformRequest](interfaces/CreateGlobalTransformRequest.md) | Interface for create global transform edit requests. |
| [CreateIndexRequest](interfaces/CreateIndexRequest.md) | Interface for create index edit requests. Indexes are name-keyed, so `data.name` identifies the index. Fails silently if an index with the same name already exists; use UPDATE_INDEX to replace. |
| [CreateItemRequest](interfaces/CreateItemRequest.md) | Interface for create item edit requests. |
| [CreateLocalTransformRequest](interfaces/CreateLocalTransformRequest.md) | Interface for create local transform edit requests. |
| [CreateMaterialRequest](interfaces/CreateMaterialRequest.md) | Interface for create material edit requests. |
| [CreateRelationRequest](interfaces/CreateRelationRequest.md) | Interface for create relation edit requests. |
| [CreateRepresentationRequest](interfaces/CreateRepresentationRequest.md) | Interface for create representation edit requests. |
| [CreateSampleRequest](interfaces/CreateSampleRequest.md) | Interface for create sample edit requests. |
| [DeleteGlobalTransformRequest](interfaces/DeleteGlobalTransformRequest.md) | Interface for delete global transform edit requests. |
| [DeleteIndexRequest](interfaces/DeleteIndexRequest.md) | Interface for delete index edit requests. No-op if the named index doesn't exist. |
| [DeleteItemRequest](interfaces/DeleteItemRequest.md) | Interface for delete item edit requests. |
| [DeleteLocalTransformRequest](interfaces/DeleteLocalTransformRequest.md) | Interface for delete local transform edit requests. |
| [DeleteMaterialRequest](interfaces/DeleteMaterialRequest.md) | Interface for delete material edit requests. |
| [DeleteRelationRequest](interfaces/DeleteRelationRequest.md) | Interface for delete relation edit requests. |
| [DeleteRepresentationRequest](interfaces/DeleteRepresentationRequest.md) | Interface for delete representation edit requests. |
| [DeleteSampleRequest](interfaces/DeleteSampleRequest.md) | Interface for delete sample edit requests. |
| [EditRequestsSince](interfaces/EditRequestsSince.md) | The requests of a model added since an earlier read (see `Editor.getModelRequestsSince`). |
| [GroupData](interfaces/GroupData.md) | Per-group output data: the set of IFC entity IDs to include and any rewritten relationship lines. |
| [IfcSplitterConfig](interfaces/IfcSplitterConfig.md) | Options of an [IfcSplitter](classes/IfcSplitter.md). Every field is optional and falls back to the exported default, so a config only needs what it changes. |
| [IfcSplitterGroupsEvent](interfaces/IfcSplitterGroupsEvent.md) | Payload of [IfcSplitter.onSplitsResolved](classes/IfcSplitter.md#onsplitsresolved), fired once `split` knows what goes into each output file and before any file is written. |
| [IfcSplitterIO](interfaces/IfcSplitterIO.md) | The file access an [IfcSplitter](classes/IfcSplitter.md) reads its input and writes its output through. It replaces the Node.js `fs` and `path` dependencies of earlier versions, so the splitter runs in any environment that can provide these two streams for a path. |
| [IfcSplitterProgressEvent](interfaces/IfcSplitterProgressEvent.md) | Payload of [IfcSplitter.onProgress](classes/IfcSplitter.md#onprogress), fired when a stage finishes. |
| [IfcSplitterWarningEvent](interfaces/IfcSplitterWarningEvent.md) | Payload of [IfcSplitter.onExtractWarning](classes/IfcSplitter.md#onextractwarning), fired for each skipped id. |
| [IndexInfo](interfaces/IndexInfo.md) | Snapshot of an index's shape. Returned by `getIndexInfo` so callers can branch on the mode without re-inspecting the underlying buffer. |
| [ItemAttribute](interfaces/ItemAttribute.md) | Interface representing the attributes of an item in a Fragments model. |
| [ItemData](interfaces/ItemData.md) | Interface representing the data of an item in a Fragments model. |
| [ItemsDataConfig](interfaces/ItemsDataConfig.md) | Interface representing the configuration for item data in a Fragments model. |
| [MappedInformationResult](interfaces/MappedInformationResult.md) | Interface representing the result of an information query for a specific item type. |
| [MappedResultInput](interfaces/MappedResultInput.md) | Interface representing the input for a result query in a Fragments model. |
| [MappedSelectionInput](interfaces/MappedSelectionInput.md) | Interface representing the input for a selection query in a Fragments model. |
| [ModelIdMap](interfaces/ModelIdMap.md) | Interface representing a map of model IDs to their corresponding local IDs. |
| [RawIndexData](interfaces/RawIndexData.md) | Payload describing a user-defined model index. Maps directly to the ModelIndex schema's flat key/value vectors with optional slicing.  Mode is inferred from which fields are populated:    - `keysOnly`:        only `keys`.   - `oneToOne`:        `keys` + `values`, no `start`/`end`.   - `oneToNLinear`:    `keys` + `values` + `end`.   - `oneToNNonLinear`: `keys` + `values` + `start` + `end`.  Keys must be homogeneous (`number[]` or `string[]`). Values, if present, must also be homogeneous. |
| [RaycastData](interfaces/RaycastData.md) | Interface representing the data for a raycast operation. |
| [RaycastResult](interfaces/RaycastResult.md) | Interface representing the result of a raycast operation. |
| [RectangleRaycastData](interfaces/RectangleRaycastData.md) | Interface representing the data for a rectangle raycast operation. |
| [RectangleRaycastResult](interfaces/RectangleRaycastResult.md) | Interface representing the result of a rectangle raycast operation. |
| [RelsModifyChange](interfaces/RelsModifyChange.md) | Interface representing a change event when relations are modified in a model item. |
| [SpatialTreeItem](interfaces/SpatialTreeItem.md) | Interface representing an item in a spatial tree. |
| [StyleMaps](interfaces/StyleMaps.md) | Reverse indices for IFCSTYLEDITEM and IFCMATERIALDEFINITIONREPRESENTATION backward pointers. |
| [UpdateGlobalTransformRequest](interfaces/UpdateGlobalTransformRequest.md) | Interface for update global transform edit requests. |
| [UpdateIndexRequest](interfaces/UpdateIndexRequest.md) | Interface for update index edit requests. Replaces the entire index identified by `data.name`. Use DELETE_INDEX + CREATE_INDEX if you want to rename. |
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
| [VirtualMultithreadingConfig](interfaces/VirtualMultithreadingConfig.md) | Interface representing multithreading timing configuration for virtual models. |
| [VirtualPropertiesConfig](interfaces/VirtualPropertiesConfig.md) | Interface representing the configuration for virtual properties in a Fragments model. |
| [VoidFillMap](interfaces/VoidFillMap.md) | Mapping of void/fill relationships between walls, openings, and fillers (doors/windows). |

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
| [GridReadError](type-aliases/GridReadError.md) | Something GridReader.read skipped, or worked around, in a model. |
| [Identifier](type-aliases/Identifier.md) | Type representing a unique identifier for a model item. This can be either a string or a number. |
| [IfcSplitterStage](type-aliases/IfcSplitterStage.md) | A stage of `split` or `extract`, reported through [IfcSplitter.onProgress](classes/IfcSplitter.md#onprogress). |
| [IndexEntry](type-aliases/IndexEntry.md) | Forward-lookup result for a single key in a [IndexInfo](interfaces/IndexInfo.md).  Shape depends on the index mode: `null` for keys-only, the scalar value for `oneToOne`, or a `Uint32Array` view (number values) / `string[]` (string values) for the 1:N modes. The `Uint32Array` is a zero-copy view over the underlying buffer; do not mutate it. |
| [IndexKeyType](type-aliases/IndexKeyType.md) | Key type of a user-defined model index. |
| [IndexMode](type-aliases/IndexMode.md) | Storage shape of a user-defined model index. Detected once per index from the populated vectors and exposed via [IndexInfo](interfaces/IndexInfo.md).  - `keysOnly`: only keys are stored. The index acts as a sorted set; values   are queried via `hasIndexEntry` / iterated via `getIndexKeys`. - `oneToOne`: each key maps to exactly one value. - `oneToNLinear`: each key maps to a contiguous slice of values. - `oneToNNonLinear`: each key maps to an arbitrary slice (slices may   overlap or reorder, e.g. flattened descendant trees). |
| [IndexRequest](type-aliases/IndexRequest.md) | Type for index edit requests. Indexes are name-keyed (no localId), so they live in their own union and are merged into the top-level `EditRequest` type alongside the others. |
| [IndexValueType](type-aliases/IndexValueType.md) | Value type of a user-defined model index. `none` for keys-only indexes. |
| [InformationResultType](type-aliases/InformationResultType.md) | Type representing the result of an information query for a specific item type. |
| [InverseIndexEntry](type-aliases/InverseIndexEntry.md) | Inverse-lookup result. For an index with forward direction `key -> value`, the inverse maps `value -> set of keys`. Keys come back as `Uint32Array` for number-keyed indexes and `string[]` for string-keyed ones. |
| [ItemInformationType](type-aliases/ItemInformationType.md) | Union type representing all possible item information types. |
| [ItemSelectionType](type-aliases/ItemSelectionType.md) | Union type representing all possible item selection types. |
| [LoadProgressEvent](type-aliases/LoadProgressEvent.md) | Progress event emitted during model loading. |
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
| [ELEMENT\_TYPES](variables/ELEMENT_TYPES.md) | The default [IfcSplitterConfig.elementTypes](interfaces/IfcSplitterConfig.md#elementtypes). Exported so it can be extended rather than replaced. |
| [EditRequestTypeNames](variables/EditRequestTypeNames.md) | Names of the edit request types (e.g. to display in a history UI). |
| [FRAGMENTS\_GENERATOR](variables/FRAGMENTS_GENERATOR.md) | The name of this package, used to identify it as the generator of the models it creates. |
| [FRAGMENTS\_VERSION](variables/FRAGMENTS_VERSION.md) | The version of this package. It's injected at build time from package.json (see the `define` option in vite.config.ts), so it's always in sync with the published version. When the code runs unbundled and the define is not applied (e.g. tsx scripts), it falls back to "unknown". |
| [SPATIAL\_TYPES](variables/SPATIAL_TYPES.md) | The default [IfcSplitterConfig.spatialTypes](interfaces/IfcSplitterConfig.md#spatialtypes). Exported so it can be extended rather than replaced. |
| [geometryTypes](variables/geometryTypes.md) | A Set of unique numbers representing different types of IFC geometries. |
| [ifcCategoryMap](variables/ifcCategoryMap.md) | A map that associates each unique integer identifier (IFC Entity ID) with its corresponding category name. This map is used to map IFC entities to their respective categories for easier identification and processing. |
| [limitOf2Bytes](variables/limitOf2Bytes.md) | The maximum value for a 2-byte unsigned integer. |

## Functions

| Function | Description |
| :------ | :------ |
| [decodeStepString](functions/decodeStepString.md) | Decode a raw STEP string body: `''`, `\\`, `\S\c`, `\X\hh`, `\X2\…\X0`. |
| [getObject](functions/getObject.md) | Recursively converts a Flatbuffers object into a plain JavaScript object. This function traverses the prototype chain of the Flatbuffers object and extracts all properties and their values, handling both primitive values and nested objects/arrays. |
| [getProvenanceMetadata](functions/getProvenanceMetadata.md) | Provenance data stamped into the metadata of every model this library creates, so any fragments file records which package and version generated it (see ThatOpen/engine_fragment#273). |
| [isIndexRequest](functions/isIndexRequest.md) | Discriminator for index edit requests. Use to skip them in code paths that assume every request carries a `localId`. |
| [isRawBuffer](functions/isRawBuffer.md) | Returns whether `bytes` is a raw (uncompressed) fragments buffer rather than a pako/zlib-deflated one, by inspecting the first two bytes.  A deflated fragments buffer is a zlib stream: byte 0's low nibble is the deflate compression method (8) and `(byte0 << 8 | byte1)` is a multiple of 31 (the zlib header check). A raw fragments buffer is a flatbuffer, whose leading 32-bit root offset does not satisfy that. This lets `load` and the model constructors accept either form without the caller tracking which it is.  In the extremely unlikely case a raw buffer's first two bytes happen to look like a zlib header, pass `raw` explicitly to override the detection.  Performance note: a raw (uncompressed) model is the fastest to load. Only deflate a fragments buffer when you persist it to disk or send it over the network. Inflating and deflating on every load, with no transport in between, just wastes CPU. |
| [listIdxByType](functions/listIdxByType.md) | Returns the argument index at which a given IFC type stores its list of "related objects". Getting this wrong causes the rewriter to read the wrong field, end up with an empty list, and skip the line entirely — dropping all its transitive dependencies (property sets, materials, styles, etc.) from the split output.  The default [IfcSplitterConfig.listArgIndex](interfaces/IfcSplitterConfig.md#listargindex). Exported so an override can delegate to it for the types it doesn't care about. |
| [parseStepArguments](functions/parseStepArguments.md) | Parse the argument list of a STEP data statement (`#ID=TYPENAME(args);`) into web-ifc's raw tape shape, suitable for `webIfc.FromRawLineData`. Throws on malformed arguments. |
| [streamAsyncIterator](functions/streamAsyncIterator.md) | Backward compatible stream async iterator ```typescript for await (const line of streamAsyncIterator(readableStream)) {   await callback(line); } ```  Modern environments support stream async iterator out of the box: ```typescript for await (const line of readableStream) {   await callback(line); } ``` |
| [toClassicWorker](functions/toClassicWorker.md) | Fetches a worker script and returns a blob URL with the ES module `export` stripped, so it can be used as a classic (non-module) worker. |
