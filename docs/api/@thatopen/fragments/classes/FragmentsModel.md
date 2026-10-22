# FragmentsModel

The main class for managing a 3D model loaded from a fragments file. Handles geometry, materials, visibility, highlighting, sections, and more. This class orchestrates multiple specialized managers to handle different aspects of the model like mesh management, item data, raycasting, etc. It maintains the overall state and provides the main interface for interacting with the model. The model data is loaded and processed asynchronously across multiple threads.

## Implements

- `IFragmentsModel`\<`true`\>

## Constructors

### new FragmentsModel()

> **new FragmentsModel**(`modelId`, `meshManager`, `threads`, `editor`, `threadGroup`?): [`FragmentsModel`](FragmentsModel.md)

The constructor of the fragments model. Don't use this directly. Use the [FragmentsModels.load](FragmentsModels.md#load) instead.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `modelId` | `string` |
| `meshManager` | `MeshManager` |
| `threads` | `FragmentsConnection` |
| `editor` | [`Editor`](Editor.md) |
| `threadGroup`? | `string` |

#### Returns

[`FragmentsModel`](FragmentsModel.md)

## Properties

### attrsChanges

> `readonly` **attrsChanges**: `Map`\<`number`, [`AttrsChange`](../type-aliases/AttrsChange.md)\>

A map of attribute changes that have occurred in the model.
The key is the local ID of the item, and the value is the change.

***

### graphicsQuality

> **graphicsQuality**: `number` = `0`

The graphics quality of the model. It ranges from 0 (lowest) to 1 (highest).

***

### object

> **object**: `Object3D`\<`Object3DEventMap`\>

The object that represents the model in the Three.js scene.

***

### onViewUpdated

> `readonly` **onViewUpdated**: `Event` \<[`FragmentsModel`](FragmentsModel.md)\>

Event triggered after a view update cycle finishes processing.
Listeners receive this FragmentsModel instance, allowing queries
like [getItemsByVisibility](FragmentsModel.md#getitemsbyvisibility) to retrieve seen/unseen elements.

***

### relsChanges

> `readonly` **relsChanges**: `Map`\<`number`, [`RelsModifyChange`](../interfaces/RelsModifyChange.md)\>

A map of relation changes that have occurred in the model.
The key is the local ID of the item, and the value is the change.

***

### threadGroup

> `readonly` **threadGroup**: `undefined` \| `string`

The thread group this model was loaded into, or `undefined` if it was
loaded into the default pool. Set once at load time, never changes.

***

### threads

> `readonly` **threads**: `FragmentsConnection`

The connection to the threads that handle the model data.

***

### tiles

> `readonly` **tiles**: `DataMap`\<`string` \| `number`, [`BIMMesh`](../type-aliases/BIMMesh.md)\>

A map of tiles that have been loaded for the model.
The key is the tile ID, and the value is the tile.

***

### visibleItems

> `readonly` **visibleItems**: `Set`\<`number`\>

The localIds of the items held by at least one live tile of this
model. Updated automatically as tiles are created and deleted by
the mesh manager; an item held by several tiles stays until the
last of them is deleted. Tiles live while they are loaded, so this
is not a per-frame frustum test: an item hidden with `setVisible`
or out of view stays here until its tiles are deleted.

## Accessors

### box

> `get` **box**(): `Box3`

The bounding box of the whole model.

#### Returns

`Box3`

***

### clippingPlanes

> `get` **clippingPlanes**(): `Plane`[]

The clipping planes the model culls against, in world space. This is the
array passed to [useClippingPlanes](FragmentsModel.md#useclippingplanes) (or the `clippingPlanes` load
option) itself, not a copy.

#### Returns

`Plane`[]

***

### frozen

> `get` **frozen**(): `boolean`

Whether the model should stop updating..

> `set` **frozen**(`value`): `void`

Whether the model should stop updating..

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

***

### getClippingPlanesEvent

> `get` **getClippingPlanesEvent**(): () => `Plane`[]

The event that is triggered when the clipping planes are needed in the thread.
Set this method to pass your Three.js clipping planes to the model.

#### Deprecated

Pass the planes with the `clippingPlanes` option of
[FragmentsModels.load](FragmentsModels.md#load), or call [useClippingPlanes](FragmentsModel.md#useclippingplanes) after
loading. This callback keeps working; whichever of the two was set last
is the one the model uses.

> `set` **getClippingPlanesEvent**(`value`): `void`

The event that is triggered when the clipping planes are needed in the thread.
Set this method to pass your Three.js clipping planes to the model.

#### Deprecated

Pass the planes with the `clippingPlanes` option of
[FragmentsModels.load](FragmentsModels.md#load), or call [useClippingPlanes](FragmentsModel.md#useclippingplanes) after
loading. This callback keeps working; whichever of the two was set last
is the one the model uses.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | () => `Plane`[] |

#### Returns

`Function`

##### Returns

`Plane`[]

***

### isBusy

> `get` **isBusy**(): `boolean`

Whether the model is busy loading data.

#### Returns

`boolean`

***

### modelId

> `get` **modelId**(): `string`

The ID of the model.

#### Returns

`string`

## Methods

### \_edit()

> **\_edit**(`requests`): `Promise`\<`object`\>

Internal method to edit the model. Don't use this directly.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `requests` | [`EditRequest`](../type-aliases/EditRequest.md)[] | The requests to edit the model. |

#### Returns

`Promise`\<`object`\>

##### deltaModelBuffer

> **deltaModelBuffer**: `Uint8Array`

##### ids

> **ids**: `number`[]

***

### \_finishProcessing()

> **\_finishProcessing**(): `void`

Internal method to finish processing. Don't use this directly.

#### Returns

`void`

***

### \_getDeltaModel()

> **\_getDeltaModel**(): `undefined` \| [`FragmentsModel`](FragmentsModel.md)

Internal method to get the delta model holding this model's edits, if
it is loaded. Don't use this directly.

#### Returns

`undefined` \| [`FragmentsModel`](FragmentsModel.md)

***

### \_getItemSnapData()

> **\_getItemSnapData**(`itemId`): `Promise`\<`null` \| [`ElementData`](../type-aliases/ElementData.md)\>

Fast snap-only fetch keyed by **itemId**. See
`EditManager.getItemSnapData`. Internal — picker / SnapResolver
consume this. App code should keep using `_getElements` (localId).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `itemId` | `number` |

#### Returns

`Promise`\<`null` \| [`ElementData`](../type-aliases/ElementData.md)\>

***

### \_getRequests()

> **\_getRequests**(): `Promise`\<`object`\>

Internal method to get the requests of the model. Don't use this directly.

#### Returns

`Promise`\<`object`\>

##### requests

> **requests**: [`EditRequest`](../type-aliases/EditRequest.md)[]

##### undoneRequests

> **undoneRequests**: [`EditRequest`](../type-aliases/EditRequest.md)[]

***

### \_getRequestsSince()

> **\_getRequestsSince**(`from`, `generation`): `Promise` \<[`EditRequestsSince`](../interfaces/EditRequestsSince.md)\>

Internal method to get the requests added since an earlier call. Don't use this directly.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `from` | `number` | The `count` the earlier call returned. |
| `generation` | `number` | The `generation` the earlier call returned. |

#### Returns

`Promise` \<[`EditRequestsSince`](../interfaces/EditRequestsSince.md)\>

***

### \_invoke()

> **\_invoke**(`method`, `args`?): `Promise`\<`any`\>

Internal method to call a method of the model on its worker. Don't use
this directly.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `method` | `string` |
| `args`? | `any`[] |

#### Returns

`Promise`\<`any`\>

***

### \_refreshView()

> **\_refreshView**(`force`): `Promise`\<`void`\>

Internal method to refresh the view of the model. You shouldn't call this directly. Instead, use [FragmentsModels.update](FragmentsModels.md#update).

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

***

### \_reset()

> **\_reset**(): `Promise`\<`void`\>

Internal method to reset the model. Don't use this directly.

#### Returns

`Promise`\<`void`\>

***

### \_save()

> **\_save**(): `Promise`\<`Uint8Array`\>

Internal method to save the model. Don't use this directly.

#### Returns

`Promise`\<`Uint8Array`\>

***

### \_selectRequest()

> **\_selectRequest**(`index`): `Promise`\<`void`\>

Internal method to select a request of the model. Don't use this directly.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the request to select. |

#### Returns

`Promise`\<`void`\>

***

### \_setRequests()

> **\_setRequests**(`data`): `Promise`\<`void`\>

Internal method to set the requests of the model. Don't use this directly.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | The data to set the requests of the model. |
| `data.requests`? | [`EditRequest`](../type-aliases/EditRequest.md)[] | - |
| `data.undoneRequests`? | [`EditRequest`](../type-aliases/EditRequest.md)[] | - |

#### Returns

`Promise`\<`void`\>

***

### \_setup()

> **\_setup**(`data`, `raw`?, `config`?): `Promise`\<`void`\>

Internal method to set up the model. Don't use this directly.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` \| `ArrayBuffer` |
| `raw`? | `boolean` |
| `config`? | [`VirtualModelConfig`](../interfaces/VirtualModelConfig.md) |

#### Returns

`Promise`\<`void`\>

***

### dispose()

> **dispose**(`options`?): `Promise`\<`void`\>

Dispose the model. Use this when you're done with the model.
If you use the [FragmentsModels.dispose](FragmentsModels.md#dispose) method, this will be called automatically for all models.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | `object` | - |
| `options.keepInScene`? | `boolean` | <p>If true, frees the model's worker slot,</p><p>  registry entries and shared MaterialManager slot but leaves the THREE</p><p>  object, tiles, materials in `list`, alignments and grids in place.</p><p>  Caller must finalize the visual cleanup later via</p><p>  [finalizeDispose](FragmentsModel.md#finalizedispose). Used by `editor.save()` to swap in a freshly</p><p>  loaded model without a blank frame.</p> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

`IFragmentsModel.dispose`

***

### finalizeDispose()

> **finalizeDispose**(): `void`

Finalize a deferred dispose. Removes the THREE object from its parent,
tears down tile meshes (geometry only — materials are shared via the
MaterialManager and may be reused by a replacement model under the
same modelId), and disposes the model's alignments and grids.

Only call this after `dispose({ keepInScene: true })`. The tile map
is cleared with events disabled to bypass the onBeforeDelete listener
registered in the constructor (which would otherwise dispose tile
materials).

#### Returns

`void`

***

### getAlignmentStyles()

> **getAlignmentStyles**(): `Promise`\<`object`\>

Get the civil alignment styles of the model (if any).

#### Returns

`Promise`\<`object`\>

##### exterior

> **exterior**: `PointsMaterial`

##### interior

> **interior**: `PointsMaterial`

***

### getAlignments()

> **getAlignments**(): `Promise`\<`Group`\<`Object3DEventMap`\>\>

Get the absolute alignments of the model (if any).

#### Returns

`Promise`\<`Group`\<`Object3DEventMap`\>\>

***

### getAttributeNames()

> **getAttributeNames**(): `Promise`\<`string`[]\>

Retrieves the names of all attributes associated with the model.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of strings, where each string is the name of an attribute.

***

### getAttributeTypes()

> **getAttributeTypes**(): `Promise`\<`string`[]\>

Retrieves the attribute types associated with the model.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of attribute types.

***

### getAttributeValues()

> **getAttributeValues**(): `Promise`\<`any`[]\>

Retrieves the attribute values associated with the model.

#### Returns

`Promise`\<`any`[]\>

A promise that resolves to an array of attribute values.

***

### getBoxes()

> **getBoxes**(`localIds`?): `Promise`\<`Box3`[]\>

Get the individual bounding boxes of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `number`[] | The local IDs of the items to look up. |

#### Returns

`Promise`\<`Box3`[]\>

***

### getBuffer()

> **getBuffer**(`raw`): `Promise`\<`ArrayBuffer`\>

Get the buffer of the model.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `raw` | `boolean` | `false` | Whether to get the raw buffer. If false, it will be compressed. |

#### Returns

`Promise`\<`ArrayBuffer`\>

#### Implementation of

`IFragmentsModel.getBuffer`

***

### getCRS()

> **getCRS**(): `Promise`\<`null` \| [`CRSData`](../interfaces/CRSData.md)\>

Get the Coordinate Reference System (CRS) data of the model, if available.
Returns null if the source IFC file did not contain IFCPROJECTEDCRS
or IFCCOORDINATEREFERENCESYSTEM entities.

#### Returns

`Promise`\<`null` \| [`CRSData`](../interfaces/CRSData.md)\>

#### Implementation of

`IFragmentsModel.getCRS`

***

### getCategories()

> **getCategories**(): `Promise`\<`string`[]\>

Get all the categories of the model.

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

`IFragmentsModel.getCategories`

***

### getCoordinates()

> **getCoordinates**(): `Promise`\<`number`[]\>

Gets coordinates of the model.

#### Returns

`Promise`\<`number`[]\>

#### Implementation of

`IFragmentsModel.getCoordinates`

***

### getCoordinationMatrix()

> **getCoordinationMatrix**(): `Promise`\<`Matrix4`\>

Retrieves the coordination matrix for the current model.

This method utilizes the `_coordinatesManager` to compute and return a
`THREE.Matrix4` object based on the original model coordinates.

#### Returns

`Promise`\<`Matrix4`\>

***

### getEditedElements()

> **getEditedElements**(): `Promise`\<`number`[]\>

Gets the edited elements of the model.

#### Returns

`Promise`\<`number`[]\>

***

### getGlobalTranformsIdsOfItems()

> **getGlobalTranformsIdsOfItems**(`ids`): `Promise`\<`number`[]\>

Gets the global transforms IDs of the items of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ids` | `number`[] | The local IDs of the items to get the global transforms IDs of. |

#### Returns

`Promise`\<`number`[]\>

#### Implementation of

`IFragmentsModel.getGlobalTranformsIdsOfItems`

***

### getGlobalTransforms()

> **getGlobalTransforms**(`localIds`?): `Promise`\<`Map`\<`number`, [`RawGlobalTransformData`](../type-aliases/RawGlobalTransformData.md)\>\>

Gets the global transforms of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the global transforms to get. If undefined, it will return all global transforms. |

#### Returns

`Promise`\<`Map`\<`number`, [`RawGlobalTransformData`](../type-aliases/RawGlobalTransformData.md)\>\>

#### Implementation of

`IFragmentsModel.getGlobalTransforms`

***

### getGlobalTransformsIds()

> **getGlobalTransformsIds**(): `Promise`\<`number`[]\>

Gets all the global transforms IDs of the model.

#### Returns

`Promise`\<`number`[]\>

#### Implementation of

`IFragmentsModel.getGlobalTransformsIds`

***

### getGridLabelMaterial()

> **getGridLabelMaterial**(): `Material`

The shared material used to render every grid axis label.
Mutating its properties (color, opacity, dash sizes, etc.) updates all
rendered grid labels immediately. Use `setGridLabelMaterial` to swap to a
different material instance.

#### Returns

`Material`

***

### getGridMaterial()

> **getGridMaterial**(): `LineBasicMaterial`

The shared material used to render every grid axis line.
Mutating its properties (color, opacity, dash sizes, etc.) updates all
rendered grid lines immediately. Use `setGridMaterial` to swap to a
different material instance.

#### Returns

`LineBasicMaterial`

***

### getGrids()

> **getGrids**(`config`?): `Promise`\<`Group`\<`Object3DEventMap`\>\>

Get the grids of the model (if any).

Returns a `THREE.Group` with one child per grid (each child is a `THREE.Group`
that carries `userData.id = localId` and `userData.kind = "grid"`).

Each grid's children are `THREE.Group` instances with `userData.kind = "axis"`,
acting as an axis container.
A `THREE.LINE` instance with `userData.kind = "line"` is appended to it.

When opting in to showing labels, two `THREE.SHAPE` instances with
`userData.kind = "label"` and `userData.index` (the label's index, `0` or `1`)
are appended to the axis container.

All grid's descendants (`"axis"`, `"line"`, `"label"`) carry `userData.tag` (the axis label value)
and `userData.axis` (`"uAxes"`, `"vAxes"`, or `"wAxes"`).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `config`? | `GridsConfig` |

#### Returns

`Promise`\<`Group`\<`Object3DEventMap`\>\>

***

### getGuidsByLocalIds()

> **getGuidsByLocalIds**(`localIds`): `Promise`\<(`null` \| `string`)[]\>

Get the GUIDs corresponding to the specified local IDs.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `number`[] | Array of local IDs to look up. |

#### Returns

`Promise`\<(`null` \| `string`)[]\>

#### Implementation of

`IFragmentsModel.getGuidsByLocalIds`

***

### getHighlight()

> **getHighlight**(`localIds`?): `Promise` \<[`MaterialDefinition`](../type-aliases/MaterialDefinition.md)[]\>

Gets the highlight of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `number`[] | The local IDs of the items to get the highlight of. If undefined, it will return the highlight of all items. |

#### Returns

`Promise` \<[`MaterialDefinition`](../type-aliases/MaterialDefinition.md)[]\>

***

### getHighlightItemIds()

> **getHighlightItemIds**(): `Promise`\<`number`[]\>

Gets the item IDs of the items that are highlighted.

#### Returns

`Promise`\<`number`[]\>

***

### getHorizontalAlignments()

> **getHorizontalAlignments**(): `Promise`\<`Group`\<`Object3DEventMap`\>\>

Get the horizontal alignments of the model (if any).

#### Returns

`Promise`\<`Group`\<`Object3DEventMap`\>\>

***

### getIndexEntry()

> **getIndexEntry**\<`K`, `V`\>(`name`, `key`): `Promise`\<`null` \| `V`\>

Forward lookup of a single entry in the named index. The return shape
depends on the index mode (see [IndexEntry](../type-aliases/IndexEntry.md)).

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` |
| `V` *extends* [`IndexEntry`](../type-aliases/IndexEntry.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `key` | `K` |

#### Returns

`Promise`\<`null` \| `V`\>

#### Implementation of

`IFragmentsModel.getIndexEntry`

***

### getIndexInfo()

> **getIndexInfo**(`name`): `Promise`\<`null` \| [`IndexInfo`](../interfaces/IndexInfo.md)\>

Describe the shape of a named index without performing any lookups.
Returns `null` if no index with that name exists.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`\<`null` \| [`IndexInfo`](../interfaces/IndexInfo.md)\>

#### Implementation of

`IFragmentsModel.getIndexInfo`

***

### getIndexKey()

> **getIndexKey**\<`K`\>(`name`, `index`): `Promise`\<`null` \| `K`\>

Get key at given index.
Useful for keys-only indexes but valid for any mode.

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `index` | `number` |

#### Returns

`Promise`\<`null` \| `K`\>

#### Implementation of

`IFragmentsModel.getIndexKey`

***

### getIndexKeys()

> **getIndexKeys**\<`K`\>(`name`): `Promise`\<`null` \| `IndexArrayType`\<`K`\>\>

Get the keys of an index. Useful for keys-only indexes (membership tests,
iteration) but valid for any mode. Number keys come back as a
`Uint32Array`, string keys as `string[]`.

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`\<`null` \| `IndexArrayType`\<`K`\>\>

#### Implementation of

`IFragmentsModel.getIndexKeys`

***

### getIndexNames()

> **getIndexNames**(): `Promise`\<`string`[]\>

Get the names of every user-defined index stored on this model. See the
`ModelIndex` schema for the supported shapes.

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

`IFragmentsModel.getIndexNames`

***

### getIndexValues()

> **getIndexValues**\<`V`\>(`name`): `Promise`\<`null` \| `V`[]\>

Get the values of an index. Useful for inverse lookups.

#### Type parameters

| Type parameter |
| :------ |
| `V` *extends* `string` \| `number` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`\<`null` \| `V`[]\>

#### Implementation of

`IFragmentsModel.getIndexValues`

***

### getInverseIndexEntry()

> **getInverseIndexEntry**\<`K`, `V`\>(`name`, `value`): `Promise`\<`null` \| `IndexArrayType`\<`V`\>\>

Inverse lookup. For an index with forward direction `key -> value`,
returns every key that maps to `value`. The inverse map is built lazily
on first call and cached for the model's lifetime.

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` |
| `V` *extends* `string` \| `number` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `K` |

#### Returns

`Promise`\<`null` \| `IndexArrayType`\<`V`\>\>

#### Implementation of

`IFragmentsModel.getInverseIndexEntry`

***

### getItem()

> **getItem**(`id`): `Item`

Get an item by its ID.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | [`Identifier`](../type-aliases/Identifier.md) | The ID of the item to look up. |

#### Returns

`Item`

***

### getItemDrawChunks()

> **getItemDrawChunks**(`localIds`): `Promise`\<`object`[]\>

Returns per-tile index-buffer chunks for the given items. Each entry
carries a tile id and parallel `position` / `size` Uint32Arrays giving
the start index and index count of every contiguous run of vertices
belonging to one of `localIds` in that tile's index buffer.

Lets a renderer clone a tile mesh sharing its `geometry.attributes`
and `index`, then call `geometry.addGroup(position[i], size[i], 0)`
for each chunk to draw only the matching slices. No highlight
material slot is allocated; the call is read-only.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `localIds` | `Iterable`\<`number`\> |

#### Returns

`Promise`\<`object`[]\>

#### Implementation of

`IFragmentsModel.getItemDrawChunks`

***

### getItems()

> **getItems**(`localIds`?): `Promise`\<`Map`\<`number`, [`RawItemData`](../type-aliases/RawItemData.md)\>\>

Gets the items of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the items to get. If undefined, it will return all items. |

#### Returns

`Promise`\<`Map`\<`number`, [`RawItemData`](../type-aliases/RawItemData.md)\>\>

#### Implementation of

`IFragmentsModel.getItems`

***

### getItemsByQuery()

> **getItemsByQuery**(`params`, `config`?): `Promise`\<`number`[]\>

Retrieves items based on the specified query parameters.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | `ItemsQueryParams` | The query parameters used to filter and retrieve items. |
| `config`? | `ItemsQueryConfig` | Optional query configuration. |

#### Returns

`Promise`\<`number`[]\>

A promise that resolves to the items matching the query.

#### Implementation of

`IFragmentsModel.getItemsByQuery`

***

### getItemsByVisibility()

> **getItemsByVisibility**(`visible`): `Promise`\<`number`[]\>

Gets the items by visibility.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | Whether the items should be visible. |

#### Returns

`Promise`\<`number`[]\>

***

### getItemsChildren()

> **getItemsChildren**(`ids`): `Promise`\<`number`[]\>

Get the spatial structure children of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ids` | [`Identifier`](../type-aliases/Identifier.md)[] | The IDs of the items to look up. |

#### Returns

`Promise`\<`number`[]\>

#### Implementation of

`IFragmentsModel.getItemsChildren`

***

### getItemsData()

> **getItemsData**(`ids`, `config`?): `Promise` \<[`ItemData`](../interfaces/ItemData.md)[]\>

Get all the data of the specified items.

By default, the API returns the item’s built-in attributes only.
Relations are not traversed unless explicitly enabled via the `config`
parameter.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ids` | [`Identifier`](../type-aliases/Identifier.md)[] | The IDs of the items to look up. |
| `config`? | `Partial` \<[`ItemsDataConfig`](../interfaces/ItemsDataConfig.md)\> | The configuration of the items data. By default, all built-in attributes are returned and no relations are loaded. |

#### Returns

`Promise` \<[`ItemData`](../interfaces/ItemData.md)[]\>

#### Implementation of

`IFragmentsModel.getItemsData`

#### Examples

```ts
// Retrieve all built-in attributes and all related entities (full graph)
await getItemsData(ids, {
  attributesDefault: true,
  relationsDefault: { attributes: true, relations: true },
});
```

```ts
// Retrieve built-in attributes and Property Sets only (via IsDefinedBy)
await getItemsData(ids, {
  attributesDefault: true,
  relations: {
    IsDefinedBy: { attributes: true, relations: true },
    DefinesOccurrence: { attributes: false, relations: false },
  },
});
```

***

### getItemsGeometry()

> **getItemsGeometry**(`localIds`, `lod`): `Promise` \<[`MeshData`](../type-aliases/MeshData.md)[][]\>

Retrieves the geometry data for the specified local IDs.

The returned data is structured as an array of arrays of `MeshData`,
which contains the necessary information to reconstruct a `THREE.BufferGeometry`.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `localIds` | `number`[] | `undefined` | An array of local IDs for which the geometry data is requested. |
| `lod` | [`CurrentLod`](../enumerations/CurrentLod.md) | `CurrentLod.GEOMETRY` | The level of detail for the geometry (optional). |

#### Returns

`Promise` \<[`MeshData`](../type-aliases/MeshData.md)[][]\>

#### Implementation of

`IFragmentsModel.getItemsGeometry`

***

### getItemsIds()

> **getItemsIds**(): `Promise`\<`number`[]\>

Gets all the items IDs of the model.

#### Returns

`Promise`\<`number`[]\>

#### Implementation of

`IFragmentsModel.getItemsIds`

***

### getItemsIdsWithGeometry()

> **getItemsIdsWithGeometry**(): `Promise`\<`number`[]\>

Get all the items ids of the model that have geometry.

#### Returns

`Promise`\<`number`[]\>

#### Implementation of

`IFragmentsModel.getItemsIdsWithGeometry`

***

### getItemsOfCategories()

> **getItemsOfCategories**(`categories`): `Promise`\<`object`\>

Get all the items of the model that belong to the specified category.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `categories` | `RegExp`[] |

#### Returns

`Promise`\<`object`\>

#### Implementation of

`IFragmentsModel.getItemsOfCategories`

***

### getItemsVolume()

> **getItemsVolume**(`localIds`): `Promise`\<`number`\>

Retrieves the total volume of items based on their local IDs.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `number`[] | An array of local IDs representing the items. |

#### Returns

`Promise`\<`number`\>

A promise that resolves to the total volume of the specified items.

#### Implementation of

`IFragmentsModel.getItemsVolume`

***

### getItemsWithGeometry()

> **getItemsWithGeometry**(): `Promise`\<`Item`[]\>

Get all the items of the model that have geometry.

#### Returns

`Promise`\<`Item`[]\>

***

### getLocalIds()

> **getLocalIds**(): `Promise`\<`number`[]\>

Get all the local IDs of the model.

#### Returns

`Promise`\<`number`[]\>

#### Implementation of

`IFragmentsModel.getLocalIds`

***

### getLocalIdsByGuids()

> **getLocalIdsByGuids**(`guids`): `Promise`\<(`null` \| `number`)[]\>

Get the local IDs corresponding to the specified GUIDs.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `guids` | `string`[] | Array of GUIDs to look up. |

#### Returns

`Promise`\<(`null` \| `number`)[]\>

#### Implementation of

`IFragmentsModel.getLocalIdsByGuids`

***

### getLocalIdsFromItemIds()

> **getLocalIdsFromItemIds**(`itemIds`): `Promise`\<`number`[]\>

Translate internal `itemId`s into user-facing `localId`s, preserving
order. Used by GPU-readback pickers that recover item ids from the
per-vertex `id` attribute and need to map back to the public id
space.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `itemIds` | `Iterable`\<`number`\> |

#### Returns

`Promise`\<`number`[]\>

#### Implementation of

`IFragmentsModel.getLocalIdsFromItemIds`

***

### getLocalTransforms()

> **getLocalTransforms**(`localIds`?): `Promise`\<`Map`\<`number`, [`RawTransformData`](../type-aliases/RawTransformData.md)\>\>

Gets the local transforms of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the local transforms to get. If undefined, it will return all local transforms. |

#### Returns

`Promise`\<`Map`\<`number`, [`RawTransformData`](../type-aliases/RawTransformData.md)\>\>

#### Implementation of

`IFragmentsModel.getLocalTransforms`

***

### getLocalTransformsIds()

> **getLocalTransformsIds**(): `Promise`\<`number`[]\>

Gets all the local transforms IDs of the model.

#### Returns

`Promise`\<`number`[]\>

#### Implementation of

`IFragmentsModel.getLocalTransformsIds`

***

### getMaterials()

> **getMaterials**(`localIds`?): `Promise`\<`Map`\<`number`, [`RawMaterial`](../type-aliases/RawMaterial.md)\>\>

Gets the materials of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the materials to get. If undefined, it will return all materials. |

#### Returns

`Promise`\<`Map`\<`number`, [`RawMaterial`](../type-aliases/RawMaterial.md)\>\>

#### Implementation of

`IFragmentsModel.getMaterials`

***

### getMaterialsIds()

> **getMaterialsIds**(): `Promise`\<`number`[]\>

Gets all the materials IDs of the model.

#### Returns

`Promise`\<`number`[]\>

#### Implementation of

`IFragmentsModel.getMaterialsIds`

***

### getMaxLocalId()

> **getMaxLocalId**(): `Promise`\<`number`\>

Get the maximum local ID of the model.

#### Returns

`Promise`\<`number`\>

#### Implementation of

`IFragmentsModel.getMaxLocalId`

***

### getMergedBox()

> **getMergedBox**(`localIds`): `Promise`\<`Box3`\>

Get the merged bounding box of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `number`[] | The local IDs of the items to look up. |

#### Returns

`Promise`\<`Box3`\>

***

### getMetadata()

> **getMetadata**\<`T`\>(): `Promise`\<`T`\>

Get the metadata of the model.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |

#### Returns

`Promise`\<`T`\>

#### Implementation of

`IFragmentsModel.getMetadata`

***

### getPositions()

> **getPositions**(`localIds`?): `Promise`\<`Vector3`[]\>

Get the absolute positions of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `number`[] | The local IDs of the items to look up. |

#### Returns

`Promise`\<`Vector3`[]\>

#### Implementation of

`IFragmentsModel.getPositions`

***

### getRelationNames()

> **getRelationNames**(): `Promise`\<`string`[]\>

Retrieves the names of all relations associated with this model.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of strings, where each string is the name of a relation.

***

### getRelations()

> **getRelations**(`localIds`?): `Promise`\<`Map`\<`number`, [`RawRelationData`](../type-aliases/RawRelationData.md)\>\>

Gets the relations of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `number`[] | The local IDs of the relations to get. If undefined, it will return all relations. |

#### Returns

`Promise`\<`Map`\<`number`, [`RawRelationData`](../type-aliases/RawRelationData.md)\>\>

#### Implementation of

`IFragmentsModel.getRelations`

***

### getRepresentations()

> **getRepresentations**(`localIds`?): `Promise`\<`Map`\<`number`, [`RawRepresentation`](../type-aliases/RawRepresentation.md)\>\>

Gets the representations of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the representations to get. If undefined, it will return all representations. |

#### Returns

`Promise`\<`Map`\<`number`, [`RawRepresentation`](../type-aliases/RawRepresentation.md)\>\>

#### Implementation of

`IFragmentsModel.getRepresentations`

***

### getRepresentationsIds()

> **getRepresentationsIds**(): `Promise`\<`number`[]\>

Gets all the representations IDs of the model.

#### Returns

`Promise`\<`number`[]\>

#### Implementation of

`IFragmentsModel.getRepresentationsIds`

***

### getSamples()

> **getSamples**(`localIds`?): `Promise`\<`Map`\<`number`, [`RawSample`](../type-aliases/RawSample.md)\>\>

Gets the samples of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `Iterable`\<`number`\> | The local IDs of the samples to get. If undefined, it will return all samples. |

#### Returns

`Promise`\<`Map`\<`number`, [`RawSample`](../type-aliases/RawSample.md)\>\>

#### Implementation of

`IFragmentsModel.getSamples`

***

### getSamplesIds()

> **getSamplesIds**(): `Promise`\<`number`[]\>

Gets all the samples IDs of the model.

#### Returns

`Promise`\<`number`[]\>

#### Implementation of

`IFragmentsModel.getSamplesIds`

***

### getSection()

> **getSection**(`plane`, `localIds`?): `Promise`\<`ModelSection`\>

Gets the section (edges and fills) between the model and a given clipping plane.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `plane` | `Plane` | The plane to get the section of. |
| `localIds`? | `number`[] | The local IDs of the items to get the section of. If undefined, it will return the section of all items. |

#### Returns

`Promise`\<`ModelSection`\>

#### Implementation of

`IFragmentsModel.getSection`

***

### getSequenced()

`Experimental`

> **getSequenced**\<`T`, `U`\>(`result`, `fromItems`, `inputs`?): `Promise` \<[`InformationResultType`](../type-aliases/InformationResultType.md)\<`T`\>\>

Processes a sequence of actions in the worker and computes the result based on the provided input.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`ItemInformationType`](../type-aliases/ItemInformationType.md) |
| `U` *extends* [`ItemSelectionType`](../type-aliases/ItemSelectionType.md) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `result` | `T` | The type of item information to compute, used to select the appropriate result function. |
| `fromItems` | `U`[] | An array of selection types, each corresponding to an items selector function. |
| `inputs`? | `object` | - |
| `inputs.result`? | [`ResultInputType`](../type-aliases/ResultInputType.md)\<`T`\> | - |
| `inputs.selector`? | `Partial`\<`Record`\<`U`, [`SelectionInputType`](../type-aliases/SelectionInputType.md)\<`U`\>\>\> | - |

#### Returns

`Promise` \<[`InformationResultType`](../type-aliases/InformationResultType.md)\<`T`\>\>

The computed result after processing the sequence of actions, or `null` if the result function is not found.

***

### getSpatialStructure()

> **getSpatialStructure**(): `Promise` \<[`SpatialTreeItem`](../interfaces/SpatialTreeItem.md)\>

Get the spatial structure of the model.

#### Returns

`Promise` \<[`SpatialTreeItem`](../interfaces/SpatialTreeItem.md)\>

#### Implementation of

`IFragmentsModel.getSpatialStructure`

***

### getSubsetBuffer()

> **getSubsetBuffer**(`localIds`, `raw`): `Promise`\<`any`\>

Get a buffer containing only the specified items and their associated geometry.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `localIds` | `number`[] | `undefined` | The local IDs of the items to include. |
| `raw` | `boolean` | `false` | Whether to get the raw buffer. If false, it will be compressed. |

#### Returns

`Promise`\<`any`\>

#### Implementation of

`IFragmentsModel.getSubsetBuffer`

***

### getVerticalAlignments()

> **getVerticalAlignments**(): `Promise`\<`Group`\<`Object3DEventMap`\>\>

Get the vertical alignments of the model (if any).

#### Returns

`Promise`\<`Group`\<`Object3DEventMap`\>\>

***

### getVisible()

> **getVisible**(`localIds`): `Promise`\<`boolean`[]\>

Gets the items by visibility.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `number`[] | The local IDs of the items to get the visibility of. |

#### Returns

`Promise`\<`boolean`[]\>

***

### hasIndexEntry()

> **hasIndexEntry**\<`K`\>(`name`, `key`): `Promise`\<`boolean`\>

Test whether a key exists in the named index without resolving its value.

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `key` | `K` |

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

`IFragmentsModel.hasIndexEntry`

***

### highlight()

> **highlight**(`localIds`, `highlightMaterial`): `Promise`\<`void`\>

Highlights the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `undefined` \| `number`[] | The local IDs of the items to highlight. If undefined, all items will be highlighted. |
| `highlightMaterial` | [`MaterialDefinition`](../type-aliases/MaterialDefinition.md) | The material to use for the highlight. |

#### Returns

`Promise`\<`void`\>

***

### raycast()

> **raycast**(`data`): `Promise`\<`null` \| [`RaycastResult`](../interfaces/RaycastResult.md)\>

Performs a raycast on the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`RaycastData`](../interfaces/RaycastData.md) | The data of the raycast. |

#### Returns

`Promise`\<`null` \| [`RaycastResult`](../interfaces/RaycastResult.md)\>

***

### raycastAll()

> **raycastAll**(`data`): `Promise`\<`null` \| [`RaycastResult`](../interfaces/RaycastResult.md)[]\>

Performs a raycast on the model and returns all the results.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`RaycastData`](../interfaces/RaycastData.md) | The data of the raycast. |

#### Returns

`Promise`\<`null` \| [`RaycastResult`](../interfaces/RaycastResult.md)[]\>

***

### raycastWithSnapping()

> **raycastWithSnapping**(`data`): `Promise`\<`null` \| [`RaycastResult`](../interfaces/RaycastResult.md)[]\>

Performs a raycast on the model with snapping.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `SnappingRaycastData` | The data of the raycast. |

#### Returns

`Promise`\<`null` \| [`RaycastResult`](../interfaces/RaycastResult.md)[]\>

***

### rectangleRaycast()

> **rectangleRaycast**(`data`): `Promise`\<`null` \| [`RectangleRaycastResult`](../interfaces/RectangleRaycastResult.md)\>

Performs a rectangle raycast on the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`RectangleRaycastData`](../interfaces/RectangleRaycastData.md) | The data of the rectangle raycast. |

#### Returns

`Promise`\<`null` \| [`RectangleRaycastResult`](../interfaces/RectangleRaycastResult.md)\>

***

### resetColor()

> **resetColor**(`localIds`): `Promise`\<`void`\>

Resets the color of the specified items to their original color while preserving other highlight properties (like opacity).

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `undefined` \| `number`[] | The local IDs of the items to reset color for. If undefined, all items will be affected. |

#### Returns

`Promise`\<`void`\>

***

### resetHighlight()

> **resetHighlight**(`localIds`?): `Promise`\<`void`\>

Resets the highlight of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `number`[] | The local IDs of the items to reset the highlight of. If undefined, it will reset the highlight of all items. |

#### Returns

`Promise`\<`void`\>

***

### resetOpacity()

> **resetOpacity**(`localIds`): `Promise`\<`void`\>

Resets the opacity of the specified items to their original opacity while preserving other highlight properties (like color).

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `undefined` \| `number`[] | The local IDs of the items to reset opacity for. If undefined, all items will be affected. |

#### Returns

`Promise`\<`void`\>

***

### resetVisible()

> **resetVisible**(): `Promise`\<`void`\>

Resets the visibility of all items.

#### Returns

`Promise`\<`void`\>

***

### setColor()

> **setColor**(`localIds`, `color`): `Promise`\<`void`\>

Applies a color to the specified items while preserving original material properties.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `undefined` \| `number`[] | The local IDs of the items to color. If undefined, all items will be colored. |
| `color` | `Color` | The color to apply. |

#### Returns

`Promise`\<`void`\>

***

### setGridLabelMaterial()

> **setGridLabelMaterial**(`material`): `void`

Replace the shared grid label material. The previous material is disposed
after the swap.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `material` | `Material` |

#### Returns

`void`

***

### setGridMaterial()

> **setGridMaterial**(`material`): `void`

Replace the shared grid material. The previous material is disposed
after the swap.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `material` | `LineBasicMaterial` |

#### Returns

`void`

***

### setLodMode()

> **setLodMode**(`lodMode`): `Promise`\<`void`\>

Sets the LOD / culling mode of the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `lodMode` | [`LodMode`](../enumerations/LodMode.md) | The LOD / culling mode to set. |

#### Returns

`Promise`\<`void`\>

***

### setOpacity()

> **setOpacity**(`localIds`, `opacity`): `Promise`\<`void`\>

Applies an opacity to the specified items while preserving original material properties (like color).

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `undefined` \| `number`[] | The local IDs of the items to change opacity for. If undefined, all items will be affected. |
| `opacity` | `number` | The opacity to apply (0 to 1). |

#### Returns

`Promise`\<`void`\>

***

### setVisible()

> **setVisible**(`localIds`, `visible`): `Promise`\<`void`\>

Sets the visibility of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds` | `undefined` \| `number`[] | The local IDs of the items to set the visibility of. |
| `visible` | `boolean` | Whether the items should be visible. |

#### Returns

`Promise`\<`void`\>

***

### toggleVisible()

> **toggleVisible**(`localIds`?): `Promise`\<`void`\>

Toggles the visibility of the specified items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `localIds`? | `number`[] | The local IDs of the items to toggle the visibility of. |

#### Returns

`Promise`\<`void`\>

***

### useCamera()

> **useCamera**(`camera`): `void`

Sets a camera for the model. The model will use it to load tiles dinamically depending on the users view
(e.g. hiding items that are not in the view, setting the LOD to far away items, etc).

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `camera` | `PerspectiveCamera` \| `OrthographicCamera` | The camera to use. |

#### Returns

`void`

***

### useClippingPlanes()

> **useClippingPlanes**(`planes`): `void`

Sets the clipping planes the model culls against, in world space. Pass
the same array your renderer clips with (e.g. `renderer.clippingPlanes`):
the model keeps the reference and reads it on every view refresh, so
adding, removing or moving planes in place is picked up without calling
this again. Assigning a new array to `renderer.clippingPlanes` is not:
call this again with the new array.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `planes` | `Plane`[] | The clipping planes to use. |

#### Returns

`void`
