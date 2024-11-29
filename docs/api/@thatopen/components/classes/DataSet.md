# DataSet\<T\>

A class that extends the built-in Set class and provides additional functionality. It triggers events when items are added, deleted, or the set is cleared.

## Extends

- `Set`\<`T`\>

## Type parameters

| Type parameter | Description |
| :------ | :------ |
| `T` | The type of elements in the set. |

## Constructors

### new DataSet()

> **new DataSet**\<`T`\>(`iterable`?): [`DataSet`](DataSet.md)\<`T`\>

Constructs a new instance of the DataSet class.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `iterable`? | `null` \| `Iterable`\<`T`\> | An optional iterable object to initialize the set with. |

#### Returns

[`DataSet`](DataSet.md)\<`T`\>

#### Overrides

`Set<T>.constructor`

## Properties

### guard()

> **guard**: (`value`) => `boolean`

A function that acts as a guard for adding items to the set.
It determines whether a given value should be allowed to be added to the set.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to be checked against the guard. |

#### Returns

`boolean`

***

### onCleared

> `readonly` **onCleared**: [`Event`](Event.md)\<`unknown`\>

An event that is triggered when the set is cleared.

***

### onItemAdded

> `readonly` **onItemAdded**: [`Event`](Event.md)\<`T`\>

An event that is triggered when a new item is added to the set.

***

### onItemDeleted

> `readonly` **onItemDeleted**: [`Event`](Event.md)\<`unknown`\>

An event that is triggered when an item is deleted from the set.

## Methods

### add()

> **add**(...`value`): [`DataSet`](DataSet.md)\<`T`\>

Adds one or multiple values to the set and triggers the onItemAdded event per each.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`value` | `T`[] | The value to add to the set. |

#### Returns

[`DataSet`](DataSet.md)\<`T`\>

- The set instance.

#### Overrides

`Set.add`

***

### clear()

> **clear**(): `void`

Clears the set and triggers the onCleared event.

#### Returns

`void`

#### Overrides

`Set.clear`

***

### delete()

> **delete**(`value`): `boolean`

Deletes a value from the set and triggers the onItemDeleted event.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to delete from the set. |

#### Returns

`boolean`

- True if the value was successfully deleted, false otherwise.

#### Overrides

`Set.delete`

***

### dispose()

> **dispose**(): `void`

Clears the set and resets the onItemAdded, onItemDeleted, and onCleared events.

#### Returns

`void`
