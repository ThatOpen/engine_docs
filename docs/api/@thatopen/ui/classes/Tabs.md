# Tabs

A custom tabs web component for BIM applications. HTML tag: bim-tabs

## Extends

- `LitElement`

## Properties

### bottom

> **bottom**: `boolean` = `false`

Indicates whether the tabs are positioned at the bottom of the container.

***

### label?

> `optional` **label**: `string`

Accessible label forwarded as `aria-label` on the tablist.

***

### switchersHidden

> **switchersHidden**: `boolean` = `false`

Hides the tab switcher bar.

## Accessors

### tab

> `set` **tab**(`value`): `void`

The name of the currently active tab. Set to `undefined` to deselect all tabs.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `string` |
