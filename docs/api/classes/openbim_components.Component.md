---
id: "openbim_components.Component"
title: "Class: Component<Type>"
sidebar_label: "Component"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).Component

Components are the building blocks of this library. Everything is a
component: tools, scenes, objects, cameras, etc.
All components must inherit from this class. The `Type` parameter defines
the type of the core of this component. For instance, a component containing a

## Type parameters

| Name |
| :------ |
| `Type` |

## Hierarchy

- **`Component`**

  ↳ [`BaseRenderer`](openbim_components.BaseRenderer.md)

  ↳ [`Disposer`](openbim_components.Disposer.md)

  ↳ [`SimpleScene`](openbim_components.SimpleScene.md)

  ↳ [`ToolComponent`](openbim_components.ToolComponent.md)

  ↳ [`SimpleCamera`](openbim_components.SimpleCamera.md)

  ↳ [`SimpleGrid`](openbim_components.SimpleGrid.md)

  ↳ [`SimpleClipper`](openbim_components.SimpleClipper.md)

  ↳ [`SimplePlane`](openbim_components.SimplePlane.md)

  ↳ [`ScreenCuller`](openbim_components.ScreenCuller.md)

  ↳ [`LocalCacher`](openbim_components.LocalCacher.md)

  ↳ [`MaterialManager`](openbim_components.MaterialManager.md)

  ↳ [`Simple2DScene`](openbim_components.Simple2DScene.md)

  ↳ [`FragmentManager`](openbim_components.FragmentManager.md)

  ↳ [`FragmentIfcLoader`](openbim_components.FragmentIfcLoader.md)

  ↳ [`FragmentPlans`](openbim_components.FragmentPlans.md)

  ↳ [`FragmentBoundingBox`](openbim_components.FragmentBoundingBox.md)

  ↳ [`UIManager`](openbim_components.UIManager.md)

  ↳ [`CloudStorage`](openbim_components.CloudStorage.md)

  ↳ [`CubeMap`](openbim_components.CubeMap.md)

  ↳ [`LengthMeasurement`](openbim_components.LengthMeasurement.md)

## Properties

### enabled

• `Abstract` **enabled**: `boolean`

Whether this component is active or not. The behaviour can vary depending
on the type of component. E.g. a disabled dimension tool will stop creating
dimensions, while a disabled camera will stop moving. A disabled component
will not be updated automatically each frame.

#### Defined in

[temp/components/src/base-types/component.ts:24](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L24)

## Methods

### get

▸ **get**(`...args`): `Type`

The core of the component. For instance, if it's a camera component, it
could be a [THREE.Camera](https://threejs.org/docs/#api/en/cameras/Camera).

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`Type`

#### Defined in

[temp/components/src/base-types/component.ts:30](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L30)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Defined in

[temp/components/src/base-types/component.ts:62](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Defined in

[temp/components/src/base-types/component.ts:57](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Defined in

[temp/components/src/base-types/component.ts:35](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Defined in

[temp/components/src/base-types/component.ts:52](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Defined in

[temp/components/src/base-types/component.ts:40](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Defined in

[temp/components/src/base-types/component.ts:45](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/component.ts#L45)
