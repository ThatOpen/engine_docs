# FragmentMesh

A class representing a THREE.InstancedMesh with additional properties for fragment data.

## Extends

- `InstancedMesh`

## Constructors

### new FragmentMesh()

> **new FragmentMesh**(`geometry`, `material`, `count`, `fragment`): [`FragmentMesh`](FragmentMesh.md)

Constructs a new FragmentMesh.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | The geometry for the mesh. Must be indexed. |
| `material` | `Material` \| `Material`[] | The material(s) for the mesh. If a single material is provided, it will be wrapped in an array. |
| `count` | `number` | The number of instances to create. |
| `fragment` | [`Fragment`](Fragment.md) | The fragment associated with this mesh. |

#### Returns

[`FragmentMesh`](FragmentMesh.md)

#### Overrides

`THREE.InstancedMesh.constructor`

## Properties

### fragment

> **fragment**: [`Fragment`](Fragment.md)

The fragment associated with this mesh.

***

### geometry

> **geometry**: [`IndexedGeometry`](../interfaces/IndexedGeometry.md)

The geometry used by this mesh.
It must be an IndexedGeometry.

#### Overrides

`THREE.InstancedMesh.geometry`

***

### material

> **material**: `Material`[]

The materials used by this mesh.
If a single material is provided, it will be wrapped in an array.

#### Overrides

`THREE.InstancedMesh.material`

## Methods

### exportData()

> **exportData**(): `object`

Exports the data of the fragment mesh to a serializable format.

#### Returns

`object`

An object containing the position, normal, index, groups, materials, matrices, and colors of the fragment mesh.

##### colors

> **colors**: `number`[]

##### groups

> **groups**: `number`[]

##### index

> **index**: `number`[]

##### materials

> **materials**: `number`[]

##### matrices

> **matrices**: `number`[]

##### normal

> **normal**: `Float32Array`

##### position

> **position**: `Float32Array`
