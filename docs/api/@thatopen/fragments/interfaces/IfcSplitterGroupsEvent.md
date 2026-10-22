# IfcSplitterGroupsEvent

Payload of [IfcSplitter.onSplitsResolved](../classes/IfcSplitter.md#onsplitsresolved), fired once `split` knows
what goes into each output file and before any file is written.

## Properties

### data

> **data**: [`GroupData`](GroupData.md)[]

One entry per **non-empty** group, ascending by [GroupData.groupId](GroupData.md#groupid).
A `split` into more groups than there are element clusters simply yields
fewer entries than `numGroups` — use `groupId` to correlate, not the index.
