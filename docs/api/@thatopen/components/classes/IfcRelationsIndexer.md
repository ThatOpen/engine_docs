# IfcRelationsIndexer

Indexer component for IFC entities, facilitating the indexing and retrieval of IFC entity relationships. It is designed to process models properties by indexing their IFC entities' relations based on predefined inverse attributes, and provides methods to query these relations. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IfcRelationsIndexer). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IfcRelationsIndexer).

## Extends

- [`Component`](Component.md)

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

#### Overrides

[`Component`](Component.md) . [`enabled`](Component.md#enabled)

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`string`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### onEntitiesRelated

> `readonly` **onEntitiesRelated**: [`Event`](Event.md) \<[`EntitiesRelatedEvent`](../interfaces/EntitiesRelatedEvent.md)\>

An event that is triggered when entities are related in a BIM model.
The event provides information about the type of relation, the inverse attribute,
the IDs of the entities related, and the IDs of the entities that are being related.

***

### onRelationsIndexed

> `readonly` **onRelationsIndexed**: [`Event`](Event.md)\<`object`\>

Event triggered when relations for a model have been indexed.
This event provides the model's UUID and the relations map generated for that model.

#### Type declaration

##### modelID

> **modelID**: `string`

##### relationsMap

> **relationsMap**: `RelationsMap`

***

### relationMaps

> `readonly` **relationMaps**: `ModelsRelationMap` = `{}`

Holds the relationship mappings for each model processed by the indexer.
The structure is a map where each key is a model's UUID, and the value is another map.
This inner map's keys are entity expressIDs, and its values are maps where each key is an index
representing a specific relation type, and the value is an array of expressIDs of entities
that are related through that relation type. This structure allows for efficient querying
of entity relationships within a model.

***

### uuid

> `static` `readonly` **uuid**: `"23a889ab-83b3-44a4-8bee-ead83438370b"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### ~~addEntityRelations()~~

> **addEntityRelations**(`model`, `expressID`, `relationName`, ...`relIDs`): `void`

Adds relations between an entity and other entities in a BIM model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The BIM model to which the relations will be added. |
| `expressID` | `number` | The expressID of the entity within the model. |
| `relationName` | `"IsDecomposedBy"` \| `"Decomposes"` \| `"AssociatedTo"` \| `"HasAssociations"` \| `"ClassificationForObjects"` \| `"IsGroupedBy"` \| `"HasAssignments"` \| `"IsDefinedBy"` \| `"DefinesOcurrence"` \| `"IsTypedBy"` \| `"Types"` \| `"Defines"` \| `"ContainedInStructure"` \| `"ContainsElements"` \| `"HasControlElements"` \| `"AssignedToFlowElement"` \| `"ConnectedTo"` \| `"ConnectedFrom"` \| `"ReferencedBy"` \| `"Declares"` \| `"HasContext"` \| `"Controls"` \| `"IsNestedBy"` \| `"Nests"` \| `"DocumentRefForObjects"` | The IFC schema inverse attribute of the relation to add (e.g., "IsDefinedBy", "ContainsElements"). |
| ...`relIDs` | `number`[] | The expressIDs of the related entities within the model. |

#### Returns

`void`

#### Deprecated

Use addEntitiesRelation instead. This will be removed in future versions.

#### Throws

An error if the relation name is not a valid relation name.

***

### applyRelationChanges()

> **applyRelationChanges**(): `Promise`\<`void`\>

Converts the relations made into actual IFC data.

#### Returns

`Promise`\<`void`\>

A promise that resolves when all the relation changes have been applied.

#### Remarks

This function iterates through the changes made to the relations and applies them to the corresponding BIM model.
It only make sense to use it if the relations need to be write in the IFC file.

***

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### getEntitiesWithRelation()

> **getEntitiesWithRelation**(`model`, `inv`, `expressID`): `Set`\<`number`\>

Retrieves the entities within a model that have a specific relation with a given entity.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The BIM model to search for related entities. |
| `inv` | `"IsDecomposedBy"` \| `"Decomposes"` \| `"AssociatedTo"` \| `"HasAssociations"` \| `"ClassificationForObjects"` \| `"IsGroupedBy"` \| `"HasAssignments"` \| `"IsDefinedBy"` \| `"DefinesOcurrence"` \| `"IsTypedBy"` \| `"Types"` \| `"Defines"` \| `"ContainedInStructure"` \| `"ContainsElements"` \| `"HasControlElements"` \| `"AssignedToFlowElement"` \| `"ConnectedTo"` \| `"ConnectedFrom"` \| `"ReferencedBy"` \| `"Declares"` \| `"HasContext"` \| `"Controls"` \| `"IsNestedBy"` \| `"Nests"` \| `"DocumentRefForObjects"` | The IFC schema inverse attribute of the relation to search for (e.g., "IsDefinedBy", "ContainsElements"). |
| `expressID` | `number` | The expressID of the entity within the model. |

#### Returns

`Set`\<`number`\>

A `Set` with the expressIDs of the entities that have the specified relation with the given entity.

#### Throws

An error if the model relations are not indexed or if the inverse attribute name is invalid.

***

### getEntityChildren()

> **getEntityChildren**(`model`, `expressID`, `found`): `Set`\<`number`\>

Gets the children of the given element recursively. E.g. in a model with project - site - building - storeys - rooms, passing a storey will include all its children and the children of the rooms contained in it.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The BIM model whose children to get. |
| `expressID` | `number` | The expressID of the item whose children to get. |
| `found` | `Set`\<`number`\> | An optional parameter that includes a set of expressIDs where the found element IDs will be added. |

#### Returns

`Set`\<`number`\>

A `Set` with the expressIDs of the found items.

***

### getEntityRelations()

> **getEntityRelations**(`model`, `expressID`, `attribute`): `number`[]

Retrieves the relations of a specific entity within a model based on the given relation name.
This method searches the indexed relation maps for the specified model and entity,
returning the IDs of related entities if a match is found.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `string` \| `RelationsMap` \| `FragmentsGroup` | The `FragmentsGroup` model containing the entity, or its UUID. |
| `expressID` | `number` | The unique identifier of the entity within the model. |
| `attribute` | `"IsDecomposedBy"` \| `"Decomposes"` \| `"AssociatedTo"` \| `"HasAssociations"` \| `"ClassificationForObjects"` \| `"IsGroupedBy"` \| `"HasAssignments"` \| `"IsDefinedBy"` \| `"DefinesOcurrence"` \| `"IsTypedBy"` \| `"Types"` \| `"Defines"` \| `"ContainedInStructure"` \| `"ContainsElements"` \| `"HasControlElements"` \| `"AssignedToFlowElement"` \| `"ConnectedTo"` \| `"ConnectedFrom"` \| `"ReferencedBy"` \| `"Declares"` \| `"HasContext"` \| `"Controls"` \| `"IsNestedBy"` \| `"Nests"` \| `"DocumentRefForObjects"` | The IFC schema inverse attribute of the relation to search for (e.g., "IsDefinedBy", "ContainsElements"). |

#### Returns

`number`[]

An array of express IDs representing the related entities. If the array is empty, no relations were found.

***

### getRelationsMapFromJSON()

> **getRelationsMapFromJSON**(`json`): `RelationsMap`

Converts a JSON string representing relations between entities into a structured map.
This method parses the JSON string to reconstruct the relations map that indexes
entity relations by their express IDs. The outer map keys are the express IDs of entities,
and the values are maps where each key is a relation type ID and its value is an array
of express IDs of entities related through that relation type.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `json` | `string` | The JSON string to be parsed into the relations map. |

#### Returns

`RelationsMap`

A `Map` where the key is the express ID of an entity as a number, and the value
is another `Map`. This inner map's key is the relation type ID as a number, and its value
is an array of express IDs (as numbers) of entities related through that relation type.

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any, any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any, any>`

#### Inherited from

[`Component`](Component.md) . [`isConfigurable`](Component.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`Component`](Component.md) . [`isDisposeable`](Component.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`Component`](Component.md) . [`isHideable`](Component.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`Component`](Component.md) . [`isResizeable`](Component.md#isresizeable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`Component`](Component.md) . [`isUpdateable`](Component.md#isupdateable)

***

### process()

> **process**(`model`, `config`?): `Promise`\<`RelationsMap`\>

Processes a given model to index its IFC entities relations based on predefined inverse attributes.
This method iterates through each specified inverse attribute, retrieves the corresponding relations,
and maps them in a structured way to facilitate quick access to related entities.

The process involves querying the model for each relation type associated with the inverse attributes
and updating the internal relationMaps with the relationships found. This map is keyed by the model's UUID
and contains a nested map where each key is an entity's expressID and its value is another map.
This inner map's keys are the indices of the inverse attributes, and its values are arrays of expressIDs
of entities that are related through that attribute.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The `FragmentsGroup` model to be processed. It must have properties loaded. |
| `config`? | `Partial`\<`RelationsProcessingConfig`\> | - |

#### Returns

`Promise`\<`RelationsMap`\>

A promise that resolves to the relations map for the processed model. This map is a detailed
representation of the relations indexed by entity expressIDs and relation types.

#### Throws

An error if the model does not have properties loaded.

***

### processFromWebIfc()

> **processFromWebIfc**(`ifcApi`, `modelID`): `Promise`\<`RelationsMap`\>

Processes a given model from a WebIfc API to index its IFC entities relations.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ifcApi` | `IfcAPI` | The WebIfc API instance from which to retrieve the model's properties. |
| `modelID` | `number` | The unique identifier of the model within the WebIfc API. |

#### Returns

`Promise`\<`RelationsMap`\>

A promise that resolves to the relations map for the processed model.
         This map is a detailed representation of the relations indexed by entity expressIDs and relation types.

***

### serializeAllRelations()

> **serializeAllRelations**(): `string`

Serializes all relations of every model processed by the indexer into a JSON string.
This method iterates through each model's relations indexed in `relationMaps`, organizing them
into a structured JSON object. Each top-level key in this object corresponds to a model's UUID,
and its value is another object mapping entity expressIDs to their related entities, categorized
by relation types. The structure facilitates easy access to any entity's relations across all models.

#### Returns

`string`

A JSON string representing the serialized relations of all models processed by the indexer.
         If no relations have been indexed, an empty object is returned as a JSON string.

***

### serializeModelRelations()

> **serializeModelRelations**(`model`): `null` \| `string`

Serializes the relations of a specific model into a JSON string.
This method iterates through the relations indexed for the given model,
organizing them into a structured object where each key is an expressID of an entity,
and its value is another object mapping relation indices to arrays of related entity expressIDs.
The resulting object is then serialized into a JSON string.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The `FragmentsGroup` model whose relations are to be serialized. |

#### Returns

`null` \| `string`

A JSON string representing the serialized relations of the specified model.
If the model has no indexed relations, `null` is returned.

***

### serializeRelations()

> **serializeRelations**(`relationMap`): `string`

Serializes the relations of a given relation map into a JSON string.
This method iterates through the relations in the given map, organizing them into a structured object where each key is an expressID of an entity,
and its value is another object mapping relation indices to arrays of related entity expressIDs.
The resulting object is then serialized into a JSON string.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `relationMap` | `RelationsMap` | The map of relations to be serialized. The map keys are expressIDs of entities, and the values are maps where each key is a relation type ID and its value is an array of expressIDs of entities related through that relation type. |

#### Returns

`string`

A JSON string representing the serialized relations of the given relation map.

***

### setRelationMap()

> **setRelationMap**(`model`, `relationMap`): `void`

Adds a relation map to the model's relations map.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The `FragmentsGroup` model to which the relation map will be added. |
| `relationMap` | `RelationsMap` | The `RelationsMap` to be added to the model's relations map. |

#### Returns

`void`

#### Fires

onRelationsIndexed - Triggers an event with the model's UUID and the added relation map.
