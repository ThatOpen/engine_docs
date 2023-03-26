---
id: "SimpleRenderer"
title: "Class: SimpleRenderer"
sidebar_label: "SimpleRenderer"
sidebar_position: 0
custom_edit_url: null
---

A basic renderer capable of rendering 3D and 2D objects
([Objec3Ds](https://threejs.org/docs/#api/en/core/Object3D) and
[CSS2DObjects](https://threejs.org/docs/#examples/en/renderers/CSS2DRenderer)
respectively).

## Hierarchy

- [`BaseRenderer`](BaseRenderer.md)

  ↳ **`SimpleRenderer`**

## Implements

- [`Disposable`](../interfaces/Disposable.md)
- [`Updateable`](../interfaces/Updateable.md)
- [`Resizeable`](../interfaces/Resizeable.md)

## Properties

### afterUpdate

• **afterUpdate**: [`Event`](Event.md)<[`SimpleRenderer`](SimpleRenderer.md)\>

[afterUpdate](../interfaces/Updateable.md#afterupdate)

#### Implementation of

[Updateable](../interfaces/Updateable.md).[afterUpdate](../interfaces/Updateable.md#afterupdate)

#### Defined in

core/SimpleRenderer/index.ts:32

___

### beforeUpdate

• **beforeUpdate**: [`Event`](Event.md)<[`SimpleRenderer`](SimpleRenderer.md)\>

[beforeUpdate](../interfaces/Updateable.md#beforeupdate)

#### Implementation of

[Updateable](../interfaces/Updateable.md).[beforeUpdate](../interfaces/Updateable.md#beforeupdate)

#### Defined in

core/SimpleRenderer/index.ts:29

___

### enabled

• **enabled**: `boolean` = `true`

[enabled](Component.md#enabled)

#### Overrides

[BaseRenderer](BaseRenderer.md).[enabled](BaseRenderer.md#enabled)

#### Defined in

core/SimpleRenderer/index.ts:26

___

### name

• **name**: `string` = `"SimpleRenderer"`

[name](Component.md#name)

#### Overrides

[BaseRenderer](BaseRenderer.md).[name](BaseRenderer.md#name)

#### Defined in

core/SimpleRenderer/index.ts:23

## Methods

### dispose

▸ **dispose**(): `void`

[dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

core/SimpleRenderer/index.ts:67

___

### get

▸ **get**(): `WebGLRenderer`

[get](Component.md#get)

#### Returns

`WebGLRenderer`

#### Overrides

[BaseRenderer](BaseRenderer.md).[get](BaseRenderer.md#get)

#### Defined in

core/SimpleRenderer/index.ts:51

___

### getSize

▸ **getSize**(): `Vector2`

[getSize](../interfaces/Resizeable.md#getsize).

#### Returns

`Vector2`

#### Implementation of

Resizeable.getSize

#### Overrides

[BaseRenderer](BaseRenderer.md).[getSize](BaseRenderer.md#getsize)

#### Defined in

core/SimpleRenderer/index.ts:76

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[BaseRenderer](BaseRenderer.md).[isDisposeable](BaseRenderer.md#isdisposeable)

#### Defined in

types/component.ts:27

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[BaseRenderer](BaseRenderer.md).[isHideable](BaseRenderer.md#ishideable)

#### Defined in

types/component.ts:42

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[BaseRenderer](BaseRenderer.md).[isResizeable](BaseRenderer.md#isresizeable)

#### Defined in

types/component.ts:32

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[BaseRenderer](BaseRenderer.md).[isUpdateable](BaseRenderer.md#isupdateable)

#### Defined in

types/component.ts:37

___

### resize

▸ **resize**(): `void`

[resize](../interfaces/Resizeable.md#resize).

#### Returns

`void`

#### Implementation of

Resizeable.resize

#### Overrides

[BaseRenderer](BaseRenderer.md).[resize](BaseRenderer.md#resize)

#### Defined in

core/SimpleRenderer/index.ts:84

___

### togglePlane

▸ **togglePlane**(`active`, `plane`, `isLocal?`): `void`

Adds or removes a
[clipping plane](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes)
to the renderer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |
| `plane` | `Plane` |
| `isLocal?` | `boolean` |

#### Returns

`void`

#### Inherited from

[BaseRenderer](BaseRenderer.md).[togglePlane](BaseRenderer.md#toggleplane)

#### Defined in

types/base-renderer.ts:34

___

### update

▸ **update**(`_delta`): `void`

[update](../interfaces/Updateable.md#update)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Implementation of

[Updateable](../interfaces/Updateable.md).[update](../interfaces/Updateable.md#update)

#### Defined in

core/SimpleRenderer/index.ts:56
