# BaseCreateRequest

Base interface for all create edit requests.

## Extends

- [`BaseEditRequest`](BaseEditRequest.md)

## Extended by

- [`CreateSampleRequest`](CreateSampleRequest.md)
- [`CreateMaterialRequest`](CreateMaterialRequest.md)
- [`CreateRepresentationRequest`](CreateRepresentationRequest.md)
- [`CreateGlobalTransformRequest`](CreateGlobalTransformRequest.md)
- [`CreateLocalTransformRequest`](CreateLocalTransformRequest.md)
- [`CreateItemRequest`](CreateItemRequest.md)
- [`CreateRelationRequest`](CreateRelationRequest.md)

## Properties

### tempId?

> `optional` **tempId**: `string`

The temporary ID of the edit request (optional). This is used to
identify the edit request before having a local id (e.g. when
chaining requests).

#### Inherited from

[`BaseEditRequest`](BaseEditRequest.md) . [`tempId`](BaseEditRequest.md#tempid)

***

### type

> **type**: [`EditRequestType`](../enumerations/EditRequestType.md)

The type of the edit request.

#### Inherited from

[`BaseEditRequest`](BaseEditRequest.md) . [`type`](BaseEditRequest.md#type)
