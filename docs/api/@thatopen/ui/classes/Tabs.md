# Tabs

A custom tabs web component for BIM applications. HTML tag: bim-tabs

## Extends

- `LitElement`

## Properties

### bottom

> **bottom**: `boolean` = `false`

Indicates whether the tabs are positioned at the bottom of the container.

#### Default

```ts
false
```

***

### switchersHidden

> **switchersHidden**: `boolean` = `false`

Indicates whether the tab switchers are hidden or not.

#### Default

```ts
false
```

***

### styles

> `static` **styles**: `CSSResult`[]

CSS styles for the component.

#### Overrides

`LitElement.styles`

## Accessors

### tab

> `set` **tab**(`value`): `void`

Sets the active tab based on the provided name.

#### Remarks

This method iterates through all child elements, finds the matching tab by name,
and sets its `hidden` property to `false`. It also updates the corresponding tab switcher's
`data-active` attribute to reflect the active state.

If the provided `value` does not match any tab name, no tab will be selected.

If the `tab` property is already set to the provided `value`, this method will deselect all tabs
by setting the `tab` property to `undefined`.

#### Example

```typescript
// Set the active tab to "tab1"
tabs.tab = "tab1";

// Deselect all tabs
tabs.tab = undefined;
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `undefined` \| `string` | The name of the tab to be set as active. If `undefined`, no tab will be selected. |
