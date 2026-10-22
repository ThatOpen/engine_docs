# MeasurementLineType

How measurement lines are rendered.
- `Basic`: `THREE.Line` with a `LineBasicMaterial`. This is the default and
  matches the historical behavior; note WebGL ignores line width here, so
  lines always render 1px regardless of `lineWidth`.
- `Fat`: `Line2` / `LineSegments2` with a `LineMaterial`, which honors
  `lineWidth` (in screen pixels).

Modeled as an enum so more line styles can be added later without a breaking
change.

## Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `Basic` | `"basic"` |
| `Fat` | `"fat"` |
