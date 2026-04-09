# LeaderAnnotationStyle

Visual appearance of a leader annotation.

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

### leaderShape?

> `optional` **leaderShape**: `"angular"` \| `"curved"`

Leader line shape.
- `"angular"` (default) — two straight segments: arrowTip → elbow → extensionEnd.
- `"curved"` — quadratic Bézier with `elbow` as the control point.

***

### lineTick?

> `optional` **lineTick**: [`LineTickBuilder`](../type-aliases/LineTickBuilder.md)

Line-segment tick at the arrow tip — geometry is included in the same
`LineSegments` as the leader line.
When both `tick` and `meshTick` are absent, nothing is drawn at the tip.

***

### meshTick?

> `optional` **meshTick**: [`MeshTickBuilder`](../type-aliases/MeshTickBuilder.md)

Filled (mesh) tick at the arrow tip — rendered as a separate `THREE.Mesh`.
Can be combined with `tick` (e.g. open circle + filled disc = target).

***

### textOffset

> **textOffset**: `number`

Distance from `extensionEnd` to the text label anchor,
measured along the extension direction.

#### Overrides

[`BaseAnnotationStyle`](BaseAnnotationStyle.md) . [`textOffset`](BaseAnnotationStyle.md#textoffset)

***

### tickSize

> **tickSize**: `number`

Size of the tick at the arrow tip in drawing local units.

***

### unit?

> `optional` **unit**: [`DimensionUnit`](DimensionUnit.md)

Unit used to format measured values in text labels.
Defaults to Units.m (metres) when not set.

#### Inherited from

[`BaseAnnotationStyle`](BaseAnnotationStyle.md) . [`unit`](BaseAnnotationStyle.md#unit)
