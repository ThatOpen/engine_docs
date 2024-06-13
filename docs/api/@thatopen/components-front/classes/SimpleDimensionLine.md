# SimpleDimensionLine

A class representing a simple dimension line in a 3D space.

## Properties

### boundingBox

> **boundingBox**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

The bounding box for the dimension line.

***

### components

> **components**: `Components`

The components used by the dimension line.

***

### label

> **label**: [`Mark`](Mark.md)

The label for the dimension line.

***

### world

> **world**: `World`

The world in which the dimension line exists.

***

### scale

> `static` **scale**: `number` = `1`

The scale factor for the dimension line.

***

### units

> `static` **units**: `string` = `"m"`

The units used for the dimension line.

## Accessors

### endPoint

> `get` **endPoint**(): `Vector3`

Getter for the end point of the dimension line.

> `set` **endPoint**(`point`): `void`

Setter for the end point of the dimension line.
Updates the line geometry and position of the end point marker.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `point` | `Vector3` | The new end point. |

#### Returns

`Vector3`

The current end point.

***

### startPoint

> `get` **startPoint**(): `Vector3`

Getter for the start point of the dimension line.

> `set` **startPoint**(`point`): `void`

Setter for the start point of the dimension line.
Updates the line geometry and position of the start point marker.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `point` | `Vector3` | The new start point. |

#### Returns

`Vector3`

The current start point.

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

The current visibility state.

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

***

### toggleLabel()

> **toggleLabel**(): `void`

Toggles the visibility of the dimension line's label.
The label is a text element that displays the length of the dimension line.
This method is used to show or hide the label when needed.

#### Returns

`void`
