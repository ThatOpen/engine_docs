---
id: "thatopen_components.OrthoPerspectiveCamera"
title: "Class: OrthoPerspectiveCamera"
sidebar_label: "OrthoPerspectiveCamera"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).OrthoPerspectiveCamera

A flexible camera that uses
[yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to
easily control the camera in 2D and 3D. It supports multiple navigation
modes, such as 2D floor plan navigation, first person and 3D orbit.

## Hierarchy

- [`SimpleCamera`](thatopen_components.SimpleCamera.md)

  ↳ **`OrthoPerspectiveCamera`**

## Properties

### \_mode

• **\_mode**: ``null`` \| [`NavigationMode`](../interfaces/thatopen_components.NavigationMode.md) = `null`

The current [NavigationMode](../interfaces/thatopen_components.NavigationMode.md).

#### Defined in

[packages/core/src/core/OrthoPerspectiveCamera/index.ts:26](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/OrthoPerspectiveCamera/index.ts#L26)

___

### onAfterUpdate

• `Readonly` **onAfterUpdate**: [`Event`](thatopen_components.Event.md)<[`SimpleCamera`](thatopen_components.SimpleCamera.md)\>

[Updateable.onAfterUpdate](../interfaces/thatopen_components.Updateable.md#onafterupdate)

#### Inherited from

[SimpleCamera](thatopen_components.SimpleCamera.md).[onAfterUpdate](thatopen_components.SimpleCamera.md#onafterupdate)

#### Defined in

[packages/core/src/core/Worlds/src/simple-camera.ts:23](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-camera.ts#L23)

___

### onBeforeUpdate

• `Readonly` **onBeforeUpdate**: [`Event`](thatopen_components.Event.md)<[`SimpleCamera`](thatopen_components.SimpleCamera.md)\>

[Updateable.onBeforeUpdate](../interfaces/thatopen_components.Updateable.md#onbeforeupdate)

#### Inherited from

[SimpleCamera](thatopen_components.SimpleCamera.md).[onBeforeUpdate](thatopen_components.SimpleCamera.md#onbeforeupdate)

#### Defined in

[packages/core/src/core/Worlds/src/simple-camera.ts:20](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-camera.ts#L20)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](thatopen_components.Event.md)<`string`\>

[Disposable.onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Inherited from

[SimpleCamera](thatopen_components.SimpleCamera.md).[onDisposed](thatopen_components.SimpleCamera.md#ondisposed)

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

#### Inherited from

SimpleCamera.controls

#### Defined in

[packages/core/src/core/Worlds/src/simple-camera.ts:40](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-camera.ts#L40)

___

### enabled

• `get` **enabled**(): `boolean`

[Component.enabled](thatopen_components.Component.md#enabled)

#### Returns

`boolean`

#### Inherited from

SimpleCamera.enabled

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

#### Inherited from

SimpleCamera.enabled

#### Defined in

[packages/core/src/core/Worlds/src/simple-camera.ts:60](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-camera.ts#L60)

## Methods

### dispose

▸ **dispose**(): `void`

[Disposable.dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Returns

`void`

#### Overrides

[SimpleCamera](thatopen_components.SimpleCamera.md).[dispose](thatopen_components.SimpleCamera.md#dispose)

#### Defined in

[packages/core/src/core/OrthoPerspectiveCamera/index.ts:80](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/OrthoPerspectiveCamera/index.ts#L80)

___

### fit

▸ **fit**(`meshes`, `offset?`): `Promise`<`void`\>

Make the camera view fit all the specified meshes.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `meshes` | `Iterable`<`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\> | `undefined` | the meshes to fit. If it is not defined, it will evaluate Components.meshes. |
| `offset` | `number` | `1.5` | the distance to the fit object |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/core/OrthoPerspectiveCamera/index.ts:108](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/OrthoPerspectiveCamera/index.ts#L108)

___

### hasCameraControls

▸ **hasCameraControls**(): this is CameraControllable

Whether is instance is [CameraControllable](../interfaces/thatopen_components.CameraControllable.md).

#### Returns

this is CameraControllable

#### Inherited from

[SimpleCamera](thatopen_components.SimpleCamera.md).[hasCameraControls](thatopen_components.SimpleCamera.md#hascameracontrols)

#### Defined in

[packages/core/src/core/Types/src/base-camera.ts:13](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base-camera.ts#L13)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/thatopen_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[SimpleCamera](thatopen_components.SimpleCamera.md).[isConfigurable](thatopen_components.SimpleCamera.md#isconfigurable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:39](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L39)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/thatopen_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[SimpleCamera](thatopen_components.SimpleCamera.md).[isDisposeable](thatopen_components.SimpleCamera.md#isdisposeable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:17](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L17)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/thatopen_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[SimpleCamera](thatopen_components.SimpleCamera.md).[isHideable](thatopen_components.SimpleCamera.md#ishideable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:34](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L34)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/thatopen_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[SimpleCamera](thatopen_components.SimpleCamera.md).[isResizeable](thatopen_components.SimpleCamera.md#isresizeable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:22](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L22)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/thatopen_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[SimpleCamera](thatopen_components.SimpleCamera.md).[isUpdateable](thatopen_components.SimpleCamera.md#isupdateable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:27](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L27)

___

### set

▸ **set**(`mode`): `void`

Sets a new [NavigationMode](../interfaces/thatopen_components.NavigationMode.md) and disables the previous one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode` | [`NavModeID`](../modules/thatopen_components.md#navmodeid) | The [NavigationMode](../interfaces/thatopen_components.NavigationMode.md) to set. |

#### Returns

`void`

#### Defined in

[packages/core/src/core/OrthoPerspectiveCamera/index.ts:90](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/OrthoPerspectiveCamera/index.ts#L90)

___

### setUserInput

▸ **setUserInput**(`active`): `void`

Allows or prevents all user input.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | whether to enable or disable user inputs. |

#### Returns

`void`

#### Defined in

[packages/core/src/core/OrthoPerspectiveCamera/index.ts:142](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/OrthoPerspectiveCamera/index.ts#L142)

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

#### Inherited from

[SimpleCamera](thatopen_components.SimpleCamera.md).[update](thatopen_components.SimpleCamera.md#update)

#### Defined in

[packages/core/src/core/Worlds/src/simple-camera.ts:105](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-camera.ts#L105)

___

### updateAspect

▸ **updateAspect**(): `void`

Updates the aspect of the camera to match the size of the
Components.renderer.

#### Returns

`void`

#### Inherited from

[SimpleCamera](thatopen_components.SimpleCamera.md).[updateAspect](thatopen_components.SimpleCamera.md#updateaspect)

#### Defined in

[packages/core/src/core/Worlds/src/simple-camera.ts:117](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-camera.ts#L117)
