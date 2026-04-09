# BlockAnnotations

Global drawing system that manages block insertions across all [TechnicalDrawing](TechnicalDrawing.md) instances.

## Extends

- [`AnnotationSystem`](AnnotationSystem.md)\<`BlockAnnotationsSystem`\>

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Constructors

### new BlockAnnotations()

> **new BlockAnnotations**(`components`): [`BlockAnnotations`](BlockAnnotations.md)

A **block** is a named, reusable geometry definition (e.g. a furniture symbol
or a detail imported from a DXF). Multiple insertions of the same block share
the same `THREE.BufferGeometry`, so only the transform (position, rotation,
scale) differs per instance.

Register via [TechnicalDrawings.use](TechnicalDrawings.md#use):
```ts
const blocks = techDrawings.use(BlockAnnotations);
```

Typical workflow:
```ts
// 1. Project external geometry to drawing space
const projected = TechnicalDrawing.toDrawingSpace(ifcLines, drawing);

// 2. Register the block definition (global — do this once)
blocks.define("CHAIR", { lines: projected.geometry });

// 3. Insert on any drawing
blocks.add(drawing, { blockName: "CHAIR", position, rotation: 0, scale: 1, style: "default" });
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `components` | [`Components`](Components.md) |

#### Returns

[`BlockAnnotations`](BlockAnnotations.md)

#### Overrides

`AnnotationSystem<BlockAnnotationsSystem>.constructor`

## Properties

### definitions

> `readonly` **definitions**: `DataMap`\<`string`, [`BlockDefinition`](../interfaces/BlockDefinition.md)\>

Named block definitions in block-local XZ space.
Register via [define](BlockAnnotations.md#define). Geometry is shared across all drawings and insertions.

## Methods

### define()

> **define**(`name`, `definition`): `void`

Registers a block definition by name (global — not tied to any drawing).
All geometry must be in block-local XZ space (Y = 0).
Use [TechnicalDrawing.toDrawingSpace](TechnicalDrawing.md#todrawingspace) to project external geometry first.

Replaces any existing definition with the same name without disposing the old geometry.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `definition` | [`BlockDefinition`](../interfaces/BlockDefinition.md) |

#### Returns

`void`

***

### pick()

> **pick**(`ray`, `threshold`): `null` \| `string`

Overrides the base `pick` to use the correct `LineSegments.raycast` (pair-based)
rather than `THREE.Line.prototype.raycast` (continuous-line).

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `ray` | `Ray` | `undefined` |
| `threshold` | `number` | `0.05` |

#### Returns

`null` \| `string`

#### Overrides

`AnnotationSystem.pick`
