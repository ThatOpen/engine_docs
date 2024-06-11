# StreamSerializer

A class for serializing and deserializing geometry data in a streamed format.

## Methods

### export()

> **export**(`geometries`): `Uint8Array`

Exports geometry data to a byte array in a streamed format.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometries` | [`StreamedGeometries`](../type-aliases/StreamedGeometries.md) | A Map of geometry IDs to their respective position, normal, and index arrays. |

#### Returns

`Uint8Array`

A Uint8Array containing the serialized geometry data.

***

### import()

> **import**(`bytes`): [`StreamedGeometries`](../type-aliases/StreamedGeometries.md)

Imports geometry data from a byte array in a streamed format.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `Uint8Array` | The byte array containing the serialized geometry data. |

#### Returns

[`StreamedGeometries`](../type-aliases/StreamedGeometries.md)

A Map of geometry IDs to their respective position, normal, and index arrays.

#### Throws

Will throw an error if the geometry ID is not found.
