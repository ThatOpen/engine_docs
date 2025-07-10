# getObject()

> **getObject**(`obj`, `result`): `void`

Recursively converts a Flatbuffers object into a plain JavaScript object. This function traverses the prototype chain of the Flatbuffers object and extracts all properties and their values, handling both primitive values and nested objects/arrays.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `obj` | `any` |
| `result` | `any` |

## Returns

`void`
