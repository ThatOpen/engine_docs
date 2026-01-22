# extractUniqueAreas()

> **extractUniqueAreas**(`template`): `string`[]

Extracts unique area names from a grid template string. Filters out empty cells (dots) and returns only unique area names.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `template` | `string` | The grid template string |

## Returns

`string`[]

An array of unique area names

## Example

```ts
const template = `
  "header header"
  "sidebar main"
`;
const areas = extractUniqueAreas(template);
// Returns: ['header', 'sidebar', 'main']
```
