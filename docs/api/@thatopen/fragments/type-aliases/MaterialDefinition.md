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

Whether to have depth test enabled when rendering this material.

#### Default

```ts
true
```

### depthWrite?

> `optional` **depthWrite**: `boolean`

Whether to write to the depth buffer. Set to false for transparent objects
that shouldn't occlude other geometry

#### Default

```ts
true
```

### localId?

> `optional` **localId**: `number`

The local ID of the material

### opacity

> **opacity**: `number`

The opacity of the material

### preserveOriginalMaterial?

> `optional` **preserveOriginalMaterial**: `boolean`

Internal flag to preserve base material properties when applying highlights.
When true, only explicitly set properties (like color or opacity) are applied.

### renderedFaces

> **renderedFaces**: `RenderedFaces`

The faces rendered by the material

### transparent

> **transparent**: `boolean`

Whether the material is transparent
