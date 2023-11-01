---
id: "components.IfcJsonExporter"
title: "Class: IfcJsonExporter"
sidebar_label: "IfcJsonExporter"
custom_edit_url: null
---

[components](../modules/components.md).IfcJsonExporter

Object to export all the properties from an IFC to a JS object.

## Methods

### export

▸ **export**(`webIfc`, `modelID`): `Promise`<`void`\>

Exports all the properties of an IFC into an array of JS objects.

#### Parameters

| Name | Type |
| :------ | :------ |
| `webIfc` | `IfcAPI` |
| `modelID` | `number` |

#### Returns

`Promise`<`void`\>

**`Web Ifc`**

The instance of [web-ifc][https://github.com/ifcjs/web-ifc](https://github.com/ifcjs/web-ifc) to use.

**`Model ID`**

ID of the IFC model whose properties to extract.

#### Defined in

temp/components/ifc/IfcJsonExporter/index.ts:21
