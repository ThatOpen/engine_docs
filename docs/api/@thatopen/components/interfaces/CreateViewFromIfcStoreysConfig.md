# CreateViewFromIfcStoreysConfig

Configuration options for creating a view from IFC storeys.

## Properties

### modelIds?

> `optional` **modelIds**: `RegExp`[]

An optional array of regular expressions to match model IDs. If not provided, all models will be used.

***

### offset?

> `optional` **offset**: `number`

An optional offset value to displace the storey plane upward. Defaults to `0.25`.

***

### storeyNames?

> `optional` **storeyNames**: `RegExp`[]

An optional array of regular expressions to match storey names. If not provided, all storeys will be used.

***

### world?

> `optional` **world**: [`World`](World.md)

Optional world instance to use when creating the view. If not set, the component's default world will be used.
