---
id: "thatopen_components.Event"
title: "Class: Event<T>"
sidebar_label: "Event"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).Event

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

[packages/core/src/core/Types/src/event.ts:15](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/event.ts#L15)

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

[packages/core/src/core/Types/src/event.ts:23](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/event.ts#L23)

___

### reset

▸ **reset**(): `void`

Gets rid of all the suscribed events.

#### Returns

`void`

#### Defined in

[packages/core/src/core/Types/src/event.ts:36](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/event.ts#L36)

___

### trigger

▸ **trigger**(`data?`): `void`

Triggers all the callbacks assigned to this event.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `T` |

#### Returns

`void`

#### Defined in

[packages/core/src/core/Types/src/event.ts:28](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/event.ts#L28)
