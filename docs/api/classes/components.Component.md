---
id: "components.Component"
title: "Class: Component<Type>"
sidebar_label: "Component"
custom_edit_url: null
---

[components](../modules/components.md).Component

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

  ↳ [`BaseRenderer`](components.BaseRenderer.md)

  ↳ [`Disposer`](components.Disposer.md)

  ↳ [`SimpleScene`](components.SimpleScene.md)

  ↳ [`ToolComponent`](components.ToolComponent.md)

  ↳ [`SimpleCamera`](components.SimpleCamera.md)

  ↳ [`SimpleGrid`](components.SimpleGrid.md)

  ↳ [`SimpleClipper`](components.SimpleClipper.md)

  ↳ [`SimplePlane`](components.SimplePlane.md)

  ↳ [`ScreenCuller`](components.ScreenCuller.md)

  ↳ [`LocalCacher`](components.LocalCacher.md)

  ↳ [`MaterialManager`](components.MaterialManager.md)

  ↳ [`Simple2DScene`](components.Simple2DScene.md)

  ↳ [`FragmentManager`](components.FragmentManager.md)

  ↳ [`FragmentIfcLoader`](components.FragmentIfcLoader.md)

  ↳ [`FragmentPlans`](components.FragmentPlans.md)

  ↳ [`FragmentBoundingBox`](components.FragmentBoundingBox.md)

  ↳ [`UIManager`](components.UIManager.md)

  ↳ [`CloudProcessor`](components.CloudProcessor.md)

  ↳ [`LengthMeasurement`](components.LengthMeasurement.md)

## Properties

### enabled

• `Abstract` **enabled**: `boolean`

Whether this component is active or not. The behaviour can vary depending
on the type of component. E.g. a disabled dimension tool will stop creating
dimensions, while a disabled camera will stop moving. A disabled component
will not be updated automatically each frame.

#### Defined in

temp/components/base-types/component.ts:17

## Methods

### get

▸ `Abstract` **get**(`...args`): `Type`

The core of the component. For instance, if it's a camera component, it
could be a [THREE.Camera](https://threejs.org/docs/#api/en/cameras/Camera).

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`Type`

#### Defined in

temp/components/base-types/component.ts:23

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/components.UI.md).

#### Returns

this is UI

#### Defined in

temp/components/base-types/component.ts:50

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/components.Disposable.md).

#### Returns

this is Disposable

#### Defined in

temp/components/base-types/component.ts:28

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/components.Hideable.md).

#### Returns

this is Hideable

#### Defined in

temp/components/base-types/component.ts:45

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/components.Resizeable.md).

#### Returns

this is Resizeable

#### Defined in

temp/components/base-types/component.ts:33

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/components.Updateable.md).

#### Returns

this is Updateable

#### Defined in

temp/components/base-types/component.ts:38
