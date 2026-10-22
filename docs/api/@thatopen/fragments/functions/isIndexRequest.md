# isIndexRequest()

> **isIndexRequest**(`request`): `request is IndexRequest`

Discriminator for index edit requests. Use to skip them in code paths that
assume every request carries a `localId`.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `request` | [`BaseEditRequest`](../interfaces/BaseEditRequest.md) |

## Returns

`request is IndexRequest`
