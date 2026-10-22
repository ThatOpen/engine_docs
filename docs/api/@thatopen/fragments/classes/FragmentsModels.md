# FragmentsModels

The main class for managing multiple 3D models loaded from fragments files. Handles loading, disposing, updating, raycasting, highlighting and coordinating multiple FragmentsModel instances. This class acts as the main entry point for working with fragments models. A FragmentsModels instance needs a worker to process fragments off the main thread. The recommended way to obtain the worker URL is via the static FragmentsModels.getWorker method, which fetches the version-matched worker from unpkg. Check the method docs for more info.

## Constructors

### new FragmentsModels()

> **new FragmentsModels**(`workerURL`?, `options`?): [`FragmentsModels`](FragmentsModels.md)

Creates a new FragmentsModels instance.

The recommended way to obtain the worker URL is via [FragmentsModels.getWorker](FragmentsModels.md#getworker),
which fetches the version-matched worker from unpkg. See its docs for an example.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `workerURL`? | `string` | The URL of the worker script that will handle the fragments processing. If omitted, it falls back to the worker bundled with the package (only works with bundlers that can resolve `new URL("./Worker/worker.mjs", import.meta.url)`). |
| `options`? | `FragmentsModelsOptions` | Optional configuration. |

#### Returns

[`FragmentsModels`](FragmentsModels.md)

## Properties

### baseCoordinates

> **baseCoordinates**: `null` \| `number`[] = `null`

Coordinates of the first loaded model, used for coordinate system alignment

***

### editor

> **editor**: [`Editor`](Editor.md)

The editor instance for managing model edits and changes

***

### models

> **models**: `MeshManager`

The manager that handles all loaded fragments models.
Provides functionality to:
- Store and retrieve models by ID
- Track model loading/unloading
- Coordinate updates across models
- Handle model disposal

***

### settings

> **settings**: `object`

Settings that control the behavior of the FragmentsModels system

#### autoCoordinate

> **autoCoordinate**: `boolean` = `true`

Whether to automatically coordinate model positions relative to the first loaded model

#### ~~forceUpdateBuffer~~

> **forceUpdateBuffer**: `number` = `200`

##### Deprecated

See [forceUpdateRate](FragmentsModels.md#forceupdaterate).

#### ~~forceUpdateRate~~

> **forceUpdateRate**: `number` = `200`

##### Deprecated

The polling-based force-flush implementation has
been replaced by a sequence-fence one (`forceUpdateFinish`
resolves the moment a FINISH stamped with the relevant seq
arrives). These knobs are no longer read; kept only to avoid
breaking apps that set them.

#### graphicsQuality

> **graphicsQuality**: `number` = `0`

Graphics quality level - 0 is low quality, 1 is high quality

#### maxUpdateRate

> **maxUpdateRate**: `number` = `100`

Maximum rate (in milliseconds) at which visual updates are performed

#### meshConnectionRate

> **meshConnectionRate**: `number` = `16`

Interval in milliseconds to flush queued mesh requests from thread to
main thread. Set this once at FragmentsModels construction; changing
it after a model has been loaded has no effect on already-loaded
models (they keep the value they were created with).

Default 16 ms (one frame at 60 Hz). The previous 64 ms default
left tile updates sitting in the worker's outflow buffer for up
to ~1 frame longer than necessary; lowering it tightens the
latency between worker work and visible result on every
interaction. Apps with very heavy worker output may want to
raise this to reduce postMessage frequency.

#### meshConnectionThreshold

> **meshConnectionThreshold**: `number` = `4`

Number of queued mesh requests that triggers an immediate flush.
Same setup-time semantics as [meshConnectionRate](FragmentsModels.md#meshconnectionrate). Default
4 — bursts of work flush within a frame instead of being
pinned to the rate timer.

#### threadUpdaterDelay

> **threadUpdaterDelay**: `number` = `32`

Delay in milliseconds between worker-side update loops when work is
complete. Note: each worker has a single shared update loop, so when
multiple models share a worker (default round-robin pool, or any
`threadGroup`), the most recently loaded model's value applies to
every model on that worker. Set this once at FragmentsModels
construction and treat it as a global tuning knob.

Default 32 ms (~30 Hz). The previous 128 ms default left the
worker idling for up to ~8 frames between iterations, which on
interactive workloads showed up as visible lag between RPC and
visual settle. Apps with low-end CPUs may want to raise it to
reduce idle-loop overhead.

## Accessors

### maxWorkers

> `get` **maxWorkers**(): `number`

Effective max worker cap for this instance. Surfaces the value derived
from `navigator.hardwareConcurrency - 3` (floored at 2) or the explicit
`maxWorkers` override passed to the constructor.

#### Returns

`number`

***

### threadGroups

> `get` **threadGroups**(): `Record`\<`string`, `number`\>

Reserved worker capacity per named thread group, as declared at init.
Empty object if no groups were declared.

#### Returns

`Record`\<`string`, `number`\>

## Methods

### abort()

> **abort**(`modelId`): `void`

Aborts an in-flight `load()` for the given model ID. The pending `load()`
promise will reject with a `LoadAbortedError` and any partial state
(on both the main thread and the worker) is disposed.

Has no effect if the model finished loading or isn't currently loading.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The unique identifier of the model to abort. |

#### Returns

`void`

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of all models managed by this FragmentsModels instance.
After calling this method, the FragmentsModels instance should not be used anymore.

#### Returns

`Promise`\<`void`\>

***

### disposeModel()

> **disposeModel**(`modelId`): `Promise`\<`void`\>

Disposes of a specific model by its ID.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `string` | The unique identifier of the model to dispose. |

#### Returns

`Promise`\<`void`\>

***

### load()

> **load**(`buffer`, `options`): `Promise` \<[`FragmentsModel`](FragmentsModel.md)\>

Loads a fragments model from an ArrayBuffer.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `Uint8Array` \| `ArrayBuffer` | The ArrayBuffer containing the fragments data to load. |
| `options` | `object` | Configuration options for loading the model. |
| `options.camera`? | `PerspectiveCamera` \| `OrthographicCamera` | Optional camera to use for model culling and LOD. |
| `options.clippingPlanes`? | `Plane`[] | Optional clipping planes (world space) to cull against. The array is kept by reference and read on every view refresh; see [FragmentsModel.useClippingPlanes](FragmentsModel.md#useclippingplanes). |
| `options.modelId` | `string` | Unique identifier for the model. |
| `options.onProgress`? | (`event`) => `void` | Optional callback for receiving loading progress updates. |
| `options.raw`? | `boolean` | Whether the buffer is raw (uncompressed) or deflated. If omitted, it is auto-detected from the buffer (see [isRawBuffer](../functions/isRawBuffer.md)). |
| `options.threadGroup`? | `string` | Routes the model to a thread group declared at init time. Models sharing a group also share workers, isolated from other groups and from the default pool. Throws if the group was not declared. |
| `options.userData`? | `Record`\<`string`, `any`\> | Optional custom data to attach to the model. |
| `options.virtualModelConfig`? | [`VirtualModelConfig`](../interfaces/VirtualModelConfig.md) | Optional configuration for virtual model setup. |

#### Returns

`Promise` \<[`FragmentsModel`](FragmentsModel.md)\>

Promise resolving to the loaded FragmentsModel instance.

***

### update()

> **update**(`force`): `Promise`\<`void`\>

Updates all models managed by this FragmentsModels instance.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `force` | `boolean` | `false` | If true, it will force all the models to finish all the pending requests. |

#### Returns

`Promise`\<`void`\>

***

### getWorker()

> `static` **getWorker**(): `Promise`\<`string`\>

Fetches the fragments worker from unpkg for the exact version of this
`@thatopen/fragments` package and returns a blob URL you can pass to the
`FragmentsModels` constructor. The result is cached, so calling this
method more than once is cheap.

This is the recommended way to obtain the worker URL — it guarantees the
worker version matches the library version and requires no copying of
files into your project.

#### Returns

`Promise`\<`string`\>

A blob URL pointing to the fragments worker script.

#### Example

```ts
const workerURL = await FragmentsModels.getWorker();
const fragments = new FragmentsModels(workerURL);
```

## Events

### onModelLoaded

> `readonly` **onModelLoaded**: `Event` \<[`FragmentsModel`](FragmentsModel.md)\>

Event triggered when a model is loaded.
