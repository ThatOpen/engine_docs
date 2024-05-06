---
id: "openbim_components.Event"
title: "Class: Event<T>"
sidebar_label: "Event"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).Event

Simple event handler by
[Jason Kleban](https://gist.github.com/JasonKleban/50cee44960c225ac1993c922563aa540).
Keep in mind that:
- If you want to remove it later, you might want to declare the callback as
an object.
- If you want to maintain the reference to `this`, you will need to declare
the callback as an arrow function.

## Type parameters

| Name |
| :------ |
| `T` |

## Methods

### add

▸ **add**(`handler`): `void`

Add a callback to this event instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | `T` extends `void` ? () => `void` : (`data`: `T`) => `void` | the callback to be added to this event. |

#### Returns

`void`

#### Defined in

[src/base-types/base-types.ts:19](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-types.ts#L19)

___

### remove

▸ **remove**(`handler`): `void`

Removes a callback from this event instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | `T` extends `void` ? () => `void` : (`data`: `T`) => `void` | the callback to be removed from this event. |

#### Returns

`void`

#### Defined in

[src/base-types/base-types.ts:27](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-types.ts#L27)

___

### reset

▸ **reset**(): `void`

Gets rid of all the suscribed events.

#### Returns

`void`

#### Defined in

[src/base-types/base-types.ts:40](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-types.ts#L40)

___

### trigger

▸ **trigger**(`data?`): `Promise`<`void`\>

Triggers all the callbacks assigned to this event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `T` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/base-types/base-types.ts:32](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-types.ts#L32)
