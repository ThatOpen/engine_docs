# MeasurementPickMode

When the measurement tool runs the snap pick that drives the
preview marker / dimension line.

- [MeasurementPickMode.MOUSE_MOVE](MeasurementPickMode.md): pick once per animation
  frame while the cursor is moving. Snappy feedback; defaults
  here. Heavy on big models because every move triggers a pick
  (~15 ms GPU readback) plus a snap fetch on first sight of each
  new item.
- [MeasurementPickMode.MOUSE_STOP](MeasurementPickMode.md): pick only after the
  cursor settles for Measurement.delay ms. One pick per
  stop, regardless of how the user got there. Recommended for
  large scenes — the marker only appears where the user actually
  pauses, which is also where they're about to click.

## Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `MOUSE_MOVE` | `"mousemove"` |
| `MOUSE_STOP` | `"mousestop"` |
