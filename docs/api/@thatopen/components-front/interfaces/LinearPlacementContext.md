# LinearPlacementContext

Context passed to every [PlacementMode](PlacementMode.md) registered on LinearAnnotationsTool.

## Properties

### isHandleHovered

> **isHandleHovered**: `boolean`

True when the cursor is hovering over a handle of the selected dimension.

***

### line

> **line**: `undefined` \| `Line3`

The line under the cursor, if any.

***

### point

> **point**: `Vector3`

Drawing-local cursor point — snapped if a snap candidate was found.

***

### pointsPlaced

> **pointsPlaced**: `number`

Number of points placed in the current placement session.

***

### snap

> **snap**: `null` \| `SnapResult`

Snap result at the current cursor position, or null if no geometry was hit.

***

### state

> **state**: `LinearAnnotationState`

Current state of the LinearDimensions state machine.

## Methods

### send()

> **send**(`msg`): `void`

Send a message to the LinearDimensions state machine.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `msg` | `LinearAnnotationEvent` |

#### Returns

`void`
