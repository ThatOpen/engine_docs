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

## Implements

- [`Disposable`](../interfaces/components.Disposable.md)
- [`Updateable`](../interfaces/components.Updateable.md)
- [`Hideable`](../interfaces/components.Hideable.md)

## Properties

### afterUpdate

• **afterUpdate**: [`Event`](components.Event.md)<`Plane`\>

[afterUpdate](../interfaces/components.Updateable.md#afterupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[afterUpdate](../interfaces/components.Updateable.md#afterupdate)

#### Defined in

components/core/SimpleClipper/simple-plane.ts:23

___

### beforeUpdate

• **beforeUpdate**: [`Event`](components.Event.md)<`Plane`\>

[beforeUpdate](../interfaces/components.Updateable.md#beforeupdate)

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[beforeUpdate](../interfaces/components.Updateable.md#beforeupdate)

#### Defined in

components/core/SimpleClipper/simple-plane.ts:26

___

### draggingEnded

• **draggingEnded**: [`Event`](components.Event.md)<`void`\>

Event that fires when the user stops dragging a clipping plane.

#### Defined in

components/core/SimpleClipper/simple-plane.ts:32

___

### draggingStarted

• **draggingStarted**: [`Event`](components.Event.md)<`void`\>

Event that fires when the user starts dragging a clipping plane.

#### Defined in

components/core/SimpleClipper/simple-plane.ts:29

___

### name

• **name**: `string` = `"SimplePlane"`

[name](components.Component.md#name)

#### Overrides

[Component](components.Component.md).[name](components.Component.md#name)

#### Defined in

components/core/SimpleClipper/simple-plane.ts:20

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[enabled](components.Component.md#enabled)

#### Returns

`boolean`

#### Overrides

Component.enabled

#### Defined in

components/core/SimpleClipper/simple-plane.ts:52

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

components/core/SimpleClipper/simple-plane.ts:57

___

### meshes

• `get` **meshes**(): `Mesh`<`BufferGeometry`, `Material` \| `Material`[]\>[]

The meshes used for raycasting

#### Returns

`Mesh`<`BufferGeometry`, `Material` \| `Material`[]\>[]

#### Defined in

components/core/SimpleClipper/simple-plane.ts:76

___

### planeMaterial

• `get` **planeMaterial**(): `Material` \| `Material`[]

The material of the clipping plane representation.

#### Returns

`Material` \| `Material`[]

#### Defined in

components/core/SimpleClipper/simple-plane.ts:81

• `set` **planeMaterial**(`material`): `void`

The material of the clipping plane representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `Material` \| `Material`[] |

#### Returns

`void`

#### Defined in

components/core/SimpleClipper/simple-plane.ts:86

___

### size

• `get` **size**(): `number`

The size of the clipping plane representation.

#### Returns

`number`

#### Defined in

components/core/SimpleClipper/simple-plane.ts:91

• `set` **size**(`size`): `void`

Sets the size of the clipping plane representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Defined in

components/core/SimpleClipper/simple-plane.ts:96

___

### visible

• `get` **visible**(): `boolean`

[visible](../interfaces/components.Hideable.md#visible)

#### Returns

`boolean`

#### Implementation of

[Hideable](../interfaces/components.Hideable.md).[visible](../interfaces/components.Hideable.md#visible)

#### Defined in

components/core/SimpleClipper/simple-plane.ts:63

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

components/core/SimpleClipper/simple-plane.ts:68

## Methods

### dispose

▸ **dispose**(): `void`

[dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

components/core/SimpleClipper/simple-plane.ts:138

___

### get

▸ **get**(): `Plane`

[get](components.Component.md#get)

#### Returns

`Plane`

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

components/core/SimpleClipper/simple-plane.ts:133

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](components.Component.md).[hasUI](components.Component.md#hasui)

#### Defined in

components/base-types/component.ts:48

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](components.Component.md).[isDisposeable](components.Component.md#isdisposeable)

#### Defined in

components/base-types/component.ts:28

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](components.Component.md).[isHideable](components.Component.md#ishideable)

#### Defined in

components/base-types/component.ts:43

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](components.Component.md).[isResizeable](components.Component.md#isresizeable)

#### Defined in

components/base-types/component.ts:33

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](components.Component.md).[isUpdateable](components.Component.md#isupdateable)

#### Defined in

components/base-types/component.ts:38

___

### update

▸ **update**(): `void`

[update](../interfaces/components.Updateable.md#update)

#### Returns

`void`

#### Implementation of

[Updateable](../interfaces/components.Updateable.md).[update](../interfaces/components.Updateable.md#update)

#### Defined in

components/core/SimpleClipper/simple-plane.ts:122
