# Serializer

Serializer class for handling the serialization and deserialization of 3D model data. It uses the [flatbuffers library](https://flatbuffers.dev/) for efficient data serialization and deserialization.

## Methods

### export()

> **export**(`group`): `Uint8Array`

Exports the FragmentsGroup to a flatbuffer binary file.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `group` | [`FragmentsGroup`](FragmentsGroup.md) | The FragmentsGroup to be exported. |

#### Returns

`Uint8Array`

The flatbuffer binary file as a Uint8Array.

***

### import()

> **import**(`bytes`): [`FragmentsGroup`](FragmentsGroup.md)

Constructs a FragmentsGroup object from the given flatbuffers data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `Uint8Array` | The flatbuffers data as Uint8Array. |

#### Returns

[`FragmentsGroup`](FragmentsGroup.md)

A FragmentsGroup object constructed from the flatbuffers data.
