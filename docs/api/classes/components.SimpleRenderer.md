---
id: "components.SimpleRenderer"
title: "Class: SimpleRenderer"
sidebar_label: "SimpleRenderer"
custom_edit_url: null
---

[components](../modules/components.md).SimpleRenderer

A basic renderer capable of rendering 3D and 2D objects
([Objec3Ds](https://threejs.org/docs/#api/en/core/Object3D) and
[CSS2DObjects](https://threejs.org/docs/#examples/en/renderers/CSS2DRenderer)
respectively).

## Hierarchy

- [`BaseRenderer`](components.BaseRenderer.md)

  ↳ **`SimpleRenderer`**

## Implements

- [`Disposable`](../interfaces/components.Disposable.md)
- [`Updateable`](../interfaces/components.Updateable.md)
- [`Resizeable`](../interfaces/components.Resizeable.md)

## Properties

### afterUpdate

• **afterUpdate**: [`Event`](components.Event.md)<[`SimpleRenderer`](components.SimpleRenderer.md)\>

[afterUpdate](../interfaces/components.Updateable.md#afterupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[afterUpdate](../interfaces/components.Updateable.md#afterupdate)

#### Defined in

components/core/SimpleRenderer/index.ts:32

___

### beforeUpdate

• **beforeUpdate**: [`Event`](components.Event.md)<[`SimpleRenderer`](components.SimpleRenderer.md)\>

[beforeUpdate](../interfaces/components.Updateable.md#beforeupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[beforeUpdate](../interfaces/components.Updateable.md#beforeupdate)

#### Defined in

components/core/SimpleRenderer/index.ts:29

___

### clippingPlanes

• **clippingPlanes**: `Plane`[] = `[]`

The list of [clipping planes](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes) used by this
instance of the renderer.

#### Inherited from

[BaseRenderer](components.BaseRenderer.md).[clippingPlanes](components.BaseRenderer.md#clippingplanes)

#### Defined in

components/base-types/base-renderer.ts:33

___

### enabled

• **enabled**: `boolean` = `true`

[enabled](components.Component.md#enabled)

#### Overrides

[BaseRenderer](components.BaseRenderer.md).[enabled](components.BaseRenderer.md#enabled)

#### Defined in

components/core/SimpleRenderer/index.ts:26

___

### name

• **name**: `string` = `"SimpleRenderer"`

[name](components.Component.md#name)

#### Overrides

[BaseRenderer](components.BaseRenderer.md).[name](components.BaseRenderer.md#name)

#### Defined in

components/core/SimpleRenderer/index.ts:23

## Methods

### dispose

▸ **dispose**(): `void`

[dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

components/core/SimpleRenderer/index.ts:67

___

### get

▸ **get**(): `WebGLRenderer`

[get](components.Component.md#get)

#### Returns

`WebGLRenderer`

#### Overrides

[BaseRenderer](components.BaseRenderer.md).[get](components.BaseRenderer.md#get)

#### Defined in

components/core/SimpleRenderer/index.ts:51

___

### getSize

▸ **getSize**(): `Vector2`

[getSize](../interfaces/components.Resizeable.md#getsize).

#### Returns

`Vector2`

#### Implementation of

Resizeable.getSize

#### Overrides

[BaseRenderer](components.BaseRenderer.md).[getSize](components.BaseRenderer.md#getsize)

#### Defined in

components/core/SimpleRenderer/index.ts:76

___

### resize

▸ **resize**(): `void`

[resize](../interfaces/components.Resizeable.md#resize).

#### Returns

`void`

#### Implementation of

Resizeable.resize

#### Overrides

[BaseRenderer](components.BaseRenderer.md).[resize](components.BaseRenderer.md#resize)

#### Defined in

components/core/SimpleRenderer/index.ts:84

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

[BaseRenderer](components.BaseRenderer.md).[togglePlane](components.BaseRenderer.md#toggleplane)

#### Defined in

components/base-types/base-renderer.ts:40

___

### update

▸ **update**(`_delta`): `void`

[update](../interfaces/components.Updateable.md#update)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[update](../interfaces/components.Updateable.md#update)

#### Defined in

components/core/SimpleRenderer/index.ts:56
