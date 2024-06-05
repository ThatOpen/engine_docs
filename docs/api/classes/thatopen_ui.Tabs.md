---
id: "thatopen_ui.Tabs"
title: "Class: Tabs"
sidebar_label: "Tabs"
custom_edit_url: null
---

[@thatopen/ui](../modules/thatopen_ui.md).Tabs

Heloooooooooo

## Hierarchy

- `LitElement`

  ↳ **`Tabs`**

## Properties

### bottom

• **bottom**: `boolean` = `false`

Indicates whether the tabs are positioned at the bottom of the container.

**`Default`**

```ts
false
```

#### Defined in

[packages/core/src/components/Tabs/src/Tabs.ts:131](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Tabs/src/Tabs.ts#L131)

___

### switchersHidden

• **switchersHidden**: `boolean` = `false`

Indicates whether the tab switchers are hidden or not.

**`Default`**

```ts
false
```

#### Defined in

[packages/core/src/components/Tabs/src/Tabs.ts:139](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Tabs/src/Tabs.ts#L139)

## Accessors

### tab

• `set` **tab**(`value`): `void`

Sets the active tab based on the provided name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `undefined` \| `string` | The name of the tab to be set as active. If `undefined`, no tab will be selected. |

#### Returns

`void`

**`Remarks`**

This method iterates through all child elements, finds the matching tab by name,
and sets its `hidden` property to `false`. It also updates the corresponding tab switcher's
`data-active` attribute to reflect the active state.

If the provided `value` does not match any tab name, no tab will be selected.

If the `tab` property is already set to the provided `value`, this method will deselect all tabs
by setting the `tab` property to `undefined`.

**`Example`**

```typescript
// Set the active tab to "tab1"
tabs.tab = "tab1";

// Deselect all tabs
tabs.tab = undefined;
```

#### Defined in

[packages/core/src/components/Tabs/src/Tabs.ts:169](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Tabs/src/Tabs.ts#L169)
