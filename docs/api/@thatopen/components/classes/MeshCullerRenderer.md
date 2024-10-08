# MeshCullerRenderer

A renderer to hide/show meshes depending on their visibility from the user's point of view.

## Extends

- [`CullerRenderer`](CullerRenderer.md)

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### buffer

> **buffer**: `Uint8Array`

The buffer when the result of the visibility check is stored.

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`buffer`](CullerRenderer.md#buffer)

***

### bufferSize

> **bufferSize**: `number` = `1`

The size of the buffer where the result of the visibility check is stored.

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`bufferSize`](CullerRenderer.md#buffersize)

***

### colorMeshes

> **colorMeshes**: `Map`\<`string`, `InstancedMesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>\>

Map of color code to THREE.InstancedMesh.
Used to keep track of color-coded meshes.

***

### components

> **components**: [`Components`](Components.md)

The components instance to which this renderer belongs.

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`components`](CullerRenderer.md#components)

***

### config

> **config**: `CullerRendererConfigManager`

[Configurable.config](../interfaces/Configurable.md#config)

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`config`](CullerRenderer.md#config)

***

### enabled

> **enabled**: `boolean` = `true`

Whether this renderer is active or not. If not, it won't render anything.

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`enabled`](CullerRenderer.md#enabled)

***

### isSetup

> **isSetup**: `boolean` = `false`

[Configurable.isSetup](../interfaces/Configurable.md#issetup)

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`isSetup`](CullerRenderer.md#issetup)

***

### needsUpdate

> **needsUpdate**: `boolean` = `false`

Needs to check whether there are objects that need to be hidden or shown.
You can bind this to the camera movement, to a certain interval, etc.

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`needsUpdate`](CullerRenderer.md#needsupdate)

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`string`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`onDisposed`](CullerRenderer.md#ondisposed)

***

### onSetup

> `readonly` **onSetup**: [`Event`](Event.md)\<`unknown`\>

[Configurable.onSetup](../interfaces/Configurable.md#onsetup)

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`onSetup`](CullerRenderer.md#onsetup)

***

### onViewUpdated

> `readonly` **onViewUpdated**: [`Event`](Event.md)\<`object`\>

Event triggered when the visibility of meshes is updated.
Contains two sets: seen and unseen.

#### Type declaration

##### seen

> **seen**: `Set`\<`Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\>

##### unseen

> **unseen**: `Set`\<`Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\>

#### Overrides

[`CullerRenderer`](CullerRenderer.md) . [`onViewUpdated`](CullerRenderer.md#onviewupdated)

***

### preventUpdate

> **preventUpdate**: `boolean` = `false`

Flag to indicate if the renderer shouldn't update the visibility.

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`preventUpdate`](CullerRenderer.md#preventupdate)

***

### renderTarget

> **renderTarget**: `WebGLRenderTarget`\<`Texture`\>

The render target used to render the visibility scene.

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`renderTarget`](CullerRenderer.md#rendertarget)

***

### renderer

> `readonly` **renderer**: `WebGLRenderer`

The THREE.js renderer used to make the visibility test.

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`renderer`](CullerRenderer.md#renderer)

***

### world

> `readonly` **world**: [`World`](../interfaces/World.md)

The world instance to which this renderer belongs.

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`world`](CullerRenderer.md#world)

## Accessors

### threshold

> `get` **threshold**(): `number`

#### Deprecated

use config.threshold instead.

> `set` **threshold**(`value`): `void`

#### Deprecated

use config.threshold instead.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

## Methods

### add()

> **add**(`mesh`): `void`

Adds a mesh to the culler. When the mesh is not visibile anymore, it will be removed from the scene. When it's visible again, it will be added to the scene.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mesh` | `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `InstancedMesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[]\> | The mesh to add. It can be a regular THREE.Mesh or an instance of THREE.InstancedMesh. |

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

#### Overrides

[`CullerRenderer`](CullerRenderer.md) . [`dispose`](CullerRenderer.md#dispose)

***

### remove()

> **remove**(`mesh`): `void`

Removes a mesh from the culler, so its visibility is not controlled by the culler anymore.
When the mesh is removed, it will be hidden from the scene and its color-coded mesh will be destroyed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mesh` | `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `InstancedMesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[]\> | The mesh to remove. It can be a regular THREE.Mesh or an instance of THREE.InstancedMesh. |

#### Returns

`void`

***

### updateInstanced()

> **updateInstanced**(`meshes`): `void`

Updates the given instanced meshes inside the culler. You should use this if you change the count property, e.g. when changing the visibility of fragments.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `meshes` | `Iterable`\<`InstancedMesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>\> | The meshes to update. |

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

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`updateVisibility`](CullerRenderer.md#updatevisibility)
