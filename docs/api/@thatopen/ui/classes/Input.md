# ~~Input~~

A custom input web component for BIM applications. HTML tag: bim-input

## Deprecated

`bim-input` is deprecated and will be removed in a future
version of the library. It has already been replaced internally —
`bim-text-input`, `bim-number-input`, `bim-selector`, and `bim-dropdown`
no longer depend on it. Consumers using `<bim-input>` directly should
migrate to one of those components (or build their own wrapper) before
it's removed.

## Extends

- `LitElement`

## Implements

- [`HasValue`](../interfaces/HasValue.md)
- [`HasName`](../interfaces/HasName.md)

## Properties

### ~~styles~~

> `static` **styles**: `CSSResult`

CSS styles for the component.

#### Overrides

`LitElement.styles`
