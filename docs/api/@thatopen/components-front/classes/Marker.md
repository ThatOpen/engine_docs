# Marker

Component for Managing Markers along with creating different types of markers. Every marker is a Simple2DMarker. For every marker that needs to be added, you can use the Manager to add the marker and change its look and feel. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Marker). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Marker).

## Extends

- `Component`

## Implements

- `Disposable_2`

## Properties

### autoCluster

> **autoCluster**: `boolean` = `true`

Indicates whether markers should be automatically clustered.
If true, markers will be clustered based on the threshold value.
Default value is true.

***

### enabled

> **enabled**: `boolean` = `true`

OBC.Component.enabled

#### Overrides

`OBC.Component.enabled`

***

### list

> **list**: `Map`\<`string`, `Map`\<`string`, [`IMarker`](../interfaces/IMarker.md)\>\>

A Map containing the markers grouped by world UUID.
Each world can have its own set of markers.

***

### onDisposed

> `readonly` **onDisposed**: `Event_2`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### threshold

> **threshold**: `number` = `50`

The distance threshold for clustering markers.
Markers within this distance will be considered for clustering.
Default value is 50.

***

### uuid

> `static` `readonly` **uuid**: `"4079eb91-79b0-4ede-bcf2-15b837129236"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Accessors

### color

> `get` **color**(): `string`

Getter for the color property.
Returns the current color of the markers.

> `set` **color**(`value`): `void`

Setter for the color property.
Updates the color of all the markers to the new value.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The new color value for the markers. |

#### Returns

`string`

The current color of the markers.

## Methods

### cluster()

> **cluster**(`world`): `void`

Performs clustering of markers in the given world.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | `World` | The world where clustering will be performed. |

#### Returns

`void`

***

### create()

> **create**(`world`, `element`, `point`, `isStatic`): `null` \| `string`

Creates a new marker at the specified point in the world.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `world` | `World` | `undefined` | The world where the marker will be created. |
| `element` | `HTMLElement` | `undefined` | - |
| `point` | `Vector3` | `undefined` | The 3D position where the marker will be placed. |
| `isStatic` | `boolean` | `false` | Indicates whether the marker should be static and not clustered. |

#### Returns

`null` \| `string`

The unique key of the created marker.

***

### delete()

> **delete**(`id`): `void`

Deletes a marker with the specified ID from all worlds.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The unique identifier of the marker to be deleted. |

#### Returns

`void`

#### Remarks

This method iterates through all the worlds and their respective markers.
If a marker with the specified ID is found, it disposes of the marker's label
and removes the marker from the world's marker list.

***

### dispose()

> **dispose**(`type`?): `void`

OBC.Disposable.dispose

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type`? | `string` |

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`

***

### getWorldMarkerList()

> **getWorldMarkerList**(`world`): `Map`\<`string`, [`IMarker`](../interfaces/IMarker.md)\>

Retrieves the list of markers associated with a specific world.
If the list does not exist for the given world, it creates a new one.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | `World` | The world for which the marker list is to be retrieved. |

#### Returns

`Map`\<`string`, [`IMarker`](../interfaces/IMarker.md)\>

A Map containing the markers associated with the given world.

#### Remarks

This method is used to manage markers per world. It ensures that each world has its own set of markers.
If a marker list for the given world does not exist, it creates a new one and associates it with the world.

***

### setupEvents()

> **setupEvents**(`world`, `enabled`): `void`

Sets up event listeners for clustering markers in the given world.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | `World` | The world where the event listeners will be set up. |
| `enabled` | `boolean` | Indicates whether the event listeners should be enabled or disabled. |

#### Returns

`void`

#### Remarks

This method checks if the event listeners are already set up for the given world.
If the event listeners are already set up and the `enabled` parameter is true, the method returns without doing anything.
If the world does not have camera controls, the method returns without doing anything.

The method then retrieves the event listener for the given world using the `getWorldEvent` method.
It removes the existing event listeners for the "sleep" and "rest" events from the world's camera controls.

If the `enabled` parameter is true, the method adds the event listener for the "sleep" and "rest" events to the world's camera controls.
