# validateVerticalResize()

> **validateVerticalResize**(`leftValue`, `rightValue`, `dx`, `minSize`): `boolean`

Validates if a vertical resize operation is allowed. Prevents resizing if it would make an area smaller than the minimum size. Only blocks movement in the direction that would shrink an area below the minimum.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `leftValue` | `number` | New size for the left column |
| `rightValue` | `number` | New size for the right column |
| `dx` | `number` | Delta X (horizontal movement) |
| `minSize` | `number` | Minimum allowed size in pixels |

## Returns

`boolean`

true if the resize is allowed, false otherwise
