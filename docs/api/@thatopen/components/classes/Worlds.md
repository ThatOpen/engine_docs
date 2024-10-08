# Worlds

A class representing a collection of worlds within a game engine. It manages the creation, deletion, and update of worlds. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Worlds). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Worlds).

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

> **list**: [`DataMap`](DataMap.md)\<`string`, [`World`](../interfaces/World.md)\>

A collection of worlds managed by this component.
The key is the unique identifier (UUID) of the world, and the value is the World instance.

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

> `static` `readonly` **uuid**: `"fdb61dc4-2ec1-4966-b83d-54ea795fad4a"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### create()

> **create**\<`T`, `U`, `S`\>(): [`SimpleWorld`](SimpleWorld.md)\<`T`, `U`, `S`\>

Creates a new instance of a SimpleWorld and adds it to the list of worlds.

#### Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` *extends* [`BaseScene`](BaseScene.md) | [`BaseScene`](BaseScene.md) | The type of the scene, extending from BaseScene. Defaults to BaseScene. |
| `U` *extends* [`BaseCamera`](BaseCamera.md) | [`BaseCamera`](BaseCamera.md) | The type of the camera, extending from BaseCamera. Defaults to BaseCamera. |
| `S` *extends* [`BaseRenderer`](BaseRenderer.md) | [`BaseRenderer`](BaseRenderer.md) | The type of the renderer, extending from BaseRenderer. Defaults to BaseRenderer. |

#### Returns

[`SimpleWorld`](SimpleWorld.md)\<`T`, `U`, `S`\>

#### Throws

- Throws an error if a world with the same UUID already exists in the list.

***

### delete()

> **delete**(`world`): `void`

Deletes a world from the list of worlds.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | [`World`](../interfaces/World.md) | The world to be deleted. |

#### Returns

`void`

#### Throws

- Throws an error if the provided world is not found in the list.

***

### dispose()

> **dispose**(): `void`

Disposes of the Worlds component and all its managed worlds.
This method sets the enabled flag to false, disposes of all worlds, clears the list,
and triggers the onDisposed event.

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

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

***

### update()

> **update**(`delta`?): `void` \| `Promise`\<`void`\>

[Updateable.update](../interfaces/Updateable.md#update)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `delta`? | `number` |

#### Returns

`void` \| `Promise`\<`void`\>

#### Implementation of

[`Updateable`](../interfaces/Updateable.md) . [`update`](../interfaces/Updateable.md#update)
