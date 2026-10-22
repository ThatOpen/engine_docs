# IfcSplitterConfig

Options of an [IfcSplitter](../classes/IfcSplitter.md). Every field is optional and falls back to
the exported default, so a config only needs what it changes.

## Properties

### elementTypes?

> `optional` **elementTypes**: `string`[]

Upper-case IFC types treated as splittable building elements. Only these
are distributed across groups by `split` and accepted by `extract`.

#### Default

```ts
{@link ELEMENT_TYPES}
```

***

### listArgIndex()?

> `optional` **listArgIndex**: (`ifcType`) => `undefined` \| `number`

Given an upper-case IFC relationship type, the index of the argument that
holds its list of related objects. Return `undefined` for types without
one.

#### See

[listIdxByType](../functions/listIdxByType.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ifcType` | `string` |

#### Returns

`undefined` \| `number`

***

### spatialTypes?

> `optional` **spatialTypes**: `string`[]

Upper-case IFC types of the spatial structure, written to every output
file.

#### Default

```ts
{@link SPATIAL_TYPES}
```
