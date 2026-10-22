# GroupData

Per-group output data: the set of IFC entity IDs to include and any rewritten relationship lines.

## Properties

### groupId

> **groupId**: `number`

The `groupId` this data was resolved for — the value passed to `split`'s
`outputPath` callback. Carried explicitly rather than implied by position,
because groups that end up with no elements produce no entry at all.
