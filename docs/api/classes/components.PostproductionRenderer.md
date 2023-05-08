---
id: "components.PostproductionRenderer"
title: "Class: PostproductionRenderer"
sidebar_label: "PostproductionRenderer"
custom_edit_url: null
---

[components](../modules/components.md).PostproductionRenderer

Renderer that uses efficient postproduction effects (e.g. Ambient Occlusion).

## Hierarchy

- [`SimpleRenderer`](components.SimpleRenderer.md)

  ↳ **`PostproductionRenderer`**

## Properties

### afterUpdate

• **afterUpdate**: [`Event`](components.Event.md)<[`SimpleRenderer`](components.SimpleRenderer.md)\>

[afterUpdate](../interfaces/components.Updateable.md#afterupdate)

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[afterUpdate](components.SimpleRenderer.md#afterupdate)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:32

___

### beforeUpdate

• **beforeUpdate**: [`Event`](components.Event.md)<[`SimpleRenderer`](components.SimpleRenderer.md)\>

[beforeUpdate](../interfaces/components.Updateable.md#beforeupdate)

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[beforeUpdate](components.SimpleRenderer.md#beforeupdate)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:29

___

### clippingPlanes

• **clippingPlanes**: `Plane`[] = `[]`

The list of [clipping planes](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes) used by this
instance of the renderer.

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[clippingPlanes](components.SimpleRenderer.md#clippingplanes)

#### Defined in

temp/components/base-types/base-renderer.ts:33

___

### enabled

• **enabled**: `boolean` = `true`

[enabled](components.Component.md#enabled)

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[enabled](components.SimpleRenderer.md#enabled)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:26

___

### name

• **name**: `string` = `"SimpleRenderer"`

[name](components.Component.md#name)

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[name](components.SimpleRenderer.md#name)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:23

___

### postproduction

• **postproduction**: `Postproduction`

Helper object to handle the postproduction effects applied.

#### Defined in

temp/components/navigation/PostproductionRenderer/index.ts:9

## Methods

### dispose

▸ **dispose**(): `void`

[dispose](../interfaces/components.Disposable.md#dispose).

#### Returns

`void`

#### Overrides

[SimpleRenderer](components.SimpleRenderer.md).[dispose](components.SimpleRenderer.md#dispose)

#### Defined in

temp/components/navigation/PostproductionRenderer/index.ts:18

___

### get

▸ **get**(): `WebGLRenderer`

[get](components.Component.md#get)

#### Returns

`WebGLRenderer`

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[get](components.SimpleRenderer.md#get)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:51

___

### getSize

▸ **getSize**(): `Vector2`

[getSize](../interfaces/components.Resizeable.md#getsize).

#### Returns

`Vector2`

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[getSize](components.SimpleRenderer.md#getsize)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:76

___

### resize

▸ **resize**(): `void`

[resize](../interfaces/components.Resizeable.md#resize).

#### Returns

`void`

#### Overrides

[SimpleRenderer](components.SimpleRenderer.md).[resize](components.SimpleRenderer.md#resize)

#### Defined in

temp/components/navigation/PostproductionRenderer/index.ts:24

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

[SimpleRenderer](components.SimpleRenderer.md).[togglePlane](components.SimpleRenderer.md#toggleplane)

#### Defined in

temp/components/base-types/base-renderer.ts:40

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

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[update](components.SimpleRenderer.md#update)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:56
