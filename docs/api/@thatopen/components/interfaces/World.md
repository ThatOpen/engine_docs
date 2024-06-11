# World

Represents a 3D world with meshes, scene, camera, renderer, and other properties.

## Extends

- [`Disposable`](Disposable.md) . [`Updateable`](Updateable.md)

## Properties

### camera

> **camera**: [`BaseCamera`](../classes/BaseCamera.md)

The base camera of the world.

***

### dispose()

> **dispose**: () => `void` \| `Promise`\<`void`\>

Destroys the object from memory to prevent a
[memory leak](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects).

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

[`Disposable`](Disposable.md) . [`dispose`](Disposable.md#dispose)

***

### isDisposing

> **isDisposing**: `boolean`

Indicates whether the world is currently disposing. This is useful for cancelling logic that access the elements of a world (which are also disposed).

***

### meshes

> **meshes**: `Set`\<`Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\>

A set of meshes present in the world. This is taken into account for operations like raycasting.

***

### onAfterUpdate

> **onAfterUpdate**: [`Event`](../classes/Event.md)\<`any`\>

Actions that should be executed after updating the component.

#### Inherited from

[`Updateable`](Updateable.md) . [`onAfterUpdate`](Updateable.md#onafterupdate)

***

### onBeforeUpdate

> **onBeforeUpdate**: [`Event`](../classes/Event.md)\<`any`\>

Actions that should be executed before updating the component.

#### Inherited from

[`Updateable`](Updateable.md) . [`onBeforeUpdate`](Updateable.md#onbeforeupdate)

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](../classes/Event.md)\<`any`\>

Fired after the tool has been disposed.

#### Inherited from

[`Disposable`](Disposable.md) . [`onDisposed`](Disposable.md#ondisposed)

***

### renderer

> **renderer**: `null` \| [`BaseRenderer`](../classes/BaseRenderer.md)

The base renderer of the world. Can be null if this world doesn't use a renderer (e.g. in a backend environment).

***

### scene

> **scene**: [`BaseScene`](../classes/BaseScene.md)

The base scene of the world.

***

### uuid

> **uuid**: `string`

A unique identifier for the world.

## Methods

### update()

> **update**(`delta`?): `void`

Function used to update the state of this component each frame. For
instance, a renderer component will make a render each frame.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `delta`? | `number` |

#### Returns

`void`

#### Inherited from

[`Updateable`](Updateable.md) . [`update`](Updateable.md#update)
