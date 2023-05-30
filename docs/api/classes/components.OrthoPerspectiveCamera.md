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

The camera that is being used now according to the current CameraProjection.

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[activeCamera](components.SimpleCamera.md#activecamera)

#### Defined in

temp/components/core/SimpleCamera/index.ts:46

___

### afterUpdate

• `Readonly` **afterUpdate**: [`Event`](components.Event.md)<[`SimpleCamera`](components.SimpleCamera.md)\>

[afterUpdate](../interfaces/components.Updateable.md#afterupdate)

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[afterUpdate](components.SimpleCamera.md#afterupdate)

#### Defined in

temp/components/core/SimpleCamera/index.ts:23

___

### beforeUpdate

• `Readonly` **beforeUpdate**: [`Event`](components.Event.md)<[`SimpleCamera`](components.SimpleCamera.md)\>

[beforeUpdate](../interfaces/components.Updateable.md#beforeupdate)

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[beforeUpdate](components.SimpleCamera.md#beforeupdate)

#### Defined in

temp/components/core/SimpleCamera/index.ts:20

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

temp/components/core/SimpleCamera/index.ts:31

___

### currentMode

• **currentMode**: `NavigationMode`

The current NavigationMode.

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:21

___

### name

• **name**: `string` = `"SimpleCamera"`

[name](components.Component.md#name)

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[name](components.SimpleCamera.md#name)

#### Defined in

temp/components/core/SimpleCamera/index.ts:17

___

### projectionChanged

• `Readonly` **projectionChanged**: [`Event`](components.Event.md)<`Camera`\>

Event that fires when the CameraProjection changes.

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:26

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[enabled](components.Component.md#enabled)

#### Returns

`boolean`

#### Inherited from

SimpleCamera.enabled

#### Defined in

temp/components/core/SimpleCamera/index.ts:34

• `set` **enabled**(`enabled`): `void`

[enabled](components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Inherited from

SimpleCamera.enabled

#### Defined in

temp/components/core/SimpleCamera/index.ts:39

## Methods

### dispose

▸ **dispose**(): `void`

[dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`void`

#### Overrides

[SimpleCamera](components.SimpleCamera.md).[dispose](components.SimpleCamera.md#dispose)

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:87

___

### fitModelToFrame

▸ **fitModelToFrame**(`meshes?`): `Promise`<`void`\>

Make the camera view fit all the specified meshes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `meshes` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[] | the meshes to fit. If it is not defined, it will evaluate [meshes](components.Components.md#meshes). |

#### Returns

`Promise`<`void`\>

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:177

___

### get

▸ **get**(`projection?`): `PerspectiveCamera` \| `OrthographicCamera`

Similar to [get](components.Component.md#get), but with an optional argument
to specify which camera to get.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `projection?` | `CameraProjection` | The camera corresponding to the CameraProjection specified. If no projection is specified, the active camera will be returned. |

#### Returns

`PerspectiveCamera` \| `OrthographicCamera`

#### Overrides

[SimpleCamera](components.SimpleCamera.md).[get](components.SimpleCamera.md#get)

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:101

___

### getProjection

▸ **getProjection**(): `CameraProjection`

Returns the current CameraProjection.

#### Returns

`CameraProjection`

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:111

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/components.UI.md).

#### Returns

this is UI

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[hasUI](components.SimpleCamera.md#hasui)

#### Defined in

temp/components/base-types/component.ts:48

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

temp/components/base-types/component.ts:43

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

Sets a new NavigationMode and disables the previous one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode` | `NavModeID` | The NavigationMode to set. |

#### Returns

`void`

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:155

___

### setProjection

▸ **setProjection**(`projection`): `Promise`<`void`\>

Sets the current CameraProjection. This triggers the event
[projectionChanged](components.OrthoPerspectiveCamera.md#projectionchanged).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `projection` | `CameraProjection` | The new CameraProjection to set. |

#### Returns

`Promise`<`void`\>

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:132

___

### toggleProjection

▸ **toggleProjection**(): `Promise`<`void`\>

Changes the current CameraProjection from Ortographic to Perspective
and Viceversa.

#### Returns

`Promise`<`void`\>

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:119

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

temp/components/navigation/OrthoPerspectiveCamera/index.ts:142

___

### update

▸ **update**(`_delta`): `void`

[update](../interfaces/components.Updateable.md#update)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Inherited from

[SimpleCamera](components.SimpleCamera.md).[update](components.SimpleCamera.md#update)

#### Defined in

temp/components/core/SimpleCamera/index.ts:75

___

### updateAspect

▸ **updateAspect**(): `void`

Updates the aspect ratio of the camera to match the Renderer's aspect ratio.

#### Returns

`void`

#### Overrides

[SimpleCamera](components.SimpleCamera.md).[updateAspect](components.SimpleCamera.md#updateaspect)

#### Defined in

temp/components/navigation/OrthoPerspectiveCamera/index.ts:166
