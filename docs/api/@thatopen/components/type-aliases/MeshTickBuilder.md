# MeshTickBuilder()

> **MeshTickBuilder**: (`tip`, `lineDir`, `size`) => `number`[]

A function that produces filled tick mark geometry (triangles) at one endpoint.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `tip` | `THREE.Vector3` | The endpoint of the dimension or leader line. |
| `lineDir` | `THREE.Vector3` | Normalised direction FROM `tip` TOWARD the other endpoint. |
| `size` | `number` | Tick/arrow size in drawing local units. |

## Returns

`number`[]
