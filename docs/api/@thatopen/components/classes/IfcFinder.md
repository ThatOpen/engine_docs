# IfcFinder

Component to make text queries in the IFC.

## Extends

- [`Component`](Component.md)

## Properties

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

#### Overrides

[`Component`](Component.md) . [`enabled`](Component.md#enabled)

***

### list

> **list**: `Map`\<`string`, `IfcQueryGroup`\>

List of all created IfcQueryGroup instances.

***

### uuid

> `static` `readonly` **uuid**: `"0da7ad77-f734-42ca-942f-a074adfd1e3a"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Accessors

### queries

> `get` **queries**(): `Set` \<[`IfcFinderQuery`](IfcFinderQuery.md)\>

List of all queries from all created IfcQueryGroup instances.

#### Returns

`Set` \<[`IfcFinderQuery`](IfcFinderQuery.md)\>

## Methods

### clear()

> **clear**(): `void`

Deletes all IfcQueryGroup instances.

#### Returns

`void`

***

### create()

> **create**(): `IfcQueryGroup`

Creates a new IfcQueryGroup.

#### Returns

`IfcQueryGroup`

***

### delete()

> **delete**(`id`): `void`

Creates the IfcQueryGroup with the given ID.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

***

### export()

> **export**(): `object`

Exports all the query groups created. You can then import this data back using the import method.

#### Returns

`object`

***

### import()

> **import**(`data`): `void`

Imports all the query groups provided in the given data. You can generate this data to save the result of queries and persist it over time.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | The data containing the serialized query groups to import. |

#### Returns

`void`

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

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`Component`](Component.md) . [`isUpdateable`](Component.md#isupdateable)
