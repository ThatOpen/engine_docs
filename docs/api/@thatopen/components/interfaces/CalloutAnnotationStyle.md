# CalloutAnnotationStyle

Visual appearance of a callout annotation.

## Extends

- [`BaseAnnotationStyle`](BaseAnnotationStyle.md)

## Properties

### color

> **color**: `number`

Line and text color as a hex number (e.g. `0xff0000`).

#### Inherited from

[`BaseAnnotationStyle`](BaseAnnotationStyle.md) . [`color`](BaseAnnotationStyle.md#color)

***

### enclosure

> **enclosure**: [`EnclosureBuilder`](../type-aliases/EnclosureBuilder.md)

The enclosure shape builder (cloud, rectangle, circle).

***

### fontSize

> **fontSize**: `number`

Font size of the text label in drawing local units.

#### Inherited from

[`BaseAnnotationStyle`](BaseAnnotationStyle.md) . [`fontSize`](BaseAnnotationStyle.md#fontsize)

***

### lineTick?

> `optional` **lineTick**: [`LineTickBuilder`](../type-aliases/LineTickBuilder.md)

Line-segment tick at the extension end — included in the same `LineSegments`
as the extension line. Omit to suppress.

***

### meshTick?

> `optional` **meshTick**: [`MeshTickBuilder`](../type-aliases/MeshTickBuilder.md)

Filled (mesh) tick at the extension end — rendered as a separate `THREE.Mesh`.
Can be combined with `tick`.

***

### textOffset

> **textOffset**: `number`

Distance from the annotation geometry to the text label in drawing local units.

#### Inherited from

[`BaseAnnotationStyle`](BaseAnnotationStyle.md) . [`textOffset`](BaseAnnotationStyle.md#textoffset)

***

### tickSize

> **tickSize**: `number`

Size of the optional tick at the extension end in drawing local units.

***

### unit?

> `optional` **unit**: [`DimensionUnit`](DimensionUnit.md)

Unit used to format measured values in text labels.
Defaults to Units.m (metres) when not set.

#### Inherited from

[`BaseAnnotationStyle`](BaseAnnotationStyle.md) . [`unit`](BaseAnnotationStyle.md#unit)
