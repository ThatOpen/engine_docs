---
id: "components.SimpleGrid"
title: "Class: SimpleGrid"
sidebar_label: "SimpleGrid"
custom_edit_url: null
---

[components](../modules/components.md).SimpleGrid

An infinite grid. Created by
[fyrestar](https://github.com/Fyrestar/THREE.InfiniteGridHelper)
and translated to typescript by
[dkaraush](https://github.com/dkaraush/THREE.InfiniteGridHelper/blob/master/InfiniteGridHelper.ts).

## Hierarchy

- [`Component`](components.Component.md)<`THREE.Mesh`\>

  ↳ **`SimpleGrid`**

## Implements

- [`Hideable`](../interfaces/components.Hideable.md)
- [`Disposable`](../interfaces/components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[enabled](components.Component.md#enabled)

#### Overrides

[Component](components.Component.md).[enabled](components.Component.md#enabled)

#### Defined in

temp/components/core/SimpleGrid/index.ts:21

## Accessors

### fade

• `get` **fade**(): `boolean`

Whether the grid should fade away with distance. Recommended to be true for
perspective cameras and false for orthographic cameras.

#### Returns

`boolean`

#### Defined in

temp/components/core/SimpleGrid/index.ts:47

• `set` **fade**(`active`): `void`

Whether the grid should fade away with distance. Recommended to be true for
perspective cameras and false for orthographic cameras.

#### Parameters

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |

#### Returns

`void`

#### Defined in

temp/components/core/SimpleGrid/index.ts:55

___

### material

• `get` **material**(): `ShaderMaterial`

The material of the grid.

#### Returns

`ShaderMaterial`

#### Defined in

temp/components/core/SimpleGrid/index.ts:39

___

### visible

• `get` **visible**(): `boolean`

[visible](../interfaces/components.Hideable.md#visible)

#### Returns

`boolean`

#### Implementation of

[Hideable](../interfaces/components.Hideable.md).[visible](../interfaces/components.Hideable.md#visible)

#### Defined in

temp/components/core/SimpleGrid/index.ts:24

• `set` **visible**(`visible`): `void`

[visible](../interfaces/components.Hideable.md#visible)

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Implementation of

[Hideable](../interfaces/components.Hideable.md).[visible](../interfaces/components.Hideable.md#visible)

#### Defined in

temp/components/core/SimpleGrid/index.ts:29

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/components.Disposable.md).[dispose](../interfaces/components.Disposable.md#dispose)

#### Defined in

temp/components/core/SimpleGrid/index.ts:186

___

### get

▸ **get**(): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>

[get](components.Component.md#get)

#### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/core/SimpleGrid/index.ts:181

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
