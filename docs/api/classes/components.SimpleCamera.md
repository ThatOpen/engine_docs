---
id: "components.SimpleCamera"
title: "Class: SimpleCamera"
sidebar_label: "SimpleCamera"
custom_edit_url: null
---

[components](../modules/components.md).SimpleCamera

A basic camera that uses
[yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to
easily control the camera in 2D and 3D. Check out it's API to find out
what features it offers.

## Hierarchy

- [`Component`](components.Component.md)<`THREE.PerspectiveCamera` \| `THREE.OrthographicCamera`\>

  ↳ **`SimpleCamera`**

  ↳↳ [`OrthoPerspectiveCamera`](components.OrthoPerspectiveCamera.md)

## Implements

- [`Updateable`](../interfaces/components.Updateable.md)
- [`Disposable`](../interfaces/components.Disposable.md)

## Properties

### activeCamera

• **activeCamera**: `PerspectiveCamera` \| `OrthographicCamera`

The camera that is being used now according to the current [CameraProjection](../modules/components.md#cameraprojection).

#### Defined in

temp/components/core/SimpleCamera/index.ts:45

___

### controls

• `Readonly` **controls**: `CameraControls`

The object that controls the camera. An instance of
[yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls).
Transforming the camera directly will have no effect: you need to use this
object to move, rotate, look at objects, etc.

#### Defined in

temp/components/core/SimpleCamera/index.ts:30

___

### onAfterUpdate

• `Readonly` **onAfterUpdate**: [`Event`](components.Event.md)<[`SimpleCamera`](components.SimpleCamera.md)\>

[Updateable.onAfterUpdate](../interfaces/components.Updateable.md#onafterupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[onAfterUpdate](../interfaces/components.Updateable.md#onafterupdate)

#### Defined in

temp/components/core/SimpleCamera/index.ts:20

___

### onBeforeUpdate

• `Readonly` **onBeforeUpdate**: [`Event`](components.Event.md)<[`SimpleCamera`](components.SimpleCamera.md)\>

[Updateable.onBeforeUpdate](../interfaces/components.Updateable.md#onbeforeupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[onBeforeUpdate](../interfaces/components.Updateable.md#onbeforeupdate)

#### Defined in

temp/components/core/SimpleCamera/index.ts:17

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[Component.enabled](components.Component.md#enabled)

#### Returns

`boolean`

#### Overrides

Component.enabled

#### Defined in

temp/components/core/SimpleCamera/index.ts:33

• `set` **enabled**(`enabled`): `void`

[Component.enabled](components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Overrides

Component.enabled

#### Defined in

temp/components/core/SimpleCamera/index.ts:38

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/components.Disposable.md).[dispose](../interfaces/components.Disposable.md#dispose)

#### Defined in

temp/components/core/SimpleCamera/index.ts:65

___

### get

▸ **get**(): `PerspectiveCamera` \| `OrthographicCamera`

[Component.get](components.Component.md#get)

#### Returns

`PerspectiveCamera` \| `OrthographicCamera`

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/core/SimpleCamera/index.ts:60

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

### update

▸ **update**(`_delta`): `void`

[Updateable.update](../interfaces/components.Updateable.md#update)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[update](../interfaces/components.Updateable.md#update)

#### Defined in

temp/components/core/SimpleCamera/index.ts:76

___

### updateAspect

▸ **updateAspect**(): `void`

Updates the aspect of the camera to match the size of the
[Components.renderer](components.Components.md#renderer).

#### Returns

`void`

#### Defined in

temp/components/core/SimpleCamera/index.ts:88
