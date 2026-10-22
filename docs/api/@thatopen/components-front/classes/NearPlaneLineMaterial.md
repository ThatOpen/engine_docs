# NearPlaneLineMaterial

A fat line material (screen-space quad expansion, real `linewidth` in px) that
is also SAFE across the camera near plane.

three's stock `LineMaterial` expands each segment into a screen-space quad in
the vertex shader. When a segment endpoint is behind the camera plane its
projected `w <= 0`, so the NDC math is garbage and the quad blows up to span the
whole screen — the "infinity streak" seen under clipping (and on LOD wires).
Stock `LineMaterial` handles only the case where ONE endpoint is behind (it
trims that endpoint to the near plane via `trimSegment`); it does nothing when
BOTH endpoints are behind, which is the remaining streak.

This subclass injects the missing both-behind guard: if both endpoints are
behind the camera plane the segment has no valid projection, so we collapse it
offscreen (`gl_Position` past the far plane) instead of expanding a bogus quad.
This mirrors the near-plane guard of fragments' LOD line shader: one guard,
shared semantics across the fat-line consumers (section edges, measurement
lines, LOD wires).

The guard lives in the material's OWN `vertexShader` string (NOT an
`onBeforeCompile` patch), so it SURVIVES `.clone()` — `ShaderMaterial.clone`
copies `vertexShader`, whereas it drops `onBeforeCompile`. That matters because
`ClipEdges` clones the style material per model in local-clipping mode.

## Extends

- `LineMaterial`
