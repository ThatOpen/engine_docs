# DxfViewportEntry

One viewport placement within a drawing entry.

## Properties

### viewport?

> `optional` **viewport**: [`DrawingViewport`](../classes/DrawingViewport.md)

Viewport to clip and transform against. If omitted, exports the full drawing.

***

### x?

> `optional` **x**: `number`

Horizontal position in mm from the top-left of the drawing area (paper-space only).

***

### y?

> `optional` **y**: `number`

Vertical position in mm from the top-left of the drawing area (paper-space only).
