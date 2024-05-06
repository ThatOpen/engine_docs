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

[src/measurement/LengthMeasurement/index.ts:52](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L52)

---

### onAfterCreate

• `Readonly` **onAfterCreate**: [`Event`](openbim_components.Event.md)<`SimpleDimensionLine`\>

[Createable.onAfterCreate](../interfaces/openbim_components.Createable.md#onaftercreate)

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[onAfterCreate](../interfaces/openbim_components.Createable.md#onaftercreate)

#### Defined in

[src/measurement/LengthMeasurement/index.ts:37](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L37)

---

### onAfterDelete

• `Readonly` **onAfterDelete**: [`Event`](openbim_components.Event.md)<[`LengthMeasurement`](openbim_components.LengthMeasurement.md)\>

[Createable.onAfterDelete](../interfaces/openbim_components.Createable.md#onafterdelete)

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[onAfterDelete](../interfaces/openbim_components.Createable.md#onafterdelete)

#### Defined in

[src/measurement/LengthMeasurement/index.ts:43](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L43)

---

### onAfterUpdate

• `Readonly` **onAfterUpdate**: [`Event`](openbim_components.Event.md)<[`LengthMeasurement`](openbim_components.LengthMeasurement.md)\>

[Updateable.onAfterUpdate](../interfaces/openbim_components.Updateable.md#onafterupdate)

#### Implementation of

[Updateable](../interfaces/openbim_components.Updateable.md).[onAfterUpdate](../interfaces/openbim_components.Updateable.md#onafterupdate)

#### Defined in

[src/measurement/LengthMeasurement/index.ts:34](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L34)

---

### onBeforeCancel

• `Readonly` **onBeforeCancel**: [`Event`](openbim_components.Event.md)<[`LengthMeasurement`](openbim_components.LengthMeasurement.md)\>

[Createable.onBeforeCancel](../interfaces/openbim_components.Createable.md#onbeforecancel)

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[onBeforeCancel](../interfaces/openbim_components.Createable.md#onbeforecancel)

#### Defined in

[src/measurement/LengthMeasurement/index.ts:49](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L49)

---

### onBeforeCreate

• `Readonly` **onBeforeCreate**: [`Event`](openbim_components.Event.md)<[`LengthMeasurement`](openbim_components.LengthMeasurement.md)\>

Createable.onBeforeCreate

#### Implementation of

Createable.onBeforeCreate

#### Defined in

[src/measurement/LengthMeasurement/index.ts:40](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L40)

---

### onBeforeDelete

• `Readonly` **onBeforeDelete**: [`Event`](openbim_components.Event.md)<`SimpleDimensionLine`\>

[Createable.onBeforeDelete](../interfaces/openbim_components.Createable.md#onbeforedelete)

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[onBeforeDelete](../interfaces/openbim_components.Createable.md#onbeforedelete)

#### Defined in

[src/measurement/LengthMeasurement/index.ts:46](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L46)

---

### onBeforeUpdate

• `Readonly` **onBeforeUpdate**: [`Event`](openbim_components.Event.md)<[`LengthMeasurement`](openbim_components.LengthMeasurement.md)\>

[Updateable.onBeforeUpdate](../interfaces/openbim_components.Updateable.md#onbeforeupdate)

#### Implementation of

[Updateable](../interfaces/openbim_components.Updateable.md).[onBeforeUpdate](../interfaces/openbim_components.Updateable.md#onbeforeupdate)

#### Defined in

[src/measurement/LengthMeasurement/index.ts:31](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L31)

---

### onDisposed

• `Readonly` **onDisposed**: [`Event`](openbim_components.Event.md)<`string`\>

[Disposable.onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Defined in

[src/measurement/LengthMeasurement/index.ts:28](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L28)

---

### previewElement

• `Optional` **previewElement**: `HTMLElement`

The [symbol](https://threejs.org/docs/#examples/en/renderers/CSS2DRenderer)
that is displayed where the dimension will be drawn.

#### Defined in

[src/measurement/LengthMeasurement/index.ts:61](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L61)

---

### snapDistance

• **snapDistance**: `number` = `0.25`

The minimum distance to force the dimension cursor to a vertex.

#### Defined in

[src/measurement/LengthMeasurement/index.ts:57](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L57)

## Accessors

### color

• `set` **color**(`color`): `void`

The [Color](https://threejs.org/docs/#api/en/math/Color)
of the geometry of the dimensions.

#### Parameters

| Name    | Type    |
| :------ | :------ |
| `color` | `Color` |

#### Returns

`void`

#### Defined in

[src/measurement/LengthMeasurement/index.ts:117](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L117)

---

### enabled

• `get` **enabled**(): `boolean`

[Component.enabled](openbim_components.Component.md#enabled)

#### Returns

`boolean`

#### Overrides

Component.enabled

#### Defined in

[src/measurement/LengthMeasurement/index.ts:85](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L85)

• `set` **enabled**(`value`): `void`

[Component.enabled](openbim_components.Component.md#enabled)

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Overrides

Component.enabled

#### Defined in

[src/measurement/LengthMeasurement/index.ts:90](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L90)

---

### visible

• `get` **visible**(): `boolean`

[Hideable.visible](../interfaces/openbim_components.Hideable.md#visible)

#### Returns

`boolean`

#### Implementation of

[Hideable](../interfaces/openbim_components.Hideable.md).[visible](../interfaces/openbim_components.Hideable.md#visible)

#### Defined in

[src/measurement/LengthMeasurement/index.ts:101](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L101)

• `set` **visible**(`value`): `void`

[Hideable.visible](../interfaces/openbim_components.Hideable.md#visible)

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Implementation of

[Hideable](../interfaces/openbim_components.Hideable.md).[visible](../interfaces/openbim_components.Hideable.md#visible)

#### Defined in

[src/measurement/LengthMeasurement/index.ts:106](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L106)

## Methods

### cancelCreation

▸ **cancelCreation**(): `void`

Cancels the drawing of the current dimension.

#### Returns

`void`

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[cancelCreation](../interfaces/openbim_components.Createable.md#cancelcreation)

#### Defined in

[src/measurement/LengthMeasurement/index.ts:258](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L258)

---

### create

▸ **create**(`data?`): `Promise`<`void`\>

Starts or finishes drawing a new dimension line.

#### Parameters

| Name    | Type  | Description                                                                                                   |
| :------ | :---- | :------------------------------------------------------------------------------------------------------------ |
| `data?` | `any` | forces the dimension to be drawn on a plane. Use this if you are drawing dimensions in floor plan navigation. |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[create](../interfaces/openbim_components.Createable.md#create)

#### Defined in

[src/measurement/LengthMeasurement/index.ts:203](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L203)

---

### delete

▸ **delete**(): `Promise`<`void`\>

Deletes the dimension that the user is hovering over with the mouse or touch event.

#### Returns

`Promise`<`void`\>

#### Implementation of

[Createable](../interfaces/openbim_components.Createable.md).[delete](../interfaces/openbim_components.Createable.md#delete)

#### Defined in

[src/measurement/LengthMeasurement/index.ts:223](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L223)

---

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

Deletes all the dimensions that have been previously created.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/measurement/LengthMeasurement/index.ts:249](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L249)

---

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[src/measurement/LengthMeasurement/index.ts:160](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L160)

---

### get

▸ **get**(): `SimpleDimensionLine`[]

[Component.get](openbim_components.Component.md#get)

#### Returns

`SimpleDimensionLine`[]

#### Overrides

[Component](openbim_components.Component.md).[get](openbim_components.Component.md#get)

#### Defined in

[src/measurement/LengthMeasurement/index.ts:155](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L155)

---

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](openbim_components.Component.md).[hasUI](openbim_components.Component.md#hasui)

#### Defined in

[src/base-types/component.ts:62](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L62)

---

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](openbim_components.Component.md).[isConfigurable](openbim_components.Component.md#isconfigurable)

#### Defined in

[src/base-types/component.ts:57](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L57)

---

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](openbim_components.Component.md).[isDisposeable](openbim_components.Component.md#isdisposeable)

#### Defined in

[src/base-types/component.ts:35](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L35)

---

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](openbim_components.Component.md).[isHideable](openbim_components.Component.md#ishideable)

#### Defined in

[src/base-types/component.ts:52](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L52)

---

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](openbim_components.Component.md).[isResizeable](openbim_components.Component.md#isresizeable)

#### Defined in

[src/base-types/component.ts:40](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L40)

---

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](openbim_components.Component.md).[isUpdateable](openbim_components.Component.md#isupdateable)

#### Defined in

[src/base-types/component.ts:45](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L45)

---

### update

▸ **update**(`_delta`): `Promise`<`void`\>

[Updateable.update](../interfaces/openbim_components.Updateable.md#update)

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `_delta` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Updateable](../interfaces/openbim_components.Updateable.md).[update](../interfaces/openbim_components.Updateable.md#update)

#### Defined in

[src/measurement/LengthMeasurement/index.ts:186](https://github.com/ThatOpen/engine_components/blob/444e81a/src/measurement/LengthMeasurement/index.ts#L186)
