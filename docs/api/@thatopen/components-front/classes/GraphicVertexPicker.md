# GraphicVertexPicker

A class that extends OBC.VertexPicker to provide a graphical marker for picking vertices in a 3D scene.

## Extends

- `VertexPicker`

## Implements

- `Disposable`

## Properties

### marker

> **marker**: `null` \| [`Mark`](Mark.md) = `null`

The marker used to indicate the picked vertex.

***

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

## Methods

### dispose()

> **dispose**(): `void`

OBC.Disposable.onDisposed

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`

#### Overrides

`OBC.VertexPicker.dispose`

***

### get()

> **get**(`world`): `null` \| `Vector3`

Retrieves the picked vertex from the world and updates the marker's position.
If no vertex is picked, the marker is hidden.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | `World` | The world in which to pick the vertex. |

#### Returns

`null` \| `Vector3`

The picked vertex, or null if no vertex was picked.

#### Overrides

`OBC.VertexPicker.get`
