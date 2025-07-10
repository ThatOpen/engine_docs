# FinderQuery

Represents a finder query for retrieving items based on specified parameters. This class encapsulates the query logic, caching mechanism, and result management.

## Properties

### cache

> **cache**: `boolean` = `true`

Determines whether the query results should be cached.

***

### result

> `readonly` **result**: `null` \| [`ModelIdMap`](../type-aliases/ModelIdMap.md) = `null`

The result of the query, a map of modelIds to localIds.
Null if the query has not been executed or has not been cached.

## Accessors

### aggregation

> `set` **aggregation**(`value`): `void`

Sets the aggregation value (AND/OR) for the query and resets the cache if the new value differs.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`QueryResultAggregation`](../type-aliases/QueryResultAggregation.md) |

***

### queries

> `set` **queries**(`value`): `void`

The query parameters used to find items.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `ItemsQueryParams`[] |

## Methods

### clearCache()

> **clearCache**(): `void`

Clears the cached result of the query, forcing a re-evaluation on the next access.

#### Returns

`void`

***

### fromJSON()

> **fromJSON**(`data`): [`FinderQuery`](FinderQuery.md)

Deserializes a JSON object into a `FinderQuery` instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Omit` \<[`SerializedFinderQuery`](../interfaces/SerializedFinderQuery.md), `"name"`\> | A `SerializedFinderQuery` object representing the serialized query. |

#### Returns

[`FinderQuery`](FinderQuery.md)

A `FinderQuery` instance.

***

### test()

> **test**(`config`?): `Promise` \<[`ModelIdMap`](../type-aliases/ModelIdMap.md)\>

Executes the finder query to retrieve items based on the configured query and optional model IDs.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config`? | [`QueryTestConfig`](../interfaces/QueryTestConfig.md) | Optional configuration object. |

#### Returns

`Promise` \<[`ModelIdMap`](../type-aliases/ModelIdMap.md)\>

A promise that resolves to a `ModelIdMap` containing the search results.

***

### toJSON()

> **toJSON**(): [`SerializedFinderQuery`](../interfaces/SerializedFinderQuery.md)

Serializes the finder query into a JSON-compatible format.
Converts regular expressions to strings.

#### Returns

[`SerializedFinderQuery`](../interfaces/SerializedFinderQuery.md)

A `SerializedFinderQuery` object representing the serialized query.
