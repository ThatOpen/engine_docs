# IndexedGeometry

Represents a THREE.js geometry with an index attribute. We always work with indexed geometries, and this allows us to not check the existence of the index attribute each time we access it.

## Remarks

This interface extends the `THREE.BufferGeometry` class and adds an `index` attribute of type `THREE.BufferAttribute`.
The `index` attribute is used to define the order of vertices in the geometry.

## Extends

- `BufferGeometry`
