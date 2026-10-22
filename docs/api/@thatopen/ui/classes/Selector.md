# Selector

A custom selector web component for BIM applications. HTML tag: bim-selector

## Extends

- `LitElement`

## Implements

- [`HasValue`](../interfaces/HasValue.md)
- [`HasName`](../interfaces/HasName.md)

## Properties

### ~~onValueChange~~

> `readonly` **onValueChange**: `Event`

#### Deprecated

Use `addEventListener("change", ...)` instead.

#### Implementation of

[`HasValue`](../interfaces/HasValue.md) . [`onValueChange`](../interfaces/HasValue.md#onvaluechange)

***

### variant?

> `optional` **variant**: `"underline"`

Sets the visual variant of the selector.
- `undefined` (default): The active option gets a filled background.
- `"underline"`: No background; the active option gets an accent-colored
  bottom border and text, while inactive options are muted.
