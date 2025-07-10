# RaycastResult

Interface representing the result of a raycast operation.

## Properties

### distance

> **distance**: `number`

The distance of the raycast

***

### faceIndices?

> `optional` **faceIndices**: `Uint16Array`

The indices of the raycasted face

***

### facePoints?

> `optional` **facePoints**: `Float32Array`

The points of the raycasted face

***

### fragments

> **fragments**: [`FragmentsModel`](../classes/FragmentsModel.md)

The Fragments model that was hit

***

### frustum

> **frustum**: `Frustum`

The frustum used for the raycast

***

### itemId

> **itemId**: `number`

The item ID

***

### localId

> **localId**: `number`

The local ID of the item

***

### normal?

> `optional` **normal**: `Vector3`

The normal of the raycast

***

### object

> **object**: `Object3D`\<`Object3DEventMap`\>

The object that was hit

***

### point

> **point**: `Vector3`

The point of the raycast

***

### ray?

> `optional` **ray**: `Ray`

The ray used for the raycast

***

### rayDistance?

> `optional` **rayDistance**: `number`

The distance of the raycast from the ray origin

***

### representationClass

> **representationClass**: `RepresentationClass`

The representation class of the raycast

***

### snappedEdgeP1?

> `optional` **snappedEdgeP1**: `Vector3`

The first edge of the snapped edge

***

### snappedEdgeP2?

> `optional` **snappedEdgeP2**: `Vector3`

The second edge of the snapped edge

***

### snappingClass

> **snappingClass**: [`SnappingClass`](../enumerations/SnappingClass.md)

The snapping class of the raycast
