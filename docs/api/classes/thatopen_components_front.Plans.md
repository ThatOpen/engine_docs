---
id: "thatopen_components_front.Plans"
title: "Class: Plans"
sidebar_label: "Plans"
custom_edit_url: null
---

[@thatopen/components-front](../modules/thatopen_components_front.md).Plans

Helper to control the camera and easily define and navigate 2D floor plans.

## Hierarchy

- `Component`

  ↳ **`Plans`**

## Implements

- `Disposable`

## Properties

### currentPlan

• **currentPlan**: ``null`` \| `PlanView` = `null`

The floorplan that is currently selected.

#### Defined in

[packages/front/src/fragments/Plans/index.ts:25](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/front/src/fragments/Plans/index.ts#L25)

___

### defaultCameraOffset

• **defaultCameraOffset**: `number` = `30`

The offset of the 2D camera to the floor plan elevation.

#### Defined in

[packages/front/src/fragments/Plans/index.ts:31](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/front/src/fragments/Plans/index.ts#L31)

___

### defaultSectionOffset

• **defaultSectionOffset**: `number` = `1.5`

The offset from the clipping planes to their respective floor plan elevation.

#### Defined in

[packages/front/src/fragments/Plans/index.ts:28](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/front/src/fragments/Plans/index.ts#L28)

___

### onDisposed

• `Readonly` **onDisposed**: `Event`<`unknown`\>

Disposable.onDisposed

#### Implementation of

OBC.Disposable.onDisposed

#### Defined in

[packages/front/src/fragments/Plans/index.ts:16](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/front/src/fragments/Plans/index.ts#L16)

## Methods

### create

▸ **create**(`config`): `void`

Creates a new floor plan in the navigator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `PlanView` | Necessary data to initialize the floor plan. |

#### Returns

`void`

#### Defined in

[packages/front/src/fragments/Plans/index.ts:97](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/front/src/fragments/Plans/index.ts#L97)

___

### dispose

▸ **dispose**(): `void`

Disposable.dispose

#### Returns

`void`

#### Implementation of

OBC.Disposable.dispose

#### Defined in

[packages/front/src/fragments/Plans/index.ts:48](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/front/src/fragments/Plans/index.ts#L48)

___

### exitPlanView

▸ **exitPlanView**(`animate?`): `Promise`<`void`\>

Deactivate navigator and go back to the previous view.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `animate` | `boolean` | `false` | Whether to animate the camera transition. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/front/src/fragments/Plans/index.ts:141](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/front/src/fragments/Plans/index.ts#L141)

___

### goTo

▸ **goTo**(`id`, `animate?`): `Promise`<`void`\>

Make the navigator go to the specified floor plan.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | Floor plan to go to. |
| `animate` | `boolean` | `false` | Whether to animate the camera transition. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/front/src/fragments/Plans/index.ts:119](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/front/src/fragments/Plans/index.ts#L119)
