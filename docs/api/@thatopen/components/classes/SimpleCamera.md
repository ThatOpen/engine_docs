# SimpleCamera

A basic camera that uses [yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to easily control the camera in 2D and 3D. Check out it's API to find out what features it offers.

## Extends

- [`BaseCamera`](BaseCamera.md)

## Extended by

- [`OrthoPerspectiveCamera`](OrthoPerspectiveCamera.md)

## Implements

- [`Updateable`](../interfaces/Updateable.md)
- [`Disposable`](../interfaces/Disposable.md)

## Properties

### currentWorld

> **currentWorld**: `null` \| [`World`](../interfaces/World.md) = `null`

The current world this item is associated with. It can be null if no world is currently active.

#### Inherited from

[`BaseCamera`](BaseCamera.md) . [`currentWorld`](BaseCamera.md#currentworld)

***

### onAfterUpdate

> `readonly` **onAfterUpdate**: [`Event`](Event.md) \<[`SimpleCamera`](SimpleCamera.md)\>

[Updateable.onAfterUpdate](../interfaces/Updateable.md#onafterupdate)

#### Implementation of

[`Updateable`](../interfaces/Updateable.md) . [`onAfterUpdate`](../interfaces/Updateable.md#onafterupdate)

***

### onAspectUpdated

> `readonly` **onAspectUpdated**: [`Event`](Event.md)\<`unknown`\>

Event that is triggered when the aspect of the camera has been updated.
This event is useful when you need to perform actions after the aspect of the camera has been changed.

***

### onBeforeUpdate

> `readonly` **onBeforeUpdate**: [`Event`](Event.md) \<[`SimpleCamera`](SimpleCamera.md)\>

[Updateable.onBeforeUpdate](../interfaces/Updateable.md#onbeforeupdate)

#### Implementation of

[`Updateable`](../interfaces/Updateable.md) . [`onBeforeUpdate`](../interfaces/Updateable.md#onbeforeupdate)

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`string`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

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

[`BaseCamera`](BaseCamera.md) . [`onWorldChanged`](BaseCamera.md#onworldchanged)

***

### three

> **three**: `PerspectiveCamera` \| `OrthographicCamera`

A three.js PerspectiveCamera or OrthographicCamera instance.
This camera is used for rendering the scene.

#### Overrides

[`BaseCamera`](BaseCamera.md) . [`three`](BaseCamera.md#three)

## Accessors

### controls

> `get` **controls**(): `CameraControls`

The object that controls the camera. An instance of
[yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls).
Transforming the camera directly will have no effect: you need to use this
object to move, rotate, look at objects, etc.

#### Returns

`CameraControls`

***

### enabled

> `get` **enabled**(): `boolean`

Getter for the enabled state of the camera controls.
If the current world is null, it returns false.
Otherwise, it returns the enabled state of the camera controls.

> `set` **enabled**(`enabled`): `void`

Setter for the enabled state of the camera controls.
If the current world is not null, it sets the enabled state of the camera controls to the provided value.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `enabled` | `boolean` | The new enabled state of the camera controls. |

#### Returns

`boolean`

The enabled state of the camera controls.

## Methods

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### hasCameraControls()

> **hasCameraControls**(): `this is CameraControllable`

Checks whether the instance is [CameraControllable](../interfaces/CameraControllable.md).

#### Returns

`this is CameraControllable`

True if the instance is controllable, false otherwise.

#### Inherited from

[`BaseCamera`](BaseCamera.md) . [`hasCameraControls`](BaseCamera.md#hascameracontrols)

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any>`

#### Inherited from

[`BaseCamera`](BaseCamera.md) . [`isConfigurable`](BaseCamera.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`BaseCamera`](BaseCamera.md) . [`isDisposeable`](BaseCamera.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`BaseCamera`](BaseCamera.md) . [`isHideable`](BaseCamera.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`BaseCamera`](BaseCamera.md) . [`isResizeable`](BaseCamera.md#isresizeable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`BaseCamera`](BaseCamera.md) . [`isUpdateable`](BaseCamera.md#isupdateable)

***

### update()

> **update**(`_delta`): `void`

[Updateable.update](../interfaces/Updateable.md#update)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Implementation of

[`Updateable`](../interfaces/Updateable.md) . [`update`](../interfaces/Updateable.md#update)

***

### updateAspect()

> **updateAspect**(): `void`

Updates the aspect of the camera to match the size of the
Components.renderer.

#### Returns

`void`
