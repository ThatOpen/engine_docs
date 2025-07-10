# getElementValue()

> **getElementValue**\<`T`\>(`child`, `transform`, `recursive`): `T`

Extracts and returns the value of an HTML element's attributes.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> |

## Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `child` | `HTMLElement` | `undefined` | The HTML element to extract values from. |
| `transform` | \{ \[K in string \| number \| symbol\]?: Function \} | `{}` | - |
| `recursive` | `boolean` | `true` | Whether to recursively extract values from child elements. Default is true. |

## Returns

`T`

An object containing the extracted values.
