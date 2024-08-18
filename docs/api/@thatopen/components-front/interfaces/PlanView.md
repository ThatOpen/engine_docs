# PlanView

The data that describes a plan view.

## Extends

- [`Section`](Section.md)

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

#### Inherited from

[`Section`](Section.md) . [`cached`](Section.md#cached)

***

### id

> **id**: `string`

The unique identifier for this Section plan (e.g. "0w984V0GL6yR4z75YWgVfX").

#### Inherited from

[`Section`](Section.md) . [`id`](Section.md#id)

***

### name

> **name**: `string`

The human-readable name of this floor plan (e.g. "First floor").

#### Inherited from

[`Section`](Section.md) . [`name`](Section.md#name)

***

### offset

> **offset**: `number`

The offset of the camera to the clipping plane.

#### Inherited from

[`Section`](Section.md) . [`offset`](Section.md#offset)

***

### planOffset

> **planOffset**: `number`

The offset of the clipping plane to the plan height.

***

### plane

> **plane**: [`EdgesPlane`](../classes/EdgesPlane.md)

The clipping plane object that cuts the model.

#### Inherited from

[`Section`](Section.md) . [`plane`](Section.md#plane)
