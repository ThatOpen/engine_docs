# TableGroupData\<T\>

Represents a group of table rows with optional children.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`TableRowData`](../type-aliases/TableRowData.md) | [`TableRowData`](../type-aliases/TableRowData.md) |

## Properties

### id?

> `optional` **id**: `string`

Optional stable identity of this row. It lets the table keep the row's
element (and therefore its expand/collapse state) when new data objects
describing the same rows are assigned to the table, instead of recreating
every row. It is not a cell value and does not create a column.

Ids must be unique across the whole table. If the same id appears more than
once among sibling rows, the first one keeps the id-based identity, the others
fall back to object identity, and the table logs a warning.

Rows without an `id` are identified by object reference, as before.
