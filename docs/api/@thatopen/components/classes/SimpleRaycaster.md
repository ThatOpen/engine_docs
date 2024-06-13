# SimpleRaycaster

A simple [raycaster](https://threejs.org/docs/#api/en/core/Raycaster) that allows to easily get items from the scene using the mouse and touch events.

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### components

> **components**: [`Components`](Components.md)

The components instance to which this Raycaster belongs.

***

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

***

### mouse

> `readonly` **mouse**: [`Mouse`](Mouse.md)

The position of the mouse in the screen.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### three

> `readonly` **three**: `Raycaster`

A reference to the Three.js Raycaster instance.
This is used for raycasting operations.

***

### world

> **world**: [`World`](../interfaces/World.md)

A reference to the world instance to which this Raycaster belongs.
This is used to access the camera and meshes.

## Methods

### castRay()

> **castRay**(`items`): `null` \| `Intersection`\<`Object3D`\<`Object3DEventMap`\>\>

Throws a ray from the camera to the mouse or touch event point and returns
the first item found. This also takes into account the clipping planes
used by the renderer.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `items` | `Object3D`\<`Object3DEventMap`\>[] | the [meshes](https://threejs.org/docs/#api/en/objects/Mesh) to query. If not provided, it will query all the meshes stored in Components.meshes. |

#### Returns

`null` \| `Intersection`\<`Object3D`\<`Object3DEventMap`\>\>

***

### castRayFromVector()

> **castRayFromVector**(`origin`, `direction`, `items`): `null` \| `Intersection`\<`Object3D`\<`Object3DEventMap`\>\>

Casts a ray from a given origin in a given direction and returns the first item found.
This method also takes into account the clipping planes used by the renderer.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `origin` | `Vector3` | The origin of the ray. |
| `direction` | `Vector3` | The direction of the ray. |
| `items` | `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[] | The meshes to query. If not provided, it will query all the meshes stored in [World.meshes](../interfaces/World.md#meshes). |

#### Returns

`null` \| `Intersection`\<`Object3D`\<`Object3DEventMap`\>\>

The first intersection found or `null` if no intersection was found.

***

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)
