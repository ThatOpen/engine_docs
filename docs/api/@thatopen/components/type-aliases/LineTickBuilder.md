# LineTickBuilder()

> **LineTickBuilder**: (`tip`, `lineDir`, `size`) => `number`[]

A function that produces tick mark geometry at one endpoint of a dimension or leader line.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `tip` | `THREE.Vector3` | The endpoint of the line (drawing local space). |
| `lineDir` | `THREE.Vector3` | Normalised direction FROM `tip` TOWARD the other endpoint. |
| `size` | `number` | Tick size in drawing local units. |

## Returns

`number`[]
