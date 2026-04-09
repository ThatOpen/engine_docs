# AngleMeasurement

A measurement tool to measure angles between 3 points in 3D and display a visual arc with the numeric angle value.

## Extends

- [`Measurement`](Measurement.md) \<[`Angle`](Angle.md), `"angle"`\>

## Properties

### modes

> **modes**: `"free"`[]

The list of available measurement modes.

#### Overrides

`Measurement.modes`

## Accessors

### mode

> `get` **mode**(): `"free"`

The current measurement mode. Changing the mode cancels any in-progress creation.

#### Returns

`"free"`

## Methods

### cancelCreation()

> **cancelCreation**(): `void`

OBC.Createable.cancelCreation. Cancels the in-progress angle and disposes preview visuals.

#### Returns

`void`

#### Overrides

`Measurement.cancelCreation`

***

### create()

> **create**(): `Promise`\<`void`\>

OBC.Createable.create. Requires 3 successive calls (start, vertex, end) to complete an angle.

#### Returns

`Promise`\<`void`\>

#### Overrides

`Measurement.create`

***

### delete()

> **delete**(): `void`

OBC.Createable.delete. Deletes the angle measurement under the cursor via raycasting.

#### Returns

`void`

#### Overrides

`Measurement.delete`

***

### dispose()

> **dispose**(): `void`

OBC.Disposable.dispose.

#### Returns

`void`

#### Overrides

`Measurement.dispose`

***

### endCreation()

> **endCreation**(): `void`

OBC.Createable.endCreation. Finalizes the current angle after the third point is set.

#### Returns

`void`

#### Overrides

`Measurement.endCreation`
