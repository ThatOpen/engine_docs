# DrawingIntersection

Result of a successful raycast against a [TechnicalDrawing](../classes/TechnicalDrawing.md).

## Properties

### line

> **line**: `null` \| `Line3`

The specific line segment that was hit, expressed as a `THREE.Line3`
in drawing local space. `null` when the hit object is not a LineSegments.

***

### object

> **object**: `Object3D`\<`Object3DEventMap`\>

The Three.js object that was intersected (e.g. a LineSegments).

***

### point

> **point**: `Vector3`

Hit position in drawing local space (X right, Z down-screen, Y = 0).

***

### viewport

> **viewport**: `null` \| [`DrawingViewport`](../classes/DrawingViewport.md)

The viewport whose camera was used for the raycast, or `null` when the
pick originated from a world-space camera (e.g. the 3D viewer).
