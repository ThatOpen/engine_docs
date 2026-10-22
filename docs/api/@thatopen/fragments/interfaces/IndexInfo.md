# IndexInfo

Snapshot of an index's shape. Returned by `getIndexInfo` so callers can
branch on the mode without re-inspecting the underlying buffer.

## Properties

### keyType

> **keyType**: [`IndexKeyType`](../type-aliases/IndexKeyType.md)

Whether keys are stored as strings or numbers.

***

### mode

> **mode**: [`IndexMode`](../type-aliases/IndexMode.md)

Storage shape of the index.

***

### name

> **name**: `string`

Index identifier, unique within the model.

***

### size

> **size**: `number`

Number of keys in the index.

***

### valueType

> **valueType**: [`IndexValueType`](../type-aliases/IndexValueType.md)

Whether values are stored as strings, numbers, or absent (keys-only).
