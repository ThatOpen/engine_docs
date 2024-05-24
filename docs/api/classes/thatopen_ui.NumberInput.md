---
id: "thatopen_ui.NumberInput"
title: "Class: NumberInput"
sidebar_label: "NumberInput"
custom_edit_url: null
---

[@thatopen/ui](../modules/thatopen_ui.md).NumberInput

Heloooooooooo

## Hierarchy

- `LitElement`

  ↳ **`NumberInput`**

## Implements

- [`HasValue`](../interfaces/thatopen_ui.HasValue.md)
- [`HasName`](../interfaces/thatopen_ui.HasName.md)

## Properties

### icon

• `Optional` **icon**: `string`

The `icon` property allows specifying an icon identifier to be used within the number input component,
potentially for decorative or instructional purposes. Changes to this property may affect the appearance
or layout of the component, depending on how the icon is used within the component's template.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-number-input icon="user-icon"></bim-number-input>
```

**`Example`**

```ts
const numberInput = document.createElement('bim-number-input');
numberInput.icon = 'user-icon';
document.body.appendChild(numberInput);
```

#### Defined in

[packages/core/src/components/NumberInput/index.ts:131](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/NumberInput/index.ts#L131)

___

### label

• `Optional` **label**: `string`

The `label` property is used to define a text label associated with the number input component.
This label can provide context or instructions to the user. When the label property changes,
the component updates to display the new label text.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-number-input label="Enter your age"></bim-number-input>
```

**`Example`**

```ts
const numberInput = document.createElement('bim-number-input');
numberInput.label = 'Enter your age';
document.body.appendChild(numberInput);
```

#### Implementation of

HasName.label

#### Defined in

