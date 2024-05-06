---
id: "openbim_components.UIElement"
title: "Class: UIElement<T>"
sidebar_label: "UIElement"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).UIElement

A simple object to handle UI components. You can use the generic constructor
to specify the types of your UI components.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

Release all the memory used by this instance deleting all the UI components
inside.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/base-types/ui-element.ts:37](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/ui-element.ts#L37)

___

### get

▸ **get**<`U`\>(`name`): `U`

Gets the UI Component with the given name. If it doesn't exist, it will
throw an error.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `SimpleUIComponent`<`HTMLElement`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | keyof `T` | the identifier of the UI component. |

#### Returns

`U`

#### Defined in

[src/base-types/ui-element.ts:17](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/ui-element.ts#L17)

___

### set

▸ **set**(`data`): `void`

Sets all the UI components of this instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `T` | all the UI components sorted by name in an object. |

#### Returns

`void`

#### Defined in

[src/base-types/ui-element.ts:29](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/ui-element.ts#L29)
