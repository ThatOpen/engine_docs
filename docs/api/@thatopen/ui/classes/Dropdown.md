# Dropdown

A custom dropdown web component for BIM applications.

## Extends

- `LitElement`

## Implements

- [`HasValue`](../interfaces/HasValue.md)\<`unknown`[]\>
- [`HasName`](../interfaces/HasName.md)

## Properties

### ~~onValueChange~~

> **onValueChange**: `Event`

#### Deprecated

Listen to the "change" event instead:
`dropdown.addEventListener("change", () => { ... })`

#### Implementation of

[`HasValue`](../interfaces/HasValue.md) . [`onValueChange`](../interfaces/HasValue.md#onvaluechange)

## Accessors

### value

> `set` **value**(`value`): `void`

The selected values in the dropdown.

#### Example

```ts
dropdown.value = ['IfcWall', 'IfcSlab'];
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `unknown`[] |

***

### visible

> `set` **visible**(`value`): `void`

Whether the dropdown list is open.

#### Example

```ts
<bim-dropdown visible></bim-dropdown>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |
