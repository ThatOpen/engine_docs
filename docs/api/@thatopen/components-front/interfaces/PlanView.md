# PlanView

Necessary data to create a new floor plan in the navigator.

## Properties

### id

> **id**: `string`

The unique identifier for this floor plan (e.g. "0w984V0GL6yR4z75YWgVfX").

***

### name

> **name**: `string`

The human-readable name of this floor plan (e.g. "First floor").

***

### normal

> **normal**: `Vector3`

The rotation of the clipping plane

***

### offset?

> `optional` **offset**: `number`

The offset of the clipping plane to the plan height.

***

### ortho

> **ortho**: `boolean`

Whether the camera of the navigator should be orthogonal

***

### plane?

> `optional` **plane**: [`EdgesPlane`](../classes/EdgesPlane.md)

The clipping plane object that cuts the model.

***

### point

> **point**: `Vector3`

The position of the clipping plane
