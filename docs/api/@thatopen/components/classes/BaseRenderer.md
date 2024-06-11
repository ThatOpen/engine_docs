# `abstract` BaseRenderer

Abstract class representing a renderer for a 3D world. All renderers should use this class as a base.

## Extends

- [`BaseWorldItem`](BaseWorldItem.md)

## Extended by

- [`SimpleRenderer`](SimpleRenderer.md)

## Implements

- [`Updateable`](../interfaces/Updateable.md)
- [`Disposable`](../interfaces/Disposable.md)
- [`Resizeable`](../interfaces/Resizeable.md)

## Properties

### clippingPlanes

> **clippingPlanes**: `Plane`[] = `[]`

The list of [clipping planes](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes) used by this instance of the renderer.

***

### currentWorld

> **currentWorld**: `null` \| [`World`](../interfaces/World.md) = `null`

The current world this item is associated with. It can be null if no world is currently active.

#### Inherited from

[`BaseWorldItem`](BaseWorldItem.md) . [`currentWorld`](BaseWorldItem.md#currentworld)

***

### onAfterUpdate

> **onAfterUpdate**: [`Event`](Event.md)\<`unknown`\>

[Updateable.onBeforeUpdate](../interfaces/Updateable.md#onbeforeupdate)

#### Implementation of

[`Updateable`](../interfaces/Updateable.md) . [`onAfterUpdate`](../interfaces/Updateable.md#onafterupdate)

***

### onBeforeUpdate

> **onBeforeUpdate**: [`Event`](Event.md)\<`unknown`\>

[Updateable.onAfterUpdate](../interfaces/Updateable.md#onafterupdate)

#### Implementation of

[`Updateable`](../interfaces/Updateable.md) . [`onBeforeUpdate`](../interfaces/Updateable.md#onbeforeupdate)

***

### onClippingPlanesUpdated

> `readonly` **onClippingPlanesUpdated**: [`Event`](Event.md)\<`unknown`\>

Event that fires when there has been a change to the list of clipping
planes used by the active renderer.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`undefined`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### onResize

> `readonly` **onResize**: [`Event`](Event.md)\<`Vector2`\>

[Resizeable.onResize](../interfaces/Resizeable.md#onresize)

#### Implementation of

[`Resizeable`](../interfaces/Resizeable.md) . [`onResize`](../interfaces/Resizeable.md#onresize)

***

### onWorldChanged

> `readonly` **onWorldChanged**: [`Event`](Event.md)\<`object`\>

Event that is triggered when a world is added or removed from the `worlds` map.
The event payload contains the world instance and the action ("added" or "removed").

#### Type declaration

##### action

> **action**: `"added"` \| `"removed"`

##### world

> **world**: [`World`](../interfaces/World.md)

#### Inherited from

[`BaseWorldItem`](BaseWorldItem.md) . [`onWorldChanged`](BaseWorldItem.md#onworldchanged)

***

### three

> `abstract` **three**: `WebGLRenderer`

The three.js WebGLRenderer instance associated with this renderer.

#### Abstract

## Methods

### dispose()

> `abstract` **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### getSize()

> `abstract` **getSize**(): `Vector2`

[Resizeable.getSize](../interfaces/Resizeable.md#getsize)

#### Returns

`Vector2`

#### Implementation of

[`Resizeable`](../interfaces/Resizeable.md) . [`getSize`](../interfaces/Resizeable.md#getsize)

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any>`

#### Inherited from

[`BaseWorldItem`](BaseWorldItem.md) . [`isConfigurable`](BaseWorldItem.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`BaseWorldItem`](BaseWorldItem.md) . [`isDisposeable`](BaseWorldItem.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`BaseWorldItem`](BaseWorldItem.md) . [`isHideable`](BaseWorldItem.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`BaseWorldItem`](BaseWorldItem.md) . [`isResizeable`](BaseWorldItem.md#isresizeable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`BaseWorldItem`](BaseWorldItem.md) . [`isUpdateable`](BaseWorldItem.md#isupdateable)

***

### resize()

> `abstract` **resize**(`size`): `void`

[Resizeable.resize](../interfaces/Resizeable.md#resize)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `size` | `undefined` \| `Vector2` |

#### Returns

`void`

#### Implementation of

[`Resizeable`](../interfaces/Resizeable.md) . [`resize`](../interfaces/Resizeable.md#resize)

***

### setPlane()

> **setPlane**(`active`, `plane`, `isLocal`?): `void`

Sets or removes a clipping plane from the renderer.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | A boolean indicating whether the clipping plane should be active or not. |
| `plane` | `Plane` | The clipping plane to be added or removed. |
| `isLocal`? | `boolean` | An optional boolean indicating whether the clipping plane is local to the object. If not provided, it defaults to `false`. |

#### Returns

`void`

#### Remarks

This method adds or removes a clipping plane from the `clippingPlanes` array.
If `active` is `true` and the plane is not already in the array, it is added.
If `active` is `false` and the plane is in the array, it is removed.
The `three.clippingPlanes` property is then updated to reflect the current state of the `clippingPlanes` array,
excluding any planes marked as local.

***

### update()

> `abstract` **update**(`delta`?): `void` \| `Promise`\<`void`\>

[Updateable.update](../interfaces/Updateable.md#update)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `delta`? | `number` |

#### Returns

`void` \| `Promise`\<`void`\>

#### Implementation of

[`Updateable`](../interfaces/Updateable.md) . [`update`](../interfaces/Updateable.md#update)

***

### updateClippingPlanes()

> **updateClippingPlanes**(): `void`

Updates the clipping planes and triggers the `onClippingPlanesUpdated` event.

#### Returns

`void`

#### Remarks

This method is typically called when there is a change to the list of clipping planes
used by the active renderer.
