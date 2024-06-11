# Plans

Helper to control the camera and easily define and navigate 2D floor plans.

## Extends

- `Component`

## Implements

- `Disposable`

## Properties

### currentPlan

> **currentPlan**: `null` \| `PlanView` = `null`

The floorplan that is currently selected.

***

### defaultCameraOffset

> **defaultCameraOffset**: `number` = `30`

The offset of the 2D camera to the floor plan elevation.

***

### defaultSectionOffset

> **defaultSectionOffset**: `number` = `1.5`

The offset from the clipping planes to their respective floor plan elevation.

***

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

## Methods

### create()

> **create**(`config`): `void`

Creates a new floor plan in the navigator.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config` | `PlanView` | Necessary data to initialize the floor plan. |

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Disposable.dispose

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`

***

### exitPlanView()

> **exitPlanView**(`animate`): `Promise`\<`void`\>

Deactivate navigator and go back to the previous view.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `animate` | `boolean` | `false` | Whether to animate the camera transition. |

#### Returns

`Promise`\<`void`\>

***

### goTo()

> **goTo**(`id`, `animate`): `Promise`\<`void`\>

Make the navigator go to the specified floor plan.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | Floor plan to go to. |
| `animate` | `boolean` | `false` | Whether to animate the camera transition. |

#### Returns

`Promise`\<`void`\>
