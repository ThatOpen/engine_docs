# ClassificationGroupData

Represents the data structure for a classification group.

## Properties

### map

> **map**: [`ModelIdMap`](../type-aliases/ModelIdMap.md)

The ModelIdMap that represents the static collection of items within the group.

***

### query?

> `optional` **query**: [`ClassificationGroupQuery`](ClassificationGroupQuery.md)

Optional query used to dynamically find items using the ItemsFinder. Some groups may only rely on static items.

## Methods

### get()

> **get**(): `Promise` \<[`ModelIdMap`](../type-aliases/ModelIdMap.md)\>

Asynchronously retrieves the combined map of static and dynamically found items.

#### Returns

`Promise` \<[`ModelIdMap`](../type-aliases/ModelIdMap.md)\>
