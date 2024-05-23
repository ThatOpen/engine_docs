---
id: "thatopen_components.Clipper"
title: "Class: Clipper"
sidebar_label: "Clipper"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).Clipper

A lightweight component to easily create and handle
[clipping planes](https://threejs.org/docs/#api/en/materials/Material.clippingPlanes).

**`Param`**

the instance of [Components](thatopen_components.Components.md) used.
E.g. [SimplePlane](thatopen_components.SimplePlane.md).

## Hierarchy

- [`Component`](thatopen_components.Component.md)

  ↳ **`Clipper`**

## Implements

- [`Createable`](../interfaces/thatopen_components.Createable.md)
- [`Disposable`](../interfaces/thatopen_components.Disposable.md)
- [`Hideable`](../interfaces/thatopen_components.Hideable.md)

## Properties

### onAfterCreate

• `Readonly` **onAfterCreate**: [`Event`](thatopen_components.Event.md)<[`SimplePlane`](thatopen_components.SimplePlane.md)\>

Createable.onAfterCreate

#### Defined in

[packages/core/src/core/Clipper/index.ts:31](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L31)

___

### onAfterDelete

• `Readonly` **onAfterDelete**: [`Event`](thatopen_components.Event.md)<[`SimplePlane`](thatopen_components.SimplePlane.md)\>

Createable.onAfterDelete

#### Defined in

[packages/core/src/core/Clipper/index.ts:34](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L34)

___

### onAfterDrag

• `Readonly` **onAfterDrag**: [`Event`](thatopen_components.Event.md)<`void`\>

Event that fires when the user stops dragging a clipping plane.

#### Defined in

[packages/core/src/core/Clipper/index.ts:40](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L40)

___

### onBeforeDrag

• `Readonly` **onBeforeDrag**: [`Event`](thatopen_components.Event.md)<`void`\>

Event that fires when the user starts dragging a clipping plane.

#### Defined in

[packages/core/src/core/Clipper/index.ts:37](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L37)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](thatopen_components.Event.md)<`string`\>

[Disposable.onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/thatopen_components.Disposable.md).[onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Defined in

[packages/core/src/core/Clipper/index.ts:51](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L51)

___

### orthogonalY

• **orthogonalY**: `boolean` = `false`

Whether to force the clipping plane to be orthogonal in the Y direction
(up). This is desirable when clipping a building horizontally and a
clipping plane is created in its roof, which might have a slight
slope for draining purposes.

#### Defined in

[packages/core/src/core/Clipper/index.ts:59](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L59)

___

### toleranceOrthogonalY

• **toleranceOrthogonalY**: `number` = `0.7`

The tolerance that determines whether an almost-horizontal clipping plane
will be forced to be orthogonal to the Y direction. [orthogonalY](thatopen_components.Clipper.md#orthogonaly)
has to be `true` for this to apply.

#### Defined in

[packages/core/src/core/Clipper/index.ts:66](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L66)

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[Component.enabled](thatopen_components.Component.md#enabled)

#### Returns

`boolean`

#### Overrides

Component.enabled

#### Defined in

[packages/core/src/core/Clipper/index.ts:85](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L85)

• `set` **enabled**(`state`): `void`

[Component.enabled](thatopen_components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Overrides

Component.enabled

#### Defined in

[packages/core/src/core/Clipper/index.ts:90](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L90)

___

### material

• `get` **material**(): `MeshBasicMaterial`

The material of the clipping plane representation.

#### Returns

`MeshBasicMaterial`

#### Defined in

[packages/core/src/core/Clipper/index.ts:112](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L112)

• `set` **material**(`material`): `void`

The material of the clipping plane representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `MeshBasicMaterial` |

#### Returns

`void`

#### Defined in

[packages/core/src/core/Clipper/index.ts:117](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L117)

___

### size

• `get` **size**(): `number`

The size of the geometric representation of the clippings planes.

#### Returns

`number`

#### Defined in

[packages/core/src/core/Clipper/index.ts:125](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L125)

• `set` **size**(`size`): `void`

The size of the geometric representation of the clippings planes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Defined in

[packages/core/src/core/Clipper/index.ts:130](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L130)

___

### visible

• `get` **visible**(): `boolean`

[Hideable.visible](../interfaces/thatopen_components.Hideable.md#visible)

#### Returns

`boolean`

#### Implementation of

[Hideable](../interfaces/thatopen_components.Hideable.md).[visible](../interfaces/thatopen_components.Hideable.md#visible)

#### Defined in

[packages/core/src/core/Clipper/index.ts:99](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L99)

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

[packages/core/src/core/Clipper/index.ts:104](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L104)

## Methods

### create

▸ **create**(`world`): `void`

[Createable.create](../interfaces/thatopen_components.Createable.md#create)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | `World` |

#### Returns

`void`

#### Implementation of

[Createable](../interfaces/thatopen_components.Createable.md).[create](../interfaces/thatopen_components.Createable.md#create)

#### Defined in

[packages/core/src/core/Clipper/index.ts:163](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L163)

___

### createFromNormalAndCoplanarPoint

▸ **createFromNormalAndCoplanarPoint**(`world`, `normal`, `point`): [`SimplePlane`](thatopen_components.SimplePlane.md)

Creates a plane in a certain place and with a certain orientation,
without the need of the mouse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `world` | `World` | the world where this plane should be created. |
| `normal` | `Vector3` | the orientation of the clipping plane. |
| `point` | `Vector3` | the position of the clipping plane. navigation. |

#### Returns

[`SimplePlane`](thatopen_components.SimplePlane.md)

#### Defined in

[packages/core/src/core/Clipper/index.ts:184](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L184)

___

### delete

▸ **delete**(`world`, `plane?`): `void`

[Createable.delete](../interfaces/thatopen_components.Createable.md#delete)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `world` | `World` | the world where the plane to delete is. |
| `plane?` | [`SimplePlane`](thatopen_components.SimplePlane.md) | the plane to delete. If undefined, the first plane found under the cursor will be deleted. |

#### Returns

`void`

#### Implementation of

[Createable](../interfaces/thatopen_components.Createable.md).[delete](../interfaces/thatopen_components.Createable.md#delete)

#### Defined in

[packages/core/src/core/Clipper/index.ts:201](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L201)

___

### deleteAll

▸ **deleteAll**(): `void`

Deletes all the existing clipping planes.

#### Returns

`void`

#### Defined in

[packages/core/src/core/Clipper/index.ts:213](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L213)

___

### dispose

▸ **dispose**(): `void`

[Disposable.dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[Disposable](../interfaces/thatopen_components.Disposable.md).[dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Defined in

[packages/core/src/core/Clipper/index.ts:143](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Clipper/index.ts#L143)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/thatopen_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](thatopen_components.Component.md).[isConfigurable](thatopen_components.Component.md#isconfigurable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:39](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L39)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/thatopen_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](thatopen_components.Component.md).[isDisposeable](thatopen_components.Component.md#isdisposeable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:17](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L17)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/thatopen_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](thatopen_components.Component.md).[isHideable](thatopen_components.Component.md#ishideable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:34](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L34)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/thatopen_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](thatopen_components.Component.md).[isResizeable](thatopen_components.Component.md#isresizeable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:22](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L22)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/thatopen_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](thatopen_components.Component.md).[isUpdateable](thatopen_components.Component.md#isupdateable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:27](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L27)
