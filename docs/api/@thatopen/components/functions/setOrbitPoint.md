# setOrbitPoint()

> **setOrbitPoint**(`controls`, `point`): `void`

Move the orbit point to an anchored surface without letting the camera
jump or the zoom decay.

`CameraControls.setOrbitPoint` internally calls `dollyTo(distance)`, which
clamps the orbit radius to `[minDistance, maxDistance]`. If the anchored
surface sits closer than `minDistance`, that clamp would snap the camera
backwards, so the anchor has to be placed with a near-zero `minDistance`.

But `minDistance` is also what stops the zoom from decaying: with
`dollyToCursor` + `infinityDolly` the wheel step is proportional to the
orbit radius, and the constant-speed "infinity" push only kicks in once the
radius reaches `minDistance`. Leaving `minDistance` near zero (as dynamic
anchoring used to, globally) let the radius shrink toward zero on every
zoom-in, so each notch moved exponentially less — the zoom felt like it was
grinding to a halt until a press re-anchored it. So we drop `minDistance`
only for the placement itself and restore it immediately, keeping the real
`minDistance` in force for the wheel.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `controls` | `CameraControls` |
| `point` | `Vector3` |

## Returns

`void`
