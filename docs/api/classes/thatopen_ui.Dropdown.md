---
id: "thatopen_ui.Dropdown"
title: "Class: Dropdown"
sidebar_label: "Dropdown"
custom_edit_url: null
---

[@thatopen/ui](../modules/thatopen_ui.md).Dropdown

Heloooooooooo

## Hierarchy

- [`Component`](thatopen_ui.Component.md)

  ↳ **`Dropdown`**

## Implements

- [`HasValue`](../interfaces/thatopen_ui.HasValue.md)
- [`HasName`](../interfaces/thatopen_ui.HasName.md)

## Properties

### icon

• `Optional` **icon**: `string`

The icon to be displayed in the dropdown.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-dropdown icon="exampleIcon"></bim-dropdown>
```

**`Example`**

```ts
const dropdown = document.createElement('bim-dropdown');
dropdown.icon = 'exampleIcon';
```

#### Defined in

[packages/core/src/components/Dropdown/index.ts:82](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Dropdown/index.ts#L82)

___

### label

• `Optional` **label**: `string`

The label to be displayed in the dropdown.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-dropdown label="Example Label"></bim-dropdown>
```

**`Example`**

```ts
const dropdown = document.createElement('bim-dropdown');
dropdown.label = 'Example Label';
```

#### Implementation of

HasName.label

#### Defined in

[packages/core/src/components/Dropdown/index.ts:95](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Dropdown/index.ts#L95)

___

### multiple

• **multiple**: `boolean` = `false`

Indicates whether multiple options can be selected in the dropdown.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-dropdown multiple></bim-dropdown>
```

**`Example`**

```ts
const dropdown = document.createElement('bim-dropdown');
dropdown.multiple = true;
```

#### Defined in

[packages/core/src/components/Dropdown/index.ts:107](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Dropdown/index.ts#L107)

___

### name

• `Optional` **name**: `string`

The name of the dropdown.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-dropdown name="exampleName"></bim-dropdown>
```

**`Example`**

```ts
const dropdown = document.createElement('bim-dropdown');
dropdown.name = 'exampleName';
```

#### Implementation of

HasName.name

#### Defined in

[packages/core/src/components/Dropdown/index.ts:69](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Dropdown/index.ts#L69)

___

### required

• **required**: `boolean` = `false`

Indicates whether a selection is required in the dropdown.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-dropdown required></bim-dropdown>
```

**`Example`**

```ts
const dropdown = document.createElement('bim-dropdown');
dropdown.required = true;
```

#### Defined in

[packages/core/src/components/Dropdown/index.ts:119](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Dropdown/index.ts#L119)

___

### vertical

• **vertical**: `boolean` = `false`

Indicates whether the dropdown should be displayed vertically.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-dropdown vertical></bim-dropdown>
```

**`Example`**

```ts
const dropdown = document.createElement('bim-dropdown');
dropdown.vertical = true;
```

#### Defined in

[packages/core/src/components/Dropdown/index.ts:131](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Dropdown/index.ts#L131)

## Accessors

### value

• `set` **value**(`value`): `void`

The selected values in the dropdown.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any`[] |

#### Returns

`void`

**`Example`**

```ts
const dropdown = document.createElement('bim-dropdown');
dropdown.value = ['option1', 'option2'];
```

#### Implementation of

HasValue.value

#### Defined in

[packages/core/src/components/Dropdown/index.ts:170](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Dropdown/index.ts#L170)

___

### visible

• `set` **visible**(`value`): `void`

Indicates whether the dropdown it-self (not the component) is visible.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-dropdown visible></bim-dropdown>
```

**`Example`**

```ts
const dropdown = document.createElement('bim-dropdown');
dropdown.visible = true;
```

#### Defined in

[packages/core/src/components/Dropdown/index.ts:150](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Dropdown/index.ts#L150)

## Methods

### create

▸ **create**<`T`, `S`\>(`template`, `state`): [element: T, update: UpdateFunction<S\>]

Creates a new UI component instance based on the provided template and initial state.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `HTMLElement` | The type of the UI component element. |
| `S` | extends `Record`<`string`, `any`\> | The type of the component state. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template` | `StatefullComponent`<`S`\> | The stateful component template function. |
| `state` | `S` | The initial state of the component. |

#### Returns

[element: T, update: UpdateFunction<S\>]

An array containing the created UI component element and a function to update its state.

#### Inherited from

[Component](thatopen_ui.Component.md).[create](thatopen_ui.Component.md#create)

#### Defined in

[packages/core/src/core/Component/index.ts:92](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/core/Component/index.ts#L92)

▸ **create**<`T`\>(`template`): `T`

Creates a new UI component instance based on the provided template and initial state.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `HTMLElement` | The type of the UI component element. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template` | `StatelessComponent` | The stateless component template function. |

#### Returns

`T`

The created UI component element.

#### Inherited from

[Component](thatopen_ui.Component.md).[create](thatopen_ui.Component.md#create)

#### Defined in

[packages/core/src/core/Component/index.ts:106](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/core/Component/index.ts#L106)

## Events

### onValueChange

• **onValueChange**: `Event`

Event that is fired when the value of the dropdown changes.
This event is fired when the user selects or deselects an option.

 change

**`Example`**

```ts
dropdown.addEventListener('change', (event) => {
  console.log('Dropdown value changed:', event.target.value);
});
```

#### Implementation of

HasValue.onValueChange

#### Defined in

[packages/core/src/components/Dropdown/index.ts:209](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Dropdown/index.ts#L209)
