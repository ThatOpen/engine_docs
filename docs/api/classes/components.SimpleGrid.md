---
id: "components.SimpleGrid"
title: "Class: SimpleGrid"
sidebar_label: "SimpleGrid"
custom_edit_url: null
---

[components](../modules/components.md).SimpleGrid

A basic
[Three.js grid helper](https://threejs.org/docs/#api/en/helpers/GridHelper).

## Hierarchy

- [`Component`](components.Component.md)<`THREE.GridHelper`\>

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

components/core/SimpleGrid/index.ts:17

___

### name

• **name**: `string` = `"SimpleGrid"`

[name](components.Component.md#name)

#### Overrides

[Component](components.Component.md).[name](components.Component.md#name)

#### Defined in

components/core/SimpleGrid/index.ts:14

## Accessors

### visible

• `get` **visible**(): `boolean`

[visible](../interfaces/components.Hideable.md#visible)

#### Returns

`boolean`

#### Implementation of

[Hideable](../interfaces/components.Hideable.md).[visible](../interfaces/components.Hideable.md#visible)

#### Defined in

components/core/SimpleGrid/index.ts:20

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

components/core/SimpleGrid/index.ts:25

## Methods

### dispose

▸ **dispose**(): `void`

[dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

components/core/SimpleGrid/index.ts:45

___

### get

▸ **get**(): `GridHelper`

[get](components.Component.md#get)

#### Returns

`GridHelper`

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

components/core/SimpleGrid/index.ts:40

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](components.Component.md).[isDisposeable](components.Component.md#isdisposeable)

#### Defined in

components/types/component.ts:28

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](components.Component.md).[isHideable](components.Component.md#ishideable)

#### Defined in

components/types/component.ts:43

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](components.Component.md).[isResizeable](components.Component.md#isresizeable)

#### Defined in

components/types/component.ts:33

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](components.Component.md).[isUpdateable](components.Component.md#isupdateable)

#### Defined in

components/types/component.ts:38
