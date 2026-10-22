# IndexEntry

> **IndexEntry**: `string` \| `number` \| `Uint32Array` \| `string`[]

Forward-lookup result for a single key in a [IndexInfo](../interfaces/IndexInfo.md).

Shape depends on the index mode: `null` for keys-only, the scalar value for
`oneToOne`, or a `Uint32Array` view (number values) / `string[]` (string
values) for the 1:N modes. The `Uint32Array` is a zero-copy view over the
underlying buffer; do not mutate it.
