# IfcSplitterWarningEvent

Payload of [IfcSplitter.onExtractWarning](../classes/IfcSplitter.md#onextractwarning), fired for each skipped id.

## Properties

### context

> **context**: `object`

The skipped id and, if it exists in the file, its IFC type.

#### id

> **id**: `number`

#### type?

> `optional` **type**: `string`

***

### message

> **message**: `string`

Human readable reason the id was skipped.
