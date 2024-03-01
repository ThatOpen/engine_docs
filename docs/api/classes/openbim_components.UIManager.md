---
id: "openbim_components.UIManager"
title: "Class: UIManager"
sidebar_label: "UIManager"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).UIManager

A component that handles all UI components.

## Hierarchy

- [`Component`](openbim_components.Component.md)<`Toolbar`[]\>

  ↳ **`UIManager`**

## Implements

- [`Disposable`](../interfaces/openbim_components.Disposable.md)

## Properties

### onDisposed

• `Readonly` **onDisposed**: [`Event`](openbim_components.Event.md)<`undefined`\>

[Disposable.onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Defined in

[temp/engine_components/src/ui/UIManager/index.ts:30](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/ui/UIManager/index.ts#L30)

## Methods

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](openbim_components.Component.md).[hasUI](openbim_components.Component.md#hasui)

#### Defined in

[temp/engine_components/src/base-types/component.ts:62](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](openbim_components.Component.md).[isConfigurable](openbim_components.Component.md#isconfigurable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:57](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](openbim_components.Component.md).[isDisposeable](openbim_components.Component.md#isdisposeable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:35](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](openbim_components.Component.md).[isHideable](openbim_components.Component.md#ishideable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:52](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](openbim_components.Component.md).[isResizeable](openbim_components.Component.md#isresizeable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:40](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](openbim_components.Component.md).[isUpdateable](openbim_components.Component.md#isupdateable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:45](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L45)
