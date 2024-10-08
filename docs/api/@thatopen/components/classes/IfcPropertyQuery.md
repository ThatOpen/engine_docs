# IfcPropertyQuery

A query that checks the properties in the property sets assigned to IFC items.

## Extends

- [`IfcFinderQuery`](IfcFinderQuery.md)

## Properties

### ids

> **ids**: `object` = `{}`

The IDs of the match items per model.

#### Index signature

 \[`modelID`: `string`\]: `Set`\<`number`\>

#### Inherited from

[`IfcFinderQuery`](IfcFinderQuery.md) . [`ids`](IfcFinderQuery.md#ids)

***

### inclusive

> **inclusive**: `boolean` = `false`

If false, ALL rules of the query must comply to make a match. If true, ANY rule will be enough to make a match.

#### Inherited from

[`IfcFinderQuery`](IfcFinderQuery.md) . [`inclusive`](IfcFinderQuery.md#inclusive)

***

### name

> **name**: `string`

[IfcFinderQuery.name](IfcFinderQuery.md#name)

#### Overrides

[`IfcFinderQuery`](IfcFinderQuery.md) . [`name`](IfcFinderQuery.md#name)

***

### needsUpdate

> **needsUpdate**: `Map`\<`string`, `boolean`\>

Whether this query is up to date or not per file. If not, when updating the group where it belongs, it will re-process the given file.

#### Inherited from

[`IfcFinderQuery`](IfcFinderQuery.md) . [`needsUpdate`](IfcFinderQuery.md#needsupdate)

***

### onProgress

> `readonly` **onProgress**: [`Event`](Event.md)\<`number`\>

Event used to notify the progress when performing a query on an IFC file.

#### Inherited from

[`IfcFinderQuery`](IfcFinderQuery.md) . [`onProgress`](IfcFinderQuery.md#onprogress)

***

### rules

> **rules**: [`IfcFinderRule`](../type-aliases/IfcFinderRule.md)[] = `[]`

The list of rules to be applied by this query.

#### Inherited from

[`IfcFinderQuery`](IfcFinderQuery.md) . [`rules`](IfcFinderQuery.md#rules)

***

### importers

> `static` **importers**: `Map`\<`string`, (`components`, `data`) => [`IfcFinderQuery`](IfcFinderQuery.md)\>

The list of functions to import the queries. If you create your own custom query, you should add its importer here. See the other queries provided by the library for reference.

#### Inherited from

[`IfcFinderQuery`](IfcFinderQuery.md) . [`importers`](IfcFinderQuery.md#importers)

***

### type

> `static` **type**: `"IfcPropertyQuery"`

The type of this query.

## Accessors

### items

> `get` **items**(): `FragmentIdMap`

[IfcFinderQuery.items](IfcFinderQuery.md#items)

#### Returns

`FragmentIdMap`

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

#### Inherited from

[`IfcFinderQuery`](IfcFinderQuery.md) . [`clear`](IfcFinderQuery.md#clear)

***

### export()

> **export**(): [`SerializedQuery`](../type-aliases/SerializedQuery.md)

[IfcFinderQuery.export](IfcFinderQuery.md#export)

#### Returns

[`SerializedQuery`](../type-aliases/SerializedQuery.md)

#### Overrides

[`IfcFinderQuery`](IfcFinderQuery.md) . [`export`](IfcFinderQuery.md#export)

***

### update()

> **update**(`modelID`, `file`): `Promise`\<`void`\>

[IfcFinderQuery.update](IfcFinderQuery.md#update)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `modelID` | `string` |
| `file` | `File` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`IfcFinderQuery`](IfcFinderQuery.md) . [`update`](IfcFinderQuery.md#update)

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

#### Inherited from

[`IfcFinderQuery`](IfcFinderQuery.md) . [`import`](IfcFinderQuery.md#import)

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

#### Inherited from

[`IfcFinderQuery`](IfcFinderQuery.md) . [`importIds`](IfcFinderQuery.md#importids)

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

#### Inherited from

[`IfcFinderQuery`](IfcFinderQuery.md) . [`importRules`](IfcFinderQuery.md#importrules)
