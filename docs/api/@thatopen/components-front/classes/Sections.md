# Sections

A component to create and manage arbitrary sections for BIM models.

## Extends

- `Component`

## Implements

- `Disposable`

## Properties

### current

> **current**: `null` \| [`Section`](../interfaces/Section.md) = `null`

The current section that is being navigated.

***

### list

> **list**: `Map`\<`string`, [`Section`](../interfaces/Section.md)\>

All the created sections.

***

### offset

> **offset**: `number` = `100`

The default offset of the camera to the clipping plane.

***

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### onExited

> `readonly` **onExited**: `Event`\<`void`\>

Event that fires after exiting the section navigation mode.

***

### onNavigated

> `readonly` **onNavigated**: `Event`\<`object`\>

Event that fires after navigating to ta section.

#### Type declaration

##### id

> **id**: `string`

***

### planeType

> `readonly` **planeType**: `"section"` = `"section"`

The plane type for the clipping planes created by this component.

***

### world?

> `optional` **world**: `World`

The current world where the sections are being created.

***

### uuid

> `static` `readonly` **uuid**: `"45b41ba3-7bb8-4e08-909f-e0fa87973965"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### create()

> **create**(`data`): [`Section`](../interfaces/Section.md)

Generates a section with the given data.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `object` | The required data to create a section. |
| `data.id` | `string` | The unique identifier of the section. |
| `data.name`? | `string` | The human-readable name of the section. |
| `data.normal` | `Vector3` | The unit vector that describes the orientation of the clipping plane. |
| `data.offset`? | `number` | The offset of the camera to the section. |
| `data.point` | `Vector3` | The 3D point where the section plane lies. |
| `data.type`? | `string` | The type to apply to the created clipping plane. |

#### Returns

[`Section`](../interfaces/Section.md)

***

### delete()

> **delete**(`id`): `void`

Deletes the section with the given ID.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The identifier whose section to delete. |

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

OBC.Disposable.onDisposed

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`

***

### exit()

> **exit**(`animate`): `Promise`\<`void`\>

Exits the section view mode.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `animate` | `boolean` | `false` | Whether to animate the transition. |

#### Returns

`Promise`\<`void`\>

***

### goTo()

> **goTo**(`id`, `animate`): `Promise`\<`void`\>

Goes to the section with the given ID.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | The identifier whose section to delete. |
| `animate` | `boolean` | `false` | Whether to animate the transition. |

#### Returns

`Promise`\<`void`\>
