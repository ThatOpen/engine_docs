# ClippingFills

Class for managing and rendering the fills of a clipping plane.

## Properties

### mesh

> **mesh**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

The THREE.js mesh representing the fills.

***

### styleName?

> `optional` **styleName**: `string`

The name of the style associated with this clipping fills.

***

### world

> **world**: `World`

The world in which the clipping plane and fills exist.

## Accessors

### geometry

> `set` **geometry**(`geometry`): `void`

Sets the geometry of the clipping fills mesh.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | The new geometry for the mesh. The position attribute of the geometry will be assigned to the mesh's geometry. |

***

### visible

> `get` **visible**(): `boolean`

Gets the visibility of the clipping fills mesh.

> `set` **visible**(`value`): `void`

Sets the visibility of the clipping fills mesh.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The new visibility state. If true, the mesh will be added to the scene and the style's meshes set. If false, the mesh will be removed from the scene and the style's meshes set. |

#### Returns

`boolean`

Returns true if the mesh is visible, false otherwise.

## Methods

### dispose()

> **dispose**(): `void`

Disposes of the clipping fills mesh and its associated resources.
This method should be called when the clipping fills are no longer needed to free up memory.

#### Returns

`void`

***

### update()

> **update**(`trianglesIndices`): `void`

Updates the clipping fills mesh with new indices.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `trianglesIndices` | `number`[] | An array of indices representing triangles in the geometry. |

#### Returns

`void`
