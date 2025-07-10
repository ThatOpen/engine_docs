# Viewpoint

Represents a BCF compliant viewpoint from BuildingSMART. The Viewpoint class provides methods for managing and interacting with viewpoints. It includes functionality for setting viewpoint properties, updating the camera, applying color to components, and serializing the viewpoint for export.

## Properties

### clippingPlanes

> `readonly` **clippingPlanes**: `DataSet`\<`string`\>

ClippingPlanes can be used to define a subsection of a building model that is related to the topic.
Each clipping plane is defined by Location and Direction.
The Direction vector points in the invisible direction meaning the half-space that is clipped.

***

### componentColors

> `readonly` **componentColors**: `DataMap`\<`string`, `string`[]\>

A map of colors and components GUIDs that should be colorized when displaying a viewpoint.
For this to work, call viewpoint.colorize()

***

### defaultVisibility

> **defaultVisibility**: `boolean` = `true`

When true, all components should be visible unless listed in the exceptions
When false all components should be invisible unless listed in the exceptions

***

### exceptionComponents

> `readonly` **exceptionComponents**: `DataSet`\<`string`\>

A list of components GUIDs to hide when defaultVisibility = true or to show when defaultVisibility = false

***

### openingsVisible

> **openingsVisible**: `boolean` = `false`

Boolean flags to allow fine control over the visibility of openings.
A typical use of these flags is when DefaultVisibility=true but openings should remain hidden.

#### Default

```ts
false
```

***

### selectionComponents

> `readonly` **selectionComponents**: `DataSet`\<`string`\>

A list of components GUIDs that should be selected (highlighted) when displaying a viewpoint.

***

### snapshot

> **snapshot**: `string`

The snapshotID that will be used for this viewpoint when exported.

***

### spaceBoundariesVisible

> **spaceBoundariesVisible**: `boolean` = `false`

Boolean flags to allow fine control over the visibility of space boundaries.
A typical use of these flags is when DefaultVisibility=true but space boundaries should remain hidden.

#### Default

```ts
false
```

***

### spacesVisible

> **spacesVisible**: `boolean` = `false`

Boolean flags to allow fine control over the visibility of spaces.
A typical use of these flags is when DefaultVisibility=true but spaces should remain hidden.

#### Default

```ts
false
```

## Accessors

### direction

> `get` **direction**(): `Vector3`

Retrieves the direction vector of the viewpoint's camera.

#### Returns

`Vector3`

A THREE.Vector3 representing the direction of the viewpoint's camera.

***

### position

> `get` **position**(): `Vector3`

Retrieves the position vector of the viewpoint's camera.

> `set` **position**(`value`): `void`

Sets the position of the viewpoint's camera.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `Vector3` | The new position for the viewpoint's camera. |

#### Returns

`Vector3`

A THREE.Vector3 representing the position of the viewpoint's camera.

***

### projection

> `get` **projection**(): [`CameraProjection`](../type-aliases/CameraProjection.md)

Retrieves the projection type of the viewpoint's camera.

#### Returns

[`CameraProjection`](../type-aliases/CameraProjection.md)

A string representing the projection type of the viewpoint's camera.
         It can be either 'Perspective' or 'Orthographic'.

***

### topics

> `get` **topics**(): `Topic`[]

Retrieves the list of BCF topics associated with the current viewpoint.

#### Remarks

This function retrieves the BCFTopics manager from the components,
then filters the list of topics to find those associated with the current viewpoint.

#### Returns

`Topic`[]

An array of BCF topics associated with the current viewpoint.

***

### world

> `set` **world**(`value`): `void`

Represents the world in which the viewpoint will take effect.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `null` \| [`World`](../interfaces/World.md) |

## Methods

### applyVisibility()

> **applyVisibility**(): `Promise`\<`void`\>

Applies visibility settings to components based on default visibility, exceptions, and selections.

This method adjusts the visibility of components using the `Hider` instance. It ensures that:
- The default visibility is applied to all components.
- Exceptions are handled to override the default visibility.
- Selected components are always visible.

