# Serializer

Serializer class for handling the serialization and deserialization of 3D model data. It uses the [flatbuffers library](https://flatbuffers.dev/) for efficient data serialization and deserialization.

## Implements

- `FragmentParser`

## Properties

### version

> **version**: `number` \| `"auto"`

FragmentParser.version

#### Implementation of

`FragmentParser.version`

## Methods

### export()

> **export**(`group`): `Uint8Array`

FragmentParser.export

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `group` | [`FragmentsGroup`](FragmentsGroup.md) |

#### Returns

`Uint8Array`

#### Implementation of

`FragmentParser.export`

***

### import()

> **import**(`bytes`): [`FragmentsGroup`](FragmentsGroup.md)

FragmentParser.import

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`FragmentsGroup`](FragmentsGroup.md)

#### Implementation of

`FragmentParser.import`
