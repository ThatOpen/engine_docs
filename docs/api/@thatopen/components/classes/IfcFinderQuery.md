# `abstract` IfcFinderQuery

The base class for all queries used by the [IfcFinder](IfcFinder.md).

## Extended by

- [`IfcBasicQuery`](IfcBasicQuery.md)
- [`IfcPropertyQuery`](IfcPropertyQuery.md)

## Properties

### ids

> **ids**: `object` = `{}`

The IDs of the match items per model.

#### Index signature

 \[`modelID`: `string`\]: `Set`\<`number`\>

***

### inclusive

> **inclusive**: `boolean` = `false`

If false, ALL rules of the query must comply to make a match. If true, ANY rule will be enough to make a match.

***

### items

> `abstract` **items**: `FragmentIdMap`

The list of IFC items that this query found across all models.

***

### name

> `abstract` **name**: `string`

A name given to the instance of the query to identify it.

***

### needsUpdate

> **needsUpdate**: `Map`\<`string`, `boolean`\>

Whether this query is up to date or not per file. If not, when updating the group where it belongs, it will re-process the given file.

***

### onProgress

> `readonly` **onProgress**: [`Event`](Event.md)\<`number`\>

Event used to notify the progress when performing a query on an IFC file.

***

### rules

> **rules**: [`IfcFinderRule`](../type-aliases/IfcFinderRule.md)[] = `[]`

The list of rules to be applied by this query.

***

### importers

> `static` **importers**: `Map`\<`string`, (`components`, `data`) => [`IfcFinderQuery`](IfcFinderQuery.md)\>

The list of functions to import the queries. If you create your own custom query, you should add its importer here. See the other queries provided by the library for reference.

## Methods

### clear()

> **clear**(`modelID`?): `void`

Clears the data of the given model. If not specified, clears all the data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelID`? | `string` | ID of the model whose data to clear. |

#### Returns

`void`

***

### export()

> `abstract` **export**(): `object`

Export the current data of this query in a serializable object to persist it over time.

#### Returns

`object`

***

### update()

> `abstract` **update**(`modelID`, `file`): `Promise`\<`void`\>

Perform the search in the given file and save the result.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `modelID` | `string` |
| `file` | `File` |

#### Returns

`Promise`\<`void`\>

***

### import()

> `static` **import**(`components`, `data`): `null` \| [`IfcFinderQuery`](IfcFinderQuery.md)

Imports a query given its data. This data can be generating using its [IfcFinderQuery.export](IfcFinderQuery.md#export) method.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `components` | [`Components`](Components.md) | the instance of [Components](Components.md) used by this app. |
| `data` | `object` | the data of the query to import as a serializable object. |

#### Returns

`null` \| [`IfcFinderQuery`](IfcFinderQuery.md)

***

### importIds()

> `static` **importIds**(`data`): `object`

Imports the given IDs. Only use this when writing your own custom query. See the other queries provided by the library for reference.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`SerializedQuery`](../type-aliases/SerializedQuery.md) | the serialized object representing the query whose IDs to parse. |

#### Returns

`object`

***

### importRules()

> `static` **importRules**(`serializedRules`): [`IfcFinderRule`](../type-aliases/IfcFinderRule.md)[]

Imports the given serialized rules. Only use this when writing your own custom query. See the other queries provided by the library for reference.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `serializedRules` | `object`[] | the rules to be parsed. |

#### Returns

[`IfcFinderRule`](../type-aliases/IfcFinderRule.md)[]
