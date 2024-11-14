# DataMap\<K, V\>

A class that extends the built-in Map class and provides additional events for item set, update, delete, and clear operations.

## Extends

- `Map`\<`K`, `V`\>

## Type parameters

| Type parameter | Description |
| :------ | :------ |
| `K` | The type of keys in the map. |
| `V` | The type of values in the map. |

## Constructors

### new DataMap()

> **new DataMap**\<`K`, `V`\>(`iterable`?): [`DataMap`](DataMap.md)\<`K`, `V`\>

Constructs a new DataMap instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `iterable`? | `null` \| `Iterable`\<readonly [`K`, `V`]\> | An iterable object containing key-value pairs to populate the map. |

#### Returns

[`DataMap`](DataMap.md)\<`K`, `V`\>

#### Overrides

`Map<K, V>.constructor`

## Properties

### guard()

> **guard**: (`key`, `value`) => `boolean`

A function that acts as a guard for adding items to the set.
It determines whether a given value should be allowed to be added to the set.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key of the entry to be checked against the guard. |
| `value` | `V` | The value of the entry to be checked against the guard. |

#### Returns

`boolean`

***

### onCleared

> `readonly` **onCleared**: [`Event`](Event.md)\<`unknown`\>

An event triggered when the map is cleared.

***

### onItemDeleted

> `readonly` **onItemDeleted**: [`Event`](Event.md)\<`K`\>

An event triggered when an item is deleted from the map.

***

### onItemSet

> `readonly` **onItemSet**: [`Event`](Event.md)\<`object`\>

An event triggered when a new item is set in the map.

#### Type declaration

##### key

> **key**: `K`

##### value

> **value**: `V`

***

### onItemUpdated

> `readonly` **onItemUpdated**: [`Event`](Event.md)\<`object`\>

An event triggered when an existing item in the map is updated.

#### Type declaration

##### key

> **key**: `K`

##### value

> **value**: `V`

## Methods

### clear()

> **clear**(): `void`

Clears the map and triggers the onCleared event.

#### Returns

`void`

#### Overrides

`Map.clear`

***

### delete()

> **delete**(`key`): `boolean`

Deletes the specified key from the map and triggers the onItemDeleted event if the key was found.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key of the item to delete. |

#### Returns

`boolean`

True if the key was found and deleted; otherwise, false.

#### Overrides

`Map.delete`

***

### dispose()

> **dispose**(): `void`

Clears the map and resets the events.

#### Returns

`void`

***

### set()

> **set**(`key`, `value`): [`DataMap`](DataMap.md)\<`K`, `V`\>

Sets the value for the specified key in the map.
If the item is new, then onItemSet is triggered.
If the item is already in the map, then onItemUpdated is triggered.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key of the item to set. |
| `value` | `V` | The value of the item to set. |

#### Returns

[`DataMap`](DataMap.md)\<`K`, `V`\>

The DataMap instance.

#### Overrides

`Map.set`
