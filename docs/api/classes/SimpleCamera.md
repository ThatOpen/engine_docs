---
id: "SimpleCamera"
title: "Class: SimpleCamera"
sidebar_label: "SimpleCamera"
sidebar_position: 0
custom_edit_url: null
---

A basic camera that uses
[yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to
easily control the camera in 2D and 3D. Check out it's API to find out
what features it offers.

## Hierarchy

- [`Component`](Component.md)<`THREE.PerspectiveCamera` \| `THREE.OrthographicCamera`\>

  ↳ **`SimpleCamera`**

## Implements

- [`Updateable`](../interfaces/Updateable.md)
- [`Disposable`](../interfaces/Disposable.md)

## Properties

### activeCamera

• **activeCamera**: `PerspectiveCamera` \| `OrthographicCamera`

The camera that is being used now according to the current CameraProjection.

#### Defined in

core/SimpleCamera/index.ts:51

___

### afterUpdate

• `Readonly` **afterUpdate**: [`Event`](Event.md)<[`SimpleCamera`](SimpleCamera.md)\>

[afterUpdate](../interfaces/Updateable.md#afterupdate)

#### Implementation of

[Updateable](../interfaces/Updateable.md).[afterUpdate](../interfaces/Updateable.md#afterupdate)

#### Defined in

core/SimpleCamera/index.ts:28

___

### beforeUpdate

• `Readonly` **beforeUpdate**: [`Event`](Event.md)<[`SimpleCamera`](SimpleCamera.md)\>

[beforeUpdate](../interfaces/Updateable.md#beforeupdate)

#### Implementation of

[Updateable](../interfaces/Updateable.md).[beforeUpdate](../interfaces/Updateable.md#beforeupdate)

#### Defined in

core/SimpleCamera/index.ts:25

___

### controls

• `Readonly` **controls**: `CameraControls`

The object that controls the camera. An instance of
[yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls).
Transforming the camera directly will have no effect: you need to use this
object to move, rotate, look at objects, etc.

#### Defined in

core/SimpleCamera/index.ts:36

___

### name

• **name**: `string` = `"SimpleCamera"`

[name](Component.md#name)

#### Overrides

[Component](Component.md).[name](Component.md#name)

#### Defined in

core/SimpleCamera/index.ts:22

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[enabled](Component.md#enabled)

#### Returns

`boolean`

#### Overrides

Component.enabled

#### Defined in

core/SimpleCamera/index.ts:39

• `set` **enabled**(`enabled`): `void`

[enabled](Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`

#### Overrides

Component.enabled

#### Defined in

core/SimpleCamera/index.ts:44

## Methods

### dispose

▸ **dispose**(): `void`

[dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

core/SimpleCamera/index.ts:71

___

### get

▸ **get**(): `PerspectiveCamera` \| `OrthographicCamera`

[get](Component.md#get)

#### Returns

`PerspectiveCamera` \| `OrthographicCamera`

#### Overrides

[Component](Component.md).[get](Component.md#get)

#### Defined in

core/SimpleCamera/index.ts:66

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](Component.md).[isDisposeable](Component.md#isdisposeable)

#### Defined in

types/component.ts:27

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](Component.md).[isHideable](Component.md#ishideable)

#### Defined in

types/component.ts:42

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](Component.md).[isResizeable](Component.md#isresizeable)

#### Defined in

types/component.ts:32

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](Component.md).[isUpdateable](Component.md#isupdateable)

#### Defined in

types/component.ts:37

___

### update

▸ **update**(`_delta`): `void`

[update](../interfaces/Updateable.md#update)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Implementation of

[Updateable](../interfaces/Updateable.md).[update](../interfaces/Updateable.md#update)

#### Defined in

core/SimpleCamera/index.ts:80

___

### updateAspect

▸ **updateAspect**(): `void`

Updates the aspect of the camera to match the size of the
[renderer](Components.md#renderer).

#### Returns

`void`

#### Defined in

core/SimpleCamera/index.ts:92
