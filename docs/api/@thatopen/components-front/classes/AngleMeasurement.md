# AngleMeasurement

This component allows users to measure angles in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/AngleMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/AngleMeasurement).

## Extends

- `Component`

## Implements

- `Createable`
- `Disposable`

## Properties

### list

> **list**: `AngleMeasureElement`[] = `[]`

A list of all the angle measurement elements created by this component.

***

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### world?

> `optional` **world**: `World`

The world in which the angle measurements are performed.
This property is optional and can be set to null if no world is available.

***

### uuid

> `static` `readonly` **uuid**: `"622fb2c9-528c-4b0a-8a0e-6a1375f0a3aa"`

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

### lineMaterial

> `get` **lineMaterial**(): `LineMaterial`

Getter for the line material used for the angle measurement lines.

> `set` **lineMaterial**(`material`): `void`

Setter for the line material used for the angle measurement lines.
Disposes the old material and sets the new one.
Also updates the resolution of the material to match the window size.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `material` | `LineMaterial` | The new line material to use. |

#### Returns

`LineMaterial`

***

### workingPlane

> `get` **workingPlane**(): `null` \| `Plane`

Getter for the working plane for the angle measurement.

> `set` **workingPlane**(`plane`): `void`

Setter for the working plane for the angle measurement.
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
