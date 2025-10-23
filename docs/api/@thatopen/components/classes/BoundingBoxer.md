# BoundingBoxer

An implementation of bounding box utilities that works for fragments. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/BoundingBoxer). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/BoundingBoxer).

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

### list

> `readonly` **list**: `DataSet`\<`Box3`\>

A readonly dataset containing instances of THREE.Box3.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

## Methods

### addFromModelIdMap()

> **addFromModelIdMap**(`items`): `Promise`\<`void`\>

Asynchronously adds bounding boxes to the list by merging boxes from models
specified in the provided `ModelIdMap`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `items` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | <p>A map where keys are model IDs and values are arrays of local IDs</p><p>               representing specific parts of the models to include in the bounding box.</p> |

#### Returns

`Promise`\<`void`\>

***

### addFromModels()

> **addFromModels**(`modelIds`?): `void`

Adds bounding boxes from models to the current list based on optional filtering criteria.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelIds`? | `RegExp`[] | <p>An optional array of regular expressions used to filter models by their IDs.</p><p>                  If provided, only models whose IDs match at least one of the regular expressions</p><p>                  will have their bounding boxes added to the list. If not, all models will be used.</p> |

#### Returns

`void`

***

### dispose()

> **dispose**(`full`): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `full` | `boolean` | `true` |

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### get()

> **get**(): `Box3`

Combines all bounding boxes in the `list` property into a single bounding box.

#### Returns

`Box3`

A `THREE.Box3` instance representing the union of all bounding boxes in the `list`.

***

### getCameraOrientation()

> **getCameraOrientation**(`orientation`, `offsetFactor`): `Promise`\<`object`\>

Calculates the camera orientation and position based on the specified orientation
and an optional offset factor.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `orientation` | `"front"` \| `"back"` \| `"left"` \| `"right"` \| `"top"` \| `"bottom"` | `undefined` | Specifies the direction of the camera relative to the bounding box. |
| `offsetFactor` | `number` | `1` | <p>A multiplier applied to the distance between the camera and the bounding box.</p><p>                      Defaults to `1`.</p> |

#### Returns

`Promise`\<`object`\>

An object containing:
         - `position`: A `THREE.Vector3` representing the calculated camera position.
         - `target`: A `THREE.Vector3` representing the center of the bounding box, which the camera should target.

##### position

> **position**: `Vector3`

##### target

> **target**: `Vector3` = `center`

***

### getCenter()

> **getCenter**(`modelIdMap`): `Promise`\<`Vector3`\>

Calculates and returns the center point of the bounding box derived from the provided model ID map.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelIdMap` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | A mapping of model IDs and localIds used to generate the bounding box. |

#### Returns

`Promise`\<`Vector3`\>

A `THREE.Vector3` object representing the center point of the bounding box.

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
