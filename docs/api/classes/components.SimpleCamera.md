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

## Implements

- [`Updateable`](../interfaces/components.Updateable.md)
- [`Disposable`](../interfaces/components.Disposable.md)

## Properties

### activeCamera

• **activeCamera**: `PerspectiveCamera` \| `OrthographicCamera`

The camera that is being used now according to the current CameraProjection.

#### Defined in

components/core/SimpleCamera/index.ts:51

___

### afterUpdate

• `Readonly` **afterUpdate**: [`Event`](components.Event.md)<[`SimpleCamera`](components.SimpleCamera.md)\>

[afterUpdate](../interfaces/components.Updateable.md#afterupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[afterUpdate](../interfaces/components.Updateable.md#afterupdate)

#### Defined in

components/core/SimpleCamera/index.ts:28

___

### beforeUpdate

• `Readonly` **beforeUpdate**: [`Event`](components.Event.md)<[`SimpleCamera`](components.SimpleCamera.md)\>

[beforeUpdate](../interfaces/components.Updateable.md#beforeupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[beforeUpdate](../interfaces/components.Updateable.md#beforeupdate)

#### Defined in

components/core/SimpleCamera/index.ts:25

___

### controls

• `Readonly` **controls**: `CameraControls`

The object that controls the camera. An instance of
[yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls).
Transforming the camera directly will have no effect: you need to use this
object to move, rotate, look at objects, etc.

#### Defined in

components/core/SimpleCamera/index.ts:36

___

### name

• **name**: `string` = `"SimpleCamera"`

[name](components.Component.md#name)

#### Overrides

[Component](components.Component.md).[name](components.Component.md#name)

#### Defined in

components/core/SimpleCamera/index.ts:22

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[enabled](components.Component.md#enabled)

#### Returns

`boolean`

#### Overrides

Component.enabled

#### Defined in

components/core/SimpleCamera/index.ts:39

• `set` **enabled**(`enabled`): `void`

[enabled](components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Overrides

Component.enabled

#### Defined in

components/core/SimpleCamera/index.ts:44

## Methods

### dispose

▸ **dispose**(): `void`

[dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

components/core/SimpleCamera/index.ts:71

___

### get

▸ **get**(): `PerspectiveCamera` \| `OrthographicCamera`

[get](components.Component.md#get)

#### Returns

`PerspectiveCamera` \| `OrthographicCamera`

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

components/core/SimpleCamera/index.ts:66

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](components.Component.md).[isDisposeable](components.Component.md#isdisposeable)

#### Defined in

components/types/component.ts:28

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](components.Component.md).[isHideable](components.Component.md#ishideable)

#### Defined in

components/types/component.ts:43

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](components.Component.md).[isResizeable](components.Component.md#isresizeable)

#### Defined in

components/types/component.ts:33

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](components.Component.md).[isUpdateable](components.Component.md#isupdateable)

#### Defined in

components/types/component.ts:38

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

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[update](../interfaces/components.Updateable.md#update)

#### Defined in

components/core/SimpleCamera/index.ts:80

___

### updateAspect

▸ **updateAspect**(): `void`

Updates the aspect of the camera to match the size of the
[renderer](components.Components.md#renderer).

#### Returns

`void`

#### Defined in

components/core/SimpleCamera/index.ts:92
