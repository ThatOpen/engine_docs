---
id: "openbim_components.IfcJsonExporter"
title: "Class: IfcJsonExporter"
sidebar_label: "IfcJsonExporter"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).IfcJsonExporter

Object to export all the properties from an IFC to a JS object.

## Methods

### export

▸ **export**(`webIfc`, `modelID`, `indirect?`, `recursiveSpatial?`): `Promise`<`IfcProperties`\>

Exports all the properties of an IFC into an array of JS objects.

#### Parameters

| Name               | Type      | Default value | Description                                                                                                                          |
| :----------------- | :-------- | :------------ | :----------------------------------------------------------------------------------------------------------------------------------- |
| `webIfc`           | `IfcAPI`  | `undefined`   | The instance of [web-ifc][https://github.com/ThatOpen/engine_web-ifc](https://github.com/ThatOpen/engine_web-ifc) to use.            |
| `modelID`          | `number`  | `undefined`   | ID of the IFC model whose properties to extract.                                                                                     |
| `indirect`         | `boolean` | `false`       | whether to get the indirect relationships as well.                                                                                   |
| `recursiveSpatial` | `boolean` | `true`        | whether to get the properties of spatial items recursively to make the location data available (e.g. absolute position of building). |

#### Returns

`Promise`<`IfcProperties`\>

#### Defined in

[src/ifc/IfcJsonExporter/index.ts:17](https://github.com/ThatOpen/engine_components/blob/444e81a/src/ifc/IfcJsonExporter/index.ts#L17)
