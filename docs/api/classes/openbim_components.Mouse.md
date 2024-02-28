---
id: "openbim_components.Mouse"
title: "Class: Mouse"
sidebar_label: "Mouse"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).Mouse

A helper to easily get the real position of the mouse in the Three.js canvas
to work with tools like the
[raycaster](https://threejs.org/docs/#api/en/core/Raycaster), even if it has
been transformed through CSS or doesn't occupy the whole screen.

## Implements

- [`Disposable`](../interfaces/openbim_components.Disposable.md)

## Properties

### onDisposed

• `Readonly` **onDisposed**: [`Event`](openbim_components.Event.md)<`undefined`\>

[Disposable.onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Defined in

[temp/components/src/base-types/mouse.ts:15](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/mouse.ts#L15)

## Accessors

### position

• `get` **position**(): `Vector2`

The real position of the mouse of the Three.js canvas.

#### Returns

`Vector2`

#### Defined in

[temp/components/src/base-types/mouse.ts:24](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/mouse.ts#L24)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[temp/components/src/base-types/mouse.ts:34](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/mouse.ts#L34)
