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

### getSpatialStructure()

> **getSpatialStructure**(): `any`

Get the spatial structure of the model.

#### Returns

`any`
