# LoadProgressEvent

> **LoadProgressEvent**: `object`

Progress event emitted during model loading.

## Type declaration

### modelId

> **modelId**: `string`

The model this progress event belongs to.

### progress

> **progress**: `number`

Progress within the current stage, from 0 to 1.

### stage

> **stage**: `"decompressing"` \| `"parsing"` \| `"generating"` \| `"done"`

Current loading stage.
