---
id: "openbim_components.SimpleGrid"
title: "Class: SimpleGrid"
sidebar_label: "SimpleGrid"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).SimpleGrid

An infinite grid. Created by
[fyrestar](https://github.com/Fyrestar/THREE.InfiniteGridHelper)
and translated to typescript by
[dkaraush](https://github.com/dkaraush/THREE.InfiniteGridHelper/blob/master/InfiniteGridHelper.ts).

## Hierarchy

- [`Component`](openbim_components.Component.md)<`THREE.Mesh`\>

  ↳ **`SimpleGrid`**

## Implements

- [`Hideable`](../interfaces/openbim_components.Hideable.md)
- [`Disposable`](../interfaces/openbim_components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](openbim_components.Component.md#enabled)

#### Overrides

[Component](openbim_components.Component.md).[enabled](openbim_components.Component.md#enabled)

#### Defined in

[temp/engine_components/src/core/SimpleGrid/index.ts:24](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/SimpleGrid/index.ts#L24)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](openbim_components.Event.md)<`string`\>

[Disposable.onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Defined in

[temp/engine_components/src/core/SimpleGrid/index.ts:21](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/SimpleGrid/index.ts#L21)

## Accessors

### fade

• `get` **fade**(): `boolean`

Whether the grid should fade away with distance. Recommended to be true for
perspective cameras and false for orthographic cameras.

#### Returns

`boolean`

#### Defined in

[temp/engine_components/src/core/SimpleGrid/index.ts:50](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/SimpleGrid/index.ts#L50)

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

[temp/engine_components/src/core/SimpleGrid/index.ts:58](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/SimpleGrid/index.ts#L58)

___

### material

• `get` **material**(): `ShaderMaterial`

The material of the grid.

#### Returns

`ShaderMaterial`

#### Defined in

[temp/engine_components/src/core/SimpleGrid/index.ts:42](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/SimpleGrid/index.ts#L42)

___

### visible

• `get` **visible**(): `boolean`

[Hideable.visible](../interfaces/openbim_components.Hideable.md#visible)

#### Returns

`boolean`

#### Implementation of

[Hideable](../interfaces/openbim_components.Hideable.md).[visible](../interfaces/openbim_components.Hideable.md#visible)

#### Defined in

[temp/engine_components/src/core/SimpleGrid/index.ts:27](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/SimpleGrid/index.ts#L27)

• `set` **visible**(`visible`): `void`

[Hideable.visible](../interfaces/openbim_components.Hideable.md#visible)

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Implementation of

[Hideable](../interfaces/openbim_components.Hideable.md).[visible](../interfaces/openbim_components.Hideable.md#visible)

#### Defined in

[temp/engine_components/src/core/SimpleGrid/index.ts:32](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/SimpleGrid/index.ts#L32)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[temp/engine_components/src/core/SimpleGrid/index.ts:189](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/SimpleGrid/index.ts#L189)

___

### get

▸ **get**(): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

[Component.get](openbim_components.Component.md#get)

#### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

#### Overrides

[Component](openbim_components.Component.md).[get](openbim_components.Component.md#get)

#### Defined in

[temp/engine_components/src/core/SimpleGrid/index.ts:184](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/core/SimpleGrid/index.ts#L184)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](openbim_components.Component.md).[hasUI](openbim_components.Component.md#hasui)

#### Defined in

[temp/engine_components/src/base-types/component.ts:62](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](openbim_components.Component.md).[isConfigurable](openbim_components.Component.md#isconfigurable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:57](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](openbim_components.Component.md).[isDisposeable](openbim_components.Component.md#isdisposeable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:35](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](openbim_components.Component.md).[isHideable](openbim_components.Component.md#ishideable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:52](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](openbim_components.Component.md).[isResizeable](openbim_components.Component.md#isresizeable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:40](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](openbim_components.Component.md).[isUpdateable](openbim_components.Component.md#isupdateable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:45](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/base-types/component.ts#L45)
