# PropertiesStreamingSettings

Settings for streaming properties. Extends [IfcFragmentSettings](IfcFragmentSettings.md) to inherit common settings.

## Extends

- [`IfcFragmentSettings`](IfcFragmentSettings.md)

## Properties

### autoSetWasm

> **autoSetWasm**: `boolean` = `true`

Whether to automatically set the path to the WASM file for [web-ifc](https://github.com/ThatOpen/engine_web-ifc).
If set to true, the path will be set to the default path of the WASM file.
If set to false, the path must be provided manually in the `wasm.path` property.
Default value is true.

#### Inherited from

[`IfcFragmentSettings`](IfcFragmentSettings.md) . [`autoSetWasm`](IfcFragmentSettings.md#autosetwasm)

***

### coordinate

> **coordinate**: `boolean` = `true`

Whether to use the coordination data coming from the IFC files.

#### Inherited from

[`IfcFragmentSettings`](IfcFragmentSettings.md) . [`coordinate`](IfcFragmentSettings.md#coordinate)

***

### customLocateFileHandler

> **customLocateFileHandler**: `null` \| `LocateFileHandlerFn` = `null`

Custom function to handle the file location for [web-ifc](https://github.com/ThatOpen/engine_web-ifc).
This function will be called when [web-ifc](https://github.com/ThatOpen/engine_web-ifc) needs to locate a file.
If set to null, the default file location handler will be used.

#### Param

The URL of the file to locate.

#### Inherited from

[`IfcFragmentSettings`](IfcFragmentSettings.md) . [`customLocateFileHandler`](IfcFragmentSettings.md#customlocatefilehandler)

***

### excludedCategories

> **excludedCategories**: `Set`\<`number`\>

List of categories that won't be converted to fragments.

#### Inherited from

[`IfcFragmentSettings`](IfcFragmentSettings.md) . [`excludedCategories`](IfcFragmentSettings.md#excludedcategories)

***

### includeProperties

> **includeProperties**: `boolean` = `true`

Whether to extract the IFC properties into a JSON.

#### Inherited from

[`IfcFragmentSettings`](IfcFragmentSettings.md) . [`includeProperties`](IfcFragmentSettings.md#includeproperties)

***

### optionalCategories

> **optionalCategories**: `number`[]

Generate the geometry for categories that are not included by default,
like IFCSPACE.

#### Inherited from

[`IfcFragmentSettings`](IfcFragmentSettings.md) . [`optionalCategories`](IfcFragmentSettings.md#optionalcategories)

***

### propertiesSize

> **propertiesSize**: `number` = `100`

Amount of properties to be streamed.
Defaults to 100 properties.

***

### saveLocations

> **saveLocations**: `boolean` = `false`

Whether to save the absolute location of all IFC items.

#### Inherited from

[`IfcFragmentSettings`](IfcFragmentSettings.md) . [`saveLocations`](IfcFragmentSettings.md#savelocations)

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

[`IfcFragmentSettings`](IfcFragmentSettings.md) . [`wasm`](IfcFragmentSettings.md#wasm)

***

### webIfc

> **webIfc**: `LoaderSettings`

Loader settings for [web-ifc](https://github.com/ThatOpen/engine_web-ifc).

#### Inherited from

[`IfcFragmentSettings`](IfcFragmentSettings.md) . [`webIfc`](IfcFragmentSettings.md#webifc)
