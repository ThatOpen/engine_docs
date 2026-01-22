# calculateVerticalResize()

> **calculateVerticalResize**(`state`, `dx`, `col`, `isLastCol`): `object`

Calculates new sizes for a vertical resize operation.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `state` | `GridResizeState` | The current resize state |
| `dx` | `number` | Delta X (horizontal movement) |
| `col` | `number` | Column index being resized |
| `isLastCol` | `boolean` | Whether this is the last column |

## Returns

`object`

Object with new left and right column sizes

### left

> **left**: `number`

### right

> **right**: `number`
