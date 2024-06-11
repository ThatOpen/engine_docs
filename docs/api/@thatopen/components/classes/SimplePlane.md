# SimplePlane

Each of the planes created by the clipper.

## Implements

- [`Disposable`](../interfaces/Disposable.md)
- [`Hideable`](../interfaces/Hideable.md)

## Properties

### components

> **components**: [`Components`](Components.md)

The components instance to which this plane belongs.

***

### normal

> `readonly` **normal**: `Vector3`

The normal vector of the clipping plane.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### onDraggingEnded

> `readonly` **onDraggingEnded**: [`Event`](Event.md)\<`unknown`\>

Event that fires when the user stops dragging a clipping plane.

***

### onDraggingStarted

> `readonly` **onDraggingStarted**: [`Event`](Event.md)\<`unknown`\>

Event that fires when the user starts dragging a clipping plane.

***

### origin

> `readonly` **origin**: `Vector3`

The origin point of the clipping plane.

***

### three

> `readonly` **three**: `Plane`

The THREE.js Plane object representing the clipping plane.

***

### world

> **world**: [`World`](../interfaces/World.md)

The world instance to which this plane belongs.

## Accessors

### enabled

> `get` **enabled**(): `boolean`

Getter for the enabled state of the clipping plane.

> `set` **enabled**(`state`): `void`

Setter for the enabled state of the clipping plane.
Updates the clipping plane state in the renderer and throws an error if no renderer is found.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `state` | `boolean` | The new enabled state. |

#### Returns

`boolean`

The current enabled state.

***

### helper

> `get` **helper**(): `Object3D`\<`Object3DEventMap`\>

Getter for the helper object of the clipping plane.
The helper object is a THREE.Object3D that contains the clipping plane mesh and other related objects.
It is used for positioning, rotating, and scaling the clipping plane in the 3D scene.

#### Returns

`Object3D`\<`Object3DEventMap`\>

The helper object of the clipping plane.

***

### meshes

> `get` **meshes**(): `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

The meshes used for raycasting

#### Returns

`Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

***

### planeMaterial

> `get` **planeMaterial**(): `Material` \| `Material`[]

The material of the clipping plane representation.

> `set` **planeMaterial**(`material`): `void`

The material of the clipping plane representation.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `material` | `Material` \| `Material`[] |

#### Returns

`Material` \| `Material`[]

***

### size

> `get` **size**(): `number`

The size of the clipping plane representation.

> `set` **size**(`size`): `void`

Sets the size of the clipping plane representation.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`number`

***

### visible

> `get` **visible**(): `boolean`

[Hideable.visible](../interfaces/Hideable.md#visible)

> `set` **visible**(`state`): `void`

[Hideable.visible](../interfaces/Hideable.md#visible)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`boolean`

## Methods

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### setFromNormalAndCoplanarPoint()

> **setFromNormalAndCoplanarPoint**(`normal`, `point`): `void`

Sets the clipping plane's normal and origin from the given normal and point.
This method resets the clipping plane's state, updates the normal and origin,
and positions the helper object accordingly.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `normal` | `Vector3` | The new normal vector for the clipping plane. |
| `point` | `Vector3` | The new origin point for the clipping plane. |

#### Returns

`void`

***

### update()

> **update**(): `void`

[Updateable.update](../interfaces/Updateable.md#update)

#### Returns

`void`
