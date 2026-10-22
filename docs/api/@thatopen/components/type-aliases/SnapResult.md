# SnapResult

> **SnapResult**: `object`

One result of a [SnapResolver.resolve](../classes/SnapResolver.md#resolve) call. Fields match what
the worker raycast snap path historically produces, so consumers
(length / area measurements, drawing tools) keep working unchanged
when their input switches from worker raycast to GPU pick + this.

## Type declaration

### faceIndices?

> `optional` **faceIndices**: `Uint32Array`

Triangulation indices into `facePoints` (FACE only). For convex
 polygons we emit a fan; for concave the consumer can re-tessellate.

### facePoints?

> `optional` **facePoints**: [`SnapFloatArray`](SnapFloatArray.md)

Polygon vertices of the snapped face (FACE only). Flat array of
 `[x, y, z, x, y, z, ...]`.

### normal?

> `optional` **normal**: `THREE.Vector3`

World-space surface normal where applicable (always set for FACE,
 unset for POINT, derived from the picked surface for LINE).

### point

> **point**: `THREE.Vector3`

Snapped world-space position (vertex / segment closest point /
 point projected onto the snapped face).

### snappedEdgeP1?

> `optional` **snappedEdgeP1**: `THREE.Vector3`

Endpoints of the snapped edge (LINE only).

### snappedEdgeP2?

> `optional` **snappedEdgeP2**: `THREE.Vector3`

### snappingClass

> **snappingClass**: [`SnapClass`](../enumerations/SnapClass.md)

Which snap class this result represents.
