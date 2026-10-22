# TextInput

A custom text input web component for BIM applications. HTML tag: bim-text-input

## Extends

- `LitElement`

## Implements

- [`HasName`](../interfaces/HasName.md)
- [`HasValue`](../interfaces/HasValue.md)\<`string`\>

## Properties

### debounce?

> `optional` **debounce**: `number`

Represents the debounce property of the TextInput component.
This property is used to control the delay in milliseconds before the `input` event is fired.
The `input` event is debounced to prevent excessive event firing when the user types rapidly.

#### Default

```ts
undefined
```

#### Example

```ts
<bim-text-input debounce="500"></bim-text-input>
```

***

### disabled

> **disabled**: `boolean` = `false`

Represents the disabled property of the TextInput component.
This property is used to disable the input field.
When set to `true`, the input field will be disabled and the user will not be able to interact with it.

#### Default

```ts
false
```

#### Example

```ts
<bim-text-input disabled></bim-text-input>
```

***

### icon?

> `optional` **icon**: `string`

Represents the icon property of the TextInput component.
This property is used to display an icon next to the input field.

#### Example

```ts
<bim-text-input icon="material-symbols:search"></bim-text-input>
```

***

### label?

> `optional` **label**: `string`

Represents the label property of the TextInput component.
This property is used to display a label above or next to the input field.

#### Example

```ts
<bim-text-input label="Name"></bim-text-input>
```

#### Implementation of

`HasName.label`

***

### name?

> `optional` **name**: `string`

Represents the name property of the TextInput component.
This property is used to uniquely identify the input field within a form or group of inputs.

#### Example

```ts
<bim-text-input name="username"></bim-text-input>
```

#### Implementation of

`HasName.name`

***

### ~~onValueChange~~

> **onValueChange**: `Event`

#### Deprecated

Listen for the "input" event on the element instead.

#### Implementation of

[`HasValue`](../interfaces/HasValue.md) . [`onValueChange`](../interfaces/HasValue.md#onvaluechange)

***

### placeholder?

> `optional` **placeholder**: `string`

Represents the placeholder property of the TextInput component.
This property is used to display a hint or a placeholder text inside the input field.
The placeholder text is displayed when the input field is empty and loses focus.

#### Example

```ts
<bim-text-input placeholder="Enter your name.."></bim-text-input>
```

***

### resize

> **resize**: `"inline"` \| `"none"` \| `"vertical"` \| `"both"` \| `"horizontal"` \| `"block"` = `"vertical"`

Represents the resize property of the TextInput component.
This property controls how the textarea can be resized.
Possible values: "none", "both", "horizontal", "vertical", "block", "inline"

#### Default

```ts
"vertical"
```

#### Example

```ts
<bim-text-input resize="both"></bim-text-input>
```

***

### value

> **value**: `string` = `""`

Represents the value property of the TextInput component.
This property is used to get or set the current value of the input field.

#### Example

```ts
// Get the current value
const currentValue = textInput.value;

// Set a new value
textInput.value = "New Value";
```

#### Implementation of

`HasValue.value`

***

### vertical

> **vertical**: `boolean` = `false`

Represents the vertical property of the TextInput component.
This property is used to control the layout of the input field.
When set to `true`, the input field will be displayed vertically.

#### Default

```ts
false
```

#### Example

```ts
<bim-text-input vertical></bim-text-input>
```

***

### styles

> `static` **styles**: `CSSResult`[]

CSS styles for the component.

#### Overrides

`LitElement.styles`

## Accessors

### query

> `get` **query**(): `null` \| [`Query`](../type-aliases/Query.md)

Returns the parsed query from the current value, or `null` if the value
cannot be parsed. Result is cached and invalidated when `value` changes.

#### Returns

`null` \| [`Query`](../type-aliases/Query.md)

***

### type

> `set` **type**(`value`): `void`

Sets the type of the input field.
Accepted values: "date", "datetime-local", "email", "month", "password", "search", "tel", "text", "time", "url", "week", "area" (renders a textarea).
If an invalid type is provided, the setter is ignored and a warning is logged.

#### Example

```ts
textInput.type = "email";
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `TextInputType` |
