# Editor

The Editor class provides functionality for editing and managing Fragments models. It handles operations like editing model elements, saving changes and managing edit history.

## Properties

### onEdit

> **onEdit**: `Event`\<`object`\>

Event triggered when an edit is made.

#### Type declaration

##### modelId

> **modelId**: `string`

## Methods

### \_update()

> **\_update**(`modelId`): `Promise`\<`void`\>

Internal method to update the specified Fragments model. Do not use this method directly.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to update. |

#### Returns

`Promise`\<`void`\>

***

### applyChanges()

> **applyChanges**(`modelId`, `elements`): `Promise`\<`number`[]\>

Applies changes to the specified Fragments model.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `modelId` | `string` | `undefined` | The ID of the model to apply the changes to. |
| `elements` | `Element`[] | `[]` | The elements to apply the changes to. |

#### Returns

`Promise`\<`number`[]\>

The applied changes.

***

### clearElementsRequests()

> **clearElementsRequests**(`modelId`): `null` \| [`EditRequest`](../type-aliases/EditRequest.md)[]

Clears all the element edit requests of the specified Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to clear the requests from. |

#### Returns

`null` \| [`EditRequest`](../type-aliases/EditRequest.md)[]

***

### createCircleExtrusion()

> **createCircleExtrusion**(`modelId`, `data`): `string`

Creates a circle extrusion in the specified Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to create the circle extrusion in. |
| `data` | [`RawCircleExtrusion`](../type-aliases/RawCircleExtrusion.md) | The data of the circle extrusion to create. |

#### Returns

`string`

The created circle extrusion.

***

### createElements()

> **createElements**(`modelId`, `elements`): `Promise`\<`null` \| `Element`[]\>

Creates elements in the specified Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to create the elements in. |
| `elements` | [`NewElementData`](../type-aliases/NewElementData.md)[] | The elements to create. |

#### Returns

`Promise`\<`null` \| `Element`[]\>

The created elements.

***

### createGlobalTransform()

> **createGlobalTransform**(`modelId`, `transform`, `itemId`): `string`

Creates a global transform in the specified Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to create the global transform in. |
| `transform` | `Matrix4` | The global transform to create. |
| `itemId` | `string` \| `number` | The ID of the item to create the global transform for. |

#### Returns

`string`

The created global transform.

***

### createItem()

> **createItem**(`modelId`, `item`): `string`

Creates an item in the specified Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to create the item in. |
| `item` | [`RawItemData`](../type-aliases/RawItemData.md) | The item to create. |

#### Returns

`string`

The created item.

***

### createLocalTransform()

> **createLocalTransform**(`modelId`, `transform`): `string`

Creates a local transform in the specified Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to create the local transform in. |
| `transform` | `Matrix4` | The local transform to create. |

#### Returns

`string`

The created local transform.

***

### createMaterial()

> **createMaterial**(`modelId`, `material`): `string`

Creates a material in the specified Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to create the material in. |
| `material` | `MeshLambertMaterial` | The material to create. |

#### Returns

`string`

The created material.

***

### createSample()

> **createSample**(`modelId`, `data`): `string`

Creates a sample in the specified Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to create the sample in. |
| `data` | `object` | The data of the sample to create. |
| `data.globalTransform` | `string` \| `number` | - |
| `data.localTransform` | `string` \| `number` | - |
| `data.material` | `string` \| `number` | - |
| `data.representation` | `string` \| `number` | - |

#### Returns

`string`

The created sample.

***

### createShell()

> **createShell**(`modelId`, `geometry`): `string`

Creates a shell in the specified Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to create the shell in. |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | The geometry of the shell to create. |

#### Returns

`string`

The created shell.

***

### deleteData()

> **deleteData**(`modelId`, `data`): `Promise`\<`void`\>

