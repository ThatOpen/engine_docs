# UpdateItemRequest

Interface for update item edit requests.

## Extends

- [`BaseUpdateRequest`](BaseUpdateRequest.md)

## Properties

### localId

> **localId**: `string` \| `number`

The local ID of the edit request.

#### Inherited from

[`BaseUpdateRequest`](BaseUpdateRequest.md) . [`localId`](BaseUpdateRequest.md#localid)

***

### tempId?

> `optional` **tempId**: `string`

The temporary ID of the edit request (optional). This is used to
identify the edit request before having a local id (e.g. when
chaining requests).

#### Inherited from

[`BaseUpdateRequest`](BaseUpdateRequest.md) . [`tempId`](BaseUpdateRequest.md#tempid)
