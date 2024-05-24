---
id: "thatopen_ui.ColorInput"
title: "Class: ColorInput"
sidebar_label: "ColorInput"
custom_edit_url: null
---

[@thatopen/ui](../modules/thatopen_ui.md).ColorInput

Heloooooooooo

## Hierarchy

- `LitElement`

  ↳ **`ColorInput`**

## Implements

- [`HasValue`](../interfaces/thatopen_ui.HasValue.md)
- [`HasName`](../interfaces/thatopen_ui.HasName.md)

## Properties

### color

• **color**: `string` = `"#bcf124"`

The color value of the color input in hexadecimal format.

**`Default`**

```ts
#bcf124
```

**`Example`**

```ts
<bim-color-input color="#ff0000"></bim-color-input>
```

**`Example`**

```ts
const colorInput = document.createElement('bim-color-input');
colorInput.color = '#ff0000';
```

#### Defined in

[packages/core/src/components/ColorInput/index.ts:148](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/ColorInput/index.ts#L148)

___

### icon

• `Optional` **icon**: `string`

The icon for the color input.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-color-input icon="palette"></bim-color-input>
```

**`Example`**

```ts
const colorInput = document.createElement('bim-color-input');
colorInput.icon = 'palette';
```

#### Defined in

[packages/core/src/components/ColorInput/index.ts:111](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/ColorInput/index.ts#L111)

___

### label

• `Optional` **label**: `string`

The label for the color input.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-color-input label="Select a color"></bim-color-input>
```

**`Example`**

```ts
const colorInput = document.createElement('bim-color-input');
colorInput.label = 'Select a color';
```

#### Implementation of

HasName.label

#### Defined in

[packages/core/src/components/ColorInput/index.ts:98](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/ColorInput/index.ts#L98)

___

### name

• `Optional` **name**: `string`

The name of the color input.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-color-input name="colorInput"></bim-color-input>
```

**`Example`**

```ts
const colorInput = document.createElement('bim-color-input');
colorInput.name = 'colorInput';
```

#### Implementation of

HasName.name

#### Defined in

[packages/core/src/components/ColorInput/index.ts:85](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/ColorInput/index.ts#L85)

___

### opacity

• `Optional` **opacity**: `number`

The opacity of the color input.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-color-input opacity="0.5"></bim-color-input>
```

**`Example`**

```ts
const colorInput = document.createElement('bim-color-input');
colorInput.opacity = 0.5;
```

#### Defined in

[packages/core/src/components/ColorInput/index.ts:136](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/ColorInput/index.ts#L136)

___

### vertical

• **vertical**: `boolean` = `false`

A boolean attribute which, if present, indicates that the color input should be displayed vertically.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-color-input vertical></bim-color-input>
```

**`Example`**

```ts
const colorInput = document.createElement('bim-color-input');
colorInput.vertical = true;
```

#### Defined in

[packages/core/src/components/ColorInput/index.ts:123](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/ColorInput/index.ts#L123)

## Accessors

### value

• `set` **value**(`_value`): `void`

Represents both the color and opacity values combined into a single object. This is an instance property, not an HTMLElement attribute.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `Object` |
| `_value.color` | `string` |
| `_value.opacity?` | `number` |

#### Returns

`void`

**`Example`**

```ts
const colorInput = document.createElement('bim-color-input');
colorInput.value = { color: '#ff0000', opacity: 0.5 };
```

#### Implementation of

HasValue.value

#### Defined in

[packages/core/src/components/ColorInput/index.ts:162](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/ColorInput/index.ts#L162)

## Methods

### focus

▸ **focus**(): `void`

Focuses on the color input by programmatically triggering a click event on the underlying color input element.
If the color input element is not available, the function does nothing.

#### Returns

`void`

#### Overrides

LitElement.focus

#### Defined in

[packages/core/src/components/ColorInput/index.ts:208](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/ColorInput/index.ts#L208)
