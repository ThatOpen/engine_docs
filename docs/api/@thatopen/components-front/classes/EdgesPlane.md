# EdgesPlane

A more advanced version of Clipper planes that also includes edges and fills.

## Extends

- `SimplePlane`

## Properties

### edgesMaxUpdateRate

> **edgesMaxUpdateRate**: `number` = `50`

The max rate in milliseconds at which edges can be regenerated.
To disable this behaviour set this to 0.

## Accessors

### enabled

> `get` **enabled**(): `boolean`

Getter for the enabled state of the plane.

> `set` **enabled**(`state`): `void`

Setter for the enabled state of the plane.
Also sets the enabled state in the renderer.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `state` | `boolean` | The new enabled state. |

#### Returns

`boolean`

The current enabled state.

***

### visible

> `get` **visible**(): `boolean`

Getter for the visibility state of the plane.

> `set` **visible**(`state`): `void`

Setter for the visibility state of the plane.
Also toggles the visibility of the controls.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `state` | `boolean` | The new visibility state. |

#### Returns

`boolean`

The current visibility state.

## Methods

### dispose()

> **dispose**(): `void`

Disposes of the EdgesPlane and its associated ClippingEdges.
This method should be called when the EdgesPlane is no longer needed to free up resources.
After calling this method, the EdgesPlane and its ClippingEdges should not be used anymore.

#### Returns

`void`

#### Overrides

`OBC.SimplePlane.dispose`

***

### updateFill()

> **updateFill**(): `void`

Updates the fill of the edges.
This method sets the `fillNeedsUpdate` flag to true, triggers the `update` method of the `edges`,
and sets the visibility of the `edges` to the current value of `_visible`.

#### Returns

`void`
