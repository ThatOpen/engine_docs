# CullerRenderer

A base renderer to determine visibility on screen.

## Extended by

- [`MeshCullerRenderer`](MeshCullerRenderer.md)

## Implements

- [`Configurable`](../interfaces/Configurable.md)\<`CullerRendererConfigManager`, `CullerRendererConfig`\>

## Properties

### buffer

> **buffer**: `Uint8Array`

The buffer when the result of the visibility check is stored.

***

### bufferSize

> **bufferSize**: `number` = `1`

The size of the buffer where the result of the visibility check is stored.

***

### components

> **components**: [`Components`](Components.md)

The components instance to which this renderer belongs.

***

### config

> **config**: `CullerRendererConfigManager`

[Configurable.config](../interfaces/Configurable.md#config)

#### Implementation of

[`Configurable`](../interfaces/Configurable.md) . [`config`](../interfaces/Configurable.md#config)

***

### enabled

> **enabled**: `boolean` = `true`

Whether this renderer is active or not. If not, it won't render anything.

***

### isSetup

> **isSetup**: `boolean` = `false`

[Configurable.isSetup](../interfaces/Configurable.md#issetup)

#### Implementation of

[`Configurable`](../interfaces/Configurable.md) . [`isSetup`](../interfaces/Configurable.md#issetup)

***

### needsUpdate

> **needsUpdate**: `boolean` = `false`

Needs to check whether there are objects that need to be hidden or shown.
You can bind this to the camera movement, to a certain interval, etc.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`string`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

***

### onSetup

> `readonly` **onSetup**: [`Event`](Event.md)\<`unknown`\>

[Configurable.onSetup](../interfaces/Configurable.md#onsetup)

#### Implementation of

[`Configurable`](../interfaces/Configurable.md) . [`onSetup`](../interfaces/Configurable.md#onsetup)

***

### onViewUpdated

> `readonly` **onViewUpdated**: [`Event`](Event.md)\<`any`\> \| [`AsyncEvent`](AsyncEvent.md)\<`any`\>

Fires after making the visibility check to the meshes. It lists the
meshes that are currently visible, and the ones that were visible
just before but not anymore.

***

### preventUpdate

> **preventUpdate**: `boolean` = `false`

Flag to indicate if the renderer shouldn't update the visibility.

***

### renderTarget

> **renderTarget**: `WebGLRenderTarget`\<`Texture`\>

The render target used to render the visibility scene.

***

### renderer

> `readonly` **renderer**: `WebGLRenderer`

The THREE.js renderer used to make the visibility test.

***

### world

> `readonly` **world**: [`World`](../interfaces/World.md)

The world instance to which this renderer belongs.

## Methods

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

***

### updateVisibility()

> **updateVisibility**(`force`?): `Promise`\<`void`\>

The function that the culler uses to reprocess the scene. Generally it's
better to call needsUpdate, but you can also call this to force it.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `force`? | `boolean` | if true, it will refresh the scene even if needsUpdate is not true. |

#### Returns

`Promise`\<`void`\>
