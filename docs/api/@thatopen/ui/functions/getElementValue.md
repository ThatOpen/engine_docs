# getElementValue()

> **getElementValue**(`child`, `transform`, `recursive`): `Record`\<`string`, `any`\>

Extracts and returns the value of an HTML element's attributes.

## Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `child` | `HTMLElement` | `undefined` | The HTML element to extract values from. |
| `transform` | `Record`\<`string`, (`value`) => `any`\> | `{}` | - |
| `recursive` | `boolean` | `true` | Whether to recursively extract values from child elements. Default is true. |

## Returns

`Record`\<`string`, `any`\>

An object containing the extracted values.
