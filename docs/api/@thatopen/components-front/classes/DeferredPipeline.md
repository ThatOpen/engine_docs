# DeferredPipeline

DeferredPipeline — the rebuilt deferred postproduction pipeline.

Re-authored from scratch and validated pass-by-pass in the PipelineBisect
harness (stages 18–23) before replacing the previous implementation. It reuses
the SAME proven pass classes (capture / Hi-Z / AO / denoise / composite / FXAA);
only the orchestration is new. Per frame:
  1. single-pass capture -> G-buffer (colour + depth + octa-normal + faceId)
  2. Hi-Z min-mip build from the captured depth
  3. AO estimator (screen-space Alchemy over Hi-Z, or world-space probe), half-res
  4. AO denoise (separable cross-bilateral)
  5. combined composite (AO . contour . sheen . tonemap . sRGB) -> LDR target
  6. FXAA -> the finished frame
  7. occlusion seam — direct (points into the frame) or layer (premultiplied splats)
  8. depth-occluded overlay (the floor grid) + flat overlay (hover/selection)
  9. tail (selection outline) / screen-copy

`reuseCapture` skips 1–4 and re-composites the cached G-buffer (overlay-only
repaint). The public API (constructor, settings, render args, accessors) matches
the previous DeferredPipeline so consumers are untouched.

## Properties

### sunShadow

> `readonly` **sunShadow**: `SunShadowPass`

The sun's view of the scene, for cast shadows (see `settings.sunShadow`).

## Accessors

### aoHalfRes

> `get` **aoHalfRes**(): `boolean`

Whether the AO compute + denoise run at half the full render resolution.
Flipping it changes the AO target dimensions, so the setter reallocates the
AO chain at the new size.

#### Returns

`boolean`

***

### depthTexture

> `get` **depthTexture**(): `DepthTexture`

BIM depth attachment (float32 DEPTH_COMPONENT32F, reversed-Z). Owned by capture.

#### Returns

`DepthTexture`

***

### hizHalfRes

> `get` **hizHalfRes**(): `boolean`

Whether the Hi-Z pyramid is built from a half-resolution base. Flipping it
changes the pyramid's dimensions, so the setter reallocates it — writing
`settings.hizHalfRes` on its own would change the number and nothing else.

#### Returns

`boolean`

***

### renderScale

> `get` **renderScale**(): `number`

Internal render resolution as a fraction of the native size (1.0 = 1:1, sharp;
0.5 = quarter the pixels, ~2x faster, softer). Reallocates every pass.

#### Returns

`number`

## Methods

### captureChunk()

> **captureChunk**(`renderer`, `scene`, `camera`, `first`): `void`

🔴 One CHUNK of a capture, so a caller can spread a repaint over several frames.

Draw the scene in K slices (hide everything outside the slice, call this once per frame with
`first = true` only on the slice that starts the capture), then finish with a normal `render(...)` on
the reuse fast path: it skips the capture and composites the accumulated G-buffer.

The point is not that the total work shrinks, it does not. It is that no single frame carries all of
it. A repaint measured at 17-19 ms idle and 44-56 ms mid-gesture cannot fit in a 16 ms frame on a big
model, and lowering it only moves the ceiling to the next model.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `renderer` | `WebGLRenderer` |
| `scene` | `Scene`\<`Object3DEventMap`\> |
| `camera` | `OrthographicCamera` \| `PerspectiveCamera` |
| `first` | `boolean` |

#### Returns

`void`

***

### markChunksFinished()

> **markChunksFinished**(): `void`

Arms the next `render()` to finish a split capture: skip the capture, recompute AO, composite.

#### Returns

`void`

***

### render()

> **render**(`renderer`, `scene`, `camera`, `tail`?, `overlayMaterials`?, `depthOverlayMaterials`?, `reuseCapture`?, `occlusionPasses`?): `void`

🔴 THE SCENE'S MATRICES ARE WORKED OUT ONCE A FRAME, NOT ONCE A DRAW OF IT. A deferred frame draws the
scene up to four times (opaque, translucent, depth overlay, flat overlay), and each `renderer.render`
walks the whole graph composing every object's matrix again, of a scene nothing has moved in between.
Measured on a set of 22 sheets with 1,800 objects, photo after photo: 13.6 ms a frame with it, 6.7 without,
the same on a 128 pixel thumbnail as on a full sheet, because it is the graph that is paid for and not
the pixels. So they are worked out here, and the draws inside find them done.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `renderer` | `WebGLRenderer` | `undefined` |
| `scene` | `Scene`\<`Object3DEventMap`\> | `undefined` |
| `camera` | `OrthographicCamera` \| `PerspectiveCamera` | `undefined` |
| `tail`? | (`frame`) => `void` | `undefined` |
| `overlayMaterials`? | `Material`\<`MaterialEventMap`\>[] | `undefined` |
| `depthOverlayMaterials`? | `Material`\<`MaterialEventMap`\>[] | `undefined` |
| `reuseCapture`? | `boolean` | `false` |
| `occlusionPasses`? | `object`[] | `[]` |

#### Returns

`void`
