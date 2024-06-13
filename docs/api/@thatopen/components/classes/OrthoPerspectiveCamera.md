# OrthoPerspectiveCamera

A flexible camera that uses [yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to control the camera in 2D and 3D. It supports multiple navigation modes, such as 2D floor plan navigation, first person and 3D orbit. This class extends the SimpleCamera class and adds additional functionality for managing different camera projections and navigation modes. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/OrthoPerspectiveCamera). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/OrthoPerspectiveCamera).

## Extends

- [`SimpleCamera`](SimpleCamera.md)

## Properties

### currentWorld

> **currentWorld**: `null` \| [`World`](../interfaces/World.md) = `null`

The current world this item is associated with. It can be null if no world is currently active.

#### Inherited from

[`SimpleCamera`](SimpleCamera.md) . [`currentWorld`](SimpleCamera.md#currentworld)

***

### onAfterUpdate

> `readonly` **onAfterUpdate**: [`Event`](Event.md) \<[`SimpleCamera`](SimpleCamera.md)\>

[Updateable.onAfterUpdate](../interfaces/Updateable.md#onafterupdate)

#### Inherited from

[`SimpleCamera`](SimpleCamera.md) . [`onAfterUpdate`](SimpleCamera.md#onafterupdate)

***

### onAspectUpdated

> `readonly` **onAspectUpdated**: [`Event`](Event.md)\<`unknown`\>

Event that is triggered when the aspect of the camera has been updated.
This event is useful when you need to perform actions after the aspect of the camera has been changed.

#### Inherited from

[`SimpleCamera`](SimpleCamera.md) . [`onAspectUpdated`](SimpleCamera.md#onaspectupdated)

***

### onBeforeUpdate

> `readonly` **onBeforeUpdate**: [`Event`](Event.md) \<[`SimpleCamera`](SimpleCamera.md)\>

[Updateable.onBeforeUpdate](../interfaces/Updateable.md#onbeforeupdate)

#### Inherited from

[`SimpleCamera`](SimpleCamera.md) . [`onBeforeUpdate`](SimpleCamera.md#onbeforeupdate)

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`string`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Inherited from

[`SimpleCamera`](SimpleCamera.md) . [`onDisposed`](SimpleCamera.md#ondisposed)

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

[`SimpleCamera`](SimpleCamera.md) . [`onWorldChanged`](SimpleCamera.md#onworldchanged)

***

### projection

> `readonly` **projection**: [`ProjectionManager`](ProjectionManager.md)

A ProjectionManager instance that manages the projection modes of the camera.

***

### three

> **three**: `PerspectiveCamera` \| `OrthographicCamera`

A three.js PerspectiveCamera or OrthographicCamera instance.
This camera is used for rendering the scene.

#### Inherited from

[`SimpleCamera`](SimpleCamera.md) . [`three`](SimpleCamera.md#three)

***

### threeOrtho

> `readonly` **threeOrtho**: `OrthographicCamera`

A THREE.OrthographicCamera instance that represents the orthographic camera.
This camera is used when the projection mode is set to orthographic.

***

### threePersp

> `readonly` **threePersp**: `PerspectiveCamera`

A THREE.PerspectiveCamera instance that represents the perspective camera.
This camera is used when the projection mode is set to perspective.

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

***

### mode

> `get` **mode**(): [`NavigationMode`](../interfaces/NavigationMode.md)

Getter for the current navigation mode.
Throws an error if the mode is not found or the camera is not initialized.

#### Throws

Throws an error if the mode is not found or the camera is not initialized.

#### Returns

[`NavigationMode`](../interfaces/NavigationMode.md)

The current navigation mode.

## Methods

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Overrides

[`SimpleCamera`](SimpleCamera.md) . [`dispose`](SimpleCamera.md#dispose)

***

### fit()

> **fit**(`meshes`, `offset`): `Promise`\<`void`\>

Make the camera view fit all the specified meshes.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `meshes` | `Iterable`\<`Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\> | `undefined` | the meshes to fit. If it is not defined, it will evaluate Components.meshes. |
| `offset` | `number` | `1.5` | the distance to the fit object |

#### Returns

`Promise`\<`void`\>

***

### hasCameraControls()

> **hasCameraControls**(): `this is CameraControllable`

Checks whether the instance is [CameraControllable](../interfaces/CameraControllable.md).

#### Returns

`this is CameraControllable`

True if the instance is controllable, false otherwise.

#### Inherited from

[`SimpleCamera`](SimpleCamera.md) . [`hasCameraControls`](SimpleCamera.md#hascameracontrols)

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any>`

#### Inherited from

[`SimpleCamera`](SimpleCamera.md) . [`isConfigurable`](SimpleCamera.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`SimpleCamera`](SimpleCamera.md) . [`isDisposeable`](SimpleCamera.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`SimpleCamera`](SimpleCamera.md) . [`isHideable`](SimpleCamera.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`SimpleCamera`](SimpleCamera.md) . [`isResizeable`](SimpleCamera.md#isresizeable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`SimpleCamera`](SimpleCamera.md) . [`isUpdateable`](SimpleCamera.md#isupdateable)

***

### set()

> **set**(`mode`): `void`

Sets a new [NavigationMode](../interfaces/NavigationMode.md) and disables the previous one.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mode` | [`NavModeID`](../type-aliases/NavModeID.md) | The [NavigationMode](../interfaces/NavigationMode.md) to set. |

#### Returns

`void`

***

### setUserInput()

> **setUserInput**(`active`): `void`

Allows or prevents all user input.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | whether to enable or disable user inputs. |

#### Returns

`void`

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

#### Inherited from

[`SimpleCamera`](SimpleCamera.md) . [`update`](SimpleCamera.md#update)

***

### updateAspect()

> **updateAspect**(): `void`

Updates the aspect of the camera to match the size of the
Components.renderer.

#### Returns

`void`

#### Inherited from

[`SimpleCamera`](SimpleCamera.md) . [`updateAspect`](SimpleCamera.md#updateaspect)
