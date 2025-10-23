# ItemsDataState

UI State to render an item data table

## Properties

### components

> **components**: `Components`

The main entry point of @thatopen/components in your app

***

### emptySelectionWarning?

> `optional` **emptySelectionWarning**: `boolean`

Display a warning instead of the table in case there is no selection

#### Default

```ts
true
```

***

### modelIdMap

> **modelIdMap**: `object`

The collection of items per model to show its data in the table

#### Index signature

 \[`key`: `string`\]: `Set`\<`number`\>
