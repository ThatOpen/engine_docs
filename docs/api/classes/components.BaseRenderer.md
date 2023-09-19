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

temp/components/base-types/base-renderer.ts:33

___

### onClippingPlanesUpdated

• `Readonly` **onClippingPlanesUpdated**: [`Event`](components.Event.md)<`unknown`\>

Event that fires when there has been a change to the list of clipping
planes used by the active renderer.

#### Defined in

temp/components/base-types/base-renderer.ts:27

___

### onResize

• `Readonly` **onResize**: [`Event`](components.Event.md)<`unknown`\>

[onResize](../interfaces/components.Resizeable.md#onresize)

#### Implementation of

[Resizeable](../interfaces/components.Resizeable.md).[onResize](../interfaces/components.Resizeable.md#onresize)

#### Defined in

temp/components/base-types/base-renderer.ts:21

## Methods

### getSize

▸ `Abstract` **getSize**(): `Vector2`

[getSize](../interfaces/components.Resizeable.md#getsize).

#### Returns

`Vector2`

#### Implementation of

[Resizeable](../interfaces/components.Resizeable.md).[getSize](../interfaces/components.Resizeable.md#getsize)

#### Defined in

temp/components/base-types/base-renderer.ts:15

___

### resize

▸ `Abstract` **resize**(): `void`

[resize](../interfaces/components.Resizeable.md#resize).

#### Returns

`void`

#### Implementation of

[Resizeable](../interfaces/components.Resizeable.md).[resize](../interfaces/components.Resizeable.md#resize)

#### Defined in

temp/components/base-types/base-renderer.ts:18

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

temp/components/base-types/base-renderer.ts:48

___

### updateClippingPlanes

▸ **updateClippingPlanes**(): `Promise`<`void`\>

Forces the update of the clipping planes and all components that depend
on them that are subscribed to `onClippingPlanesUpdated`.

#### Returns

`Promise`<`void`\>

#### Defined in

temp/components/base-types/base-renderer.ts:39
