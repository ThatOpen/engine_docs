# GraphicVertexPicker

A class to provide a graphical marker for picking vertices in a 3D scene.

## Implements

- `Disposable_2`

## Properties

### marker

> **marker**: `null` \| [`Mark`](Mark.md) = `null`

The marker used to indicate the picked vertex.

***

### ~~mode~~

> **mode**: [`GraphicVertexPickerMode`](../enumerations/GraphicVertexPickerMode.md) = `GraphicVertexPickerMode.DEFAULT`

#### Deprecated

Sync mode is gone; this property has no effect and
is retained only to avoid breaking existing setters. Both
values route through the same fast async pick.

***

### onDisposed

> `readonly` **onDisposed**: `Event_2`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### stickyRadiusPx

> **stickyRadiusPx**: `number` = `12`

Pixels of cursor motion the user must travel before the marker
leaves the snap point and resumes cursor-tracking. Without this,
the very next pointermove after a successful snap would yank
the marker back to the cursor and the snap would be invisible.
Tuned for "the user can see they snapped, but a real intentional
move breaks it".

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

Retrieves the picked vertex from the world and updates the
marker's position. If no vertex is picked, the marker is hidden.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config`? | `object` | optional world override and snap classes |
| `config.snappingClasses`? | `SnappingClass`[] | - |
| `config.world`? | `World` | - |

#### Returns

`Promise`\<`null` \| `Intersection`\<`Object3D`\<`Object3DEventMap`\>\>\>

the pick result (matches `castRay`'s shape) or `null`
  if nothing was hit.
