# BlockDefinition

The geometry content of a named block. At least one of `lines` or `mesh` must be provided.

## Properties

### lines?

> `optional` **lines**: `BufferGeometry`\<`NormalBufferAttributes`, `BufferGeometryEventMap`\>

Line geometry for `LineSegments`.

***

### mesh?

> `optional` **mesh**: `BufferGeometry`\<`NormalBufferAttributes`, `BufferGeometryEventMap`\>

Triangle geometry for a filled `THREE.Mesh`.
