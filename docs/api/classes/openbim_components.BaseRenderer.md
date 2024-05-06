---
id: "openbim_components.BaseRenderer"
title: "Class: BaseRenderer"
sidebar_label: "BaseRenderer"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).BaseRenderer

A base component for other components whose main mission is to render a
[scene](https://threejs.org/docs/#api/en/scenes/Scene).

**`No Inherit Doc`**

## Hierarchy

- [`Component`](openbim_components.Component.md)<`THREE.WebGLRenderer`\>

  ↳ **`BaseRenderer`**

  ↳↳ [`SimpleRenderer`](openbim_components.SimpleRenderer.md)

## Implements

- [`Resizeable`](../interfaces/openbim_components.Resizeable.md)

## Properties

### clippingPlanes

• **clippingPlanes**: `Plane`[] = `[]`

The list of [clipping planes](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes) used by this
instance of the renderer.

#### Defined in

[src/base-types/base-renderer.ts:33](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L33)

___

### enabled

• `Abstract` **enabled**: `boolean`

Whether this component is active or not. The behaviour can vary depending
on the type of component. E.g. a disabled dimension tool will stop creating
dimensions, while a disabled camera will stop moving. A disabled component
will not be updated automatically each frame.

#### Inherited from

[Component](openbim_components.Component.md).[enabled](openbim_components.Component.md#enabled)

#### Defined in

[src/base-types/component.ts:24](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L24)

___

### onClippingPlanesUpdated

• `Readonly` **onClippingPlanesUpdated**: [`Event`](openbim_components.Event.md)<`unknown`\>

Event that fires when there has been a change to the list of clipping
planes used by the active renderer.

#### Defined in

[src/base-types/base-renderer.ts:27](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L27)

___

### onResize

• `Readonly` **onResize**: [`Event`](openbim_components.Event.md)<`any`\>

[Resizeable.onResize](../interfaces/openbim_components.Resizeable.md#onresize)

#### Implementation of

[Resizeable](../interfaces/openbim_components.Resizeable.md).[onResize](../interfaces/openbim_components.Resizeable.md#onresize)

#### Defined in

[src/base-types/base-renderer.ts:21](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L21)

## Methods

### get

▸ **get**(`...args`): `WebGLRenderer`

The core of the component. For instance, if it's a camera component, it
could be a [THREE.Camera](https://threejs.org/docs/#api/en/cameras/Camera).

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`WebGLRenderer`

#### Inherited from

[Component](openbim_components.Component.md).[get](openbim_components.Component.md#get)

#### Defined in

[src/base-types/component.ts:30](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L30)

___

### getSize

▸ **getSize**(): `Vector2`

[Resizeable.getSize](../interfaces/openbim_components.Resizeable.md#getsize).

#### Returns

`Vector2`

#### Implementation of

[Resizeable](../interfaces/openbim_components.Resizeable.md).[getSize](../interfaces/openbim_components.Resizeable.md#getsize)

#### Defined in

[src/base-types/base-renderer.ts:15](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L15)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](openbim_components.Component.md).[hasUI](openbim_components.Component.md#hasui)

#### Defined in

[src/base-types/component.ts:62](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](openbim_components.Component.md).[isConfigurable](openbim_components.Component.md#isconfigurable)

#### Defined in

[src/base-types/component.ts:57](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](openbim_components.Component.md).[isDisposeable](openbim_components.Component.md#isdisposeable)

#### Defined in

[src/base-types/component.ts:35](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](openbim_components.Component.md).[isHideable](openbim_components.Component.md#ishideable)

#### Defined in

[src/base-types/component.ts:52](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](openbim_components.Component.md).[isResizeable](openbim_components.Component.md#isresizeable)

#### Defined in

[src/base-types/component.ts:40](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](openbim_components.Component.md).[isUpdateable](openbim_components.Component.md#isupdateable)

#### Defined in

[src/base-types/component.ts:45](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L45)

___

### resize

▸ **resize**(): `void`

[Resizeable.resize](../interfaces/openbim_components.Resizeable.md#resize).

#### Returns

`void`

#### Implementation of

[Resizeable](../interfaces/openbim_components.Resizeable.md).[resize](../interfaces/openbim_components.Resizeable.md#resize)

#### Defined in

[src/base-types/base-renderer.ts:18](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L18)

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

[src/base-types/base-renderer.ts:48](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L48)

___

### updateClippingPlanes

▸ **updateClippingPlanes**(): `Promise`<`void`\>

Forces the update of the clipping planes and all components that depend
on them that are subscribed to `onClippingPlanesUpdated`.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/base-types/base-renderer.ts:39](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-renderer.ts#L39)
