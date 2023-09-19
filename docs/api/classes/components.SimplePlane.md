---
id: "components.SimplePlane"
title: "Class: SimplePlane"
sidebar_label: "SimplePlane"
custom_edit_url: null
---

[components](../modules/components.md).SimplePlane

Each of the planes created by [SimpleClipper](components.SimpleClipper.md).

## Hierarchy

- [`Component`](components.Component.md)<`THREE.Plane`\>

  ↳ **`SimplePlane`**

  ↳↳ [`EdgesPlane`](components.EdgesPlane.md)

## Implements

- [`Disposable`](../interfaces/components.Disposable.md)
- [`Hideable`](../interfaces/components.Hideable.md)

## Properties

### name

• **name**: `string` = `"SimplePlane"`

Component.name

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:14

___

### onDraggingEnded

• `Readonly` **onDraggingEnded**: [`Event`](components.Event.md)<`void`\>

Event that fires when the user stops dragging a clipping plane.

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:20

___

### onDraggingStarted

• `Readonly` **onDraggingStarted**: [`Event`](components.Event.md)<`void`\>

Event that fires when the user starts dragging a clipping plane.

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:17

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[enabled](components.Component.md#enabled)

#### Returns

`boolean`

#### Overrides

Component.enabled

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:42

• `set` **enabled**(`state`): `void`

[enabled](components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Overrides

Component.enabled

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:47

___

### meshes

• `get` **meshes**(): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[]

The meshes used for raycasting

#### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[]

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:66

___

### planeMaterial

• `get` **planeMaterial**(): `Material` \| `Material`[]

The material of the clipping plane representation.

#### Returns

`Material` \| `Material`[]

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:71

• `set` **planeMaterial**(`material`): `void`

The material of the clipping plane representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `Material` \| `Material`[] |

#### Returns

`void`

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:76

___

### size

• `get` **size**(): `number`

The size of the clipping plane representation.

#### Returns

`number`

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:81

• `set` **size**(`size`): `void`

Sets the size of the clipping plane representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:86

___

### visible

• `get` **visible**(): `boolean`

[visible](../interfaces/components.Hideable.md#visible)

#### Returns

`boolean`

#### Implementation of

[Hideable](../interfaces/components.Hideable.md).[visible](../interfaces/components.Hideable.md#visible)

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:53

• `set` **visible**(`state`): `void`

[visible](../interfaces/components.Hideable.md#visible)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Implementation of

[Hideable](../interfaces/components.Hideable.md).[visible](../interfaces/components.Hideable.md#visible)

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:58

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/components.Disposable.md).[dispose](../interfaces/components.Disposable.md#dispose)

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:128

___

### get

▸ **get**(): `Plane`

[get](components.Component.md#get)

#### Returns

`Plane`

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:123

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

### update

▸ **update**(): `void`

[update](../interfaces/components.Updateable.md#update)

#### Returns

`void`

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:114
