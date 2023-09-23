---
id: "components.MaterialManager"
title: "Class: MaterialManager"
sidebar_label: "MaterialManager"
custom_edit_url: null
---

[components](../modules/components.md).MaterialManager

A tool to easily handle the materials of massive amounts of
objects and scene background easily.

## Hierarchy

- [`Component`](components.Component.md)<`string`[]\>

  ↳ **`MaterialManager`**

## Implements

- [`Disposable`](../interfaces/components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](components.Component.md#enabled)

#### Overrides

[Component](components.Component.md).[enabled](components.Component.md#enabled)

#### Defined in

temp/components/core/MaterialManager/index.ts:17

## Methods

### addMaterial

▸ **addMaterial**(`id`, `material`): `void`

Creates a new material style.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the identifier of the style to create. |
| `material` | `Material` | the material of the style. |

#### Returns

`void`

#### Defined in

temp/components/core/MaterialManager/index.ts:120

___

### addMeshes

▸ **addMeshes**(`id`, `meshes`): `void`

Assign meshes to a certain style.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the identifier of the style. |
| `meshes` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[] | the meshes to assign to the style. |

#### Returns

`void`

#### Defined in

temp/components/core/MaterialManager/index.ts:132

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/components.Disposable.md).[dispose](../interfaces/components.Disposable.md#dispose)

#### Defined in

temp/components/core/MaterialManager/index.ts:80

___

### get

▸ **get**(): `string`[]

[Component.get](components.Component.md#get).

#### Returns

`string`[]

list of created materials.

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/core/MaterialManager/index.ts:44

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](components.Component.md).[hasUI](components.Component.md#hasui)

#### Defined in

temp/components/base-types/component.ts:50

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

temp/components/base-types/component.ts:45

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

### resetBackgroundColor

▸ **resetBackgroundColor**(): `void`

Resets the scene background to the color that was being used
before applying the material manager.

#### Returns

`void`

#### Defined in

temp/components/core/MaterialManager/index.ts:108

___

### set

▸ **set**(`active`, `ids?`): `void`

Turns the specified material styles on or off.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | whether to turn it on or off. |
| `ids` | `string`[] | the ids of the style to turn on or off. |

#### Returns

`void`

#### Defined in

temp/components/core/MaterialManager/index.ts:54

___

### setBackgroundColor

▸ **setBackgroundColor**(`color`): `void`

Sets the color of the background of the scene.

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `Color` |

#### Returns

`void`

#### Defined in

temp/components/core/MaterialManager/index.ts:94
