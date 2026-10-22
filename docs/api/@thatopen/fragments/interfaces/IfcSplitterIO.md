# IfcSplitterIO

The file access an [IfcSplitter](../classes/IfcSplitter.md) reads its input and writes its output
through. It replaces the Node.js `fs` and `path` dependencies of earlier
versions, so the splitter runs in any environment that can provide these
two streams for a path.

## Methods

### readableStream()

> **readableStream**(`path`): `Promise`\<`ReadableStream`\<`string`\>\>

Opens an IFC file for reading.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`\<`ReadableStream`\<`string`\>\>

a ReadableStream streaming ifc lines

#### Throws

if path doesn't exist

***

### writableStream()

> **writableStream**(`path`): `Promise`\<`WritableStream`\<`string`\>\>

Opens an output file for writing. The splitter writes each output path
once, so implementations should create the file or replace it.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`\<`WritableStream`\<`string`\>\>

a WritableStream able to write ifc lines
