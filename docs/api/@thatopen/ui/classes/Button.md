# Button

Heloooooooooo

## Extends

- `LitElement`

## Properties

### active

> **active**: `boolean` = `false`

A boolean attribute which, if present, indicates that the button is active.

#### Default

```ts
false
```

#### Examples

```ts
<bim-button label="Click me" active></bim-button>
```

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
         button.active = true;
```

***

### disabled

> **disabled**: `boolean` = `false`

A boolean attribute which, if present, indicates that the button is disabled.

#### Default

```ts
false
```

#### Examples

```ts
<bim-button label="Click me" disabled></bim-button>
```

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
         button.disabled = true;
```

***

### icon?

> `optional` **icon**: `string`

The icon to be displayed on the button.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-button icon="my-icon"></bim-button>
```

```ts
const button = document.createElement('bim-button');
         button.icon = 'my-icon';
```

***

### label?

> `optional` **label**: `string`

The label to be displayed on the button.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-button label="Click me"></bim-button>
```

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
```

***

### labelHidden

> **labelHidden**: `boolean` = `false`

A boolean attribute which, if present, indicates that the label should be hidden.

#### Default

```ts
false
```

#### Examples

```ts
<bim-button label="Click me" label-hidden></bim-button>
```

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
         button.labelHidden = true;
```

***

### tooltipText?

> `optional` **tooltipText**: `string`

The text of the tooltip to be displayed when hovering over the button.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-button label="Click me" tooltip-text="This is a tooltip"></bim-button>
```

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
         button.tooltipText = 'This is a tooltip';
```

***

### tooltipTime?

> `optional` **tooltipTime**: `number`

The time (in milliseconds) to wait before showing the tooltip when hovering over the button.

#### Default

```ts
700
```

#### Examples

```ts
<bim-button label="Click me" tooltip-time="1000"></bim-button>
```

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
         button.tooltipTime = 1000;
```

***

### tooltipTitle?

> `optional` **tooltipTitle**: `string`

The title of the tooltip to be displayed when hovering over the button.

#### Default

```ts
undefined
```

#### Examples

```ts
<bim-button label="Click me" tooltip-title="Button Tooltip"></bim-button>
```

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
         button.tooltipTitle = 'Button Tooltip';
```

***

### tooltipVisible

> **tooltipVisible**: `boolean` = `false`

A boolean attribute which, if present, indicates that the tooltip should be visible.

#### Default

```ts
false
```

#### Examples

```ts
<bim-button label="Click me" tooltip-visible></bim-button>
```

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
         button.tooltipVisible = true;
```

***

### vertical

> **vertical**: `boolean` = `false`

A boolean attribute which, if present, indicates that the button should be displayed vertically.

#### Default

```ts
false
```

#### Examples

```ts
<bim-button label="Click me" vertical></bim-button>
```

```ts
const button = document.createElement('bim-button');
         button.label = 'Click me';
         button.vertical = true;
```
