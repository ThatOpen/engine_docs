# SerializedFinderQuery

Represents a serialized query for an item finder.

## Properties

### aggregation

> **aggregation**: [`QueryResultAggregation`](../type-aliases/QueryResultAggregation.md)

The type of aggregation applied to the query results.

***

### cache

> **cache**: `boolean`

Indicates whether the query results should be cached.

***

### description?

> `optional` **description**: `string`

An optional description of the query.

***

### name

> **name**: `string`

The name of the query.

***

### queries

> **queries**: [`SerializedQueryParameters`](SerializedQueryParameters.md)[]

An array of serialized query parameters.
