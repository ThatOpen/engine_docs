---
id: "openbim_components.SimplePlane"
title: "Class: SimplePlane"
sidebar_label: "SimplePlane"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).SimplePlane

Each of the planes created by [SimpleClipper](openbim_components.SimpleClipper.md).

## Hierarchy

- [`Component`](openbim_components.Component.md)<`THREE.Plane`\>

  ↳ **`SimplePlane`**

  ↳↳ [`EdgesPlane`](openbim_components.EdgesPlane.md)

## Implements

- [`Disposable`](../interfaces/openbim_components.Disposable.md)
- [`Hideable`](../interfaces/openbim_components.Hideable.md)

## Properties

### name

• **name**: `string` = `"SimplePlane"`

Component.name

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:14](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L14)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](openbim_components.Event.md)<`undefined`\>

[Disposable.onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:23](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L23)

___

### onDraggingEnded

• `Readonly` **onDraggingEnded**: [`Event`](openbim_components.Event.md)<`void`\>

Event that fires when the user stops dragging a clipping plane.

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:20](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L20)

___

### onDraggingStarted

• `Readonly` **onDraggingStarted**: [`Event`](openbim_components.Event.md)<`void`\>

Event that fires when the user starts dragging a clipping plane.

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:17](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L17)

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[Component.enabled](openbim_components.Component.md#enabled)

#### Returns

`boolean`

#### Overrides

Component.enabled

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:47](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L47)

• `set` **enabled**(`state`): `void`

[Component.enabled](openbim_components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Overrides

Component.enabled

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:52](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L52)

___

### meshes

• `get` **meshes**(): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

The meshes used for raycasting

#### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:71](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L71)

___

### planeMaterial

• `get` **planeMaterial**(): `Material` \| `Material`[]

The material of the clipping plane representation.

#### Returns

`Material` \| `Material`[]

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:76](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L76)

• `set` **planeMaterial**(`material`): `void`

The material of the clipping plane representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `Material` \| `Material`[] |

#### Returns

`void`

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:81](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L81)

___

### size

• `get` **size**(): `number`

The size of the clipping plane representation.

#### Returns

`number`

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:86](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L86)

• `set` **size**(`size`): `void`

Sets the size of the clipping plane representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:91](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L91)

___

### visible

• `get` **visible**(): `boolean`

[Hideable.visible](../interfaces/openbim_components.Hideable.md#visible)

#### Returns

`boolean`

#### Implementation of

[Hideable](../interfaces/openbim_components.Hideable.md).[visible](../interfaces/openbim_components.Hideable.md#visible)

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:58](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L58)

• `set` **visible**(`state`): `void`

[Hideable.visible](../interfaces/openbim_components.Hideable.md#visible)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Implementation of

[Hideable](../interfaces/openbim_components.Hideable.md).[visible](../interfaces/openbim_components.Hideable.md#visible)

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:63](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L63)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:142](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L142)

___

### get

▸ **get**(): `Plane`

[Component.get](openbim_components.Component.md#get)

#### Returns

`Plane`

#### Overrides

[Component](openbim_components.Component.md).[get](openbim_components.Component.md#get)

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:137](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L137)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](openbim_components.Component.md).[hasUI](openbim_components.Component.md#hasui)

#### Defined in

[src/base-types/component.ts:62](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](openbim_components.Component.md).[isConfigurable](openbim_components.Component.md#isconfigurable)

#### Defined in

[src/base-types/component.ts:57](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](openbim_components.Component.md).[isDisposeable](openbim_components.Component.md#isdisposeable)

#### Defined in

[src/base-types/component.ts:35](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](openbim_components.Component.md).[isHideable](openbim_components.Component.md#ishideable)

#### Defined in

[src/base-types/component.ts:52](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](openbim_components.Component.md).[isResizeable](openbim_components.Component.md#isresizeable)

#### Defined in

[src/base-types/component.ts:40](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](openbim_components.Component.md).[isUpdateable](openbim_components.Component.md#isupdateable)

#### Defined in

[src/base-types/component.ts:45](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L45)

___

### update

▸ **update**(): `void`

[Updateable.update](../interfaces/openbim_components.Updateable.md#update)

#### Returns

`void`

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:128](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L128)
