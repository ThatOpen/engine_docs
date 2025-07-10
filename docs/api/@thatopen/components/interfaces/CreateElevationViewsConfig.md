# CreateElevationViewsConfig

Configuration options for creating views from bounding boxes.

## Properties

### combine?

> `optional` **combine**: `boolean`

Determines whether to combine all models into a single bounding box. If `true`, a single bounding box will be created from all models. If `false`, each model will be treated separately. Defaults to `false`.

***

### modelIds?

> `optional` **modelIds**: `RegExp`[]

An optional array of regular expressions to match model IDs. If not provided, all models will be used.

***

### namingCallback()?

> `optional` **namingCallback**: (`modelId`) => `object`

A callback function to generate names for the views based on the model ID. Defaults to a function that generates names in the format: `<modelId>: Front`, `<modelId>: Back`, `<modelId>: Left`, `<modelId>: Right`.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `modelId` | `string` |

#### Returns

`object`

##### back

> **back**: `string`

##### front

> **front**: `string`

##### left

> **left**: `string`

##### right

> **right**: `string`

***

### world?

> `optional` **world**: [`World`](World.md)

Optional world instance to use when creating the view. If not set, the component's default world will be used.
