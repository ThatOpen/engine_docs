# GraphicVertexPicker

A class to provide a graphical marker for picking vertices in a 3D scene.

## Implements

- `Disposable_2`

## Properties

### marker

> **marker**: `null` \| [`Mark`](Mark.md) = `null`

The marker used to indicate the picked vertex.

***

### onDisposed

> `readonly` **onDisposed**: `Event_2`\<`unknown`\>

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

***

### get()

> **get**(`config`?): `Promise`\<`null` \| `Intersection`\<`Object3D`\<`Object3DEventMap`\>\>\>

Retrieves the picked vertex from the world and updates the marker's position.
If no vertex is picked, the marker is hidden.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `config`? | `object` |
| `config.snappingClasses`? | `SnappingClass`[] |
| `config.world`? | `World` |

#### Returns

`Promise`\<`null` \| `Intersection`\<`Object3D`\<`Object3DEventMap`\>\>\>

The picked vertex, or null if no vertex was picked.
