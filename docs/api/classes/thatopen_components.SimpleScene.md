---
id: "thatopen_components.SimpleScene"
title: "Class: SimpleScene"
sidebar_label: "SimpleScene"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).SimpleScene

A basic 3D [scene](https://threejs.org/docs/#api/en/scenes/Scene) to add
objects hierarchically, and easily dispose them when you are finished with it.

**`No Inherit Doc`**

## Hierarchy

- `BaseScene`

  ↳ **`SimpleScene`**

## Implements

- [`Configurable`](../interfaces/thatopen_components.Configurable.md)<{}\>

## Properties

### isSetup

• **isSetup**: `boolean` = `false`

[Configurable.isSetup](../interfaces/thatopen_components.Configurable.md#issetup)

#### Implementation of

[Configurable](../interfaces/thatopen_components.Configurable.md).[isSetup](../interfaces/thatopen_components.Configurable.md#issetup)

#### Defined in

[packages/core/src/core/Worlds/src/simple-scene.ts:24](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Worlds/src/simple-scene.ts#L24)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](thatopen_components.Event.md)<`unknown`\>

[Disposable.onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Inherited from

BaseScene.onDisposed

#### Defined in

[packages/core/src/core/Types/src/base-scene.ts:10](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base-scene.ts#L10)

___

### onSetup

• `Readonly` **onSetup**: [`Event`](thatopen_components.Event.md)<[`SimpleScene`](thatopen_components.SimpleScene.md)\>

[Configurable.onSetup](../interfaces/thatopen_components.Configurable.md#onsetup)

#### Implementation of

[Configurable](../interfaces/thatopen_components.Configurable.md).[onSetup](../interfaces/thatopen_components.Configurable.md#onsetup)

#### Defined in

[packages/core/src/core/Worlds/src/simple-scene.ts:29](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Worlds/src/simple-scene.ts#L29)

## Methods

### dispose

▸ **dispose**(): `void`

[Disposable.dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Returns

`void`

#### Inherited from

BaseScene.dispose

#### Defined in

[packages/core/src/core/Types/src/base-scene.ts:19](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base-scene.ts#L19)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/thatopen_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

BaseScene.isConfigurable

#### Defined in

[packages/core/src/core/Types/src/base.ts:39](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base.ts#L39)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/thatopen_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

BaseScene.isDisposeable

#### Defined in

[packages/core/src/core/Types/src/base.ts:17](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base.ts#L17)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/thatopen_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

BaseScene.isHideable

#### Defined in

[packages/core/src/core/Types/src/base.ts:34](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base.ts#L34)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/thatopen_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

BaseScene.isResizeable

#### Defined in

[packages/core/src/core/Types/src/base.ts:22](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base.ts#L22)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/thatopen_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

BaseScene.isUpdateable

#### Defined in

[packages/core/src/core/Types/src/base.ts:27](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base.ts#L27)

___

### setup

▸ **setup**(`config?`): `void`

Creates a simple and nice default set up for the scene (e.g. lighting).

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `Partial`<`SimpleSceneConfig`\> |

#### Returns

`void`

#### Implementation of

[Configurable](../interfaces/thatopen_components.Configurable.md).[setup](../interfaces/thatopen_components.Configurable.md#setup)

#### Defined in

[packages/core/src/core/Worlds/src/simple-scene.ts:50](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Worlds/src/simple-scene.ts#L50)
