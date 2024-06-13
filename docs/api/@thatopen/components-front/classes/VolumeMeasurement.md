# VolumeMeasurement

This component allows users to measure geometry volumes in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/VolumeMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/VolumeMeasurement).

## Extends

- `Component`

## Implements

- `Createable`
- `Disposable`

## Properties

### label

> **label**: `null` \| [`Mark`](Mark.md) = `null`

Label used to display the calculated volume.
It is initially set to null and will be created when needed.

***

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### onVolumeFound

> `readonly` **onVolumeFound**: `Event`\<`number`\>

Event triggered when a volume is found.
The event passes the calculated volume as a parameter.

***

### world?

> `optional` **world**: `World`

The world in which the measurements are performed.

***

### uuid

> `static` `readonly` **uuid**: `"811da532-7af3-4635-b592-1c06ae494af5"`

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

### clear()

> **clear**(): `void`

Clears the label associated with the volume measurement.

#### Returns

`void`

#### Remarks

This method is used to hide the label when the volume measurement is no longer needed.
If the label exists, it sets its visibility to false.

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

> **deleteAll**(): `Promise`\<`void`\>

Deletes all the measurements created by this component.

#### Returns

`Promise`\<`void`\>

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

OBC.Disposable.dispose

#### Returns

`Promise`\<`void`\>

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

### getVolumeFromFragments()

> **getVolumeFromFragments**(`frags`): `number`

Calculates the volume of a set of fragments.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `frags` | `FragmentIdMap` | A map of fragment IDs to their corresponding item IDs. |

#### Returns

`number`

The total volume of the fragments.

#### Remarks

This method creates a set of instanced meshes from the given fragments and item IDs.
It then calculates the volume of each mesh and returns the total volume.

#### Throws

Will throw an error if the world is not set.

#### Throws

Will throw an error if the label is not created.

#### Throws

Will throw an error if the world's renderer is not set.

#### Throws

Will throw an error if the geometry of the meshes is not indexed.

#### Throws

Will throw an error if the fragment manager is not available.

***

### getVolumeFromMeshes()

> **getVolumeFromMeshes**(`meshes`): `number`

Calculates the total volume of a set of meshes.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `meshes` | `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[] \| `InstancedMesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[] | An array of meshes or instanced meshes to calculate the volume from. |

#### Returns

`number`

The total volume of the meshes.

#### Throws

Will throw an error if the world is not set.

#### Throws

Will throw an error if the label is not created.

#### Remarks

This method calculates the volume of each mesh in the provided array and returns the total volume.
It also handles the creation of a label if it doesn't exist, adds the label to the world's scene,
and positions the label at the center of the bounding sphere of the meshes.
