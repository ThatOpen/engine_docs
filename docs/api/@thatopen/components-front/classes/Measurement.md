# `abstract` Measurement\<T, U\>

Abstract class that gives the core elements to create any measurement component. 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Measurement).

## Extends

- `Component`

## Extended by

- [`AreaMeasurement`](AreaMeasurement.md)
- [`LengthMeasurement`](LengthMeasurement.md)
- [`VolumeMeasurement`](VolumeMeasurement.md)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |
| `U` *extends* keyof `MeasureToUnitMap` | keyof `MeasureToUnitMap` |

## Implements

- `Createable`
- `Hideable`
- `Disposable_2`
