# `abstract` BaseScene

Abstract class representing a base scene in the application. All scenes should use this class as a base.

## Extends

- [`BaseWorldItem`](BaseWorldItem.md)

## Extended by

- [`SimpleScene`](SimpleScene.md)

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### ambientLights

> **ambientLights**: `Map`\<`string`, `AmbientLight`\>

The set of ambient lights managed by this scene component.

***

### directionalLights

> **directionalLights**: `Map`\<`string`, `DirectionalLight`\>

The set of directional lights managed by this scene component.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

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

> `abstract` **three**: `Object3D`\<`Object3DEventMap`\>

Abstract property representing the three.js object associated with this scene.
It should be implemented by subclasses.

## Accessors

### currentWorld

> `set` **currentWorld**(`value`): `void`

The current world this item is associated with. It can be null if no world is currently active.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `null` \| [`World`](../interfaces/World.md) |

## Methods

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any, any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any, any>`

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

### isSerializable()

> **isSerializable**(): `this is Serializable<any, Record<string, any>>`

Whether is component is Serializable.

#### Returns

`this is Serializable<any, Record<string, any>>`

#### Inherited from

[`BaseWorldItem`](BaseWorldItem.md) . [`isSerializable`](BaseWorldItem.md#isserializable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`BaseWorldItem`](BaseWorldItem.md) . [`isUpdateable`](BaseWorldItem.md#isupdateable)
