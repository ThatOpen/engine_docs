# CivilCrossSectionNavigator

This component is used to navigate and visualize cross sections of a 3D model. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/CivilCrossSectionNavigator). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/CivilCrossSectionNavigator).

## Extends

- `Component`

## Properties

### enabled

> **enabled**: `boolean` = `true`

OBC.Component.enabled

#### Overrides

`OBC.Component.enabled`

***

### plane?

> `optional` **plane**: [`EdgesPlane`](EdgesPlane.md)

A property representing the plane used for cross section visualization.

***

### world

> **world**: `null` \| `World` = `null`

A property representing the world in which the component operates.

***

### uuid

> `static` `readonly` **uuid**: `"96b2c87e-d90b-4639-8257-8f01136fe324"`

A unique identifier for the component. This UUID is used to register the component within the Components system.

## Accessors

### world3D

> `get` **world3D**(): `null` \| `World`

A getter for the 3D world.

> `set` **world3D**(`world`): `void`

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

> **set**(`curveMesh`, `point`): `Promise`\<`void`\>

Sets the cross section plane based on the given curve mesh and point.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `curveMesh` | `CurveMesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[]\> | The curve mesh to create the cross section from. |
| `point` | `Vector3` | The point on the curve mesh where the cross section should be created. |

#### Returns

`Promise`\<`void`\>

#### Throws

Will throw an error if the world or plane is not set before calling this method.

#### Throws

Will throw an error if the geometry is not indexed.
