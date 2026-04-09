# EdgeProjectionResult

Result of an edge projection, containing visible/hidden geometries and a mapping from group indices to model item identifiers.

## Properties

### groups

> **groups**: `Record`\<`number`, `object`\>

Maps group index to `{ modelId, localId }` identifying the source item.

***

### hidden

> **hidden**: `BufferGeometry`\<`NormalBufferAttributes`, `BufferGeometryEventMap`\>

Line segment geometry for hidden edges. Has a `group` vertex attribute with group indices.

***

### visible

> **visible**: `BufferGeometry`\<`NormalBufferAttributes`, `BufferGeometryEventMap`\>

Line segment geometry for visible edges. Has a `group` vertex attribute with group indices.
