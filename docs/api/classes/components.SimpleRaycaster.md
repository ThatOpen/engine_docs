---
id: "components.SimpleRaycaster"
title: "Class: SimpleRaycaster"
sidebar_label: "SimpleRaycaster"
custom_edit_url: null
---

[components](../modules/components.md).SimpleRaycaster

A simple [raycaster](https://threejs.org/docs/#api/en/core/Raycaster)
that allows to easily get items from the scene using the mouse and touch
events.

## Hierarchy

- [`Component`](components.Component.md)<`THREE.Raycaster`\>

  ↳ **`SimpleRaycaster`**

## Implements

- [`Raycaster`](../interfaces/components.Raycaster.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[enabled](components.Component.md#enabled)

#### Overrides

[Component](components.Component.md).[enabled](components.Component.md#enabled)

#### Defined in

temp/components/core/SimpleRaycaster/index.ts:18

___

### mouse

• `Readonly` **mouse**: [`Mouse`](components.Mouse.md)

The position of the mouse in the screen.

#### Defined in

temp/components/core/SimpleRaycaster/index.ts:21

___

### name

• **name**: `string` = `"SimpleRaycaster"`

[name](components.Component.md#name)

#### Overrides

[Component](components.Component.md).[name](components.Component.md#name)

#### Defined in

temp/components/core/SimpleRaycaster/index.ts:15

## Methods

### castRay

▸ **castRay**(`items?`): ``null`` \| `Intersection`<`Object3D`<`Event`\>\>

Throws a ray from the camera to the mouse or touch event point and returns
the first item found. This also takes into account the clipping planes
used by the renderer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[] | the [meshes](https://threejs.org/docs/#api/en/objects/Mesh) to query. If not provided, it will query all the meshes stored in [meshes](components.Components.md#meshes). |

#### Returns

``null`` \| `Intersection`<`Object3D`<`Event`\>\>

#### Implementation of

Raycaster.castRay

#### Defined in

temp/components/core/SimpleRaycaster/index.ts:46

___

### get

▸ **get**(): `Raycaster`

[get](components.Component.md#get)

#### Returns

`Raycaster`

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/core/SimpleRaycaster/index.ts:33

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
