---
id: "components.Disposable"
title: "Interface: Disposable"
sidebar_label: "Disposable"
custom_edit_url: null
---

[components](../modules/components.md).Disposable

Whether this component has to be manually destroyed once you are done with
it to prevent
[memory leaks](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects).
This also ensures that the DOM events created by that component will be
cleaned up.

## Hierarchy

- **`Disposable`**

  ↳ [`UIComponent`](components.UIComponent.md)

## Implemented by

- [`FragmentIfcLoader`](../classes/components.FragmentIfcLoader.md)
- [`FragmentManager`](../classes/components.FragmentManager.md)
- [`Mouse`](../classes/components.Mouse.md)
- [`SimpleCamera`](../classes/components.SimpleCamera.md)
- [`SimpleClipper`](../classes/components.SimpleClipper.md)
- [`SimpleGrid`](../classes/components.SimpleGrid.md)
- [`SimplePlane`](../classes/components.SimplePlane.md)
- [`SimpleRenderer`](../classes/components.SimpleRenderer.md)
- [`SimpleScene`](../classes/components.SimpleScene.md)
- [`ToolComponent`](../classes/components.ToolComponent.md)

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

components/base-types/base-types.ts:62
