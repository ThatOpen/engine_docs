---
id: "thatopen_components_front.LengthMeasurement"
title: "Class: LengthMeasurement"
sidebar_label: "LengthMeasurement"
custom_edit_url: null
---

[@thatopen/components-front](../modules/thatopen_components_front.md).LengthMeasurement

A basic dimension tool to measure distances between 2 points in 3D and
display a 3D symbol displaying the numeric value.

## Hierarchy

- `Component`

  ↳ **`LengthMeasurement`**

## Implements

- `Createable`
- `Hideable`
- `Disposable`
- `Updateable`

## Properties

### snapDistance

• **snapDistance**: `number` = `0.25`

The minimum distance to force the dimension cursor to a vertex.

#### Defined in

[packages/front/src/measurement/LengthMeasurement/index.ts:24](https://github.com/ThatOpen/engine_components/blob/630a314/packages/front/src/measurement/LengthMeasurement/index.ts#L24)

## Methods

### cancelCreation

▸ **cancelCreation**(): `void`

Cancels the drawing of the current dimension.

#### Returns

`void`

#### Implementation of

OBC.Createable.cancelCreation

#### Defined in

[packages/front/src/measurement/LengthMeasurement/index.ts:178](https://github.com/ThatOpen/engine_components/blob/630a314/packages/front/src/measurement/LengthMeasurement/index.ts#L178)

___

### create

▸ **create**(`data?`): `void`

Starts or finishes drawing a new dimension line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | `any` | forces the dimension to be drawn on a plane. Use this if you are drawing dimensions in floor plan navigation. |

#### Returns

`void`

#### Implementation of

OBC.Createable.create

#### Defined in

[packages/front/src/measurement/LengthMeasurement/index.ts:119](https://github.com/ThatOpen/engine_components/blob/630a314/packages/front/src/measurement/LengthMeasurement/index.ts#L119)

___

### delete

▸ **delete**(): `void`

Deletes the dimension that the user is hovering over with the mouse or touch event.

#### Returns

`void`

#### Implementation of

OBC.Createable.delete

#### Defined in

[packages/front/src/measurement/LengthMeasurement/index.ts:138](https://github.com/ThatOpen/engine_components/blob/630a314/packages/front/src/measurement/LengthMeasurement/index.ts#L138)

___

### deleteAll

▸ **deleteAll**(): `void`

Deletes all the dimensions that have been previously created.

#### Returns

`void`

#### Defined in

[packages/front/src/measurement/LengthMeasurement/index.ts:170](https://github.com/ThatOpen/engine_components/blob/630a314/packages/front/src/measurement/LengthMeasurement/index.ts#L170)

___

### dispose

▸ **dispose**(): `void`

Disposable.dispose

#### Returns

`void`

#### Implementation of

OBC.Disposable.dispose

#### Defined in

[packages/front/src/measurement/LengthMeasurement/index.ts:93](https://github.com/ThatOpen/engine_components/blob/630a314/packages/front/src/measurement/LengthMeasurement/index.ts#L93)
