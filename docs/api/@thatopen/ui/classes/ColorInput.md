# ColorInput

A custom color input web component for BIM applications. HTML tag: bim-color-input

## Fires

input - Fired when the color or opacity value changes.

## Extends

- `LitElement`

## Implements

- [`HasValue`](../interfaces/HasValue.md)
- [`HasName`](../interfaces/HasName.md)

## Properties

### color

> **color**: `string` = `"#ffffff"`

Hex color value in `#RRGGBB` format.

***

### ~~onValueChange~~

> `readonly` **onValueChange**: `Event`

#### Deprecated

Listen for the "input" event on the element instead.

#### Implementation of

[`HasValue`](../interfaces/HasValue.md) . [`onValueChange`](../interfaces/HasValue.md#onvaluechange)

***

### opacity?

> `optional` **opacity**: `number`

Opacity value in the range 0–100. When undefined, no opacity control is shown.
