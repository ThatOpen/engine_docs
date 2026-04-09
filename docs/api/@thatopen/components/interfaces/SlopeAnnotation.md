# SlopeAnnotation

A single committed slope annotation.

## Properties

### direction

> **direction**: `Vector3`

Normalised downhill direction in the XZ plane.

***

### position

> **position**: `Vector3`

Anchor point of the arrow tail in drawing local space.

***

### slope

> **slope**: `number`

Slope ratio: rise / run (e.g. `0.15` for a 15 % slope).
Use [formatSlope](../functions/formatSlope.md) to convert to the desired display string.

***

### style

> **style**: `string`

Name of the [SlopeAnnotationStyle](SlopeAnnotationStyle.md) to use.

***

### uuid

> **uuid**: `string`

Unique identifier.
