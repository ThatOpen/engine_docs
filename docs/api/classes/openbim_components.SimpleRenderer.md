---
id: "openbim_components.SimpleRenderer"
title: "Class: SimpleRenderer"
sidebar_label: "SimpleRenderer"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).SimpleRenderer

A basic renderer capable of rendering 3D and 2D objects
([Objec3Ds](https://threejs.org/docs/#api/en/core/Object3D) and
[CSS2DObjects](https://threejs.org/docs/#examples/en/renderers/CSS2DRenderer)
respectively).

## Hierarchy

- [`BaseRenderer`](openbim_components.BaseRenderer.md)

  ↳ **`SimpleRenderer`**

  ↳↳ [`PostproductionRenderer`](openbim_components.PostproductionRenderer.md)

## Implements

- [`Disposable`](../interfaces/openbim_components.Disposable.md)
- [`Updateable`](../interfaces/openbim_components.Updateable.md)
- [`Resizeable`](../interfaces/openbim_components.Resizeable.md)

## Properties

### clippingPlanes

• **clippingPlanes**: `Plane`[] = `[]`

The list of [clipping planes](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes) used by this
instance of the renderer.

#### Inherited from

[BaseRenderer](openbim_components.BaseRenderer.md).[clippingPlanes](openbim_components.BaseRenderer.md#clippingplanes)

#### Defined in

[src/base-types/base-renderer.ts:33](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L33)

---

### container

• **container**: `null` \| `HTMLElement`

The HTML container of the THREE.js canvas where the scene is rendered.

#### Defined in

[src/core/SimpleRenderer/index.ts:26](https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L26)

---

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](openbim_components.Component.md#enabled)

#### Overrides

[BaseRenderer](openbim_components.BaseRenderer.md).[enabled](openbim_components.BaseRenderer.md#enabled)

#### Defined in

[src/core/SimpleRenderer/index.ts:23](https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L23)

---

### onAfterUpdate

• `Readonly` **onAfterUpdate**: [`Event`](openbim_components.Event.md)<[`SimpleRenderer`](openbim_components.SimpleRenderer.md)\>

[Updateable.onAfterUpdate](../interfaces/openbim_components.Updateable.md#onafterupdate)

#### Implementation of

[Updateable](../interfaces/openbim_components.Updateable.md).[onAfterUpdate](../interfaces/openbim_components.Updateable.md#onafterupdate)

#### Defined in

[src/core/SimpleRenderer/index.ts:35](https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L35)

---

### onBeforeUpdate

• `Readonly` **onBeforeUpdate**: [`Event`](openbim_components.Event.md)<[`SimpleRenderer`](openbim_components.SimpleRenderer.md)\>

[Updateable.onBeforeUpdate](../interfaces/openbim_components.Updateable.md#onbeforeupdate)

#### Implementation of

[Updateable](../interfaces/openbim_components.Updateable.md).[onBeforeUpdate](../interfaces/openbim_components.Updateable.md#onbeforeupdate)

#### Defined in

[src/core/SimpleRenderer/index.ts:32](https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L32)

---

### onClippingPlanesUpdated

• `Readonly` **onClippingPlanesUpdated**: [`Event`](openbim_components.Event.md)<`unknown`\>

Event that fires when there has been a change to the list of clipping
planes used by the active renderer.

#### Inherited from

[BaseRenderer](openbim_components.BaseRenderer.md).[onClippingPlanesUpdated](openbim_components.BaseRenderer.md#onclippingplanesupdated)

#### Defined in

[src/base-types/base-renderer.ts:27](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L27)

---

### onDisposed

• `Readonly` **onDisposed**: [`Event`](openbim_components.Event.md)<`undefined`\>

[Disposable.onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Defined in

[src/core/SimpleRenderer/index.ts:29](https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L29)

---

### onResize

• `Readonly` **onResize**: [`Event`](openbim_components.Event.md)<`any`\>

[Resizeable.onResize](../interfaces/openbim_components.Resizeable.md#onresize)

#### Implementation of

[Resizeable](../interfaces/openbim_components.Resizeable.md).[onResize](../interfaces/openbim_components.Resizeable.md#onresize)

#### Inherited from

[BaseRenderer](openbim_components.BaseRenderer.md).[onResize](openbim_components.BaseRenderer.md#onresize)

#### Defined in

[src/base-types/base-renderer.ts:21](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L21)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[src/core/SimpleRenderer/index.ts:92](https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L92)

---

### get

▸ **get**(): `WebGLRenderer`

[Component.get](openbim_components.Component.md#get)

#### Returns

`WebGLRenderer`

#### Overrides

[BaseRenderer](openbim_components.BaseRenderer.md).[get](openbim_components.BaseRenderer.md#get)

#### Defined in

[src/core/SimpleRenderer/index.ts:75](https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L75)

---

### getSize

▸ **getSize**(): `Vector2`

[Resizeable.getSize](../interfaces/openbim_components.Resizeable.md#getsize).

#### Returns

`Vector2`

#### Implementation of

[Resizeable](../interfaces/openbim_components.Resizeable.md).[getSize](../interfaces/openbim_components.Resizeable.md#getsize)

#### Overrides

[BaseRenderer](openbim_components.BaseRenderer.md).[getSize](openbim_components.BaseRenderer.md#getsize)

#### Defined in

[src/core/SimpleRenderer/index.ts:106](https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L106)

---

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[BaseRenderer](openbim_components.BaseRenderer.md).[hasUI](openbim_components.BaseRenderer.md#hasui)

#### Defined in

[src/base-types/component.ts:62](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L62)

---

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[BaseRenderer](openbim_components.BaseRenderer.md).[isConfigurable](openbim_components.BaseRenderer.md#isconfigurable)

#### Defined in

[src/base-types/component.ts:57](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L57)

---

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[BaseRenderer](openbim_components.BaseRenderer.md).[isDisposeable](openbim_components.BaseRenderer.md#isdisposeable)

#### Defined in

[src/base-types/component.ts:35](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L35)

---

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[BaseRenderer](openbim_components.BaseRenderer.md).[isHideable](openbim_components.BaseRenderer.md#ishideable)

#### Defined in

[src/base-types/component.ts:52](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L52)

---

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[BaseRenderer](openbim_components.BaseRenderer.md).[isResizeable](openbim_components.BaseRenderer.md#isresizeable)

#### Defined in

[src/base-types/component.ts:40](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L40)

---

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[BaseRenderer](openbim_components.BaseRenderer.md).[isUpdateable](openbim_components.BaseRenderer.md#isupdateable)

#### Defined in

[src/base-types/component.ts:45](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L45)

---

### resize

▸ **resize**(`size?`): `void`

[Resizeable.resize](../interfaces/openbim_components.Resizeable.md#resize).

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `size?` | `Vector2` |

#### Returns

`void`

#### Implementation of

[Resizeable](../interfaces/openbim_components.Resizeable.md).[resize](../interfaces/openbim_components.Resizeable.md#resize)

#### Overrides

[BaseRenderer](openbim_components.BaseRenderer.md).[resize](openbim_components.BaseRenderer.md#resize)

#### Defined in

[src/core/SimpleRenderer/index.ts:114](https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L114)

---

### togglePlane

▸ **togglePlane**(`active`, `plane`, `isLocal?`): `void`

Adds or removes a
[clipping plane](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes)
to the renderer.

#### Parameters

| Name       | Type      |
| :--------- | :-------- |
| `active`   | `boolean` |
| `plane`    | `Plane`   |
| `isLocal?` | `boolean` |

#### Returns

`void`

#### Inherited from

[BaseRenderer](openbim_components.BaseRenderer.md).[togglePlane](openbim_components.BaseRenderer.md#toggleplane)

#### Defined in

[src/base-types/base-renderer.ts:48](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L48)

---

### update

▸ **update**(): `Promise`<`void`\>

[Updateable.update](../interfaces/openbim_components.Updateable.md#update)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Updateable](../interfaces/openbim_components.Updateable.md).[update](../interfaces/openbim_components.Updateable.md#update)

#### Defined in

[src/core/SimpleRenderer/index.ts:80](https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/SimpleRenderer/index.ts#L80)

---

### updateClippingPlanes

▸ **updateClippingPlanes**(): `Promise`<`void`\>

Forces the update of the clipping planes and all components that depend
on them that are subscribed to `onClippingPlanesUpdated`.

#### Returns

`Promise`<`void`\>

#### Inherited from

[BaseRenderer](openbim_components.BaseRenderer.md).[updateClippingPlanes](openbim_components.BaseRenderer.md#updateclippingplanes)

#### Defined in

[src/base-types/base-renderer.ts:39](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L39)
