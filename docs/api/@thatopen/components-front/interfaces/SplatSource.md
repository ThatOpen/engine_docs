# SplatSource

A 3D Gaussian splat source. Either:
 - a URL to a `.ply` / `.compressed.ply` file (INRIA 3DGS or its compressed variant), or its raw bytes, or
 - several LOD levels (`lodUrls`, finest → coarsest) concatenated into one global-sort buffer.

The bytes are decoded on the CPU (covariance precompute + Y-up flip) and uploaded to GPU
textures by the in-house WebGL2 renderer (GSplat) — no external splat engine.

## Properties

### lodUrls?

> `optional` **lodUrls**: `string`[]

Several LOD levels (finest first). Picked per spatial cell by camera distance.

***

### manifestUrl?

> `optional` **manifestUrl**: `string`

OUT-OF-CORE streaming source: the folder containing `lod-meta.json` (a B-tree LOD manifest of
on-disk SOG chunks). Streamed by GSplatStream with a fixed GPU budget (fetch/evict +
global sort) instead of fully resident. A `url` ending in `lod-meta.json` is also detected.

***

### requestManager?

> `optional` **requestManager**: [`SplatRequestManager`](SplatRequestManager.md)

Optional fetch adapter (platform hidden files, S3 Range, signed URLs). Mirrors
[PointCloudLoader](../classes/PointCloudLoader.md)'s `requestManager` — the component decodes, the app fetches.

***

### streamBudget?

> `optional` **streamBudget**: `number`

Resident splat budget for the streaming path (default ~6M).
