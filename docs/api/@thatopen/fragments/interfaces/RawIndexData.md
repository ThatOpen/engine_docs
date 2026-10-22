# RawIndexData

Payload describing a user-defined model index. Maps directly to the
ModelIndex schema's flat key/value vectors with optional slicing.

Mode is inferred from which fields are populated:

  - `keysOnly`:        only `keys`.
  - `oneToOne`:        `keys` + `values`, no `start`/`end`.
  - `oneToNLinear`:    `keys` + `values` + `end`.
  - `oneToNNonLinear`: `keys` + `values` + `start` + `end`.

Keys must be homogeneous (`number[]` or `string[]`). Values, if present,
must also be homogeneous.

## Properties

### end?

> `optional` **end**: `number`[]

Per-key end offset into `values` (exclusive). Empty for keys-only and 1:1.

***

### keys

> **keys**: `string`[] \| `number`[]

Key vector. Drives the storage type (`number_keys` or `string_keys`).

Performance: prefer `number` keys for large or hot indexes. Number keys are
read straight from a `Uint32Array`, while string keys cost a UTF-8 decode
plus a long-string hash on every lookup-map build. If your keys are long
strings (e.g. hashes), hash them down to a `uint32` at build time and keep a
small side table if you need the original string back; both the build and
every lookup get dramatically cheaper, and it also keeps the worker-to-main
payload a plain typed-array copy.

***

### name

> **name**: `string`

Index identifier, unique within the model.

***

### start?

> `optional` **start**: `number`[]

Per-key start offset into `values`. Empty unless slicing is non-linear.

***

### values?

> `optional` **values**: `string`[] \| `number`[]

Value vector. Drives `number_values` or `string_values`. Omit for keys-only.
