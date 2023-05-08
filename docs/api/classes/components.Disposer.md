---
id: "components.Disposer"
title: "Class: Disposer"
sidebar_label: "Disposer"
custom_edit_url: null
---

[components](../modules/components.md).Disposer

A class to safely remove meshes and geometries from memory to
[prevent memory leaks](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects).

## Methods

### dispose

▸ **dispose**(`mesh`, `materials?`, `recursive?`): `void`

Removes a mesh, its geometry and its materials from memory. If you are
using any of these in other parts of the application, make sure that you
remove them from the mesh before disposing it.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `mesh` | `Item3D` | `undefined` | the [mesh](https://threejs.org/docs/#api/en/objects/Mesh) to remove. |
| `materials` | `boolean` | `true` | whether to dispose the materials of the mesh. |
| `recursive` | `boolean` | `true` | whether to recursively dispose the children of the mesh. |

#### Returns

`void`

#### Defined in

temp/components/core/Disposer/index.ts:21

___

### disposeGeometry

▸ **disposeGeometry**(`geometry`): `void`

Disposes a geometry from memory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry` | the [geometry](https://threejs.org/docs/#api/en/core/BufferGeometry) to remove. |

#### Returns

`void`

#### Defined in

temp/components/core/Disposer/index.ts:38
