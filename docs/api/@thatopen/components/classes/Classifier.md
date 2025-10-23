# Classifier

The Classifier component is responsible for grouping items from different models based on criteria. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Classifier). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Classifier).

## Extends

- [`Component`](Component.md)

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

#### Overrides

[`Component`](Component.md) . [`enabled`](Component.md#enabled)

***

### list

> `readonly` **list**: `DataMap`\<`string`, `DataMap`\<`string`, [`ClassificationGroupData`](../interfaces/ClassificationGroupData.md)\>\>

A nested data map that organizes classification groups.
The outer map uses strings as keys, and the inner map contains ClassificationGroupData, also keyed by strings.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### uuid

> `static` `readonly` **uuid**: `"e25a7f3c-46c4-4a14-9d3d-5115f24ebeb7"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### addGroupItems()

> **addGroupItems**(`classification`, `group`, `items`): `void`

Adds items to a specific group within a classification.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `classification` | `string` | The classification to which the group belongs. |
| `group` | `string` | The group to which the items will be added. |
| `items` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | A map of model IDs to add to the group. |

#### Returns

`void`

***

### aggregateItemRelations()

> **aggregateItemRelations**(`classification`, `query`, `relation`, `config`?): `Promise`\<`void`\>

From the items passing the query, use the specified relation to create groupings
This method retrieves and processes related items, applying a custom aggregation callback to register
relations between items based on their attributes and local IDs.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `classification` | `string` | The classification type used to filter items. |
| `query` | `ItemsQueryParams` | Query parameters for filtering items, defined by `FRAGS.ItemsQueryParams`. |
| `relation` | `string` | The type of relation to aggregate (e.g., "ContainedInStructure", "HasAssociations"). |
| `config`? | [`ClassifyItemRelationsConfig`](../interfaces/ClassifyItemRelationsConfig.md) | Optional configuration for the aggregation process. |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the aggregation process is complete.

#### Remarks

- The `aggregationCallback` function processes each item and registers relations based on the item's
  attribute value and the local ID of its relations.
- Items without the specified attribute or relations are ignored during aggregation.

***

### aggregateItems()

> **aggregateItems**(`classification`, `query`, `config`?): `Promise`\<`void`\>

Aggregates items based on a classification and query, applying a provided function to each item.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `classification` | `string` | The classification string used to categorize the items. |
| `query` | `ItemsQueryParams` | The query parameters used to find items. |
| `config`? | `object` | Optional configuration for data and item processing. |
| `config.aggregationCallback`? | (`item`, `register`) => `void` | <p>Optional function to apply to each item; defaults to `this.defaultSaveFunction` if not provided.</p><p>                      This function receives the item data and a register function to associate item local IDs with names.</p><p>                      If no function is provided, the default save function is used.</p> |
| `config.data`? | `Partial`\<`ItemsDataConfig`\> | Optional data configuration to pass to the item retrieval. |
| `config.modelIds`? | `RegExp`[] | - |

#### Returns

`Promise`\<`void`\>

#### Remarks

The `register` function within the `config.func` allows associating item local IDs with a given name under the specified classification.
It is used to keep track of which items belong to which classification.

***

### byCategory()

> **byCategory**(`config`?): `Promise`\<`void`\>

Asynchronously processes and adds classifications by category.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config`? | [`AddClassificationConfig`](../interfaces/AddClassificationConfig.md) | Optional configuration for adding classifications. |

#### Returns

`Promise`\<`void`\>

A promise that resolves once the categories have been processed and added.

***

### byIfcBuildingStorey()

> **byIfcBuildingStorey**(`config`?): `Promise`\<`void`\>

Asynchronously processes and adds classifications by IfcBuildingStorey.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config`? | [`AddClassificationConfig`](../interfaces/AddClassificationConfig.md) | Optional configuration for adding classifications. |

#### Returns

`Promise`\<`void`\>

A promise that resolves once the storeys have been processed and added.

***

### byModel()

> **byModel**(`config`?): `Promise`\<`void`\>

Asynchronously processes models based on the provided configuration and updates classification groups.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config`? | [`AddClassificationConfig`](../interfaces/AddClassificationConfig.md) | Optional configuration for adding classifications. Contains the following properties. |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the processing is complete.

***

### defaultSaveFunction()

> **defaultSaveFunction**(`item`): `null` \| `string`

The default save function used by the classifier.
It extracts the 'value' property from the item's Name and returns it as a string.
If the 'value' property does not exist, it returns null.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `item` | `ItemData` | The item data to extract the value from. |

#### Returns

`null` \| `string`

The extracted value as a string, or null if the value does not exist.

***

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### find()

> **find**(`data`): `Promise` \<[`ModelIdMap`](../type-aliases/ModelIdMap.md)\>

Asynchronously finds a set of ModelIdMaps based on the provided classification data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ClassifierIntersectionInput`](../type-aliases/ClassifierIntersectionInput.md) | An object with classifications as keys and an array of groups as values. |

#### Returns

`Promise` \<[`ModelIdMap`](../type-aliases/ModelIdMap.md)\>

A promise that resolves to a ModelIdMap representing the intersection of all ModelIdMaps found.

***

### getGroupData()

> **getGroupData**(`classification`, `group`): [`ClassificationGroupData`](../interfaces/ClassificationGroupData.md)

Retrieves data associated with a specific group within a classification.
If the group data does not exist, it creates a new entry.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `classification` | `string` | The classification string. |
| `group` | `string` | The group string within the classification. |

#### Returns

[`ClassificationGroupData`](../interfaces/ClassificationGroupData.md)

The data object associated with the group, containing a map and a `get` method.

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any, any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any, any>`

#### Inherited from

[`Component`](Component.md) . [`isConfigurable`](Component.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`Component`](Component.md) . [`isDisposeable`](Component.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`Component`](Component.md) . [`isHideable`](Component.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`Component`](Component.md) . [`isResizeable`](Component.md#isresizeable)

***

### isSerializable()

> **isSerializable**(): `this is Serializable<any, Record<string, any>>`

Whether is component is Serializable.

#### Returns

`this is Serializable<any, Record<string, any>>`

#### Inherited from

[`Component`](Component.md) . [`isSerializable`](Component.md#isserializable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`Component`](Component.md) . [`isUpdateable`](Component.md#isupdateable)

***

### removeItems()

> **removeItems**(`modelIdMap`, `config`?): `void`

Removes items from the classifier based on the provided model ID map and configuration.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelIdMap` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | A map containing model IDs to be removed. |
| `config`? | [`RemoveClassifierItemsConfig`](../interfaces/RemoveClassifierItemsConfig.md) | Optional configuration for removing items.s. |

#### Returns

`void`

#### Remarks

If no configuration is provided, items will be removed from all classifications

***

### setGroupQuery()

> **setGroupQuery**(`classification`, `group`, `query`): `void`

Sets the query for a specific group within a classification.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `classification` | `string` | The classification to target. |
| `group` | `string` | The group within the classification to target. |
| `query` | [`ClassificationGroupQuery`](../interfaces/ClassificationGroupQuery.md) | The query to set for the group. |

#### Returns

`void`