#### Returns

`Promise`\<`void`\>

***

### go()

> **go**(`_config`?): `Promise`\<`void`\>

Sets the viewpoint of the camera in the world.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_config`? | `object` |
| `_config.applyClippings`? | `boolean` |
| `_config.applyVisibility`? | `boolean` |
| `_config.clippingsVisibility`? | `boolean` |
| `_config.transition`? | `boolean` |

#### Returns

`Promise`\<`void`\>

A Promise that resolves when the camera has been set.

#### Remarks

This function calculates the target position based on the viewpoint information.
It sets the visibility of the viewpoint components and then applies the viewpoint using the camera's controls.

#### Throws

An error if the world's camera does not have camera controls.

***

### serialize()

> **serialize**(`version`): `Promise`\<`string`\>

Serializes the viewpoint into a buildingSMART compliant XML string for export.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `version` | `string` | <p>The version of the BCF Manager to use for serialization.</p><p>                  If not provided, the current version of the manager will be used.</p> |

#### Returns

`Promise`\<`string`\>

A Promise that resolves to an XML string representing the viewpoint.
         The XML string follows the BCF VisualizationInfo schema.

#### Throws

An error if the world's camera does not have camera controls.

#### Throws

An error if the world's renderer is not available.

***

### set()

> **set**(`data`): `void`

Fully replace the properties of the viewpoint with the provided data.
The properties not included will remain unchanged.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Partial` \<[`BCFViewpoint`](../interfaces/BCFViewpoint.md)\> | An object containing the properties to be set. |

#### Returns

`void`

#### Remarks

The guid will be ommited as it shouldn't change after it has been initially set.

***

### setClippingState()

> **setClippingState**(`state`): `void`

Sets the enabled state of all clipping planes associated with this viewpoint.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `state` | `boolean` | A boolean indicating whether the clipping planes should be enabled or disabled. |

#### Returns

`void`

***

### setClippingVisibility()

> **setClippingVisibility**(`visibility`): `void`

Sets the visibility of all clipping planes associated with this viewpoint.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `visibility` | `boolean` | A boolean indicating whether the clipping planes should be visible (`true`) or hidden (`false`). |

#### Returns

`void`

***

### setColorizationState()

> **setColorizationState**(`state`): `Promise`\<`void`\>

Asynchronously sets the colorization state for the viewpoint's components.
When the state is true, it applies the defined component colors to the corresponding fragments.
When the state is false, it resets the highlight for the corresponding fragments.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `state` | `boolean` | <p>A boolean indicating whether to apply or reset the colorization.</p><p>               If true, the components will be colorized. If false, the colorization will be reset.</p> |

#### Returns

`Promise`\<`void`\>

A Promise that resolves when all colorization or reset operations are complete.

#### Remarks

Be careful when using this method along with the Highlighter as it can cause unwanted results

***

### takeSnapshot()

> **takeSnapshot**(): `Promise`\<`boolean`\>

Captures a snapshot of the current viewpoint and stores it in the snapshots manager.

#### Returns

`Promise`\<`boolean`\>

***

### toJSON()

> **toJSON**(): [`BCFViewpoint`](../interfaces/BCFViewpoint.md)

Converts the current viewpoint instance into a JSON representation compliant with the BCFViewpoint format.

#### Returns

[`BCFViewpoint`](../interfaces/BCFViewpoint.md)

A BCF API JSON complaint object representing the viewpoint, including its GUID, components,
visibility settings, clipping planes, camera configuration, and snapshot data.

***

### updateCamera()

> **updateCamera**(`takeSnapshot`): `Promise`\<`boolean`\>

Updates the camera settings of the viewpoint based on the current world's camera and renderer.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `takeSnapshot` | `boolean` | `true` |

#### Returns

`Promise`\<`boolean`\>

A boolean indicating if the camera data was updated or not.

***

### updateClippingPlanes()

> **updateClippingPlanes**(): `void`

Updates the collection of clipping planes by clearing the current set and adding enabled planes
from the associated `Clipper` component.

#### Returns

`void`
