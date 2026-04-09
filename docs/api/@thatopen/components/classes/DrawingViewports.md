# DrawingViewports

Manages the viewports of a [TechnicalDrawing](TechnicalDrawing.md).

## Extends

- `DataMap`\<`string`, [`DrawingViewport`](DrawingViewport.md)\>

## Constructors

### new DrawingViewports()

> **new DrawingViewports**(`container`): [`DrawingViewports`](DrawingViewports.md)

Accessible via `drawing.viewports`. Extends `DataMap` so consumers get
reactive events (`onItemSet`, `onBeforeDelete`, …) for free.

```ts
const vp = drawing.viewports.create({ left: -1, right: 5, top: 1, bottom: -4 });
drawing.viewports.delete(vp.uuid); // disposes and removes
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `container` | `Group`\<`Object3DEventMap`\> |

#### Returns

[`DrawingViewports`](DrawingViewports.md)

#### Overrides

`FRAGS.DataMap<string, DrawingViewport>.constructor`

## Methods

### create()

> **create**(`config`): [`DrawingViewport`](DrawingViewport.md)

Creates a new [DrawingViewport](DrawingViewport.md), adds its camera to the drawing
container, and registers it.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config` | [`DrawingViewportConfig`](../interfaces/DrawingViewportConfig.md) | Bounds and scale for the new viewport. |

#### Returns

[`DrawingViewport`](DrawingViewport.md)

The newly created viewport.
