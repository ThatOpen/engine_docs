# IfcImporter

An objet to convert IFC files into fragments.

## Properties

### attrsToExclude

> **attrsToExclude**: `Set`\<`string`\>

A set of attribute names to exclude from serialization.
By default excludes "Representation" and "ObjectPlacement" attributes.

***

### wasm

> **wasm**: `object`

Configuration for the web-ifc WASM module

#### absolute

> **absolute**: `boolean` = `false`

#### path

> **path**: `string` = `"/node_modules/web-ifc/"`

## Methods

### process()

> **process**(`data`): `Promise`\<`Uint8Array`\>

Processes IFC data and converts it into a fragments format.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | Configuration object for processing. |
| `data.bytes`? | `Uint8Array` | Raw IFC file data as Uint8Array. |
| `data.raw`? | `boolean` | Whether to return raw uncompressed data. If false, the output fragments will be smaller. |
| `data.readCallback`? | `any` | Callback function to read IFC data. Useful for node.js. |
| `data.readFromCallback`? | `boolean` | Whether to read data from a callback function. Useful for node.js. |

#### Returns

`Promise`\<`Uint8Array`\>
