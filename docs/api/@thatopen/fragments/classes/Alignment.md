# Alignment

Represents an alignment in a civil engineering project. An alignment consists of vertical, horizontal, and absolute civil curves.

## Properties

### absolute

> **absolute**: [`CivilCurve`](CivilCurve.md)[] = `[]`

Absolute civil curves in the alignment.

***

### horizontal

> **horizontal**: [`CivilCurve`](CivilCurve.md)[] = `[]`

Horizontal civil curves in the alignment.

***

### initialKP

> **initialKP**: `number` = `0`

Initial KP (Kilometer Point) of the alignment.

***

### vertical

> **vertical**: [`CivilCurve`](CivilCurve.md)[] = `[]`

Vertical civil curves in the alignment.

## Methods

### getCurveAt()

> **getCurveAt**(`percentage`, `type`): `object`

Returns the curve and the percentage at the specified percentage along the specified alignment type.
If the percentage is out of range, it will be clamped to the nearest valid value (0 or 1).
If the point cannot be computed, an error will be thrown.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `percentage` | `number` | The percentage along the alignment type (between zero and one). |
| `type` | [`AlignmentType`](../type-aliases/AlignmentType.md) | The type of alignment (vertical, horizontal, or absolute). |

#### Returns

`object`

An object containing the curve and the percentage along the curve.

##### curve

> **curve**: [`CivilCurve`](CivilCurve.md)

##### percentage

> **percentage**: `number`

#### Throws

Will throw an error if the percentage is out of range or if the point cannot be computed.

***

### getLength()

> **getLength**(`type`): `number`

Returns the total length of the specified alignment type.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | [`AlignmentType`](../type-aliases/AlignmentType.md) | The type of alignment (vertical, horizontal, or absolute). |

#### Returns

`number`

The total length of the specified alignment type.

***

### getPointAt()

> **getPointAt**(`percentage`, `type`): `Vector3`

Returns the point at the specified percentage along the specified alignment type.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `percentage` | `number` | The percentage along the alignment type (between zero and one). |
| `type` | [`AlignmentType`](../type-aliases/AlignmentType.md) | The type of alignment (vertical, horizontal, or absolute). |

#### Returns

`Vector3`

The point at the specified percentage along the specified alignment type.

#### Throws

Will throw an error if the percentage is out of range or if the point cannot be computed.
