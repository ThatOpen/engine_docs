# SlopeAnnotationStyle

Visual appearance of a slope annotation.

## Extends

- [`BaseAnnotationStyle`](BaseAnnotationStyle.md)

## Properties

### color

> **color**: `number`

Line and text color as a hex number (e.g. `0xff0000`).

#### Inherited from

[`BaseAnnotationStyle`](BaseAnnotationStyle.md) . [`color`](BaseAnnotationStyle.md#color)

***

### fontSize

> **fontSize**: `number`

Font size of the text label in drawing local units.

#### Inherited from

[`BaseAnnotationStyle`](BaseAnnotationStyle.md) . [`fontSize`](BaseAnnotationStyle.md#fontsize)

***

### format

> **format**: [`SlopeFormat`](../type-aliases/SlopeFormat.md)

How the slope ratio is formatted in the text label.

***

### length

> **length**: `number`

Length of the arrow shaft in drawing local units.

***

### lineTick

> **lineTick**: [`LineTickBuilder`](../type-aliases/LineTickBuilder.md)

Tick mark builder at the downhill tip of the arrow.

***

### meshTick?

> `optional` **meshTick**: [`MeshTickBuilder`](../type-aliases/MeshTickBuilder.md)

Optional filled tick mark builder at the downhill tip.

***

### textOffset

> **textOffset**: `number`

Distance from the arrow midpoint to the near edge of the text label,
measured perpendicularly to the slope direction.

#### Overrides

[`BaseAnnotationStyle`](BaseAnnotationStyle.md) . [`textOffset`](BaseAnnotationStyle.md#textoffset)

***

### tickSize

> **tickSize**: `number`

Tick size in drawing local units.

***

### unit?

> `optional` **unit**: [`DimensionUnit`](DimensionUnit.md)

Unit used to format measured values in text labels.
Defaults to Units.m (metres) when not set.

#### Inherited from

[`BaseAnnotationStyle`](BaseAnnotationStyle.md) . [`unit`](BaseAnnotationStyle.md#unit)
