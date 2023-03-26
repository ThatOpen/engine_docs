---
id: "Disposable"
title: "Interface: Disposable"
sidebar_label: "Disposable"
sidebar_position: 0
custom_edit_url: null
---

Whether this component has to be manually destroyed once you are done with
it to prevent
[memory leaks](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects).
This also ensures that the DOM events created by that component will be
cleaned up.

## Implemented by

- [`Mouse`](../classes/Mouse.md)
- [`SimpleCamera`](../classes/SimpleCamera.md)
- [`SimpleGrid`](../classes/SimpleGrid.md)
- [`SimpleRenderer`](../classes/SimpleRenderer.md)
- [`SimpleScene`](../classes/SimpleScene.md)
- [`ToolComponents`](../classes/ToolComponents.md)

## Properties

### dispose

• **dispose**: () => `void`

#### Type declaration

▸ (): `void`

Destroys the object from memory to prevent a
[memory leak](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects).

##### Returns

`void`

#### Defined in

types/base-types.ts:62
