# formatUnits()

> **formatUnits**(`units`): `string`

Converts an internal unit key into its user-facing display form.
Area and volume unit keys use a trailing digit ("m2", "cm3"), which is
rendered with the proper superscript ("m²", "cm³"). All other unit keys
are returned untouched. The internal keys themselves never change, so
this only affects labels, not the API.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `units` | `string` | An internal unit key (e.g. "m", "m2", "mm3"). |

## Returns

`string`

The display string for the unit (e.g. "m", "m²", "mm³").
