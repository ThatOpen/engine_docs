---
id: "SimpleRaycaster"
title: "Class: SimpleRaycaster"
sidebar_label: "SimpleRaycaster"
sidebar_position: 0
custom_edit_url: null
---

A simple [raycaster](https://threejs.org/docs/#api/en/core/Raycaster)
that allows to easily get items from the scene using the mouse and touch
events.

## Hierarchy

- [`Component`](Component.md)<`THREE.Raycaster`\>

  ↳ **`SimpleRaycaster`**

## Implements

- [`Raycaster`](../interfaces/Raycaster.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[enabled](Component.md#enabled)

#### Overrides

[Component](Component.md).[enabled](Component.md#enabled)

#### Defined in

core/SimpleRaycaster/index.ts:17

___

### name

• **name**: `string` = `"SimpleRaycaster"`

[name](Component.md#name)

#### Overrides

[Component](Component.md).[name](Component.md#name)

#### Defined in

core/SimpleRaycaster/index.ts:14

## Methods

### castRay

▸ **castRay**(`items?`): ``null`` \| `Intersection`<`Object3D`<`Event`\>\>

Throws a ray from the camera to the mouse or touch event point and returns
the first item found. This also takes into account the clipping planes
used by the renderer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | `Mesh`<`BufferGeometry`, `Material` \| `Material`[]\>[] | the [meshes](https://threejs.org/docs/#api/en/objects/Mesh) to query. If not provided, it will query all the meshes stored in [meshes](Components.md#meshes). |

#### Returns

``null`` \| `Intersection`<`Object3D`<`Event`\>\>

#### Implementation of

Raycaster.castRay

#### Defined in

core/SimpleRaycaster/index.ts:43

___

### get

▸ **get**(): `Raycaster`

[get](Component.md#get)

#### Returns

`Raycaster`

#### Overrides

[Component](Component.md).[get](Component.md#get)

#### Defined in

core/SimpleRaycaster/index.ts:30

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](Component.md).[isDisposeable](Component.md#isdisposeable)

#### Defined in

types/component.ts:27

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](Component.md).[isHideable](Component.md#ishideable)

#### Defined in

types/component.ts:42

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](Component.md).[isResizeable](Component.md#isresizeable)

#### Defined in

types/component.ts:32

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](Component.md).[isUpdateable](Component.md#isupdateable)

#### Defined in

types/component.ts:37
