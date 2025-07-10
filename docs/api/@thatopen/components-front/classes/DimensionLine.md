# DimensionLine

A class representing a simple dimension line in a 3D space.

## Properties

### boundingBox

> **boundingBox**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

The bounding box for the dimension line.

***

### isSelected

> **isSelected**: `boolean` = `false`

Updates the dimension line's appearance based on its state.

#### Param

Whether the dimension line is selected.

***

### label

> **label**: [`Mark`](Mark.md)

The label for the dimension line.

***

### world

> **world**: `World`

The world in which the dimension line exists.

## Accessors

### end

> `set` **end**(`point`): `void`

Setter for the end point of the dimension line.
Updates the line geometry and position of the end point marker.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `point` | `Vector3` | The new end point. |

***

### start

> `set` **start**(`point`): `void`

Setter for the start point of the dimension line.
Updates the line geometry and position of the start point marker.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `point` | `Vector3` | The new start point. |

***

### units

> `set` **units**(`value`): `void`

The units used for the dimension line.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `"m"` \| `"cm"` \| `"mm"` \| `"km"` |

***

### visible

> `get` **visible**(): `boolean`

Getter for the visibility of the dimension line.

> `set` **visible**(`value`): `void`

Setter for the visibility of the dimension line.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The new visibility state. |

#### Returns

`boolean`

## Methods

### createBoundingBox()

> **createBoundingBox**(): `void`

Creates a bounding box for the dimension line.
The bounding box is a 3D box that encloses the dimension line.
It is used for collision detection and visibility culling.
The bounding box is initially invisible and can be toggled using the `toggleBoundingBox` method.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Disposes of the dimension line and its associated resources.
This method should be called when the dimension line is no longer needed.
It removes the dimension line from the world, destroys its components, and frees up memory.

#### Returns

`void`
