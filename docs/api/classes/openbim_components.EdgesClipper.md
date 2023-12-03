---
id: "openbim_components.EdgesClipper"
title: "Class: EdgesClipper"
sidebar_label: "EdgesClipper"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).EdgesClipper

A more advanced version of [SimpleClipper](openbim_components.SimpleClipper.md) that also supports
ClippingEdges with customizable lines.

## Hierarchy

- [`SimpleClipper`](openbim_components.SimpleClipper.md)<[`EdgesPlane`](openbim_components.EdgesPlane.md)\>

  ↳ **`EdgesClipper`**

## Properties

### onAfterCreate

• `Readonly` **onAfterCreate**: [`Event`](openbim_components.Event.md)<[`EdgesPlane`](openbim_components.EdgesPlane.md)\>

[Createable.onAfterCreate](../interfaces/openbim_components.Createable.md#onaftercreate)

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[onAfterCreate](openbim_components.SimpleClipper.md#onaftercreate)

#### Defined in

[src/core/SimpleClipper/index.ts:35](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L35)

___

### onAfterDelete

• `Readonly` **onAfterDelete**: [`Event`](openbim_components.Event.md)<[`EdgesPlane`](openbim_components.EdgesPlane.md)\>

[Createable.onAfterDelete](../interfaces/openbim_components.Createable.md#onafterdelete)

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[onAfterDelete](openbim_components.SimpleClipper.md#onafterdelete)

#### Defined in

[src/core/SimpleClipper/index.ts:38](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L38)

___

### onAfterDrag

• `Readonly` **onAfterDrag**: [`Event`](openbim_components.Event.md)<`void`\>

Event that fires when the user stops dragging a clipping plane.

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[onAfterDrag](openbim_components.SimpleClipper.md#onafterdrag)

#### Defined in

[src/core/SimpleClipper/index.ts:44](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L44)

___

### onBeforeDrag

• `Readonly` **onBeforeDrag**: [`Event`](openbim_components.Event.md)<`void`\>

Event that fires when the user starts dragging a clipping plane.

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[onBeforeDrag](openbim_components.SimpleClipper.md#onbeforedrag)

#### Defined in

[src/core/SimpleClipper/index.ts:41](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L41)

___

### orthogonalY

• **orthogonalY**: `boolean` = `false`

Whether to force the clipping plane to be orthogonal in the Y direction
(up). This is desirable when clipping a building horizontally and a
clipping plane is created in it's roof, which might have a slight
slope for draining purposes.

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[orthogonalY](openbim_components.SimpleClipper.md#orthogonaly)

#### Defined in

[src/core/SimpleClipper/index.ts:60](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L60)

___

### styles

• **styles**: `EdgesStyles`

The list of defined LineStyle instances.

#### Defined in

[src/navigation/EdgesClipper/index.ts:14](https://github.com/ifcjs/components/blob/e46138a/src/navigation/EdgesClipper/index.ts#L14)

___

### toleranceOrthogonalY

• **toleranceOrthogonalY**: `number` = `0.7`

The tolerance that determines whether a horizontallish clipping plane
will be forced to be orthogonal to the Y direction. [orthogonalY](openbim_components.EdgesClipper.md#orthogonaly)
has to be `true` for this to apply.

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[toleranceOrthogonalY](openbim_components.SimpleClipper.md#toleranceorthogonaly)

#### Defined in

[src/core/SimpleClipper/index.ts:67](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L67)

___

### uiElement

• **uiElement**: [`UIElement`](openbim_components.UIElement.md)<{ `main`: `Button`  }\>

[UI.uiElement](../interfaces/openbim_components.UI.md#uielement)

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[uiElement](openbim_components.SimpleClipper.md#uielement)

#### Defined in

[src/core/SimpleClipper/index.ts:52](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L52)

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[Component.enabled](openbim_components.Component.md#enabled)

#### Returns

`boolean`

#### Inherited from

SimpleClipper.enabled

#### Defined in

[src/core/SimpleClipper/index.ts:85](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L85)

• `set` **enabled**(`state`): `void`

[Component.enabled](openbim_components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Inherited from

SimpleClipper.enabled

#### Defined in

[src/core/SimpleClipper/index.ts:90](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L90)

___

### material

• `get` **material**(): `Material`

The material of the clipping plane representation.

#### Returns

`Material`

#### Inherited from

SimpleClipper.material

#### Defined in

[src/core/SimpleClipper/index.ts:115](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L115)

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

[src/core/SimpleClipper/index.ts:120](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L120)

___

### size

• `get` **size**(): `number`

The size of the geometric representation of the clippings planes.

#### Returns

`number`

#### Inherited from

SimpleClipper.size

#### Defined in

[src/core/SimpleClipper/index.ts:128](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L128)

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

[src/core/SimpleClipper/index.ts:133](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L133)

___

### visible

• `get` **visible**(): `boolean`

[Hideable.visible](../interfaces/openbim_components.Hideable.md#visible)

#### Returns

`boolean`

#### Inherited from

SimpleClipper.visible

#### Defined in

[src/core/SimpleClipper/index.ts:102](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L102)

• `set` **visible**(`state`): `void`

[Hideable.visible](../interfaces/openbim_components.Hideable.md#visible)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Inherited from

SimpleClipper.visible

#### Defined in

[src/core/SimpleClipper/index.ts:107](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L107)

## Methods

### create

▸ **create**(): `void`

[Createable.create](../interfaces/openbim_components.Createable.md#create)

#### Returns

`void`

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[create](openbim_components.SimpleClipper.md#create)

#### Defined in

[src/core/SimpleClipper/index.ts:179](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L179)

___

### createFromNormalAndCoplanarPoint

▸ **createFromNormalAndCoplanarPoint**(`normal`, `point`): [`EdgesPlane`](openbim_components.EdgesPlane.md)

Creates a plane in a certain place and with a certain orientation,
without the need of the mouse.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `normal` | `Vector3` | the orientation of the clipping plane. |
| `point` | `Vector3` | the position of the clipping plane. |

#### Returns

[`EdgesPlane`](openbim_components.EdgesPlane.md)

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[createFromNormalAndCoplanarPoint](openbim_components.SimpleClipper.md#createfromnormalandcoplanarpoint)

#### Defined in

[src/core/SimpleClipper/index.ts:195](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L195)

___

### delete

▸ **delete**(`plane?`): `void`

[Createable.delete](../interfaces/openbim_components.Createable.md#delete)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plane?` | [`EdgesPlane`](openbim_components.EdgesPlane.md) | the plane to delete. If undefined, the the first plane found under the cursor will be deleted. |

#### Returns

`void`

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[delete](openbim_components.SimpleClipper.md#delete)

#### Defined in

[src/core/SimpleClipper/index.ts:210](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L210)

___

### deleteAll

▸ **deleteAll**(): `void`

Deletes all the existing clipping planes.

#### Returns

`void`

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[deleteAll](openbim_components.SimpleClipper.md#deleteall)

#### Defined in

[src/core/SimpleClipper/index.ts:222](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L222)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Component.get](openbim_components.Component.md#get)

#### Returns

`Promise`<`void`\>

#### Overrides

[SimpleClipper](openbim_components.SimpleClipper.md).[dispose](openbim_components.SimpleClipper.md#dispose)

#### Defined in

[src/navigation/EdgesClipper/index.ts:26](https://github.com/ifcjs/components/blob/e46138a/src/navigation/EdgesClipper/index.ts#L26)

___

### get

▸ **get**(): [`EdgesPlane`](openbim_components.EdgesPlane.md)[]

[Component.get](openbim_components.Component.md#get)

#### Returns

[`EdgesPlane`](openbim_components.EdgesPlane.md)[]

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[get](openbim_components.SimpleClipper.md#get)

#### Defined in

[src/core/SimpleClipper/index.ts:155](https://github.com/ifcjs/components/blob/e46138a/src/core/SimpleClipper/index.ts#L155)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[hasUI](openbim_components.SimpleClipper.md#hasui)

#### Defined in

[src/base-types/component.ts:62](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[isConfigurable](openbim_components.SimpleClipper.md#isconfigurable)

#### Defined in

[src/base-types/component.ts:57](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[isDisposeable](openbim_components.SimpleClipper.md#isdisposeable)

#### Defined in

[src/base-types/component.ts:35](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[isHideable](openbim_components.SimpleClipper.md#ishideable)

#### Defined in

[src/base-types/component.ts:52](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[isResizeable](openbim_components.SimpleClipper.md#isresizeable)

#### Defined in

[src/base-types/component.ts:40](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[SimpleClipper](openbim_components.SimpleClipper.md).[isUpdateable](openbim_components.SimpleClipper.md#isupdateable)

#### Defined in

[src/base-types/component.ts:45](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L45)

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

[src/navigation/EdgesClipper/index.ts:34](https://github.com/ifcjs/components/blob/e46138a/src/navigation/EdgesClipper/index.ts#L34)
