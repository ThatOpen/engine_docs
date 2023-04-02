---
id: "fragment.Serializer"
title: "Class: Serializer"
sidebar_label: "Serializer"
custom_edit_url: null
---

[fragment](../modules/fragment.md).Serializer

A binary data importer and exporter using [flatbuffers](https://google.github.io/flatbuffers/).

## Methods

### export

▸ **export**(`fragments`): `Uint8Array`

Export a binary fragment buffer (generally to save it in a binary file).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fragments` | `Fragment`[] | fragments to be exported in the file. |

#### Returns

`Uint8Array`

#### Defined in

fragment/serializer.ts:42

___

### import

▸ **import**(`bytes`): `Fragment`[]

Imports a binary fragment buffer (generally saved in a binary file).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `Uint8Array` | the data buffer contained in the file. |

#### Returns

`Fragment`[]

#### Defined in

fragment/serializer.ts:16
