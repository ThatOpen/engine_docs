---
id: "thatopen_components.MeshCullerRenderer"
title: "Class: MeshCullerRenderer"
sidebar_label: "MeshCullerRenderer"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).MeshCullerRenderer

A renderer to determine a mesh visibility on screen

## Hierarchy

- [`CullerRenderer`](thatopen_components.CullerRenderer.md)

  ↳ **`MeshCullerRenderer`**

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](thatopen_components.Component.md#enabled)

#### Inherited from

[CullerRenderer](thatopen_components.CullerRenderer.md).[enabled](thatopen_components.CullerRenderer.md#enabled)

#### Defined in

[packages/core/src/core/Cullers/src/culler-renderer.ts:28](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Cullers/src/culler-renderer.ts#L28)

___

### needsUpdate

• **needsUpdate**: `boolean` = `false`

Needs to check whether there are objects that need to be hidden or shown.
You can bind this to the camera movement, to a certain interval, etc.

#### Inherited from

[CullerRenderer](thatopen_components.CullerRenderer.md).[needsUpdate](thatopen_components.CullerRenderer.md#needsupdate)

#### Defined in

[packages/core/src/core/Cullers/src/culler-renderer.ts:34](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Cullers/src/culler-renderer.ts#L34)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](thatopen_components.Event.md)<`string`\>

[Disposable.onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Inherited from

[CullerRenderer](thatopen_components.CullerRenderer.md).[onDisposed](thatopen_components.CullerRenderer.md#ondisposed)

#### Defined in

[packages/core/src/core/Cullers/src/culler-renderer.ts:18](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Cullers/src/culler-renderer.ts#L18)

___

### renderDebugFrame

• **renderDebugFrame**: `boolean` = `false`

Render the internal scene used to determine the object visibility. Used
for debugging purposes.

#### Inherited from

[CullerRenderer](thatopen_components.CullerRenderer.md).[renderDebugFrame](thatopen_components.CullerRenderer.md#renderdebugframe)

#### Defined in

[packages/core/src/core/Cullers/src/culler-renderer.ts:40](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Cullers/src/culler-renderer.ts#L40)

## Methods

### updateVisibility

▸ **updateVisibility**(`force?`): `Promise`<`void`\>

The function that the culler uses to reprocess the scene. Generally it's
better to call needsUpdate, but you can also call this to force it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `force?` | `boolean` | if true, it will refresh the scene even if needsUpdate is not true. |

#### Returns

`Promise`<`void`\>

#### Inherited from

[CullerRenderer](thatopen_components.CullerRenderer.md).[updateVisibility](thatopen_components.CullerRenderer.md#updatevisibility)

#### Defined in

[packages/core/src/core/Cullers/src/culler-renderer.ts:135](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Cullers/src/culler-renderer.ts#L135)
