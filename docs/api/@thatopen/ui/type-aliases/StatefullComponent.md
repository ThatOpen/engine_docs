# StatefullComponent()\<S\>

> **StatefullComponent**\<`S`\>: (`state`, `update`) => `TemplateResult`

Represents a function that returns a TemplateResult for a stateful component.

## Type parameters

| Type parameter | Value | Description |
| :------ | :------ | :------ |
| `S` *extends* `Record`\<`string`, `any`\> | `Record`\<`string`, `any`\> | The type of the component state. |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `state` | `S` | The current state of the component. |
| `update` | `UpdateFunction`\<`S`\> | An update function you can call inside the template. WARNING! It can cause infinite loops if not used properly. |

## Returns

`TemplateResult`
