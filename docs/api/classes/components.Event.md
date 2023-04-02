---
id: "components.Event"
title: "Class: Event<T>"
sidebar_label: "Event"
custom_edit_url: null
---

[components](../modules/components.md).Event

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

## Properties

### trigger

• **trigger**: `T` extends `void` ? () => `void` : (`data?`: `T`) => `void`

Triggers all the callbacks assigned to this event.

#### Defined in

components/types/base-types.ts:32

## Methods

### off

▸ **off**(`handler`): `void`

Removes a callback from this event instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | `T` extends `void` ? () => `void` : (`data`: `T`) => `void` | the callback to be removed from this event. |

#### Returns

`void`

#### Defined in

components/types/base-types.ts:25

___

### on

▸ **on**(`handler`): `void`

Add a callback to this event instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | `T` extends `void` ? () => `void` : (`data`: `T`) => `void` | the callback to be added to this event. |

#### Returns

`void`

#### Defined in

components/types/base-types.ts:17

___

### reset

▸ **reset**(): `void`

Gets rid of all the suscribed events.

#### Returns

`void`

#### Defined in

components/types/base-types.ts:42
