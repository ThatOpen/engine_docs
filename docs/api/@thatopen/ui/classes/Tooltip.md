# Tooltip

A custom tooltip web component for BIM applications. HTML tag: bim-tooltip

## Extends

- `LitElement`

## Properties

### visible

> **visible**: `boolean` = `false`

Whether the tooltip is currently shown. Setting this directly (instead of
relying on hover/focus) drives the exact same show/hide path — moving the
element into the floating container and computing its position — so the
imperative and event-driven APIs stay consistent. The actual show/hide
side effects run in `updated()` (see below), not in a custom accessor:
reflecting a hand-written get/set pair through `@property` is a known
rough edge under legacy/experimental TS decorators, so the side effects
are kept on Lit's own, guaranteed-correct change-detection path instead.

`visible` is reflected to an attribute; `render()` stays a static
template, so the extra attribute-changed round trip this causes on every
show/hide has no measurable render cost today. If `render()` ever grows
real work, reconsider moving the show/hide bookkeeping to a separate
`@state` field.

## Accessors

### placement

> `set` **placement**(`value`): `void`

Preferred placement relative to the anchor. Invalid values are ignored (with a console warning) instead of being forwarded to floating-ui.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `Placement` |

***

### timeout

> `set` **timeout**(`value`): `void`

Delay (ms) before the tooltip appears on hover/focus. Clamped to >= 0; invalid values fall back to the 800ms default.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `number` |
