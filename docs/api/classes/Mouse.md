---
id: "Mouse"
title: "Class: Mouse"
sidebar_label: "Mouse"
sidebar_position: 0
custom_edit_url: null
---

A helper to easily get the real position of the mouse in the Three.js canvas
to work with tools like the
[raycaster](https://threejs.org/docs/#api/en/core/Raycaster), even if it has
been transformed through CSS or doesn't occupy the whole screen.

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Accessors

### position

• `get` **position**(): `Vector2`

The real position of the mouse of the Three.js canvas.

#### Returns

`Vector2`

#### Defined in

types/mouse.ts:21

## Methods

### dispose

▸ **dispose**(): `void`

[dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

types/mouse.ts:31
