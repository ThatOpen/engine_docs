# FragmentsModel

The main class for managing a 3D model loaded from a fragments file. Handles geometry, materials, visibility, highlighting, sections, and more. This class orchestrates multiple specialized managers to handle different aspects of the model like mesh management, item data, raycasting, etc. It maintains the overall state and provides the main interface for interacting with the model. The model data is loaded and processed asynchronously across multiple threads.

## Constructors

### new FragmentsModel()

> **new FragmentsModel**(`modelId`, `meshManager`, `threads`): [`FragmentsModel`](FragmentsModel.md)

The constructor of the fragments model. Don't use this directly. Use the [FragmentsModels.load](FragmentsModels.md#load) instead.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `modelId` | `string` |
| `meshManager` | `MeshManager` |
| `threads` | `FragmentsConnection` |

#### Returns

[`FragmentsModel`](FragmentsModel.md)

## Properties

### attrsChanges

> `readonly` **attrsChanges**: `Map`\<`number`, [`AttrsChange`](../type-aliases/AttrsChange.md)\>

A map of attribute changes that have occurred in the model.
The key is the local ID of the item, and the value is the change.

***

### graphicsQuality

> **graphicsQuality**: `number` = `0`

The graphics quality of the model. It ranges from 0 (lowest) to 1 (highest).

***

### object

> **object**: `Object3D`\<`Object3DEventMap`\>

The object that represents the model in the Three.js scene.

***

### relsChanges

> `readonly` **relsChanges**: `Map`\<`number`, [`RelsModifyChange`](../interfaces/RelsModifyChange.md)\>

A map of relation changes that have occurred in the model.
The key is the local ID of the item, and the value is the change.

***

### threads

> `readonly` **threads**: `FragmentsConnection`

The connection to the threads that handle the model data.

***

### tiles

> `readonly` **tiles**: `DataMap`\<`string` \| `number`, [`BIMMesh`](../type-aliases/BIMMesh.md)\>

A map of tiles that have been loaded for the model.
The key is the tile ID, and the value is the tile.

## Accessors

### box

> `get` **box**(): `Box3`

The bounding box of the whole model.

#### Returns

`Box3`

***

### frozen

> `get` **frozen**(): `boolean`

Whether the model should stop updating..

> `set` **frozen**(`value`): `void`

Whether the model should stop updating..

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

***

### getClippingPlanesEvent

> `get` **getClippingPlanesEvent**(): () => `Plane`[]

The event that is triggered when the clipping planes are needed in the thread.
Set this method to pass your Three.js clipping planes to the model.

> `set` **getClippingPlanesEvent**(`value`): `void`

The event that is triggered when the clipping planes are needed in the thread.
Set this method to pass your Three.js clipping planes to the model.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | () => `Plane`[] |

#### Returns

`Function`

##### Returns

`Plane`[]

***

### isBusy

> `get` **isBusy**(): `boolean`

Whether the model is busy loading data.

#### Returns

`boolean`

***

### modelId

> `get` **modelId**(): `string`

The ID of the model.

#### Returns

`string`

## Methods

### \_finishProcessing()

> **\_finishProcessing**(): `void`

Internal method to finish processing. Don't use this directly.

#### Returns

`void`

***

### \_refreshView()

> **\_refreshView**(): `Promise`\<`void`\>

Internal method to refresh the view of the model. You shouldn't call this directly. Instead, use [FragmentsModels.update](FragmentsModels.md#update).

#### Returns

`Promise`\<`void`\>

***

### \_setup()

> **\_setup**(`data`, `raw`?, `config`?): `Promise`\<`void`\>

Internal method to set up the model. Don't use this directly.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `ArrayBuffer` |
| `raw`? | `boolean` |
| `config`? | [`VirtualModelConfig`](../interfaces/VirtualModelConfig.md) |

#### Returns

