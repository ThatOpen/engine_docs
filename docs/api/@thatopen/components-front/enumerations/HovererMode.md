# HovererMode

How the Hoverer reacts to cursor input.

- [HovererMode.MOUSE_STOP](HovererMode.md): hover detection runs once the
  cursor has settled briefly. Matches the classic "wait for the user
  to stop moving" feel: less jittery, useful when hover is paired
  with a heavy reaction.
- [HovererMode.MOUSE_MOVE](HovererMode.md): hover detection runs continuously
  as the cursor moves, throttled to one pick per animation frame.
  Snappier, ideal now that GPU-readback picking is sub-millisecond.

## Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `MOUSE_MOVE` | `"mousemove"` |
| `MOUSE_STOP` | `"mousestop"` |
