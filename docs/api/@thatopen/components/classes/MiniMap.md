# MiniMap

A class representing a 2D minimap of a 3D world.

## Implements

- [`Resizeable`](../interfaces/Resizeable.md)
- [`Updateable`](../interfaces/Updateable.md)
- [`Disposable`](../interfaces/Disposable.md)

## Properties

### backgroundColor

> **backgroundColor**: `Color`

The background color of the minimap.
It is used to set the background color of the minimap's renderer.

***

### enabled

> **enabled**: `boolean` = `true`

A flag indicating whether the minimap is enabled.
If disabled, the minimap will not update or render.

***

### frontOffset

> **frontOffset**: `number` = `0`

The front offset of the minimap.
It determines how much the minimap's view is offset from the camera's view.
By pushing the map to the front, what the user sees on screen corresponds with what they see on the map

***

### onAfterUpdate

> `readonly` **onAfterUpdate**: [`Event`](Event.md)\<`unknown`\>

[Updateable.onAfterUpdate](../interfaces/Updateable.md#onafterupdate)

#### Implementation of

[`Updateable`](../interfaces/Updateable.md) . [`onAfterUpdate`](../interfaces/Updateable.md#onafterupdate)

***

### onBeforeUpdate

> `readonly` **onBeforeUpdate**: [`Event`](Event.md)\<`unknown`\>

[Updateable.onBeforeUpdate](../interfaces/Updateable.md#onbeforeupdate)

#### Implementation of

[`Updateable`](../interfaces/Updateable.md) . [`onBeforeUpdate`](../interfaces/Updateable.md#onbeforeupdate)

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### onResize

> `readonly` **onResize**: [`Event`](Event.md)\<`Vector2`\>

[Resizeable.onResize](../interfaces/Resizeable.md#onresize)

#### Implementation of

[`Resizeable`](../interfaces/Resizeable.md) . [`onResize`](../interfaces/Resizeable.md#onresize)

***

### overrideMaterial

> **overrideMaterial**: `MeshDepthMaterial`

The override material for the minimap.
It is used to render the depth information of the world onto the minimap.

***

### renderer

> **renderer**: `WebGLRenderer`

The WebGL renderer for the minimap.
It is used to render the minimap onto the screen.

***

### world

> **world**: [`World`](../interfaces/World.md)

The world in which the minimap is displayed.
It provides access to the 3D scene, camera, and other relevant world elements.

## Accessors

### lockRotation

> `get` **lockRotation**(): `boolean`

Gets or sets whether the minimap rotation is locked.
When rotation is locked, the minimap will always face the same direction as the camera.

> `set` **lockRotation**(`active`): `void`

Sets whether the minimap rotation is locked.
When rotation is locked, the minimap will always face the same direction as the camera.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | If `true`, rotation is locked. If `false`, rotation is not locked. |

#### Returns

`boolean`

***

### zoom

> `get` **zoom**(): `number`

Gets the current zoom level of the minimap.
The zoom level determines how much of the world is visible on the minimap.

> `set` **zoom**(`value`): `void`

Sets the zoom level of the minimap.
The zoom level determines how much of the world is visible on the minimap.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The new zoom level of the minimap. |

#### Returns

`number`

The current zoom level of the minimap.

## Methods

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### get()

> **get**(): `OrthographicCamera`

Returns the camera used by the MiniMap

#### Returns

`OrthographicCamera`

***

### getSize()

> **getSize**(): `Vector2`

[Resizeable.getSize](../interfaces/Resizeable.md#getsize)

#### Returns

`Vector2`

#### Implementation of

[`Resizeable`](../interfaces/Resizeable.md) . [`getSize`](../interfaces/Resizeable.md#getsize)

***

### resize()

> **resize**(`size`): `void`

[Resizeable.resize](../interfaces/Resizeable.md#resize)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `size` | `Vector2` |

#### Returns

`void`

#### Implementation of

[`Resizeable`](../interfaces/Resizeable.md) . [`resize`](../interfaces/Resizeable.md#resize)

***

### update()

> **update**(): `void`

[Updateable.update](../interfaces/Updateable.md#update)

#### Returns

`void`

#### Implementation of

[`Updateable`](../interfaces/Updateable.md) . [`update`](../interfaces/Updateable.md#update)
