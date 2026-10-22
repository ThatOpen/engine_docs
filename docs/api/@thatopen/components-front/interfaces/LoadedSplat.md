# LoadedSplat

A loaded splat handle returned by [SplatLoader.load](../classes/SplatLoader.md#load).

## Properties

### anchor

> `readonly` **anchor**: `Vector3`

World anchor the splat was placed at (for BIM co-location).

***

### box

> `readonly` **box**: `Box3`

World-space bounding box (filled once the dataset is decoded + placed).

***

### object

> `readonly` **object**: `ISplatRenderer`

The underlying renderer for this dataset — the in-core GSplat or the streaming
GSplatStream (both implement ISplatRenderer).

***

### splatCount

> `readonly` **splatCount**: `number`

Live count of gaussians currently drawn (shrinks/grows with LOD + frustum cull).

***

### streamed

> `readonly` **streamed**: `boolean`

Kept for API symmetry (every dataset is in-core global-sort now → always false).
