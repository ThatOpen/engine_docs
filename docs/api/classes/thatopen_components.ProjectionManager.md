---
id: "thatopen_components.ProjectionManager"
title: "Class: ProjectionManager"
sidebar_label: "ProjectionManager"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).ProjectionManager

Object to control the [CameraProjection](../modules/thatopen_components.md#cameraprojection) of the [OrthoPerspectiveCamera](thatopen_components.OrthoPerspectiveCamera.md).

## Properties

### matchOrthoDistanceEnabled

• **matchOrthoDistanceEnabled**: `boolean` = `false`

Match Ortho zoom with Perspective distance when changing projection mode

#### Defined in

[packages/core/src/core/OrthoPerspectiveCamera/src/projections.ts:27](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/OrthoPerspectiveCamera/src/projections.ts#L27)

___

### onChanged

• `Readonly` **onChanged**: [`Event`](thatopen_components.Event.md)<`PerspectiveCamera` \| `OrthographicCamera`\>

Event that fires when the [CameraProjection](../modules/thatopen_components.md#cameraprojection) changes.

#### Defined in

[packages/core/src/core/OrthoPerspectiveCamera/src/projections.ts:14](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/OrthoPerspectiveCamera/src/projections.ts#L14)

## Methods

### set

▸ **set**(`projection`): `Promise`<`void`\>

Sets the [CameraProjection](../modules/thatopen_components.md#cameraprojection) of the [OrthoPerspectiveCamera](thatopen_components.OrthoPerspectiveCamera.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `projection` | [`CameraProjection`](../modules/thatopen_components.md#cameraprojection) | the new projection to set. If it is the current projection, it will have no effect. |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/core/OrthoPerspectiveCamera/src/projections.ts:40](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/OrthoPerspectiveCamera/src/projections.ts#L40)

___

### toggle

▸ **toggle**(): `Promise`<`void`\>

Changes the current [CameraProjection](../modules/thatopen_components.md#cameraprojection) from Ortographic to Perspective
and vice versa.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/core/OrthoPerspectiveCamera/src/projections.ts:54](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/OrthoPerspectiveCamera/src/projections.ts#L54)
