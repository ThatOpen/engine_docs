# AreaMeasurement

AreaMeasurement allows users to measure and interact with areas in a 3D environment. This class provides functionality for creating, updating, and deleting area measurements, as well as managing their visual representation. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/AreaMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/AreaMeasurement).

## Extends

- [`Measurement`](Measurement.md)\<`Area`, `"area"`\>

## Properties

### modes

> **modes**: (`"free"` \| `"square"`)[]

The possible modes in which a measurement of this type may be created.

#### Overrides

`Measurement.modes`

***

### pickTolerance

> **pickTolerance**: `number` = `1e-1`

The tolerance value used for picking operations in area measurement.
This value determines the precision or sensitivity when selecting or interacting
with measurement areas. A smaller value increases precision, while a larger value
allows for more leniency in selection.

#### Default

```ts
0.1
```

***

### tolerance

> **tolerance**: `number` = `5e-3`

Represents the tolerance value used for area measurement calculations.
This value defines the acceptable margin of error for a point in the shape to be added to the area element.

#### Default

```ts
0.005
```

## Accessors

### mode

> `set` **mode**(`value`): `void`

Represents the current measurement mode being used.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `"free"` \| `"square"` |
