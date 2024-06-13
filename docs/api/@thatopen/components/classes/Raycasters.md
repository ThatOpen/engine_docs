# Raycasters

A component that manages a raycaster for each world and automatically disposes it when its corresponding world is disposed. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Raycasters). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Raycasters).

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

> **list**: `Map`\<`string`, [`SimpleRaycaster`](SimpleRaycaster.md)\>

A Map that stores raycasters for each world.
The key is the world's UUID, and the value is the corresponding SimpleRaycaster instance.

***

### onDisposed

> **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### uuid

> `static` `readonly` **uuid**: `"d5d8bdf0-db25-4952-b951-b643af207ace"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### delete()

> **delete**(`world`): `void`

Deletes the SimpleRaycaster instance associated with the given world.
If a SimpleRaycaster instance exists for the given world, it will be disposed and removed from the list.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | [`World`](../interfaces/World.md) | The world for which to delete the SimpleRaycaster instance. |

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

### get()

> **get**(`world`): [`SimpleRaycaster`](SimpleRaycaster.md)

Retrieves a SimpleRaycaster instance for the given world.
If a SimpleRaycaster instance already exists for the world, it will be returned.
Otherwise, a new SimpleRaycaster instance will be created and added to the list.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | [`World`](../interfaces/World.md) | The world for which to retrieve or create a SimpleRaycaster instance. |

#### Returns

[`SimpleRaycaster`](SimpleRaycaster.md)

The SimpleRaycaster instance for the given world.

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
