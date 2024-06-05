---
id: "thatopen_ui.Tab"
title: "Class: Tab"
sidebar_label: "Tab"
custom_edit_url: null
---

[@thatopen/ui](../modules/thatopen_ui.md).Tab

Heloooooooooo

## Hierarchy

- `LitElement`

  ↳ **`Tab`**

## Properties

### icon

• `Optional` **icon**: `string`

The icon of the tab. This property is optional and can be used to display an icon next to the tab's label or name.

#### Defined in

[packages/core/src/components/Tabs/src/Tab.ts:38](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Tabs/src/Tab.ts#L38)

___

### label

• `Optional` **label**: `string`

The label of the tab. This property is optional and can be used to display a custom label instead of the tab's name.

#### Defined in

[packages/core/src/components/Tabs/src/Tab.ts:32](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Tabs/src/Tab.ts#L32)

___

### name

• **name**: `string`

The name of the tab. If not provided, a default name will be assigned based on its position in the parent element.

#### Defined in

[packages/core/src/components/Tabs/src/Tab.ts:26](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Tabs/src/Tab.ts#L26)

## Accessors

### hidden

• `set` **hidden**(`value`): `void`

Sets the hidden state of the tab.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The new hidden state. If `true`, the tab will be hidden. If `false`, the tab will be visible. |

#### Returns

`void`

**`Fires`**

hiddenchange - Dispatched when the hidden state changes.

**`Example`**

```typescript
const tab = document.querySelector('bim-tab');
tab.hidden = true; // hides the tab
```

#### Overrides

LitElement.hidden

#### Defined in

[packages/core/src/components/Tabs/src/Tab.ts:55](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Tabs/src/Tab.ts#L55)
