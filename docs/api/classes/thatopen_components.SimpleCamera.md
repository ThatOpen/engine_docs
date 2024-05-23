---
id: "thatopen_components.SimpleCamera"
title: "Class: SimpleCamera"
sidebar_label: "SimpleCamera"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).SimpleCamera

A basic camera that uses
[yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to
easily control the camera in 2D and 3D. Check out it's API to find out
what features it offers.

## Hierarchy

- `BaseCamera`

  ↳ **`SimpleCamera`**

  ↳↳ [`OrthoPerspectiveCamera`](thatopen_components.OrthoPerspectiveCamera.md)

## Implements

- [`Updateable`](../interfaces/thatopen_components.Updateable.md)
- [`Disposable`](../interfaces/thatopen_components.Disposable.md)

## Properties

### onAfterUpdate

• `Readonly` **onAfterUpdate**: [`Event`](thatopen_components.Event.md)<[`SimpleCamera`](thatopen_components.SimpleCamera.md)\>

[Updateable.onAfterUpdate](../interfaces/thatopen_components.Updateable.md#onafterupdate)

#### Implementation of

[Updateable](../interfaces/thatopen_components.Updateable.md).[onAfterUpdate](../interfaces/thatopen_components.Updateable.md#onafterupdate)

#### Defined in

[packages/core/src/core/Worlds/src/simple-camera.ts:23](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-camera.ts#L23)

___

### onBeforeUpdate

• `Readonly` **onBeforeUpdate**: [`Event`](thatopen_components.Event.md)<[`SimpleCamera`](thatopen_components.SimpleCamera.md)\>

[Updateable.onBeforeUpdate](../interfaces/thatopen_components.Updateable.md#onbeforeupdate)

#### Implementation of

[Updateable](../interfaces/thatopen_components.Updateable.md).[onBeforeUpdate](../interfaces/thatopen_components.Updateable.md#onbeforeupdate)

#### Defined in

[packages/core/src/core/Worlds/src/simple-camera.ts:20](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-camera.ts#L20)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](thatopen_components.Event.md)<`string`\>

[Disposable.onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/thatopen_components.Disposable.md).[onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Defined in

[packages/core/src/core/Worlds/src/simple-camera.ts:28](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-camera.ts#L28)

## Accessors

### controls

• `get` **controls**(): `CameraControls`

The object that controls the camera. An instance of
[yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls).
Transforming the camera directly will have no effect: you need to use this
object to move, rotate, look at objects, etc.

#### Returns

`CameraControls`

#### Overrides

BaseCamera.controls

#### Defined in

[packages/core/src/core/Worlds/src/simple-camera.ts:40](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-camera.ts#L40)

___

### enabled

• `get` **enabled**(): `boolean`

[Component.enabled](thatopen_components.Component.md#enabled)

#### Returns

`boolean`

#### Overrides

BaseCamera.enabled

#### Defined in

[packages/core/src/core/Worlds/src/simple-camera.ts:52](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-camera.ts#L52)

• `set` **enabled**(`enabled`): `void`

[Component.enabled](thatopen_components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Overrides

BaseCamera.enabled

#### Defined in

[packages/core/src/core/Worlds/src/simple-camera.ts:60](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-camera.ts#L60)

## Methods

### dispose

▸ **dispose**(): `void`

[Disposable.dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[Disposable](../interfaces/thatopen_components.Disposable.md).[dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Defined in

[packages/core/src/core/Worlds/src/simple-camera.ts:90](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-camera.ts#L90)

___

### hasCameraControls

▸ **hasCameraControls**(): this is CameraControllable

Whether is instance is [CameraControllable](../interfaces/thatopen_components.CameraControllable.md).

#### Returns

this is CameraControllable

#### Inherited from

BaseCamera.hasCameraControls

#### Defined in

[packages/core/src/core/Types/src/base-camera.ts:13](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base-camera.ts#L13)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/thatopen_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

BaseCamera.isConfigurable

#### Defined in

[packages/core/src/core/Types/src/base.ts:39](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L39)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/thatopen_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

BaseCamera.isDisposeable

#### Defined in

[packages/core/src/core/Types/src/base.ts:17](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L17)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/thatopen_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

BaseCamera.isHideable

#### Defined in

[packages/core/src/core/Types/src/base.ts:34](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L34)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/thatopen_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

BaseCamera.isResizeable

#### Defined in

[packages/core/src/core/Types/src/base.ts:22](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L22)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/thatopen_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

BaseCamera.isUpdateable

#### Defined in

[packages/core/src/core/Types/src/base.ts:27](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L27)

___

### update

▸ **update**(`_delta`): `void`

[Updateable.update](../interfaces/thatopen_components.Updateable.md#update)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Implementation of

[Updateable](../interfaces/thatopen_components.Updateable.md).[update](../interfaces/thatopen_components.Updateable.md#update)

#### Defined in

[packages/core/src/core/Worlds/src/simple-camera.ts:105](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-camera.ts#L105)

___

### updateAspect

▸ **updateAspect**(): `void`

Updates the aspect of the camera to match the size of the
Components.renderer.

#### Returns

`void`

#### Defined in

[packages/core/src/core/Worlds/src/simple-camera.ts:117](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-camera.ts#L117)
