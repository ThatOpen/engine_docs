# GridLayoutsDefinition\<L, E\>

> **GridLayoutsDefinition**\<`L`, `E`\>: `{ [K in L[number]]: Object }`

Represents a collection of predefined grid layouts for the Grid component. Each layout is defined by a unique name, a grid template string, and a map of area names to HTMLElement instances. The grid template string defines the structure of the grid, and the area names correspond to the grid-area property of the HTMLElement instances. The HTMLElement instances are used to populate the grid with content.

## Type parameters

| Type parameter |
| :------ |
| `L` *extends* `string`[] |
| `E` *extends* `GridComponentDefinition` |
