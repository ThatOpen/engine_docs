# TableGroupingTransform\<T\>

> **TableGroupingTransform**\<`T`\>: `{ [K in keyof T]?: Function }`

Represents a transformation function for grouping table data. Used to transform values before they are used for grouping logic. ALWAYS returns an array of strings representing the hierarchical path. Examples: Simple grouping: ["Architecture"], Two-level: ["Shared Information", "S1 - Coordination"], Multi-level: ["Shared Information", "S1 - Coordination", "S1.1 - Initial Coordination"]. The array length determines the hierarchy depth, independent of groupBy columns.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`TableRowData`](TableRowData.md) | [`TableRowData`](TableRowData.md) |
