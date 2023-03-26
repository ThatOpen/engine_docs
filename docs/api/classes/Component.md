---
id: "Component"
title: "Class: Component<Type>"
sidebar_label: "Component"
sidebar_position: 0
custom_edit_url: null
---

Components are the building blocks of this library. Everything is a
component: tools, scenes, objects, cameras, etc.
All components must inherit from this class.

## Type parameters

| Name |
| :------ |
| `Type` |

## Hierarchy

- **`Component`**

  ↳ [`SimpleScene`](SimpleScene.md)

  ↳ [`SimpleCamera`](SimpleCamera.md)

  ↳ [`SimpleRaycaster`](SimpleRaycaster.md)

  ↳ [`SimpleGrid`](SimpleGrid.md)

  ↳ [`BaseRenderer`](BaseRenderer.md)

## Properties

### enabled

• `Abstract` **enabled**: `boolean`

Whether this component is active or not. The behaviour can vary depending
on the type of component (e.g. a disabled dimension tool will stop creating
dimensions, while a disabled camera will stop moving. A disabled component
will not be updated automatically each frame.

#### Defined in

types/component.ts:18

___

### name

• `Abstract` **name**: `string`

The main identifier of this component.

#### Defined in

types/component.ts:10

## Methods

### get

▸ `Abstract` **get**(): `Type`

The core of the component. For instance, if it's a camera component, it
could be a [THREE.Camera](https://threejs.org/docs/#api/en/cameras/Camera).

#### Returns

`Type`

#### Defined in

types/component.ts:24

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

this is Disposable

#### Defined in

types/component.ts:27

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

this is Hideable

#### Defined in

types/component.ts:42

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

this is Resizeable

#### Defined in

types/component.ts:32

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

this is Updateable

#### Defined in

types/component.ts:37
