# SplatLoader

Streams 3D Gaussian splats THROUGH the world's deferred [PostproductionRenderer](PostproductionRenderer.md) as a
first-class citizen of the pipeline.

The splats are drawn by the in-house WebGL2 GSplat renderer (EWA covariance billboards,
a worker-driven global depth sort, a 10³ cell grid for distance LOD + frustum culling). They
are rendered into the deferred occlusion seam in LAYER mode (premultiplied over the finished
frame); critically, every splat writes its CENTRE's reversed-Z depth and the material depth-
TESTS (`GreaterEqualDepth`, no depth write) against the BIM depth borrowed by the seam — so BIM
geometry occludes the splats with NO shader patching, exactly as a real mesh would.

This replaces the previous Spark + 3d-tiles-renderer implementation; those optional peer
dependencies are no longer needed.

## Extends

- `Component`

## Implements

- `Disposable_2`

## Properties

### list

> `readonly` **list**: `Map`\<`string`, [`LoadedSplat`](../interfaces/LoadedSplat.md)\>

Loaded splats, keyed by id.

***

### lodQuality

> **lodQuality**: `number` = `0.55`

LOD-distance QUALITY factor (× dataset radius) applied to every splat's `lodBase`
each frame. Higher = LOD stays high-detail farther from the camera (more quality,
slower); lower = detail drops off sooner (faster). 0.55 is the tuned default (the
value each renderer initialises `lodBase` to). Live: read per-frame in `_occlusion`.

***

### minPixelSize

> **minPixelSize**: `number` = `3`

