# listIdxByType()

> **listIdxByType**(`type`): `number`

Returns the argument index at which a given IFC type stores its list of
"related objects". Getting this wrong causes the rewriter to read the wrong
field, end up with an empty list, and skip the line entirely — dropping all
its transitive dependencies (property sets, materials, styles, etc.) from
the split output.

The default [IfcSplitterConfig.listArgIndex](../interfaces/IfcSplitterConfig.md#listargindex). Exported so an override
can delegate to it for the types it doesn't care about.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `string` |

## Returns

`number`
