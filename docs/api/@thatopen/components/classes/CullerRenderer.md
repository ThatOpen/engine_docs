# CullerRenderer

A base renderer to determine visibility on screen.

## Extended by

- [`MeshCullerRenderer`](MeshCullerRenderer.md)

## Properties

### components

> **components**: [`Components`](Components.md)

The components instance to which this renderer belongs.

***

### enabled

> **enabled**: `boolean` = `true`

Whether this renderer is active or not. If not, it won't render anything.

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

### onViewUpdated

> `readonly` **onViewUpdated**: [`Event`](Event.md)\<`any`\> \| [`AsyncEvent`](AsyncEvent.md)\<`any`\>

Fires after making the visibility check to the meshes. It lists the
meshes that are currently visible, and the ones that were visible
just before but not anymore.

***

### renderDebugFrame

> **renderDebugFrame**: `boolean` = `false`

Render the internal scene used to determine the object visibility. Used
for debugging purposes.

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
