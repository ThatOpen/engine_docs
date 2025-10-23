# ItemsFinder

Manages and executes queries to find items within models based on specified criteria. This class provides functionalities to create, store, and execute FinderQuery instances, allowing for efficient retrieval of items that match given query parameters. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/ItemsFinder). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/ItemsFinder).

## Extends

- [`Component`](Component.md)

## Implements

- `Serializable` \<[`SerializedFinderQuery`](../interfaces/SerializedFinderQuery.md)\>

## Properties

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

#### Overrides

[`Component`](Component.md) . [`enabled`](Component.md#enabled)

***

### list

> `readonly` **list**: `DataMap`\<`string`, [`FinderQuery`](FinderQuery.md)\>

A map of FinderQuery objects, indexed by a string key.

***

### uuid

> `static` `readonly` **uuid**: `"0da7ad77-f734-42ca-942f-a074adfd1e3a"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### addFromCategories()

> **addFromCategories**(`modelIds`?): `Promise`\<`string`[]\>

Adds queries based on categories from items that have geometry.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelIds`? | `RegExp`[] | An optional array of model IDs to filter fragments. If not provided, all fragments are processed. |

#### Returns

`Promise`\<`string`[]\>

An array with the categories used to create the queries

***

### create()

> **create**(`name`, `queries`): [`FinderQuery`](FinderQuery.md)

Creates a new FinderQuery instance and adds it to the list of queries.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the query. |
| `queries` | `ItemsQueryParams`[] | The queries to use. |

#### Returns

[`FinderQuery`](FinderQuery.md)

The newly created FinderQuery instance.

***

### export()

> **export**(): `object`

Serializes the ItemsFinder's data into a format suitable for export.

#### Returns

`object`

An object containing an array of serialized finder queries.

##### data

> **data**: [`SerializedFinderQuery`](../interfaces/SerializedFinderQuery.md)[]

#### Implementation of

`Serializable.export`

***

### getItems()

> **getItems**(`queries`, `config`?): `Promise` \<[`ModelIdMap`](../type-aliases/ModelIdMap.md)\>

Retrieves items from specified models based on a query.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `queries` | `ItemsQueryParams`[] | The query parameters to filter items. |
| `config`? | `object` | - |
| `config.aggregation`? | [`QueryResultAggregation`](../type-aliases/QueryResultAggregation.md) | - |
| `config.modelIds`? | `RegExp`[] | - |

#### Returns

`Promise` \<[`ModelIdMap`](../type-aliases/ModelIdMap.md)\>

A map of model IDs to sets of item IDs that match the query.

***

### import()

> **import**(`result`): [`FinderQuery`](FinderQuery.md)[]

Imports a list of `FinderQuery` instances from a `SerializationResult` containing serialized finder query data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `result` | `SerializationResult` \<[`SerializedFinderQuery`](../interfaces/SerializedFinderQuery.md), `Record`\<`string`, `any`\>\> | The `SerializationResult` containing the serialized `SerializedFinderQuery` data. |

#### Returns

[`FinderQuery`](FinderQuery.md)[]

An array of `FinderQuery` instances created from the serialized data. Returns an empty array if the input data is null or undefined.

#### Implementation of

`Serializable.import`

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
