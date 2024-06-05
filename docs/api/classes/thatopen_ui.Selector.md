---
id: "thatopen_ui.Selector"
title: "Class: Selector"
sidebar_label: "Selector"
custom_edit_url: null
---

[@thatopen/ui](../modules/thatopen_ui.md).Selector

Heloooooooooo

## Hierarchy

- `LitElement`

  ↳ **`Selector`**

## Implements

- [`HasValue`](../interfaces/thatopen_ui.HasValue.md)
- [`HasName`](../interfaces/thatopen_ui.HasName.md)

## Accessors

### value

• `set` **value**(`value`): `void`

Sets the value of the selector.
It finds the matching option based on the provided value and sets it as the selected option.
If no matching option is found, it does nothing.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to set for the selector. |

#### Returns

`void`

#### Implementation of

HasValue.value

#### Defined in

[packages/core/src/components/Selector/index.ts:60](https://github.com/ThatOpen/engine_ui-components//blob/13aa680/packages/core/src/components/Selector/index.ts#L60)
