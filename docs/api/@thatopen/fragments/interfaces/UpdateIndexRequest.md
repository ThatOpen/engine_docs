# UpdateIndexRequest

Interface for update index edit requests. Replaces the entire index
identified by `data.name`. Use DELETE_INDEX + CREATE_INDEX if you want
to rename.

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
