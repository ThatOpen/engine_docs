# Mark

Represents a marker in the 3D world.

## Implements

- `Hideable`
- `Disposable_2`

## Properties

### onDisposed

> `readonly` **onDisposed**: `Event_2`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### three

> **three**: `CSS2DObject`

The CSS object representing the marker.

***

### world

> **world**: `World`

The world in which the marker exists.

## Accessors

### visible

> `get` **visible**(): `boolean`

OBC.Hideable.visible

> `set` **visible**(`value`): `void`

OBC.Hideable.visible

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

## Methods

### dispose()

> **dispose**(): `void`

OBC.Disposable.dispose

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`

***

### notDisplay()

> **notDisplay**(): `void`

Never Display marker.

This method changes the `visible` property of the marker to its false value.
Marker will never displayed.

#### Returns

`void`

***

### toggleVisibility()

> **toggleVisibility**(): `void`

Toggles the visibility of the marker.

This method changes the `visible` property of the marker to its opposite value.
If the marker is currently visible, it will be hidden, and vice versa.

#### Returns

`void`
