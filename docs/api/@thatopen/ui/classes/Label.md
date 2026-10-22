# Label

A custom label web component for BIM applications. HTML tag: bim-label

## Extends

- `LitElement`

## Properties

### icon?

> `optional` **icon**: `string`

Specifies the icon to be displayed alongside the label.

#### Default

```ts
undefined
```

***

### iconHidden

> **iconHidden**: `boolean` = `false`

Controls the visibility of the icon.

#### Note

Attribute presence (not value) controls this boolean.

#### Default

```ts
false
```

***

### img?

> `optional` **img**: `string`

Specifies the image URL for the component. When set, an `<img>` element is rendered within the component.

#### Default

```ts
undefined
```

#### Example

```ts
<bim-label img="path/to/image.png">My Label</bim-label>
```

***

### label?

> `optional` **label**: `string`

Sets the label text programmatically, bypassing the slot.
Useful when building a dynamic UI via `document.createElement`.

#### Default

```ts
undefined
```

***

### labelHidden

> **labelHidden**: `boolean` = `false`

Controls the visibility of the label text.

#### Note

Attribute presence (not value) controls this boolean.
      `setAttribute("label-hidden", "false")` makes labelHidden `true`.

#### Default

```ts
false
```

***

### vertical

> **vertical**: `boolean` = `false`

Determines the orientation of the component. When `true`, contents are stacked vertically.

#### Default

```ts
false
```
