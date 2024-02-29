---
id: "openbim_components.SimpleCamera"
title: "Class: SimpleCamera"
sidebar_label: "SimpleCamera"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).SimpleCamera

A basic camera that uses
[yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to
easily control the camera in 2D and 3D. Check out it's API to find out
what features it offers.

## Hierarchy

- [`Component`](openbim_components.Component.md)<`THREE.PerspectiveCamera` \| `THREE.OrthographicCamera`\>

  ↳ **`SimpleCamera`**

  ↳↳ [`OrthoPerspectiveCamera`](openbim_components.OrthoPerspectiveCamera.md)

## Implements

- [`Updateable`](../interfaces/openbim_components.Updateable.md)
- [`Disposable`](../interfaces/openbim_components.Disposable.md)

## Properties

### activeCamera

• **activeCamera**: `PerspectiveCamera` \| `OrthographicCamera`

The camera that is being used now according to the current [CameraProjection](../modules/openbim_components.md#cameraprojection).

#### Defined in

[temp/engine_components/src/core/SimpleCamera/index.ts:48](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/SimpleCamera/index.ts#L48)

___

### controls

• `Readonly` **controls**: `CameraControls`

The object that controls the camera. An instance of
[yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls).
Transforming the camera directly will have no effect: you need to use this
object to move, rotate, look at objects, etc.

#### Defined in

[temp/engine_components/src/core/SimpleCamera/index.ts:33](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/SimpleCamera/index.ts#L33)

___

### onAfterUpdate

• `Readonly` **onAfterUpdate**: [`Event`](openbim_components.Event.md)<[`SimpleCamera`](openbim_components.SimpleCamera.md)\>

[Updateable.onAfterUpdate](../interfaces/openbim_components.Updateable.md#onafterupdate)

#### Implementation of

[Updateable](../interfaces/openbim_components.Updateable.md).[onAfterUpdate](../interfaces/openbim_components.Updateable.md#onafterupdate)

#### Defined in

[temp/engine_components/src/core/SimpleCamera/index.ts:20](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/SimpleCamera/index.ts#L20)

___

### onBeforeUpdate

• `Readonly` **onBeforeUpdate**: [`Event`](openbim_components.Event.md)<[`SimpleCamera`](openbim_components.SimpleCamera.md)\>

[Updateable.onBeforeUpdate](../interfaces/openbim_components.Updateable.md#onbeforeupdate)

#### Implementation of

[Updateable](../interfaces/openbim_components.Updateable.md).[onBeforeUpdate](../interfaces/openbim_components.Updateable.md#onbeforeupdate)

#### Defined in

[temp/engine_components/src/core/SimpleCamera/index.ts:17](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/SimpleCamera/index.ts#L17)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](openbim_components.Event.md)<`string`\>

[Disposable.onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Defined in

[temp/engine_components/src/core/SimpleCamera/index.ts:25](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/SimpleCamera/index.ts#L25)

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[Component.enabled](openbim_components.Component.md#enabled)

#### Returns

`boolean`

#### Overrides

Component.enabled

#### Defined in

[temp/engine_components/src/core/SimpleCamera/index.ts:36](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/SimpleCamera/index.ts#L36)

• `set` **enabled**(`enabled`): `void`

[Component.enabled](openbim_components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Overrides

Component.enabled

#### Defined in

[temp/engine_components/src/core/SimpleCamera/index.ts:41](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/SimpleCamera/index.ts#L41)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[temp/engine_components/src/core/SimpleCamera/index.ts:68](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/SimpleCamera/index.ts#L68)

___

### get

▸ **get**(): `PerspectiveCamera` \| `OrthographicCamera`

[Component.get](openbim_components.Component.md#get)

#### Returns

`PerspectiveCamera` \| `OrthographicCamera`

#### Overrides

[Component](openbim_components.Component.md).[get](openbim_components.Component.md#get)

#### Defined in

[temp/engine_components/src/core/SimpleCamera/index.ts:63](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/SimpleCamera/index.ts#L63)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](openbim_components.Component.md).[hasUI](openbim_components.Component.md#hasui)

#### Defined in

[temp/engine_components/src/base-types/component.ts:62](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](openbim_components.Component.md).[isConfigurable](openbim_components.Component.md#isconfigurable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:57](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](openbim_components.Component.md).[isDisposeable](openbim_components.Component.md#isdisposeable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:35](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](openbim_components.Component.md).[isHideable](openbim_components.Component.md#ishideable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:52](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](openbim_components.Component.md).[isResizeable](openbim_components.Component.md#isresizeable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:40](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](openbim_components.Component.md).[isUpdateable](openbim_components.Component.md#isupdateable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:45](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L45)

___

### update

▸ **update**(`_delta`): `Promise`<`void`\>

[Updateable.update](../interfaces/openbim_components.Updateable.md#update)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Updateable](../interfaces/openbim_components.Updateable.md).[update](../interfaces/openbim_components.Updateable.md#update)

#### Defined in

[temp/engine_components/src/core/SimpleCamera/index.ts:81](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/SimpleCamera/index.ts#L81)

___

### updateAspect

▸ **updateAspect**(): `void`

Updates the aspect of the camera to match the size of the
[Components.renderer](openbim_components.Components.md#renderer).

#### Returns

`void`

#### Defined in

[temp/engine_components/src/core/SimpleCamera/index.ts:93](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/SimpleCamera/index.ts#L93)
