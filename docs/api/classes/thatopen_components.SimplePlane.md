---
id: "thatopen_components.SimplePlane"
title: "Class: SimplePlane"
sidebar_label: "SimplePlane"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).SimplePlane

Each of the planes created by SimpleClipper.

## Implements

- [`Disposable`](../interfaces/thatopen_components.Disposable.md)
- [`Hideable`](../interfaces/thatopen_components.Hideable.md)

## Properties

### onDisposed

• `Readonly` **onDisposed**: [`Event`](thatopen_components.Event.md)<`unknown`\>

[Disposable.onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/thatopen_components.Disposable.md).[onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Defined in

[packages/core/src/core/Clipper/src/simple-plane.ts:17](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/src/simple-plane.ts#L17)

___

### onDraggingEnded

• `Readonly` **onDraggingEnded**: [`Event`](thatopen_components.Event.md)<`unknown`\>

Event that fires when the user stops dragging a clipping plane.

#### Defined in

[packages/core/src/core/Clipper/src/simple-plane.ts:14](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/src/simple-plane.ts#L14)

___

### onDraggingStarted

• `Readonly` **onDraggingStarted**: [`Event`](thatopen_components.Event.md)<`unknown`\>

Event that fires when the user starts dragging a clipping plane.

#### Defined in

[packages/core/src/core/Clipper/src/simple-plane.ts:11](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/src/simple-plane.ts#L11)

## Accessors

### enabled

• `set` **enabled**(`state`): `void`

[Component.enabled](thatopen_components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/core/src/core/Clipper/src/simple-plane.ts:52](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/src/simple-plane.ts#L52)

___

### meshes

• `get` **meshes**(): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

The meshes used for raycasting

#### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

#### Defined in

[packages/core/src/core/Clipper/src/simple-plane.ts:74](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/src/simple-plane.ts#L74)

___

### planeMaterial

• `get` **planeMaterial**(): `Material` \| `Material`[]

The material of the clipping plane representation.

#### Returns

`Material` \| `Material`[]

#### Defined in

[packages/core/src/core/Clipper/src/simple-plane.ts:79](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/src/simple-plane.ts#L79)

• `set` **planeMaterial**(`material`): `void`

The material of the clipping plane representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `Material` \| `Material`[] |

#### Returns

`void`

#### Defined in

[packages/core/src/core/Clipper/src/simple-plane.ts:84](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/src/simple-plane.ts#L84)

___

### size

• `get` **size**(): `number`

The size of the clipping plane representation.

#### Returns

`number`

#### Defined in

[packages/core/src/core/Clipper/src/simple-plane.ts:89](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/src/simple-plane.ts#L89)

• `set` **size**(`size`): `void`

Sets the size of the clipping plane representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Defined in

[packages/core/src/core/Clipper/src/simple-plane.ts:94](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/src/simple-plane.ts#L94)

___

### visible

• `get` **visible**(): `boolean`

[Hideable.visible](../interfaces/thatopen_components.Hideable.md#visible)

#### Returns

`boolean`

#### Implementation of

[Hideable](../interfaces/thatopen_components.Hideable.md).[visible](../interfaces/thatopen_components.Hideable.md#visible)

#### Defined in

[packages/core/src/core/Clipper/src/simple-plane.ts:61](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/src/simple-plane.ts#L61)

• `set` **visible**(`state`): `void`

[Hideable.visible](../interfaces/thatopen_components.Hideable.md#visible)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Implementation of

[Hideable](../interfaces/thatopen_components.Hideable.md).[visible](../interfaces/thatopen_components.Hideable.md#visible)

#### Defined in

[packages/core/src/core/Clipper/src/simple-plane.ts:66](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/src/simple-plane.ts#L66)

## Methods

### dispose

▸ **dispose**(): `void`

[Disposable.dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[Disposable](../interfaces/thatopen_components.Disposable.md).[dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Defined in

[packages/core/src/core/Clipper/src/simple-plane.ts:155](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/src/simple-plane.ts#L155)

___

### update

▸ **update**(): `void`

[Updateable.update](../interfaces/thatopen_components.Updateable.md#update)

#### Returns

`void`

#### Defined in

[packages/core/src/core/Clipper/src/simple-plane.ts:146](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/src/simple-plane.ts#L146)