`Promise`\<`void`\>

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Dispose the model. Use this when you're done with the model.
If you use the [FragmentsModels.dispose](FragmentsModels.md#dispose) method, this will be called automatically for all models.

#### Returns

`Promise`\<`void`\>

***

### getAlignmentStyles()

> **getAlignmentStyles**(): `Promise`\<`object`\>

Get the civil alignment styles of the model (if any).

#### Returns

`Promise`\<`object`\>

##### 0

> **0**: `LineMaterial`

##### 1

> **1**: `LineMaterial`

##### 2

> **2**: `LineMaterial`

##### 3

> **3**: `LineMaterial`

##### 4

> **4**: `LineMaterial`

##### exterior

> **exterior**: `PointsMaterial`

##### interior

> **interior**: `PointsMaterial`

***

### getAlignments()

> **getAlignments**(): `Promise`\<`Group`\<`Object3DEventMap`\>\>

Get the civil alignments of the model (if any).

#### Returns

`Promise`\<`Group`\<`Object3DEventMap`\>\>

***

### getBoxes()

> **getBoxes**(`localIds`?): `Promise`\<`Box3`[]\>

Get the individual bounding boxes of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `number`[] | The local IDs of the items to look up. |

#### Returns

`Promise`\<`Box3`[]\>

***

### getBuffer()

> **getBuffer**(`raw`): `Promise`\<`ArrayBuffer`\>

Get the buffer of the model.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `raw` | `boolean` | `false` | Whether to get the raw buffer. If false, it will be compressed. |

#### Returns

`Promise`\<`ArrayBuffer`\>

***

### getCategories()

> **getCategories**(): `Promise`\<`string`[]\>

Get all the categories of the model.

#### Returns

`Promise`\<`string`[]\>

***

### getCoordinates()

> **getCoordinates**(): `Promise`\<`number`[]\>

Gets coordinates of the model.

#### Returns

`Promise`\<`number`[]\>

***

### getGuidsByLocalIds()

> **getGuidsByLocalIds**(`localIds`): `Promise`\<(`null` \| `string`)[]\>

Get the GUIDs corresponding to the specified local IDs.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `number`[] | Array of local IDs to look up. |

#### Returns

`Promise`\<(`null` \| `string`)[]\>

***

### getHighlight()

> **getHighlight**(`localIds`?): `Promise` \<[`MaterialDefinition`](../type-aliases/MaterialDefinition.md)[]\>

Gets the highlight of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `number`[] | The local IDs of the items to get the highlight of. If undefined, it will return the highlight of all items. |

#### Returns

`Promise` \<[`MaterialDefinition`](../type-aliases/MaterialDefinition.md)[]\>

***

### getHighlightItemIds()

> **getHighlightItemIds**(): `Promise`\<`number`[]\>

Gets the item IDs of the items that are highlighted.

#### Returns

`Promise`\<`number`[]\>

***

### getItem()

> **getItem**(`id`): `Item`

Get an item by its ID.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | [`Identifier`](../type-aliases/Identifier.md) | The ID of the item to look up. |

#### Returns

`Item`

***

### getItemsByVisibility()

> **getItemsByVisibility**(`visible`): `Promise`\<`number`[]\>

Gets the items by visibility.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | Whether the items should be visible. |

#### Returns

`Promise`\<`number`[]\>

***

### getItemsChildren()

> **getItemsChildren**(`ids`): `Promise`\<`number`[]\>

Get the spatial structure children of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ids` | [`Identifier`](../type-aliases/Identifier.md)[] | The IDs of the items to look up. |

#### Returns

`Promise`\<`number`[]\>

***

### getItemsData()

> **getItemsData**(`ids`, `config`?): `Promise` \<[`ItemData`](../interfaces/ItemData.md)[]\>

Get all the data of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ids` | [`Identifier`](../type-aliases/Identifier.md)[] | The IDs of the items to look up. |
| `config`? | `Partial` \<[`ItemsDataConfig`](../interfaces/ItemsDataConfig.md)\> | The configuration of the items data. |

#### Returns

`Promise` \<[`ItemData`](../interfaces/ItemData.md)[]\>

***

### getItemsOfCategory()

> **getItemsOfCategory**(`category`): `Promise`\<`Item`[]\>

Get all the items of the model that belong to the specified category.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `category` | `string` | The category to look up. |

#### Returns

`Promise`\<`Item`[]\>

***

### getItemsWithGeometry()

> **getItemsWithGeometry**(): `Promise`\<`Item`[]\>

Get all the items of the model that have geometry.

#### Returns

`Promise`\<`Item`[]\>

***

### getLocalIdsByGuids()

> **getLocalIdsByGuids**(`guids`): `Promise`\<(`null` \| `number`)[]\>

Get the local IDs corresponding to the specified GUIDs.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `guids` | `string`[] | Array of GUIDs to look up. |

#### Returns

`Promise`\<(`null` \| `number`)[]\>

***

### getMaxLocalId()

> **getMaxLocalId**(): `Promise`\<`number`\>

Get the maximum local ID of the model.

#### Returns

`Promise`\<`number`\>

***

### getMergedBox()

> **getMergedBox**(`localIds`): `Promise`\<`Box3`\>

Get the merged bounding box of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `number`[] | The local IDs of the items to look up. |

#### Returns

`Promise`\<`Box3`\>

***

### getMetadata()

> **getMetadata**\<`T`\>(): `Promise`\<`T`\>

Get the metadata of the model.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |

#### Returns

`Promise`\<`T`\>

***

### getPositions()

> **getPositions**(`localIds`?): `Promise`\<`Vector3`[]\>

Get the absolute positions of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `number`[] | The local IDs of the items to look up. |

#### Returns

`Promise`\<`Vector3`[]\>

***

### getSection()

> **getSection**(`plane`): `Promise`\<`any`\>

Gets the section (edges and fills) between the model and a given clipping plane.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `plane` | `Plane` | The plane to get the section of. |

#### Returns

`Promise`\<`any`\>

***

### getSequenced()

`Experimental`

> **getSequenced**\<`T`, `U`\>(`result`, `fromItems`, `inputs`?): `Promise` \<[`InformationResultType`](../type-aliases/InformationResultType.md)\<`T`\>\>

Processes a sequence of actions in the worker and computes the result based on the provided input.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`ItemInformationType`](../type-aliases/ItemInformationType.md) |
| `U` *extends* [`ItemSelectionType`](../type-aliases/ItemSelectionType.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `result` | `T` | The type of item information to compute, used to select the appropriate result function. |
| `fromItems` | `U`[] | An array of selection types, each corresponding to an items selector function. |
| `inputs`? | `object` | - |
| `inputs.result`? | [`ResultInputType`](../type-aliases/ResultInputType.md)\<`T`\> | - |
| `inputs.selector`? | `Partial`\<`Record`\<`U`, [`SelectionInputType`](../type-aliases/SelectionInputType.md)\<`U`\>\>\> | - |

#### Returns

`Promise` \<[`InformationResultType`](../type-aliases/InformationResultType.md)\<`T`\>\>

The computed result after processing the sequence of actions, or `null` if the result function is not found.

***

### getSpatialStructure()

> **getSpatialStructure**(): `Promise` \<[`SpatialTreeItem`](../interfaces/SpatialTreeItem.md)\>

Get the spatial structure of the model.

#### Returns

`Promise` \<[`SpatialTreeItem`](../interfaces/SpatialTreeItem.md)\>

***

### getVisible()

> **getVisible**(`localIds`): `Promise`\<`boolean`[]\>

Gets the items by visibility.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `number`[] | The local IDs of the items to get the visibility of. |

#### Returns

`Promise`\<`boolean`[]\>

***

### highlight()

> **highlight**(`localIds`, `highlightMaterial`): `Promise`\<`void`\>

Highlights the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `undefined` \| `number`[] | The local IDs of the items to highlight. If undefined, all items will be highlighted. |
| `highlightMaterial` | [`MaterialDefinition`](../type-aliases/MaterialDefinition.md) | The material to use for the highlight. |

#### Returns

`Promise`\<`void`\>

***

### raycast()

> **raycast**(`data`): `Promise`\<`null` \| [`RaycastResult`](../interfaces/RaycastResult.md)\>

Performs a raycast on the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`RaycastData`](../interfaces/RaycastData.md) | The data of the raycast. |

