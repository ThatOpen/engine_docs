# EditRequestsSince

The requests of a model added since an earlier read (see `Editor.getModelRequestsSince`).

## Properties

### count

> **count**: `number`

The number of requests of the model. Pass it as `from` to the next call.

***

### from

> **from**: `number`

The index of the first returned request: the given `from`, or 0 when all are returned.

***

### generation

> **generation**: `number`

Pass it to the next call. It changes when requests are undone, selected, set or reset, and
when the model is saved or loaded again. It is an arbitrary non-negative integer.

***

### requests

> **requests**: [`EditRequest`](../type-aliases/EditRequest.md)[]

The requests from `from` on.
