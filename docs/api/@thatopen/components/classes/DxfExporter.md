# DxfExporter

Serializes [TechnicalDrawing](TechnicalDrawing.md) content to DXF format (AC1015 / AutoCAD R2000).

## Constructors

### new DxfExporter()

> **new DxfExporter**(`_components`): [`DxfExporter`](DxfExporter.md)

Used through [DxfManager](DxfManager.md):
```ts
const dxf = components.get(OBC.DxfManager).exporter.export([
  { drawing, viewports: [{ viewport, x: 10, y: 10 }] },
], { widthMm: 420, heightMm: 297, margin: 10 });
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_components` | [`Components`](Components.md) |

#### Returns

[`DxfExporter`](DxfExporter.md)

## Properties

### config

> **config**: `object`

Export configuration options.
- `trueColor` — when `true`, upgrades the output to AC1018 (AutoCAD 2004+) and
  emits group code 420 (RGB true color) alongside group code 62 (ACI) on every
  entity. Modern viewers prioritize 420; older apps fall back to 62.
  Note: the adaptive black/white behavior of ACI 7 is lost when true color is on,
  since viewers treat the explicit RGB as fixed. Defaults to `false`.

#### trueColor

> **trueColor**: `boolean` = `false`

***

### precision

> **precision**: `number` = `2`

Decimal places used when formatting measurement text in DXF.

## Methods

### export()

> **export**(`entries`, `paper`?): `string`

Serializes one or more drawings to a DXF string.

When `paper` is supplied the output uses millimetres (INSUNITS=4) and
each viewport is placed at its (`x`, `y`) position on the sheet.
Without `paper` the output uses world units (INSUNITS=6).

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `entries` | [`DxfDrawingEntry`](../interfaces/DxfDrawingEntry.md)[] | Drawings with their viewport placements. |
| `paper`? | [`DxfPaperOptions`](../interfaces/DxfPaperOptions.md) | Optional paper sheet dimensions for paper-space export. |

#### Returns

`string`

***

### registerSystemExporter()

> **registerSystemExporter**\<`T`\>(`SystemClass`, `handler`): `void`

Registers a custom DXF exporter for a [DrawingSystem](AnnotationSystem.md) subclass.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`AnnotationSystem`](AnnotationSystem.md)\<`any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `SystemClass` | `Object` |
| `handler` | (`sys`, `ctx`) => `void` |

#### Returns

`void`
