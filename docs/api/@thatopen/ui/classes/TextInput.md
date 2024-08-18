# TextInput

A custom text input web component for BIM applications. HTML tag: bim-text-input

## Extends

- `LitElement`

## Implements

- [`HasName`](../interfaces/HasName.md)
- [`HasValue`](../interfaces/HasValue.md)

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

Gets the query value derived from the current input value.
The `getQuery` function is assumed to be a utility function that takes a string as input
and returns a processed query value based on the input.

#### Example

```typescript
const textInput = new TextInput();
textInput.value = "Key?Value";
console.log(textInput.query);
```

#### Returns

`null` \| [`Query`](../type-aliases/Query.md)

The processed query value derived from the current input value.

***

### type

> `set` **type**(`value`): `void`

Sets the type of the input field.
The type property determines the behavior of the input field.
It can be any of the following: "date", "datetime-local", "email", "month", "password", "search", "tel", "text", "time", "url", "week".
If an invalid type is provided, the type will not be changed.

#### Example

```ts
// Set the type to "email"
textInput.type = "email";
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |
