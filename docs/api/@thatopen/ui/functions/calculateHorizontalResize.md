# calculateHorizontalResize()

> **calculateHorizontalResize**(`state`, `dy`, `row`, `isLastRow`): `object`

Calculates new sizes for a horizontal resize operation.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `state` | `GridResizeState` | The current resize state |
| `dy` | `number` | Delta Y (vertical movement) |
| `row` | `number` | Row index being resized |
| `isLastRow` | `boolean` | Whether this is the last row |

## Returns

`object`

Object with new top and bottom row sizes

### bottom

> **bottom**: `number`

### top

> **top**: `number`
