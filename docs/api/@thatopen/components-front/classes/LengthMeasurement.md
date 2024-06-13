# LengthMeasurement

A basic dimension tool to measure distances between 2 points in 3D and display a 3D symbol displaying the numeric value. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/LengthMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/LengthMeasurement).

## Extends

- `Component`

## Implements

- `Createable`
- `Hideable`
- `Disposable`
- `Updateable`

## Properties

### list

> **list**: [`SimpleDimensionLine`](SimpleDimensionLine.md)[] = `[]`

A list of all the measurement elements created by this component.

***

### onAfterUpdate

> `readonly` **onAfterUpdate**: `Event` \<[`LengthMeasurement`](LengthMeasurement.md)\>

OBC.Updateable.onAfterUpdate

#### Implementation of

`OBC.Updateable.onAfterUpdate`

***

### onBeforeUpdate

> `readonly` **onBeforeUpdate**: `Event` \<[`LengthMeasurement`](LengthMeasurement.md)\>

OBC.Updateable.onBeforeUpdate

#### Implementation of

`OBC.Updateable.onBeforeUpdate`

***

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### snapDistance

> **snapDistance**: `number` = `0.25`

The minimum distance to force the dimension cursor to a vertex.

***

### world?

> `optional` **world**: `World`

The world in which the angle measurements are performed.
This property is optional and can be set to null if no world is available.

***

### uuid

> `static` `readonly` **uuid**: `"2f9bcacf-18a9-4be6-a293-e898eae64ea1"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Accessors

### color

> `get` **color**(): `Color`

Getter for the color of the dimension lines.
Returns the color of the line material used for the dimension lines.

> `set` **color**(`color`): `void`

Setter for the color of the dimension lines.
Sets the color of the line material used for the dimension lines.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `color` | `Color` |

#### Returns

`Color`

***

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

### visible

> `get` **visible**(): `boolean`

OBC.Hideable.visible

> `set` **visible**(`value`): `void`

OBC.Hideable.visible

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

> **create**(`data`?): `void`

Starts or finishes drawing a new dimension line.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data`? | `any` | forces the dimension to be drawn on a plane. Use this if you are drawing dimensions in floor plan navigation. |

#### Returns

`void`

#### Implementation of

`OBC.Createable.create`

***

### createOnPoints()

> **createOnPoints**(`p1`, `p2`): `void`

Creates a new dimension line between two given points.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `p1` | `Vector3` | The start point of the dimension line. |
| `p2` | `Vector3` | The end point of the dimension line. |

#### Returns

`void`

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

### deleteMeasurement()

> **deleteMeasurement**(`measurement`): `Promise`\<`void`\>

Deletes a specific measurement from the list.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `measurement` | [`SimpleDimensionLine`](SimpleDimensionLine.md) | The measurement to be deleted. |

#### Returns

`Promise`\<`void`\>

#### Remarks

If the measurement does not exist in the list, no action is taken.

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

### update()

> **update**(`_delta`): `Promise`\<`void`\>

OBC.Updateable.update

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

`OBC.Updateable.update`
