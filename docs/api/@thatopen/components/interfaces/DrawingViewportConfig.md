# DrawingViewportConfig

Configuration to create a [DrawingViewport](../classes/DrawingViewport.md).

## Properties

### bottom

> **bottom**: `number`

Bottom bound of the viewport in local drawing units.
Maps to world +Z (screen Y down = local +Z).

***

### left

> **left**: `number`

Left bound of the viewport in local drawing units.

***

### name?

> `optional` **name**: `string`

Human-readable label for this viewport. Defaults to an empty string.

***

### right

> **right**: `number`

Right bound of the viewport in local drawing units.

***

### scale?

> `optional` **scale**: `number`

Drawing scale denominator (e.g. 100 means 1:100).
Defaults to 100.

***

### top

> **top**: `number`

Top bound of the viewport in local drawing units.
Maps to world -Z (screen Y up = local -Z).
