# DxfWriteContext

Write-context passed to custom system exporters registered via
[DxfExporter.registerSystemExporter](../classes/DxfExporter.md#registersystemexporter).

## Methods

### writeMeshTriangles()

> **writeMeshTriangles**(`triangles`, `layer`?, `aciColor`?): `void`

Writes a flat XYZ triangle array (9 values per triangle) as DXF SOLID entities.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `triangles` | `number`[] |
| `layer`? | `string` |
| `aciColor`? | `number` |

#### Returns

`void`
