# Viewpoint

Represents a BCF compliant viewpoint from BuildingSMART.

The Viewpoint class provides methods for managing and interacting with viewpoints.
It includes functionality for setting viewpoint properties, updating the camera,
applying color to components, and serializing the viewpoint for export.

## Implements

- [`BCFViewpoint`](../interfaces/BCFViewpoint.md)

## Properties

### clippingPlanes

`Experimental`

> **clippingPlanes**: [`DataSet`](DataSet.md) \<[`SimplePlane`](SimplePlane.md)\>

ClippingPlanes can be used to define a subsection of a building model that is related to the topic.
Each clipping plane is defined by Location and Direction.
The Direction vector points in the invisible direction meaning the half-space that is clipped.

#### Implementation of

`BCFViewpoint.clippingPlanes`

***

### componentColors

> `readonly` **componentColors**: [`DataMap`](DataMap.md)\<`Color`, `string`[]\>

A map of colors and components GUIDs that should be colorized when displaying a viewpoint.
For this to work, call viewpoint.colorize()

***

### defaultVisibility

> **defaultVisibility**: `boolean` = `true`

When true, all components should be visible unless listed in the exceptions
When false all components should be invisible unless listed in the exceptions

#### Implementation of

`BCFViewpoint.defaultVisibility`

***

### exceptionComponents

> `readonly` **exceptionComponents**: [`DataSet`](DataSet.md)\<`string`\>

A list of components GUIDs to hide when defaultVisibility = true or to show when defaultVisibility = false

#### Implementation of

`BCFViewpoint.exceptionComponents`

***

### openingsVisible

> **openingsVisible**: `boolean` = `false`

Boolean flags to allow fine control over the visibility of openings.
A typical use of these flags is when DefaultVisibility=true but openings should remain hidden.

#### Default

```ts
false
```

#### Implementation of

`BCFViewpoint.openingsVisible`

***

### selectionComponents

> `readonly` **selectionComponents**: [`DataSet`](DataSet.md)\<`string`\>

A list of components GUIDs that should be selected (highlighted) when displaying a viewpoint.

#### Implementation of

`BCFViewpoint.selectionComponents`

***

### spaceBoundariesVisible

> **spaceBoundariesVisible**: `boolean` = `false`

Boolean flags to allow fine control over the visibility of space boundaries.
A typical use of these flags is when DefaultVisibility=true but space boundaries should remain hidden.

#### Default

```ts
false
```

#### Implementation of

`BCFViewpoint.spaceBoundariesVisible`

***

### spacesVisible

> **spacesVisible**: `boolean` = `false`

Boolean flags to allow fine control over the visibility of spaces.
A typical use of these flags is when DefaultVisibility=true but spaces should remain hidden.

#### Default

```ts
false
```

#### Implementation of

`BCFViewpoint.spacesVisible`

***

### world

> `readonly` **world**: [`World`](../interfaces/World.md)

Represents the world in which the viewpoints are created and managed.

## Accessors

### direction

> `get` **direction**(): `Vector3`

Retrieves the direction vector of the viewpoint's camera.

#### Remarks

The direction vector represents the direction in which the camera is pointing.
It is calculated by extracting the x, y, and z components from the camera's direction property.

#### Returns

`Vector3`

A THREE.Vector3 representing the direction of the viewpoint's camera.

***

### exception

> `get` **exception**(): `FragmentIdMap`

A list of components to hide when defaultVisibility = true or to show when defaultVisibility = false

#### Returns

`FragmentIdMap`

The fragmentIdMap for components marked as exceptions.

***

### position

> `get` **position**(): `Vector3`

Retrieves the position vector of the viewpoint's camera.

#### Remarks

The position vector represents the camera's position in the world coordinate system.
The function applies the base coordinate system transformation to the position vector.

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

### selection

> `get` **selection**(): `FragmentIdMap`

A list of components that should be selected (highlighted) when displaying a viewpoint.

#### Returns

`FragmentIdMap`

The fragmentIdMap for components marked as selections.

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

## Methods

### addComponentsFromMap()

> **addComponentsFromMap**(`fragmentIdMap`): `void`

Adds components to the viewpoint based on the provided fragment ID map.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fragmentIdMap` | `FragmentIdMap` | A map containing fragment IDs as keys and arrays of express IDs as values. |

#### Returns

`void`

***

### applyColors()

> **applyColors**(): `void`

Applies color to the components in the viewpoint based on their GUIDs.

This function iterates through the `componentColors` map, retrieves the fragment IDs
corresponding to each color, and then uses the `Classifier` to apply the color to those fragments.

#### Returns

`void`

#### Remarks

The color is applied using the `Classifier.setColor` method, which sets the color of the specified fragments.
The color is provided as a hexadecimal string, prefixed with a '#'.

***

### go()

> **go**(`world`?, `transition`?): `Promise`\<`void`\>

Sets the viewpoint of the camera in the world.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `world`? | [`World`](../interfaces/World.md) | `undefined` | - |
| `transition`? | `boolean` | `true` | <p>Indicates whether the camera movement should have a transition effect.</p><p>                     Default value is `true`.</p> |

#### Returns

`Promise`\<`void`\>

A Promise that resolves when the camera has been set.

#### Remarks

This function calculates the target position based on the viewpoint information.
It sets the visibility of the viewpoint components and then applies the viewpoint using the camera's controls.

#### Throws

An error if the world's camera does not have camera controls.

***

### resetColors()

> **resetColors**(): `void`

Resets the colors of all components in the viewpoint to their original color.

#### Returns

`void`

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

> **set**(`data`): [`Viewpoint`](Viewpoint.md)

Replace the properties of the viewpoint with the provided data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Partial` \<[`BCFViewpoint`](../interfaces/BCFViewpoint.md)\> | <p>An object containing the properties to be set.</p><p>              The properties not included in the object will remain unchanged.</p> |

#### Returns

[`Viewpoint`](Viewpoint.md)

The viewpoint instance with the updated properties.

#### Remarks

The guid will be ommited as it shouldn't change after it has been initially set.

***

### updateCamera()

> **updateCamera**(`world`?): `void`

Updates the camera settings of the viewpoint based on the current world's camera and renderer.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `world`? | [`World`](../interfaces/World.md) |

#### Returns

`void`

#### Remarks

This function retrieves the camera's position, direction, and aspect ratio from the world's camera and renderer.
It then calculates the camera's perspective or orthographic settings based on the camera type.
Finally, it updates the viewpoint's camera settings and updates the viewpoint to the Viewpoints manager.

#### Throws

An error if the world's camera does not have camera controls.

#### Throws

An error if the world's renderer is not available.
