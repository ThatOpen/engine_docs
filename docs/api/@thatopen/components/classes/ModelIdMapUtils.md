# ModelIdMapUtils

Utility class for manipulating and managing `ModelIdMap` objects. A `ModelIdMap` is a mapping of model identifiers (strings) to sets of local IDs (numbers). This class provides methods for joining, intersecting, cloning, adding, removing, and comparing `ModelIdMap` objects, as well as converting between `ModelIdMap` and plain JavaScript objects.

## Methods

### add()

> `static` **add**(`target`, `source`, `clone`): `void`

Adds all entries from one ModelIdMap to another.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `target` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | `undefined` | The ModelIdMap to add to. |
| `source` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | `undefined` | The ModelIdMap to add from. |
| `clone` | `boolean` | `false` | - |

#### Returns

`void`

***

### clone()

> `static` **clone**(`source`): [`ModelIdMap`](../type-aliases/ModelIdMap.md)

Creates a deep clone of a ModelIdMap.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `source` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | The ModelIdMap to clone. |

#### Returns

[`ModelIdMap`](../type-aliases/ModelIdMap.md)

A new ModelIdMap with the same model identifiers and localIds as the original.

***

### fromRaw()

> `static` **fromRaw**(`raw`): [`ModelIdMap`](../type-aliases/ModelIdMap.md)

Creates a ModelIdMap from a plain JavaScript object with array values.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `raw` | `object` | A plain JavaScript object where each key (model ID) maps to an array of local IDs. |

#### Returns

[`ModelIdMap`](../type-aliases/ModelIdMap.md)

A ModelIdMap.

***

### intersect()

> `static` **intersect**(`maps`): [`ModelIdMap`](../type-aliases/ModelIdMap.md)

Creates a new ModelIdMap from the intersection of multiple ModelIdMaps.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `maps` | [`ModelIdMap`](../type-aliases/ModelIdMap.md)[] | An array of ModelIdMaps. |

#### Returns

[`ModelIdMap`](../type-aliases/ModelIdMap.md)

A new ModelIdMap containing only model identifiers and localIds present in all input maps.

***

### isEmpty()

> `static` **isEmpty**(`map`): `boolean`

Checks if a ModelIdMap is empty.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `map` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | The ModelIdMap to check. |

#### Returns

`boolean`

True if the ModelIdMap is empty, false otherwise.

***

### isEqual()

> `static` **isEqual**(`a`, `b`): `boolean`

Checks if two ModelIdMaps are equal.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `a` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | The first ModelIdMap. |
| `b` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | The second ModelIdMap. |

#### Returns

`boolean`

True if the ModelIdMaps are equal, false otherwise.

***

### join()

> `static` **join**(`maps`): [`ModelIdMap`](../type-aliases/ModelIdMap.md)

Creates a new ModelIdMap from the union of multiple ModelIdMaps.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `maps` | [`ModelIdMap`](../type-aliases/ModelIdMap.md)[] | An array of ModelIdMaps to join. |

#### Returns

[`ModelIdMap`](../type-aliases/ModelIdMap.md)

A new ModelIdMap containing all model identifiers and localIds from all input maps.

***

### remove()

> `static` **remove**(`target`, `source`, `clone`): `void`

Remove all entries from one ModelIdMap to another.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `target` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | `undefined` | The ModelIdMap to subtract from. |
| `source` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | `undefined` | The ModelIdMap to subtract. |
| `clone` | `boolean` | `false` | - |

#### Returns

`void`

***

### toRaw()

> `static` **toRaw**(`map`): `object`

Converts a ModelIdMap into a plain JavaScript object with array values.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `map` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | The ModelIdMap to convert. |

#### Returns

`object`

A plain JavaScript object where each key (model ID) maps to an array of local IDs.
