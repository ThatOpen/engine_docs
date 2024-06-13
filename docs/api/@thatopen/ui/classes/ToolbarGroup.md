# ToolbarGroup

A custom toolbar group web component for BIM applications. HTML tag: bim-toolbar-group

## Extends

- `LitElement`

## Properties

### rows

> **rows**: `number` = `2`

The number of rows to display in the toolbar group.

#### Default Value

```ts
2
```

***

### styles

> `static` **styles**: `CSSResult`

CSS styles for the component.

#### Overrides

`LitElement.styles`

## Accessors

### vertical

> `set` **vertical**(`value`): `void`

Sets the vertical property of the ToolbarGroup.
When vertical is true, the toolbar group will display its children vertically.
When vertical is false, the toolbar group will display its children horizontally.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |
