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

  ↳↳ [`PostproductionRenderer`](components.PostproductionRenderer.md)

## Implements

- [`Disposable`](../interfaces/components.Disposable.md)
- [`Updateable`](../interfaces/components.Updateable.md)
- [`Resizeable`](../interfaces/components.Resizeable.md)

## Properties

### clippingPlanes

• **clippingPlanes**: `Plane`[] = `[]`

The list of [clipping planes](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes) used by this
instance of the renderer.

#### Inherited from

[BaseRenderer](components.BaseRenderer.md).[clippingPlanes](components.BaseRenderer.md#clippingplanes)

#### Defined in

temp/components/base-types/base-renderer.ts:33

___

### container

• **container**: `HTMLElement`

The HTML container of the THREE.js canvas where the scene is rendered.

#### Defined in

temp/components/core/SimpleRenderer/index.ts:29

___

### enabled

• **enabled**: `boolean` = `true`

[enabled](components.Component.md#enabled)

#### Overrides

BaseRenderer.enabled

#### Defined in

temp/components/core/SimpleRenderer/index.ts:26

___

### name

• **name**: `string` = `"SimpleRenderer"`

Component.name

#### Defined in

temp/components/core/SimpleRenderer/index.ts:23

___

### onAfterUpdate

• `Readonly` **onAfterUpdate**: [`Event`](components.Event.md)<[`SimpleRenderer`](components.SimpleRenderer.md)\>

[onAfterUpdate](../interfaces/components.Updateable.md#onafterupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[onAfterUpdate](../interfaces/components.Updateable.md#onafterupdate)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:35

___

### onBeforeUpdate

• `Readonly` **onBeforeUpdate**: [`Event`](components.Event.md)<[`SimpleRenderer`](components.SimpleRenderer.md)\>

[onBeforeUpdate](../interfaces/components.Updateable.md#onbeforeupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[onBeforeUpdate](../interfaces/components.Updateable.md#onbeforeupdate)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:32

___

### onClippingPlanesUpdated

• `Readonly` **onClippingPlanesUpdated**: [`Event`](components.Event.md)<`unknown`\>

Event that fires when there has been a change to the list of clipping
planes used by the active renderer.

#### Inherited from

[BaseRenderer](components.BaseRenderer.md).[onClippingPlanesUpdated](components.BaseRenderer.md#onclippingplanesupdated)

#### Defined in

temp/components/base-types/base-renderer.ts:27

___

### onResize

• `Readonly` **onResize**: [`Event`](components.Event.md)<`unknown`\>

[onResize](../interfaces/components.Resizeable.md#onresize)

#### Implementation of

[Resizeable](../interfaces/components.Resizeable.md).[onResize](../interfaces/components.Resizeable.md#onresize)

#### Inherited from

[BaseRenderer](components.BaseRenderer.md).[onResize](components.BaseRenderer.md#onresize)

#### Defined in

temp/components/base-types/base-renderer.ts:21

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/components.Disposable.md).[dispose](../interfaces/components.Disposable.md#dispose)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:86

___

### get

▸ **get**(): `WebGLRenderer`

[get](components.Component.md#get)

#### Returns

`WebGLRenderer`

#### Overrides

BaseRenderer.get

#### Defined in

temp/components/core/SimpleRenderer/index.ts:64

___

### getSize

▸ **getSize**(): `Vector2`

[getSize](../interfaces/components.Resizeable.md#getsize).

#### Returns

`Vector2`

#### Implementation of

[Resizeable](../interfaces/components.Resizeable.md).[getSize](../interfaces/components.Resizeable.md#getsize)

#### Overrides

[BaseRenderer](components.BaseRenderer.md).[getSize](components.BaseRenderer.md#getsize)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:98

___

### resize

▸ **resize**(): `void`

[resize](../interfaces/components.Resizeable.md#resize).

#### Returns

`void`

#### Implementation of

[Resizeable](../interfaces/components.Resizeable.md).[resize](../interfaces/components.Resizeable.md#resize)

#### Overrides

[BaseRenderer](components.BaseRenderer.md).[resize](components.BaseRenderer.md#resize)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:106

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

temp/components/base-types/base-renderer.ts:48

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

temp/components/core/SimpleRenderer/index.ts:69

___

### updateClippingPlanes

▸ **updateClippingPlanes**(): `Promise`<`void`\>

Forces the update of the clipping planes and all components that depend
on them that are subscribed to `onClippingPlanesUpdated`.

#### Returns

`Promise`<`void`\>

#### Inherited from

[BaseRenderer](components.BaseRenderer.md).[updateClippingPlanes](components.BaseRenderer.md#updateclippingplanes)

#### Defined in

temp/components/base-types/base-renderer.ts:39
