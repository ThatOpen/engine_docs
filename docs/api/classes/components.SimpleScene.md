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

components/core/SimpleScene/index.ts:13

___

### name

• **name**: `string` = `"SimpleScene"`

[name](components.Component.md#name)

#### Overrides

[Component](components.Component.md).[name](components.Component.md#name)

#### Defined in

components/core/SimpleScene/index.ts:16

## Methods

### dispose

▸ **dispose**(): `void`

[dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

components/core/SimpleScene/index.ts:33

___

### get

▸ **get**(): `Scene`

[get](components.Component.md#get)

#### Returns

`Scene`

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

components/core/SimpleScene/index.ts:28
