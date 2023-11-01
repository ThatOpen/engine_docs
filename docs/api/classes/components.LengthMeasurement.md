---
id: "components.LengthMeasurement"
title: "Class: LengthMeasurement"
sidebar_label: "LengthMeasurement"
custom_edit_url: null
---

[components](../modules/components.md).LengthMeasurement

A basic dimension tool to measure distances between 2 points in 3D and
display a 3D symbol displaying the numeric value.

## Hierarchy

- [`Component`](components.Component.md)<`SimpleDimensionLine`[]\>

  ↳ **`LengthMeasurement`**

## Implements

- [`Createable`](../interfaces/components.Createable.md)
- [`Hideable`](../interfaces/components.Hideable.md)
- [`Disposable`](../interfaces/components.Disposable.md)
- [`Updateable`](../interfaces/components.Updateable.md)
- [`UI`](../interfaces/components.UI.md)

## Properties

### onAfterCancel

• `Readonly` **onAfterCancel**: [`Event`](components.Event.md)<`SimpleDimensionLine`\>

[Createable.onAfterCancel](../interfaces/components.Createable.md#onaftercancel)

#### Implementation of

[Createable](../interfaces/components.Createable.md).[onAfterCancel](../interfaces/components.Createable.md#onaftercancel)

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:51

___

### onAfterCreate

• `Readonly` **onAfterCreate**: [`Event`](components.Event.md)<`SimpleDimensionLine`\>

[Createable.onAfterCreate](../interfaces/components.Createable.md#onaftercreate)

#### Implementation of

[Createable](../interfaces/components.Createable.md).[onAfterCreate](../interfaces/components.Createable.md#onaftercreate)

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:36

___

### onAfterDelete

• `Readonly` **onAfterDelete**: [`Event`](components.Event.md)<[`LengthMeasurement`](components.LengthMeasurement.md)\>

[Createable.onAfterDelete](../interfaces/components.Createable.md#onafterdelete)

#### Implementation of

[Createable](../interfaces/components.Createable.md).[onAfterDelete](../interfaces/components.Createable.md#onafterdelete)

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:42

___

### onAfterUpdate

• `Readonly` **onAfterUpdate**: [`Event`](components.Event.md)<[`LengthMeasurement`](components.LengthMeasurement.md)\>

[Updateable.onAfterUpdate](../interfaces/components.Updateable.md#onafterupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[onAfterUpdate](../interfaces/components.Updateable.md#onafterupdate)

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:33

___

### onBeforeCancel

• `Readonly` **onBeforeCancel**: [`Event`](components.Event.md)<[`LengthMeasurement`](components.LengthMeasurement.md)\>

[Createable.onBeforeCancel](../interfaces/components.Createable.md#onbeforecancel)

#### Implementation of

[Createable](../interfaces/components.Createable.md).[onBeforeCancel](../interfaces/components.Createable.md#onbeforecancel)

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:48

___

### onBeforeCreate

• `Readonly` **onBeforeCreate**: [`Event`](components.Event.md)<[`LengthMeasurement`](components.LengthMeasurement.md)\>

Createable.onBeforeCreate

#### Implementation of

Createable.onBeforeCreate

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:39

___

### onBeforeDelete

• `Readonly` **onBeforeDelete**: [`Event`](components.Event.md)<`SimpleDimensionLine`\>

[Createable.onBeforeDelete](../interfaces/components.Createable.md#onbeforedelete)

#### Implementation of

[Createable](../interfaces/components.Createable.md).[onBeforeDelete](../interfaces/components.Createable.md#onbeforedelete)

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:45

___

### onBeforeUpdate

• `Readonly` **onBeforeUpdate**: [`Event`](components.Event.md)<[`LengthMeasurement`](components.LengthMeasurement.md)\>

[Updateable.onBeforeUpdate](../interfaces/components.Updateable.md#onbeforeupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[onBeforeUpdate](../interfaces/components.Updateable.md#onbeforeupdate)

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:30

___

### previewElement

• `Optional` **previewElement**: `HTMLElement`

The [symbol](https://threejs.org/docs/#examples/en/renderers/CSS2DRenderer)
that is displayed where the dimension will be drawn.

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:60

___

### snapDistance

• **snapDistance**: `number` = `0.25`

The minimum distance to force the dimension cursor to a vertex.

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:56

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

temp/components/measurement/LengthMeasurement/index.ts:119

___

### enabled

• `get` **enabled**(): `boolean`

[Component.enabled](components.Component.md#enabled)

#### Returns

`boolean`

#### Overrides

Component.enabled

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:84

• `set` **enabled**(`value`): `void`

[Component.enabled](components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Overrides

Component.enabled

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:89

___

### visible

• `get` **visible**(): `boolean`

[Hideable.visible](../interfaces/components.Hideable.md#visible)

#### Returns

`boolean`

#### Implementation of

[Hideable](../interfaces/components.Hideable.md).[visible](../interfaces/components.Hideable.md#visible)

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:100

• `set` **visible**(`value`): `void`

[Hideable.visible](../interfaces/components.Hideable.md#visible)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Implementation of

[Hideable](../interfaces/components.Hideable.md).[visible](../interfaces/components.Hideable.md#visible)

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:105

## Methods

### cancelCreation

▸ **cancelCreation**(): `void`

Cancels the drawing of the current dimension.

#### Returns

`void`

#### Implementation of

[Createable](../interfaces/components.Createable.md).[cancelCreation](../interfaces/components.Createable.md#cancelcreation)

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:240

___

### create

▸ **create**(`data?`): `Promise`<`void`\>

Starts or finishes drawing a new dimension line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | `any` | forces the dimension to be drawn on a plane. Use this if you are drawing dimensions in floor plan navigation. |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Createable](../interfaces/components.Createable.md).[create](../interfaces/components.Createable.md#create)

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:202

___

### delete

▸ **delete**(): `Promise`<`void`\>

Deletes the dimension that the user is hovering over with the mouse or touch event.

#### Returns

`Promise`<`void`\>

#### Implementation of

[Createable](../interfaces/components.Createable.md).[delete](../interfaces/components.Createable.md#delete)

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:214

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

Deletes all the dimensions that have been previously created.

#### Returns

`Promise`<`void`\>

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:231

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/components.Disposable.md).[dispose](../interfaces/components.Disposable.md#dispose)

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:162

___

### get

▸ **get**(): `SimpleDimensionLine`[]

[Component.get](components.Component.md#get)

#### Returns

`SimpleDimensionLine`[]

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:157

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](components.Component.md).[hasUI](components.Component.md#hasui)

#### Defined in

temp/components/base-types/component.ts:50

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

temp/components/base-types/component.ts:45

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

▸ **update**(`_delta`): `Promise`<`void`\>

[Updateable.update](../interfaces/components.Updateable.md#update)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[update](../interfaces/components.Updateable.md#update)

#### Defined in

temp/components/measurement/LengthMeasurement/index.ts:186
