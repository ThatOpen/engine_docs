---
id: "components.Mouse"
title: "Class: Mouse"
sidebar_label: "Mouse"
custom_edit_url: null
---

[components](../modules/components.md).Mouse

A helper to easily get the real position of the mouse in the Three.js canvas
to work with tools like the
[raycaster](https://threejs.org/docs/#api/en/core/Raycaster), even if it has
been transformed through CSS or doesn't occupy the whole screen.

## Implements

- [`Disposable`](../interfaces/components.Disposable.md)

## Accessors

### position

• `get` **position**(): `Vector2`

The real position of the mouse of the Three.js canvas.

#### Returns

`Vector2`

#### Defined in

temp/components/base-types/mouse.ts:21

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/components.Disposable.md).[dispose](../interfaces/components.Disposable.md#dispose)

#### Defined in

temp/components/base-types/mouse.ts:31
