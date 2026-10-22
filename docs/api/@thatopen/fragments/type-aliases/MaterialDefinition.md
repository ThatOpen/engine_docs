# MaterialDefinition

> **MaterialDefinition**: `object`

Interface representing the definition of a material.

## Type declaration

### \_explicitProps?

> `optional` **\_explicitProps**: `string`[]

Internal array tracking which properties were explicitly set by the caller.
Used with preserveOriginalMaterial to avoid overwriting original material
properties with default values during serialization.

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

### polygonOffsetFactor?

> `optional` **polygonOffsetFactor**: `number`

Depth-bias factor mapped to THREE's polygonOffsetFactor. When either
this or polygonOffsetUnits is a non-zero number, polygonOffset is
enabled on the produced material. Useful to resolve z-fighting between
exactly coplanar faces (e.g. an element sitting exactly on the surface
that hosts it).

#### Default

```ts
0 (no depth bias)
```

### polygonOffsetUnits?

> `optional` **polygonOffsetUnits**: `number`

Depth-bias units mapped to THREE's polygonOffsetUnits. When either
this or polygonOffsetFactor is a non-zero number, polygonOffset is
enabled on the produced material.

#### Default

```ts
0 (no depth bias)
```

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
