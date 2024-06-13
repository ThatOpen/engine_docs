# Clipper

A lightweight component to easily create, delete and handle [clipping planes](https://threejs.org/docs/#api/en/materials/Material.clippingPlanes). 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Clipper). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Clipper).

## Param

the instance of [Components](Components.md) used.
E.g. [SimplePlane](SimplePlane.md).

## Extends

- [`Component`](Component.md)

## Implements

- [`Createable`](../interfaces/Createable.md)
- [`Disposable`](../interfaces/Disposable.md)
- [`Hideable`](../interfaces/Hideable.md)

## Properties

### Type()

> **Type**: (...`args`) => [`SimplePlane`](SimplePlane.md) = `SimplePlane`

The type of clipping plane to be created.
Default is [SimplePlane](SimplePlane.md).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `any` |

#### Returns

[`SimplePlane`](SimplePlane.md)

***

### list

> **list**: [`SimplePlane`](SimplePlane.md)[] = `[]`

A list of all the clipping planes created by this component.

***

### onAfterCancel

> `readonly` **onAfterCancel**: [`Event`](Event.md)\<`unknown`\>

Event that fires after the user cancels the creation of a clipping plane.

***

### onAfterCreate

> `readonly` **onAfterCreate**: [`Event`](Event.md) \<[`SimplePlane`](SimplePlane.md)\>

Event that fires after a clipping plane has been created.

#### Param

The newly created clipping plane.

***

### onAfterDelete

> `readonly` **onAfterDelete**: [`Event`](Event.md) \<[`SimplePlane`](SimplePlane.md)\>

Event that fires after a clipping plane has been deleted.

#### Param

The deleted clipping plane.

***

### onAfterDrag

> `readonly` **onAfterDrag**: [`Event`](Event.md)\<`void`\>

Event that fires when the user stops dragging a clipping plane.

***

### onBeforeCancel

> `readonly` **onBeforeCancel**: [`Event`](Event.md)\<`unknown`\>

Event that fires when the user cancels the creation of a clipping plane.

***

### onBeforeCreate

> `readonly` **onBeforeCreate**: [`Event`](Event.md)\<`unknown`\>

Event that fires when the user starts creating a clipping plane.

***

### onBeforeDelete

> `readonly` **onBeforeDelete**: [`Event`](Event.md)\<`unknown`\>

Event that fires when the user starts deleting a clipping plane.

***

### onBeforeDrag

> `readonly` **onBeforeDrag**: [`Event`](Event.md)\<`void`\>

Event that fires when the user starts dragging a clipping plane.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`string`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### orthogonalY

> **orthogonalY**: `boolean` = `false`

Whether to force the clipping plane to be orthogonal in the Y direction
(up). This is desirable when clipping a building horizontally and a
clipping plane is created in its roof, which might have a slight
slope for draining purposes.

***

### toleranceOrthogonalY

> **toleranceOrthogonalY**: `number` = `0.7`

The tolerance that determines whether an almost-horizontal clipping plane
will be forced to be orthogonal to the Y direction. [orthogonalY](Clipper.md#orthogonaly)
has to be `true` for this to apply.

***

### uuid

> `static` `readonly` **uuid**: `"66290bc5-18c4-4cd1-9379-2e17a0617611"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Accessors

### enabled

> `get` **enabled**(): `boolean`

[Component.enabled](Component.md#enabled)

> `set` **enabled**(`state`): `void`

[Component.enabled](Component.md#enabled)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`boolean`

***

### material

> `get` **material**(): `MeshBasicMaterial`

The material of the clipping plane representation.

> `set` **material**(`material`): `void`

The material of the clipping plane representation.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `material` | `MeshBasicMaterial` |

#### Returns

`MeshBasicMaterial`

***

### size

> `get` **size**(): `number`

The size of the geometric representation of the clippings planes.

> `set` **size**(`size`): `void`

The size of the geometric representation of the clippings planes.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`number`

***

### visible

> `get` **visible**(): `boolean`

[Hideable.visible](../interfaces/Hideable.md#visible)

> `set` **visible**(`state`): `void`

[Hideable.visible](../interfaces/Hideable.md#visible)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`boolean`

## Methods

### create()

> **create**(`world`): `void`

[Createable.create](../interfaces/Createable.md#create)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `world` | [`World`](../interfaces/World.md) |

#### Returns

`void`

#### Implementation of

[`Createable`](../interfaces/Createable.md) . [`create`](../interfaces/Createable.md#create)

***

### createFromNormalAndCoplanarPoint()

> **createFromNormalAndCoplanarPoint**(`world`, `normal`, `point`): [`SimplePlane`](SimplePlane.md)

Creates a plane in a certain place and with a certain orientation,
without the need of the mouse.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | [`World`](../interfaces/World.md) | the world where this plane should be created. |
| `normal` | `Vector3` | the orientation of the clipping plane. |
| `point` | `Vector3` | the position of the clipping plane. navigation. |

#### Returns

[`SimplePlane`](SimplePlane.md)

***

### delete()

> **delete**(`world`, `plane`?): `void`

[Createable.delete](../interfaces/Createable.md#delete)

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | [`World`](../interfaces/World.md) | the world where the plane to delete is. |
| `plane`? | [`SimplePlane`](SimplePlane.md) | the plane to delete. If undefined, the first plane found under the cursor will be deleted. |

#### Returns

`void`

#### Implementation of

[`Createable`](../interfaces/Createable.md) . [`delete`](../interfaces/Createable.md#delete)

***

### deleteAll()

> **deleteAll**(): `void`

Deletes all the existing clipping planes.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any>`

#### Inherited from

[`Component`](Component.md) . [`isConfigurable`](Component.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`Component`](Component.md) . [`isDisposeable`](Component.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`Component`](Component.md) . [`isHideable`](Component.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`Component`](Component.md) . [`isResizeable`](Component.md#isresizeable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`Component`](Component.md) . [`isUpdateable`](Component.md#isupdateable)
