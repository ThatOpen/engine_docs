# Dropdown

A custom dropdown web component for BIM applications.

## Extends

- [`Component`](Component.md)

## Implements

- [`HasValue`](../interfaces/HasValue.md)
- [`HasName`](../interfaces/HasName.md)

## Properties

### icon?

> `optional` **icon**: `string`

The icon to be displayed in the dropdown.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-dropdown icon="exampleIcon"></bim-dropdown>
```

```ts
const dropdown = document.createElement('bim-dropdown');
dropdown.icon = 'exampleIcon';
```

***

### label?

> `optional` **label**: `string`

The label to be displayed in the dropdown.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-dropdown label="Example Label"></bim-dropdown>
```

```ts
const dropdown = document.createElement('bim-dropdown');
dropdown.label = 'Example Label';
```

#### Implementation of

`HasName.label`

***

### multiple

> **multiple**: `boolean` = `false`

Indicates whether multiple options can be selected in the dropdown.

#### Default

```ts
false
```

#### Examples

```ts
<bim-dropdown multiple></bim-dropdown>
```

```ts
const dropdown = document.createElement('bim-dropdown');
dropdown.multiple = true;
```

***

### name?

> `optional` **name**: `string`

The name of the dropdown.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-dropdown name="exampleName"></bim-dropdown>
```

```ts
const dropdown = document.createElement('bim-dropdown');
dropdown.name = 'exampleName';
```

#### Implementation of

`HasName.name`

***

### placeholder?

> `optional` **placeholder**: `string`

Represents the placeholder property of the component.
This property is used to display a hint or a placeholder text inside the input field.
The placeholder text is displayed when the input field is empty and loses focus.

#### Example

```ts
<bim-dropdown placeholder="Select something.."></bim-dropdown>
```

***

### required

> **required**: `boolean` = `false`

Indicates whether a selection is required in the dropdown.

#### Default

```ts
false
```

#### Examples

```ts
<bim-dropdown required></bim-dropdown>
```

```ts
const dropdown = document.createElement('bim-dropdown');
dropdown.required = true;
```

***

### vertical

> **vertical**: `boolean` = `false`

Indicates whether the dropdown should be displayed vertically.

#### Default

```ts
false
```

#### Examples

```ts
<bim-dropdown vertical></bim-dropdown>
```

```ts
const dropdown = document.createElement('bim-dropdown');
dropdown.vertical = true;
```

***

### styles

> `static` **styles**: `CSSResult`[]

CSS styles for the component.

#### Overrides

`Component.styles`

## Accessors

### value

> `set` **value**(`value`): `void`

The selected values in the dropdown.

#### Example

```ts
const dropdown = document.createElement('bim-dropdown');
dropdown.value = ['option1', 'option2'];
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `any`[] |

***

### visible

> `set` **visible**(`value`): `void`

Indicates whether the dropdown it-self (not the component) is visible.

#### Default

```ts
false
```

#### Examples

```ts
<bim-dropdown visible></bim-dropdown>
```

```ts
const dropdown = document.createElement('bim-dropdown');
dropdown.visible = true;
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

## Methods

### create()

#### create(template, state)

> `static` **create**\<`T`, `S`\>(`template`, `state`): [`T`, `UpdateFunction`\<`S`\>, () => `S`]

Creates a new UI component instance based on the provided template and initial state.

##### Type parameters

| Type parameter | Description |
| :------ | :------ |
| `T` *extends* `HTMLElement` | The type of the UI component element. |
| `S` *extends* `Record`\<`string`, `any`\> | The type of the component state. |

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `template` | [`StatefullComponent`](../type-aliases/StatefullComponent.md)\<`S`\> | The stateful component template function. |
| `state` | `S` | The initial state of the component. |

##### Returns

[`T`, `UpdateFunction`\<`S`\>, () => `S`]

An array containing the created UI component element and a function to update its state.

##### Inherited from

[`Component`](Component.md) . [`create`](Component.md#create)

#### create(template)

> `static` **create**\<`T`\>(`template`): `T`

Creates a new UI component instance based on the provided template and initial state.

##### Type parameters

| Type parameter | Description |
| :------ | :------ |
| `T` *extends* `HTMLElement` | The type of the UI component element. |

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `template` | [`StatelessComponent`](../type-aliases/StatelessComponent.md) | The stateless component template function. |

##### Returns

`T`

The created UI component element.

##### Inherited from

[`Component`](Component.md) . [`create`](Component.md#create)

## Events

### onValueChange

> **onValueChange**: `Event`

Event that is fired when the value of the dropdown changes.
This event is fired when the user selects or deselects an option.

 change

#### Example

```ts
dropdown.addEventListener('change', (event) => {
  console.log('Dropdown value changed:', event.target.value);
});
```

#### Implementation of

`HasValue.onValueChange`
