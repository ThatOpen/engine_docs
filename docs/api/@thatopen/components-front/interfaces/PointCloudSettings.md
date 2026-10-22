# PointCloudSettings

Quality / performance knobs for point rendering. Live-settable; the loader
reads them per frame, so changes take effect on the next frame with no reload.

## Properties

### edl

> **edl**: `boolean`

Eye-dome lighting: shades sparse points so they read as a lit surface.

***

### edlRadius

> **edlRadius**: `number`

EDL neighbour-sample radius in px (only used while [edl](PointCloudSettings.md#edl) is on).

***

### edlStrength

> **edlStrength**: `number`

EDL darkening strength (only used while [edl](PointCloudSettings.md#edl) is on).

***

### maxSize

> **maxSize**: `number`

Max point size (px) clamp — caps the large-near-point overdraw tail.

***

### minNodePixelSize

> **minNodePixelSize**: `number`

Min on-screen node size (px) used for LOD selection — the "detail" knob.

***

### outline

> **outline**: `number`

Dark-rim outline strength (0 = none).

***

### overlap

> **overlap**: `number`

Point over-size factor (the overdraw lever): ~1.0 perf .. 1.7 quality.

***

### pointBudget

> **pointBudget**: `number`

Visible-point budget — the PRIMARY fps governor (fewer points = faster).

***

### shape

> **shape**: `"circle"` \| `"square"`

Point sprite shape.
