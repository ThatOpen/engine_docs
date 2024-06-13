# EdgeMeasurement

This component allows users to measure geometry edges in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/EdgeMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/EdgeMeasurement).

## Extends

- `Component`

## Implements

- `Createable`
- `Disposable`

## Properties

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### preview?

> `optional` **preview**: [`SimpleDimensionLine`](SimpleDimensionLine.md)

A reference to the preview dimension line.
This line is used to visualize the measurement while creating it.

***

### tolerance

> **tolerance**: `number` = `0.3`

The tolerance value for edge selection.
This value determines the maximum distance from the mouse cursor to an edge for it to be selected.

***

### world?

> `optional` **world**: `World`

The world in which the measurements are performed.

***

### uuid

> `static` `readonly` **uuid**: `"e7be5749-89df-4514-8d25-83aa38ce12d8"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Accessors

### enabled

> `get` **enabled**(): `boolean`

OBC.Component.enabled

> `set` **enabled**(`value`): `void`

OBC.Component.enabled

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

## Methods

### cancelCreation()

> **cancelCreation**(): `void`

OBC.Createable.cancelCreation

#### Returns

`void`

#### Implementation of

`OBC.Createable.cancelCreation`

***

### create()

> **create**(): `Promise`\<`void`\>

OBC.Createable.create

#### Returns

`Promise`\<`void`\>

#### Implementation of

`OBC.Createable.create`

***

### delete()

> **delete**(): `void`

OBC.Createable.delete

#### Returns

`void`

#### Implementation of

`OBC.Createable.delete`

***

### deleteAll()

> **deleteAll**(): `void`

Deletes all the measurements created by the EdgeMeasurement component.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

OBC.Disposable.dispose

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`

***

### endCreation()

> **endCreation**(): `void`

OBC.Createable.endCreation

#### Returns

`void`

#### Implementation of

`OBC.Createable.endCreation`

***

### get()

> **get**(): `number`[][]

Retrieves the current state of the measurements created by the EdgeMeasurement component.
The state is serialized as an array of arrays, where each inner array represents a line measurement.
Each line measurement is represented by six numbers: the x, y, and z coordinates of the start and end points.

#### Returns

`number`[][]

***

### set()

> **set**(`dimensions`): `void`

Sets the state of the measurements created by the EdgeMeasurement component.
The state is serialized as an array of arrays, where each inner array represents a line measurement.
Each line measurement is represented by six numbers: the x, y, and z coordinates of the start and end points.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dimensions` | `number`[][] | The serialized state of the measurements. Each inner array should contain six numbers representing the x, y, and z coordinates of the start and end points of a line measurement. |

#### Returns

`void`
