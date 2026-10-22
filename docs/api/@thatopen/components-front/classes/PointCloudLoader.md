# PointCloudLoader

Loads and streams out-of-core point clouds (Potree 2.0 octrees) and draws them
THROUGH the world's deferred [PostproductionRenderer](PostproductionRenderer.md): points stream by LOD
and are drawn into the deferred occlusion seam, so they are correctly occluded by
BIM geometry with no shader patching. Georeferenced precision (float64 anchor) and
the tuned point material (adaptive sizing, overlap, max-size clamp, EDL) are
handled internally — the app just points it at an octree.

`potree-core` is an OPTIONAL PEER DEPENDENCY — it is loaded lazily inside
[load](PointCloudLoader.md#load), so apps that never load point clouds don't need it installed.

## Extends

- `Component`

## Implements

- `Disposable_2`

## Properties

### list

> `readonly` **list**: `Map`\<`string`, [`LoadedPointCloud`](../interfaces/LoadedPointCloud.md)\>

Loaded clouds, keyed by id.

***

### onCloudLoaded

> `readonly` **onCloudLoaded**: `Event_2` \<[`LoadedPointCloud`](../interfaces/LoadedPointCloud.md)\>

Fires once a cloud's root has streamed in and it's been anchored + measured.

***

### onDisposed

> `readonly` **onDisposed**: `Event_2`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### settings

> **settings**: [`PointCloudSettings`](../interfaces/PointCloudSettings.md)

Live quality / performance settings (see [PointCloudSettings](../interfaces/PointCloudSettings.md)).

## Accessors

### enabled

> `set` **enabled**(`value`): `void`

When false, the loader stops selecting LOD + drawing points (clouds stay loaded).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

***

### world

> `set` **world**(`value`): `void`

The world this loader draws into. Setting it wires the per-frame LOD update
and registers the occlusion hook on the world's deferred renderer; clearing it
unwires both.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `null` \| `World` |

## Methods

### dispose()

> **dispose**(): `void`

OBC.Disposable.dispose

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`

***

### load()

> **load**(`source`, `options`?): `Promise` \<[`LoadedPointCloud`](../interfaces/LoadedPointCloud.md)\>

Load a Potree 2.0 octree and stream it into the world's deferred occlusion
seam. `options.anchor` rebases the cloud (share it with BIM so both live in one
small local origin); if omitted, the cloud's own centre is used and returned on
the [LoadedPointCloud](../interfaces/LoadedPointCloud.md) so the app can align other data to it.
`options.fitCamera` (default FALSE) frames the camera on the loaded cloud — off
by default so the loader never moves the app's camera unless asked.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `source` | `string` \| [`PointCloudSource`](../interfaces/PointCloudSource.md) |
| `options`? | `object` |
| `options.anchor`? | `Vector3` |
| `options.fitCamera`? | `boolean` |
| `options.id`? | `string` |

#### Returns

`Promise` \<[`LoadedPointCloud`](../interfaces/LoadedPointCloud.md)\>

***

### remove()

> **remove**(`id`): `void`

Remove a loaded cloud and free its wrappers + visibility texture.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`
