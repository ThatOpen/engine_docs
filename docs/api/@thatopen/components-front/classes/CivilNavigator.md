# `abstract` CivilNavigator

Abstract class representing a Civil Navigator. It provides functionality to navigate and interact with civil engineering data.

## Extends

- `Component`

## Extended by

- [`CivilPlanNavigator`](CivilPlanNavigator.md)
- [`CivilElevationNavigator`](CivilElevationNavigator.md)

## Implements

- `Disposable`

## Properties

### enabled

> **enabled**: `boolean` = `true`

OBC.Component.enabled

#### Overrides

`OBC.Component.enabled`

***

### mouseMarkers?

> `optional` **mouseMarkers**: `object`

Mouse markers for hover and select actions.
They are of type Mark and are optional.

#### hover

> **hover**: [`Mark`](Mark.md)

#### select

> **select**: [`Mark`](Mark.md)

***

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### onHighlight

> `readonly` **onHighlight**: `Event`\<`object`\>

Event triggered when a curve is highlighted.
Provides the point of intersection and the corresponding curve mesh.

#### Type declaration

##### mesh

> **mesh**: `CurveMesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>

##### point

> **point**: `Vector3`

***

### onMarkerChange

> `readonly` **onMarkerChange**: `Event`\<`object`\>

Event triggered when a marker (hover or select) is placed on a curve.
Provides the alignment, percentage, type of marker, and the corresponding curve.

#### Type declaration

##### alignment

> **alignment**: `Alignment`

##### curve

> **curve**: `CivilCurve`

##### percentage

> **percentage**: `number`

##### type

> **type**: [`CivilMarkerType`](../type-aliases/CivilMarkerType.md)

***

### onMarkerHidden

> `readonly` **onMarkerHidden**: `Event`\<`object`\>

Event triggered when a marker (hover or select) is hidden.
Provides the type of marker.

#### Type declaration

##### type

> **type**: [`CivilMarkerType`](../type-aliases/CivilMarkerType.md)

***

### view

> `abstract` **view**: `"horizontal"` \| `"vertical"`

The view mode for the navigator.
Can be either "horizontal" or "vertical".

## Accessors

### highlighter

> `get` **highlighter**(): `CurveHighlighter`

Getter for the highlighter instance.
Throws an error if the highlighter is not initialized.

#### Returns

`CurveHighlighter`

The initialized highlighter instance.

***

### world

> `get` **world**(): `null` \| `World`

Getter for the world instance.

> `set` **world**(`world`): `void`

Setter for the world instance.
If the new world is the same as the current one, it does nothing.
If the current world is set, it removes the event listeners.
If the new world is not set, it does nothing.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | `null` \| `World` | The new world instance or null to unset. |

#### Returns

`null` \| `World`

The current world instance or null if not set.

## Methods

### clear()

> **clear**(): `void`

Clears the civil curves from the scene.
Removes all the curve meshes from the scene and clears the internal array of curve meshes.
Also unselects and unhovers the highlighter.

#### Returns

`void`

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

OBC.Disposable.dispose

#### Returns

`Promise`\<`void`\>

#### Implementation of

`OBC.Disposable.dispose`

***

### draw()

> **draw**(`model`, `filter`?): `Promise`\<`void`\>

Draws the civil curves from the provided model onto the scene.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The FragmentsGroup containing the civil data to be drawn. |
| `filter`? | `Iterable`\<`Alignment`\> | An optional Iterable of alignments to filter the curves to be drawn. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves when the curves have been drawn onto the scene.

#### Throws

Will throw an error if the provided model doesn't have civil data or if no world was given for this navigator.

***

### hideMarker()

> **hideMarker**(`type`): `void`

Hides the marker of the specified type.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | [`CivilMarkerType`](../type-aliases/CivilMarkerType.md) | The type of marker to hide. It can be either "hover" or "select". |

#### Returns

`void`

#### Throws

Will throw an error if the mouse markers are not initialized.

***

### setDefSegments()

> **setDefSegments**(`segmentsArray`): `object`

Sets the definition segments and slope from the provided segments array.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `segmentsArray` | `any`[] | An array of segments, where each segment is an array of numbers representing points. |

#### Returns

`object`

An object containing the definition segments and slope.

##### defSegments

> **defSegments**: `any`

##### slope

> **slope**: `any`

#### Throws

Will throw an error if the segments array is empty or if the points in the segments array are not in the expected format.

***

### setMarker()

> **setMarker**(`alignment`, `percentage`, `type`): `void`

Sets a marker on a specific curve at a given percentage.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `alignment` | `Alignment` | The alignment where the marker should be placed. |
| `percentage` | `number` | The percentage along the alignment where the marker should be placed. |
| `type` | [`CivilMarkerType`](../type-aliases/CivilMarkerType.md) | The type of marker to be placed (hover or select). |

#### Returns

`void`

#### Throws

Will throw an error if there are no curves to place the marker on.
