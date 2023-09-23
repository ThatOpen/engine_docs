---
id: "components.BaseRenderer"
title: "Class: BaseRenderer"
sidebar_label: "BaseRenderer"
custom_edit_url: null
---

[components](../modules/components.md).BaseRenderer

A base component for other components whose main mission is to render a
[scene](https://threejs.org/docs/#api/en/scenes/Scene).

**`No Inherit Doc`**

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

### enabled

• `Abstract` **enabled**: `boolean`

Whether this component is active or not. The behaviour can vary depending
on the type of component. E.g. a disabled dimension tool will stop creating
dimensions, while a disabled camera will stop moving. A disabled component
will not be updated automatically each frame.

#### Inherited from

[Component](components.Component.md).[enabled](components.Component.md#enabled)

#### Defined in

temp/components/base-types/component.ts:17

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

[Resizeable.onResize](../interfaces/components.Resizeable.md#onresize)

#### Implementation of

[Resizeable](../interfaces/components.Resizeable.md).[onResize](../interfaces/components.Resizeable.md#onresize)

#### Defined in

temp/components/base-types/base-renderer.ts:21

## Methods

### get

▸ `Abstract` **get**(`...args`): `WebGLRenderer`

The core of the component. For instance, if it's a camera component, it
could be a [THREE.Camera](https://threejs.org/docs/#api/en/cameras/Camera).

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`WebGLRenderer`

#### Inherited from

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/base-types/component.ts:23

___

### getSize

▸ `Abstract` **getSize**(): `Vector2`

[Resizeable.getSize](../interfaces/components.Resizeable.md#getsize).

#### Returns

`Vector2`

#### Implementation of

[Resizeable](../interfaces/components.Resizeable.md).[getSize](../interfaces/components.Resizeable.md#getsize)

#### Defined in

temp/components/base-types/base-renderer.ts:15

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](components.Component.md).[hasUI](components.Component.md#hasui)

#### Defined in

temp/components/base-types/component.ts:50

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](components.Component.md).[isDisposeable](components.Component.md#isdisposeable)

#### Defined in

temp/components/base-types/component.ts:28

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](components.Component.md).[isHideable](components.Component.md#ishideable)

#### Defined in

temp/components/base-types/component.ts:45

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](components.Component.md).[isResizeable](components.Component.md#isresizeable)

#### Defined in

temp/components/base-types/component.ts:33

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](components.Component.md).[isUpdateable](components.Component.md#isupdateable)

#### Defined in

temp/components/base-types/component.ts:38

___

### resize

▸ `Abstract` **resize**(): `void`

[Resizeable.resize](../interfaces/components.Resizeable.md#resize).

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
