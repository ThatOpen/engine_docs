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

### groups

> `readonly` **groups**: [`DataMap`](DataMap.md)\<`string`, `FragmentsGroup`\>

DataMap containing all loaded fragment groups.
The key is the group's unique identifier, and the value is the group itself.

***

### list

> `readonly` **list**: [`DataMap`](DataMap.md)\<`string`, `Fragment`\>

DataMap containing all loaded fragments.
The key is the fragment's unique identifier, and the value is the fragment itself.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### onFragmentsDisposed

> `readonly` **onFragmentsDisposed**: [`Event`](Event.md)\<`object`\>

Event triggered when fragments are disposed.

#### Type declaration

##### fragmentIDs

> **fragmentIDs**: `string`[]

##### groupID

> **groupID**: `string`

***

### onFragmentsLoaded

> `readonly` **onFragmentsLoaded**: [`Event`](Event.md)\<`FragmentsGroup`\>

Event triggered when fragments are loaded.

***

### uuid

> `static` `readonly` **uuid**: `"fef46874-46a3-461b-8c44-2922ab77c806"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Accessors

### meshes

> `get` **meshes**(): `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

Getter for the meshes of all fragments in the FragmentsManager.
It iterates over the fragments in the list and pushes their meshes into an array.

#### Returns

`Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

An array of THREE.Mesh objects representing the fragments.

## Methods

### applyBaseCoordinateSystem()

> **applyBaseCoordinateSystem**(`object`, `originalCoordinateSystem`?): `void`

Applies the base coordinate system to the provided object.

This function takes an object and its original coordinate system as input.
It then inverts the original coordinate system and applies the base coordinate system
to the object. This ensures that the object's position, rotation, and scale are
transformed to match the base coordinate system (which is taken from the first model loaded).

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `object` | `Object3D`\<`Object3DEventMap`\> \| `Vector3` | The object to which the base coordinate system will be applied. This should be an instance of THREE.Object3D. |
| `originalCoordinateSystem`? | `Matrix4` | The original coordinate system of the object. This should be a THREE.Matrix4 representing the object's transformation matrix. |

#### Returns

`void`

***

### clone()

> **clone**(`model`, `items`?): `FragmentsGroup`

Creates a copy of the whole model or a part of it.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The model to clone. |
| `items`? | `FragmentIdMap` | Optional - The part of the model to be cloned. If not given, the whole group is cloned. |

#### Returns

`FragmentsGroup`

***

### coordinate()

> **coordinate**(`models`): `void`

Applies coordinate transformation to the provided models.
If no models are provided, all groups are used.
The first model in the list becomes the base model for coordinate transformation.
All other models are then transformed to match the base model's coordinate system.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `models` | `FragmentsGroup`[] | The models to apply coordinate transformation to. If not provided, all models are used. |

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

### disposeGroup()

> **disposeGroup**(`group`): `void`

Dispose of a specific fragment group.
This method removes the group from the groups map, deletes all fragments within the group from the list,
disposes of the group, and triggers the onFragmentsDisposed event.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `group` | `FragmentsGroup` | The fragment group to be disposed. |

#### Returns

`void`

***

### export()

> **export**(`group`): `Uint8Array`

Export the specified fragmentsgroup to binary data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `group` | `FragmentsGroup` | the fragments group to be exported. |

#### Returns

`Uint8Array`

the exported data as binary buffer.

***

### fragmentIdMapToGuids()

> **fragmentIdMapToGuids**(`fragmentIdMap`): `string`[]

Converts a fragment ID map to a collection of IFC GUIDs.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fragmentIdMap` | `FragmentIdMap` | A fragment ID map to be converted to a collection of IFC GUIDs. |

#### Returns

`string`[]

An array of IFC GUIDs.

***

### getModelIdMap()

> **getModelIdMap**(`fragmentIdMap`): `object`

Gets a map of model IDs to sets of express IDs for the given fragment ID map.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fragmentIdMap` | `FragmentIdMap` | A map of fragment IDs to their corresponding express IDs. |

#### Returns

`object`

A map of model IDs to sets of express IDs.

***

### guidToFragmentIdMap()

> **guidToFragmentIdMap**(`guids`): `FragmentIdMap`

Converts a collection of IFC GUIDs to a fragmentIdMap.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `guids` | `Iterable`\<`string`\> | An iterable collection of global IDs to be converted to a fragment ID map. |

#### Returns

`FragmentIdMap`

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

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`Component`](Component.md) . [`isUpdateable`](Component.md#isupdateable)

***

### load()

> **load**(`data`, `config`?): `FragmentsGroup`

Loads a binary file that contain fragment geometry.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The binary data to load. |
| `config`? | `Partial`\<`object`\> | Optional configuration for loading. |

#### Returns

`FragmentsGroup`

The loaded FragmentsGroup.

***

### modelIdToFragmentIdMap()

> **modelIdToFragmentIdMap**(`modelIdMap`): `FragmentIdMap`

Converts a map of model IDs to sets of express IDs to a fragment ID map.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelIdMap` | `object` | A map of model IDs to their corresponding express IDs. |

#### Returns

`FragmentIdMap`

A fragment ID map.

#### Remarks

This method iterates through the provided model ID map, retrieves the corresponding model from the `groups` map,
and then calls the `getFragmentMap` method of the model to obtain a fragment ID map for the given express IDs.
The fragment ID maps are then merged into a single map and returned.
If a model with a given ID is not found in the `groups` map, the method skips that model and continues with the next one.
