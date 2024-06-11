# ColorInput

Heloooooooooo

## Extends

- `LitElement`

## Implements

- [`HasValue`](../interfaces/HasValue.md)
- [`HasName`](../interfaces/HasName.md)

## Properties

### color

> **color**: `string` = `"#bcf124"`

The color value of the color input in hexadecimal format.

#### Default

```ts
#bcf124
```

#### Examples

```ts
<bim-color-input color="#ff0000"></bim-color-input>
```

```ts
const colorInput = document.createElement('bim-color-input');
colorInput.color = '#ff0000';
```

***

### icon?

> `optional` **icon**: `string`

The icon for the color input.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-color-input icon="palette"></bim-color-input>
```

```ts
const colorInput = document.createElement('bim-color-input');
colorInput.icon = 'palette';
```

***

### label?

> `optional` **label**: `string`

The label for the color input.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-color-input label="Select a color"></bim-color-input>
```

```ts
const colorInput = document.createElement('bim-color-input');
colorInput.label = 'Select a color';
```

#### Implementation of

`HasName.label`

***

### name?

> `optional` **name**: `string`

The name of the color input.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-color-input name="colorInput"></bim-color-input>
```

```ts
const colorInput = document.createElement('bim-color-input');
colorInput.name = 'colorInput';
```

#### Implementation of

`HasName.name`

***

### opacity?

> `optional` **opacity**: `number`

The opacity of the color input.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-color-input opacity="0.5"></bim-color-input>
```

```ts
const colorInput = document.createElement('bim-color-input');
colorInput.opacity = 0.5;
```

***

### vertical

> **vertical**: `boolean` = `false`

A boolean attribute which, if present, indicates that the color input should be displayed vertically.

#### Default

```ts
false
```

#### Examples

```ts
<bim-color-input vertical></bim-color-input>
```

```ts
const colorInput = document.createElement('bim-color-input');
colorInput.vertical = true;
```

## Accessors

### value

> `set` **value**(`_value`): `void`

Represents both the color and opacity values combined into a single object. This is an instance property, not an HTMLElement attribute.

#### Example

```ts
const colorInput = document.createElement('bim-color-input');
colorInput.value = { color: '#ff0000', opacity: 0.5 };
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_value` | `object` |
| `_value.color` | `string` |
| `_value.opacity`? | `number` |

## Methods

### focus()

> **focus**(): `void`

Focuses on the color input by programmatically triggering a click event on the underlying color input element.
If the color input element is not available, the function does nothing.

#### Returns

`void`

#### Overrides

`LitElement.focus`
