---
id: "thatopen_components.CullerRenderer"
title: "Class: CullerRenderer"
sidebar_label: "CullerRenderer"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).CullerRenderer

A base renderer to determine visibility on screen

## Hierarchy

- **`CullerRenderer`**

  ↳ [`MeshCullerRenderer`](thatopen_components.MeshCullerRenderer.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](thatopen_components.Component.md#enabled)

#### Defined in

[packages/core/src/core/Cullers/src/culler-renderer.ts:28](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Cullers/src/culler-renderer.ts#L28)

___

### needsUpdate

• **needsUpdate**: `boolean` = `false`

Needs to check whether there are objects that need to be hidden or shown.
You can bind this to the camera movement, to a certain interval, etc.

#### Defined in

[packages/core/src/core/Cullers/src/culler-renderer.ts:34](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Cullers/src/culler-renderer.ts#L34)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](thatopen_components.Event.md)<`string`\>

[Disposable.onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Defined in

[packages/core/src/core/Cullers/src/culler-renderer.ts:18](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Cullers/src/culler-renderer.ts#L18)

___

### onViewUpdated

• `Readonly` **onViewUpdated**: [`Event`](thatopen_components.Event.md)<`any`\> \| [`AsyncEvent`](thatopen_components.AsyncEvent.md)<`any`\>

Fires after making the visibility check to the meshes. It lists the
meshes that are currently visible, and the ones that were visible
just before but not anymore.

#### Defined in

[packages/core/src/core/Cullers/src/culler-renderer.ts:25](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Cullers/src/culler-renderer.ts#L25)

___

### renderDebugFrame

• **renderDebugFrame**: `boolean` = `false`

Render the internal scene used to determine the object visibility. Used
for debugging purposes.

#### Defined in

[packages/core/src/core/Cullers/src/culler-renderer.ts:40](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Cullers/src/culler-renderer.ts#L40)

## Methods

### dispose

▸ **dispose**(): `void`

[Disposable.dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Returns

`void`

#### Defined in

[packages/core/src/core/Cullers/src/culler-renderer.ts:116](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Cullers/src/culler-renderer.ts#L116)

___

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

#### Defined in

[packages/core/src/core/Cullers/src/culler-renderer.ts:135](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Cullers/src/culler-renderer.ts#L135)
