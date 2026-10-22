# EmptyState

A simple empty-state placeholder for BIM applications. HTML tag: bim-empty-state

Shows a static illustration, a message, and an optional slot for a call to
action (usually a `bim-button`). The illustration is currently dark-theme
only (translucent white over transparent).

## Extends

- `LitElement`

## Properties

### description?

> `optional` **description**: `string`

An optional secondary message displayed below the label.

#### Default

```ts
undefined
```

#### Example

```ts
<bim-empty-state label="No models" description="Load a model to get started."></bim-empty-state>
```

***

### label?

> `optional` **label**: `string`

The title displayed below the illustration.

#### Default

```ts
undefined
```

#### Example

```ts
<bim-empty-state label="No model loaded."></bim-empty-state>
```
