---
id: "thatopen_ui.PanelSection"
title: "Class: PanelSection"
sidebar_label: "PanelSection"
custom_edit_url: null
---

[@thatopen/ui](../modules/thatopen_ui.md).PanelSection

Heloooooooooo

## Hierarchy

- `LitElement`

  ↳ **`PanelSection`**

## Implements

- [`HasName`](../interfaces/thatopen_ui.HasName.md)
- [`HasValue`](../interfaces/thatopen_ui.HasValue.md)

## Properties

### collapsed

• `Optional` **collapsed**: `boolean`

Controls the collapsed state of the panel section. When `collapsed` is true, the content of the section is hidden, and only the header is visible. This property can be toggled to show or hide the section's content, and is reflected to an attribute for easy HTML or JavaScript manipulation. Note that sections marked as `fixed` ignore changes to this property.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-panel-section collapsed></bim-panel-section>
```

**`Example`**

```ts
const section = document.createElement('bim-panel-section');
section.collapsed = true;
document.body.appendChild(section);
```

#### Defined in

[packages/core/src/components/Panel/src/Section.ts:145](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Panel/src/Section.ts#L145)

___

### fixed

• `Optional` **fixed**: `boolean`

Determines whether the panel section is fixed, meaning it cannot be collapsed or expanded. This is useful for sections that should always remain visible. When `fixed` is true, the collapse/expand icon is hidden, and clicking the header does not toggle the `collapsed` state. This property is reflected to an attribute, allowing it to be set declaratively in HTML or programmatically via JavaScript.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-panel-section fixed></bim-panel-section>
```

**`Example`**

```ts
const section = document.createElement('bim-panel-section');
section.fixed = true;
document.body.appendChild(section);
```

#### Defined in

[packages/core/src/components/Panel/src/Section.ts:132](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Panel/src/Section.ts#L132)

___

### icon

• `Optional` **icon**: `string`

Represents the icon to be displayed within the panel section. This icon is a visual cue that can be used alongside the label to provide additional context or to represent the section's content visually. When the `icon` property changes, the displayed icon updates accordingly. This property is reflected to an attribute, allowing for declarative usage in HTML as well as programmatic control in JavaScript.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-panel-section icon="settings"></bim-panel-section>
```

**`Example`**

```ts
const section = document.createElement('bim-panel-section');
section.icon = 'settings';
document.body.appendChild(section);
```

#### Defined in

[packages/core/src/components/Panel/src/Section.ts:93](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Panel/src/Section.ts#L93)

___

### label

• `Optional` **label**: `string`

Specifies the label for the panel section. This label is displayed prominently at the top of the section and serves as a title or heading. When the `label` property changes, the section's header updates to reflect the new label. This property takes precedence over the `name` property for display purposes and is also reflected to an attribute for HTML declaration or JavaScript manipulation.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-panel-section label="User Settings"></bim-panel-section>
```

**`Example`**

```ts
const section = document.createElement('bim-panel-section');
section.label = 'User Settings';
document.body.appendChild(section);
```

#### Implementation of

HasName.label

#### Defined in

[packages/core/src/components/Panel/src/Section.ts:106](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Panel/src/Section.ts#L106)

___

### name

• `Optional` **name**: `string`

Defines the name of the panel section, acting as an identifier. While similar to `label`, `name` is more suited for identification purposes rather than display. If `label` is not set, `name` can be displayed as a fallback in the section's header. The `name` property is reflected to an attribute, enabling both HTML and JavaScript interactions.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-panel-section name="user-settings"></bim-panel-section>
```

**`Example`**

```ts
const section = document.createElement('bim-panel-section');
section.name = 'user-settings';
document.body.appendChild(section);
```

#### Implementation of

HasName.name

#### Defined in

[packages/core/src/components/Panel/src/Section.ts:119](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Panel/src/Section.ts#L119)

## Accessors

### value

• `get` **value**(): `Record`<`string`, `any`\>

The `value` getter computes and returns the current state of the panel section's form elements as an object. This object's keys are the `name` or `label` attributes of the child elements, and the values are the corresponding values of these elements. This property is particularly useful for retrieving a consolidated view of the user's input or selections within the panel section. When the value of any child element changes, the returned object from this getter will reflect those changes, providing a dynamic snapshot of the panel section's state. Note that this property does not have a default value as it dynamically reflects the current state of the panel section's form elements.

#### Returns

`Record`<`string`, `any`\>

**`Example`**

```ts
<bim-panel-section></bim-panel-section> <!-- Usage in HTML not directly applicable as this is a getter -->
```

**`Example`**

```ts
const section = document.createElement('bim-panel-section');
console.log(section.value); // Logs the current value object
```

#### Implementation of

HasValue.value

#### Defined in

[packages/core/src/components/Panel/src/Section.ts:157](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Panel/src/Section.ts#L157)

• `set` **value**(`data`): `void`

The `value` setter allows programmatically updating the values of the panel section's child elements. It accepts an object where keys correspond to the `name` or `label` attributes of the child elements, and the values are the new values to be set for these elements. This property is useful for initializing the panel section with specific values or updating its state based on external data. When the property changes, the corresponding child elements' values are updated to reflect the new state. This does not have a default value as it is a method for updating child elements' values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

`void`

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-panel-section></bim-panel-section> <!-- Usage in HTML not directly applicable as this is a setter -->
```

**`Example`**

```ts
const section = document.createElement('bim-panel-section');
section.value = { 'user-settings': 'John Doe' }; // Programmatically sets the value of a child element named 'user-settings'
```

#### Implementation of

HasValue.value

#### Defined in

[packages/core/src/components/Panel/src/Section.ts:171](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Panel/src/Section.ts#L171)
