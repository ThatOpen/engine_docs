# DrawingLayer

A named organizational layer on a [TechnicalDrawing](../classes/TechnicalDrawing.md).

## Properties

### material

> **material**: `LineBasicMaterial`

Material applied to all projection `LineSegments` on this layer.
All objects on the same layer share this instance, so mutating it
(e.g. via [DrawingLayers.setColor](../classes/DrawingLayers.md#setcolor)) is reflected immediately
without any traversal. Use [DrawingLayers.setMaterial](../classes/DrawingLayers.md#setmaterial) to
swap the instance entirely.

Annotation systems always use their own style material — this field
does not affect them.

***

### name

> **name**: `string`

Unique name identifying this layer.

***

### visible

> **visible**: `boolean`

Whether objects on this layer are visible. Defaults to `true`.
