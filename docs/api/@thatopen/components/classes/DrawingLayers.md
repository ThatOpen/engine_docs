# DrawingLayers

Manages the named layers of a [TechnicalDrawing](TechnicalDrawing.md).

## Extends

- `DataMap`\<`string`, [`DrawingLayer`](../interfaces/DrawingLayer.md)\>

## Constructors

### new DrawingLayers()

> **new DrawingLayers**(`container`): [`DrawingLayers`](DrawingLayers.md)

Accessible via `drawing.layers`. Each layer owns a `THREE.LineBasicMaterial`
that is shared across all projection `LineSegments` assigned to it —
mutating the material (e.g. via [setColor](DrawingLayers.md#setcolor)) is reflected on every line
immediately without any scene traversal. Annotation systems always use their
own style material and are not affected by layer materials.

Extends `DataMap<string, DrawingLayer>` so consumers get reactive events
(`onItemSet`, `onItemDeleted`, …) directly on `drawing.layers`.

Layer `"0"` always exists and cannot be removed.

```ts
drawing.layers.create("walls", { material: new THREE.LineBasicMaterial({ color: 0x333333 }) });
drawing.layers.setColor("walls", 0x888888);
drawing.layers.setVisibility("walls", false);
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `container` | `Group`\<`Object3DEventMap`\> |

#### Returns

[`DrawingLayers`](DrawingLayers.md)

#### Overrides

`FRAGS.DataMap<string, DrawingLayer>.constructor`

## Methods

### assign()

> **assign**(`object`, `name`): `void`

Assigns an object to a named layer, applies the layer's material (if the
object is a `LineSegments`), and immediately reflects the layer's current
visibility state.

Use this instead of setting `object.userData.layer` directly so that
the material and visibility are always in sync at insertion time.

Does nothing if the layer does not exist.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `object` | `Object3D`\<`Object3DEventMap`\> | The Three.js object to assign. |
| `name` | `string` | Layer name. |

#### Returns

`void`

***

### create()

> **create**(`name`, `options`?): [`DrawingLayer`](../interfaces/DrawingLayer.md)

Creates a new layer. If a layer with the same name already exists, returns
the existing one without modifying it.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Unique layer name. |
| `options`? | `object` | <p>Optional material and visibility. If no material is given,</p><p>  a default black `LineBasicMaterial` is created. Visibility defaults to `true`.</p> |
| `options.material`? | `LineBasicMaterial` | - |
| `options.visible`? | `boolean` | - |

#### Returns

[`DrawingLayer`](../interfaces/DrawingLayer.md)

The (possibly pre-existing) layer object.

***

### resolveColor()

`Internal`

> **resolveColor**(`name`): `undefined` \| `number`

Used by [DxfExporter](DxfExporter.md) to read the layer color for DXF output.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `number`

***

### setColor()

> **setColor**(`name`, `color`): `void`

Updates the color of a layer's material and fires reactive events.

Because all `LineSegments` on the same layer share the same material
instance, the change is reflected immediately on all of them — no scene
traversal is required.

Does nothing if the layer does not exist.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Layer name. |
| `color` | `number` | Hex color (e.g. `0xff0000`). |

#### Returns

`void`

***

### setMaterial()

> **setMaterial**(`name`, `material`): `void`

Replaces the material of a layer and updates all `LineSegments` currently
assigned to it. The previous material is disposed.

Does nothing if the layer does not exist.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Layer name. |
| `material` | `LineBasicMaterial` | New material to assign. |

#### Returns

`void`

***

### setVisibility()

> **setVisibility**(`name`, `visible`): `void`

Shows or hides all objects assigned to the given layer.

Does nothing if the layer does not exist.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Layer name. |
| `visible` | `boolean` | `true` to show, `false` to hide. |

#### Returns

`void`
