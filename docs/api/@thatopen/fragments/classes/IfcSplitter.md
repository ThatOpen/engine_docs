# IfcSplitter

Splits large IFC files into smaller valid IFC files, or extracts a set of
building elements into a new one, streaming the input so the whole file
never has to be held as text in memory.

Each output file is a valid IFC containing its share of elements plus all
shared infrastructure (spatial structure, geometry, materials, properties).
Coupled elements (wall + opening + door, roof + slabs) are kept together.

File access goes through an [IfcSplitterIO](../interfaces/IfcSplitterIO.md), so the same class works in
Node.js, in the browser or against any other storage.

## Constructors

### new IfcSplitter()

> **new IfcSplitter**(`ifcSplitterIO`, `config`): [`IfcSplitter`](IfcSplitter.md)

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ifcSplitterIO` | [`IfcSplitterIO`](../interfaces/IfcSplitterIO.md) | How to read the input file and write the output files. |
| `config` | [`IfcSplitterConfig`](../interfaces/IfcSplitterConfig.md) | Which IFC types to treat as elements and spatial structure, and how to read relationship lists. Defaults apply to anything left out. |

#### Returns

[`IfcSplitter`](IfcSplitter.md)

## Properties

### onExtractWarning

> `readonly` **onExtractWarning**: `Event` \<[`IfcSplitterWarningEvent`](../interfaces/IfcSplitterWarningEvent.md)\>

Fires from `extract` when an id is missing or has a wrong type

***

### onProgress

> `readonly` **onProgress**: `Event` \<[`IfcSplitterProgressEvent`](../interfaces/IfcSplitterProgressEvent.md)\>

Fires from `split` and `extract` each time a stage finishes, with the time
it took.

***

### onSplitsResolved

> `readonly` **onSplitsResolved**: `Event` \<[`IfcSplitterGroupsEvent`](../interfaces/IfcSplitterGroupsEvent.md)\>

Fires from `split` once the content of every output file is resolved, just
before the files are written.

## Methods

### extract()

> **extract**(`inputPath`, `elementIds`, `outputPath`): `Promise`\<`Set`\<`number`\>\>

Extract specific building elements from an IFC file into a new IFC file.

Produces a single valid IFC containing only the requested elements and all
of their dependencies (geometry, materials, styles, property sets).
Void/fill coupling (wall + opening + door/window) and aggregation
(roof + slabs, stair + flights) are automatically expanded so the output
stays structurally consistent.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `inputPath` | `string` | Absolute or relative path to the source IFC file. |
| `elementIds` | `number`[] | Array of IFC entity IDs (`#id`) for the building elements to extract. Non-element or missing IDs are skipped, each reported through [onExtractWarning](IfcSplitter.md#onextractwarning). |
| `outputPath` | `string` | Path for the output IFC file. |

#### Returns

`Promise`\<`Set`\<`number`\>\>

the IFC ids written to the output file.

#### Throws

if none of `elementIds` resolves to a building element. No
output file is produced in that case.

***

### forEachLine()

> **forEachLine**(`filePath`, `callback`): `Promise`\<`void`\>

Chunked file reader — replaces readline (3-5x faster)

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | Path of the file, read through the [IfcSplitterIO](../interfaces/IfcSplitterIO.md). |
| `callback` | (`line`) => `void` \| `Promise`\<`void`\> | Called with each line, awaited before the next one. |

#### Returns

`Promise`\<`void`\>

***

### parseIfc()

> **parseIfc**(`filePath`): `Promise`\<`ParseResult`\>

Reads an IFC file into its header lines, footer lines and an index of
every data line by id. This is the first stage of `split` and `extract`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | <p>Path of the IFC file, read through the</p><p>[IfcSplitterIO](../interfaces/IfcSplitterIO.md).</p> |

#### Returns

`Promise`\<`ParseResult`\>

***

### split()

> **split**(`inputPath`, `numGroups`, `outputPath`): `Promise`\<`Map`\<`number`, `object`\>\>

Split an IFC file into N roughly equal groups of building elements.

Each output file is a valid IFC containing its share of elements plus all
shared infrastructure (spatial structure, geometry, materials, properties).
Coupled elements (wall + opening + door, roof + slabs) are kept together.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `inputPath` | `string` | Absolute or relative path to the source IFC file. |
| `numGroups` | `number` | Number of output files to produce. Not capped by the splitter, but note that the write pass holds one open writer per non-empty group, so the practical ceiling is the process' file descriptor limit. |
| `outputPath` | (`groupId`) => `string` | Given `groupId` returns output file path. |

#### Returns

`Promise`\<`Map`\<`number`, `object`\>\>

a map keyed by [GroupData.groupId](../interfaces/GroupData.md#groupid) with the path of each
written file and the IFC ids it contains. Empty groups have no entry.

#### Throws

if `numGroups` is not a positive integer.
