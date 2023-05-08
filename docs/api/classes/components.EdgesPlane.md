---
id: "components.EdgesPlane"
title: "Class: EdgesPlane"
sidebar_label: "EdgesPlane"
custom_edit_url: null
---

[components](../modules/components.md).EdgesPlane

A more advanced version of [SimpleClipper](components.SimpleClipper.md) that also includes
ClippingEdges with customizable lines.

## Hierarchy

- [`SimplePlane`](components.SimplePlane.md)

  ↳ **`EdgesPlane`**

## Properties

### afterUpdate

• **afterUpdate**: [`Event`](components.Event.md)<`Plane`\>

[afterUpdate](../interfaces/components.Updateable.md#afterupdate)

#### Inherited from

[SimplePlane](components.SimplePlane.md).[afterUpdate](components.SimplePlane.md#afterupdate)

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:23

___

### beforeUpdate

• **beforeUpdate**: [`Event`](components.Event.md)<`Plane`\>

[beforeUpdate](../interfaces/components.Updateable.md#beforeupdate)

#### Inherited from

[SimplePlane](components.SimplePlane.md).[beforeUpdate](components.SimplePlane.md#beforeupdate)

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:26

___

### draggingEnded

• **draggingEnded**: [`Event`](components.Event.md)<`void`\>

Event that fires when the user stops dragging a clipping plane.

#### Inherited from

[SimplePlane](components.SimplePlane.md).[draggingEnded](components.SimplePlane.md#draggingended)

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:32

___

### draggingStarted

• **draggingStarted**: [`Event`](components.Event.md)<`void`\>

Event that fires when the user starts dragging a clipping plane.

#### Inherited from

[SimplePlane](components.SimplePlane.md).[draggingStarted](components.SimplePlane.md#draggingstarted)

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:29

___

### edgesMaxUpdateRate

• **edgesMaxUpdateRate**: `number` = `50`

The max rate in milliseconds at which edges can be regenerated.
To disable this behaviour set this to 0.

#### Defined in

temp/components/navigation/EdgesClipper/src/edges-plane.ts:17

___

### name

• **name**: `string` = `"SimplePlane"`

[name](components.Component.md#name)

#### Inherited from

[SimplePlane](components.SimplePlane.md).[name](components.SimplePlane.md#name)

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:20

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[enabled](components.Component.md#enabled)

#### Returns

`boolean`

#### Inherited from

SimplePlane.enabled

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:52

• `set` **enabled**(`state`): `void`

[enabled](components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Inherited from

SimplePlane.enabled

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:57

___

### meshes

• `get` **meshes**(): `Mesh`<`BufferGeometry`, `Material` \| `Material`[]\>[]

The meshes used for raycasting

#### Returns

`Mesh`<`BufferGeometry`, `Material` \| `Material`[]\>[]

#### Inherited from

SimplePlane.meshes

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:76

___

### planeMaterial

• `get` **planeMaterial**(): `Material` \| `Material`[]

The material of the clipping plane representation.

#### Returns

`Material` \| `Material`[]

#### Inherited from

SimplePlane.planeMaterial

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:81

• `set` **planeMaterial**(`material`): `void`

The material of the clipping plane representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `Material` \| `Material`[] |

#### Returns

`void`

#### Inherited from

SimplePlane.planeMaterial

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:86

___

### size

• `get` **size**(): `number`

The size of the clipping plane representation.

#### Returns

`number`

#### Inherited from

SimplePlane.size

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:91

• `set` **size**(`size`): `void`

Sets the size of the clipping plane representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

SimplePlane.size

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:96

___

### visible

• `set` **visible**(`state`): `void`

[visible](../interfaces/components.Hideable.md#visible)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Overrides

SimplePlane.visible

#### Defined in

temp/components/navigation/EdgesClipper/src/edges-plane.ts:34

## Methods

### dispose

▸ **dispose**(): `void`

[dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`void`

#### Overrides

[SimplePlane](components.SimplePlane.md).[dispose](components.SimplePlane.md#dispose)

#### Defined in

temp/components/navigation/EdgesClipper/src/edges-plane.ts:40

___

### get

▸ **get**(): `Plane`

[get](components.Component.md#get)

#### Returns

`Plane`

#### Inherited from

[SimplePlane](components.SimplePlane.md).[get](components.SimplePlane.md#get)

#### Defined in

temp/components/core/SimpleClipper/simple-plane.ts:133

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/components.UI.md).

#### Returns

this is UI

#### Inherited from

[SimplePlane](components.SimplePlane.md).[hasUI](components.SimplePlane.md#hasui)

#### Defined in

temp/components/base-types/component.ts:48

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[SimplePlane](components.SimplePlane.md).[isDisposeable](components.SimplePlane.md#isdisposeable)

#### Defined in

temp/components/base-types/component.ts:28

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[SimplePlane](components.SimplePlane.md).[isHideable](components.SimplePlane.md#ishideable)

#### Defined in

temp/components/base-types/component.ts:43

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[SimplePlane](components.SimplePlane.md).[isResizeable](components.SimplePlane.md#isresizeable)

#### Defined in

temp/components/base-types/component.ts:33

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[SimplePlane](components.SimplePlane.md).[isUpdateable](components.SimplePlane.md#isupdateable)

#### Defined in

temp/components/base-types/component.ts:38

___

### update

▸ **update**(): `void`

[update](../interfaces/components.Updateable.md#update)

#### Returns

`void`

#### Overrides

[SimplePlane](components.SimplePlane.md).[update](components.SimplePlane.md#update)

#### Defined in

temp/components/navigation/EdgesClipper/src/edges-plane.ts:46