#### Returns

`Promise`\<`null` \| [`RaycastResult`](../interfaces/RaycastResult.md)\>

***

### raycastWithSnapping()

> **raycastWithSnapping**(`data`): `Promise`\<`null` \| [`RaycastResult`](../interfaces/RaycastResult.md)[]\>

Performs a raycast on the model with snapping.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `SnappingRaycastData` | The data of the raycast. |

#### Returns

`Promise`\<`null` \| [`RaycastResult`](../interfaces/RaycastResult.md)[]\>

***

### rectangleRaycast()

> **rectangleRaycast**(`data`): `Promise`\<`null` \| [`RectangleRaycastResult`](../interfaces/RectangleRaycastResult.md)\>

Performs a rectangle raycast on the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`RectangleRaycastData`](../interfaces/RectangleRaycastData.md) | The data of the rectangle raycast. |

#### Returns

`Promise`\<`null` \| [`RectangleRaycastResult`](../interfaces/RectangleRaycastResult.md)\>

***

### resetHighlight()

> **resetHighlight**(`localIds`?): `Promise`\<`void`\>

Resets the highlight of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `number`[] | The local IDs of the items to reset the highlight of. If undefined, it will reset the highlight of all items. |

#### Returns

`Promise`\<`void`\>

***

### resetVisible()

> **resetVisible**(): `Promise`\<`void`\>

Resets the visibility of all items.

#### Returns

`Promise`\<`void`\>

***

### setVisible()

> **setVisible**(`localIds`, `visible`): `Promise`\<`void`\>

Sets the visibility of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `undefined` \| `number`[] | The local IDs of the items to set the visibility of. |
| `visible` | `boolean` | Whether the items should be visible. |

#### Returns

`Promise`\<`void`\>

***

### toggleVisible()

> **toggleVisible**(`localIds`?): `Promise`\<`void`\>

Toggles the visibility of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `number`[] | The local IDs of the items to toggle the visibility of. |

#### Returns

`Promise`\<`void`\>

***

### useCamera()

> **useCamera**(`camera`): `void`

Sets a camera for the model. The model will use it to load tiles dinamically depending on the users view
(e.g. hiding items that are not in the view, setting the LOD to far away items, etc).

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `camera` | `PerspectiveCamera` \| `OrthographicCamera` | The camera to use. |

#### Returns

`void`
