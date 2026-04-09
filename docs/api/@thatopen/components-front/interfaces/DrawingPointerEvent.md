# DrawingPointerEvent

A processed pointer event in drawing local space.

## Properties

### point

> **point**: `Vector3`

Drawing-local position — snapped if a snap candidate was found.

***

### ray

> **ray**: `Ray`

World-space ray — needed for pick() / pickHandle() calls.

***

### snap

> **snap**: `null` \| `SnapResult`

Snap result, or null if no geometry was under the cursor.
