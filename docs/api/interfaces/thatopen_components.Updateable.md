---
id: "thatopen_components.Updateable"
title: "Interface: Updateable"
sidebar_label: "Updateable"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).Updateable

Whether this component should be updated each frame.

## Implemented by

- [`SimpleCamera`](../classes/thatopen_components.SimpleCamera.md)

## Properties

### onAfterUpdate

• **onAfterUpdate**: [`Event`](../classes/thatopen_components.Event.md)<`any`\>

Actions that should be executed after updating the component.

#### Defined in

[packages/core/src/core/Types/src/interfaces.ts:66](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/interfaces.ts#L66)

___

### onBeforeUpdate

• **onBeforeUpdate**: [`Event`](../classes/thatopen_components.Event.md)<`any`\>

Actions that should be executed before updating the component.

#### Defined in

[packages/core/src/core/Types/src/interfaces.ts:69](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/interfaces.ts#L69)

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

[packages/core/src/core/Types/src/interfaces.ts:75](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/interfaces.ts#L75)
