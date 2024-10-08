# Plans

Component to easily define and navigate 2D floor plans. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Plans). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Plans).

## Extends

- `Component`

## Implements

- `Disposable`

## Properties

### currentPlan

> **currentPlan**: `null` \| [`PlanView`](../interfaces/PlanView.md) = `null`

The floorplan that is currently selected.

***

### enabled

> **enabled**: `boolean` = `false`

OBC.Component.enabled

#### Overrides

`OBC.Component.enabled`

***

### list

> **list**: [`PlanView`](../interfaces/PlanView.md)[] = `[]`

A list of all the floor plans created.
Each floor plan is represented by a [PlanView](../interfaces/PlanView.md) object.

***

### offset

> **offset**: `number` = `1.5`

The offset from the clipping planes to their respective floor plan elevation.

***

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### onExited

> `readonly` **onExited**: `Event`\<`unknown`\>

Event triggered when the user exits the floor plan view.

***

### onNavigated

> `readonly` **onNavigated**: `Event`\<`object`\>

Event triggered when the user navigates to a different floor plan.
The event provides the id of the floor plan the user navigated to.

#### Type declaration

##### id

> **id**: `string`

***

### planeType

> `readonly` **planeType**: `"floorplan"` = `"floorplan"`

The plane type for the clipping planes created by this component.

***

### uuid

> `static` `readonly` **uuid**: `"a80874aa-1c93-43a4-80f2-df346da086b1"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Accessors

### defaultCameraOffset

> `get` **defaultCameraOffset**(): `number`

The offset of the 2D camera to the floor plan elevation.

> `set` **defaultCameraOffset**(`value`): `void`

The offset of the 2D camera to the floor plan elevation.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

***

### world

> `get` **world**(): `undefined` \| `World`

A reference to the world in which the floor plans are displayed.
This is used to access the camera and other relevant components.

> `set` **world**(`world`): `void`

A reference to the world in which the floor plans are displayed.
This is used to access the camera and other relevant components.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `world` | `undefined` \| `World` |

#### Returns

`undefined` \| `World`

## Methods

### create()

> **create**(`config`): `void`

Creates a new floor plan based on the provided configuration.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config` | `object` | The configuration object for the new floor plan. |
| `config.id` | `string` | - |
| `config.name`? | `string` | - |
| `config.normal` | `Vector3` | - |
| `config.point` | `Vector3` | - |
| `config.type`? | `string` | - |

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

### exitPlanView()

> **exitPlanView**(`animate`): `Promise`\<`void`\>

Exits the floor plan view and returns to the 3D view.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `animate` | `boolean` | `false` | Whether to animate the camera movement. Default is false. |

#### Returns

`Promise`\<`void`\>

***

### generate()

> **generate**(`model`): `Promise`\<`void`\>

Generates floor plans from the provided IFC model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The IFC model from which to generate floor plans. |

#### Returns

`Promise`\<`void`\>

#### Throws

Will throw an error if the model does not have properties or if floor plans are not found.

***

### goTo()

> **goTo**(`id`, `animate`): `Promise`\<`void`\>

Navigates to the floor plan with the specified id.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | The id of the floor plan to navigate to. |
| `animate` | `boolean` | `false` | Whether to animate the camera movement. Default is false. |

#### Returns

`Promise`\<`void`\>
