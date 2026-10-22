# SingleThreadedFragmentsModel

The main class for managing a 3D model loaded from a fragments file in a single thread. It's designed for easy data querying in the backend, so all the 3D visualization logic is not present.

## Implements

- `IFragmentsModel`\<`false`\>

## Constructors

### new SingleThreadedFragmentsModel()

> **new SingleThreadedFragmentsModel**(`modelId`, `modelData`, `raw`?): [`SingleThreadedFragmentsModel`](SingleThreadedFragmentsModel.md)

The constructor of the fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | - |
| `modelData` | `Uint8Array` | - |
| `raw`? | `boolean` | Whether `modelData` is raw (uncompressed) or deflated. If omitted, it is auto-detected from the buffer (see [isRawBuffer](../functions/isRawBuffer.md)). |

#### Returns

[`SingleThreadedFragmentsModel`](SingleThreadedFragmentsModel.md)

## Accessors

### modelId

> `get` **modelId**(): `string`

The ID of the model.

#### Returns

`string`

***

### ready

> `get` **ready**(): `Promise`\<`void`\>

Resolves when the model is fully set up. The constructor starts an
asynchronous setup that spans multiple macrotasks; await this before
relying on the model being completely initialized.

If [dispose](SingleThreadedFragmentsModel.md#dispose) is called while the setup is still running, this
promise rejects with a [LoadAbortedError](LoadAbortedError.md). If nobody awaits it,
the rejection is already handled internally, so it never surfaces as
an unhandled rejection.

#### Returns

`Promise`\<`void`\>

## Methods

### dispose()

> **dispose**(): `void`

Dispose the model. Use this when you're done with the model.
If you use the [FragmentsModels.dispose](FragmentsModels.md#dispose) method, this will be called automatically for all models.

If the setup started by the constructor is still running, it is aborted
at its next yield point and [ready](SingleThreadedFragmentsModel.md#ready) rejects with a
[LoadAbortedError](LoadAbortedError.md). Calling this more than once is a no-op.

#### Returns

`void`

#### Implementation of

`IFragmentsModel.dispose`

***

### edit()

> **edit**(`requests`, `raw`?): `object`

Apply a batch of edit requests. Accumulates onto this model's
pending-edit history; call [save](SingleThreadedFragmentsModel.md#save) to flatten them into a new
committed buffer or [reset](SingleThreadedFragmentsModel.md#reset) to discard.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `requests` | [`EditRequest`](../type-aliases/EditRequest.md)[] | `undefined` | - |
| `raw`? | `boolean` | `true` | whether to return the raw buffer or the the result of pako.deflate. Defaults to `true`. |

#### Returns

`object`

The delta raw/deflated flatbuffer bytes and the local IDs assigned to
any newly-created items.

##### deltaModelBuffer

> **deltaModelBuffer**: `Uint8Array` = `model`

##### ids

> **ids**: `number`[]

***

### getBuffer()

> **getBuffer**(`raw`): `ArrayBufferLike`

Get the buffer of the model.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `raw` | `boolean` | `false` | Whether to get the raw buffer. If false, it will be compressed. |

#### Returns

`ArrayBufferLike`

#### Implementation of

`IFragmentsModel.getBuffer`

***

### getCRS()

> **getCRS**(): `any`

Get the Coordinate Reference System (CRS) data of the model, if available.

#### Returns

`any`

#### Implementation of

`IFragmentsModel.getCRS`

***

### getCategories()

> **getCategories**(): `string`[]

Get all the categories of the model.

#### Returns

`string`[]

#### Implementation of

`IFragmentsModel.getCategories`

***

### getCoordinates()

> **getCoordinates**(): `number`[]

Gets coordinates of the model.

#### Returns

`number`[]

#### Implementation of

`IFragmentsModel.getCoordinates`

***

### getGlobalTranformsIdsOfItems()

> **getGlobalTranformsIdsOfItems**(`ids`): `number`[]

Gets the global transforms IDs of the items of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ids` | `number`[] | The local IDs of the items to get the global transforms IDs of. |

#### Returns

`number`[]

#### Implementation of

`IFragmentsModel.getGlobalTranformsIdsOfItems`

***

### getGlobalTransforms()

> **getGlobalTransforms**(`localIds`?): `Map`\<`number`, [`RawGlobalTransformData`](../type-aliases/RawGlobalTransformData.md)\>

Gets the global transforms of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the global transforms to get. If undefined, it will return all global transforms. |

#### Returns

`Map`\<`number`, [`RawGlobalTransformData`](../type-aliases/RawGlobalTransformData.md)\>

#### Implementation of

`IFragmentsModel.getGlobalTransforms`

***

### getGlobalTransformsIds()

> **getGlobalTransformsIds**(): `number`[]

Gets all the global transforms IDs of the model.

#### Returns

`number`[]

#### Implementation of

`IFragmentsModel.getGlobalTransformsIds`

***

### getGuidsByLocalIds()

> **getGuidsByLocalIds**(`localIds`): (`null` \| `string`)[]

Get the GUIDs corresponding to the specified local IDs.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `number`[] | Array of local IDs to look up. |

#### Returns

(`null` \| `string`)[]

#### Implementation of

`IFragmentsModel.getGuidsByLocalIds`

***

### getIndexEntry()

> **getIndexEntry**\<`K`, `V`\>(`name`, `key`): `null` \| `V`

Forward lookup of a single entry in the named index. The return shape
depends on the index mode.

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` |
| `V` *extends* [`IndexEntry`](../type-aliases/IndexEntry.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `key` | `K` |

#### Returns

`null` \| `V`

#### Implementation of

`IFragmentsModel.getIndexEntry`

***

### getIndexInfo()

> **getIndexInfo**(`name`): `null` \| [`IndexInfo`](../interfaces/IndexInfo.md)

Describe the shape of a named index without performing any lookups.
Returns `null` if no index with that name exists.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`null` \| [`IndexInfo`](../interfaces/IndexInfo.md)

#### Implementation of

`IFragmentsModel.getIndexInfo`

***

### getIndexKey()

> **getIndexKey**\<`K`\>(`name`, `index`): `null` \| `K`

Get key at given index.
Useful for keys-only indexes but valid for any mode.

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `index` | `number` |

#### Returns

`null` \| `K`

#### Implementation of

`IFragmentsModel.getIndexKey`

***

### getIndexKeys()

> **getIndexKeys**\<`K`\>(`name`): `null` \| `IndexArrayType`\<`K`\>

Get the keys of an index. Useful for keys-only indexes (membership tests,
iteration) but valid for any mode. Number keys come back as a
`Uint32Array`, string keys as `string[]`.

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`null` \| `IndexArrayType`\<`K`\>

#### Implementation of

`IFragmentsModel.getIndexKeys`

***

### getIndexNames()

> **getIndexNames**(): `string`[]

Get the names of every user-defined index stored on this model. See the
`ModelIndex` schema for the supported shapes.

#### Returns

`string`[]

#### Implementation of

`IFragmentsModel.getIndexNames`

***

### getIndexValues()

> **getIndexValues**\<`V`\>(`name`): `null` \| `V`[]

Get the values of an index. Useful for inverse lookups.

#### Type parameters

| Type parameter |
| :------ |
| `V` *extends* `string` \| `number` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`null` \| `V`[]

#### Implementation of

`IFragmentsModel.getIndexValues`

***

### getInverseIndexEntry()

> **getInverseIndexEntry**\<`K`, `V`\>(`name`, `value`): `null` \| `IndexArrayType`\<`V`\>

Inverse lookup. Returns every key that maps to `value`.

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` |
| `V` *extends* `string` \| `number` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `K` |

#### Returns

`null` \| `IndexArrayType`\<`V`\>

#### Implementation of

`IFragmentsModel.getInverseIndexEntry`

***

### getItemDrawChunks()

> **getItemDrawChunks**(`localIds`): `object`[]

Returns per-tile index-buffer chunks for the given items. Used by
outline-style passes that share tile geometry and clip drawing to
just the outlined samples. See VirtualFragmentsModel.getItemDrawChunks.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `localIds` | `Iterable`\<`number`\> |

#### Returns

`object`[]

#### Implementation of

`IFragmentsModel.getItemDrawChunks`

***

### getItems()

> **getItems**(`localIds`?): `Map`\<`number`, [`RawItemData`](../type-aliases/RawItemData.md)\>

Gets the items of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the items to get. If undefined, it will return all items. |

#### Returns

`Map`\<`number`, [`RawItemData`](../type-aliases/RawItemData.md)\>

#### Implementation of

`IFragmentsModel.getItems`

***

### getItemsByQuery()

> **getItemsByQuery**(`params`, `config`?): `number`[]

Query items based on specified parameters.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | `ItemsQueryParams` | The query parameters. |
| `config`? | `ItemsQueryConfig` | Optional query configuration. |

#### Returns

`number`[]

#### Implementation of

`IFragmentsModel.getItemsByQuery`

***

### getItemsChildren()

> **getItemsChildren**(`ids`): `number`[]

Get the spatial structure children of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ids` | [`Identifier`](../type-aliases/Identifier.md)[] | The IDs of the items to look up. |

#### Returns

`number`[]

#### Implementation of

`IFragmentsModel.getItemsChildren`

***

### getItemsData()

> **getItemsData**(`ids`, `config`?): [`ItemData`](../interfaces/ItemData.md)[]

Get all the data of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ids` | `number`[] | The IDs of the items to look up. |
| `config`? | `Partial` \<[`ItemsDataConfig`](../interfaces/ItemsDataConfig.md)\> | The configuration of the items data. |

#### Returns

[`ItemData`](../interfaces/ItemData.md)[]

#### Implementation of

`IFragmentsModel.getItemsData`

***

### getItemsGeometry()

> **getItemsGeometry**(`localIds`, `lod`?): [`MeshData`](../type-aliases/MeshData.md)[][]

Get geometry data for the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `number`[] | The local IDs of the items to get geometry for. |
| `lod`? | [`CurrentLod`](../enumerations/CurrentLod.md) | The level of detail for the geometry (optional). |

#### Returns

[`MeshData`](../type-aliases/MeshData.md)[][]

#### Implementation of

`IFragmentsModel.getItemsGeometry`

***

### getItemsIds()

> **getItemsIds**(): `number`[]

Gets all the items IDs of the model.

#### Returns

`number`[]

#### Implementation of

`IFragmentsModel.getItemsIds`

***

### getItemsIdsWithGeometry()

> **getItemsIdsWithGeometry**(): `number`[]

Get all the items of the model that have geometry.

#### Returns

`number`[]

#### Implementation of

`IFragmentsModel.getItemsIdsWithGeometry`

***

### getItemsOfCategories()

> **getItemsOfCategories**(`categories`): `object`

Get all the items of the model that belong to the specified category.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `categories` | `RegExp`[] |

#### Returns

`object`

#### Implementation of

`IFragmentsModel.getItemsOfCategories`

***

### ~~getItemsWithGeometry()~~

> **getItemsWithGeometry**(): `number`[]

#### Returns

`number`[]

#### Deprecated

use [getItemsIdsWithGeometry](SingleThreadedFragmentsModel.md#getitemsidswithgeometry)

***

### getLocalIds()

> **getLocalIds**(): `number`[]

Get all the local IDs of the model.

#### Returns

`number`[]

#### Implementation of

`IFragmentsModel.getLocalIds`

***

### getLocalIdsByGuids()

> **getLocalIdsByGuids**(`guids`): (`null` \| `number`)[]

Get the local IDs corresponding to the specified GUIDs.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `guids` | `string`[] | Array of GUIDs to look up. |

#### Returns

(`null` \| `number`)[]

#### Implementation of

`IFragmentsModel.getLocalIdsByGuids`

***

### getLocalIdsFromItemIds()

> **getLocalIdsFromItemIds**(`itemIds`): `number`[]

Translate internal `itemId`s into user-facing `localId`s, preserving
order. See VirtualFragmentsModel.getLocalIdsFromItemIds.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `itemIds` | `Iterable`\<`number`\> |

#### Returns

`number`[]

#### Implementation of

`IFragmentsModel.getLocalIdsFromItemIds`

***

### getLocalTransforms()

> **getLocalTransforms**(`localIds`?): `Map`\<`number`, [`RawTransformData`](../type-aliases/RawTransformData.md)\>

Gets the local transforms of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the local transforms to get. If undefined, it will return all local transforms. |

#### Returns

`Map`\<`number`, [`RawTransformData`](../type-aliases/RawTransformData.md)\>

#### Implementation of

`IFragmentsModel.getLocalTransforms`

***

### getLocalTransformsIds()

> **getLocalTransformsIds**(): `number`[]

Gets all the local transforms IDs of the model.

#### Returns

`number`[]

#### Implementation of

`IFragmentsModel.getLocalTransformsIds`

***

### getMaterials()

> **getMaterials**(`localIds`?): `Map`\<`number`, [`RawMaterial`](../type-aliases/RawMaterial.md)\>

Gets the materials of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the materials to get. If undefined, it will return all materials. |

#### Returns

`Map`\<`number`, [`RawMaterial`](../type-aliases/RawMaterial.md)\>

#### Implementation of

`IFragmentsModel.getMaterials`

***

### getMaterialsIds()

> **getMaterialsIds**(): `number`[]

Gets all the materials IDs of the model.

#### Returns

`number`[]

#### Implementation of

`IFragmentsModel.getMaterialsIds`

***

### getMaxLocalId()

> **getMaxLocalId**(): `number`

Get the maximum local ID of the model.

#### Returns

`number`

#### Implementation of

`IFragmentsModel.getMaxLocalId`

***

### getMetadata()

> **getMetadata**\<`T`\>(): `T`

Get the metadata of the model.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |

#### Returns

`T`

#### Implementation of

`IFragmentsModel.getMetadata`

***

### getPositions()

> **getPositions**(`localIds`?): `object`[]

Get the absolute positions of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `number`[] | The local IDs of the items to look up. |

#### Returns

`object`[]

#### Implementation of

`IFragmentsModel.getPositions`

***

### getRelations()

> **getRelations**(`localIds`?): `Map`\<`number`, [`RawRelationData`](../type-aliases/RawRelationData.md)\>

Gets the relations of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `number`[] | The local IDs of the relations to get. If undefined, it will return all relations. |

#### Returns

`Map`\<`number`, [`RawRelationData`](../type-aliases/RawRelationData.md)\>

#### Implementation of

`IFragmentsModel.getRelations`

***

### getRepresentations()

> **getRepresentations**(`localIds`?): `Map`\<`number`, [`RawRepresentation`](../type-aliases/RawRepresentation.md)\>

Gets the representations of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the representations to get. If undefined, it will return all representations. |

#### Returns

`Map`\<`number`, [`RawRepresentation`](../type-aliases/RawRepresentation.md)\>

#### Implementation of

`IFragmentsModel.getRepresentations`

***

### getRepresentationsIds()

> **getRepresentationsIds**(): `number`[]

Gets all the representations IDs of the model.

#### Returns

`number`[]

#### Implementation of

`IFragmentsModel.getRepresentationsIds`

***

### getRequests()

> **getRequests**(): `object`

Get the current edit history (applied requests + undone redo stack).

#### Returns

`object`

##### requests

> **requests**: [`EditRequest`](../type-aliases/EditRequest.md)[]

##### undoneRequests

> **undoneRequests**: [`EditRequest`](../type-aliases/EditRequest.md)[]

***

### getRequestsSince()

> **getRequestsSince**(`from`, `generation`): [`EditRequestsSince`](../interfaces/EditRequestsSince.md)

Get the requests added since an earlier call (see `Editor.getModelRequestsSince`).

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `from` | `number` | `0` | The `count` the earlier call returned. |
| `generation` | `number` | `-1` | The `generation` the earlier call returned. |

#### Returns

[`EditRequestsSince`](../interfaces/EditRequestsSince.md)

***

### getSamples()

> **getSamples**(`localIds`?): `Map`\<`number`, [`RawSample`](../type-aliases/RawSample.md)\>

Gets the samples of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the samples to get. If undefined, it will return all samples. |

#### Returns

`Map`\<`number`, [`RawSample`](../type-aliases/RawSample.md)\>

#### Implementation of

`IFragmentsModel.getSamples`

***

### getSamplesIds()

> **getSamplesIds**(): `number`[]

Gets all the samples IDs of the model.

#### Returns

`number`[]

#### Implementation of

`IFragmentsModel.getSamplesIds`

***

### getSection()

> **getSection**(`plane`, `localIds`?): `ModelSection`

Gets the section (edges and fills) between the model and a given clipping plane.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `plane` | `Plane` | The plane to get the section of. |
| `localIds`? | `number`[] | The local IDs of the items to get the section of. If undefined, it will return the section of all items. |

#### Returns

`ModelSection`

#### Implementation of

`IFragmentsModel.getSection`

***

### getSpatialStructure()

> **getSpatialStructure**(): `any`

Get the spatial structure of the model.

#### Returns

`any`

#### Implementation of

`IFragmentsModel.getSpatialStructure`

***

### getSubsetBuffer()

> **getSubsetBuffer**(`localIds`, `raw`): `Uint8Array`

Get a buffer containing only the specified items and their associated geometry.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `localIds` | `number`[] | `undefined` | The local IDs of the items to include. |
| `raw` | `boolean` | `false` | Whether to get the raw buffer. If false, it will be compressed. |

#### Returns

`Uint8Array`

#### Implementation of

`IFragmentsModel.getSubsetBuffer`

***

### hasIndexEntry()

> **hasIndexEntry**\<`K`\>(`name`, `key`): `boolean`

Test whether a key exists in the named index without resolving its value.

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `key` | `K` |

#### Returns

`boolean`

#### Implementation of

`IFragmentsModel.hasIndexEntry`

***

### redo()

> **redo**(): `void`

Redo the last undone edit.

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Discard all pending edits on this model.

#### Returns

`void`

***

### save()

> **save**(`raw`?): `Uint8Array`

Flatten the current pending-edit history into a new committed buffer.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `raw`? | `boolean` | `true` | whether to return the raw buffer or the the result of pako.deflate. Defaults to `true`. |

#### Returns

`Uint8Array`

The raw/deflated flatbuffer bytes of the updated model.

***

### selectRequest()

> **selectRequest**(`index`): `void`

Navigate to a specific point in the edit history by index.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

***

### setRequests()

> **setRequests**(`data`): `void`

Replace the edit history with a caller-provided one. Useful for
restoring state from disk.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `object` |
| `data.requests`? | [`EditRequest`](../type-aliases/EditRequest.md)[] |
| `data.undoneRequests`? | [`EditRequest`](../type-aliases/EditRequest.md)[] |

#### Returns

`void`

***

### undo()

> **undo**(): `void`

Undo the last edit.

#### Returns

`void`
