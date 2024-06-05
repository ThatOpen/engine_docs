---
id: "thatopen_components.Cullers"
title: "Class: Cullers"
sidebar_label: "Cullers"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).Cullers

A tool to handle big scenes efficiently by automatically hiding the objects
that are not visible to the camera.

## Hierarchy

- [`Component`](thatopen_components.Component.md)

  ↳ **`Cullers`**

## Implements

- [`Disposable`](../interfaces/thatopen_components.Disposable.md)

## Properties

### list

• **list**: `Map`<`string`, [`MeshCullerRenderer`](thatopen_components.MeshCullerRenderer.md)\>

A map of MeshCullerRenderer instances, keyed by their world UUIDs.

#### Defined in

[packages/core/src/core/Cullers/index.ts:26](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Cullers/index.ts#L26)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](thatopen_components.Event.md)<`unknown`\>

An event that is triggered when the Cullers component is disposed.

#### Implementation of

[Disposable](../interfaces/thatopen_components.Disposable.md).[onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Defined in

[packages/core/src/core/Cullers/index.ts:31](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Cullers/index.ts#L31)

___

### uuid

▪ `Static` `Readonly` **uuid**: ``"69f2a50d-c266-44fc-b1bd-fa4d34be89e6"``

A unique identifier for the Cullers component.

#### Defined in

[packages/core/src/core/Cullers/index.ts:16](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Cullers/index.ts#L16)

## Accessors

### enabled

• `get` **enabled**(): `boolean`

Gets the enabled state of the Cullers component.

#### Returns

`boolean`

The current enabled state.

#### Overrides

Component.enabled

#### Defined in

[packages/core/src/core/Cullers/index.ts:38](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Cullers/index.ts#L38)

• `set` **enabled**(`value`): `void`

Sets the enabled state of the Cullers component.
Also sets the enabled state of all MeshCullerRenderer instances.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The new enabled state. |

#### Returns

`void`

#### Overrides

Component.enabled

#### Defined in

[packages/core/src/core/Cullers/index.ts:48](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Cullers/index.ts#L48)

## Methods

### create

▸ **create**(`world`, `config?`): [`MeshCullerRenderer`](thatopen_components.MeshCullerRenderer.md)

Creates a new MeshCullerRenderer for the given world.
If a MeshCullerRenderer already exists for the world, it will return the existing one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `world` | `World` | The world for which to create the MeshCullerRenderer. |
| `config?` | `Partial`<`CullerRendererSettings`\> | Optional configuration settings for the MeshCullerRenderer. |

#### Returns

[`MeshCullerRenderer`](thatopen_components.MeshCullerRenderer.md)

The newly created or existing MeshCullerRenderer for the given world.

#### Defined in

[packages/core/src/core/Cullers/index.ts:69](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Cullers/index.ts#L69)

___

### dispose

▸ **dispose**(): `void`

[Disposable.dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[Disposable](../interfaces/thatopen_components.Disposable.md).[dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Defined in

[packages/core/src/core/Cullers/index.ts:87](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Cullers/index.ts#L87)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/thatopen_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](thatopen_components.Component.md).[isConfigurable](thatopen_components.Component.md#isconfigurable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:39](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base.ts#L39)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/thatopen_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](thatopen_components.Component.md).[isDisposeable](thatopen_components.Component.md#isdisposeable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:17](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base.ts#L17)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/thatopen_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](thatopen_components.Component.md).[isHideable](thatopen_components.Component.md#ishideable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:34](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base.ts#L34)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/thatopen_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](thatopen_components.Component.md).[isResizeable](thatopen_components.Component.md#isresizeable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:22](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base.ts#L22)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/thatopen_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](thatopen_components.Component.md).[isUpdateable](thatopen_components.Component.md#isupdateable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:27](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base.ts#L27)
