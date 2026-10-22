# IndexRequest

> **IndexRequest**: [`CreateIndexRequest`](../interfaces/CreateIndexRequest.md) \| [`UpdateIndexRequest`](../interfaces/UpdateIndexRequest.md) \| [`DeleteIndexRequest`](../interfaces/DeleteIndexRequest.md)

Type for index edit requests. Indexes are name-keyed (no localId), so
they live in their own union and are merged into the top-level
`EditRequest` type alongside the others.
