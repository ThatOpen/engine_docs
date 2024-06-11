# SimpleWorld\<T, U, S\>

A class representing a simple world in a 3D environment. It extends the Base class and implements the World interface.

## Extends

- [`Base`](Base.md)

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `T` *extends* [`BaseScene`](BaseScene.md) | [`BaseScene`](BaseScene.md) | The type of the scene. Default is BaseScene. |
| `U` *extends* [`BaseCamera`](BaseCamera.md) | [`BaseCamera`](BaseCamera.md) | The type of the camera. Default is BaseCamera. |
| `S` *extends* [`BaseRenderer`](BaseRenderer.md) | [`BaseRenderer`](BaseRenderer.md) | The type of the renderer. Default is BaseRenderer. |

## Implements

- [`World`](../interfaces/World.md)
- [`Disposable`](../interfaces/Disposable.md)
- [`Updateable`](../interfaces/Updateable.md)

## Properties

### enabled

> **enabled**: `boolean` = `true`

Indicates whether the world is currently enabled.
When disabled, the world will not be updated.

***

### isDisposing

> **isDisposing**: `boolean` = `false`

Indicates whether the world is currently being disposed. This is useful to prevent trying to access world's elements when it's being disposed, which could cause errors when you dispose a world.

#### Implementation of

[`World`](../interfaces/World.md) . [`isDisposing`](../interfaces/World.md#isdisposing)

***

### meshes

> `readonly` **meshes**: `Set`\<`Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\>

All the loaded [meshes](https://threejs.org/docs/#api/en/objects/Mesh). These meshes will be taken into account in operations like raycasting.

#### Implementation of

[`World`](../interfaces/World.md) . [`meshes`](../interfaces/World.md#meshes)

***

### name?

> `optional` **name**: `string`

An optional name for the world.

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

> **uuid**: `string`

A unique identifier for the world.

#### Implementation of

[`World`](../interfaces/World.md) . [`uuid`](../interfaces/World.md#uuid)

## Accessors

### camera

> `get` **camera**(): `U`

Getter for the camera. If no camera is initialized, it throws an error.

> `set` **camera**(`camera`): `void`

Setter for the camera. It sets the current camera, adds the world to the camera's worlds set,
sets the current world in the camera, and triggers the camera's onWorldChanged event with the added action.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `camera` | `U` | The new camera to be set. |

#### Returns

`U`

The current camera.

***

### renderer

> `get` **renderer**(): `null` \| `S`

Getter for the renderer.

> `set` **renderer**(`renderer`): `void`

Setter for the renderer. It sets the current renderer, adds the world to the renderer's worlds set,
sets the current world in the renderer, and triggers the renderer's onWorldChanged event with the added action.
If a new renderer is set, it also triggers the onWorldChanged event with the removed action for the old renderer.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `null` \| `S` | The new renderer to be set or null to remove the current renderer. |

#### Returns

`null` \| `S`

The current renderer or null if no renderer is set. Some worlds don't need a renderer to work (when your mail goal is not to display a 3D viewport to the user).

***

### scene

> `get` **scene**(): `T`

Getter for the scene. If no scene is initialized, it throws an error.

> `set` **scene**(`scene`): `void`

Setter for the scene. It sets the current scene, adds the world to the scene's worlds set,
sets the current world in the scene, and triggers the scene's onWorldChanged event with the added action.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `scene` | `T` | The new scene to be set. |

#### Returns

`T`

The current scene.

## Methods

### dispose()

> **dispose**(`disposeResources`): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `disposeResources` | `boolean` | `true` |

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

[`Base`](Base.md) . [`isConfigurable`](Base.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`Base`](Base.md) . [`isDisposeable`](Base.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`Base`](Base.md) . [`isHideable`](Base.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`Base`](Base.md) . [`isResizeable`](Base.md#isresizeable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`Base`](Base.md) . [`isUpdateable`](Base.md#isupdateable)

***

### update()

> **update**(`delta`?): `void`

[Updateable.update](../interfaces/Updateable.md#update)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `delta`? | `number` |

#### Returns

`void`

#### Implementation of

[`Updateable`](../interfaces/Updateable.md) . [`update`](../interfaces/Updateable.md#update)
