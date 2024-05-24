---
id: "thatopen_ui.Button"
title: "Class: Button"
sidebar_label: "Button"
custom_edit_url: null
---

[@thatopen/ui](../modules/thatopen_ui.md).Button

Heloooooooooo

## Hierarchy

- `LitElement`

  ↳ **`Button`**

## Properties

### active

• **active**: `boolean` = `false`

A boolean attribute which, if present, indicates that the button is active.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-button label="Click me" active></bim-button>
```

**`Example`**

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
         button.active = true;
```

#### Defined in

[packages/core/src/components/Button/index.ts:162](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Button/index.ts#L162)

___

### disabled

• **disabled**: `boolean` = `false`

A boolean attribute which, if present, indicates that the button is disabled.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-button label="Click me" disabled></bim-button>
```

**`Example`**

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
         button.disabled = true;
```

#### Defined in

[packages/core/src/components/Button/index.ts:173](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Button/index.ts#L173)

___

### icon

• `Optional` **icon**: `string`

The icon to be displayed on the button.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-button icon="my-icon"></bim-button>
```

**`Example`**

```ts
const button = document.createElement('bim-button');
         button.icon = 'my-icon';
```

#### Defined in

[packages/core/src/components/Button/index.ts:184](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Button/index.ts#L184)

___

### label

• `Optional` **label**: `string`

The label to be displayed on the button.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-button label="Click me"></bim-button>
```

**`Example`**

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
```

#### Defined in

[packages/core/src/components/Button/index.ts:140](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Button/index.ts#L140)

___

### labelHidden

• **labelHidden**: `boolean` = `false`

A boolean attribute which, if present, indicates that the label should be hidden.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-button label="Click me" label-hidden></bim-button>
```

**`Example`**

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
         button.labelHidden = true;
```

#### Defined in

[packages/core/src/components/Button/index.ts:151](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Button/index.ts#L151)

___

### tooltipText

• `Optional` **tooltipText**: `string`

The text of the tooltip to be displayed when hovering over the button.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-button label="Click me" tooltip-text="This is a tooltip"></bim-button>
```

**`Example`**

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
         button.tooltipText = 'This is a tooltip';
```

#### Defined in

[packages/core/src/components/Button/index.ts:242](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Button/index.ts#L242)

___

### tooltipTime

• `Optional` **tooltipTime**: `number`

The time (in milliseconds) to wait before showing the tooltip when hovering over the button.

**`Default`**

```ts
700
```

**`Example`**

```ts
<bim-button label="Click me" tooltip-time="1000"></bim-button>
```

**`Example`**

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
         button.tooltipTime = 1000;
```

#### Defined in

[packages/core/src/components/Button/index.ts:207](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Button/index.ts#L207)

___

### tooltipTitle

• `Optional` **tooltipTitle**: `string`

The title of the tooltip to be displayed when hovering over the button.

**`Default`**

```ts
undefined
```

**`Example`**

```ts
<bim-button label="Click me" tooltip-title="Button Tooltip"></bim-button>
```

**`Example`**

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
         button.tooltipTitle = 'Button Tooltip';
```

#### Defined in

[packages/core/src/components/Button/index.ts:230](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Button/index.ts#L230)

___

### tooltipVisible

• **tooltipVisible**: `boolean` = `false`

A boolean attribute which, if present, indicates that the tooltip should be visible.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-button label="Click me" tooltip-visible></bim-button>
```

**`Example`**

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
         button.tooltipVisible = true;
```

#### Defined in

[packages/core/src/components/Button/index.ts:218](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Button/index.ts#L218)

___

### vertical

• **vertical**: `boolean` = `false`

A boolean attribute which, if present, indicates that the button should be displayed vertically.

**`Default`**

```ts
false
```

**`Example`**

```ts
<bim-button label="Click me" vertical></bim-button>
```

**`Example`**

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
         button.vertical = true;
```

#### Defined in

[packages/core/src/components/Button/index.ts:195](https://github.com/ThatOpen/engine_ui-components//blob/1c232b0/packages/core/src/components/Button/index.ts#L195)
