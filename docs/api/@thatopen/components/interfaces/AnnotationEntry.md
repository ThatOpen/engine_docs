# AnnotationEntry

A single annotation entry stored in [DrawingAnnotations](../classes/DrawingAnnotations.md), bundling the owning system, the annotation data, and its Three.js group.

## Properties

### data

> **data**: `unknown`

The persisted annotation data (e.g. [LinearAnnotation](LinearAnnotation.md)).

***

### system

> **system**: [`AnnotationSystem`](../classes/AnnotationSystem.md)\<`any`\>

The system that created and owns this annotation.

***

### three

> **three**: `Group`\<`Object3DEventMap`\>

The Three.js group added to [TechnicalDrawing.three](../classes/TechnicalDrawing.md#three).
