---
id: "Updateable"
title: "Interface: Updateable"
sidebar_label: "Updateable"
sidebar_position: 0
custom_edit_url: null
---

Whether this component should be updated each frame.

## Implemented by

- [`SimpleCamera`](../classes/SimpleCamera.md)
- [`SimpleRenderer`](../classes/SimpleRenderer.md)

## Properties

### afterUpdate

• **afterUpdate**: [`Event`](../classes/Event.md)<`any`\>

Actions that should be executed after updating the component.

#### Defined in

types/base-types.ts:99

___

### beforeUpdate

• **beforeUpdate**: [`Event`](../classes/Event.md)<`any`\>

Actions that should be executed before updating the component.

#### Defined in

types/base-types.ts:102

## Methods

### update

▸ **update**(`delta?`): `void`

Function used to update the state of this component each frame. For
instance, a renderer component will make a render each frame.

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta?` | `number` |

#### Returns

`void`

#### Defined in

types/base-types.ts:108
