---
id: "thatopen_components.Component"
title: "Class: Component"
sidebar_label: "Component"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).Component

Components are the building blocks of this library. Components are singleton
elements that contain specific functionality. For instance, the SimpleClipper
Component can create, delete and handle 3D clipping planes. Components must be
unique (they can't be instanced more than once), and have a static UUID that
identifies them uniquely. The can be accessed globally using the [Components](thatopen_components.Components.md)
instance.

## Hierarchy

- [`Base`](thatopen_components.Base.md)

  ↳ **`Component`**

  ↳↳ [`Disposer`](thatopen_components.Disposer.md)

  ↳↳ [`Clipper`](thatopen_components.Clipper.md)

  ↳↳ [`Cullers`](thatopen_components.Cullers.md)

  ↳↳ [`BoundingBoxer`](thatopen_components.BoundingBoxer.md)

  ↳↳ [`FragmentsManager`](thatopen_components.FragmentsManager.md)

  ↳↳ [`IfcJsonExporter`](thatopen_components.IfcJsonExporter.md)

  ↳↳ [`IfcRelationsIndexer`](thatopen_components.IfcRelationsIndexer.md)

## Properties

### enabled

• `Abstract` **enabled**: `boolean`

Whether this component is active or not. The behaviour can vary depending
on the type of component. E.g. a disabled dimension tool will stop creating
dimensions, while a disabled camera will stop moving. A disabled component
will not be updated automatically each frame.

#### Defined in

[packages/core/src/core/Types/src/component.ts:19](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/component.ts#L19)

## Methods

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/thatopen_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Base](thatopen_components.Base.md).[isConfigurable](thatopen_components.Base.md#isconfigurable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:39](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L39)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/thatopen_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Base](thatopen_components.Base.md).[isDisposeable](thatopen_components.Base.md#isdisposeable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:17](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L17)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/thatopen_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Base](thatopen_components.Base.md).[isHideable](thatopen_components.Base.md#ishideable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:34](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L34)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/thatopen_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Base](thatopen_components.Base.md).[isResizeable](thatopen_components.Base.md#isresizeable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:22](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L22)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/thatopen_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Base](thatopen_components.Base.md).[isUpdateable](thatopen_components.Base.md#isupdateable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:27](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L27)
