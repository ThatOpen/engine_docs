# detectDividers()

> **detectDividers**(`gridMatrix`): `GridDividerInfo`[]

Detects all dividers (vertical and horizontal) in a grid matrix. A divider exists where two adjacent areas have different names.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `gridMatrix` | (`null` \| `string`)[][] | 2D array representing the grid structure |

## Returns

`GridDividerInfo`[]

Array of divider information including type, position, and adjacent areas
