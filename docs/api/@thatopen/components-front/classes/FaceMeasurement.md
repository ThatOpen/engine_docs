# FaceMeasurement

This component allows users to measure geometry faces in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/FaceMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/FaceMeasurement).

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

### preview

> **preview**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `MeshBasicMaterial`, `Object3DEventMap`\>

A reference to the preview dimension face.
This line is used to visualize the measurement while creating it.

***

### selection

> **selection**: [`AreaSelection`](../interfaces/AreaSelection.md)[] = `[]`

An array of AreaSelection objects representing the user's selections.
This array is used to store the selected areas, their meshes, and labels.

***

### selectionMaterial

> **selectionMaterial**: `MeshBasicMaterial`

Represents the material used for the selected area in the FaceMeasurement component.
This material is applied to the 3D mesh representing the selected area.

***

### world?

> `optional` **world**: `World`

The world in which the measurements are performed.

***

### uuid

> `static` `readonly` **uuid**: `"30279548-1309-44f6-aa97-ce26eed73522"`

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

> **create**(): `void`

OBC.Createable.create

#### Returns

`void`

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

Deletes all the selections made by the user.
It iterates over the `selection` array, removes each mesh and label from the scene,
disposes the geometry and material of the mesh, and finally clears the `selection` array.

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

> **get**(): [`SerializedAreaMeasure`](../interfaces/SerializedAreaMeasure.md)[]

Retrieves the current state of the AreaMeasurement component in a serialized format.
This method is used for saving measurements.

#### Returns

[`SerializedAreaMeasure`](../interfaces/SerializedAreaMeasure.md)[]

An array of SerializedAreaMeasure objects,
each representing a single selection made by the user.

***

### set()

> **set**(`serialized`): `void`

Sets the state of the AreaMeasurement component from a serialized format.
This method is used for loading measurements.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `serialized` | [`SerializedAreaMeasure`](../interfaces/SerializedAreaMeasure.md)[] | An array of SerializedAreaMeasure objects, each representing a single selection made by the user. |

#### Returns

`void`

#### Throws

Will throw an error if no world is given to the face measurement.
