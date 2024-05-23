---
id: "thatopen_components.BoundingBoxer"
title: "Class: BoundingBoxer"
sidebar_label: "BoundingBoxer"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).BoundingBoxer

A simple implementation of bounding box that works for fragments. The resulting bbox is not 100% precise, but
it's fast, and should suffice for general use cases such as camera zooming or general boundary determination.

## Hierarchy

- [`Component`](thatopen_components.Component.md)

  ↳ **`BoundingBoxer`**

## Implements

- [`Disposable`](../interfaces/thatopen_components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](thatopen_components.Component.md#enabled)

#### Overrides

[Component](thatopen_components.Component.md).[enabled](thatopen_components.Component.md#enabled)

#### Defined in

[packages/core/src/fragments/BoundingBoxer/index.ts:14](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/fragments/BoundingBoxer/index.ts#L14)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](thatopen_components.Event.md)<`unknown`\>

[Disposable.onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/thatopen_components.Disposable.md).[onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Defined in

[packages/core/src/fragments/BoundingBoxer/index.ts:17](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/fragments/BoundingBoxer/index.ts#L17)

## Methods

### dispose

▸ **dispose**(): `void`

[Disposable.dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[Disposable](../interfaces/thatopen_components.Disposable.md).[dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Defined in

[packages/core/src/fragments/BoundingBoxer/index.ts:68](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/fragments/BoundingBoxer/index.ts#L68)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/thatopen_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](thatopen_components.Component.md).[isConfigurable](thatopen_components.Component.md#isconfigurable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:39](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L39)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/thatopen_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](thatopen_components.Component.md).[isDisposeable](thatopen_components.Component.md#isdisposeable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:17](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L17)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/thatopen_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](thatopen_components.Component.md).[isHideable](thatopen_components.Component.md#ishideable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:34](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L34)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/thatopen_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](thatopen_components.Component.md).[isResizeable](thatopen_components.Component.md#isresizeable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:22](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L22)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/thatopen_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](thatopen_components.Component.md).[isUpdateable](thatopen_components.Component.md#isupdateable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:27](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L27)
