---
id: "thatopen_ui.Label"
title: "Class: Label"
sidebar_label: "Label"
custom_edit_url: null
---

[@thatopen/ui](../modules/thatopen_ui.md).Label

Heloooooooooo

## Hierarchy

- `LitElement`

  ↳ **`Label`**

## Properties

### icon

• `Optional` **icon**: `string`

Specifies the icon to be used in the component. This property is intended for displaying an icon alongside the label or image.
When the `icon` property changes, the displayed icon updates accordingly. If the icon is hidden (controlled by `iconHidden`), changing this property will not affect the visibility of the icon.
Note: The actual rendering of the icon is managed by a nested `<bim-icon>` component in the shadow DOM.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-label icon="example-icon"></bim-label>
```

**`Example`**

```ts
const labelComponent = document.createElement('bim-label');
labelComponent.icon = 'example-icon';
document.body.appendChild(labelComponent);
```

#### Defined in

[packages/core/src/components/Label/index.ts:113](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Label/index.ts#L113)

___

### iconHidden

• **iconHidden**: `boolean` = `false`

Controls the visibility of the icon. When `true`, the icon is not rendered to the user.
Changing this property to `true` hides the icon if it was previously visible. Setting it to `false` will show the icon if it is defined.
Note: This does not affect the visibility of the label or image, only the icon.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-label icon-hidden></bim-label>
```

**`Example`**

```ts
const labelComponent = document.createElement('bim-label');
labelComponent.iconHidden = true;
document.body.appendChild(labelComponent);
```

#### Defined in

[packages/core/src/components/Label/index.ts:127](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Label/index.ts#L127)

___

### img

• `Optional` **img**: `string`

Specifies the image URL for the component. When set, an `<img>` element is rendered within the component.
Changing this property updates the source of the image. If the property is not set or removed, the image will not be displayed.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-label img="path/to/image.png"></bim-label>
```

**`Example`**

```ts
const labelComponent = document.createElement('bim-label');
labelComponent.img = 'path/to/image.png';
document.body.appendChild(labelComponent);
```

#### Defined in

[packages/core/src/components/Label/index.ts:85](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Label/index.ts#L85)

___

### label

• `Optional` **label**: `string`

Represents the text label of the component. This is the primary content displayed by the component.
When the `label` property changes, the displayed text updates to reflect the new value. If the label is hidden (controlled by `labelHidden`), changing this property will not affect the visibility of the label.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-label label="Example Label"></bim-label>
```

**`Example`**

```ts
const labelComponent = document.createElement('bim-label');
labelComponent.label = 'Example Label';
document.body.appendChild(labelComponent);
```

#### Defined in

[packages/core/src/components/Label/index.ts:71](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Label/index.ts#L71)

___

### labelHidden

• **labelHidden**: `boolean` = `false`

Controls the visibility of the label text. When `true`, the label text is not rendered to the user.
Changing this property to `true` hides the label text if it was previously visible. Setting it to `false` will show the label text if it is defined.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-label label-hidden></bim-label>
```

**`Example`**

```ts
const labelComponent = document.createElement('bim-label');
labelComponent.labelHidden = true;
document.body.appendChild(labelComponent);
```

#### Defined in

[packages/core/src/components/Label/index.ts:98](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Label/index.ts#L98)

___

### vertical

• **vertical**: `boolean` = `false`

Determines the orientation of the component. When `true`, the component's contents (label, image, and icon) are stacked vertically.
Changing this property affects the layout of the component, switching between a horizontal and vertical arrangement of its contents.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-label vertical></bim-label>
```

**`Example`**

```ts
const labelComponent = document.createElement('bim-label');
labelComponent.vertical = true;
document.body.appendChild(labelComponent);
```

#### Defined in

[packages/core/src/components/Label/index.ts:140](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Label/index.ts#L140)
