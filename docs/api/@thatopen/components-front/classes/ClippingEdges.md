# ClippingEdges

Class representing the ClippingEdges component. This is responsible for managing and rendering the edges of clipped objects.

## Implements

- `Hideable`
- `Disposable`
- `Updateable`

## Properties

### components

> **components**: `Components`

Reference to the components manager.

***

### enabled

> **enabled**: `boolean` = `true`

Indicates whether the component is enabled.

***

### fillNeedsUpdate

> **fillNeedsUpdate**: `boolean` = `false`

Indicates whether the fill needs to be updated.

***

### onAfterUpdate

> **onAfterUpdate**: `Event` \<[`Edge`](../interfaces/Edge.md)[]\>

OBC.Updateable.onAfterUpdate

#### Implementation of

`OBC.Updateable.onAfterUpdate`

***

### onBeforeUpdate

> **onBeforeUpdate**: `Event` \<[`Edge`](../interfaces/Edge.md)[]\>

OBC.Updateable.onBeforeUpdate

#### Implementation of

`OBC.Updateable.onBeforeUpdate`

***

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### world

> **world**: `World`

Reference to the world.

## Accessors

### fillMeshes

> `get` **fillMeshes**(): `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

Getter that returns an array of THREE.Mesh instances representing the fills of the edges.

#### Returns

`Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

An array of THREE.Mesh instances representing the fills of the edges.

***

### visible

> `get` **visible**(): `boolean`

OBC.Hideable.visible

> `set` **visible**(`visible`): `void`

OBC.Hideable.visible

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`boolean`

## Methods

### dispose()

> **dispose**(): `void`

OBC.Disposable.dispose

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`

***

### update()

> **update**(): `void`

OBC.Updateable.update

#### Returns

`void`

#### Implementation of

`OBC.Updateable.update`
