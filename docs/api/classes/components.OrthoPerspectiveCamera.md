---
id: "components.OrthoPerspectiveCamera"
title: "Class: OrthoPerspectiveCamera"
sidebar_label: "OrthoPerspectiveCamera"
custom_edit_url: null
---

[components](../modules/components.md).OrthoPerspectiveCamera

A flexible camera that uses
[yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to
easily control the camera in 2D and 3D. It supports multiple navigation
modes, such as 2D floor plan navigation, first person and 3D orbit.

## Hierarchy

- [`SimpleCamera`](components.SimpleCamera.md)

  ↳ **`OrthoPerspectiveCamera`**

## Implements

- [`UI`](../interfaces/components.UI.md)

## Properties

### activeCamera

• **activeCamera**: `PerspectiveCamera` \| `OrthographicCamera`

The camera that is being used now according to the current [CameraProjection](../modules/components.md#cameraprojection).

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[activeCamera](components.SimpleCamera.md#activecamera)

#### Defined in

temp/components/core/SimpleCamera/index.ts:45

___

### controls

• `Readonly` **controls**: `CameraControls`

The object that controls the camera. An instance of
[yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls).
Transforming the camera directly will have no effect: you need to use this
object to move, rotate, look at objects, etc.

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[controls](components.SimpleCamera.md#controls)

#### Defined in

temp/components/core/SimpleCamera/index.ts:30

___

### currentMode

• **currentMode**: [`NavigationMode`](../interfaces/components.NavigationMode.md)

The current [NavigationMode](../interfaces/components.NavigationMode.md).

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:23

___

### onAfterUpdate

• `Readonly` **onAfterUpdate**: [`Event`](components.Event.md)<[`SimpleCamera`](components.SimpleCamera.md)\>

[Updateable.onAfterUpdate](../interfaces/components.Updateable.md#onafterupdate)

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[onAfterUpdate](components.SimpleCamera.md#onafterupdate)

#### Defined in

temp/components/core/SimpleCamera/index.ts:20

___

### onBeforeUpdate

• `Readonly` **onBeforeUpdate**: [`Event`](components.Event.md)<[`SimpleCamera`](components.SimpleCamera.md)\>

[Updateable.onBeforeUpdate](../interfaces/components.Updateable.md#onbeforeupdate)

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[onBeforeUpdate](components.SimpleCamera.md#onbeforeupdate)

#### Defined in

temp/components/core/SimpleCamera/index.ts:17

___

### projectionChanged

• `Readonly` **projectionChanged**: [`Event`](components.Event.md)<`Camera`\>

Event that fires when the [CameraProjection](../modules/components.md#cameraprojection) changes.

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:28

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[Component.enabled](components.Component.md#enabled)

#### Returns

`boolean`

#### Inherited from

SimpleCamera.enabled

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

#### Inherited from

SimpleCamera.enabled

#### Defined in

temp/components/core/SimpleCamera/index.ts:38

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Overrides

[SimpleCamera](components.SimpleCamera.md).[dispose](components.SimpleCamera.md#dispose)

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:106

___

### fit

▸ **fit**(`meshes?`, `offset?`): `Promise`<`void`\>

Make the camera view fit all the specified meshes.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `meshes` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[] | `undefined` | the meshes to fit. If it is not defined, it will evaluate [Components.meshes](components.Components.md#meshes). |
| `offset` | `number` | `1.5` | the distance to the fit object |

#### Returns

`Promise`<`void`\>

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:191

___

### get

▸ **get**(`projection?`): `PerspectiveCamera` \| `OrthographicCamera`

Similar to [Component.get](components.Component.md#get), but with an optional argument
to specify which camera to get.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `projection?` | [`CameraProjection`](../modules/components.md#cameraprojection) | The camera corresponding to the [CameraProjection](../modules/components.md#cameraprojection) specified. If no projection is specified, the active camera will be returned. |

#### Returns

`PerspectiveCamera` \| `OrthographicCamera`

#### Overrides

[SimpleCamera](components.SimpleCamera.md).[get](components.SimpleCamera.md#get)

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:120

___

### getProjection

▸ **getProjection**(): [`CameraProjection`](../modules/components.md#cameraprojection)

Returns the current [CameraProjection](../modules/components.md#cameraprojection).

#### Returns

[`CameraProjection`](../modules/components.md#cameraprojection)

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:130

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/components.UI.md).

#### Returns

this is UI

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[hasUI](components.SimpleCamera.md#hasui)

#### Defined in

temp/components/base-types/component.ts:50

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[isDisposeable](components.SimpleCamera.md#isdisposeable)

#### Defined in

temp/components/base-types/component.ts:28

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[isHideable](components.SimpleCamera.md#ishideable)

#### Defined in

temp/components/base-types/component.ts:45

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[isResizeable](components.SimpleCamera.md#isresizeable)

#### Defined in

temp/components/base-types/component.ts:33

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[isUpdateable](components.SimpleCamera.md#isupdateable)

#### Defined in

temp/components/base-types/component.ts:38

___

### setNavigationMode

▸ **setNavigationMode**(`mode`): `void`

Sets a new [NavigationMode](../interfaces/components.NavigationMode.md) and disables the previous one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode` | [`NavModeID`](../modules/components.md#navmodeid) | The [NavigationMode](../interfaces/components.NavigationMode.md) to set. |

#### Returns

`void`

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:174

___

### setProjection

▸ **setProjection**(`projection`): `Promise`<`void`\>

Sets the current [CameraProjection](../modules/components.md#cameraprojection). This triggers the event
[projectionChanged](components.OrthoPerspectiveCamera.md#projectionchanged).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `projection` | [`CameraProjection`](../modules/components.md#cameraprojection) | The new [CameraProjection](../modules/components.md#cameraprojection) to set. |

#### Returns

`Promise`<`void`\>

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:151

___

### toggleProjection

▸ **toggleProjection**(): `Promise`<`void`\>

Changes the current [CameraProjection](../modules/components.md#cameraprojection) from Ortographic to Perspective
and Viceversa.

#### Returns

`Promise`<`void`\>

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:138

___

### toggleUserInput

▸ **toggleUserInput**(`active`): `void`

Allows or prevents all user input.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | whether to enable or disable user inputs. |

#### Returns

`void`

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:161

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

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[update](components.SimpleCamera.md#update)

#### Defined in

temp/components/core/SimpleCamera/index.ts:76

___

### updateAspect

▸ **updateAspect**(): `void`

Updates the aspect of the camera to match the size of the
[Components.renderer](components.Components.md#renderer).

#### Returns

`void`

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[updateAspect](components.SimpleCamera.md#updateaspect)

#### Defined in

temp/components/core/SimpleCamera/index.ts:88
