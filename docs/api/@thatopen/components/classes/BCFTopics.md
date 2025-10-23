# BCFTopics

BCFTopics manages Building Collaboration Format (BCF) data the engine. It provides functionality for importing, exporting, and manipulating BCF data. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/BCFTopics). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/BCFTopics).

## Extends

- [`Component`](Component.md)

## Implements

- [`Disposable`](../interfaces/Disposable.md)
- [`Configurable`](../interfaces/Configurable.md)\<`BCFTopicsConfigManager`, [`BCFTopicsConfig`](../interfaces/BCFTopicsConfig.md)\>

## Accessors

### usedLabels

> `get` **usedLabels**(): `Set`\<`string`\>

Retrieves the unique set of labels used across all topics.

#### Returns

`Set`\<`string`\>

A Set containing the unique labels.

***

### usedPriorities

> `get` **usedPriorities**(): `Set`\<`undefined` \| `string`\>

Retrieves the unique set of topic priorities used across all topics.

#### Returns

`Set`\<`undefined` \| `string`\>

A Set containing the unique topic priorities.
Note: This method filters out any null or undefined priorities.

***

### usedStages

> `get` **usedStages**(): `Set`\<`undefined` \| `string`\>

Retrieves the unique set of topic stages used across all topics.

#### Returns

`Set`\<`undefined` \| `string`\>

A Set containing the unique topic stages.
Note: This method filters out any null or undefined stages.

***

### usedStatuses

> `get` **usedStatuses**(): `Set`\<`string`\>

Retrieves the unique set of topic statuses used across all topics.

#### Returns

`Set`\<`string`\>

A Set containing the unique topic statuses.

***

### usedTypes

> `get` **usedTypes**(): `Set`\<`string`\>

Retrieves the unique set of topic types used across all topics.

#### Returns

`Set`\<`string`\>

A Set containing the unique topic types.

***

### usedUsers

> `get` **usedUsers**(): `Set`\<`string`\>

Retrieves the unique set of users associated with topics.

#### Returns

`Set`\<`string`\>

A Set containing the unique users.
Note: This method collects users from the creation author, assigned to, modified author, and comment authors.

## Methods

### create()

> **create**(`data`?): `Topic`

Creates a new BCFTopic instance and adds it to the list.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data`? | `Partial`\<`BCFTopic`\> | Optional partial BCFTopic object to initialize the new topic with. If not provided, default values will be used. |

#### Returns

`Topic`

The newly created BCFTopic instance.

***

### dispose()

> **dispose**(): `void`

Disposes of the BCFTopics component and triggers the onDisposed event.

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

#### Remarks

This method clears the list of topics and triggers the onDisposed event.
It also resets the onDisposed event listener.

***

### export()

> **export**(`topics`): `Promise`\<`Blob`\>

Exports the given topics to a BCF (Building Collaboration Format) zip file.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `topics` | `Iterable`\<`Topic`\> | The topics to export. Defaults to all topics in the list. |

#### Returns

`Promise`\<`Blob`\>

A promise that resolves to a Blob containing the exported BCF zip file.

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

### load()

> **load**(`data`): `Promise`\<`object`\>

Loads BCF (Building Collaboration Format) data into the engine.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The BCF data to load. |

#### Returns

`Promise`\<`object`\>

A promise that resolves to an object containing the created viewpoints and topics.

##### topics

> **topics**: `Topic`[]

##### viewpoints

> **viewpoints**: [`Viewpoint`](Viewpoint.md)[] = `createdViewpoints`

#### Throws

An error if the BCF version is not supported.

***

### updateExtensions()

> **updateExtensions**(): `void`

Updates the set of extensions (types, statuses, priorities, labels, stages, users) based on the current topics.
This method iterates through each topic in the list and adds its properties to the corresponding sets in the config.

#### Returns

`void`

***

### updateViewpointReferences()

> **updateViewpointReferences**(): `void`

Updates the references to viewpoints in the topics.
This function iterates through each topic and checks if the viewpoints exist in the viewpoints list.
If a viewpoint does not exist, it is removed from the topic's viewpoints.

#### Returns

`void`
