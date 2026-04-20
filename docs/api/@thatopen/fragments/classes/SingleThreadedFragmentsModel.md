# SingleThreadedFragmentsModel

The main class for managing a 3D model loaded from a fragments file in a single thread. It's designed for easy data querying in the backend, so all the 3D visualization logic is not present.

## Constructors

### new SingleThreadedFragmentsModel()

> **new SingleThreadedFragmentsModel**(`modelId`, `modelData`, `raw`): [`SingleThreadedFragmentsModel`](SingleThreadedFragmentsModel.md)

The constructor of the fragments model.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `modelId` | `string` | `undefined` |
| `modelData` | `Uint8Array` | `undefined` |
| `raw` | `boolean` | `false` |

#### Returns

[`SingleThreadedFragmentsModel`](SingleThreadedFragmentsModel.md)

## Accessors

### modelId

> `get` **modelId**(): `string`

The ID of the model.

#### Returns

`string`

## Methods

### dispose()

> **dispose**(): `void`

Dispose the model. Use this when you're done with the model.
If you use the [FragmentsModels.dispose](FragmentsModels.md#dispose) method, this will be called automatically for all models.

#### Returns

`void`

***

### edit()

> **edit**(`requests`): `object`

Apply a batch of edit requests. Accumulates onto this model's
pending-edit history; call [save](SingleThreadedFragmentsModel.md#save) to flatten them into a new
committed buffer or [reset](SingleThreadedFragmentsModel.md#reset) to discard.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `requests` | [`EditRequest`](../type-aliases/EditRequest.md)[] |

#### Returns

`object`

The delta flatbuffer bytes and the local IDs assigned to
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

***

### getCRS()

> **getCRS**(): `any`

Get the Coordinate Reference System (CRS) data of the model, if available.

#### Returns

`any`

***

### getCategories()

> **getCategories**(): `string`[]

Get all the categories of the model.

#### Returns

`string`[]

***

### getCoordinates()

> **getCoordinates**(): `number`[]

Gets coordinates of the model.

#### Returns

`number`[]

***

### getGlobalTranformsIdsOfItems()

> **getGlobalTranformsIdsOfItems**(`ids`): `Promise`\<`number`[]\>

Gets the global transforms IDs of the items of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ids` | `number`[] | The local IDs of the items to get the global transforms IDs of. |

#### Returns

`Promise`\<`number`[]\>

***

### getGlobalTransforms()

> **getGlobalTransforms**(`localIds`?): `Promise`\<`Map`\<`number`, [`RawGlobalTransformData`](../type-aliases/RawGlobalTransformData.md)\>\>

Gets the global transforms of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the global transforms to get. If undefined, it will return all global transforms. |

#### Returns

`Promise`\<`Map`\<`number`, [`RawGlobalTransformData`](../type-aliases/RawGlobalTransformData.md)\>\>

***

### getGlobalTransformsIds()

> **getGlobalTransformsIds**(): `Promise`\<`number`[] \| `Uint32Array` \| `Set`\<`number`\>\>

Gets all the global transforms IDs of the model.

#### Returns

`Promise`\<`number`[] \| `Uint32Array` \| `Set`\<`number`\>\>

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

***

### getItems()

> **getItems**(`localIds`?): `Promise`\<`Map`\<`number`, [`RawItemData`](../type-aliases/RawItemData.md)\>\>

Gets the items of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the items to get. If undefined, it will return all items. |

#### Returns

`Promise`\<`Map`\<`number`, [`RawItemData`](../type-aliases/RawItemData.md)\>\>

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

***

### getItemsChildren()

> **getItemsChildren**(`ids`): `void`

Get the spatial structure children of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ids` | [`Identifier`](../type-aliases/Identifier.md)[] | The IDs of the items to look up. |

#### Returns

`void`

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

***

### getItemsIds()

> **getItemsIds**(): `Promise`\<`number`[] \| `Uint32Array` \| `Set`\<`number`\>\>

Gets all the items IDs of the model.

#### Returns

`Promise`\<`number`[] \| `Uint32Array` \| `Set`\<`number`\>\>

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

***

### getItemsWithGeometry()

> **getItemsWithGeometry**(): `number`[]

Get all the items of the model that have geometry.

#### Returns

`number`[]

***

### getLocalIds()

> **getLocalIds**(): `Promise`\<`number`[]\>

Get all the local IDs of the model.

#### Returns

`Promise`\<`number`[]\>

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

***

### getLocalTransforms()

> **getLocalTransforms**(`localIds`?): `Promise`\<`Map`\<`number`, [`RawTransformData`](../type-aliases/RawTransformData.md)\>\>

Gets the local transforms of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the local transforms to get. If undefined, it will return all local transforms. |

#### Returns

`Promise`\<`Map`\<`number`, [`RawTransformData`](../type-aliases/RawTransformData.md)\>\>

***

### getLocalTransformsIds()

> **getLocalTransformsIds**(): `Promise`\<`number`[] \| `Uint32Array` \| `Set`\<`number`\>\>

Gets all the local transforms IDs of the model.

#### Returns

`Promise`\<`number`[] \| `Uint32Array` \| `Set`\<`number`\>\>

***

### getMaterials()

> **getMaterials**(`localIds`?): `Promise`\<`Map`\<`number`, [`RawMaterial`](../type-aliases/RawMaterial.md)\>\>

Gets the materials of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the materials to get. If undefined, it will return all materials. |

#### Returns

`Promise`\<`Map`\<`number`, [`RawMaterial`](../type-aliases/RawMaterial.md)\>\>

***

### getMaterialsIds()

> **getMaterialsIds**(): `Promise`\<`number`[] \| `Uint32Array` \| `Set`\<`number`\>\>

Gets all the materials IDs of the model.

#### Returns

`Promise`\<`number`[] \| `Uint32Array` \| `Set`\<`number`\>\>

***

### getMaxLocalId()

> **getMaxLocalId**(): `number`

Get the maximum local ID of the model.

#### Returns

`number`

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

***

### getPositions()

> **getPositions**(`localIds`): `object`[]

Get the absolute positions of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `number`[] | The local IDs of the items to look up. |

#### Returns

`object`[]

***

### getRelations()

> **getRelations**(`localIds`?): `Promise`\<`Map`\<`number`, [`RawRelationData`](../type-aliases/RawRelationData.md)\>\>

Gets the relations of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `number`[] | The local IDs of the relations to get. If undefined, it will return all relations. |

#### Returns

`Promise`\<`Map`\<`number`, [`RawRelationData`](../type-aliases/RawRelationData.md)\>\>

***

### getRepresentations()

> **getRepresentations**(`localIds`?): `Promise`\<`Map`\<`number`, [`RawRepresentation`](../type-aliases/RawRepresentation.md)\>\>

Gets the representations of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the representations to get. If undefined, it will return all representations. |

#### Returns

`Promise`\<`Map`\<`number`, [`RawRepresentation`](../type-aliases/RawRepresentation.md)\>\>

***

### getRepresentationsIds()

> **getRepresentationsIds**(): `Promise`\<`number`[] \| `Uint32Array` \| `Set`\<`number`\>\>

Gets all the representations IDs of the model.

#### Returns

`Promise`\<`number`[] \| `Uint32Array` \| `Set`\<`number`\>\>

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

### getSamples()

> **getSamples**(`localIds`?): `Promise`\<`Map`\<`number`, [`RawSample`](../type-aliases/RawSample.md)\>\>

Gets the samples of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the samples to get. If undefined, it will return all samples. |

#### Returns

`Promise`\<`Map`\<`number`, [`RawSample`](../type-aliases/RawSample.md)\>\>

***

### getSamplesIds()

> **getSamplesIds**(): `Promise`\<`number`[] \| `Uint32Array` \| `Set`\<`number`\>\>

Gets all the samples IDs of the model.

#### Returns

`Promise`\<`number`[] \| `Uint32Array` \| `Set`\<`number`\>\>

***

### getSection()

> **getSection**(`plane`, `localIds`?): `Promise`\<`ModelSection`\>

Gets the section (edges and fills) between the model and a given clipping plane.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `plane` | `Plane` | The plane to get the section of. |
| `localIds`? | `number`[] | The local IDs of the items to get the section of. If undefined, it will return the section of all items. |

#### Returns

`Promise`\<`ModelSection`\>

***

### getSpatialStructure()

> **getSpatialStructure**(): `any`

Get the spatial structure of the model.

#### Returns

`any`

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

> **save**(): `Uint8Array`

Flatten the current pending-edit history into a new committed buffer.

#### Returns

`Uint8Array`

The raw flatbuffer bytes of the updated model.

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
