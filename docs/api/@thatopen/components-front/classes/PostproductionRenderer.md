# PostproductionRenderer

A class that extends RendererWith2D and adds post-processing capabilities. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/PostproductionRenderer). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/PostproductionRenderer).

## Extends

- [`RendererWith2D`](RendererWith2D.md)

## Properties

### manualDefaultStyle

> **manualDefaultStyle**: [`PostproductionAspect`](../enumerations/PostproductionAspect.md) = `PostproductionAspect.COLOR`

The default style to use when the mode is MANUAL.

***

### manualModeDelay

> **manualModeDelay**: `number` = `50`

The delay in milliseconds to wait before turning the postproduction back on when the mode is MANUAL.

***

### pipeline

> **pipeline**: `any` = `null`

WebGPU only (`mode: "webgpu"`): the mounted postproduction pipeline (the
TSL composition: AO, contour, tonal shade, sheen, FXAA, outlines,
overlays), mounted over this world's scene and camera. Null under WebGL,
where [postproduction](PostproductionRenderer.md#postproduction) is the GLSL pipeline.

***

### pipelineStats

> `readonly` **pipelineStats**: `object`

WebGPU only: how many pipelines were compiled and disposed.

#### compiled

> **compiled**: `number` = `0`

#### disposed

> **disposed**: `number` = `0`

***

### three2D

> **three2D**: `CSS2DRenderer`

This renderer is used to render 2D objects (CSS2DObjects) in a 3D scene.

#### Inherited from

[`RendererWith2D`](RendererWith2D.md) . [`three2D`](RendererWith2D.md#three2d)

***

### turnOffOnManualMode

> **turnOffOnManualMode**: `boolean` = `true`

Whether the postproduction will temporarily be turned off when the mode is MANUAL to get a more fluid navigation experience.

***

### webgpuPost

> **webgpuPost**: `Record`\<`string`, `any`\>

WebGPU only: the options the composition is mounted with. `face` (the
face-id channel) carries the contour's interior edges; the rest are the
WebGL DEFERRED defaults (half-float scene colour, tonal shade, sheen,
dither, FXAA).

## Accessors

### postproduction

> `get` **postproduction**(): `Postproduction`

Getter for the postproduction instance.
Throws an error if the postproduction instance is not yet initialized.

#### Returns

`Postproduction`

The initialized Postproduction instance.

## Methods

### applyPostproductionSize()

> **applyPostproductionSize**(): `void`

Re-applies the current container size to the postproduction passes. Public
so the deferred pipeline can request a correct size right after it is
lazily constructed, matching the dimensions the resize path uses.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

OBC.Disposable.dispose.

#### Returns

`void`

#### Overrides

`RendererWith2D.dispose`

***

### remountPipeline()

> **remountPipeline**(): `void`

WebGPU only: rebuilds the composition over the current world. Which
passes are compiled in is decided at mount, so a change the next frame
would not pick up on its own can be forced with this.

#### Returns

`void`

***

### update()

> **update**(): `void`

Updateable.update

#### Returns

`void`

#### Overrides

`RendererWith2D.update`

***

### updateOverlayOnly()

> **updateOverlayOnly**(): `void`

Cheap repaint for overlay-only changes (a measurement marker moving on an
unchanged scene): re-composites the cached deferred G-buffer + redraws the
overlays, SKIPPING the capture. Reserve the full [update](PostproductionRenderer.md#update) for real
camera/scene changes. Falls back to a full update when the deferred
pipeline is not the active path.

#### Returns

`void`
