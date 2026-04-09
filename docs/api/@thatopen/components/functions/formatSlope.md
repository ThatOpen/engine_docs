# formatSlope()

> **formatSlope**(`slope`, `format`): `string`

Converts a slope ratio to a human-readable string.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `slope` | `number` | Rise / run ratio (e.g. `0.15` for 15 %). |
| `format` | [`SlopeFormat`](../type-aliases/SlopeFormat.md) | Desired output format. |

## Returns

`string`

Formatted string, e.g. `"15.00 %"`, `"1:6.67"`, or `"8.53°"`.
