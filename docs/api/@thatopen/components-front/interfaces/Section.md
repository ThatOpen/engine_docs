# Section

The data that describes a section view.

## Extended by

- [`PlanView`](PlanView.md)

## Properties

### cached

> **cached**: `object`

The cached camera data of the view when the user exited it.

#### position

> **position**: `Vector3`

#### size

> **size**: `number`

#### target

> **target**: `Vector3`

#### zoom

> **zoom**: `number`

***

### id

> **id**: `string`

The unique identifier for this Section plan (e.g. "0w984V0GL6yR4z75YWgVfX").

***

### name

> **name**: `string`

The human-readable name of this floor plan (e.g. "First floor").

***

### offset

> **offset**: `number`

The offset of the camera to the clipping plane.

***

### plane

> **plane**: [`EdgesPlane`](../classes/EdgesPlane.md)

The clipping plane object that cuts the model.
