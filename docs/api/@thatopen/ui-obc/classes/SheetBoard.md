# SheetBoard

An infinite pannable/zoomable canvas for arranging technical drawing sheets.

## Fires

viewportselect      - `{ paper, drawingId, viewportId }` on single-click selection

## Fires

viewportdeselect    - `{ paper, drawingId, viewportId }` on deselection

## Fires

viewportactivate    - `{ paper, drawingId, viewportId }` on double-click

## Fires

viewportdxfexport   - `{ drawingId, viewportId, dxf }` when the viewport Export DXF button is clicked

## Fires

paperdxfexport      - `{ paper, dxf }` when the paper Export DXF button is clicked

## Element

bim-sheet-board

## Extends

- `LitElement`

## Properties

### components

> **components**: `null` \| `Components` = `null`

Optional Components instance. When set, the "Export DXF" button
in the paper toolbar computes the DXF file internally and fires a
`paperdxfexport` event with the resulting string.

## Methods

### addViewport()

> **addViewport**(`paper`, `drawingId`, `viewportId`, `pos`): `void`

Registers a DrawingViewport to be rendered inside a
`bim-paper-space` element at the given position.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `paper` | `PaperSpace` | The paper sheet that will display this viewport. |
| `drawingId` | `string` | UUID of the TechnicalDrawing that owns the viewport. |
| `viewportId` | `string` | UUID of the DrawingViewport to render. |
| `pos` | `object` | <p>Top-left position of the viewport in mm, measured from the</p><p>                    drawing area origin (inside the paper margin).</p> |
| `pos.x` | `number` | - |
| `pos.y` | `number` | - |

#### Returns

`void`

***

### enterEditMode()

> **enterEditMode**(`drawingId`, `viewportId`): `void`

Enters edit mode for the given viewport: the board stops intercepting
pointer events on that slot so an external editor can take over.
The slot stays visually selected but drag/resize/click are suspended.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `drawingId` | `string` |
| `viewportId` | `string` |

#### Returns

`void`

***

### exitEditMode()

> **exitEditMode**(): `void`

Exits edit mode, returning pointer control to the board.

#### Returns

`void`

***

### getSlotsForPaper()

> **getSlotsForPaper**(`paper`): `object`[]

Returns the viewport placements registered on the given paper sheet as
plain data objects, suitable for passing directly to a DXF exporter.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `paper` | `PaperSpace` | The paper sheet to query. |

#### Returns

`object`[]

Array of `{ vp, x, y }` where `x` and `y` are mm from the
         top-left of the drawing area.

***

### getViewportElement()

> **getViewportElement**(`drawingId`, `viewportId`): `null` \| `HTMLElement`

Returns the HTML element that covers the screen area of the given viewport.
Useful for registering the viewport as a pointer-event source with an
external editor (e.g. `DrawingEditor.registerSource`).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `drawingId` | `string` |
| `viewportId` | `string` |

#### Returns

`null` \| `HTMLElement`

***

### removeViewport()

> **removeViewport**(`paper`, `drawingId`, `viewportId`): `void`

Removes a previously registered viewport from a paper sheet.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `paper` | `PaperSpace` |
| `drawingId` | `string` |
| `viewportId` | `string` |

#### Returns

`void`

***

### requestRender()

> **requestRender**(): `void`

Schedules a WebGL render pass on the next animation frame.
Call this whenever drawing content changes (new annotation, projection
update, etc.). Multiple calls within the same frame collapse into one.

#### Returns

`void`
