---
id: "thatopen_ui.Grid"
title: "Class: Grid"
sidebar_label: "Grid"
custom_edit_url: null
---

[@thatopen/ui](../modules/thatopen_ui.md).Grid

Heloooooooooo

## Hierarchy

- `LitElement`

  ↳ **`Grid`**

## Properties

### floating

• **floating**: `boolean` = `false`

Indicates whether the grid should be displayed in a floating state. When set to true, the grid and its children may have different styling to indicate a floating state, such as being absolutely positioned and having pointer-events set to none. This property is reflected to an attribute, allowing it to be set directly in HTML.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-grid floating></bim-grid>
```

**`Example`**

```ts
const grid = document.createElement('bim-grid');
grid.floating = true;
document.body.appendChild(grid);
```

#### Defined in

[packages/core/src/components/Grid/index.ts:58](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Grid/index.ts#L58)

___

### layout

• `Optional` **layout**: `string`

Represents the layout configuration of the grid. The layout is defined by a string identifier which corresponds to a predefined grid template in the `layouts` object of the Grid component. Setting this property updates the grid's template and triggers a reconfiguration of the grid's containers based on the new layout. If the specified layout is not defined, a warning is logged, and the layout remains unchanged. This property is reflected to an attribute, allowing it to be set directly in HTML. Changing the layout will dispatch a "layoutchange" event, which can be used to react to layout changes.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-grid layout="default"></bim-grid>
```

**`Example`**

```ts
const grid = document.createElement('bim-grid');
grid.layout = 'default';
document.body.appendChild(grid);
```

#### Defined in

[packages/core/src/components/Grid/index.ts:71](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Grid/index.ts#L71)

___

### layouts

• **layouts**: `Layouts` = `{}`

Represents a collection of predefined grid layouts for the Grid component.
Each layout is defined by a unique name, a grid template string, and a map of area names to HTMLElement instances.
The grid template string defines the structure of the grid, and the area names correspond to the grid-area property of the HTMLElement instances.
The HTMLElement instances are used to populate the grid with content.

#### Defined in

[packages/core/src/components/Grid/index.ts:79](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Grid/index.ts#L79)
