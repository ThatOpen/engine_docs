# IfcImporter

An objet to convert IFC files into fragments.

## Properties

### attributesToExclude

> **attributesToExclude**: `Set`\<`string`\>

A set of attribute names to exclude from serialization.

***

### classes

> **classes**: `object`

#### Summary

A map containing sets of IFC classes, categorized into 'elements' and 'abstract'.

#### Remarks

The 'elements' category contains a set of IFC classes representing physical elements.
The 'abstract' category contains a set of abstract IFC classes, including materials, properties, classifications, etc.

#### abstract

> **abstract**: `DataSet`\<`number`\>

#### elements

> **elements**: `DataSet`\<`number`\>

***

### distanceThreshold

> **distanceThreshold**: `null` \| `number` = `100000`

If set, ignores the items that are further away to the origin than this value.
Keep in mind that if your IFC is correctly georreferenced, this value should never
be too high. If it's too high, it's either because your file uses absolute coordinates,
(which is a very bad idea, and usually due to a poor IFC export) or because there are
objects that are very, very far away (very unlikely).

***

### geometryProcessSettings

> **geometryProcessSettings**: `object`

Settings for the processing of geometry.

#### normalPrecision

> **normalPrecision**: `number` = `10000000`

#### planePrecision

> **planePrecision**: `number` = `1000`

#### precision

> **precision**: `number` = `1000000`

#### threshold

> **threshold**: `number` = `3000`

***

### includeRelationNames

> **includeRelationNames**: `boolean` = `false`

Whether to include relation names from the imported IFC data.

***

### includeUniqueAttributes

> **includeUniqueAttributes**: `boolean` = `false`

Whether to include unique attributes from the imported IFC data.

***

### relations

> **relations**: `Map`\<`number`, `object`\>

#### Summary

Defines the relationships between IFC entities.

#### Description

This map defines the relationships between IFC entities, specifying the relationship type,
and the properties that define the relationship in both directions.

The keys of the map are IFC relationship types (e.g., `IFCRELDEFINESBYPROPERTIES`).
The values are objects that define the properties for relating and related entities.

- `forRelating`: The property name on the relating entity.
- `forRelated`: The property name on the related entity.

***

### replaceStoreyElevation

> **replaceStoreyElevation**: `boolean` = `true`

Whether to replace the IfcBuildingStorey.Elevation with the absolute storey elevation.

#### Remarks

The value is calculated taking into consideration the relative positions between entities
and it is always given in meters.

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
| `data` | `ProcessData` | Configuration object for processing. |

#### Returns

`Promise`\<`Uint8Array`\>
