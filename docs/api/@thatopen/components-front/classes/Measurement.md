# `abstract` Measurement\<T, U\>

Abstract class that gives the core elements to create any measurement component. 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Measurement).

## Extends

- `Component`

## Extended by

- [`AngleMeasurement`](AngleMeasurement.md)
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

## Properties

### cameraStopDelay

> **cameraStopDelay**: `number` = `80`

Idle window after the last wheel pulse before picks resume. Wheel
zoom doesn't fire `controlstart` / `controlend`, so we debounce
on the canvas-level `wheel` event. Drag suspension is gated by
the user-input pair directly and resumes the moment `controlend`
fires (no debounce, no waiting on damping inertia).

***

### pickMode

> **pickMode**: [`MeasurementPickMode`](../enumerations/MeasurementPickMode.md) = `MeasurementPickMode.MOUSE_MOVE`

When to run the snap pick that drives the preview marker. See
[MeasurementPickMode](../enumerations/MeasurementPickMode.md). Defaults to `MOUSE_MOVE` (pick on
every animation frame the cursor is moving). On big models you
may want `MOUSE_STOP` (pick once after the cursor settles for
delay ms): the per-pick cost is the same, but you pay
it once per intentional stop rather than once per frame, and
the marker only appears where the user is actually about to
click. The `onPointerStop` event still fires in both modes; in
`MOUSE_STOP` we just align the pick to that same moment.

## Accessors

### lineType

> `get` **lineType**(): [`MeasurementLineType`](../enumerations/MeasurementLineType.md)

The line rendering style. See [MeasurementLineType](../enumerations/MeasurementLineType.md). Defaults to
`Basic`. Switching at runtime rebuilds existing measurement lines so it
applies live.

#### Returns

[`MeasurementLineType`](../enumerations/MeasurementLineType.md)

***

### lineWidth

> `get` **lineWidth**(): `number`

Width of measurement lines in screen pixels. Only has a visible effect when
[lineType](Measurement.md#linetype) is `Fat`; WebGL ignores width on the basic material.

#### Returns

`number`

***

### linesMaterial

> `set` **linesMaterial**(`value`): `void`

The active lines material for the current [lineType](Measurement.md#linetype): a
`THREE.LineBasicMaterial` in `Basic` mode, a `LineMaterial` (fat line) in
`Fat` mode. Setting it replaces the material matching its type.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `LineMaterial` \| `LineBasicMaterial` |

***

### pickerMode

> `get` **pickerMode**(): [`GraphicVertexPickerMode`](../enumerations/GraphicVertexPickerMode.md)

#### Deprecated

Sync mode is gone — picks are fast enough through
the unified GPU-pick path that the synchronous workaround is no
longer needed. Reading still returns the underlying picker mode
for compatibility, but setting it has no functional effect.

> `set` **pickerMode**(`value`): `void`

#### Deprecated

See the getter.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`GraphicVertexPickerMode`](../enumerations/GraphicVertexPickerMode.md) |

#### Returns

[`GraphicVertexPickerMode`](../enumerations/GraphicVertexPickerMode.md)
