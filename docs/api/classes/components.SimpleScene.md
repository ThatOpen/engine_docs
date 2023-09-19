---
id: "components.SimpleScene"
title: "Class: SimpleScene"
sidebar_label: "SimpleScene"
custom_edit_url: null
---

[components](../modules/components.md).SimpleScene

A basic 3D [scene](https://threejs.org/docs/#api/en/scenes/Scene) to add
objects hierarchically, and easily dispose them when you are finished with it.

## Hierarchy

- [`Component`](components.Component.md)<`THREE.Scene`\>

  ↳ **`SimpleScene`**

## Implements

- [`Disposable`](../interfaces/components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[enabled](components.Component.md#enabled)

#### Overrides

[Component](components.Component.md).[enabled](components.Component.md#enabled)

#### Defined in

temp/components/core/SimpleScene/index.ts:13

___

### name

• **name**: `string` = `"SimpleScene"`

Component.name

#### Defined in

temp/components/core/SimpleScene/index.ts:16

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/components.Disposable.md).[dispose](../interfaces/components.Disposable.md#dispose)

#### Defined in

temp/components/core/SimpleScene/index.ts:32

___

### get

▸ **get**(): `Scene`

[get](components.Component.md#get)

#### Returns

`Scene`

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/core/SimpleScene/index.ts:27

___

### setup

▸ **setup**(): `void`

Creates a simple and nice default set up for the scene (e.g. lighting).

#### Returns

`void`

#### Defined in

temp/components/core/SimpleScene/index.ts:44
