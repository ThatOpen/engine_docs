---
id: "components.CubeMap"
title: "Class: CubeMap"
sidebar_label: "CubeMap"
custom_edit_url: null
---

[components](../modules/components.md).CubeMap

A simple navigation cube to zoom the scene to its basic views (top, bottom,
left, right, back and front).

## Hierarchy

- [`Component`](components.Component.md)<`HTMLDivElement`\>

  ↳ **`CubeMap`**

## Implements

- [`Updateable`](../interfaces/components.Updateable.md)
- [`Hideable`](../interfaces/components.Hideable.md)
- [`Disposable`](../interfaces/components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](components.Component.md#enabled)

#### Overrides

[Component](components.Component.md).[enabled](components.Component.md#enabled)

#### Defined in

temp/components/navigation/CubeMap/index.ts:37

___

### offset

• **offset**: `number` = `1`

The minimum zoom distance to the scene.

#### Defined in

temp/components/navigation/CubeMap/index.ts:46

___

### onAfterUpdate

• `Readonly` **onAfterUpdate**: [`Event`](components.Event.md)<[`CubeMap`](components.CubeMap.md)\>

[Updateable.onAfterUpdate](../interfaces/components.Updateable.md#onafterupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[onAfterUpdate](../interfaces/components.Updateable.md#onafterupdate)

#### Defined in

temp/components/navigation/CubeMap/index.ts:40

___

### onBeforeUpdate

• `Readonly` **onBeforeUpdate**: [`Event`](components.Event.md)<[`CubeMap`](components.CubeMap.md)\>

[Updateable.onBeforeUpdate](../interfaces/components.Updateable.md#onbeforeupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[onBeforeUpdate](../interfaces/components.Updateable.md#onbeforeupdate)

#### Defined in

temp/components/navigation/CubeMap/index.ts:43

## Methods

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
