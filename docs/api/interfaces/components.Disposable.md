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

## Implemented by

- [`FragmentBoundingBox`](../classes/components.FragmentBoundingBox.md)
- [`FragmentIfcLoader`](../classes/components.FragmentIfcLoader.md)
- [`FragmentManager`](../classes/components.FragmentManager.md)
- [`FragmentPlans`](../classes/components.FragmentPlans.md)
- [`LengthMeasurement`](../classes/components.LengthMeasurement.md)
- [`LocalCacher`](../classes/components.LocalCacher.md)
- [`MaterialManager`](../classes/components.MaterialManager.md)
- [`Mouse`](../classes/components.Mouse.md)
- [`ScreenCuller`](../classes/components.ScreenCuller.md)
- [`Simple2DScene`](../classes/components.Simple2DScene.md)
- [`SimpleCamera`](../classes/components.SimpleCamera.md)
- [`SimpleClipper`](../classes/components.SimpleClipper.md)
- [`SimpleGrid`](../classes/components.SimpleGrid.md)
- [`SimplePlane`](../classes/components.SimplePlane.md)
- [`SimpleRaycaster`](../classes/components.SimpleRaycaster.md)
- [`SimpleRenderer`](../classes/components.SimpleRenderer.md)
- [`SimpleScene`](../classes/components.SimpleScene.md)
- [`ToolComponent`](../classes/components.ToolComponent.md)
- [`UIManager`](../classes/components.UIManager.md)

## Properties

### dispose

• **dispose**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Destroys the object from memory to prevent a
[memory leak](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects).

##### Returns

`Promise`<`void`\>

#### Defined in

temp/components/base-types/base-types.ts:59
