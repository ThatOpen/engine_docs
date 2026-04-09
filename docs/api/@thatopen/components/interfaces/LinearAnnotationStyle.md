# LinearAnnotationStyle

Visual appearance of a linear annotation. Registered by name on the component.

## Extends

- [`BaseAnnotationStyle`](BaseAnnotationStyle.md)

## Properties

### color

> **color**: `number`

Line and text color as a hex number (e.g. `0xff0000`).

#### Inherited from

[`BaseAnnotationStyle`](BaseAnnotationStyle.md) . [`color`](BaseAnnotationStyle.md#color)

***

### extensionGap

> **extensionGap**: `number`

Gap between the measured geometry and the start of each extension line.

***

### extensionOvershoot

> **extensionOvershoot**: `number`

How far extension lines overshoot beyond the dimension line.

***

### fontSize

> **fontSize**: `number`

Font size of the text label in drawing local units.

#### Inherited from

[`BaseAnnotationStyle`](BaseAnnotationStyle.md) . [`fontSize`](BaseAnnotationStyle.md#fontsize)

***

### lineTick

> **lineTick**: [`LineTickBuilder`](../type-aliases/LineTickBuilder.md)

Tick mark geometry builder. Use one of the built-in exports or provide a custom one.

***

### meshTick?

> `optional` **meshTick**: [`MeshTickBuilder`](../type-aliases/MeshTickBuilder.md)

Optional filled tick mark builder. When provided, a `THREE.Mesh` triangle
is rendered at each dimension endpoint in addition to (or instead of) the
line tick. Set `tick` to [NoTick](../functions/NoTick.md) when you only want the filled shape.

***

### textOffset

> **textOffset**: `number`

Signed perpendicular distance from the dimension line to the text label,
measured outward from the measured geometry.
Positive moves the text away from the geometry; negative moves it inward.

#### Overrides

[`BaseAnnotationStyle`](BaseAnnotationStyle.md) . [`textOffset`](BaseAnnotationStyle.md#textoffset)

***

### tickSize

> **tickSize**: `number`

Size of the tick mark in drawing local units.

***

### unit?

> `optional` **unit**: [`DimensionUnit`](DimensionUnit.md)

Unit used to format measured values in text labels.
Defaults to Units.m (metres) when not set.

#### Inherited from

[`BaseAnnotationStyle`](BaseAnnotationStyle.md) . [`unit`](BaseAnnotationStyle.md#unit)
