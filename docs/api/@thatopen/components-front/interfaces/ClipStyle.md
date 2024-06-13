# ClipStyle

A style defines the appearance of the lines of the [ClippingEdges](../classes/ClippingEdges.md) for a set of meshes.

## Properties

### fillMaterial?

> `optional` **fillMaterial**: `Material`

The material that defines the appearance of the fill of the
[ClippingEdges](../classes/ClippingEdges.md).

***

### fragments

> **fragments**: `FragmentIdMap`

The IDs of the fragment items that are clipped by this style.

***

### lineMaterial

> **lineMaterial**: `LineBasicMaterial`

The material that defines the appearance of the lines of the
[ClippingEdges](../classes/ClippingEdges.md).

***

### meshes

> **meshes**: `Set`\<`Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `InstancedMesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>\>

The meshes where the style will be applied.

***

### name

> **name**: `string`

The name of the style.

***

### outlineMaterial?

> `optional` **outlineMaterial**: `MeshBasicMaterial`

The material that defines the appearance of the outline of the
[ClippingEdges](../classes/ClippingEdges.md). This requires to use the [PostproductionRenderer](../classes/PostproductionRenderer.md)
and [fillMaterial](ClipStyle.md#fillmaterial).
