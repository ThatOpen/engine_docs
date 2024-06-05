---
id: "thatopen_components.FragmentsManager"
title: "Class: FragmentsManager"
sidebar_label: "FragmentsManager"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).FragmentsManager

Object that can efficiently load binary files that contain
[fragment geometry](https://github.com/ThatOpen/engine_fragment).

## Hierarchy

- [`Component`](thatopen_components.Component.md)

  ↳ **`FragmentsManager`**

## Implements

- [`Disposable`](../interfaces/thatopen_components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](thatopen_components.Component.md#enabled)

#### Overrides

[Component](thatopen_components.Component.md).[enabled](thatopen_components.Component.md#enabled)

#### Defined in

[packages/core/src/fragments/FragmentsManager/index.ts:31](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/fragments/FragmentsManager/index.ts#L31)

___

### list

• `Readonly` **list**: `Map`<`string`, `Fragment`\>

All the created [fragments](https://github.com/ThatOpen/engine_fragment).

#### Defined in

[packages/core/src/fragments/FragmentsManager/index.ts:26](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/fragments/FragmentsManager/index.ts#L26)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](thatopen_components.Event.md)<`unknown`\>

[Disposable.onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/thatopen_components.Disposable.md).[onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Defined in

[packages/core/src/fragments/FragmentsManager/index.ts:16](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/fragments/FragmentsManager/index.ts#L16)

## Accessors

### meshes

• `get` **meshes**(): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

The list of meshes of the created fragments.

#### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

#### Defined in

[packages/core/src/fragments/FragmentsManager/index.ts:38](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/fragments/FragmentsManager/index.ts#L38)

## Methods

### dispose

▸ **dispose**(): `void`

[Disposable.dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[Disposable](../interfaces/thatopen_components.Disposable.md).[dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Defined in

[packages/core/src/fragments/FragmentsManager/index.ts:52](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/fragments/FragmentsManager/index.ts#L52)

___

### export

▸ **export**(`group`): `Uint8Array`

Export the specified fragments.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group` | `FragmentsGroup` | the fragments group to be exported. |

#### Returns

`Uint8Array`

the exported data as binary buffer.

#### Defined in

[packages/core/src/fragments/FragmentsManager/index.ts:132](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/fragments/FragmentsManager/index.ts#L132)

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

___

### load

▸ **load**(`data`, `config?`): `FragmentsGroup`

Loads a binar file that contain fragment geometry.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The binary data to load. |
| `config?` | `Partial`<{ `coordinate`: `boolean` ; `name`: `string` ; `properties`: `IfcProperties` ; `relationsMap`: `RelationsMap`  }\> | Optional configuration for loading. |

#### Returns

`FragmentsGroup`

The loaded FragmentsGroup.

#### Defined in

[packages/core/src/fragments/FragmentsManager/index.ts:89](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/fragments/FragmentsManager/index.ts#L89)
