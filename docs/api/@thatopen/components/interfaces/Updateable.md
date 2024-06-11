# Updateable

Whether this component should be updated each frame.

## Extended by

- [`World`](World.md)

## Properties

### onAfterUpdate

> **onAfterUpdate**: [`Event`](../classes/Event.md)\<`any`\>

Actions that should be executed after updating the component.

***

### onBeforeUpdate

> **onBeforeUpdate**: [`Event`](../classes/Event.md)\<`any`\>

Actions that should be executed before updating the component.

## Methods

### update()

> **update**(`delta`?): `void`

Function used to update the state of this component each frame. For
instance, a renderer component will make a render each frame.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `delta`? | `number` |

#### Returns

`void`
