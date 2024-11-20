# Grid\<T\>

A custom grid component for web applications.

## Element

bim-grid

## Extends

- `LitElement`

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `GridLayoutComponents` | `object` |

## Properties

### floating

> **floating**: `boolean` = `false`

Indicates whether the grid should be displayed in a floating state. When set to true, the grid and its children may have different styling to indicate a floating state, such as being absolutely positioned and having pointer-events set to none. This property is reflected to an attribute, allowing it to be set directly in HTML.

#### Default

```ts
false
```

#### Examples

```ts
<bim-grid floating></bim-grid>
```

```ts
const grid = document.createElement('bim-grid');
grid.floating = true;
document.body.appendChild(grid);
```

***

### layout?

> `optional` **layout**: `string`

Represents the layout configuration of the grid. The layout is defined by a string identifier which corresponds to a predefined grid template in the `layouts` object of the Grid component. Setting this property updates the grid's template and triggers a reconfiguration of the grid's containers based on the new layout. If the specified layout is not defined, a warning is logged, and the layout remains unchanged. This property is reflected to an attribute, allowing it to be set directly in HTML. Changing the layout will dispatch a "layoutchange" event, which can be used to react to layout changes.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-grid layout="default"></bim-grid>
```

```ts
const grid = document.createElement('bim-grid');
grid.layout = 'default';
document.body.appendChild(grid);
```

***

### styles

> `static` **styles**: `CSSResult`

CSS styles for the component.

#### Overrides

`LitElement.styles`

## Accessors

### layouts

> `set` **layouts**(`value`): `void`

Represents a collection of predefined grid layouts for the Grid component.
Each layout is defined by a unique name, a grid template string, and a map of area names to HTMLElement instances or
Statefull/Stateless component definitions.
The grid template string defines the structure of the grid, and the area names correspond to the grid-area property of the HTMLElement instances.
The HTMLElement instances are used to populate the grid with content.

#### Remarks

Once defined, the layout is meant to be immutable.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`GridLayoutsDefinition`](../type-aliases/GridLayoutsDefinition.md)\<`T`\> |
