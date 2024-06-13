# Selector

A custom selector web component for BIM applications. HTML tag: bim-selector

## Extends

- `LitElement`

## Implements

- [`HasValue`](../interfaces/HasValue.md)
- [`HasName`](../interfaces/HasName.md)

## Properties

### styles

> `static` **styles**: `CSSResult`

CSS styles for the component.

#### Overrides

`LitElement.styles`

## Accessors

### value

> `set` **value**(`value`): `void`

Sets the value of the selector.
It finds the matching option based on the provided value and sets it as the selected option.
If no matching option is found, it does nothing.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to set for the selector. |
