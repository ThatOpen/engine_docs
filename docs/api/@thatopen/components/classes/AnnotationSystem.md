# `abstract` AnnotationSystem\<TSystem\>

Abstract base for all annotation sub-systems operating on a [TechnicalDrawing](TechnicalDrawing.md).

## Extended by

- [`LinearAnnotations`](LinearAnnotations.md)
- [`AngleAnnotations`](AngleAnnotations.md)
- [`LeaderAnnotations`](LeaderAnnotations.md)
- [`BlockAnnotations`](BlockAnnotations.md)
- [`SlopeAnnotations`](SlopeAnnotations.md)
- [`CalloutAnnotations`](CalloutAnnotations.md)

## Type parameters

| Type parameter | Description |
| :------ | :------ |
| `TSystem` *extends* [`DrawingSystemDescriptor`](../interfaces/DrawingSystemDescriptor.md) | A [DrawingSystemDescriptor](../interfaces/DrawingSystemDescriptor.md) that declares the item, data, style, and handle types for this specific system. |

## Properties

### \_item

`Internal`

> `readonly` **\_item**: `TSystem`\[`"item"`\]

Declaration-only type marker. Never set at runtime. Used by
[DrawingAnnotations.getBySystem](DrawingAnnotations.md#getbysystem) for variance-free type inference:
TypeScript can read `TSystem["item"]` from this covariant readonly field
without triggering the invariance issues of the `styles` DataMap events.

## Methods

### pickHandle()

> `abstract` **pickHandle**(`drawing`, `ray`, `threshold`?): `null` \| `object`

Return the closest pickable handle on `drawing` for the given world-space
`ray`, or `null` if nothing is within `threshold` units.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `drawing` | [`TechnicalDrawing`](TechnicalDrawing.md) |
| `ray` | `Ray` |
| `threshold`? | `number` |

#### Returns

`null` \| `object`
