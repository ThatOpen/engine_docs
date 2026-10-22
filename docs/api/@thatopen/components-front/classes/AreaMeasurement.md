# AreaMeasurement

AreaMeasurement allows users to measure and interact with areas in a 3D environment. This class provides functionality for creating, updating, and deleting area measurements, as well as managing their visual representation. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/AreaMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/AreaMeasurement).

## Extends

- [`Measurement`](Measurement.md)\<`Area`, `"area"`\>

## Properties

### cameraStopDelay

> **cameraStopDelay**: `number` = `80`

Idle window after the last wheel pulse before picks resume. Wheel
zoom doesn't fire `controlstart` / `controlend`, so we debounce
on the canvas-level `wheel` event. Drag suspension is gated by
the user-input pair directly and resumes the moment `controlend`
fires (no debounce, no waiting on damping inertia).

#### Inherited from

[`Measurement`](Measurement.md) . [`cameraStopDelay`](Measurement.md#camerastopdelay)

***

### modes

> **modes**: (`"face"` \| `"square"` \| `"free"`)[]

The possible modes in which a measurement of this type may be created.

#### Overrides

`Measurement.modes`

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

#### Inherited from

[`Measurement`](Measurement.md) . [`pickMode`](Measurement.md#pickmode)

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
[lineType](AreaMeasurement.md#linetype) is `Fat`; WebGL ignores width on the basic material.

#### Returns

`number`

***

### linesMaterial

> `set` **linesMaterial**(`value`): `void`

The active lines material for the current [lineType](AreaMeasurement.md#linetype): a
`THREE.LineBasicMaterial` in `Basic` mode, a `LineMaterial` (fat line) in
`Fat` mode. Setting it replaces the material matching its type.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `LineMaterial` \| `LineBasicMaterial` |

***

### mode

> `set` **mode**(`value`): `void`

Represents the current measurement mode being used.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `"face"` \| `"square"` \| `"free"` |

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
