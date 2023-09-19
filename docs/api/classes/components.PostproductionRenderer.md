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

### clippingPlanes

• **clippingPlanes**: `Plane`[] = `[]`

The list of [clipping planes](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes) used by this
instance of the renderer.

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[clippingPlanes](components.SimpleRenderer.md#clippingplanes)

#### Defined in

temp/components/base-types/base-renderer.ts:33

___

### container

• **container**: `HTMLElement`

The HTML container of the THREE.js canvas where the scene is rendered.

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[container](components.SimpleRenderer.md#container)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:29

___

### name

• **name**: `string` = `"SimpleRenderer"`

Component.name

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[name](components.SimpleRenderer.md#name)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:23

___

### onAfterUpdate

• `Readonly` **onAfterUpdate**: [`Event`](components.Event.md)<[`SimpleRenderer`](components.SimpleRenderer.md)\>

[onAfterUpdate](../interfaces/components.Updateable.md#onafterupdate)

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[onAfterUpdate](components.SimpleRenderer.md#onafterupdate)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:35

___

### onBeforeUpdate

• `Readonly` **onBeforeUpdate**: [`Event`](components.Event.md)<[`SimpleRenderer`](components.SimpleRenderer.md)\>

[onBeforeUpdate](../interfaces/components.Updateable.md#onbeforeupdate)

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[onBeforeUpdate](components.SimpleRenderer.md#onbeforeupdate)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:32

___

### onClippingPlanesUpdated

• `Readonly` **onClippingPlanesUpdated**: [`Event`](components.Event.md)<`unknown`\>

Event that fires when there has been a change to the list of clipping
planes used by the active renderer.

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[onClippingPlanesUpdated](components.SimpleRenderer.md#onclippingplanesupdated)

#### Defined in

temp/components/base-types/base-renderer.ts:27

___

### onResize

• `Readonly` **onResize**: [`Event`](components.Event.md)<`unknown`\>

[onResize](../interfaces/components.Resizeable.md#onresize)

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[onResize](components.SimpleRenderer.md#onresize)

#### Defined in

temp/components/base-types/base-renderer.ts:21

___

### postproduction

• **postproduction**: `Postproduction`

Helper object to handle the postproduction effects applied.

#### Defined in

temp/components/navigation/PostproductionRenderer/index.ts:10

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[dispose](../interfaces/components.Disposable.md#dispose).

#### Returns

`Promise`<`void`\>

#### Overrides

[SimpleRenderer](components.SimpleRenderer.md).[dispose](components.SimpleRenderer.md#dispose)

#### Defined in

temp/components/navigation/PostproductionRenderer/index.ts:36

___

### getSize

▸ **getSize**(): `Vector2`

[getSize](../interfaces/components.Resizeable.md#getsize).

#### Returns

`Vector2`

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[getSize](components.SimpleRenderer.md#getsize)

#### Defined in

temp/components/core/SimpleRenderer/index.ts:98

___

### resize

▸ **resize**(): `void`

[resize](../interfaces/components.Resizeable.md#resize).

#### Returns

`void`

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[resize](components.SimpleRenderer.md#resize)

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

[SimpleRenderer](components.SimpleRenderer.md).[togglePlane](components.SimpleRenderer.md#toggleplane)

#### Defined in

temp/components/base-types/base-renderer.ts:48

___

### update

▸ **update**(`_delta`): `Promise`<`void`\>

[update](../interfaces/components.Updateable.md#update)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`Promise`<`void`\>

#### Overrides

[SimpleRenderer](components.SimpleRenderer.md).[update](components.SimpleRenderer.md#update)

#### Defined in

temp/components/navigation/PostproductionRenderer/index.ts:20

___

### updateClippingPlanes

▸ **updateClippingPlanes**(): `Promise`<`void`\>

Forces the update of the clipping planes and all components that depend
on them that are subscribed to `onClippingPlanesUpdated`.

#### Returns

`Promise`<`void`\>

#### Inherited from

[SimpleRenderer](components.SimpleRenderer.md).[updateClippingPlanes](components.SimpleRenderer.md#updateclippingplanes)

#### Defined in

temp/components/base-types/base-renderer.ts:39
