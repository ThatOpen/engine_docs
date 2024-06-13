# Label

A custom label web component for BIM applications. HTML tag: bim-label

## Extends

- `LitElement`

## Properties

### icon?

> `optional` **icon**: `string`

Specifies the icon to be used in the component. This property is intended for displaying an icon alongside the label or image.
When the `icon` property changes, the displayed icon updates accordingly. If the icon is hidden (controlled by `iconHidden`), changing this property will not affect the visibility of the icon.
Note: The actual rendering of the icon is managed by a nested `<bim-icon>` component in the shadow DOM.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-label icon="solar:settings-bold">My Label</bim-label>
```

```ts
const labelComponent = document.createElement('bim-label');
labelComponent.icon = 'example-icon';
document.body.appendChild(labelComponent);
```

***

### iconHidden

> **iconHidden**: `boolean` = `false`

Controls the visibility of the icon. When `true`, the icon is not rendered to the user.
Changing this property to `true` hides the icon if it was previously visible. Setting it to `false` will show the icon if it is defined.
Note: This does not affect the visibility of the label or image, only the icon.

#### Default

```ts
false
```

#### Examples

```ts
<bim-label icon-hidden>My Label</bim-label>
```

```ts
const labelComponent = document.createElement('bim-label');
labelComponent.iconHidden = true;
document.body.appendChild(labelComponent);
```

***

### img?

> `optional` **img**: `string`

Specifies the image URL for the component. When set, an `<img>` element is rendered within the component.
Changing this property updates the source of the image. If the property is not set or removed, the image will not be displayed.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-label img="path/to/image.png">My Label</bim-label>
```

```ts
const labelComponent = document.createElement('bim-label');
labelComponent.img = 'path/to/image.png';
document.body.appendChild(labelComponent);
```

***

### labelHidden

> **labelHidden**: `boolean` = `false`

Controls the visibility of the label text. When `true`, the label text is not rendered to the user.
Changing this property to `true` hides the label text if it was previously visible. Setting it to `false` will show the label text if it is defined.

#### Default

```ts
false
```

#### Examples

```ts
<bim-label label-hidden>My Label</bim-label>
```

```ts
const labelComponent = document.createElement('bim-label');
labelComponent.labelHidden = true;
document.body.appendChild(labelComponent);
```

***

### vertical

> **vertical**: `boolean` = `false`

Determines the orientation of the component. When `true`, the component's contents (label, image, and icon) are stacked vertically.
Changing this property affects the layout of the component, switching between a horizontal and vertical arrangement of its contents.

#### Default

```ts
false
```

#### Examples

```ts
<bim-label vertical icon="solar:settings-bold">My Label</bim-label>
```

```ts
const labelComponent = document.createElement('bim-label');
labelComponent.vertical = true;
document.body.appendChild(labelComponent);
```

***

### styles

> `static` **styles**: `CSSResult`

CSS styles for the component.

#### Overrides

`LitElement.styles`
