# CreateIndexRequest

Interface for create index edit requests. Indexes are name-keyed, so
`data.name` identifies the index. Fails silently if an index with the
same name already exists; use UPDATE_INDEX to replace.

## Throws

IndexValidationError IndexValidationError

## Extends

- [`BaseEditRequest`](BaseEditRequest.md)

## Properties

### tempId?

> `optional` **tempId**: `string`

The temporary ID of the edit request (optional). This is used to
identify the edit request before having a local id (e.g. when
chaining requests).

#### Inherited from

[`BaseEditRequest`](BaseEditRequest.md) . [`tempId`](BaseEditRequest.md#tempid)
