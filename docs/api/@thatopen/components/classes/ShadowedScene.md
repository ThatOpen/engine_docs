# ShadowedScene

A scene that supports efficient cast shadows. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/ShadowedScene). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/ShadowedScene).

## Extends

- [`SimpleScene`](SimpleScene.md)

## Implements

- [`Disposable`](../interfaces/Disposable.md)
- [`Configurable`](../interfaces/Configurable.md)\<`SimpleSceneConfigManager`, [`ShadowedSceneConfig`](../interfaces/ShadowedSceneConfig.md)\>

## Properties

### ambientLights

> **ambientLights**: `Map`\<`string`, `AmbientLight`\>

The set of ambient lights managed by this scene component.

#### Inherited from

[`SimpleScene`](SimpleScene.md) . [`ambientLights`](SimpleScene.md#ambientlights)

***

### autoBias

> **autoBias**: `boolean` = `true`

Whether the bias property should be set automatically depending on the shadow distance.

***

### config

> **config**: `SimpleSceneConfigManager`

[Configurable.config](../interfaces/Configurable.md#config)

#### Implementation of

[`Configurable`](../interfaces/Configurable.md) . [`config`](../interfaces/Configurable.md#config)

#### Inherited from

[`SimpleScene`](SimpleScene.md) . [`config`](SimpleScene.md#config)

***

### directionalLights

> **directionalLights**: `Map`\<`string`, `DirectionalLight`\>

The set of directional lights managed by this scene component.

#### Inherited from

[`SimpleScene`](SimpleScene.md) . [`directionalLights`](SimpleScene.md#directionallights)

***

### isSetup

> **isSetup**: `boolean` = `false`

[Configurable.isSetup](../interfaces/Configurable.md#issetup)

#### Implementation of

[`Configurable`](../interfaces/Configurable.md) . [`isSetup`](../interfaces/Configurable.md#issetup)

#### Inherited from

[`SimpleScene`](SimpleScene.md) . [`isSetup`](SimpleScene.md#issetup)

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

#### Inherited from

[`SimpleScene`](SimpleScene.md) . [`onDisposed`](SimpleScene.md#ondisposed)

***

### onSetup

> `readonly` **onSetup**: [`Event`](Event.md)\<`unknown`\>

[Configurable.onSetup](../interfaces/Configurable.md#onsetup)

#### Implementation of

[`Configurable`](../interfaces/Configurable.md) . [`onSetup`](../interfaces/Configurable.md#onsetup)

#### Inherited from

[`SimpleScene`](SimpleScene.md) . [`onSetup`](SimpleScene.md#onsetup)

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

[`SimpleScene`](SimpleScene.md) . [`onWorldChanged`](SimpleScene.md#onworldchanged)

***

### three

> **three**: `Scene`

The underlying Three.js scene object.
It is used to define the 3D space containing objects, lights, and cameras.

#### Inherited from

[`SimpleScene`](SimpleScene.md) . [`three`](SimpleScene.md#three)

## Accessors

### bias

> `get` **bias**(): `number`

The getter for the bias to prevent artifacts (stripes). It usually ranges between 0 and -0.005.

> `set` **bias**(`value`): `void`

The setter for the bias to prevent artifacts (stripes). It usually ranges between 0 and -0.005.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

***

### currentWorld

> `set` **currentWorld**(`value`): `void`

The current world this item is associated with. It can be null if no world is currently active.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `null` \| [`World`](../interfaces/World.md) |

***

### distanceRenderer

> `get` **distanceRenderer**(): `DistanceRenderer`

Getter to get the renderer used to determine the farthest distance from the camera.

#### Returns

`DistanceRenderer`

***

### shadowsEnabled

> `get` **shadowsEnabled**(): `boolean`

Getter to see whether the shadows are enabled or not in this scene instance.

> `set` **shadowsEnabled**(`value`): `void`

Setter to control whether the shadows are enabled or not in this scene instance.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

## Methods

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

#### Overrides

`SimpleScene.dispose`

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any, any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any, any>`

#### Inherited from

[`SimpleScene`](SimpleScene.md) . [`isConfigurable`](SimpleScene.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`SimpleScene`](SimpleScene.md) . [`isDisposeable`](SimpleScene.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`SimpleScene`](SimpleScene.md) . [`isHideable`](SimpleScene.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`SimpleScene`](SimpleScene.md) . [`isResizeable`](SimpleScene.md#isresizeable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`SimpleScene`](SimpleScene.md) . [`isUpdateable`](SimpleScene.md#isupdateable)

***

### setup()

> **setup**(`config`?): `void`

[Configurable.setup](../interfaces/Configurable.md#setup)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `config`? | `Partial` \<[`ShadowedSceneConfig`](../interfaces/ShadowedSceneConfig.md)\> |

#### Returns

`void`

#### Implementation of

[`Configurable`](../interfaces/Configurable.md) . [`setup`](../interfaces/Configurable.md#setup)

#### Overrides

[`SimpleScene`](SimpleScene.md) . [`setup`](SimpleScene.md#setup)

***

### updateShadows()

> **updateShadows**(): `Promise`\<`void`\>

Update all the shadows of the scene.

#### Returns

`Promise`\<`void`\>
