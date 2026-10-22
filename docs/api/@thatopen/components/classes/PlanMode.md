# PlanMode

A [NavigationMode](../interfaces/NavigationMode.md) that allows to navigate floorplans in 2D, like many BIM tools.

## Implements

- [`NavigationMode`](../interfaces/NavigationMode.md)

## Properties

### enabled

> **enabled**: `boolean` = `false`

[NavigationMode.enabled](../interfaces/NavigationMode.md#enabled)

#### Implementation of

[`NavigationMode`](../interfaces/NavigationMode.md) . [`enabled`](../interfaces/NavigationMode.md#enabled)

***

### id

> `readonly` **id**: `"Plan"` = `"Plan"`

[NavigationMode.id](../interfaces/NavigationMode.md#id)

#### Implementation of

[`NavigationMode`](../interfaces/NavigationMode.md) . [`id`](../interfaces/NavigationMode.md#id)

## Methods

### set()

> **set**(`active`, `_options`?): `void`

[NavigationMode.set](../interfaces/NavigationMode.md#set). This mode never adjusts the camera target,
so [NavigationModeOptions.preventTargetAdjustment](../interfaces/NavigationModeOptions.md#preventtargetadjustment) is trivially
honored: there is nothing to skip.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `active` | `boolean` |
| `_options`? | [`NavigationModeOptions`](../interfaces/NavigationModeOptions.md) |

#### Returns

`void`

#### Implementation of

[`NavigationMode`](../interfaces/NavigationMode.md) . [`set`](../interfaces/NavigationMode.md#set)
