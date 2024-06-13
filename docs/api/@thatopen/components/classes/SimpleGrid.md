# SimpleGrid

An infinite grid. Created by [fyrestar](https://github.com/Fyrestar/THREE.InfiniteGridHelper) and translated to typescript by [dkaraush](https://github.com/dkaraush/THREE.InfiniteGridHelper/blob/master/InfiniteGridHelper.ts).

## Implements

- [`Hideable`](../interfaces/Hideable.md)
- [`Disposable`](../interfaces/Disposable.md)

## Properties

### components

> **components**: [`Components`](Components.md)

The components instance to which this grid belongs.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### three

> `readonly` **three**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

The Three.js mesh that contains the infinite grid.

***

### world

> **world**: [`World`](../interfaces/World.md)

The world instance to which this Raycaster belongs.

## Accessors

### fade

> `get` **fade**(): `boolean`

Whether the grid should fade away with distance. Recommended to be true for
perspective cameras and false for orthographic cameras.

> `set` **fade**(`active`): `void`

Whether the grid should fade away with distance. Recommended to be true for
perspective cameras and false for orthographic cameras.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `active` | `boolean` |

#### Returns

`boolean`

***

### material

> `get` **material**(): `ShaderMaterial`

The material of the grid.

#### Returns

`ShaderMaterial`

***

### visible

> `get` **visible**(): `boolean`

[Hideable.visible](../interfaces/Hideable.md#visible)

> `set` **visible**(`visible`): `void`

[Hideable.visible](../interfaces/Hideable.md#visible)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `visible` | `boolean` |

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
