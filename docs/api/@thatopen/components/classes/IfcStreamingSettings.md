# IfcStreamingSettings

Configuration of the IFC-fragment streaming.

## Extends

- `IfcFragmentSettings`

## Properties

### coordinate

> **coordinate**: `boolean` = `true`

Whether to use the coordination data coming from the IFC files.

#### Inherited from

`IfcFragmentSettings.coordinate`

***

### excludedCategories

> **excludedCategories**: `Set`\<`number`\>

List of categories that won't be converted to fragments.

#### Inherited from

`IfcFragmentSettings.excludedCategories`

***

### includeProperties

> **includeProperties**: `boolean` = `true`

Whether to extract the IFC properties into a JSON.

#### Inherited from

`IfcFragmentSettings.includeProperties`

***

### optionalCategories

> **optionalCategories**: `number`[]

Generate the geometry for categories that are not included by default,
like IFCSPACE.

#### Inherited from

`IfcFragmentSettings.optionalCategories`

***

### saveLocations

> **saveLocations**: `boolean` = `false`

Whether to save the absolute location of all IFC items.

#### Inherited from

`IfcFragmentSettings.saveLocations`

***

### wasm

> **wasm**: `object`

Path of the WASM for [web-ifc](https://github.com/ThatOpen/engine_web-ifc).

#### absolute

> **absolute**: `boolean`

#### logLevel?

> `optional` **logLevel**: `LogLevel`

#### path

> **path**: `string`

#### Inherited from

`IfcFragmentSettings.wasm`

***

### webIfc

> **webIfc**: `LoaderSettings`

Loader settings for [web-ifc](https://github.com/ThatOpen/engine_web-ifc).

#### Inherited from

`IfcFragmentSettings.webIfc`
