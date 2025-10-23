# MeasurementUtils

Utility component for performing measurements on 3D meshes by providing methods for measuring distances between edges and faces. 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/MeasurementUtils).

## Extends

- [`Component`](Component.md)

## Properties

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

#### Overrides

[`Component`](Component.md) . [`enabled`](Component.md#enabled)

***

### uuid

> `static` **uuid**: `string` = `"267ca032-672f-4cb0-afa9-d24e904f39d6"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### getItemsVolume()

> **getItemsVolume**(`modelIdMap`): `Promise`\<`number`\>

Calculates the total volume of items for a given map of model IDs to local IDs.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelIdMap` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | A map where the key is the model ID and the value is an array of local IDs. |

#### Returns

`Promise`\<`number`\>

A promise that resolves to the total volume of the specified items.

***

### ~~getVolumeFromFragments()~~

> **getVolumeFromFragments**(`modelIdMap`): `Promise`\<`number`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `modelIdMap` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) |

#### Returns

`Promise`\<`number`\>

#### Deprecated

Use [getItemsVolume](MeasurementUtils.md#getitemsvolume) instead.

Calculates the volume of a set of items.

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any, any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any, any>`

#### Inherited from

[`Component`](Component.md) . [`isConfigurable`](Component.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`Component`](Component.md) . [`isDisposeable`](Component.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`Component`](Component.md) . [`isHideable`](Component.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`Component`](Component.md) . [`isResizeable`](Component.md#isresizeable)

***

### isSerializable()

> **isSerializable**(): `this is Serializable<any, Record<string, any>>`

Whether is component is Serializable.

#### Returns

`this is Serializable<any, Record<string, any>>`

#### Inherited from

[`Component`](Component.md) . [`isSerializable`](Component.md#isserializable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`Component`](Component.md) . [`isUpdateable`](Component.md#isupdateable)

***

### round()

> **round**(`vector`): `void`

Method to round the vector's components to a specified number of decimal places.
This is used to ensure numerical precision in edge detection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `vector` | `Vector3` | The vector to round. |

#### Returns

`void`

The vector with rounded components.

***

### convertUnits()

> `static` **convertUnits**(`value`, `fromUnit`, `toUnit`, `precision`): `number`

Converts a value from one unit to another for length, area, or volume without using external libraries.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | The value to convert. |
| `fromUnit` | `string` | `undefined` | The unit of the input value (e.g., "m", "cm", "mm" for lengths; "m2", "cm2" for areas; "m3", "cm3" for volumes). |
| `toUnit` | `string` | `undefined` | The unit to convert to (e.g., "cm", "mm", "m" for lengths; "cm2", "m2" for areas; "cm3", "m3" for volumes). |
| `precision` | `number` | `2` | The number of decimal places to round the result to, as number between 0 and 5. (default is 2). |

#### Returns

`number`

The converted value rounded to the specified precision.

#### Throws

If the rounding value is not a valid integer or is out of range (0-5).

***

### distanceFromPointToLine()

> `static` **distanceFromPointToLine**(`point`, `lineStart`, `lineEnd`, `clamp`): `number`

Utility method to calculate the distance from a point to a line segment.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `point` | `Vector3` | `undefined` | The point from which to calculate the distance. |
| `lineStart` | `Vector3` | `undefined` | The start point of the line segment. |
| `lineEnd` | `Vector3` | `undefined` | The end point of the line segment. |
| `clamp` | `boolean` | `false` | If true, the distance will be clamped to the line segment's length. |

#### Returns

`number`

The distance from the point to the line segment.
