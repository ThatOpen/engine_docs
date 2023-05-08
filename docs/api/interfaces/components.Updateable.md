---
id: "components.Updateable"
title: "Interface: Updateable"
sidebar_label: "Updateable"
custom_edit_url: null
---

[components](../modules/components.md).Updateable

Whether this component should be updated each frame.

## Implemented by

- [`SimpleCamera`](../classes/components.SimpleCamera.md)
- [`SimpleDimensions`](../classes/components.SimpleDimensions.md)
- [`SimplePlane`](../classes/components.SimplePlane.md)
- [`SimpleRenderer`](../classes/components.SimpleRenderer.md)

## Properties

### afterUpdate

• **afterUpdate**: [`Event`](../classes/components.Event.md)<`any`\>

Actions that should be executed after updating the component.

#### Defined in

temp/components/base-types/base-types.ts:99

___

### beforeUpdate

• **beforeUpdate**: [`Event`](../classes/components.Event.md)<`any`\>

Actions that should be executed before updating the component.

#### Defined in

temp/components/base-types/base-types.ts:102

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

temp/components/base-types/base-types.ts:108
