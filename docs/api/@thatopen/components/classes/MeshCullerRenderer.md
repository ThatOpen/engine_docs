# MeshCullerRenderer

A renderer to hide/show meshes depending on their visibility from the user's point of view.

## Extends

- [`CullerRenderer`](CullerRenderer.md)

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

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

### enabled

> **enabled**: `boolean` = `true`

Whether this renderer is active or not. If not, it won't render anything.

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`enabled`](CullerRenderer.md#enabled)

***

### isProcessing

> **isProcessing**: `boolean` = `false`

Flag to indicate if the renderer is currently processing.
Used to prevent concurrent processing.

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

### renderDebugFrame

> **renderDebugFrame**: `boolean` = `false`

Render the internal scene used to determine the object visibility. Used
for debugging purposes.

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`renderDebugFrame`](CullerRenderer.md#renderdebugframe)

***

### renderer

> `readonly` **renderer**: `WebGLRenderer`

The THREE.js renderer used to make the visibility test.

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`renderer`](CullerRenderer.md#renderer)

***

### threshold

> **threshold**: `number` = `100`

Pixels in screen a geometry must occupy to be considered "seen".
Default value is 100.

***

### world

> `readonly` **world**: [`World`](../interfaces/World.md)

The world instance to which this renderer belongs.

#### Inherited from

[`CullerRenderer`](CullerRenderer.md) . [`world`](CullerRenderer.md#world)

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
