# MiniMaps

A component that manages multiple [MiniMap](MiniMap.md) instances, each associated with a unique world ID. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/MiniMap). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/MiniMaps).

## Extends

- [`Component`](Component.md)

## Implements

- [`Updateable`](../interfaces/Updateable.md)
- [`Disposable`](../interfaces/Disposable.md)

## Properties

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

#### Overrides

[`Component`](Component.md) . [`enabled`](Component.md#enabled)

***

### list

> **list**: `Map`\<`string`, [`MiniMap`](MiniMap.md)\>

A collection of [MiniMap](MiniMap.md) instances, each associated with a unique world ID.

***

### onAfterUpdate

> `readonly` **onAfterUpdate**: [`Event`](Event.md)\<`unknown`\>

[Updateable.onAfterUpdate](../interfaces/Updateable.md#onafterupdate)

#### Implementation of

[`Updateable`](../interfaces/Updateable.md) . [`onAfterUpdate`](../interfaces/Updateable.md#onafterupdate)

***

### onBeforeUpdate

> `readonly` **onBeforeUpdate**: [`Event`](Event.md)\<`unknown`\>

[Updateable.onBeforeUpdate](../interfaces/Updateable.md#onbeforeupdate)

#### Implementation of

[`Updateable`](../interfaces/Updateable.md) . [`onBeforeUpdate`](../interfaces/Updateable.md#onbeforeupdate)

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### uuid

> `static` `readonly` **uuid**: `"39ad6aad-84c8-4adf-a1e0-7f25313a9e7f"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### create()

> **create**(`world`): [`MiniMap`](MiniMap.md)

Creates a new [MiniMap](MiniMap.md) instance associated with the given world.
If a [MiniMap](MiniMap.md) instance already exists for the given world, an error will be thrown.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | [`World`](../interfaces/World.md) | The [World](../interfaces/World.md) for which to create a [MiniMap](MiniMap.md) instance. |

#### Returns

[`MiniMap`](MiniMap.md)

The newly created [MiniMap](MiniMap.md) instance.

#### Throws

Will throw an error if a [MiniMap](MiniMap.md) instance already exists for the given world.

***

### delete()

> **delete**(`id`): `void`

Deletes a [MiniMap](MiniMap.md) instance associated with the given world ID.
If a [MiniMap](MiniMap.md) instance does not exist for the given ID, nothing happens.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The unique identifier of the world for which to delete the [MiniMap](MiniMap.md) instance. |

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any>`

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

***

### update()

> **update**(): `void`

[Updateable.update](../interfaces/Updateable.md#update)

#### Returns

`void`

#### Implementation of

[`Updateable`](../interfaces/Updateable.md) . [`update`](../interfaces/Updateable.md#update)