Deletes any type of data from the specified Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to delete the data from. |
| `data` | `object` | The data to delete. |
| `data.filterInUse`? | `boolean` | - |
| `data.itemIds`? | `Iterable`\<`number`\> | - |
| `data.localTransformIds`? | `Iterable`\<`number`\> | - |
| `data.materialIds`? | `Iterable`\<`number`\> | - |
| `data.representationIds`? | `Iterable`\<`number`\> | - |
| `data.sampleIds`? | `Iterable`\<`number`\> | - |

#### Returns

`Promise`\<`void`\>

The deleted data.

***

### deleteElements()

> **deleteElements**(`modelId`, `elements`): `void`

Deletes elements in the specified Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to delete the elements in. |
| `elements` | `Element`[] | The elements to delete. |

#### Returns

`void`

The deleted elements.

***

### edit()

> **edit**(`modelId`, `actions`, `config`): `Promise`\<`number`[]\>

Edits a Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to edit. |
| `actions` | [`EditRequest`](../type-aliases/EditRequest.md)[] | The actions to perform on the model. |
| `config` | `object` | The configuration for the edit. |
| `config.removeRedo` | `boolean` | - |

#### Returns

`Promise`\<`number`[]\>

The IDs of the elements that were edited.

***

### getElements()

> **getElements**(`modelId`, `localIds`): `Promise`\<`Element`[]\>

Gets the elements of the specified Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to get the elements from. |
| `localIds` | `Iterable`\<`number`\> | The local IDs of the elements to get. |

#### Returns

`Promise`\<`Element`[]\>

The elements of the model.

***

### getModelRequests()

> **getModelRequests**(`modelId`): `Promise`\<`object`\>

Gets the requests of the specified Fragments model. Useful for building a history menu.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to get the requests from. |

#### Returns

`Promise`\<`object`\>

The requests of the model.

##### requests

> **requests**: [`EditRequest`](../type-aliases/EditRequest.md)[]

##### undoneRequests

> **undoneRequests**: [`EditRequest`](../type-aliases/EditRequest.md)[]

***

### relate()

> **relate**(`modelId`, `itemId`, `relationName`, `itemIds`): `Promise`\<`void`\>

Relates an item to other items in the specified Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to relate the item in. |
| `itemId` | `number` | The ID of the item to relate. |
| `relationName` | `string` | The name of the relation to relate. |
| `itemIds` | `number`[] | The IDs of the items to relate. |

#### Returns

`Promise`\<`void`\>

The related items.

***

### reset()

> **reset**(`modelId`): `Promise`\<`void`\>

Resets the edits of the specified Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to reset. |

#### Returns

`Promise`\<`void`\>

***

### save()

> **save**(`modelId`): `Promise`\<`null` \| `object`\>

Saves all the edits of the specified Fragments model. Useful for exporting the model with the edits applied. Similar to "Saving" the changes in a BIM app.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to save. |

#### Returns

`Promise`\<`null` \| `object`\>

The requests that were saved.

***

### selectRequest()

> **selectRequest**(`modelId`, `index`): `Promise`\<`void`\>

Selects an edit request of the specified Fragments model to set the model in the state it
was after the request was applied.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to select the request from. |
| `index` | `number` | The index of the request to select. |

#### Returns

`Promise`\<`void`\>

The selected request.

***

### setItem()

> **setItem**(`modelId`, `item`): `void`

Sets an item in the specified Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to set the item in. |
| `item` | [`ItemData`](../interfaces/ItemData.md) | The item to set. |

#### Returns

`void`

The set item.

***

### unrelate()

> **unrelate**(`modelId`, `itemId`, `relationName`, `itemIds`): `Promise`\<`void`\>

Removes a relation between an item and other items in the specified Fragments model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The ID of the model to unrelate the item in. |
| `itemId` | `number` | The ID of the item to unrelate. |
| `relationName` | `string` | The name of the relation to unrelate. |
| `itemIds` | `number`[] | The IDs of the items to unrelate. |

#### Returns

`Promise`\<`void`\>

The unrelated items.
