---
id: "thatopen_components.NavigationMode"
title: "Interface: NavigationMode"
sidebar_label: "NavigationMode"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).NavigationMode

An object that determines the behavior of the camera controls
and the user input (e.g. 2D floor plan mode, first person mode, etc).

## Implemented by

- [`FirstPersonMode`](../classes/thatopen_components.FirstPersonMode.md)
- [`OrbitMode`](../classes/thatopen_components.OrbitMode.md)
- [`PlanMode`](../classes/thatopen_components.PlanMode.md)

## Properties

### enabled

• **enabled**: `boolean`

Whether this navigation mode is active or not.

#### Defined in

[packages/core/src/core/OrthoPerspectiveCamera/src/types.ts:30](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/OrthoPerspectiveCamera/src/types.ts#L30)

___

### id

• **id**: [`NavModeID`](../modules/thatopen_components.md#navmodeid)

The unique ID of this navigation mode.

#### Defined in

[packages/core/src/core/OrthoPerspectiveCamera/src/types.ts:17](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/OrthoPerspectiveCamera/src/types.ts#L17)

___

### set

• **set**: (`active`: `boolean`, `options?`: `any`) => `void`

#### Type declaration

▸ (`active`, `options?`): `void`

Enable or disable this navigation mode.
When a new navigation mode is enabled, the previous navigation mode
must be disabled.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | whether to enable or disable this mode. |
| `options?` | `any` | any additional data required to enable or disable it. |

##### Returns

`void`

#### Defined in

[packages/core/src/core/OrthoPerspectiveCamera/src/types.ts:27](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/OrthoPerspectiveCamera/src/types.ts#L27)
