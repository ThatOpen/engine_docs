# Angle

Represents an angle defined by three points in 3D space: a start point, a vertex (center), and an end point.

## Constructors

### new Angle()

> **new Angle**(`start`?, `vertex`?, `end`?): [`Angle`](Angle.md)

The angle is computed as the angle between the vectors (vertex -> start) and (vertex -> end).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `start`? | `Vector3` |
| `vertex`? | `Vector3` |
| `end`? | `Vector3` |

#### Returns

[`Angle`](Angle.md)

## Properties

### end

> **end**: `Vector3`

The second point of the angle.

***

### id

> **id**: `string`

Unique identifier for this angle instance.

***

### start

> **start**: `Vector3`

The first point of the angle.

***

### vertex

> **vertex**: `Vector3`

The vertex (center) of the angle where the two rays meet.

## Accessors

### rawValue

> `get` **rawValue**(): `number`

The angle in radians, without unit conversion or rounding. Returns 0 when either ray has zero length.

#### Returns

`number`

***

### rounding

> `set` **rounding**(`value`): `void`

The number of decimal places used when computing [value](Angle.md#value).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

***

### units

> `set` **units**(`value`): `void`

The unit system used for displaying the angle value.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `"deg"` \| `"rad"` |

***

### value

> `get` **value**(): `number`

The angle converted to the current [units](Angle.md#units) and rounded to [rounding](Angle.md#rounding) decimal places.

#### Returns

`number`

## Methods

### clone()

> **clone**(): [`Angle`](Angle.md)

Creates a deep copy of this angle, preserving all points, units, and rounding.

#### Returns

[`Angle`](Angle.md)
