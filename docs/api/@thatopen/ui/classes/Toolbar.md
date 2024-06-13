# Toolbar

A custom toolbar web component for BIM applications. HTML tag: bim-toolbar

## Extends

- `LitElement`

## Properties

### labelsHidden

> **labelsHidden**: `boolean` = `false`

Property indicating whether labels are hidden in the toolbar.
When `labelsHidden` is `true`, labels in the toolbar sections will be hidden.
When `labelsHidden` is `false`, labels in the toolbar sections will be visible.

#### Default Value

```ts
false
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

Sets the vertical property of the toolbar.
When vertical is true, the toolbar will be displayed in a vertical layout.
When vertical is false, the toolbar will be displayed in a horizontal layout.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |
