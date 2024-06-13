# IfcFragmentSettings

Configuration of the IFC-fragment conversion.

## Extended by

- [`IfcStreamingSettings`](IfcStreamingSettings.md)
- [`PropertiesStreamingSettings`](PropertiesStreamingSettings.md)

## Properties

### autoSetWasm

> **autoSetWasm**: `boolean` = `true`

Whether to automatically set the path to the WASM file for [web-ifc](https://github.com/ThatOpen/engine_web-ifc).
If set to true, the path will be set to the default path of the WASM file.
If set to false, the path must be provided manually in the `wasm.path` property.
Default value is true.

***

### coordinate

> **coordinate**: `boolean` = `true`

Whether to use the coordination data coming from the IFC files.

***

### customLocateFileHandler

> **customLocateFileHandler**: `null` \| `LocateFileHandlerFn` = `null`

Custom function to handle the file location for [web-ifc](https://github.com/ThatOpen/engine_web-ifc).
This function will be called when [web-ifc](https://github.com/ThatOpen/engine_web-ifc) needs to locate a file.
If set to null, the default file location handler will be used.

#### Param

The URL of the file to locate.

***

### excludedCategories

> **excludedCategories**: `Set`\<`number`\>

List of categories that won't be converted to fragments.

***

### includeProperties

> **includeProperties**: `boolean` = `true`

Whether to extract the IFC properties into a JSON.

***

### optionalCategories

> **optionalCategories**: `number`[]

Generate the geometry for categories that are not included by default,
like IFCSPACE.

***

### saveLocations

> **saveLocations**: `boolean` = `false`

Whether to save the absolute location of all IFC items.

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

***

### webIfc

> **webIfc**: `LoaderSettings`

Loader settings for [web-ifc](https://github.com/ThatOpen/engine_web-ifc).
