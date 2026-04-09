# Transitionable\<TState, TEvent\>

Whether this component manages its interaction through an explicit state machine.

## Type parameters

| Type parameter | Description |
| :------ | :------ |
| `TState` *extends* `object` | Discriminated union of all valid states (each with a `kind` string). |
| `TEvent` *extends* `object` | Discriminated union of all accepted events (each with a `type` string). |

## Properties

### machineState

> `readonly` **machineState**: `TState`

The current state. TypeScript guarantees it is always a valid, well-typed state.

***

### onMachineStateChanged

> `readonly` **onMachineStateChanged**: [`Event`](../classes/Event.md)\<`TState`\>

Fired synchronously after every state transition with the new state as payload.

## Methods

### sendMachineEvent()

> **sendMachineEvent**(`event`): `void`

Dispatches an event to the machine, producing a deterministic state transition.
Events that do not apply to the current state are silently ignored.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | `TEvent` |

#### Returns

`void`
