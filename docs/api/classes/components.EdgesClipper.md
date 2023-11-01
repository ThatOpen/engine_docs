---
id: "components.EdgesClipper"
title: "Class: EdgesClipper"
sidebar_label: "EdgesClipper"
custom_edit_url: null
---

[components](../modules/components.md).EdgesClipper

A more advanced version of [SimpleClipper](components.SimpleClipper.md) that also supports
ClippingEdges with customizable lines.

## Hierarchy

- [`SimpleClipper`](components.SimpleClipper.md)<[`EdgesPlane`](components.EdgesPlane.md)\>

  ↳ **`EdgesClipper`**

## Properties

### onAfterCreate

• `Readonly` **onAfterCreate**: [`Event`](components.Event.md)<[`EdgesPlane`](components.EdgesPlane.md)\>

[Createable.onAfterCreate](../interfaces/components.Createable.md#onaftercreate)

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[onAfterCreate](components.SimpleClipper.md#onaftercreate)

#### Defined in

temp/components/core/SimpleClipper/index.ts:35

___

### onAfterDelete

• `Readonly` **onAfterDelete**: [`Event`](components.Event.md)<[`EdgesPlane`](components.EdgesPlane.md)\>

[Createable.onAfterDelete](../interfaces/components.Createable.md#onafterdelete)

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[onAfterDelete](components.SimpleClipper.md#onafterdelete)

#### Defined in

temp/components/core/SimpleClipper/index.ts:38

___

### onAfterDrag

• `Readonly` **onAfterDrag**: [`Event`](components.Event.md)<`void`\>

Event that fires when the user stops dragging a clipping plane.

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[onAfterDrag](components.SimpleClipper.md#onafterdrag)

#### Defined in

temp/components/core/SimpleClipper/index.ts:44

___

### onBeforeDrag

• `Readonly` **onBeforeDrag**: [`Event`](components.Event.md)<`void`\>

Event that fires when the user starts dragging a clipping plane.

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[onBeforeDrag](components.SimpleClipper.md#onbeforedrag)

#### Defined in

temp/components/core/SimpleClipper/index.ts:41

___

### orthogonalY

• **orthogonalY**: `boolean` = `false`

Whether to force the clipping plane to be orthogonal in the Y direction
(up). This is desirable when clipping a building horizontally and a
clipping plane is created in it's roof, which might have a slight
slope for draining purposes.

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[orthogonalY](components.SimpleClipper.md#orthogonaly)

#### Defined in

temp/components/core/SimpleClipper/index.ts:60

___

### styles

• **styles**: `EdgesStyles`

The list of defined LineStyle instances.

#### Defined in

temp/components/navigation/EdgesClipper/index.ts:14

___

### toleranceOrthogonalY

• **toleranceOrthogonalY**: `number` = `0.7`

The tolerance that determines whether a horizontallish clipping plane
will be forced to be orthogonal to the Y direction. [orthogonalY](components.SimpleClipper.md#orthogonaly)
has to be `true` for this to apply.

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[toleranceOrthogonalY](components.SimpleClipper.md#toleranceorthogonaly)

#### Defined in

temp/components/core/SimpleClipper/index.ts:67

___

### uiElement

• **uiElement**: [`UIElement`](components.UIElement.md)<{ `main`: `Button`  }\>

[UI.uiElement](../interfaces/components.UI.md#uielement)

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[uiElement](components.SimpleClipper.md#uielement)

#### Defined in

temp/components/core/SimpleClipper/index.ts:52

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[Component.enabled](components.Component.md#enabled)

#### Returns

`boolean`

#### Inherited from

SimpleClipper.enabled

#### Defined in

temp/components/core/SimpleClipper/index.ts:85

• `set` **enabled**(`state`): `void`

[Component.enabled](components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Inherited from

SimpleClipper.enabled

#### Defined in

temp/components/core/SimpleClipper/index.ts:90

___

### material

• `get` **material**(): `Material`

The material of the clipping plane representation.

#### Returns

`Material`

#### Inherited from

SimpleClipper.material

#### Defined in

temp/components/core/SimpleClipper/index.ts:115

• `set` **material**(`material`): `void`

The material of the clipping plane representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `Material` |

#### Returns

`void`

#### Inherited from

SimpleClipper.material

#### Defined in

temp/components/core/SimpleClipper/index.ts:120

___

### size

• `get` **size**(): `number`

The size of the geometric representation of the clippings planes.

#### Returns

`number`

#### Inherited from

SimpleClipper.size

#### Defined in

temp/components/core/SimpleClipper/index.ts:128

• `set` **size**(`size`): `void`

The size of the geometric representation of the clippings planes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

SimpleClipper.size

#### Defined in

temp/components/core/SimpleClipper/index.ts:133

___

### visible

• `get` **visible**(): `boolean`

[Hideable.visible](../interfaces/components.Hideable.md#visible)

#### Returns

`boolean`

#### Inherited from

SimpleClipper.visible

#### Defined in

temp/components/core/SimpleClipper/index.ts:102

• `set` **visible**(`state`): `void`

[Hideable.visible](../interfaces/components.Hideable.md#visible)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Inherited from

SimpleClipper.visible

#### Defined in

temp/components/core/SimpleClipper/index.ts:107

## Methods

### create

▸ **create**(): `void`

[Createable.create](../interfaces/components.Createable.md#create)

#### Returns

`void`

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[create](components.SimpleClipper.md#create)

#### Defined in

temp/components/core/SimpleClipper/index.ts:179

___

### createFromNormalAndCoplanarPoint

▸ **createFromNormalAndCoplanarPoint**(`normal`, `point`): [`EdgesPlane`](components.EdgesPlane.md)

Creates a plane in a certain place and with a certain orientation,
without the need of the mouse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `normal` | `Vector3` | the orientation of the clipping plane. |
| `point` | `Vector3` | the position of the clipping plane. |

#### Returns

[`EdgesPlane`](components.EdgesPlane.md)

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[createFromNormalAndCoplanarPoint](components.SimpleClipper.md#createfromnormalandcoplanarpoint)

#### Defined in

temp/components/core/SimpleClipper/index.ts:195

___

### delete

▸ **delete**(`plane?`): `void`

[Createable.delete](../interfaces/components.Createable.md#delete)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plane?` | [`EdgesPlane`](components.EdgesPlane.md) | the plane to delete. If undefined, the the first plane found under the cursor will be deleted. |

#### Returns

`void`

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[delete](components.SimpleClipper.md#delete)

#### Defined in

temp/components/core/SimpleClipper/index.ts:210

___

### deleteAll

▸ **deleteAll**(): `void`

Deletes all the existing clipping planes.

#### Returns

`void`

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[deleteAll](components.SimpleClipper.md#deleteall)

#### Defined in

temp/components/core/SimpleClipper/index.ts:222

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Component.get](components.Component.md#get)

#### Returns

`Promise`<`void`\>

#### Overrides

[SimpleClipper](components.SimpleClipper.md).[dispose](components.SimpleClipper.md#dispose)

#### Defined in

temp/components/navigation/EdgesClipper/index.ts:26

___

### get

▸ **get**(): [`EdgesPlane`](components.EdgesPlane.md)[]

[Component.get](components.Component.md#get)

#### Returns

[`EdgesPlane`](components.EdgesPlane.md)[]

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[get](components.SimpleClipper.md#get)

#### Defined in

temp/components/core/SimpleClipper/index.ts:155

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/components.UI.md).

#### Returns

this is UI

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[hasUI](components.SimpleClipper.md#hasui)

#### Defined in

temp/components/base-types/component.ts:50

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[isDisposeable](components.SimpleClipper.md#isdisposeable)

#### Defined in

temp/components/base-types/component.ts:28

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[isHideable](components.SimpleClipper.md#ishideable)

#### Defined in

temp/components/base-types/component.ts:45

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[isResizeable](components.SimpleClipper.md#isresizeable)

#### Defined in

temp/components/base-types/component.ts:33

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[SimpleClipper](components.SimpleClipper.md).[isUpdateable](components.SimpleClipper.md#isupdateable)

#### Defined in

temp/components/base-types/component.ts:38

___

### updateEdges

▸ **updateEdges**(`updateFills?`): `Promise`<`void`\>

Updates all the lines of the ClippingEdges.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `updateFills` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Defined in

temp/components/navigation/EdgesClipper/index.ts:34
