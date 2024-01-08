---
id: "openbim_components.PostproductionRenderer"
title: "Class: PostproductionRenderer"
sidebar_label: "PostproductionRenderer"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).PostproductionRenderer

Renderer that uses efficient postproduction effects (e.g. Ambient Occlusion).

## Hierarchy

- [`SimpleRenderer`](openbim_components.SimpleRenderer.md)

  ↳ **`PostproductionRenderer`**

## Properties

### clippingPlanes

• **clippingPlanes**: `Plane`[] = `[]`

The list of [clipping planes](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes) used by this
instance of the renderer.

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[clippingPlanes](openbim_components.SimpleRenderer.md#clippingplanes)

#### Defined in

[temp/components/src/base-types/base-renderer.ts:33](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/base-renderer.ts#L33)

___

### container

• **container**: ``null`` \| `HTMLElement`

The HTML container of the THREE.js canvas where the scene is rendered.

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[container](openbim_components.SimpleRenderer.md#container)

#### Defined in

[temp/components/src/core/SimpleRenderer/index.ts:26](https://github.com/IFCjs/components/blob/0c38d20/src/core/SimpleRenderer/index.ts#L26)

___

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](openbim_components.Component.md#enabled)

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[enabled](openbim_components.SimpleRenderer.md#enabled)

#### Defined in

[temp/components/src/core/SimpleRenderer/index.ts:23](https://github.com/IFCjs/components/blob/0c38d20/src/core/SimpleRenderer/index.ts#L23)

___

### onAfterUpdate

• `Readonly` **onAfterUpdate**: [`Event`](openbim_components.Event.md)<[`SimpleRenderer`](openbim_components.SimpleRenderer.md)\>

[Updateable.onAfterUpdate](../interfaces/openbim_components.Updateable.md#onafterupdate)

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[onAfterUpdate](openbim_components.SimpleRenderer.md#onafterupdate)

#### Defined in

[temp/components/src/core/SimpleRenderer/index.ts:35](https://github.com/IFCjs/components/blob/0c38d20/src/core/SimpleRenderer/index.ts#L35)

___

### onBeforeUpdate

• `Readonly` **onBeforeUpdate**: [`Event`](openbim_components.Event.md)<[`SimpleRenderer`](openbim_components.SimpleRenderer.md)\>

[Updateable.onBeforeUpdate](../interfaces/openbim_components.Updateable.md#onbeforeupdate)

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[onBeforeUpdate](openbim_components.SimpleRenderer.md#onbeforeupdate)

#### Defined in

[temp/components/src/core/SimpleRenderer/index.ts:32](https://github.com/IFCjs/components/blob/0c38d20/src/core/SimpleRenderer/index.ts#L32)

___

### onClippingPlanesUpdated

• `Readonly` **onClippingPlanesUpdated**: [`Event`](openbim_components.Event.md)<`unknown`\>

Event that fires when there has been a change to the list of clipping
planes used by the active renderer.

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[onClippingPlanesUpdated](openbim_components.SimpleRenderer.md#onclippingplanesupdated)

#### Defined in

[temp/components/src/base-types/base-renderer.ts:27](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/base-renderer.ts#L27)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](openbim_components.Event.md)<`undefined`\>

[Disposable.onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[onDisposed](openbim_components.SimpleRenderer.md#ondisposed)

#### Defined in

[temp/components/src/core/SimpleRenderer/index.ts:29](https://github.com/IFCjs/components/blob/0c38d20/src/core/SimpleRenderer/index.ts#L29)

___

### onResize

• `Readonly` **onResize**: [`Event`](openbim_components.Event.md)<`any`\>

[Resizeable.onResize](../interfaces/openbim_components.Resizeable.md#onresize)

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[onResize](openbim_components.SimpleRenderer.md#onresize)

#### Defined in

[temp/components/src/base-types/base-renderer.ts:21](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/base-renderer.ts#L21)

___

### postproduction

• **postproduction**: `Postproduction`

Helper object to handle the postproduction effects applied.

#### Defined in

[temp/components/src/navigation/PostproductionRenderer/index.ts:11](https://github.com/IFCjs/components/blob/0c38d20/src/navigation/PostproductionRenderer/index.ts#L11)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose).

#### Returns

`Promise`<`void`\>

#### Overrides

[SimpleRenderer](openbim_components.SimpleRenderer.md).[dispose](openbim_components.SimpleRenderer.md#dispose)

#### Defined in

[temp/components/src/navigation/PostproductionRenderer/index.ts:41](https://github.com/IFCjs/components/blob/0c38d20/src/navigation/PostproductionRenderer/index.ts#L41)

___

### get

▸ **get**(): `WebGLRenderer`

[Component.get](openbim_components.Component.md#get)

#### Returns

`WebGLRenderer`

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[get](openbim_components.SimpleRenderer.md#get)

#### Defined in

[temp/components/src/core/SimpleRenderer/index.ts:75](https://github.com/IFCjs/components/blob/0c38d20/src/core/SimpleRenderer/index.ts#L75)

___

### getSize

▸ **getSize**(): `Vector2`

[Resizeable.getSize](../interfaces/openbim_components.Resizeable.md#getsize).

#### Returns

`Vector2`

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[getSize](openbim_components.SimpleRenderer.md#getsize)

#### Defined in

[temp/components/src/core/SimpleRenderer/index.ts:106](https://github.com/IFCjs/components/blob/0c38d20/src/core/SimpleRenderer/index.ts#L106)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[hasUI](openbim_components.SimpleRenderer.md#hasui)

#### Defined in

[temp/components/src/base-types/component.ts:62](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[isConfigurable](openbim_components.SimpleRenderer.md#isconfigurable)

#### Defined in

[temp/components/src/base-types/component.ts:57](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[isDisposeable](openbim_components.SimpleRenderer.md#isdisposeable)

#### Defined in

[temp/components/src/base-types/component.ts:35](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[isHideable](openbim_components.SimpleRenderer.md#ishideable)

#### Defined in

[temp/components/src/base-types/component.ts:52](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[isResizeable](openbim_components.SimpleRenderer.md#isresizeable)

#### Defined in

[temp/components/src/base-types/component.ts:40](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[isUpdateable](openbim_components.SimpleRenderer.md#isupdateable)

#### Defined in

[temp/components/src/base-types/component.ts:45](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L45)

___

### resize

▸ **resize**(`size?`): `void`

[Resizeable.resize](../interfaces/openbim_components.Resizeable.md#resize).

#### Parameters

| Name | Type |
| :------ | :------ |
| `size?` | `Vector2` |

#### Returns

`void`

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[resize](openbim_components.SimpleRenderer.md#resize)

#### Defined in

[temp/components/src/core/SimpleRenderer/index.ts:114](https://github.com/IFCjs/components/blob/0c38d20/src/core/SimpleRenderer/index.ts#L114)

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

[SimpleRenderer](openbim_components.SimpleRenderer.md).[togglePlane](openbim_components.SimpleRenderer.md#toggleplane)

#### Defined in

[temp/components/src/base-types/base-renderer.ts:48](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/base-renderer.ts#L48)

___

### update

▸ **update**(): `Promise`<`void`\>

[Updateable.update](../interfaces/openbim_components.Updateable.md#update)

#### Returns

`Promise`<`void`\>

#### Overrides

[SimpleRenderer](openbim_components.SimpleRenderer.md).[update](openbim_components.SimpleRenderer.md#update)

#### Defined in

[temp/components/src/navigation/PostproductionRenderer/index.ts:25](https://github.com/IFCjs/components/blob/0c38d20/src/navigation/PostproductionRenderer/index.ts#L25)

___

### updateClippingPlanes

▸ **updateClippingPlanes**(): `Promise`<`void`\>

Forces the update of the clipping planes and all components that depend
on them that are subscribed to `onClippingPlanesUpdated`.

#### Returns

`Promise`<`void`\>

#### Inherited from

[SimpleRenderer](openbim_components.SimpleRenderer.md).[updateClippingPlanes](openbim_components.SimpleRenderer.md#updateclippingplanes)

#### Defined in

[temp/components/src/base-types/base-renderer.ts:39](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/base-renderer.ts#L39)
