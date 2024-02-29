---
id: "openbim_components.NavigationMode"
title: "Interface: NavigationMode"
sidebar_label: "NavigationMode"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).NavigationMode

An object that determines the behavior of the camera controls
and the user input (e.g. 2D floor plan mode, first person mode, etc).

## Properties

### enabled

• **enabled**: `boolean`

Whether this navigation mode is active or not.

#### Defined in

[temp/engine_components/src/navigation/OrthoPerspectiveCamera/src/types.ts:33](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/navigation/OrthoPerspectiveCamera/src/types.ts#L33)

___

### id

• **id**: [`NavModeID`](../modules/openbim_components.md#navmodeid)

The unique ID of this navigation mode.

#### Defined in

[temp/engine_components/src/navigation/OrthoPerspectiveCamera/src/types.ts:20](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/navigation/OrthoPerspectiveCamera/src/types.ts#L20)

___

### projectionChanged

• **projectionChanged**: [`Event`](../classes/openbim_components.Event.md)<`Camera`\>

Event that should fire when the camera [CameraProjection](../modules/openbim_components.md#cameraprojection) changes.

#### Defined in

[temp/engine_components/src/navigation/OrthoPerspectiveCamera/src/types.ts:38](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/navigation/OrthoPerspectiveCamera/src/types.ts#L38)

___

### toggle

• **toggle**: (`active`: `boolean`, `options?`: `any`) => `void`

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

[temp/engine_components/src/navigation/OrthoPerspectiveCamera/src/types.ts:30](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/navigation/OrthoPerspectiveCamera/src/types.ts#L30)
