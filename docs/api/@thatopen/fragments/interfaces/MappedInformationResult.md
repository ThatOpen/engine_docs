# MappedInformationResult

Interface representing the result of an information query for a specific item type.

## Template

The type of item information to query.

## Properties

### attributes

> **attributes**: (`null` \| `Record`\<`string`, `object`\>)[]

An array of attribute records for the item.
Each record contains a string key and a value of type any.

***

### category

> **category**: `string`[]

An array of category strings for the item.

***

### children

> **children**: `number`[]

An array of child item IDs for the item.

***

### data

> **data**: [`ItemData`](ItemData.md)[]

An array of data records for the item.

***

### geometry

> **geometry**: [`MeshData`](../type-aliases/MeshData.md)[][]

An array of geometry data for the item.

***

### guid

> **guid**: (`null` \| `string`)[]

An array of GUID strings for the item.

***

### highlight

> **highlight**: [`MaterialDefinition`](../type-aliases/MaterialDefinition.md)[]

An array of highlight materials for the item.

***

### mergedBoxes

> **mergedBoxes**: `Box3`

The merged bounding box for the item.

***

### relations

> **relations**: (`null` \| `Record`\<`string`, `number`[]\>)[]

An array of relation records for the item.

***

### visibility

> **visibility**: `boolean`[]

An array of visibility flags for the item.
