# Civil3DNavigator

This component provides functionality for navigating and interacting with civil engineering data in a 3D environment. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Civil3DNavigator). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Civil3DNavigator).

## Extends

- `Component`

## Properties

### enabled

> **enabled**: `boolean` = `true`

OBC.Component.enabled

#### Overrides

`OBC.Component.enabled`

***

### onHighlight

> `readonly` **onHighlight**: `Event`\<`object`\>

Event triggered when a curve is highlighted.
Provides information about the highlighted curve, point, and index.

#### Type declaration

##### curve

> **curve**: `CurveMesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>

##### index

> **index**: `number`

##### point

> **point**: `Vector3`

***

### onMarkerChange

> `readonly` **onMarkerChange**: `Event`\<`object`\>

Event triggered when a marker (point) on a curve changes.
Provides information about the alignment, percentage, type of marker, and the curve.

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

Event triggered when a marker (point) on a curve is hidden.
Provides information about the type of marker.

#### Type declaration

##### type

> **type**: [`CivilMarkerType`](../type-aliases/CivilMarkerType.md)

***

### uuid

> `static` `readonly` **uuid**: `"0a59c09e-2b49-474a-9320-99f51f40f182"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Accessors

### highlighter

> `get` **highlighter**(): `CurveHighlighter`

Getter for the highlighter property.
Returns the curve highlighter instance.

#### Throws

If the navigator is not initialized.

#### Returns

`CurveHighlighter`

The curve highlighter instance.

***

### world

> `get` **world**(): `null` \| `World`

Getter for the world property.
Returns the current world instance.

> `set` **world**(`world`): `void`

Setter for the world property.
Sets the world instance and initializes the component.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | `null` \| `World` | The new world instance or null to clear the current world. |

#### Returns

`null` \| `World`

The current world instance or null if not set.

## Methods

### draw()

> **draw**(`model`): `void`

Draws the civil engineering data onto the 3D scene.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The FragmentsGroup containing the civil data to be drawn. |

#### Returns

`void`

#### Throws

Will throw an error if the model does not have civil data or if the world is not set.

***

### hideMarker()

> **hideMarker**(`type`): `void`

Hides the marker of the specified type.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | [`CivilMarkerType`](../type-aliases/CivilMarkerType.md) | The type of marker to hide. |

#### Returns

`void`

#### Throws

Will throw an error if the mouse markers have not been initialized.
        This can happen if the world has not been set before using this method.

#### Remarks

This method hides the marker of the specified type by setting its visibility to false.

#### Example

```typescript
const navigator = new Civil3DNavigator(components);
navigator.world = world; // Initialize the world
navigator.hideMarker("select");
```

***

### setMarker()

> **setMarker**(`alignment`, `percentage`, `type`): `void`

Sets a marker at a specific percentage along the given alignment.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `alignment` | `Alignment` | The alignment on which to place the marker. |
| `percentage` | `number` | The percentage along the alignment where the marker should be placed. |
| `type` | [`CivilMarkerType`](../type-aliases/CivilMarkerType.md) | The type of marker to be set. |

#### Returns

`void`

#### Throws

Will throw an error if the mouse markers have not been initialized.
        This can happen if the world has not been set before using this method.

#### Remarks

This method calculates the 3D point at the given percentage along the alignment,
sets the marker at that point, and makes the marker visible.

#### Example

```typescript
const navigator = new Civil3DNavigator(components);
navigator.world = world; // Initialize the world
const alignment = model.civilData.alignments.get(alignmentId);
if (alignment) {
  navigator.setMarker(alignment, 0.5, "select");
}
```
