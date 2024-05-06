---
id: "openbim_components.Updateable"
title: "Interface: Updateable"
sidebar_label: "Updateable"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).Updateable

Whether this component should be updated each frame.

## Implemented by

- [`CubeMap`](../classes/openbim_components.CubeMap.md)
- [`LengthMeasurement`](../classes/openbim_components.LengthMeasurement.md)
- [`Simple2DScene`](../classes/openbim_components.Simple2DScene.md)
- [`SimpleCamera`](../classes/openbim_components.SimpleCamera.md)
- [`SimpleRenderer`](../classes/openbim_components.SimpleRenderer.md)

## Properties

### onAfterUpdate

• **onAfterUpdate**: [`Event`](../classes/openbim_components.Event.md)<`any`\>

Actions that should be executed after updating the component.

#### Defined in

[src/base-types/base-types.ts:109](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-types.ts#L109)

___

### onBeforeUpdate

• **onBeforeUpdate**: [`Event`](../classes/openbim_components.Event.md)<`any`\>

Actions that should be executed before updating the component.

#### Defined in

[src/base-types/base-types.ts:112](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-types.ts#L112)

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

[src/base-types/base-types.ts:118](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-types.ts#L118)
