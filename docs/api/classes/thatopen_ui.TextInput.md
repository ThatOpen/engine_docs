---
id: "thatopen_ui.TextInput"
title: "Class: TextInput"
sidebar_label: "TextInput"
custom_edit_url: null
---

[@thatopen/ui](../modules/thatopen_ui.md).TextInput

Heloooooooooo

## Hierarchy

- `LitElement`

  ↳ **`TextInput`**

## Implements

- [`HasName`](../interfaces/thatopen_ui.HasName.md)
- [`HasValue`](../interfaces/thatopen_ui.HasValue.md)

## Properties

### debounce

• `Optional` **debounce**: `number`

Represents the debounce property of the TextInput component.
This property is used to control the delay in milliseconds before the `input` event is fired.
The `input` event is debounced to prevent excessive event firing when the user types rapidly.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-text-input debounce="500"></bim-text-input>
```

#### Defined in

[packages/core/src/components/TextInput/index.ts:133](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/TextInput/index.ts#L133)

___

### icon

• `Optional` **icon**: `string`

Represents the icon property of the TextInput component.
This property is used to display an icon next to the input field.

**`Example`**

```ts
<bim-text-input icon="material-symbols:search"></bim-text-input>
```

#### Defined in

[packages/core/src/components/TextInput/index.ts:62](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/TextInput/index.ts#L62)

___

### label

• `Optional` **label**: `string`

Represents the label property of the TextInput component.
This property is used to display a label above or next to the input field.

**`Example`**

```ts
<bim-text-input label="Name"></bim-text-input>
```

#### Implementation of

HasName.label

#### Defined in

[packages/core/src/components/TextInput/index.ts:72](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/TextInput/index.ts#L72)

___

### name

• `Optional` **name**: `string`

Represents the name property of the TextInput component.
This property is used to uniquely identify the input field within a form or group of inputs.

**`Example`**

```ts
<bim-text-input name="username"></bim-text-input>
```

#### Implementation of

HasName.name

#### Defined in

[packages/core/src/components/TextInput/index.ts:82](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/TextInput/index.ts#L82)

___

### placeholder

• `Optional` **placeholder**: `string`

Represents the placeholder property of the TextInput component.
This property is used to display a hint or a placeholder text inside the input field.
The placeholder text is displayed when the input field is empty and loses focus.

**`Example`**

```ts
<bim-text-input placeholder="Enter your name.."></bim-text-input>
```

#### Defined in

[packages/core/src/components/TextInput/index.ts:93](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/TextInput/index.ts#L93)

___

### value

• **value**: `string` = `""`

Represents the value property of the TextInput component.
This property is used to get or set the current value of the input field.

**`Example`**

```ts
// Get the current value
const currentValue = textInput.value;

// Set a new value
textInput.value = "New Value";
```

#### Implementation of

HasValue.value

#### Defined in

[packages/core/src/components/TextInput/index.ts:107](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/TextInput/index.ts#L107)

___

### vertical

• **vertical**: `boolean` = `false`

Represents the vertical property of the TextInput component.
This property is used to control the layout of the input field.
When set to `true`, the input field will be displayed vertically.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-text-input vertical></bim-text-input>
```

#### Defined in

[packages/core/src/components/TextInput/index.ts:120](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/TextInput/index.ts#L120)

## Accessors

### query

• `get` **query**(): ``null`` \| [`Query`](../modules/thatopen_ui.md#query)

Gets the query value derived from the current input value.
The `getQuery` function is assumed to be a utility function that takes a string as input
and returns a processed query value based on the input.

#### Returns

``null`` \| [`Query`](../modules/thatopen_ui.md#query)

The processed query value derived from the current input value.

**`Example`**

```typescript
const textInput = new TextInput();
textInput.value = "Key?Value";
console.log(textInput.query);
```

#### Defined in

[packages/core/src/components/TextInput/index.ts:172](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/TextInput/index.ts#L172)

___

### type

• `set` **type**(`value`): `void`

Sets the type of the input field.
The type property determines the behavior of the input field.
It can be any of the following: "date", "datetime-local", "email", "month", "password", "search", "tel", "text", "time", "url", "week".
If an invalid type is provided, the type will not be changed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

**`Example`**

```ts
// Set the type to "email"
textInput.type = "email";
```

#### Defined in

[packages/core/src/components/TextInput/index.ts:148](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/TextInput/index.ts#L148)
