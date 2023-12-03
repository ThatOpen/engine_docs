---
id: "openbim_components.Disposable"
title: "Interface: Disposable"
sidebar_label: "Disposable"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).Disposable

Whether this component has to be manually destroyed once you are done with
it to prevent
[memory leaks](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects).
This also ensures that the DOM events created by that component will be
cleaned up.

## Implemented by

- [`CubeMap`](../classes/openbim_components.CubeMap.md)
- [`FragmentBoundingBox`](../classes/openbim_components.FragmentBoundingBox.md)
- [`FragmentIfcLoader`](../classes/openbim_components.FragmentIfcLoader.md)
- [`FragmentManager`](../classes/openbim_components.FragmentManager.md)
- [`FragmentPlans`](../classes/openbim_components.FragmentPlans.md)
- [`LengthMeasurement`](../classes/openbim_components.LengthMeasurement.md)
- [`LocalCacher`](../classes/openbim_components.LocalCacher.md)
- [`MaterialManager`](../classes/openbim_components.MaterialManager.md)
- [`Mouse`](../classes/openbim_components.Mouse.md)
- [`ScreenCuller`](../classes/openbim_components.ScreenCuller.md)
- [`Simple2DScene`](../classes/openbim_components.Simple2DScene.md)
- [`SimpleCamera`](../classes/openbim_components.SimpleCamera.md)
- [`SimpleClipper`](../classes/openbim_components.SimpleClipper.md)
- [`SimpleGrid`](../classes/openbim_components.SimpleGrid.md)
- [`SimplePlane`](../classes/openbim_components.SimplePlane.md)
- [`SimpleRaycaster`](../classes/openbim_components.SimpleRaycaster.md)
- [`SimpleRenderer`](../classes/openbim_components.SimpleRenderer.md)
- [`SimpleScene`](../classes/openbim_components.SimpleScene.md)
- [`ToolComponent`](../classes/openbim_components.ToolComponent.md)
- [`UIManager`](../classes/openbim_components.UIManager.md)

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

[src/base-types/base-types.ts:59](https://github.com/ifcjs/components/blob/e46138a/src/base-types/base-types.ts#L59)