[packages/core/src/components/NumberInput/index.ts:147](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/NumberInput/index.ts#L147)

___

### max

• `Optional` **max**: `number`

The `max` property defines the maximum value that can be entered in the number input component.
It is used to validate the input and ensure that the value does not exceed this maximum.
When the property changes, the component enforces the new maximum value.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-number-input max="100"></bim-number-input>
```

**`Example`**

```ts
const numberInput = document.createElement('bim-number-input');
numberInput.max = 100;
document.body.appendChild(numberInput);
```

#### Defined in

[packages/core/src/components/NumberInput/index.ts:253](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/NumberInput/index.ts#L253)

___

### min

• `Optional` **min**: `number`

The `min` property defines the minimum value that can be entered in the number input component.
It is used to validate the input and ensure that the value does not go below this minimum.
When the property changes, the component enforces the new minimum value.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-number-input min="0"></bim-number-input>
```

**`Example`**

```ts
const numberInput = document.createElement('bim-number-input');
numberInput.min = 0;
document.body.appendChild(numberInput);
```

#### Defined in

[packages/core/src/components/NumberInput/index.ts:179](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/NumberInput/index.ts#L179)

___

### name

• `Optional` **name**: `string`

The `name` property is used to specify the name of the number input component.
This can be useful for identifying the component in forms or JavaScript.
When the property changes, it updates the component's attribute to reflect the new name.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-number-input name="age"></bim-number-input>
```

**`Example`**

```ts
const numberInput = document.createElement('bim-number-input');
numberInput.name = 'age';
document.body.appendChild(numberInput);
```

#### Implementation of

HasName.name

#### Defined in

[packages/core/src/components/NumberInput/index.ts:115](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/NumberInput/index.ts#L115)

___

### pref

• `Optional` **pref**: `string`

The `pref` property is used to specify a prefix for the value in the number input component.
This could be a currency symbol, a unit, or any other kind of prefix. The prefix is displayed
inside the input field before the value. When the property changes, the displayed prefix updates accordingly.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-number-input pref="$"></bim-number-input>
```

**`Example`**

```ts
const numberInput = document.createElement('bim-number-input');
numberInput.pref = '$';
document.body.appendChild(numberInput);
```

#### Defined in

[packages/core/src/components/NumberInput/index.ts:163](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/NumberInput/index.ts#L163)

___

### sensitivity

• `Optional` **sensitivity**: `number`

The `sensitivity` property affects how sensitive the slider is to mouse movements when adjusting
the value. A higher sensitivity means smaller movements are needed to change the value. This property
is particularly relevant when the `slider` property is enabled. Changes to this property adjust how
the slider responds to input.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-number-input sensitivity="10"></bim-number-input>
```

**`Example`**

```ts
const numberInput = document.createElement('bim-number-input');
numberInput.sensitivity = 10;
document.body.appendChild(numberInput);
```

#### Defined in

[packages/core/src/components/NumberInput/index.ts:237](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/NumberInput/index.ts#L237)

___

### slider

• **slider**: `boolean` = `false`

The `slider` property enables a slider interface for the number input component, allowing users
to adjust the value by dragging the slider. When enabled, it changes the component's UI to include
a slider. When the property changes, the component toggles between a regular input field and a slider view.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-number-input slider></bim-number-input>
```

**`Example`**

```ts
const numberInput = document.createElement('bim-number-input');
numberInput.slider = true;
document.body.appendChild(numberInput);
```

#### Defined in

[packages/core/src/components/NumberInput/index.ts:299](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/NumberInput/index.ts#L299)

___

### step

• `Optional` **step**: `number`

The `step` property determines the amount by which the value should increase or decrease
when the user interacts with the component's stepping mechanism. It is used for incremental
changes to the value. When the property changes, the step size for value changes is updated.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-number-input step="5"></bim-number-input>
```

**`Example`**

```ts
const numberInput = document.createElement('bim-number-input');
numberInput.step = 5;
document.body.appendChild(numberInput);
```

#### Defined in

[packages/core/src/components/NumberInput/index.ts:220](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/NumberInput/index.ts#L220)

___

### suffix

• `Optional` **suffix**: `string`

The `suffix` property is used to specify a suffix for the value in the number input component.
Similar to the `pref` property, but the suffix is displayed after the value. It could be a unit of measure,
a percentage symbol, etc. When the property changes, the displayed suffix updates accordingly.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-number-input suffix="%"></bim-number-input>
```

**`Example`**

```ts
const numberInput = document.createElement('bim-number-input');
numberInput.suffix = '%';
document.body.appendChild(numberInput);
```

#### Defined in

[packages/core/src/components/NumberInput/index.ts:269](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/NumberInput/index.ts#L269)

___

### vertical

• **vertical**: `boolean` = `false`

The `vertical` property indicates whether the slider (if enabled) should be displayed vertically.
This can affect the layout and behavior of the slider component within the number input.
When the property changes, the orientation of the slider adjusts accordingly.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-number-input vertical></bim-number-input>
```

**`Example`**

```ts
const numberInput = document.createElement('bim-number-input');
numberInput.vertical = true;
document.body.appendChild(numberInput);
```

#### Defined in

[packages/core/src/components/NumberInput/index.ts:284](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/NumberInput/index.ts#L284)

## Accessors

### value

• `set` **value**(`data`): `void`

The `value` property represents the current value of the number input component.
It is a crucial property that holds the actual number input by the user or set programmatically.
Changes to this property update the displayed value in the component and can trigger validation
against the `min` and `max` properties if they are set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number` |

#### Returns

`void`

**`Default`**

```ts
0
```

**`Example`**

```ts
<bim-number-input value="10"></bim-number-input>
```

**`Example`**

```ts
const numberInput = document.createElement('bim-number-input');
numberInput.value = 10;
document.body.appendChild(numberInput);
```

#### Implementation of

HasValue.value

#### Defined in

[packages/core/src/components/NumberInput/index.ts:198](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/NumberInput/index.ts#L198)

## Methods

### focus

▸ **focus**(): `void`

Sets focus to the input element of the number input component.
This method is useful for programmatically focusing the input element, for example,
in response to a user action or to emphasize the input in the UI.

If the input element reference is not available (not yet rendered or disconnected),
this method will do nothing.

#### Returns

`void`

#### Overrides

LitElement.focus

#### Defined in

[packages/core/src/components/NumberInput/index.ts:408](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/NumberInput/index.ts#L408)
