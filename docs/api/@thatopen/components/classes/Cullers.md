# Cullers

A component that manages and provides culling functionality for meshes in a 3D scene.

## Extends

- [`Component`](Component.md)

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### list

> **list**: `Map`\<`string`, [`MeshCullerRenderer`](MeshCullerRenderer.md)\>

A map of MeshCullerRenderer instances, keyed by their world UUIDs.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

An event that is triggered when the Cullers component is disposed.

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### uuid

> `static` `readonly` **uuid**: `"69f2a50d-c266-44fc-b1bd-fa4d34be89e6"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Accessors

### enabled

> `get` **enabled**(): `boolean`

[Component.enabled](Component.md#enabled)

> `set` **enabled**(`value`): `void`

[Component.enabled](Component.md#enabled)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

## Methods

### create()

> **create**(`world`, `config`?): [`MeshCullerRenderer`](MeshCullerRenderer.md)

Creates a new MeshCullerRenderer for the given world.
If a MeshCullerRenderer already exists for the world, it will return the existing one.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | [`World`](../interfaces/World.md) | The world for which to create the MeshCullerRenderer. |
| `config`? | `Partial` \<[`CullerRendererSettings`](../interfaces/CullerRendererSettings.md)\> | Optional configuration settings for the MeshCullerRenderer. |

#### Returns

[`MeshCullerRenderer`](MeshCullerRenderer.md)

The newly created or existing MeshCullerRenderer for the given world.

***

### delete()

> **delete**(`world`): `void`

Deletes the MeshCullerRenderer associated with the given world.
If a MeshCullerRenderer exists for the given world, it will be disposed and removed from the list.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | [`World`](../interfaces/World.md) | The world for which to delete the MeshCullerRenderer. |

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
