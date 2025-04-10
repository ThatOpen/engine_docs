# getObject()

> **getObject**(`obj`, `result`): `void`

Recursively converts a Flatbuffers object into a plain JavaScript object. This function traverses the prototype chain of the Flatbuffers object and extracts all properties and their values, handling both primitive values and nested objects/arrays.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | The Flatbuffers object to convert |
| `result` | `any` | The target plain JavaScript object where the converted properties will be stored |

## Returns

`void`
