# ClipEdges

A component that can add fills and outlines to the Clipper. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/ClipEdges). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/ClipEdges).

## Extends

- `Component`

## Implements

- `Disposable`

## Properties

### enabled

> **enabled**: `boolean` = `true`

OBC.Component.enabled

#### Overrides

`OBC.Component.enabled`

***

### fillsNeedUpdate

> **fillsNeedUpdate**: `boolean` = `false`

A flag indicating whether the fills need to be updated.

***

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### styles

> **styles**: [`EdgesStyles`](EdgesStyles.md)

The styling properties for the edges.

***

### uuid

> `static` `readonly` **uuid**: `"24dfc306-a3c4-410f-8071-babc4afa5e4d"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Accessors

### visible

> `get` **visible**(): `boolean`

Gets the visibility state of the edges.

> `set` **visible**(`active`): `void`

Sets the visibility state of the edges.
Updates the visibility of the associated [EdgesPlane](EdgesPlane.md) instances.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | The new visibility state. |

#### Returns

`boolean`

The current visibility state.

## Methods

### dispose()

> **dispose**(): `void`

OBC.Disposable.dispose

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`

***

### update()

> **update**(`updateFills`?): `Promise`\<`void`\>

Updates all the lines of the component.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `updateFills`? | `boolean` | `false` | If true, the fills will be updated regardless of the `fillsNeedUpdate` flag. |

#### Returns

`Promise`\<`void`\>

- A promise that resolves when the update is complete.

#### Remarks

This method iterates through all the [EdgesPlane](EdgesPlane.md) instances associated with the Clipper component.
