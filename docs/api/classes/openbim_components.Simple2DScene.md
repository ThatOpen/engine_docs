---
id: "openbim_components.Simple2DScene"
title: "Class: Simple2DScene"
sidebar_label: "Simple2DScene"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).Simple2DScene

A simple floating 2D scene that you can use to easily draw 2D graphics
with all the power of Three.js.

## Hierarchy

- [`Component`](openbim_components.Component.md)<`THREE.Group`\>

  ↳ **`Simple2DScene`**

## Implements

- [`UI`](../interfaces/openbim_components.UI.md)
- [`Updateable`](../interfaces/openbim_components.Updateable.md)
- [`Disposable`](../interfaces/openbim_components.Disposable.md)
- [`Resizeable`](../interfaces/openbim_components.Resizeable.md)

## Properties

### camera

• `Readonly` **camera**: `OrthographicCamera`

The camera that renders the scene.

#### Defined in

[src/core/Simple2DScene/index.ts:52](https://github.com/ifcjs/components/blob/e46138a/src/core/Simple2DScene/index.ts#L52)

___

### controls

• **controls**: `OrbitControls`

The camera controls that move around in the scene.

#### Defined in

[src/core/Simple2DScene/index.ts:49](https://github.com/ifcjs/components/blob/e46138a/src/core/Simple2DScene/index.ts#L49)

___

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](openbim_components.Component.md#enabled)

#### Overrides

[Component](openbim_components.Component.md).[enabled](openbim_components.Component.md#enabled)

#### Defined in

[src/core/Simple2DScene/index.ts:41](https://github.com/ifcjs/components/blob/e46138a/src/core/Simple2DScene/index.ts#L41)

___

### onAfterUpdate

• `Readonly` **onAfterUpdate**: [`Event`](openbim_components.Event.md)<`unknown`\>

[Updateable.onAfterUpdate](../interfaces/openbim_components.Updateable.md#onafterupdate)

#### Implementation of

[Updateable](../interfaces/openbim_components.Updateable.md).[onAfterUpdate](../interfaces/openbim_components.Updateable.md#onafterupdate)

#### Defined in

[src/core/Simple2DScene/index.ts:32](https://github.com/ifcjs/components/blob/e46138a/src/core/Simple2DScene/index.ts#L32)

___

### onBeforeUpdate

• `Readonly` **onBeforeUpdate**: [`Event`](openbim_components.Event.md)<`unknown`\>

[Updateable.onBeforeUpdate](../interfaces/openbim_components.Updateable.md#onbeforeupdate)

#### Implementation of

[Updateable](../interfaces/openbim_components.Updateable.md).[onBeforeUpdate](../interfaces/openbim_components.Updateable.md#onbeforeupdate)

#### Defined in

[src/core/Simple2DScene/index.ts:35](https://github.com/ifcjs/components/blob/e46138a/src/core/Simple2DScene/index.ts#L35)

___

### onResize

• **onResize**: [`Event`](openbim_components.Event.md)<`Vector2`\>

[Resizeable.onResize](../interfaces/openbim_components.Resizeable.md#onresize)

#### Implementation of

[Resizeable](../interfaces/openbim_components.Resizeable.md).[onResize](../interfaces/openbim_components.Resizeable.md#onresize)

#### Defined in

[src/core/Simple2DScene/index.ts:38](https://github.com/ifcjs/components/blob/e46138a/src/core/Simple2DScene/index.ts#L38)

___

### uiElement

• **uiElement**: [`UIElement`](openbim_components.UIElement.md)<{ `container`: `SimpleUIComponent`<`HTMLElement`\>  }\>

[UI.uiElement](../interfaces/openbim_components.UI.md#uielement)

#### Implementation of

[UI](../interfaces/openbim_components.UI.md).[uiElement](../interfaces/openbim_components.UI.md#uielement)

#### Defined in

[src/core/Simple2DScene/index.ts:44](https://github.com/ifcjs/components/blob/e46138a/src/core/Simple2DScene/index.ts#L44)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[src/core/Simple2DScene/index.ts:147](https://github.com/ifcjs/components/blob/e46138a/src/core/Simple2DScene/index.ts#L147)

___

### get

▸ **get**(): `Group`

[Component.get](openbim_components.Component.md#get)

#### Returns

`Group`

the 2D scene.

#### Overrides

[Component](openbim_components.Component.md).[get](openbim_components.Component.md#get)

#### Defined in

[src/core/Simple2DScene/index.ts:142](https://github.com/ifcjs/components/blob/e46138a/src/core/Simple2DScene/index.ts#L142)

___

### getSize

▸ **getSize**(): `Vector2`

[Resizeable.getSize](../interfaces/openbim_components.Resizeable.md#getsize)

#### Returns

`Vector2`

#### Implementation of

[Resizeable](../interfaces/openbim_components.Resizeable.md).[getSize](../interfaces/openbim_components.Resizeable.md#getsize)

#### Defined in

[src/core/Simple2DScene/index.ts:168](https://github.com/ifcjs/components/blob/e46138a/src/core/Simple2DScene/index.ts#L168)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](openbim_components.Component.md).[hasUI](openbim_components.Component.md#hasui)

#### Defined in

[src/base-types/component.ts:62](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](openbim_components.Component.md).[isConfigurable](openbim_components.Component.md#isconfigurable)

#### Defined in

[src/base-types/component.ts:57](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](openbim_components.Component.md).[isDisposeable](openbim_components.Component.md#isdisposeable)

#### Defined in

[src/base-types/component.ts:35](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](openbim_components.Component.md).[isHideable](openbim_components.Component.md#ishideable)

#### Defined in

[src/base-types/component.ts:52](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](openbim_components.Component.md).[isResizeable](openbim_components.Component.md#isresizeable)

#### Defined in

[src/base-types/component.ts:40](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](openbim_components.Component.md).[isUpdateable](openbim_components.Component.md#isupdateable)

#### Defined in

[src/base-types/component.ts:45](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L45)

___

### resize

▸ **resize**(): `void`

[Resizeable.resize](../interfaces/openbim_components.Resizeable.md#resize)

#### Returns

`void`

#### Implementation of

[Resizeable](../interfaces/openbim_components.Resizeable.md).[resize](../interfaces/openbim_components.Resizeable.md#resize)

#### Defined in

[src/core/Simple2DScene/index.ts:179](https://github.com/ifcjs/components/blob/e46138a/src/core/Simple2DScene/index.ts#L179)

___

### update

▸ **update**(): `Promise`<`void`\>

[Updateable.update](../interfaces/openbim_components.Updateable.md#update)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Updateable](../interfaces/openbim_components.Updateable.md).[update](../interfaces/openbim_components.Updateable.md#update)

#### Defined in

[src/core/Simple2DScene/index.ts:160](https://github.com/ifcjs/components/blob/e46138a/src/core/Simple2DScene/index.ts#L160)
