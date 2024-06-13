# ToolbarSection

A custom toolbar section web component for BIM applications. HTML tag: bim-toolbar-section

## Extends

- `LitElement`

## Implements

- [`HasName`](../interfaces/HasName.md)

## Properties

### styles

> `static` **styles**: `CSSResult`

CSS styles for the component.

#### Overrides

`LitElement.styles`

## Accessors

### labelHidden

> `set` **labelHidden**(`value`): `void`

Sets the value of the `labelHidden` property and updates the children accordingly.

#### Examples

```typescript
toolbarSection.labelHidden = true;
```

```html
<bim-toolbar-section label-hidden></bim-toolbar-section>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |
