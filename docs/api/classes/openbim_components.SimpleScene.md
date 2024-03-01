---
id: "openbim_components.SimpleScene"
title: "Class: SimpleScene"
sidebar_label: "SimpleScene"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).SimpleScene

A basic 3D [scene](https://threejs.org/docs/#api/en/scenes/Scene) to add
objects hierarchically, and easily dispose them when you are finished with it.

**`No Inherit Doc`**

## Hierarchy

- [`Component`](openbim_components.Component.md)<`THREE.Scene`\>

  ↳ **`SimpleScene`**

## Implements

- [`Disposable`](../interfaces/openbim_components.Disposable.md)
- [`Configurable`](../interfaces/openbim_components.Configurable.md)<{}\>

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](openbim_components.Component.md#enabled)

#### Overrides

[Component](openbim_components.Component.md).[enabled](openbim_components.Component.md#enabled)

#### Defined in

[src/core/SimpleScene/index.ts:28](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleScene/index.ts#L28)

___

### isSetup

• **isSetup**: `boolean` = `false`

[Configurable.isSetup](../interfaces/openbim_components.Configurable.md#issetup)

#### Implementation of

[Configurable](../interfaces/openbim_components.Configurable.md).[isSetup](../interfaces/openbim_components.Configurable.md#issetup)

#### Defined in

[src/core/SimpleScene/index.ts:31](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleScene/index.ts#L31)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](openbim_components.Event.md)<`undefined`\>

[Disposable.onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Defined in

[src/core/SimpleScene/index.ts:34](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleScene/index.ts#L34)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[src/core/SimpleScene/index.ts:50](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleScene/index.ts#L50)

___

### get

▸ **get**(): `Scene`

[Component.get](openbim_components.Component.md#get)

#### Returns

`Scene`

#### Overrides

[Component](openbim_components.Component.md).[get](openbim_components.Component.md#get)

#### Defined in

[src/core/SimpleScene/index.ts:45](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleScene/index.ts#L45)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](openbim_components.Component.md).[hasUI](openbim_components.Component.md#hasui)

#### Defined in

[src/base-types/component.ts:62](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](openbim_components.Component.md).[isConfigurable](openbim_components.Component.md#isconfigurable)

#### Defined in

[src/base-types/component.ts:57](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](openbim_components.Component.md).[isDisposeable](openbim_components.Component.md#isdisposeable)

#### Defined in

[src/base-types/component.ts:35](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](openbim_components.Component.md).[isHideable](openbim_components.Component.md#ishideable)

#### Defined in

[src/base-types/component.ts:52](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](openbim_components.Component.md).[isResizeable](openbim_components.Component.md#isresizeable)

#### Defined in

[src/base-types/component.ts:40](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](openbim_components.Component.md).[isUpdateable](openbim_components.Component.md#isupdateable)

#### Defined in

[src/base-types/component.ts:45](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L45)

___

### setup

▸ **setup**(`config?`): `Promise`<`void`\>

Creates a simple and nice default set up for the scene (e.g. lighting).

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `Partial`<`SimpleSceneConfig`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Configurable](../interfaces/openbim_components.Configurable.md).[setup](../interfaces/openbim_components.Configurable.md#setup)

#### Defined in

[src/core/SimpleScene/index.ts:77](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleScene/index.ts#L77)
