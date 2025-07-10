# SerializedQueryParameters

Represents the serialized query parameters used for item finding.

## Properties

### attributes?

> `optional` **attributes**: `object`

An optional object containing attribute-based queries.

#### aggregation?

> `optional` **aggregation**: `"inclusive"` \| `"exclusive"`

Specifies the aggregation type for attributes, either "exclusive" or "inclusive".

#### queries

> **queries**: `SerializedQueryAttribute`[]

An array of serialized query attributes used for filtering.

***

### categories?

> `optional` **categories**: `string`[]

An optional array of category strings to filter items.

***

### relation?

> `optional` **relation**: `object`

An optional object defining a relational query.

#### name

> **name**: `string`

The name of the relation.

#### query?

> `optional` **query**: [`SerializedQueryParameters`](SerializedQueryParameters.md)

An optional nested query of type SerializedQueryParameters.
