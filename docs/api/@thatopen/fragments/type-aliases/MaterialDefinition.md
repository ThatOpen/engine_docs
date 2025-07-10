# MaterialDefinition

> **MaterialDefinition**: `object`

Interface representing the definition of a material.

## Type declaration

### color

> **color**: `THREE.Color`

The color of the material

### customId?

> `optional` **customId**: `string`

An optional custom ID for the material

### depthTest?

> `optional` **depthTest**: `boolean`

Whether to have depth test enabled when rendering this material. When the depth test is disabled, the depth write
will also be implicitly disabled.

#### Default

```ts
true
```

### opacity

> **opacity**: `number`

The opacity of the material

### renderedFaces

> **renderedFaces**: `RenderedFaces`

The faces rendered by the material

### transparent

> **transparent**: `boolean`

Whether the material is transparent
