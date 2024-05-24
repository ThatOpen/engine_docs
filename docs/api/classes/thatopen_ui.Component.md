---
id: "thatopen_ui.Component"
title: "Class: Component"
sidebar_label: "Component"
custom_edit_url: null
---

[@thatopen/ui](../modules/thatopen_ui.md).Component

Heloooooooooo

## Hierarchy

- `LitElement`

  ↳ **`Component`**

  ↳↳ [`Dropdown`](thatopen_ui.Dropdown.md)

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

#### Defined in

[packages/core/src/core/Component/index.ts:92](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/core/Component/index.ts#L92)

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

#### Defined in

[packages/core/src/core/Component/index.ts:106](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/core/Component/index.ts#L106)
