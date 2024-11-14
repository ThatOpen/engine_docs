# Table\<T\>

A custom table web component for BIM applications. HTML tag: bim-table

## Extends

- `LitElement`

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`TableRowData`](../type-aliases/TableRowData.md) | [`TableRowData`](../type-aliases/TableRowData.md) |

## Properties

### dataTransform

> **dataTransform**: [`TableDataTransform`](../type-aliases/TableDataTransform.md)\<`T`\> = `{}`

A property representing the rules for transforming table data.
The keys of the object are the column names, and the values are functions that define the transformation logic.

#### Default Value

```ts
An empty object.
```

***

### expanded

> **expanded**: `boolean` = `false`

A boolean property that determines whether the table is expanded or not.
When `true`, the table will be expanded to show all rows.
When `false`, the table will be collapsed to show only the top-level rows.

#### Default Value

```ts
false
```

#### Examples

```typescript
table.expanded = true;
```

```html
<bim-table expanded></bim-table>
```

***

### filterFunction()?

> `optional` **filterFunction**: (`queryString`, `data`) => `boolean`

A function type representing the filter function for the table.
This function is used to determine whether a given row of data should be included in the filtered results.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `queryString` | `string` | The search string used to filter the data. |
| `data` | [`TableGroupData`](../interfaces/TableGroupData.md)\<`T`\> | The data row to be filtered. |

#### Returns

`boolean`

***

### headersHidden

> **headersHidden**: `boolean` = `false`

A boolean property that determines whether the table headers are hidden.

#### Remarks

This property can be used to hide the table headers when needed.

#### Default Value

```ts
false
```

#### Examples

```typescript
table.headersHidden = true;
```

```html
<bim-table headers-hidden></bim-table>
```

***

### indentationInText

> **indentationInText**: `boolean` = `false`

A boolean property that determines whether the table indentation should be included in the exported text.

#### Default Value

```ts
false
```

#### Example

```typescript
table.indentationInText = true;
```

***

### loadFunction?

> `optional` **loadFunction**: `TableLoadFunction`\<`T`\>

The function to be executed when loading async data using Table.loadData

***

### preserveStructureOnFilter

> **preserveStructureOnFilter**: `boolean` = `false`

A boolean property that determines whether the table preserves its structure when filtering.
When `true`, the table will preserve its structure, showing only the filtered rows and their parents.
When `false`, the table will not preserve its structure, showing only the filtered rows.

#### Default Value

```ts
false
```

#### Example

```typescript
table.preserveStructureOnFilter = true;
```

***

### styles

> `static` **styles**: `CSSResult`[]

CSS styles for the component.

#### Overrides

`LitElement.styles`

## Accessors

### columns

> `set` **columns**(`value`): `void`

Sets the columns for the table.
This property allows you to define the columns order for the table.
If this is not set, it will be computed from the `table.data` object.
The columns can be provided as an array of strings or objects of type `ColumnData`.
If the columns are provided as strings, they will be converted to `ColumnData` objects with a default width.

#### Example

```typescript
const columns: (string | ColumnData)[] = [
  "Column 1",
  "Column 2",
  { name: "Column 3", width: "200px" },
];
table.columns = columns;
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | ([`ColumnData`](../interfaces/ColumnData.md)\<`T`\> \| keyof `T`)[] | An array of strings or objects of type `ColumnData`. |

***

### csv

> `get` **csv**(): `string`

A getter function that generates a CSV (Comma Separated Values) representation of the table data.

#### Example

```typescript
const csvData = table.csv;
console.log(csvData); // Output: "Column 1,Column 2\nValue 1,Value 2\nValue 3,Value 4"
```

#### Returns

`string`

A string containing the CSV representation of the table data.

***

### data

> `set` **data**(`value`): `void`

Sets the data for the table.
This property allows you to define the data that will be displayed in the table.
The data is expected to be an array of `TableGroupData` objects.
If the columns are not explicitly set, they will be computed from the `data` object.

#### Example

```typescript
const data: TableGroupData[] = [
  { data: { "Column 1": "Value 1", "Column 2": "Value 2" } },
  { data: { "Column 1": "Value 3", "Column 2": "Value 4" } },
];
table.data = data;
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | [`TableGroupData`](../interfaces/TableGroupData.md)\<`T`\>[] | An array of `TableGroupData` objects representing the table data. |

***

### queryString

> `set` **queryString**(`_value`): `void`

Sets the search string for filtering the table data.
This property allows you to filter the table data based on a search string.
If a search string is provided, the table will only display rows that match the search criteria.
The search criteria can be a simple string or a complex query.
If a simple string is provided, the table will filter rows based on the string's presence in any column.
If a complex query is provided, the table will filter rows based on the query's conditions and values.

#### Examples

```typescript
table.queryString = "example";
```

```typescript
table.queryString = "column1="Jhon Doe" & column2=20";
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_value` | `null` \| `string` |

***

### tsv

> `get` **tsv**(): `string`

A getter function that generates a Tab Separated Values (TSV) representation of the table data.

#### Example

```typescript
const tsvData = table.tsv;
console.log(tsvData); // Output: "Column 1\tColumn 2\nValue 1\tValue 2\nValue 3\tValue 4"
```

#### Returns

`string`

A string containing the TSV representation of the table data.

***

### value

> `get` **value**(): [`TableGroupData`](../interfaces/TableGroupData.md)\<`T`\>[]

Getter for the `value` property.
Returns the filtered data if a search string is provided, otherwise returns the original data.

#### Example

```typescript
const tableValue = table.value;
console.log(tableValue); // Output: The filtered or original data.
```

#### Returns

[`TableGroupData`](../interfaces/TableGroupData.md)\<`T`\>[]

## Methods

### downloadData()

> **downloadData**(`fileName`, `format`): `void`

The `downloadData` method is used to download the table data in different formats.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `fileName` | `string` | `"BIM Table Data"` | The name of the downloaded file. Default is "BIM Table Data". |
| `format` | `"json"` \| `"tsv"` \| `"csv"` | `"json"` | The format of the downloaded file. Can be "json", "tsv", or "csv". Default is "json". |

#### Returns

`void`

- This method does not return any value.

#### Example

```typescript
table.downloadData("MyTableData", "tsv");
```

***

### loadData()

> **loadData**(`force`): `Promise`\<`boolean`\>

Asynchronously loads data into the table based on Table.loadFunction.
If the data is already available, just set it in Table.data.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `force` | `boolean` | `false` | A boolean indicating whether to force loading even if the table already has data. |

#### Returns

`Promise`\<`boolean`\>

- A promise that resolves to a boolean indicating whether the data loading was successful.
If the promise resolves to `true`, the data loading was successful.
If the promise resolves to `false`, the data loading was not successful.

#### Remarks

- If the table already has data and `force` is `false`, the function resolves to `false` without making any changes.
If the table already has data and `force` is `true`, the existing data is discarded before loading the new data.
If an error occurs during data loading, the function sets the `errorLoadingMessage` property with the error message and resolves to `false`.
