# SimpleRenderer

A basic renderer capable of rendering [Objec3Ds](https://threejs.org/docs/#api/en/core/Object3D).

## Extends

- [`BaseRenderer`](BaseRenderer.md)

## Constructors

### new SimpleRenderer()

> **new SimpleRenderer**(`components`, `container`, `parameters`?): [`SimpleRenderer`](SimpleRenderer.md)

Constructor for the SimpleRenderer class.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `components` | [`Components`](Components.md) | The components instance. |
| `container` | `HTMLElement` | The HTML container where the THREE.js canvas will be rendered. |
| `parameters`? | `Partial`\<`WebGLRendererParameters`\> | Optional parameters for the THREE.js WebGLRenderer. |

#### Returns

[`SimpleRenderer`](SimpleRenderer.md)

#### Overrides

`BaseRenderer.constructor`

## Properties

### clippingPlanes

> **clippingPlanes**: `Plane`[] = `[]`

The list of [clipping planes](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes) used by this instance of the renderer.

#### Inherited from

[`BaseRenderer`](BaseRenderer.md) . [`clippingPlanes`](BaseRenderer.md#clippingplanes)

***

### container

> **container**: `HTMLElement`

The HTML container of the THREE.js canvas where the scene is rendered.

***

### currentWorld

> **currentWorld**: `null` \| [`World`](../interfaces/World.md) = `null`

The current world this item is associated with. It can be null if no world is currently active.

#### Inherited from

[`BaseRenderer`](BaseRenderer.md) . [`currentWorld`](BaseRenderer.md#currentworld)

***

### enabled

> **enabled**: `boolean` = `true`

Indicates whether the renderer is enabled. If it's not, it won't be updated.
Default is `true`.

***

### onAfterUpdate

> **onAfterUpdate**: [`Event`](Event.md)\<`unknown`\>

[Updateable.onBeforeUpdate](../interfaces/Updateable.md#onbeforeupdate)

#### Inherited from

[`BaseRenderer`](BaseRenderer.md) . [`onAfterUpdate`](BaseRenderer.md#onafterupdate)

***

### onBeforeUpdate

> **onBeforeUpdate**: [`Event`](Event.md)\<`unknown`\>

[Updateable.onAfterUpdate](../interfaces/Updateable.md#onafterupdate)

#### Inherited from

[`BaseRenderer`](BaseRenderer.md) . [`onBeforeUpdate`](BaseRenderer.md#onbeforeupdate)

***

### onClippingPlanesUpdated

> `readonly` **onClippingPlanesUpdated**: [`Event`](Event.md)\<`unknown`\>

Event that fires when there has been a change to the list of clipping
planes used by the active renderer.

#### Inherited from

[`BaseRenderer`](BaseRenderer.md) . [`onClippingPlanesUpdated`](BaseRenderer.md#onclippingplanesupdated)

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`undefined`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Inherited from

[`BaseRenderer`](BaseRenderer.md) . [`onDisposed`](BaseRenderer.md#ondisposed)

***

### onResize

> `readonly` **onResize**: [`Event`](Event.md)\<`Vector2`\>

[Resizeable.onResize](../interfaces/Resizeable.md#onresize)

#### Inherited from

[`BaseRenderer`](BaseRenderer.md) . [`onResize`](BaseRenderer.md#onresize)

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

[`BaseRenderer`](BaseRenderer.md) . [`onWorldChanged`](BaseRenderer.md#onworldchanged)

***

### three

> **three**: `WebGLRenderer`

The THREE.js WebGLRenderer instance.

#### Overrides

[`BaseRenderer`](BaseRenderer.md) . [`three`](BaseRenderer.md#three)

## Methods

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Overrides

[`BaseRenderer`](BaseRenderer.md) . [`dispose`](BaseRenderer.md#dispose)

***

### getSize()

> **getSize**(): `Vector2`

[Resizeable.getSize](../interfaces/Resizeable.md#getsize).

#### Returns

`Vector2`

#### Overrides

[`BaseRenderer`](BaseRenderer.md) . [`getSize`](BaseRenderer.md#getsize)

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any>`

#### Inherited from

[`BaseRenderer`](BaseRenderer.md) . [`isConfigurable`](BaseRenderer.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`BaseRenderer`](BaseRenderer.md) . [`isDisposeable`](BaseRenderer.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`BaseRenderer`](BaseRenderer.md) . [`isHideable`](BaseRenderer.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`BaseRenderer`](BaseRenderer.md) . [`isResizeable`](BaseRenderer.md#isresizeable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`BaseRenderer`](BaseRenderer.md) . [`isUpdateable`](BaseRenderer.md#isupdateable)

***

### resize()

> **resize**(`size`?): `void`

[Resizeable.resize](../interfaces/Resizeable.md#resize)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `size`? | `Vector2` |

#### Returns

`void`

#### Overrides

[`BaseRenderer`](BaseRenderer.md) . [`resize`](BaseRenderer.md#resize)

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

#### Inherited from

[`BaseRenderer`](BaseRenderer.md) . [`setPlane`](BaseRenderer.md#setplane)

#### Remarks

This method adds or removes a clipping plane from the `clippingPlanes` array.
If `active` is `true` and the plane is not already in the array, it is added.
If `active` is `false` and the plane is in the array, it is removed.
The `three.clippingPlanes` property is then updated to reflect the current state of the `clippingPlanes` array,
excluding any planes marked as local.

***

### setupEvents()

> **setupEvents**(`active`): `void`

Sets up and manages the event listeners for the renderer.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | A boolean indicating whether to activate or deactivate the event listeners. |

#### Returns

`void`

#### Throws

Will throw an error if the renderer does not have an HTML container.

***

### update()

> **update**(): `void`

[Updateable.update](../interfaces/Updateable.md#update)

#### Returns

`void`

#### Overrides

[`BaseRenderer`](BaseRenderer.md) . [`update`](BaseRenderer.md#update)

***

### updateClippingPlanes()

> **updateClippingPlanes**(): `void`

Updates the clipping planes and triggers the `onClippingPlanesUpdated` event.

#### Returns

`void`

#### Inherited from

[`BaseRenderer`](BaseRenderer.md) . [`updateClippingPlanes`](BaseRenderer.md#updateclippingplanes)

#### Remarks

This method is typically called when there is a change to the list of clipping planes
used by the active renderer.
