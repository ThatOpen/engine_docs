# CivilElevationNavigator

This component is responsible for navigating and visualizing elevation data of infra/civil models (vertical alignments). 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/CivilElevationNavigator). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/CivilElevationNavigator).

## Extends

- [`CivilNavigator`](CivilNavigator.md)

## Properties

### enabled

> **enabled**: `boolean` = `true`

OBC.Component.enabled

#### Overrides

[`CivilNavigator`](CivilNavigator.md) . [`enabled`](CivilNavigator.md#enabled)

***

### mouseMarkers?

> `optional` **mouseMarkers**: `object`

Mouse markers for hover and select actions.
They are of type Mark and are optional.

#### hover

> **hover**: [`Mark`](Mark.md)

#### select

> **select**: [`Mark`](Mark.md)

#### Inherited from

[`CivilNavigator`](CivilNavigator.md) . [`mouseMarkers`](CivilNavigator.md#mousemarkers)

***

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Inherited from

[`CivilNavigator`](CivilNavigator.md) . [`onDisposed`](CivilNavigator.md#ondisposed)

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

#### Inherited from

[`CivilNavigator`](CivilNavigator.md) . [`onHighlight`](CivilNavigator.md#onhighlight)

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

#### Inherited from

[`CivilNavigator`](CivilNavigator.md) . [`onMarkerChange`](CivilNavigator.md#onmarkerchange)

***

### onMarkerHidden

> `readonly` **onMarkerHidden**: `Event`\<`object`\>

Event triggered when a marker (hover or select) is hidden.
Provides the type of marker.

#### Type declaration

##### type

> **type**: [`CivilMarkerType`](../type-aliases/CivilMarkerType.md)

#### Inherited from

[`CivilNavigator`](CivilNavigator.md) . [`onMarkerHidden`](CivilNavigator.md#onmarkerhidden)

***

### uuid

> `static` `readonly` **uuid**: `"097eea29-2d5a-431a-a247-204d44670621"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

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

Getter for the world property.
This property is used to retrieve the world context for the component.

> `set` **world**(`world`): `void`

Sets the world for the CivilElevationNavigator.
This property is used to manage the world context for the component.
When the world is set, it triggers the addition of elevation markers to the scene.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | `null` \| `World` | The world to set for the component. If null, it will not update the world. |

#### Returns

`null` \| `World`

- The current world context for the component.
If null, it means the world has not been set yet.

## Methods

### clear()

> **clear**(): `void`

Clears the civil curves from the scene.
Removes all the curve meshes from the scene and clears the internal array of curve meshes.
Also unselects and unhovers the highlighter.

#### Returns

`void`

#### Inherited from

[`CivilNavigator`](CivilNavigator.md) . [`clear`](CivilNavigator.md#clear)

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

OBC.Disposable.dispose

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`CivilNavigator`](CivilNavigator.md) . [`dispose`](CivilNavigator.md#dispose)

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

#### Inherited from

[`CivilNavigator`](CivilNavigator.md) . [`draw`](CivilNavigator.md#draw)

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

#### Inherited from

[`CivilNavigator`](CivilNavigator.md) . [`hideMarker`](CivilNavigator.md#hidemarker)

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

#### Inherited from

[`CivilNavigator`](CivilNavigator.md) . [`setDefSegments`](CivilNavigator.md#setdefsegments)

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

#### Inherited from

[`CivilNavigator`](CivilNavigator.md) . [`setMarker`](CivilNavigator.md#setmarker)

#### Throws

Will throw an error if there are no curves to place the marker on.
