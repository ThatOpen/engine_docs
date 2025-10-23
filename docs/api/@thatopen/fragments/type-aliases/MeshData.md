# MeshData

> **MeshData**: `object`

Interface representing the data of a mesh.

## Type declaration

### indices?

> `optional` **indices**: `Uint8Array` \| `Uint16Array` \| `Uint32Array`

The indices of the mesh

### localId?

> `optional` **localId**: `number`

The local ID of the mesh

### normals?

> `optional` **normals**: `Int16Array`

The normals of the mesh

### positions?

> `optional` **positions**: `Float32Array` \| `Float64Array`

The positions of the mesh

### representationId?

> `optional` **representationId**: `number`

The representation ID of the mesh

### sampleId?

> `optional` **sampleId**: `number`

The sample ID of the mesh

### transform

> **transform**: `THREE.Matrix4`

The transformation matrix of the mesh
