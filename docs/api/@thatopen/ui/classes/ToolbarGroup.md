# ToolbarGroup

A custom toolbar group web component for BIM applications. HTML tag: bim-toolbar-group

## Extends

- `LitElement`

## Accessors

### rows

> `set` **rows**(`value`): `void`

The number of rows in the grid layout. Clamped to a minimum of 1.

#### Default Value

```ts
2
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

***

### vertical

> `set` **vertical**(`value`): `void`

When `true`, the group renders its children in a vertical flow.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |
