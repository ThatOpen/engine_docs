# AreaMeasurement

This component allows users to measure areas in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/AreaMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/AreaMeasurement).

## Extends

- `Component`

## Implements

- `Createable`
- `Disposable`

## Properties

### list

> **list**: `AreaMeasureElement`[] = `[]`

A list of all the area measurement elements created by this component.

***

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### world?

> `optional` **world**: `World`

The world in which the area measurements are performed.
This property is optional and can be set to null if no world is available.

***

### uuid

> `static` `readonly` **uuid**: `"c453a99e-f054-4781-9060-33df617db4a5"`

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

***

### workingPlane

> `get` **workingPlane**(): `null` \| `Plane`

Getter for the working plane for the area measurement.

> `set` **workingPlane**(`plane`): `void`

Setter for the working plane for the area measurement.
Sets the working plane for the vertex picker.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `plane` | `null` \| `Plane` | The new working plane or null if no plane is to be used. |

#### Returns

`null` \| `Plane`

The current working plane or null if no plane is being used.

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

Deletes all the dimensions that have been previously created.

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
