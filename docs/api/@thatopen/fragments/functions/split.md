# split()

> **split**(`deps`, `inputPath`, `numGroups`, `outputDir`?): `void`

Split an IFC file into N roughly equal groups of building elements.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `deps` | [`IfcSplitterDeps`](../interfaces/IfcSplitterDeps.md) | - |
| `inputPath` | `string` | Absolute or relative path to the source IFC file. |
| `numGroups` | `number` | Number of output files to produce (max 32). |
| `outputDir`? | `string` | Directory for output files. Defaults to `output/` next to the input file. |

## Returns

`void`
