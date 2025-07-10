# ViewpointComponent

Represents a component within a viewpoint, typically used in Building Information Modeling (BIM) workflows. This interface is compliant with the BCF API specifications.

## Properties

### authoring\_tool\_id

> **authoring\_tool\_id**: `null` \| `string`

The identifier of the component as defined by the authoring tool. Can be `null` if not applicable.

***

### ifc\_guid

> **ifc\_guid**: `null` \| `string`

The unique identifier for the component in the IFC format. Can be `null` if not applicable.

***

### originating\_system?

> `optional` **originating\_system**: `string`

(Optional) The name of the system or application that originated the component.
