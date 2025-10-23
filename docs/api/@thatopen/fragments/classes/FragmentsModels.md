# FragmentsModels

The main class for managing multiple 3D models loaded from fragments files. Handles loading, disposing, updating, raycasting, highlighting and coordinating multiple FragmentsModel instances. This class acts as the main entry point for working with fragments models.

## Constructors

### new FragmentsModels()

> **new FragmentsModels**(`workerURL`): [`FragmentsModels`](FragmentsModels.md)

Creates a new FragmentsModels instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `workerURL` | `string` | The URL of the worker script that will handle the fragments processing. This should point to a copy of the fragments worker file from @thatopen/fragments. |

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

#### graphicsQuality

> **graphicsQuality**: `number` = `0`

Graphics quality level - 0 is low quality, 1 is high quality

#### maxUpdateRate

> **maxUpdateRate**: `number` = `100`

Maximum rate (in milliseconds) at which visual updates are performed

## Methods

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
| `options.modelId` | `string` | Unique identifier for the model. |
| `options.raw`? | `boolean` | If true, loads raw (uncompressed) data. Default is false. |
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

## Events

### onModelLoaded

> `readonly` **onModelLoaded**: `Event` \<[`FragmentsModel`](FragmentsModel.md)\>

Event triggered when a model is loaded.
