# BaseAnnotationStyle

Minimum style contract shared by every annotation system.

## Extended by

- [`LinearAnnotationStyle`](LinearAnnotationStyle.md)
- [`LeaderAnnotationStyle`](LeaderAnnotationStyle.md)
- [`BlockStyle`](BlockStyle.md)
- [`SlopeAnnotationStyle`](SlopeAnnotationStyle.md)
- [`CalloutAnnotationStyle`](CalloutAnnotationStyle.md)

## Properties

### color

> **color**: `number`

Line and text color as a hex number (e.g. `0xff0000`).

***

### fontSize

> **fontSize**: `number`

Font size of the text label in drawing local units.

***

### textOffset

> **textOffset**: `number`

Distance from the annotation geometry to the text label in drawing local units.

***

### unit?

> `optional` **unit**: [`DimensionUnit`](DimensionUnit.md)

Unit used to format measured values in text labels.
Defaults to Units.m (metres) when not set.
