---
id: "openbim_components.LengthMeasurement"
title: "Class: LengthMeasurement"
sidebar_label: "LengthMeasurement"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).LengthMeasurement

A basic dimension tool to measure distances between 2 points in 3D and
display a 3D symbol displaying the numeric value.

## Hierarchy

- [`Component`](openbim_components.Component.md)<`SimpleDimensionLine`[]\>

  ↳ **`LengthMeasurement`**

## Implements

- [`Createable`](../interfaces/openbim_components.Createable.md)
- [`Hideable`](../interfaces/openbim_components.Hideable.md)
- [`Disposable`](../interfaces/openbim_components.Disposable.md)
- [`Updateable`](../interfaces/openbim_components.Updateable.md)
- [`UI`](../interfaces/openbim_components.UI.md)

## Properties

### onAfterCancel

• `Readonly` **onAfterCancel**: [`Event`](openbim_components.Event.md)<`SimpleDimensionLine`\>

[Createable.onAfterCancel](../interfaces/openbim_components.Createable.md#onaftercancel)

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[onAfterCancel](../interfaces/openbim_components.Createable.md#onaftercancel)

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:54](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L54)

___

### onAfterCreate

• `Readonly` **onAfterCreate**: [`Event`](openbim_components.Event.md)<`SimpleDimensionLine`\>

[Createable.onAfterCreate](../interfaces/openbim_components.Createable.md#onaftercreate)

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[onAfterCreate](../interfaces/openbim_components.Createable.md#onaftercreate)

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:39](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L39)

___

### onAfterDelete

• `Readonly` **onAfterDelete**: [`Event`](openbim_components.Event.md)<[`LengthMeasurement`](openbim_components.LengthMeasurement.md)\>

[Createable.onAfterDelete](../interfaces/openbim_components.Createable.md#onafterdelete)

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[onAfterDelete](../interfaces/openbim_components.Createable.md#onafterdelete)

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:45](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L45)

___

### onAfterUpdate

• `Readonly` **onAfterUpdate**: [`Event`](openbim_components.Event.md)<[`LengthMeasurement`](openbim_components.LengthMeasurement.md)\>

[Updateable.onAfterUpdate](../interfaces/openbim_components.Updateable.md#onafterupdate)

#### Implementation of

[Updateable](../interfaces/openbim_components.Updateable.md).[onAfterUpdate](../interfaces/openbim_components.Updateable.md#onafterupdate)

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:36](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L36)

___

### onBeforeCancel

• `Readonly` **onBeforeCancel**: [`Event`](openbim_components.Event.md)<[`LengthMeasurement`](openbim_components.LengthMeasurement.md)\>

[Createable.onBeforeCancel](../interfaces/openbim_components.Createable.md#onbeforecancel)

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[onBeforeCancel](../interfaces/openbim_components.Createable.md#onbeforecancel)

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:51](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L51)

___

### onBeforeCreate

• `Readonly` **onBeforeCreate**: [`Event`](openbim_components.Event.md)<[`LengthMeasurement`](openbim_components.LengthMeasurement.md)\>

Createable.onBeforeCreate

#### Implementation of

Createable.onBeforeCreate

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:42](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L42)

___

### onBeforeDelete

• `Readonly` **onBeforeDelete**: [`Event`](openbim_components.Event.md)<`SimpleDimensionLine`\>

[Createable.onBeforeDelete](../interfaces/openbim_components.Createable.md#onbeforedelete)

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[onBeforeDelete](../interfaces/openbim_components.Createable.md#onbeforedelete)

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:48](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L48)

___

### onBeforeUpdate

• `Readonly` **onBeforeUpdate**: [`Event`](openbim_components.Event.md)<[`LengthMeasurement`](openbim_components.LengthMeasurement.md)\>

[Updateable.onBeforeUpdate](../interfaces/openbim_components.Updateable.md#onbeforeupdate)

#### Implementation of

[Updateable](../interfaces/openbim_components.Updateable.md).[onBeforeUpdate](../interfaces/openbim_components.Updateable.md#onbeforeupdate)

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:33](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L33)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](openbim_components.Event.md)<`string`\>

[Disposable.onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:30](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L30)

___

### previewElement

• `Optional` **previewElement**: `HTMLElement`

The [symbol](https://threejs.org/docs/#examples/en/renderers/CSS2DRenderer)
that is displayed where the dimension will be drawn.

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:63](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L63)

___

### snapDistance

• **snapDistance**: `number` = `0.25`

The minimum distance to force the dimension cursor to a vertex.

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:59](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L59)

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

[temp/components/src/measurement/LengthMeasurement/index.ts:122](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L122)

___

### enabled

• `get` **enabled**(): `boolean`

[Component.enabled](openbim_components.Component.md#enabled)

#### Returns

`boolean`

#### Overrides

Component.enabled

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:87](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L87)

• `set` **enabled**(`value`): `void`

[Component.enabled](openbim_components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Overrides

Component.enabled

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:92](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L92)

___

### visible

• `get` **visible**(): `boolean`

[Hideable.visible](../interfaces/openbim_components.Hideable.md#visible)

#### Returns

`boolean`

#### Implementation of

[Hideable](../interfaces/openbim_components.Hideable.md).[visible](../interfaces/openbim_components.Hideable.md#visible)

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:103](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L103)

• `set` **visible**(`value`): `void`

[Hideable.visible](../interfaces/openbim_components.Hideable.md#visible)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Implementation of

[Hideable](../interfaces/openbim_components.Hideable.md).[visible](../interfaces/openbim_components.Hideable.md#visible)

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:108](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L108)

## Methods

### cancelCreation

▸ **cancelCreation**(): `void`

Cancels the drawing of the current dimension.

#### Returns

`void`

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[cancelCreation](../interfaces/openbim_components.Createable.md#cancelcreation)

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:254](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L254)

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

[Createable](../interfaces/openbim_components.Createable.md).[create](../interfaces/openbim_components.Createable.md#create)

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:207](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L207)

___

### delete

▸ **delete**(): `Promise`<`void`\>

Deletes the dimension that the user is hovering over with the mouse or touch event.

#### Returns

`Promise`<`void`\>

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[delete](../interfaces/openbim_components.Createable.md#delete)

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:219](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L219)

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

Deletes all the dimensions that have been previously created.

#### Returns

`Promise`<`void`\>

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:245](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L245)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:165](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L165)

___

### get

▸ **get**(): `SimpleDimensionLine`[]

[Component.get](openbim_components.Component.md#get)

#### Returns

`SimpleDimensionLine`[]

#### Overrides

[Component](openbim_components.Component.md).[get](openbim_components.Component.md#get)

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:160](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L160)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](openbim_components.Component.md).[hasUI](openbim_components.Component.md#hasui)

#### Defined in

[temp/components/src/base-types/component.ts:62](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](openbim_components.Component.md).[isConfigurable](openbim_components.Component.md#isconfigurable)

#### Defined in

[temp/components/src/base-types/component.ts:57](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](openbim_components.Component.md).[isDisposeable](openbim_components.Component.md#isdisposeable)

#### Defined in

[temp/components/src/base-types/component.ts:35](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](openbim_components.Component.md).[isHideable](openbim_components.Component.md#ishideable)

#### Defined in

[temp/components/src/base-types/component.ts:52](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](openbim_components.Component.md).[isResizeable](openbim_components.Component.md#isresizeable)

#### Defined in

[temp/components/src/base-types/component.ts:40](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](openbim_components.Component.md).[isUpdateable](openbim_components.Component.md#isupdateable)

#### Defined in

[temp/components/src/base-types/component.ts:45](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L45)

___

### update

▸ **update**(`_delta`): `Promise`<`void`\>

[Updateable.update](../interfaces/openbim_components.Updateable.md#update)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Updateable](../interfaces/openbim_components.Updateable.md).[update](../interfaces/openbim_components.Updateable.md#update)

#### Defined in

[temp/components/src/measurement/LengthMeasurement/index.ts:191](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/measurement/LengthMeasurement/index.ts#L191)
