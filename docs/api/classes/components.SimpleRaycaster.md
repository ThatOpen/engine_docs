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

- `BaseRaycaster`

  ↳ **`SimpleRaycaster`**

## Implements

- [`Disposable`](../interfaces/components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](components.Component.md#enabled)

#### Overrides

BaseRaycaster.enabled

#### Defined in

temp/components/core/SimpleRaycaster/index.ts:13

___

### mouse

• `Readonly` **mouse**: [`Mouse`](components.Mouse.md)

The position of the mouse in the screen.

#### Defined in

temp/components/core/SimpleRaycaster/index.ts:16

## Methods

### castRay

▸ **castRay**(`items?`): ``null`` \| `Intersection`<`Object3D`<`Event`\>\>

Throws a ray from the camera to the mouse or touch event point and returns
the first item found. This also takes into account the clipping planes
used by the renderer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[] | the [meshes](https://threejs.org/docs/#api/en/objects/Mesh) to query. If not provided, it will query all the meshes stored in [Components.meshes](components.Components.md#meshes). |

#### Returns

``null`` \| `Intersection`<`Object3D`<`Event`\>\>

#### Overrides

BaseRaycaster.castRay

#### Defined in

temp/components/core/SimpleRaycaster/index.ts:46

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/components.Disposable.md).[dispose](../interfaces/components.Disposable.md#dispose)

#### Overrides

BaseRaycaster.dispose

#### Defined in

temp/components/core/SimpleRaycaster/index.ts:33

___

### get

▸ **get**(): `Raycaster`

[Component.get](components.Component.md#get)

#### Returns

`Raycaster`

#### Overrides

BaseRaycaster.get

#### Defined in

temp/components/core/SimpleRaycaster/index.ts:28

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/components.UI.md).

#### Returns

this is UI

#### Inherited from

BaseRaycaster.hasUI

#### Defined in

temp/components/base-types/component.ts:50

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

BaseRaycaster.isDisposeable

#### Defined in

temp/components/base-types/component.ts:28

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

BaseRaycaster.isHideable

#### Defined in

temp/components/base-types/component.ts:45

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

BaseRaycaster.isResizeable

#### Defined in

temp/components/base-types/component.ts:33

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

BaseRaycaster.isUpdateable

#### Defined in

temp/components/base-types/component.ts:38
