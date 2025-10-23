# FragmentsManager

Component to load, delete and manage [fragments](https://github.com/ThatOpen/engine_fragment) efficiently. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/FragmentsManager). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/FragmentsManager).

## Extends

- [`Component`](Component.md)

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

#### Overrides

[`Component`](Component.md) . [`enabled`](Component.md#enabled)

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`undefined`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### onFragmentsLoaded

> `readonly` **onFragmentsLoaded**: [`Event`](Event.md)\<`any`\>

Event triggered when fragments are loaded.

***

### uuid

> `static` `readonly` **uuid**: `"fef46874-46a3-461b-8c44-2922ab77c806"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Accessors

### list

> `get` **list**(): `DataMap`\<`string`, `FragmentsModel`\>

Map containing all loaded fragment models.
The key is the group's unique identifier, and the value is the model itself.

#### Returns

`DataMap`\<`string`, `FragmentsModel`\>

## Methods

### applyBaseCoordinateSystem()

> **applyBaseCoordinateSystem**(`object`, `originalCoordinateSystem`?): `Matrix4`

Applies the base coordinate system to the provided object.

This function takes an object and its original coordinate system as input.
It then inverts the original coordinate system and applies the base coordinate system
to the object. This ensures that the object's position, rotation, and scale are
transformed to match the base coordinate system (which is taken from the first model loaded).

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `object` | `Vector3` \| `Object3D`\<`Object3DEventMap`\> | The object to which the base coordinate system will be applied. This should be an instance of THREE.Object3D. |
| `originalCoordinateSystem`? | `Matrix4` | The original coordinate system of the object. This should be a THREE.Matrix4 representing the object's transformation matrix. |

#### Returns

`Matrix4`

***

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### getData()

> **getData**(`items`, `config`?): `Promise`\<`Record`\<`string`, `ItemData`[]\>\>

Retrieves data for specified items from multiple models.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `items` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | A map of model IDs to an array of local IDs, specifying which items to retrieve data for. |
| `config`? | `Partial`\<`ItemsDataConfig`\> | Optional configuration for data retrieval. |

#### Returns

`Promise`\<`Record`\<`string`, `ItemData`[]\>\>

A record mapping model IDs to an array of item data.

***

### guidsToModelIdMap()

> **guidsToModelIdMap**(`guids`): `Promise` \<[`ModelIdMap`](../type-aliases/ModelIdMap.md)\>

Converts a collection of IFC GUIDs to a fragmentIdMap.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `guids` | `Iterable`\<`string`\> | An iterable collection of global IDs to be converted to a fragment ID map. |

#### Returns

`Promise` \<[`ModelIdMap`](../type-aliases/ModelIdMap.md)\>

A fragment ID map, where the keys are fragment IDs and the values are the corresponding express IDs.

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any, any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any, any>`

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

### isSerializable()

> **isSerializable**(): `this is Serializable<any, Record<string, any>>`

Whether is component is Serializable.

#### Returns

`this is Serializable<any, Record<string, any>>`

#### Inherited from

[`Component`](Component.md) . [`isSerializable`](Component.md#isserializable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`Component`](Component.md) . [`isUpdateable`](Component.md#isupdateable)

***

### modelIdMapToGuids()

> **modelIdMapToGuids**(`modelIdMap`): `Promise`\<`string`[]\>

Converts a fragment ID map to a collection of GUIDs.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelIdMap` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | A ModelIdMap to be converted to a collection of GUIDs. |

#### Returns

`Promise`\<`string`[]\>

An array of GUIDs.
