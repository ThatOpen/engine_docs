---
id: "SimpleGrid"
title: "Class: SimpleGrid"
sidebar_label: "SimpleGrid"
sidebar_position: 0
custom_edit_url: null
---

A basic
[Three.js grid helper](https://threejs.org/docs/#api/en/helpers/GridHelper).

## Hierarchy

- [`Component`](Component.md)<`THREE.GridHelper`\>

  ↳ **`SimpleGrid`**

## Implements

- [`Hideable`](../interfaces/Hideable.md)
- [`Disposable`](../interfaces/Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[enabled](Component.md#enabled)

#### Overrides

[Component](Component.md).[enabled](Component.md#enabled)

#### Defined in

core/SimpleGrid/index.ts:17

___

### name

• **name**: `string` = `"SimpleGrid"`

[name](Component.md#name)

#### Overrides

[Component](Component.md).[name](Component.md#name)

#### Defined in

core/SimpleGrid/index.ts:14

## Accessors

### visible

• `get` **visible**(): `boolean`

[visible](../interfaces/Hideable.md#visible)

#### Returns

`boolean`

#### Implementation of

[Hideable](../interfaces/Hideable.md).[visible](../interfaces/Hideable.md#visible)

#### Defined in

core/SimpleGrid/index.ts:20

• `set` **visible**(`visible`): `void`

[visible](../interfaces/Hideable.md#visible)

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Implementation of

[Hideable](../interfaces/Hideable.md).[visible](../interfaces/Hideable.md#visible)

#### Defined in

core/SimpleGrid/index.ts:25

## Methods

### dispose

▸ **dispose**(): `void`

[dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

core/SimpleGrid/index.ts:45

___

### get

▸ **get**(): `GridHelper`

[get](Component.md#get)

#### Returns

`GridHelper`

#### Overrides

[Component](Component.md).[get](Component.md#get)

#### Defined in

core/SimpleGrid/index.ts:40

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](Component.md).[isDisposeable](Component.md#isdisposeable)

#### Defined in

types/component.ts:27

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](Component.md).[isHideable](Component.md#ishideable)

#### Defined in

types/component.ts:42

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](Component.md).[isResizeable](Component.md#isresizeable)

#### Defined in

types/component.ts:32

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](Component.md).[isUpdateable](Component.md#isupdateable)

#### Defined in

types/component.ts:37
