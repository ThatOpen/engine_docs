# validateHorizontalResize()

> **validateHorizontalResize**(`topValue`, `bottomValue`, `dy`, `minSize`): `boolean`

Validates if a horizontal resize operation is allowed. Prevents resizing if it would make an area smaller than the minimum size. Only blocks movement in the direction that would shrink an area below the minimum.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `topValue` | `number` | New size for the top row |
| `bottomValue` | `number` | New size for the bottom row |
| `dy` | `number` | Delta Y (vertical movement) |
| `minSize` | `number` | Minimum allowed size in pixels |

## Returns

`boolean`

true if the resize is allowed, false otherwise
