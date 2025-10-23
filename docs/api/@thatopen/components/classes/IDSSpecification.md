# IDSSpecification

Represents a single specification from the Information Delivery Specification (IDS) standard.

## Remarks

This class provides methods for testing a model against the specification,
as well as serializing the specification into XML format.

## Implements

- `IDSSpecificationData`

## Methods

### serialize()

> **serialize**(): `string`

Serializes the IDSSpecification instance into XML format.

#### Returns

`string`

The XML representation of the IDSSpecification.

#### Remarks

This method is not meant to be used directly. It is used by the IDSSpecifications component.

***

### test()

> **test**(`modelIds`, `config`): `Promise` \<[`IDSCheckResult`](../type-aliases/IDSCheckResult.md)\>

Tests the model to test against the specification's requirements.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `modelIds` | `RegExp`[] |
| `config` | `object` |
| `config.skipIfFails` | `boolean` |

#### Returns

`Promise` \<[`IDSCheckResult`](../type-aliases/IDSCheckResult.md)\>

An array representing the test results.
If no requirements are defined for the specification, an empty array is returned.
