# InverseIndexEntry

> **InverseIndexEntry**: `Uint32Array` \| `string`[] \| `null`

Inverse-lookup result. For an index with forward direction `key -> value`,
the inverse maps `value -> set of keys`. Keys come back as `Uint32Array`
for number-keyed indexes and `string[]` for string-keyed ones.
