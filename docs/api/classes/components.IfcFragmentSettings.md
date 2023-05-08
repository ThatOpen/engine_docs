---
id: "components.IfcFragmentSettings"
title: "Class: IfcFragmentSettings"
sidebar_label: "IfcFragmentSettings"
custom_edit_url: null
---

[components](../modules/components.md).IfcFragmentSettings

Configuration of the IFC-fragment conversion.

## Properties

### includeProperties

• **includeProperties**: `boolean` = `true`

Whether to extract the IFC properties into a JSON.

#### Defined in

temp/components/fragments/FragmentIfcLoader/src/ifcFragmentSettings.ts:9

___

### instancedCategories

• **instancedCategories**: `Set`<`number`\>

Categories that always will be instanced.

#### Defined in

temp/components/fragments/FragmentIfcLoader/src/ifcFragmentSettings.ts:6

___

### optionalCategories

• **optionalCategories**: `number`[]

Generate the geometry for categories that are not included by default.

#### Defined in

temp/components/fragments/FragmentIfcLoader/src/ifcFragmentSettings.ts:12

___

### wasm

• **wasm**: `Object`

Path of the WASM for [web-ifc](https://github.com/ifcjs/web-ifc).

#### Type declaration

| Name | Type |
| :------ | :------ |
| `absolute` | `boolean` |
| `path` | `string` |

#### Defined in

temp/components/fragments/FragmentIfcLoader/src/ifcFragmentSettings.ts:15

___

### webIfc

• **webIfc**: `LoaderSettings`

Loader settings for [web-ifc](https://github.com/ifcjs/web-ifc).

#### Defined in

temp/components/fragments/FragmentIfcLoader/src/ifcFragmentSettings.ts:21
