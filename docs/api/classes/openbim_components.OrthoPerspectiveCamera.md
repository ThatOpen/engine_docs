---
id: "openbim_components.OrthoPerspectiveCamera"
title: "Class: OrthoPerspectiveCamera"
sidebar_label: "OrthoPerspectiveCamera"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).OrthoPerspectiveCamera

A flexible camera that uses
[yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to
easily control the camera in 2D and 3D. It supports multiple navigation
modes, such as 2D floor plan navigation, first person and 3D orbit.

## Hierarchy

- [`SimpleCamera`](openbim_components.SimpleCamera.md)

  ↳ **`OrthoPerspectiveCamera`**

## Implements

- [`UI`](../interfaces/openbim_components.UI.md)

## Properties

### activeCamera

• **activeCamera**: `PerspectiveCamera` \| `OrthographicCamera`

The camera that is being used now according to the current [CameraProjection](../modules/openbim_components.md#cameraprojection).

#### Inherited from

[SimpleCamera](openbim_components.SimpleCamera.md).[activeCamera](openbim_components.SimpleCamera.md#activecamera)

#### Defined in

[src/core/SimpleCamera/index.ts:45](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleCamera/index.ts#L45)

___

### controls

• `Readonly` **controls**: `CameraControls`

The object that controls the camera. An instance of
[yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls).
Transforming the camera directly will have no effect: you need to use this
object to move, rotate, look at objects, etc.

#### Inherited from

[SimpleCamera](openbim_components.SimpleCamera.md).[controls](openbim_components.SimpleCamera.md#controls)

#### Defined in

[src/core/SimpleCamera/index.ts:30](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleCamera/index.ts#L30)

___

### currentMode

• **currentMode**: [`NavigationMode`](../interfaces/openbim_components.NavigationMode.md)

The current [NavigationMode](../interfaces/openbim_components.NavigationMode.md).

#### Defined in

[src/navigation/OrthoPerspectiveCamera/index.ts:24](https://github.com/ifcjs/components/blob/e46138a/src/navigation/OrthoPerspectiveCamera/index.ts#L24)

___

### onAfterUpdate

• `Readonly` **onAfterUpdate**: [`Event`](openbim_components.Event.md)<[`SimpleCamera`](openbim_components.SimpleCamera.md)\>

[Updateable.onAfterUpdate](../interfaces/openbim_components.Updateable.md#onafterupdate)

#### Inherited from

[SimpleCamera](openbim_components.SimpleCamera.md).[onAfterUpdate](openbim_components.SimpleCamera.md#onafterupdate)

#### Defined in

[src/core/SimpleCamera/index.ts:20](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleCamera/index.ts#L20)

___

### onBeforeUpdate

• `Readonly` **onBeforeUpdate**: [`Event`](openbim_components.Event.md)<[`SimpleCamera`](openbim_components.SimpleCamera.md)\>

[Updateable.onBeforeUpdate](../interfaces/openbim_components.Updateable.md#onbeforeupdate)

#### Inherited from

[SimpleCamera](openbim_components.SimpleCamera.md).[onBeforeUpdate](openbim_components.SimpleCamera.md#onbeforeupdate)

#### Defined in

[src/core/SimpleCamera/index.ts:17](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleCamera/index.ts#L17)

___

### projectionChanged

• `Readonly` **projectionChanged**: [`Event`](openbim_components.Event.md)<`Camera`\>

Event that fires when the [CameraProjection](../modules/openbim_components.md#cameraprojection) changes.

#### Defined in

[src/navigation/OrthoPerspectiveCamera/index.ts:29](https://github.com/ifcjs/components/blob/e46138a/src/navigation/OrthoPerspectiveCamera/index.ts#L29)

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[Component.enabled](openbim_components.Component.md#enabled)

#### Returns

`boolean`

#### Inherited from

SimpleCamera.enabled

#### Defined in

[src/core/SimpleCamera/index.ts:33](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleCamera/index.ts#L33)

• `set` **enabled**(`enabled`): `void`

[Component.enabled](openbim_components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Inherited from

SimpleCamera.enabled

#### Defined in

[src/core/SimpleCamera/index.ts:38](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleCamera/index.ts#L38)

___

### matchOrthoDistanceEnabled

• `set` **matchOrthoDistanceEnabled**(`value`): `void`

Match Ortho zoom with Perspective distance when changing projection mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/navigation/OrthoPerspectiveCamera/index.ts:136](https://github.com/ifcjs/components/blob/e46138a/src/navigation/OrthoPerspectiveCamera/index.ts#L136)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Overrides

[SimpleCamera](openbim_components.SimpleCamera.md).[dispose](openbim_components.SimpleCamera.md#dispose)

#### Defined in

[src/navigation/OrthoPerspectiveCamera/index.ts:107](https://github.com/ifcjs/components/blob/e46138a/src/navigation/OrthoPerspectiveCamera/index.ts#L107)

___

### fit

▸ **fit**(`meshes?`, `offset?`): `Promise`<`void`\>

Make the camera view fit all the specified meshes.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `meshes` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[] | `undefined` | the meshes to fit. If it is not defined, it will evaluate [Components.meshes](openbim_components.Components.md#meshes). |
| `offset` | `number` | `1.5` | the distance to the fit object |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/navigation/OrthoPerspectiveCamera/index.ts:197](https://github.com/ifcjs/components/blob/e46138a/src/navigation/OrthoPerspectiveCamera/index.ts#L197)

___

### get

▸ **get**(`projection?`): `PerspectiveCamera` \| `OrthographicCamera`

Similar to [Component.get](openbim_components.Component.md#get), but with an optional argument
to specify which camera to get.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `projection?` | [`CameraProjection`](../modules/openbim_components.md#cameraprojection) | The camera corresponding to the [CameraProjection](../modules/openbim_components.md#cameraprojection) specified. If no projection is specified, the active camera will be returned. |

#### Returns

`PerspectiveCamera` \| `OrthographicCamera`

#### Overrides

[SimpleCamera](openbim_components.SimpleCamera.md).[get](openbim_components.SimpleCamera.md#get)

#### Defined in

[src/navigation/OrthoPerspectiveCamera/index.ts:121](https://github.com/ifcjs/components/blob/e46138a/src/navigation/OrthoPerspectiveCamera/index.ts#L121)

___

### getProjection

▸ **getProjection**(): [`CameraProjection`](../modules/openbim_components.md#cameraprojection)

Returns the current [CameraProjection](../modules/openbim_components.md#cameraprojection).

#### Returns

[`CameraProjection`](../modules/openbim_components.md#cameraprojection)

#### Defined in

[src/navigation/OrthoPerspectiveCamera/index.ts:131](https://github.com/ifcjs/components/blob/e46138a/src/navigation/OrthoPerspectiveCamera/index.ts#L131)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[SimpleCamera](openbim_components.SimpleCamera.md).[hasUI](openbim_components.SimpleCamera.md#hasui)

#### Defined in

[src/base-types/component.ts:62](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[SimpleCamera](openbim_components.SimpleCamera.md).[isConfigurable](openbim_components.SimpleCamera.md#isconfigurable)

#### Defined in

[src/base-types/component.ts:57](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[SimpleCamera](openbim_components.SimpleCamera.md).[isDisposeable](openbim_components.SimpleCamera.md#isdisposeable)

#### Defined in

[src/base-types/component.ts:35](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[SimpleCamera](openbim_components.SimpleCamera.md).[isHideable](openbim_components.SimpleCamera.md#ishideable)

#### Defined in

[src/base-types/component.ts:52](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[SimpleCamera](openbim_components.SimpleCamera.md).[isResizeable](openbim_components.SimpleCamera.md#isresizeable)

#### Defined in

[src/base-types/component.ts:40](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[SimpleCamera](openbim_components.SimpleCamera.md).[isUpdateable](openbim_components.SimpleCamera.md#isupdateable)

#### Defined in

[src/base-types/component.ts:45](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L45)

___

### setNavigationMode

▸ **setNavigationMode**(`mode`): `void`

Sets a new [NavigationMode](../interfaces/openbim_components.NavigationMode.md) and disables the previous one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode` | [`NavModeID`](../modules/openbim_components.md#navmodeid) | The [NavigationMode](../interfaces/openbim_components.NavigationMode.md) to set. |

#### Returns

`void`

#### Defined in

[src/navigation/OrthoPerspectiveCamera/index.ts:180](https://github.com/ifcjs/components/blob/e46138a/src/navigation/OrthoPerspectiveCamera/index.ts#L180)

___

### setProjection

▸ **setProjection**(`projection`): `Promise`<`void`\>

Sets the current [CameraProjection](../modules/openbim_components.md#cameraprojection). This triggers the event
[projectionChanged](openbim_components.OrthoPerspectiveCamera.md#projectionchanged).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `projection` | [`CameraProjection`](../modules/openbim_components.md#cameraprojection) | The new [CameraProjection](../modules/openbim_components.md#cameraprojection) to set. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/navigation/OrthoPerspectiveCamera/index.ts:157](https://github.com/ifcjs/components/blob/e46138a/src/navigation/OrthoPerspectiveCamera/index.ts#L157)

___

### toggleProjection

▸ **toggleProjection**(): `Promise`<`void`\>

Changes the current [CameraProjection](../modules/openbim_components.md#cameraprojection) from Ortographic to Perspective
and Viceversa.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/navigation/OrthoPerspectiveCamera/index.ts:144](https://github.com/ifcjs/components/blob/e46138a/src/navigation/OrthoPerspectiveCamera/index.ts#L144)

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

[src/navigation/OrthoPerspectiveCamera/index.ts:167](https://github.com/ifcjs/components/blob/e46138a/src/navigation/OrthoPerspectiveCamera/index.ts#L167)

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

#### Inherited from

[SimpleCamera](openbim_components.SimpleCamera.md).[update](openbim_components.SimpleCamera.md#update)

#### Defined in

[src/core/SimpleCamera/index.ts:76](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleCamera/index.ts#L76)

___

### updateAspect

▸ **updateAspect**(): `void`

Updates the aspect of the camera to match the size of the
[Components.renderer](openbim_components.Components.md#renderer).

#### Returns

`void`

#### Inherited from

[SimpleCamera](openbim_components.SimpleCamera.md).[updateAspect](openbim_components.SimpleCamera.md#updateaspect)

#### Defined in

[src/core/SimpleCamera/index.ts:88](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleCamera/index.ts#L88)
