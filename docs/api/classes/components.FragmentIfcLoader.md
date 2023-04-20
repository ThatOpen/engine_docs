---
id: "components.FragmentIfcLoader"
title: "Class: FragmentIfcLoader"
sidebar_label: "FragmentIfcLoader"
custom_edit_url: null
---

[components](../modules/components.md).FragmentIfcLoader

Reads all the geometry of the IFC file and generates a set of
[fragments](https://github.com/ifcjs/fragment). It can also return the
properties as a JSON file, as well as other sets of information within
the IFC file.

## Implements

- [`Disposable`](../interfaces/components.Disposable.md)

## Properties

### settings

• **settings**: `IfcFragmentSettings`

Configuration of the IFC-fragment conversion.

#### Defined in

components/fragments/FragmentIfcLoader/index.ts:20

## Methods

### dispose

▸ **dispose**(): `void`

[dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

components/fragments/FragmentIfcLoader/index.ts:44

___

### load

▸ **load**(`data`): `Promise`<`FragmentGroup`\>

Loads the IFC file and converts it to a set of fragments.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Promise`<`FragmentGroup`\>

#### Defined in

components/fragments/FragmentIfcLoader/index.ts:55
