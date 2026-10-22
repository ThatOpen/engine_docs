# Option

Data node for dropdown and selector options. HTML tag: bim-option

This element has no shadow DOM — it is a lightweight data holder.
Visual rendering is handled by the parent component (bim-dropdown, bim-selector).

## Extends

- `HTMLElement`

## Accessors

### value

> `get` **value**(): `undefined` \| `string` \| `number` \| `boolean` \| `object`

The value of this option. Defaults to the label converted to its natural
JS type (boolean, number, or string) when not set explicitly.

#### Returns

`undefined` \| `string` \| `number` \| `boolean` \| `object`
