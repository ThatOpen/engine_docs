# extract()

> **extract**(`deps`, `inputPath`, `elementIds`, `outputPath`): `void`

Extract specific building elements from an IFC file into a new IFC file.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `deps` | [`IfcSplitterDeps`](../interfaces/IfcSplitterDeps.md) | - |
| `inputPath` | `string` | Absolute or relative path to the source IFC file. |
| `elementIds` | `number`[] | Array of IFC entity IDs (`#id`) for the building elements to extract. Non-element or missing IDs are skipped with a warning. |
| `outputPath` | `string` | Path for the output IFC file. |

## Returns

`void`
