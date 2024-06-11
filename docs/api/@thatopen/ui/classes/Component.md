# Component

Heloooooooooo

## Extends

- `LitElement`

## Extended by

- [`Dropdown`](Dropdown.md)

## Methods

### create()

#### create(template, state)

> `static` **create**\<`T`, `S`\>(`template`, `state`): [`T`, `UpdateFunction`\<`S`\>]

Creates a new UI component instance based on the provided template and initial state.

##### Type parameters

| Type parameter | Description |
| :------ | :------ |
| `T` *extends* `HTMLElement` | The type of the UI component element. |
| `S` *extends* `Record`\<`string`, `any`\> | The type of the component state. |

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `template` | `StatefullComponent`\<`S`\> | The stateful component template function. |
| `state` | `S` | The initial state of the component. |

##### Returns

[`T`, `UpdateFunction`\<`S`\>]

An array containing the created UI component element and a function to update its state.

#### create(template)

> `static` **create**\<`T`\>(`template`): `T`

Creates a new UI component instance based on the provided template and initial state.

##### Type parameters

| Type parameter | Description |
| :------ | :------ |
| `T` *extends* `HTMLElement` | The type of the UI component element. |

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `template` | `StatelessComponent` | The stateless component template function. |

##### Returns

`T`

The created UI component element.
