# BaseUpdateRequest

Base interface for all update edit requests.

## Extends

- [`BaseEditRequest`](BaseEditRequest.md)

## Extended by

- [`UpdateMaterialRequest`](UpdateMaterialRequest.md)
- [`UpdateRepresentationRequest`](UpdateRepresentationRequest.md)
- [`UpdateSampleRequest`](UpdateSampleRequest.md)
- [`UpdateGlobalTransformRequest`](UpdateGlobalTransformRequest.md)
- [`UpdateLocalTransformRequest`](UpdateLocalTransformRequest.md)
- [`UpdateItemRequest`](UpdateItemRequest.md)
- [`UpdateMaxLocalIdRequest`](UpdateMaxLocalIdRequest.md)
- [`UpdateRelationRequest`](UpdateRelationRequest.md)
- [`UpdateMetadataRequest`](UpdateMetadataRequest.md)
- [`UpdateSpatialStructureRequest`](UpdateSpatialStructureRequest.md)
- [`DeleteMaterialRequest`](DeleteMaterialRequest.md)
- [`DeleteRepresentationRequest`](DeleteRepresentationRequest.md)
- [`DeleteSampleRequest`](DeleteSampleRequest.md)
- [`DeleteGlobalTransformRequest`](DeleteGlobalTransformRequest.md)
- [`DeleteLocalTransformRequest`](DeleteLocalTransformRequest.md)
- [`DeleteItemRequest`](DeleteItemRequest.md)
- [`DeleteRelationRequest`](DeleteRelationRequest.md)

## Properties

### localId

> **localId**: `string` \| `number`

The local ID of the edit request.

***

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
