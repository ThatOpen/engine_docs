# Checkbox

Heloooooooooo

## Extends

- `LitElement`

## Implements

- [`HasValue`](../interfaces/HasValue.md)

## Properties

### checked

> **checked**: `boolean` = `false`

Indicates whether the checkbox is checked or not. This property reflects the checked state of the internal \<input\> element and can be used to set or get the checkbox's state. Changing this property dynamically updates the checkbox's visual state and its checked attribute.

#### Default

```ts
false
```

#### Examples

```ts
<bim-checkbox checked></bim-checkbox>
```

```ts
const checkbox = document.createElement('bim-checkbox');
checkbox.checked = true;
document.body.appendChild(checkbox);
```

***

### icon?

> `optional` **icon**: `string`

Represents the icon associated with the checkbox label. This icon is displayed next to the label text if provided. Changing this property dynamically updates the displayed icon if the label is present. It is used to visually enhance the checkbox by adding an icon.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-checkbox icon="check"></bim-checkbox>
```

```ts
const checkbox = document.createElement('bim-checkbox');
checkbox.icon = 'check';
document.body.appendChild(checkbox);
```

***

### inverted

> **inverted**: `boolean` = `false`

Indicates whether the checkbox is displayed with an inverted disposition.

#### Default

```ts
false
```

#### Examples

```ts
<bim-checkbox inverted></bim-checkbox>
```

```ts
const checkbox = document.createElement('bim-checkbox');
checkbox.inverted = true;
document.body.appendChild(checkbox);
```

***

### label?

> `optional` **label**: `string`

The label text associated with the checkbox. This text is displayed next to the checkbox itself. Changing this property dynamically updates the displayed label. If an icon is also specified, it will be displayed alongside this label.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-checkbox label="Accept Terms"></bim-checkbox>
```

```ts
const checkbox = document.createElement('bim-checkbox');
checkbox.label = 'Accept Terms';
document.body.appendChild(checkbox);
```

***

### name?

> `optional` **name**: `string`

The name attribute of the checkbox. It can be used to identify the checkbox when submitting a form or to reference the checkbox in JavaScript. Changing this property dynamically updates the name attribute of the internal \<input\> element.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-checkbox name="agreement"></bim-checkbox>
```

```ts
const checkbox = document.createElement('bim-checkbox');
checkbox.name = 'agreement';
document.body.appendChild(checkbox);
```

## Accessors

### value

> `get` **value**(): `boolean`

A getter that returns the current checked state of the checkbox. This is useful for retrieving the checkbox's value in form submissions or JavaScript interactions as it provides a consistent `value` property as many other components.

#### Default

```ts
false
```

#### Examples

```ts
<script>console.log(document.querySelector('bim-checkbox').value);</script>
```

```ts
const checkbox = document.createElement('bim-checkbox');
document.body.appendChild(checkbox);
console.log(checkbox.value); // false initially
```

#### Returns

`boolean`

## Events

### onValueChange

> `readonly` **onValueChange**: `Event`

Event that is dispatched when the checkbox's checked state changes.
This event can be used to listen for changes to the checkbox's value and perform
necessary actions when the value changes.

 change

#### Example

```ts
checkbox.addEventListener('change', (event) => {
  console.log('Checkbox value changed:', event.target.checked);
});
```

#### Implementation of

`HasValue.onValueChange`
