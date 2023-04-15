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

  ↳ [`SimpleScene`](components.SimpleScene.md)

  ↳ [`SimpleCamera`](components.SimpleCamera.md)

  ↳ [`SimpleRaycaster`](components.SimpleRaycaster.md)

  ↳ [`SimpleGrid`](components.SimpleGrid.md)

  ↳ [`BaseRenderer`](components.BaseRenderer.md)

## Properties

### enabled

• `Abstract` **enabled**: `boolean`

Whether this component is active or not. The behaviour can vary depending
on the type of component. E.g. a disabled dimension tool will stop creating
dimensions, while a disabled camera will stop moving. A disabled component
will not be updated automatically each frame.

#### Defined in

components/types/component.ts:19

___

### name

• `Abstract` **name**: `string`

The main identifier of this component. It can be used to retrieve it and index it.

#### Defined in

components/types/component.ts:11

## Methods

### get

▸ `Abstract` **get**(): `Type`

The core of the component. For instance, if it's a camera component, it
could be a [THREE.Camera](https://threejs.org/docs/#api/en/cameras/Camera).

#### Returns

`Type`

#### Defined in

components/types/component.ts:25

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/components.UI.md).

#### Returns

this is UI

#### Defined in

components/types/component.ts:48

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/components.Disposable.md).

#### Returns

this is Disposable

#### Defined in

components/types/component.ts:28

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/components.Hideable.md).

#### Returns

this is Hideable

#### Defined in

components/types/component.ts:43

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/components.Resizeable.md).

#### Returns

this is Resizeable

#### Defined in

components/types/component.ts:33

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/components.Updateable.md).

#### Returns

this is Updateable

#### Defined in

components/types/component.ts:38
