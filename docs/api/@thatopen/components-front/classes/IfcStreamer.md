# IfcStreamer

The IfcStreamer component is responsible for managing and streaming tiled IFC data. It provides methods for loading, removing, and managing IFC models, as well as handling visibility and caching. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/IfcStreamer). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/IfcStreamer).

## Extends

- `Component`

## Implements

- `Disposable`

## Properties

### cancel

> **cancel**: `boolean` = `false`

Flag to cancel the files that are being currently loaded.

***

### enabled

> **enabled**: `boolean` = `true`

OBC.Component.enabled

#### Overrides

`OBC.Component.enabled`

***

### fileDB

> **fileDB**: `StreamerFileDb`

Cache system that uses the File System API.

***

### maxRamTime

> **maxRamTime**: `number` = `5000`

Maximum time in milliseconds for a geometry to stay in the RAM cache.

***

### models

> **models**: `object` = `{}`

The data of the streamed models. It defines the geometries, their instances, its bounding box (OBB) and the assets to which they belong.

#### Index signature

 \[`modelID`: `string`\]: `object`

***

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### onFragmentsDeleted

> `readonly` **onFragmentsDeleted**: `Event`\<`Fragment`[]\>

Event triggered when fragments are deleted.

***

### onFragmentsLoaded

> `readonly` **onFragmentsLoaded**: `Event`\<`Fragment`[]\>

Event triggered when fragments are loaded.

***

### serializer

> **serializer**: `StreamSerializer`

Importer of binary IFC data previously converted to fragment tiles.

***

### url

> **url**: `string` = `""`

The URL of the data source for the streaming service.
It should be set before using the streaming service. Alternatively, you can use a custom fetch function.

***

### useCache

> **useCache**: `boolean` = `true`

Flag indicating whether to use the local cache for storing geometry files.

***

### uuid

> `static` `readonly` **uuid**: `"22437e8d-9dbc-4b99-a04f-d2da280d50c8"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Accessors

### culler

> `get` **culler**(): [`GeometryCullerRenderer`](GeometryCullerRenderer.md)

The culler used for managing and rendering the fragments.
It is automatically created when the world is set.

#### Returns

[`GeometryCullerRenderer`](GeometryCullerRenderer.md)

***

### world

> `get` **world**(): `World`

The world in which the fragments will be displayed.
It must be set before using the streaming service.
If not set, an error will be thrown when trying to access the world.

> `set` **world**(`world`): `void`

Sets the world in which the fragments will be displayed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | `World` | The new world to be set. |

#### Returns

`World`

## Methods

### clearCache()

> **clearCache**(): `Promise`\<`void`\>

Clears the local cache used for storing downloaded fragment files.

#### Returns

`Promise`\<`void`\>

A Promise that resolves when the cache is cleared.

***

### dispose()

> **dispose**(): `void`

OBC.Disposable.dispose

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`

***

### fetch()

> **fetch**(`fileName`): `Promise`\<`File` \| `Response`\>

Function used to retrieve tiles. Can be overriden to work with specific backends.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fileName` | `string` |

#### Returns

`Promise`\<`File` \| `Response`\>

***

### getBoundingBoxes()

> **getBoundingBoxes**(`items`): `FragmentsGroup`

Gets a FragmentsGroup with the OBB of the specified items. Keep in mind that you will need to dispose this group yourself using the dispose(false) method (geometry is shared with bounding boxes used for visibility check).

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `items` | `FragmentIdMap` | The items whose bounding boxes to get. |

#### Returns

`FragmentsGroup`

***

### load()

> **load**(`settings`, `coordinate`, `properties`?): `Promise`\<`FragmentsGroup`\>

Loads a new fragment group into the scene using streaming.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `settings` | [`StreamLoaderSettings`](../interfaces/StreamLoaderSettings.md) | The settings for the new fragment group. |
| `coordinate` | `boolean` | Whether to federate this model with the rest. |
| `properties`? | [`StreamPropertiesSettings`](../interfaces/StreamPropertiesSettings.md) | Optional properties for the new fragment group. |

#### Returns

`Promise`\<`FragmentsGroup`\>

The newly loaded fragment group.

***

### ~~remove()~~

> **remove**(`modelID`): `void`

Removes a fragment group from the scene.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelID` | `string` | The unique identifier of the fragment group to remove. |

#### Returns

`void`

#### Deprecated

use OBC.FragmentsManager.disposeGroup instead.

***

### setStatic()

> **setStatic**(`ids`, `active`, `culled`?): `Promise`\<`void`\>

Sets or unsets the specified fragments as static. Static fragments are streamed once and then kept in memory.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ids` | `Iterable`\<`string`\> | The list of fragment IDs to make static. |
| `active` | `boolean` | Whether these items should be static or not. |
| `culled`? | `boolean` | Whether these items should be culled or not. If undefined: active=true will set items as culled, while active=false will remove items from both the culled and unculled list. |

#### Returns

`Promise`\<`void`\>

***

### setVisibility()

> **setVisibility**(`visible`, `filter`?): `void`

Sets the visibility of items in fragments based on the provided filter.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | The visibility state to set. |
| `filter`? | `FragmentIdMap` | <p>A map of fragment IDs to arrays of item IDs.</p><p>                 Only items with IDs present in the arrays will be visible.</p><p>                 If not provided, it will take all loaded models as filter.</p> |

#### Returns

`void`
