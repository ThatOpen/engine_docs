# `abstract` BaseWorldItem

One of the elements that make a world. It can be either a scene, a camera or a renderer.

## Extends

- [`Base`](Base.md)

## Extended by

- [`BaseCamera`](BaseCamera.md)
- [`BaseRenderer`](BaseRenderer.md)
- [`BaseScene`](BaseScene.md)

## Properties

### onWorldChanged

> `readonly` **onWorldChanged**: [`Event`](Event.md)\<`object`\>

Event that is triggered when a world is added or removed from the `worlds` map.
The event payload contains the world instance and the action ("added" or "removed").

#### Type declaration

##### action

> **action**: `"added"` \| `"removed"`

##### world

> **world**: [`World`](../interfaces/World.md)

## Accessors

### currentWorld

> `set` **currentWorld**(`value`): `void`

The current world this item is associated with. It can be null if no world is currently active.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `null` \| [`World`](../interfaces/World.md) |

## Methods

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any, any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any, any>`

#### Inherited from

[`Base`](Base.md) . [`isConfigurable`](Base.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`Base`](Base.md) . [`isDisposeable`](Base.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`Base`](Base.md) . [`isHideable`](Base.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`Base`](Base.md) . [`isResizeable`](Base.md#isresizeable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`Base`](Base.md) . [`isUpdateable`](Base.md#isupdateable)
