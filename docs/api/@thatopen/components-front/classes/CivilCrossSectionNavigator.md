# CivilCrossSectionNavigator

This component is used to navigate and visualize cross sections of a 3D model. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/CivilNavigators). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/CivilCrossSectionNavigator).

## Extends

- `Component`

## Implements

- `Disposable_2`

## Properties

### enabled

> **enabled**: `boolean` = `true`

OBC.Component.enabled

#### Overrides

`OBC.Component.enabled`

***

### onDisposed

> `readonly` **onDisposed**: `Event_2`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### uuid

> `static` `readonly` **uuid**: `"96b2c87e-d90b-4639-8257-8f01136fe324"`

A unique identifier for the component. This UUID is used to register the component within the Components system.

## Accessors

### plane

> `get` **plane**(): `SimplePlane`

A property representing the plane used for cross section visualization.

> `set` **plane**(`plane`): `void`

A property representing the plane used for cross section visualization.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `plane` | `SimplePlane` |

#### Returns

`SimplePlane`

***

### world

> `get` **world**(): `null` \| `World`

A getter for the 3D world.

> `set` **world**(`world`): `void`

A setter for the 3D world.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | `null` \| `World` | The new 3D world. |

#### Returns

`null` \| `World`

The 3D world.

## Methods

### set()

> **set**(`point`, `normal`): `Promise`\<`void`\>

Sets the cross section plane based on the given curve mesh and point.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `point` | `Vector3` | The point on the curve mesh where the cross section should be created. |
| `normal` | `Vector3` | The normal of the plane. |

#### Returns

`Promise`\<`void`\>

#### Throws

Will throw an error if the world or plane is not set before calling this method.

#### Throws

Will throw an error if the geometry is not indexed.