Minimum projected splat size (px). Splats below it are skipped in the vertex stage, but their
opacity now ramps down over the band just above the threshold, so they FADE out instead of
blinking out — no hard boundary travelling with the camera. ~2-3 px is a common default
and a real perf lever on dense scenes: larger = cheaper and blurrier at distance.
With [subPixelDetail](SplatLoader.md#subpixeldetail) on, this becomes a size FLOOR instead and larger values cost MORE.

***

### onDisposed

> `readonly` **onDisposed**: `Event_2`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### onSplatLoaded

> `readonly` **onSplatLoaded**: `Event_2` \<[`LoadedSplat`](../interfaces/LoadedSplat.md)\>

Fires once a splat source has finished loading + been added to the splat scene.

***

### shMaxDistance

> **shMaxDistance**: `number` = `0`

Distance, in world units, past which the view-dependent term fades out. 0 (the default) means
no limit. Specular response only reads as such on a surface you are close enough to resolve;
beyond that it is per-splat work paying for nothing, and a splat past the limit skips its
texture fetch entirely. Ramped over the last 20% so nothing changes colour as it crosses.

Left at 0 deliberately: this is an ABSOLUTE distance, and no absolute value is right for both
a room scan and a 500 m site. Guidance from the FCC capture (radius 365 m), where savings and
visual cost both ordered monotonically with the limit: ~0.3x the dataset radius (110 m) saved
0.6 ms and moved 5% of pixels by >8/255; 0.14x (50 m) saved 1.3 ms and moved 14%.

***

### shStrength

> **shStrength**: `number` = `1`

How much VIEW-DEPENDENT colour to apply, 0..1. Gaussian splats store colour as spherical
harmonics; the flat DC term alone gives a splat the same colour from every angle, and the
higher bands carry the specular response — wet asphalt, glass, polished stone — that reads as
"detail" next to a viewer which renders them. 1 = as captured, 0 = flat (identical to the
pre-SH look). Applies only to datasets converted WITH `.sh` sidecars; others ignore it.
Live: a uniform write, not a re-stream.

***

### subPixelDetail

> **subPixelDetail**: `boolean` = `false`

Keep sub-pixel splats instead of dropping them: each is grown to [minPixelSize](SplatLoader.md#minpixelsize) and has
its opacity scaled by the area it gained, so its contribution is preserved.

This is the only mode in which extra streamed detail actually reaches the screen. Measured on
the FCC capture: with it OFF, raising [lodQuality](SplatLoader.md#lodquality) from 0.55 to 2.0 drew 20% more splats
and produced a bit-identical image — everything the finer LOD added fell under the size
threshold and was culled on arrival. With it ON, the same change alters the image.

Off by default because it is the expensive path: +18.8 ms at 4.07M drawn (0/15 paired trials
— it lost every one). [subPixelMinAlpha](SplatLoader.md#subpixelminalpha) claws back roughly half of that. Turn it on
for stills, inspection and close work.

***

### subPixelMinAlpha

> **subPixelMinAlpha**: `number` = `0.1`

With [subPixelDetail](SplatLoader.md#subpixeldetail) on, the alpha at which a grown splat is finally dropped.

This is the cost dial for that mode, and it is safe in a way a size threshold is not: opacity
decays CONTINUOUSLY with distance, so raising this only makes splats disappear once they have
already faded to nothing. It cannot recreate the hard edge the whole change exists to remove.

0.1 by default, chosen from measurement rather than taste: against a 1/255 cut it recovers
**8.7 ms of the mode's 18.8 ms** (14/15 paired trials, p = 0.0005) while the rendered frame
moves by 0.875/255 on average — about 0.3%. 0.05 was not worth it (-2.3 ms, p = 0.06). Drop it
to 1/255 for maximum fidelity in a still.

## Accessors

### enabled

> `set` **enabled**(`value`): `void`

When false, splats stop drawing (they stay loaded).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

***

### gaussianScale

> `get` **gaussianScale**(): `number`

Uniform scale of every splat dataset (sizes + spacing together) — fits the reconstruction
to BIM real-world units.

#### Returns

`number`

***

### splatCount

> `get` **splatCount**(): `number`

Live total of gaussians currently drawn across every dataset.

#### Returns

`number`

***

### world

> `set` **world**(`value`): `void`

The world this loader draws into. Setting it registers the occlusion hook on the world's
deferred renderer (LAYER mode); clearing it unregisters it.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `null` \| `World` |

## Methods

### dispose()

> **dispose**(): `void`

OBC.Disposable.dispose

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`

***

### getTransform()

> **getTransform**(`id`?): `null` \| `Matrix4`

The current placement matrix (local→world, WITHOUT the global gaussianScale) of a dataset
(defaults to the first loaded), or null. Symmetric with [setTransform](SplatLoader.md#settransform).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id`? | `string` |

#### Returns

`null` \| `Matrix4`

***

### load()

> **load**(`source`, `options`?): `Promise` \<[`LoadedSplat`](../interfaces/LoadedSplat.md)\>

Load a gaussian splat source and add it to the splat scene.
`options.anchor` (or the full `options.transform`) places it for BIM co-location.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` \| [`SplatSource`](../interfaces/SplatSource.md) | - |
| `options`? | `object` | - |
| `options.anchor`? | `Vector3` | - |
| `options.id`? | `string` | - |
| `options.transform`? | `Matrix4` | Full TRS placement (dataset-local → world), e.g. a BIM-alignment matrix. Supersedes `anchor`. Update later via [setTransform](SplatLoader.md#settransform). |

#### Returns

`Promise` \<[`LoadedSplat`](../interfaces/LoadedSplat.md)\>

***

### remove()

> **remove**(`id`): `void`

Remove a loaded splat source and free it.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

***

### removeCollisionProxy()

> **removeCollisionProxy**(`id`): `void`

Detach + dispose a splat's crisp pick proxy (falls back to gaussian depth).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

***

### setCollisionProxy()

> **setCollisionProxy**(`id`, `source`): `Promise`\<`void`\>

Attach a CRISP pick proxy to a loaded splat: a low-poly collision mesh (GLB,
from splat-transform `-K smooth`, in the splat's SOG frame). While a proxy is
attached, the FastModelPicker depth pass draws these opaque surfaces instead of
the fuzzy gaussian depth, so orbit anchors and measurements snap to a hard
surface. The proxy inherits the splat's placement × gaussianScale automatically.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | a loaded splat id. |
| `source` | `object` | <p>the GLB as a URL or raw bytes (e.g. a platform hidden file the</p><p>  app has resolved to a signed URL / fetched).</p> |
| `source.bytes`? | `ArrayBuffer` | - |
| `source.url`? | `string` | - |

#### Returns

`Promise`\<`void`\>

***

### setTransform()

> **setTransform**(`matrix`, `id`?): `void`

Set a dataset's full TRS placement (dataset-local → world), e.g. a BIM-alignment matrix.
With no `id`, applies to every loaded dataset. Updates the handle box too.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `matrix` | `Matrix4` |
| `id`? | `string` |

#### Returns

`void`
