# ~~GraphicVertexPickerMode~~

## Deprecated

Sync mode is gone — picks are fast enough through the
unified GPU-pick / SnapResolver path that the synchronous-three.js-
meshes workaround is no longer needed. The enum is kept for type
compatibility with existing imports; both values now resolve to
the same fast path.

## Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `DEFAULT` | `0` |
| `SYNCHRONOUS` | `1` |
