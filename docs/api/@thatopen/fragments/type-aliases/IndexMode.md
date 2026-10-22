# IndexMode

> **IndexMode**: `"keysOnly"` \| `"oneToOne"` \| `"oneToNLinear"` \| `"oneToNNonLinear"`

Storage shape of a user-defined model index. Detected once per index from
the populated vectors and exposed via [IndexInfo](../interfaces/IndexInfo.md).

- `keysOnly`: only keys are stored. The index acts as a sorted set; values
  are queried via `hasIndexEntry` / iterated via `getIndexKeys`.
- `oneToOne`: each key maps to exactly one value.
- `oneToNLinear`: each key maps to a contiguous slice of values.
- `oneToNNonLinear`: each key maps to an arbitrary slice (slices may
  overlap or reorder, e.g. flattened descendant trees).
