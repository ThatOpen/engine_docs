# BaseEditRequest

Base interface for all edit requests.

## Extended by

- [`BaseUpdateRequest`](BaseUpdateRequest.md)
- [`BaseCreateRequest`](BaseCreateRequest.md)

## Properties

### tempId?

> `optional` **tempId**: `string`

The temporary ID of the edit request (optional). This is used to
identify the edit request before having a local id (e.g. when
chaining requests).

***

### type

> **type**: [`EditRequestType`](../enumerations/EditRequestType.md)

The type of the edit request.
