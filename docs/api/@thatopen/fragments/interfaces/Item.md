# Item

Represents an item in the 3D model.

## Remarks

Each item has a unique identifier, a list of transformation matrices, and optionally, a list of colors.

## Properties

### colors?

> `optional` **colors**: `Color`[]

An optional list of colors associated with the item.

***

### id

> **id**: `number`

The unique identifier of the item.

***

### transforms

> **transforms**: `Matrix4`[]

A list of transformation matrices representing the position, rotation, and scale of the item.
