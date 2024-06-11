# NavigationMode

An object that determines the behavior of the camera controls and the user input (e.g. 2D floor plan mode, first person mode, etc).

## Properties

### enabled

> **enabled**: `boolean`

Whether this navigation mode is active or not.

***

### id

> **id**: [`NavModeID`](../type-aliases/NavModeID.md)

The unique ID of this navigation mode.

***

### set()

> **set**: (`active`, `options`?) => `void`

Enable or disable this navigation mode.
When a new navigation mode is enabled, the previous navigation mode
must be disabled.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | whether to enable or disable this mode. |
| `options`? | `any` | any additional data required to enable or disable it. |

#### Returns

`void`
