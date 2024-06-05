---
id: "thatopen_ui.Checkbox"
title: "Class: Checkbox"
sidebar_label: "Checkbox"
custom_edit_url: null
---

[@thatopen/ui](../modules/thatopen_ui.md).Checkbox

Heloooooooooo

## Hierarchy

- `LitElement`

  ↳ **`Checkbox`**

## Implements

- [`HasValue`](../interfaces/thatopen_ui.HasValue.md)

## Properties

### checked

• **checked**: `boolean` = `false`

Indicates whether the checkbox is checked or not. This property reflects the checked state of the internal \<input\> element and can be used to set or get the checkbox's state. Changing this property dynamically updates the checkbox's visual state and its checked attribute.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-checkbox checked></bim-checkbox>
```

**`Example`**

```ts
const checkbox = document.createElement('bim-checkbox');
checkbox.checked = true;
document.body.appendChild(checkbox);
```

#### Defined in

[packages/core/src/components/Checkbox/index.ts:93](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Checkbox/index.ts#L93)

___

### icon

• `Optional` **icon**: `string`

Represents the icon associated with the checkbox label. This icon is displayed next to the label text if provided. Changing this property dynamically updates the displayed icon if the label is present. It is used to visually enhance the checkbox by adding an icon.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-checkbox icon="check"></bim-checkbox>
```

**`Example`**

```ts
const checkbox = document.createElement('bim-checkbox');
checkbox.icon = 'check';
document.body.appendChild(checkbox);
```

#### Defined in

[packages/core/src/components/Checkbox/index.ts:55](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Checkbox/index.ts#L55)

___

### inverted

• **inverted**: `boolean` = `false`

Indicates whether the checkbox is displayed with an inverted disposition.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-checkbox inverted></bim-checkbox>
```

**`Example`**

```ts
const checkbox = document.createElement('bim-checkbox');
checkbox.inverted = true;
document.body.appendChild(checkbox);
```

#### Defined in

[packages/core/src/components/Checkbox/index.ts:106](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Checkbox/index.ts#L106)

___

### label

• `Optional` **label**: `string`

The label text associated with the checkbox. This text is displayed next to the checkbox itself. Changing this property dynamically updates the displayed label. If an icon is also specified, it will be displayed alongside this label.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-checkbox label="Accept Terms"></bim-checkbox>
```

**`Example`**

```ts
const checkbox = document.createElement('bim-checkbox');
checkbox.label = 'Accept Terms';
document.body.appendChild(checkbox);
```

#### Defined in

[packages/core/src/components/Checkbox/index.ts:81](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Checkbox/index.ts#L81)

___

### name

• `Optional` **name**: `string`

The name attribute of the checkbox. It can be used to identify the checkbox when submitting a form or to reference the checkbox in JavaScript. Changing this property dynamically updates the name attribute of the internal \<input\> element.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-checkbox name="agreement"></bim-checkbox>
```

**`Example`**

```ts
const checkbox = document.createElement('bim-checkbox');
checkbox.name = 'agreement';
document.body.appendChild(checkbox);
```

#### Defined in

[packages/core/src/components/Checkbox/index.ts:68](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Checkbox/index.ts#L68)

## Accessors

### value

• `get` **value**(): `boolean`

A getter that returns the current checked state of the checkbox. This is useful for retrieving the checkbox's value in form submissions or JavaScript interactions as it provides a consistent `value` property as many other components.

#### Returns

`boolean`

**`Default`**

```ts
false
```

**`Example`**

```ts
<script>console.log(document.querySelector('bim-checkbox').value);</script>
```

**`Example`**

```ts
const checkbox = document.createElement('bim-checkbox');
document.body.appendChild(checkbox);
console.log(checkbox.value); // false initially
```

#### Implementation of

HasValue.value

#### Defined in

[packages/core/src/components/Checkbox/index.ts:118](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Checkbox/index.ts#L118)

## Events

### onValueChange

• `Readonly` **onValueChange**: `Event`

Event that is dispatched when the checkbox's checked state changes.
This event can be used to listen for changes to the checkbox's value and perform
necessary actions when the value changes.

 change

**`Example`**

```ts
checkbox.addEventListener('change', (event) => {
  console.log('Checkbox value changed:', event.target.checked);
});
```

#### Implementation of

HasValue.onValueChange

#### Defined in

[packages/core/src/components/Checkbox/index.ts:133](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Checkbox/index.ts#L133)
