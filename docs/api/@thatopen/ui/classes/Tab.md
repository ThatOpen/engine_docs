# Tab

A custom tab web component for BIM applications. HTML tag: bim-tab

## Extends

- `LitElement`

## Properties

### icon?

> `optional` **icon**: `string`

The icon of the tab. This property is optional and can be used to display an icon next to the tab's label or name.

***

### label?

> `optional` **label**: `string`

The label of the tab. This property is optional and can be used to display a custom label instead of the tab's name.

***

### name

> **name**: `string`

The name of the tab. If not provided, a default name will be assigned based on its position in the parent element.

***

### styles

> `static` **styles**: `CSSResult`

CSS styles for the component.

#### Overrides

`LitElement.styles`

## Accessors

### hidden

> `set` **hidden**(`value`): `void`

Sets the hidden state of the tab.

#### Fires

hiddenchange - Dispatched when the hidden state changes.

#### Example

```typescript
const tab = document.querySelector('bim-tab');
tab.hidden = true; // hides the tab
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The new hidden state. If `true`, the tab will be hidden. If `false`, the tab will be visible. |
