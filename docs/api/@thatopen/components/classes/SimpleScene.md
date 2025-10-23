# SimpleScene

A basic 3D [scene](https://threejs.org/docs/#api/en/scenes/Scene) to add objects hierarchically, and easily dispose them when you are finished with it.

## Extends

- [`BaseScene`](BaseScene.md)

## Extended by

- [`ShadowedScene`](ShadowedScene.md)

## Implements

- [`Configurable`](../interfaces/Configurable.md)\<`SimpleSceneConfigManager`, [`SimpleSceneConfig`](../interfaces/SimpleSceneConfig.md)\>

## Properties

### ambientLights

> **ambientLights**: `Map`\<`string`, `AmbientLight`\>

The set of ambient lights managed by this scene component.

#### Inherited from

[`BaseScene`](BaseScene.md) . [`ambientLights`](BaseScene.md#ambientlights)

***

### config

> **config**: `SimpleSceneConfigManager`

[Configurable.config](../interfaces/Configurable.md#config)

#### Implementation of

[`Configurable`](../interfaces/Configurable.md) . [`config`](../interfaces/Configurable.md#config)

***

### directionalLights

> **directionalLights**: `Map`\<`string`, `DirectionalLight`\>

The set of directional lights managed by this scene component.

#### Inherited from

[`BaseScene`](BaseScene.md) . [`directionalLights`](BaseScene.md#directionallights)

***

### isSetup

> **isSetup**: `boolean` = `false`

[Configurable.isSetup](../interfaces/Configurable.md#issetup)

#### Implementation of

[`Configurable`](../interfaces/Configurable.md) . [`isSetup`](../interfaces/Configurable.md#issetup)

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Inherited from

[`BaseScene`](BaseScene.md) . [`onDisposed`](BaseScene.md#ondisposed)

***

### onSetup

> `readonly` **onSetup**: [`Event`](Event.md)\<`unknown`\>

[Configurable.onSetup](../interfaces/Configurable.md#onsetup)

#### Implementation of

[`Configurable`](../interfaces/Configurable.md) . [`onSetup`](../interfaces/Configurable.md#onsetup)

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

[`BaseScene`](BaseScene.md) . [`onWorldChanged`](BaseScene.md#onworldchanged)

***

### three

> **three**: `Scene`

The underlying Three.js scene object.
It is used to define the 3D space containing objects, lights, and cameras.

#### Overrides

[`BaseScene`](BaseScene.md) . [`three`](BaseScene.md#three)

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

[`BaseScene`](BaseScene.md) . [`isConfigurable`](BaseScene.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`BaseScene`](BaseScene.md) . [`isDisposeable`](BaseScene.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`BaseScene`](BaseScene.md) . [`isHideable`](BaseScene.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`BaseScene`](BaseScene.md) . [`isResizeable`](BaseScene.md#isresizeable)

***

### isSerializable()

> **isSerializable**(): `this is Serializable<any, Record<string, any>>`

Whether is component is Serializable.

#### Returns

`this is Serializable<any, Record<string, any>>`

#### Inherited from

[`BaseScene`](BaseScene.md) . [`isSerializable`](BaseScene.md#isserializable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`BaseScene`](BaseScene.md) . [`isUpdateable`](BaseScene.md#isupdateable)

***

### setup()

> **setup**(`config`?): `void`

[Configurable.setup](../interfaces/Configurable.md#setup)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `config`? | `Partial` \<[`SimpleSceneConfig`](../interfaces/SimpleSceneConfig.md)\> |

#### Returns

`void`

#### Implementation of

[`Configurable`](../interfaces/Configurable.md) . [`setup`](../interfaces/Configurable.md#setup)
