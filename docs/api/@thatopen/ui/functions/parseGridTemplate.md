# parseGridTemplate()

> **parseGridTemplate**(`template`): (`string` \| `null`)[][]

Parses a grid template string and returns a 2D matrix representation.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `template` | `string` | The grid template string to parse |

## Returns

(`string` \| `null`)[][]

A 2D array where each cell contains the area name or null for empty cells

## Example

```ts
const template = `
  "header header"
  "sidebar main"
`;
const matrix = parseGridTemplate(template);
// Returns: [['header', 'header'], ['sidebar', 'main']]
```
