---
id: "components.SimpleDimensions"
title: "Class: SimpleDimensions"
sidebar_label: "SimpleDimensions"
custom_edit_url: null
---

[components](../modules/components.md).SimpleDimensions

A basic dimension tool to measure distances between 2 points in 3D and
display a 3D symbol displaying the numeric value.

## Hierarchy

- [`Component`](components.Component.md)<`SimpleDimensionLine`[]\>

  ↳ **`SimpleDimensions`**

## Implements

- [`Createable`](../interfaces/components.Createable.md)
- [`Hideable`](../interfaces/components.Hideable.md)
- [`Disposable`](../interfaces/components.Disposable.md)
- [`Updateable`](../interfaces/components.Updateable.md)
- [`UI`](../interfaces/components.UI.md)

## Properties

### afterCreate

• `Readonly` **afterCreate**: [`Event`](components.Event.md)<[`SimpleDimensions`](components.SimpleDimensions.md)\>

[afterCreate](../interfaces/components.Createable.md#aftercreate)

#### Implementation of

[Createable](../interfaces/components.Createable.md).[afterCreate](../interfaces/components.Createable.md#aftercreate)

#### Defined in

temp/components/core/SimpleDimensions/index.ts:37

___

### afterDelete

• `Readonly` **afterDelete**: [`Event`](components.Event.md)<[`SimpleDimensions`](components.SimpleDimensions.md)\>

[afterDelete](../interfaces/components.Createable.md#afterdelete)

#### Implementation of

[Createable](../interfaces/components.Createable.md).[afterDelete](../interfaces/components.Createable.md#afterdelete)

#### Defined in

temp/components/core/SimpleDimensions/index.ts:43

___

### afterUpdate

• `Readonly` **afterUpdate**: [`Event`](components.Event.md)<[`SimpleDimensions`](components.SimpleDimensions.md)\>

[afterUpdate](../interfaces/components.Updateable.md#afterupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[afterUpdate](../interfaces/components.Updateable.md#afterupdate)

#### Defined in

temp/components/core/SimpleDimensions/index.ts:34

___

### beforeCreate

• `Readonly` **beforeCreate**: [`Event`](components.Event.md)<[`SimpleDimensions`](components.SimpleDimensions.md)\>

Createable.beforeCreate

#### Defined in

temp/components/core/SimpleDimensions/index.ts:40

___

### beforeDelete

• `Readonly` **beforeDelete**: [`Event`](components.Event.md)<[`SimpleDimensions`](components.SimpleDimensions.md)\>

Createable.beforeDelete

#### Defined in

temp/components/core/SimpleDimensions/index.ts:46

___

### beforeUpdate

• `Readonly` **beforeUpdate**: [`Event`](components.Event.md)<[`SimpleDimensions`](components.SimpleDimensions.md)\>

[beforeUpdate](../interfaces/components.Updateable.md#beforeupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[beforeUpdate](../interfaces/components.Updateable.md#beforeupdate)

#### Defined in

temp/components/core/SimpleDimensions/index.ts:31

___

### name

• `Readonly` **name**: ``"SimpleDimensions"``

[name](components.Component.md#name)

#### Overrides

[Component](components.Component.md).[name](components.Component.md#name)

#### Defined in

temp/components/core/SimpleDimensions/index.ts:28

___

### onCreate

• **onCreate**: [`Event`](components.Event.md)<`SimpleDimensionLine`\>

Createable.onCreate

#### Defined in

temp/components/core/SimpleDimensions/index.ts:49

___

### onDelete

• **onDelete**: [`Event`](components.Event.md)<`SimpleDimensionLine`\>

Createable.onDelete

#### Defined in

temp/components/core/SimpleDimensions/index.ts:52

___

### previewElement

• **previewElement**: `CSS2DObject`

The [symbol](https://threejs.org/docs/#examples/en/renderers/CSS2DRenderer)
that is displayed where the dimension will be drawn.

#### Defined in

temp/components/core/SimpleDimensions/index.ts:61

___

### snapDistance

• **snapDistance**: `number` = `0.25`

The minimum distance to force the dimension cursor to a vertex.

#### Defined in

temp/components/core/SimpleDimensions/index.ts:57

## Accessors

### color

• `set` **color**(`color`): `void`

The [Color](https://threejs.org/docs/#api/en/math/Color)
of the geometry of the dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `Color` |

#### Returns

`void`

#### Defined in

temp/components/core/SimpleDimensions/index.ts:125

___

### enabled

• `get` **enabled**(): `boolean`

[enabled](components.Component.md#enabled)

#### Returns

`boolean`

#### Overrides

Component.enabled

#### Defined in

temp/components/core/SimpleDimensions/index.ts:91

• `set` **enabled**(`state`): `void`

[enabled](components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Overrides

Component.enabled

#### Defined in

temp/components/core/SimpleDimensions/index.ts:96

___

### geometry

• `get` **geometry**(): `BufferGeometry`<`NormalBufferAttributes`\>

The geometry used in both endpoints of all the dimensions.

#### Returns

`BufferGeometry`<`NormalBufferAttributes`\>

#### Defined in

temp/components/core/SimpleDimensions/index.ts:131

• `set` **geometry**(`geometry`): `void`

The geometry used in both endpoints of all the dimensions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | `BufferGeometry`<`NormalBufferAttributes`\> |

#### Returns

`void`

#### Defined in

temp/components/core/SimpleDimensions/index.ts:136

___

### visible

• `get` **visible**(): `boolean`

[visible](../interfaces/components.Hideable.md#visible)

#### Returns

`boolean`

#### Implementation of

[Hideable](../interfaces/components.Hideable.md).[visible](../interfaces/components.Hideable.md#visible)

#### Defined in

temp/components/core/SimpleDimensions/index.ts:106

• `set` **visible**(`state`): `void`

[visible](../interfaces/components.Hideable.md#visible)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Implementation of

[Hideable](../interfaces/components.Hideable.md).[visible](../interfaces/components.Hideable.md#visible)

#### Defined in

temp/components/core/SimpleDimensions/index.ts:111

## Methods

### cancelDrawing

▸ **cancelDrawing**(): `void`

Cancels the drawing of the current dimension.

#### Returns

`void`

#### Defined in

temp/components/core/SimpleDimensions/index.ts:271

___

### create

▸ **create**(`plane?`): `void`

Starts or finishes drawing a new dimension line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plane?` | `Object3D`<`Event`\> | forces the dimension to be drawn on a plane. Use this if you are drawing dimensions in floor plan navigation. |

#### Returns

`void`

#### Implementation of

Createable.create

#### Defined in

temp/components/core/SimpleDimensions/index.ts:235

___

### delete

▸ **delete**(): `void`

Deletes the dimension that the user is hovering over with the mouse or touch event.

#### Returns

`void`

#### Implementation of

Createable.delete

#### Defined in

temp/components/core/SimpleDimensions/index.ts:245

___

### deleteAll

▸ **deleteAll**(): `void`

Deletes all the dimensions that have been previously created.

#### Returns

`void`

#### Defined in

temp/components/core/SimpleDimensions/index.ts:262

___

### dispose

▸ **dispose**(): `void`

[dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

temp/components/core/SimpleDimensions/index.ts:200

___

### get

▸ **get**(): `SimpleDimensionLine`[]

[get](components.Component.md#get)

#### Returns

`SimpleDimensionLine`[]

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/core/SimpleDimensions/index.ts:195

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](components.Component.md).[hasUI](components.Component.md#hasui)

#### Defined in

temp/components/base-types/component.ts:48

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](components.Component.md).[isDisposeable](components.Component.md#isdisposeable)

#### Defined in

temp/components/base-types/component.ts:28

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](components.Component.md).[isHideable](components.Component.md#ishideable)

#### Defined in

temp/components/base-types/component.ts:43

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](components.Component.md).[isResizeable](components.Component.md#isresizeable)

#### Defined in

temp/components/base-types/component.ts:33

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](components.Component.md).[isUpdateable](components.Component.md#isupdateable)

#### Defined in

temp/components/base-types/component.ts:38

___

### update

▸ **update**(`_delta`): `void`

[update](../interfaces/components.Updateable.md#update)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[update](../interfaces/components.Updateable.md#update)

#### Defined in

temp/components/core/SimpleDimensions/index.ts:211
