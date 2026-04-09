# buildSlopePositions()

> **buildSlopePositions**(`ann`, `style`): `Float32Array`

Builds the `LineSegments` position array for a committed slope annotation.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `ann` | [`SlopeAnnotation`](../interfaces/SlopeAnnotation.md) |
| `style` | [`SlopeAnnotationStyle`](../interfaces/SlopeAnnotationStyle.md) |

## Returns

`Float32Array`

A flat `Float32Array` of XYZ triplets (vertex pairs for `LineSegments`).
