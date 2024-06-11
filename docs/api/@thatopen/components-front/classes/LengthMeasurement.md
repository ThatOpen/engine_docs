# LengthMeasurement

A basic dimension tool to measure distances between 2 points in 3D and display a 3D symbol displaying the numeric value.

## Extends

- `Component`

## Implements

- `Createable`
- `Hideable`
- `Disposable`
- `Updateable`

## Properties

### snapDistance

> **snapDistance**: `number` = `0.25`

The minimum distance to force the dimension cursor to a vertex.

## Methods

### cancelCreation()

> **cancelCreation**(): `void`

Cancels the drawing of the current dimension.

#### Returns

`void`

#### Implementation of

`OBC.Createable.cancelCreation`

***

### create()

> **create**(`data`?): `void`

Starts or finishes drawing a new dimension line.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data`? | `any` | forces the dimension to be drawn on a plane. Use this if you are drawing dimensions in floor plan navigation. |

#### Returns

`void`

#### Implementation of

`OBC.Createable.create`

***

### delete()

> **delete**(): `void`

Deletes the dimension that the user is hovering over with the mouse or touch event.

#### Returns

`void`

#### Implementation of

`OBC.Createable.delete`

***

### deleteAll()

> **deleteAll**(): `void`

Deletes all the dimensions that have been previously created.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Disposable.dispose

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`
