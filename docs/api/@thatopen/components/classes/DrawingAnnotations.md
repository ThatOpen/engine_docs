# DrawingAnnotations

Flat annotation store for a [TechnicalDrawing](TechnicalDrawing.md), keyed by UUID.

## Extends

- `DataMap`\<`string`, [`AnnotationEntry`](../interfaces/AnnotationEntry.md)\>

## Constructors

### new DrawingAnnotations()

> **new DrawingAnnotations**(): [`DrawingAnnotations`](DrawingAnnotations.md)

Each entry bundles the owning system, the data, and the Three.js group —
so a single `drawing.annotations.get(uuid)` gives full access to all three.

Systems write here when they create or update annotations; consumers read
from here or subscribe to system-level events (`onCommit`, `onDelete`).

```ts
// Get everything for a known UUID
const { system, data, three } = drawing.annotations.get(uuid)!;

// Iterate all annotations owned by a specific system
for (const [uuid, dim] of drawing.annotations.getBySystem(dims)) { ... }
```

#### Returns

[`DrawingAnnotations`](DrawingAnnotations.md)

#### Overrides

`FRAGS.DataMap<string, AnnotationEntry>.constructor`

## Methods

### getBySystem()

> **getBySystem**\<`T`\>(`system`): `Map`\<`string`, `T`\>

Returns a snapshot map of `uuid → item` for all annotations owned by
`system` on this drawing. TypeScript infers the item type from the
system's `_item` declaration marker, avoiding DataMap event variance issues.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `system` | `object` |
| `system._item` | `T` |

#### Returns

`Map`\<`string`, `T`\>
