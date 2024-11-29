# EntitiesRelatedEvent

Interface definition of an Entities Related Event from the IfcRelationsIndexer. This event gets triggered when two or more entities has been related with each other.

## Properties

### invAttribute

> **invAttribute**: `"IsDecomposedBy"` \| `"Decomposes"` \| `"AssociatedTo"` \| `"HasAssociations"` \| `"ClassificationForObjects"` \| `"IsGroupedBy"` \| `"HasAssignments"` \| `"IsDefinedBy"` \| `"DefinesOcurrence"` \| `"IsTypedBy"` \| `"Types"` \| `"Defines"` \| `"ContainedInStructure"` \| `"ContainsElements"` \| `"HasControlElements"` \| `"AssignedToFlowElement"` \| `"ConnectedTo"` \| `"ConnectedFrom"` \| `"ReferencedBy"` \| `"Declares"` \| `"HasContext"` \| `"Controls"` \| `"IsNestedBy"` \| `"Nests"` \| `"DocumentRefForObjects"`

The inverse attribute of the relation.

***

### relType

> **relType**: `160246688` \| `279856033` \| `307848117` \| `781010003` \| `919958153` \| `982818633` \| `1204542856` \| `1307041759` \| `2495723537` \| `2565941209` \| `2655215786` \| `2857406711` \| `3242617779` \| `3268803585` \| `4186316022`

The type of the IFC relation.

***

### relatedIDs

> **relatedIDs**: `number`[]

The IDs of the entities that are being related.

***

### relatingIDs

> **relatingIDs**: `number`[]

The IDs of the entities that are relating.
