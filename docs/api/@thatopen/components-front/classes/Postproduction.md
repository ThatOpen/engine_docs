# Postproduction

Class representing a post-processing effect manager for a 3D scene. It uses the EffectComposer from three.js to apply various post-processing effects. Thanks to [this](https://discourse.threejs.org/t/how-to-render-full-outlines-as-a-post-process-tutorial/22674).

## Properties

### composer

> `readonly` **composer**: `EffectComposer`

The EffectComposer instance used for managing the post-processing effects.

***

### overrideClippingPlanes

> **overrideClippingPlanes**: `boolean` = `false`

Flag indicating whether to override the clipping planes of the renderer.
Default: false

## Accessors

### basePass

> `get` **basePass**(): `RenderPass`

Getter for the base pass. Throws an error if the custom effects are not initialized.

#### Returns

`RenderPass`

***

### customEffects

> `get` **customEffects**(): `CustomEffectsPass`

Getter for the custom effects pass. Throws an error if the custom effects are not initialized.

#### Returns

`CustomEffectsPass`

***

### enabled

> `get` **enabled**(): `boolean`

Getter for the enabled state of the post-processing effects.

> `set` **enabled**(`active`): `void`

Setter for the enabled state of the post-processing effects.
If the custom effects are not initialized, it calls the initialize method.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | The new enabled state. |

#### Returns

`boolean`

***

### gammaPass

> `get` **gammaPass**(): `ShaderPass`

Getter for the gamma pass. Throws an error if the custom effects are not initialized.

#### Returns

`ShaderPass`

***

### n8ao

> `get` **n8ao**(): `any`

Getter for the N8AO pass. Throws an error if the custom effects are not initialized.

#### Returns

`any`

***

### settings

> `get` **settings**(): `object`

Getter for the current post-processing settings.

#### Returns

`object`

##### ao?

> `optional` **ao**: `boolean`

Flag indicating whether to apply Ambient Occlusion (AO) effect.
Default: false

##### custom?

> `optional` **custom**: `boolean`

Flag indicating whether to apply custom effects.
Default: true

##### gamma?

> `optional` **gamma**: `boolean`

Flag indicating whether to apply gamma correction.
Default: true

## Methods

### dispose()

> **dispose**(): `void`

Disposes of the resources held by the post-processing manager.
This method should be called when the post-processing manager is no longer needed.
It releases the memory occupied by the render target, depth texture, custom effects pass, gamma pass, and N8AO pass.

#### Returns

`void`

***

### setPasses()

> **setPasses**(`settings`): `void`

Sets the post-processing settings and updates the passes accordingly.
This method checks if the settings have changed before updating the passes.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `settings` | [`PostproductionSettings`](../interfaces/PostproductionSettings.md) | The new post-processing settings. |

#### Returns

`void`

***

### setSize()

> **setSize**(`width`, `height`): `void`

Sets the size of the render target and all related passes.
This method should be called when the window size changes to ensure that the post-processing effects are rendered correctly.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | The new width of the render target. |
| `height` | `number` | The new height of the render target. |

#### Returns

`void`

***

### update()

> **update**(): `void`

Updates the post-processing effects.
This method checks if the post-processing effects are enabled before rendering.
If the effects are enabled, it calls the `composer.render()` method to apply the effects.

#### Returns

`void`

***

### updateCamera()

> **updateCamera**(): `void`

Updates the camera settings for the post-processing effects.
This method is called whenever the camera settings change.
It updates the camera settings for the N8AO pass, custom effects pass, and base pass.

#### Returns

`void`

***

### updateProjection()

> **updateProjection**(`camera`): `void`

Updates the projection of the camera for the post-processing effects.
This method iterates over all passes in the EffectComposer and updates the camera property of each pass.
After updating the camera, it calls the update method to apply the changes.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `camera` | `Camera` | The new camera to use for the post-processing effects. |

#### Returns

`void`
