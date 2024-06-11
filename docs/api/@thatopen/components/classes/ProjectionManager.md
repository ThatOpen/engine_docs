# ProjectionManager

Object to control the [CameraProjection](../type-aliases/CameraProjection.md) of the [OrthoPerspectiveCamera](OrthoPerspectiveCamera.md).

## Properties

### camera

> **camera**: `PerspectiveCamera` \| `OrthographicCamera`

The camera controlled by this ProjectionManager.
It can be either a PerspectiveCamera or an OrthographicCamera.

***

### current

> **current**: [`CameraProjection`](../type-aliases/CameraProjection.md) = `"Perspective"`

Current projection mode of the camera.
Default is "Perspective".

***

### matchOrthoDistanceEnabled

> **matchOrthoDistanceEnabled**: `boolean` = `false`

Match Ortho zoom with Perspective distance when changing projection mode

***

### onChanged

> `readonly` **onChanged**: [`Event`](Event.md)\<`PerspectiveCamera` \| `OrthographicCamera`\>

Event that fires when the [CameraProjection](../type-aliases/CameraProjection.md) changes.

## Methods

### set()

> **set**(`projection`): `Promise`\<`void`\>

Sets the [CameraProjection](../type-aliases/CameraProjection.md) of the [OrthoPerspectiveCamera](OrthoPerspectiveCamera.md).

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `projection` | [`CameraProjection`](../type-aliases/CameraProjection.md) | the new projection to set. If it is the current projection, it will have no effect. |

#### Returns

`Promise`\<`void`\>

***

### toggle()

> **toggle**(): `Promise`\<`void`\>

Changes the current [CameraProjection](../type-aliases/CameraProjection.md) from Ortographic to Perspective
and vice versa.

#### Returns

`Promise`\<`void`\>
