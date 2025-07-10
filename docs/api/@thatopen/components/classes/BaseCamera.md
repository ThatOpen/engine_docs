# `abstract` BaseCamera

Abstract class representing a camera in a 3D world. All cameras should use this class as a base.

## Extends

- [`BaseWorldItem`](BaseWorldItem.md)

## Extended by

- [`SimpleCamera`](SimpleCamera.md)

## Properties

### controls?

> `optional` `abstract` **controls**: `CameraControls`

Optional CameraControls instance for controlling the camera.
This property is only available if the camera is controllable.

***

### enabled

> `abstract` **enabled**: `boolean`

Whether the camera is enabled or not.

***

### onWorldChanged

> `readonly` **onWorldChanged**: [`Event`](Event.md)\<`object`\>

Event that is triggered when a world is added or removed from the `worlds` map.
The event payload contains the world instance and the action ("added" or "removed").

#### Type declaration

##### action

> **action**: `"added"` \| `"removed"`

##### world

> **world**: [`World`](../interfaces/World.md)

#### Inherited from

[`BaseWorldItem`](BaseWorldItem.md) . [`onWorldChanged`](BaseWorldItem.md#onworldchanged)

***

### three

> `abstract` **three**: `Camera`

The Three.js camera instance.

## Accessors

### currentWorld

> `set` **currentWorld**(`value`): `void`

The current world this item is associated with. It can be null if no world is currently active.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `null` \| [`World`](../interfaces/World.md) |

## Methods

### hasCameraControls()

> **hasCameraControls**(): `this is CameraControllable`

Checks whether the instance is [CameraControllable](../interfaces/CameraControllable.md).

#### Returns

`this is CameraControllable`

True if the instance is controllable, false otherwise.

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any, any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any, any>`

#### Inherited from

[`BaseWorldItem`](BaseWorldItem.md) . [`isConfigurable`](BaseWorldItem.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`BaseWorldItem`](BaseWorldItem.md) . [`isDisposeable`](BaseWorldItem.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`BaseWorldItem`](BaseWorldItem.md) . [`isHideable`](BaseWorldItem.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`BaseWorldItem`](BaseWorldItem.md) . [`isResizeable`](BaseWorldItem.md#isresizeable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`BaseWorldItem`](BaseWorldItem.md) . [`isUpdateable`](BaseWorldItem.md#isupdateable)
