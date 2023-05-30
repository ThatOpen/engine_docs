---
id: "components.FragmentManager"
title: "Class: FragmentManager"
sidebar_label: "FragmentManager"
custom_edit_url: null
---

[components](../modules/components.md).FragmentManager

Object that can efficiently load binary files that contain
[fragment geometry](https://github.com/ifcjs/fragment).

## Hierarchy

- [`Component`](components.Component.md)<`Fragment`[]\>

  ↳ **`FragmentManager`**

## Implements

- [`Disposable`](../interfaces/components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[enabled](components.Component.md#enabled)

#### Overrides

[Component](components.Component.md).[enabled](components.Component.md#enabled)

#### Defined in

temp/components/fragments/FragmentManager/index.ts:18

___

### list

• **list**: `Object` = `{}`

All the created [fragments](https://github.com/ifcjs/fragment).

#### Index signature

▪ [guid: `string`]: `Fragment`

#### Defined in

temp/components/fragments/FragmentManager/index.ts:21

___

### name

• **name**: `string` = `"FragmentsComponent"`

[name](components.Component.md#name)

#### Overrides

[Component](components.Component.md).[name](components.Component.md#name)

#### Defined in

temp/components/fragments/FragmentManager/index.ts:15

## Accessors

### meshes

• `get` **meshes**(): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[]

The list of meshes of the created fragments.

#### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[]

#### Defined in

temp/components/fragments/FragmentManager/index.ts:29

## Methods

### dispose

▸ **dispose**(): `void`

[get](components.Component.md#get)

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

temp/components/fragments/FragmentManager/index.ts:48

___

### export

▸ **export**(`ids?`): `Uint8Array`

Export the specified fragments.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | the IDs of the fragments to export. By default, it's all the IDs of the existing fragments of [list](components.FragmentManager.md#list). |

#### Returns

`Uint8Array`

the exported data as binary buffer.

#### Defined in

temp/components/fragments/FragmentManager/index.ts:91

___

### get

▸ **get**(): `Fragment`[]

[get](components.Component.md#get)

#### Returns

`Fragment`[]

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/fragments/FragmentManager/index.ts:43

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](components.Component.md).[hasUI](components.Component.md#hasui)

#### Defined in

temp/components/base-types/component.ts:48

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](components.Component.md).[isDisposeable](components.Component.md#isdisposeable)

#### Defined in

temp/components/base-types/component.ts:28

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](components.Component.md).[isHideable](components.Component.md#ishideable)

#### Defined in

temp/components/base-types/component.ts:43

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](components.Component.md).[isResizeable](components.Component.md#isresizeable)

#### Defined in

temp/components/base-types/component.ts:33

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](components.Component.md).[isUpdateable](components.Component.md#isupdateable)

#### Defined in

temp/components/base-types/component.ts:38

___

### load

▸ **load**(`data`): `string`[]

Loads one or many fragments into the scene.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | the bytes containing the data for the fragments to load. |

#### Returns

`string`[]

the list of IDs of the loaded fragments.

#### Defined in

temp/components/fragments/FragmentManager/index.ts:71

___

### reset

▸ **reset**(): `void`

Disposes all existing fragments

#### Returns

`void`

#### Defined in

temp/components/fragments/FragmentManager/index.ts:58
