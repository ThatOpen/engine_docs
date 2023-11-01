---
id: "components.Simple2DScene"
title: "Class: Simple2DScene"
sidebar_label: "Simple2DScene"
custom_edit_url: null
---

[components](../modules/components.md).Simple2DScene

A simple floating 2D scene that you can use to easily draw 2D graphics
with all the power of Three.js.

## Hierarchy

- [`Component`](components.Component.md)<`THREE.Scene`\>

  ↳ **`Simple2DScene`**

## Implements

- [`UI`](../interfaces/components.UI.md)
- [`Updateable`](../interfaces/components.Updateable.md)
- [`Disposable`](../interfaces/components.Disposable.md)
- [`Resizeable`](../interfaces/components.Resizeable.md)

## Properties

### controls

• **controls**: `OrbitControls`

The camera controls that move around in the scene.

#### Defined in

temp/components/core/Simple2DScene/index.ts:47

___

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](components.Component.md#enabled)

#### Overrides

[Component](components.Component.md).[enabled](components.Component.md#enabled)

#### Defined in

temp/components/core/Simple2DScene/index.ts:37

___

### onAfterUpdate

• `Readonly` **onAfterUpdate**: [`Event`](components.Event.md)<`unknown`\>

[Updateable.onAfterUpdate](../interfaces/components.Updateable.md#onafterupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[onAfterUpdate](../interfaces/components.Updateable.md#onafterupdate)

#### Defined in

temp/components/core/Simple2DScene/index.ts:28

___

### onBeforeUpdate

• `Readonly` **onBeforeUpdate**: [`Event`](components.Event.md)<`unknown`\>

[Updateable.onBeforeUpdate](../interfaces/components.Updateable.md#onbeforeupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[onBeforeUpdate](../interfaces/components.Updateable.md#onbeforeupdate)

#### Defined in

temp/components/core/Simple2DScene/index.ts:31

___

### onResize

• **onResize**: [`Event`](components.Event.md)<`Vector2`\>

[Resizeable.onResize](../interfaces/components.Resizeable.md#onresize)

#### Implementation of

[Resizeable](../interfaces/components.Resizeable.md).[onResize](../interfaces/components.Resizeable.md#onresize)

#### Defined in

temp/components/core/Simple2DScene/index.ts:34

___

### uiElement

• **uiElement**: [`UIElement`](components.UIElement.md)<{ `canvas`: `Canvas` ; `main`: `Button` ; `mainWindow`: `FloatingWindow`  }\>

[UI.uiElement](../interfaces/components.UI.md#uielement)

#### Implementation of

[UI](../interfaces/components.UI.md).[uiElement](../interfaces/components.UI.md#uielement)

#### Defined in

temp/components/core/Simple2DScene/index.ts:40

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/components.Disposable.md).[dispose](../interfaces/components.Disposable.md#dispose)

#### Defined in

temp/components/core/Simple2DScene/index.ts:130

___

### get

▸ **get**(): `Scene`

[Component.get](components.Component.md#get)

#### Returns

`Scene`

the 2D scene.

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/core/Simple2DScene/index.ts:125

___

### getSize

▸ **getSize**(): `Vector2`

[Resizeable.getSize](../interfaces/components.Resizeable.md#getsize)

#### Returns

`Vector2`

#### Implementation of

[Resizeable](../interfaces/components.Resizeable.md).[getSize](../interfaces/components.Resizeable.md#getsize)

#### Defined in

temp/components/core/Simple2DScene/index.ts:144

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

### resize

▸ **resize**(): `void`

[Resizeable.resize](../interfaces/components.Resizeable.md#resize)

#### Returns

`void`

#### Implementation of

[Resizeable](../interfaces/components.Resizeable.md).[resize](../interfaces/components.Resizeable.md#resize)

#### Defined in

temp/components/core/Simple2DScene/index.ts:149

___

### update

▸ **update**(): `Promise`<`void`\>

[Updateable.update](../interfaces/components.Updateable.md#update)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[update](../interfaces/components.Updateable.md#update)

#### Defined in

temp/components/core/Simple2DScene/index.ts:136
