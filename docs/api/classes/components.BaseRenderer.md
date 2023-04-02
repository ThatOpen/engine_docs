---
id: "components.BaseRenderer"
title: "Class: BaseRenderer"
sidebar_label: "BaseRenderer"
custom_edit_url: null
---

[components](../modules/components.md).BaseRenderer

A base component for other components whose main mission is to render a
[scene](https://threejs.org/docs/#api/en/scenes/Scene).

## Hierarchy

- [`Component`](components.Component.md)<`THREE.WebGLRenderer`\>

  ↳ **`BaseRenderer`**

  ↳↳ [`SimpleRenderer`](components.SimpleRenderer.md)

## Implements

- [`Resizeable`](../interfaces/components.Resizeable.md)

## Properties

### clippingPlanes

• **clippingPlanes**: `Plane`[] = `[]`

The list of [clipping planes](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes) used by this
instance of the renderer.

#### Defined in

components/types/base-renderer.ts:33

___

### enabled

• `Abstract` **enabled**: `boolean`

[enabled](components.Component.md#enabled)

#### Overrides

[Component](components.Component.md).[enabled](components.Component.md#enabled)

#### Defined in

components/types/base-renderer.ts:18

___

### name

• `Abstract` **name**: `string`

[name](components.Component.md#name)

#### Overrides

[Component](components.Component.md).[name](components.Component.md#name)

#### Defined in

components/types/base-renderer.ts:15

## Methods

### get

▸ `Abstract` **get**(): `WebGLRenderer`

[get](components.Component.md#get)

#### Returns

`WebGLRenderer`

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

components/types/base-renderer.ts:21

___

### getSize

▸ `Abstract` **getSize**(): `Vector2`

[getSize](../interfaces/components.Resizeable.md#getsize).

#### Returns

`Vector2`

#### Implementation of

Resizeable.getSize

#### Defined in

components/types/base-renderer.ts:24

___

### resize

▸ `Abstract` **resize**(): `void`

[resize](../interfaces/components.Resizeable.md#resize).

#### Returns

`void`

#### Implementation of

Resizeable.resize

#### Defined in

components/types/base-renderer.ts:27

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

components/types/base-renderer.ts:40
