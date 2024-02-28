---
id: "openbim_components.IfcStreamingSettings"
title: "Class: IfcStreamingSettings"
sidebar_label: "IfcStreamingSettings"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).IfcStreamingSettings

Configuration of the IFC-fragment streaming.

## Hierarchy

- `IfcFragmentSettings`

  ↳ **`IfcStreamingSettings`**

## Properties

### coordinate

• **coordinate**: `boolean` = `true`

Whether to use the coordination data coming from the IFC files.

#### Inherited from

IfcFragmentSettings.coordinate

#### Defined in

[temp/engine_components/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts:15](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts#L15)

___

### excludedCategories

• **excludedCategories**: `Set`<`number`\>

List of categories that won't be converted to fragments.

#### Inherited from

IfcFragmentSettings.excludedCategories

#### Defined in

[temp/engine_components/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts:25](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts#L25)

___

### includeProperties

• **includeProperties**: `boolean` = `true`

Whether to extract the IFC properties into a JSON.

#### Inherited from

IfcFragmentSettings.includeProperties

#### Defined in

[temp/engine_components/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts:6](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts#L6)

___

### optionalCategories

• **optionalCategories**: `number`[]

Generate the geometry for categories that are not included by default,
like IFCSPACE.

#### Inherited from

IfcFragmentSettings.optionalCategories

#### Defined in

[temp/engine_components/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts:12](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts#L12)

___

### saveLocations

• **saveLocations**: `boolean` = `false`

Whether to save the absolute location of all IFC items.

#### Inherited from

IfcFragmentSettings.saveLocations

#### Defined in

[temp/engine_components/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts:28](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts#L28)

___

### wasm

• **wasm**: `Object`

Path of the WASM for [web-ifc](https://github.com/ThatOpen/engine_web-ifc).

#### Type declaration

| Name | Type |
| :------ | :------ |
| `absolute` | `boolean` |
| `logLevel` | `undefined` \| `LogLevel` |
| `path` | `string` |

#### Inherited from

IfcFragmentSettings.wasm

#### Defined in

[temp/engine_components/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts:18](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts#L18)

___

### webIfc

• **webIfc**: `LoaderSettings`

Loader settings for [web-ifc](https://github.com/ThatOpen/engine_web-ifc).

#### Inherited from

IfcFragmentSettings.webIfc

#### Defined in

[temp/engine_components/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts:31](https://github.com/ThatOpen/engine_components/blob/f5f209c/src/fragments/FragmentIfcLoader/src/ifc-fragment-settings.ts#L31)
