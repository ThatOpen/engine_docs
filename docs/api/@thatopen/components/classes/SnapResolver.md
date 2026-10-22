# SnapResolver

Main-thread snap resolver: takes a world-space pick point + the
picked item, returns the closest face / line / point of that item
for any requested snap classes. The heavy work (fetching the item's
shell geometry through the fragments edit API and composing
world-space polygons) runs once per item; subsequent calls for the
same item are pure CPU geometry against the LRU-bounded cache.
Call [invalidate](SnapResolver.md#invalidate) when an item changes (e.g. via the
fragments edit API) so the cached snap data gets refreshed on the
next request.

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### maxCacheSize

> **maxCacheSize**: `number` = `1000`

Maximum number of items to keep in the snap cache. Beyond this,
the least-recently-used item is dropped on the next insertion.
Each cached item is on the order of a few KB (per-shell faces +
deduped edges + deduped vertices), so the default of 1000 caps
memory at a few MB even on huge models. Bump it for workflows
that revisit thousands of distinct items in a single session.

***

### maxDistance

> **maxDistance**: `number` = `1`

Maximum world-space distance for a snap candidate to be
considered valid. Vertices, edges or face planes beyond this
range are rejected. Set this in the same units as your model
(typical BIM scenes are metres, so the default of 1 means
"snap only when within 1 m of the cursor"). Tools that want a
different feel can override per-instance.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

## Accessors

### precision

> `get` **precision**(): [`SnapPrecision`](../type-aliases/SnapPrecision.md)

Numeric precision for cached face/edge/vertex buffers.

`"half"` uses Float32Array for lower memory footprint.
`"full"` uses Float64Array for higher numeric precision.
Use `"full"` for workflows that require higher geometric fidelity.

Changing this value clears the snap cache so subsequent requests
are rebuilt with the new precision.

#### Returns

[`SnapPrecision`](../type-aliases/SnapPrecision.md)

## Methods

### clear()

> **clear**(): `void`

Drop the entire cache. Useful when many items have changed.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### invalidate()

> **invalidate**(`modelId`, `itemId`): `void`

Drop a specific item from the cache (e.g. after an edit).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `modelId` | `string` |
| `itemId` | `number` |

#### Returns

`void`

***

### prefetch()

> **prefetch**(`modelId`, `itemId`): `Promise`\<`void`\>

Fire-and-forget prefetch of an item's snap geometry. Hoverer calls
this on lock-onto-new-item so by the time the user clicks, the
worker round-trip is already paid and `resolve` resolves
synchronously off the cache.

Returns a Promise so callers who *do* want to await can; most
won't.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `modelId` | `string` |
| `itemId` | `number` |

#### Returns

`Promise`\<`void`\>

***

### resolve()

> **resolve**(`point`, `modelId`, `itemId`, `classes`): `Promise`\<`null` \| [`SnapResult`](../type-aliases/SnapResult.md)\>

Returns the best snap candidate among the requested classes for a
pre-picked surface point on a known item, or `null` if the item
has no shell geometry. When multiple classes are requested, the
winner is whichever produces the smallest distance to the input
`point`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `point` | `Vector3` | <p>Pick point in world space (typically from the GPU</p><p>  picker's `getFullPick`).</p> |
| `modelId` | `string` | Model the picked item belongs to. |
| `itemId` | `number` | Internal **itemId** (the FlatBuffer `sample.item()` index, key for `boxes.sampleOf`), not the user-facing localId. The picker exposes this on its full-pick result; passing it through here lets us hit the O(1) item→samples reverse index on the worker via `_getItemSnapData(itemId)`. Keying by localId would force a full sample-table scan (~1 s on big models). |
| `classes` | `Iterable` \<[`SnapClass`](../enumerations/SnapClass.md)\> | Subset of [SnapClass](../enumerations/SnapClass.md) the caller cares about. |

#### Returns

`Promise`\<`null` \| [`SnapResult`](../type-aliases/SnapResult.md)\>
