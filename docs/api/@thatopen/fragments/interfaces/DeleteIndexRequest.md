# DeleteIndexRequest

Interface for delete index edit requests. No-op if the named index
doesn't exist.

## Extends

- [`BaseEditRequest`](BaseEditRequest.md)

## Properties

### name

> **name**: `string`

Name of the index to delete.

***

### tempId?

> `optional` **tempId**: `string`

The temporary ID of the edit request (optional). This is used to
identify the edit request before having a local id (e.g. when
chaining requests).

#### Inherited from

[`BaseEditRequest`](BaseEditRequest.md) . [`tempId`](BaseEditRequest.md#tempid)
