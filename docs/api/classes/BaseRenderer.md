---
id: "BaseRenderer"
title: "Class: BaseRenderer"
sidebar_label: "BaseRenderer"
sidebar_position: 0
custom_edit_url: null
---

A base component for components whose main mission is to render a scene.

## Hierarchy

- [`Component`](Component.md)<`THREE.WebGLRenderer`\>

  ↳ **`BaseRenderer`**

  ↳↳ [`SimpleRenderer`](SimpleRenderer.md)

## Implements

- [`Resizeable`](../interfaces/Resizeable.md)

## Properties

### enabled

• `Abstract` **enabled**: `boolean`

[enabled](Component.md#enabled)

#### Overrides

[Component](Component.md).[enabled](Component.md#enabled)

#### Defined in

types/base-renderer.ts:16

___

### name

• `Abstract` **name**: `string`

[name](Component.md#name)

#### Overrides

[Component](Component.md).[name](Component.md#name)

#### Defined in

types/base-renderer.ts:13

## Methods

### get

▸ `Abstract` **get**(): `WebGLRenderer`

[get](Component.md#get)

#### Returns

`WebGLRenderer`

#### Overrides

[Component](Component.md).[get](Component.md#get)

#### Defined in

types/base-renderer.ts:19

___

### getSize

▸ `Abstract` **getSize**(): `Vector2`

[getSize](../interfaces/Resizeable.md#getsize).

#### Returns

`Vector2`

#### Implementation of

Resizeable.getSize

#### Defined in

types/base-renderer.ts:22

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

___

### resize

▸ `Abstract` **resize**(): `void`

[resize](../interfaces/Resizeable.md#resize).

#### Returns

`void`

#### Implementation of

Resizeable.resize

#### Defined in

types/base-renderer.ts:25

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

#### Defined in

types/base-renderer.ts:34
