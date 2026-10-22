# Icon

A custom icon web component for BIM applications. HTML tag: bim-icon

## Extends

- `LitElement`

## Properties

### ariaLabel

> **ariaLabel**: `null` \| `string` = `null`

Accessible label for standalone (informative) icons. When set, the host receives
`role="img"` and the label is announced by screen readers. When absent, the icon
is treated as decorative and hidden from the accessibility tree.

#### Overrides

`LitElement.ariaLabel`

***

### icon?

> `optional` **icon**: `string`

The icon identifier in `"collection:icon-name"` format (e.g. `"solar:settings-bold"`).
Uses the Iconify icon set — see https://iconify.design for available collections.
