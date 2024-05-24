---
id: "thatopen_ui.Panel"
title: "Class: Panel"
sidebar_label: "Panel"
custom_edit_url: null
---

[@thatopen/ui](../modules/thatopen_ui.md).Panel

Heloooooooooo

## Hierarchy

- `LitElement`

  ↳ **`Panel`**

## Implements

- [`HasName`](../interfaces/thatopen_ui.HasName.md)
- [`HasValue`](../interfaces/thatopen_ui.HasValue.md)

## Properties

### icon

• `Optional` **icon**: `string`

Represents the icon to be displayed on the and panel and panel's activation button. This icon is a visual representation
that can be used to give users a hint about the panel's purpose or content. When the `icon` property changes,
the icon on the activation button is updated accordingly. This property is reflected to an attribute, meaning
any changes to the property will also update the corresponding attribute on the HTML element, and vice versa.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-panel icon="settings"></bim-panel>
```

**`Example`**

```ts
const panel = document.createElement('bim-panel');
panel.icon = 'settings';
document.body.appendChild(panel);
```

#### Defined in

[packages/core/src/components/Panel/src/Panel.ts:71](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Panel/src/Panel.ts#L71)

___

### label

• `Optional` **label**: `string`

The label of the panel, which is displayed on the panel's activation button. This property is intended
for a more descriptive text than what `name` might provide. If the `label` property is set, it takes
precedence over the `name` property for the button's display. When the `label` changes, the activation
button's label is updated to reflect this change. This property is also reflected to an attribute, ensuring
consistency between the property value and the HTML attribute.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-panel label="User Settings"></bim-panel>
```

**`Example`**

```ts
const panel = document.createElement('bim-panel');
panel.label = 'User Settings';
document.body.appendChild(panel);
```

#### Implementation of

HasName.label

#### Defined in

[packages/core/src/components/Panel/src/Panel.ts:106](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Panel/src/Panel.ts#L106)

___

### name

• `Optional` **name**: `string`

The name of the panel. This property serves as an identifier and can also be displayed on the panel's
activation button if the `label` property is not set. Changing the `name` property will update the label
of the activation button to reflect the new name if no label is explicitly provided. This property is
reflected to an attribute, allowing for synchronization between the property and the HTML attribute.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-panel name="user-settings"></bim-panel>
```

**`Example`**

```ts
const panel = document.createElement('bim-panel');
panel.name = 'user-settings';
document.body.appendChild(panel);
```

#### Implementation of

HasName.name

#### Defined in

[packages/core/src/components/Panel/src/Panel.ts:88](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Panel/src/Panel.ts#L88)

## Accessors

### hidden

• `set` **hidden**(`value`): `void`

Sets the hidden state of the panel.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The new hidden state. If `true`, the panel will be hidden. If `false`, the panel will be shown. |

#### Returns

`void`

**`Fires`**

hiddenchange - Fired when the hidden state changes.

#### Overrides

LitElement.hidden

#### Defined in

[packages/core/src/components/Panel/src/Panel.ts:119](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Panel/src/Panel.ts#L119)

___

### value

• `get` **value**(): `Record`<`string`, `any`\>

The `value` getter computes and returns the current state of the panel's form elements as an object. This property is dynamic and reflects the current input values within the panel. When accessed, it traverses the panel's child elements, collecting values from those that have a `name` or `label` attribute, and constructs an object where each key corresponds to the `name` or `label` of the element, and the value is the element's value. This property is particularly useful for forms or interactive panels where the user's input needs to be retrieved programmatically. The value returned is a snapshot of the panel's state at the time of access, and it does not maintain a live link to the input elements.

#### Returns

`Record`<`string`, `any`\>

**`Default`**

```ts
{}
```

**`Example`**

```ts
<bim-panel></bim-panel> <!-- Access via JavaScript to get value -->
```

**`Example`**

```ts
const panel = document.createElement('bim-panel');
document.body.appendChild(panel);
console.log(panel.value); // Logs the current value object of the panel
```

#### Implementation of

HasValue.value

#### Defined in

[packages/core/src/components/Panel/src/Panel.ts:140](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Panel/src/Panel.ts#L140)

• `set` **value**(`data`): `void`

The `value` setter allows programmatically updating the values of the panel's form elements. When a data object is passed to this property, it attempts to match the object's keys with the `name` or `label` attributes of the panel's child elements. If a match is found, the corresponding element's value is updated to the value associated with the key in the data object. This property is useful for initializing the panel with specific data or updating its state based on external inputs. Note that this operation does not affect elements without a matching `name` or `label`, and it only updates the values of elements that are direct children of the panel.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Record`<`string`, `any`\> |

#### Returns

`void`

**`Example`**

```ts
<bim-panel></bim-panel> <!-- Set value via JavaScript -->
```

**`Example`**

```ts
const panel = document.createElement('bim-panel');
document.body.appendChild(panel);
panel.value = { 'input-name': 'John Doe', 'checkbox-name': true };
```

#### Implementation of

HasValue.value

#### Defined in

[packages/core/src/components/Panel/src/Panel.ts:155](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Panel/src/Panel.ts#L155)

## Methods

### collapseSections

▸ **collapseSections**(): `void`

Collapses all `bim-panel-section` elements within the panel.
This method iterates over each `bim-panel-section` found within the panel's DOM and sets their `collapsed` property to `true`,
effectively hiding their content from view. This can be used to programmatically minimize the space taken up by sections
within the panel, making the panel more compact or to hide details that are not immediately necessary.

#### Returns

`void`

#### Defined in

[packages/core/src/components/Panel/src/Panel.ts:187](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Panel/src/Panel.ts#L187)

___

### expandSections

▸ **expandSections**(): `void`

Expands all `bim-panel-section` elements within the panel.
This method iterates over each `bim-panel-section` found within the panel's DOM and sets their `collapsed` property to `false`,
effectively showing their content. This can be used to programmatically reveal the content of sections within the panel,
making the panel more informative or to display details that are necessary for the user.

#### Returns

`void`

#### Defined in

[packages/core/src/components/Panel/src/Panel.ts:198](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Panel/src/Panel.ts#L198)
