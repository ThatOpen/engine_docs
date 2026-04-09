# BlockInsertion

A single placed instance of a named block definition.

## Properties

### blockName

> **blockName**: `string`

Name of the block definition to draw. Must be registered via [BlockAnnotations.define](../classes/BlockAnnotations.md#define).

***

### position

> **position**: `Vector3`

Insertion point in drawing local space (Y is ignored — always 0).

***

### rotation

> **rotation**: `number`

Rotation around the Y axis in radians.

***

### scale

> **scale**: `number`

Uniform scale applied to the block geometry.

***

### style

> **style**: `string`

Style name — references a [BlockStyle](BlockStyle.md) registered on the system.

***

### uuid

> **uuid**: `string`

Unique identifier for this insertion.
