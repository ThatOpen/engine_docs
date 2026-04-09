# TechnicalDrawing

A single technical drawing — the core spatial aggregate.

## Constructors

### new TechnicalDrawing()

> **new TechnicalDrawing**(`components`): [`TechnicalDrawing`](TechnicalDrawing.md)

Brings together:
- A [three](TechnicalDrawing.md#three) (`THREE.Group`) that anchors the drawing in world space.
  All 2D geometry (projection lines, dimensions) must be added as children of
  this group so they inherit its world transform.
- A collection of [viewports](TechnicalDrawing.md#viewports), each defining an orthographic framing
  window and owning a camera that is itself a child of the container.

Moving or rotating the container repositions the entire drawing — including
all its viewport cameras — in the 3D world without affecting any local
coordinates.

---

### Rotation convention

The drawing projects geometry along its **local −Y axis**. The drawing
plane is the local **XZ plane** (Y = 0).

When rotating `drawing.three`, two constraints must hold at the same time:

1. **Projection direction** — local −Y must point toward the surface you
   want to capture.
2. **Text orientation** — local +X must point toward the right side of the
   screen when the drawing is viewed from the projection direction.
   Violating this causes annotations and dimension text to appear mirrored.

For the six standard orthographic views, use [orientTo](TechnicalDrawing.md#orientto) — it enforces
both constraints with a single call:

```ts
drawing.orientTo(new THREE.Vector3(0, -1, 0)); // top / plan
drawing.orientTo(new THREE.Vector3(0,  0, -1)); // front elevation
```

---

Typically created via [TechnicalDrawings.create](TechnicalDrawings.md#create).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `components` | [`Components`](Components.md) |

#### Returns

[`TechnicalDrawing`](TechnicalDrawing.md)

## Properties

### activeLayer

> **activeLayer**: `string` = `"0"`

Name of the layer new annotations will be assigned to when added via any
drawing system. Must be a layer registered via [DrawingLayers.create](DrawingLayers.md#create).
Defaults to `"0"`.

***

### annotations

> `readonly` **annotations**: [`DrawingAnnotations`](DrawingAnnotations.md)

Typed access to all annotation data stored on this drawing.

```ts
const dims = techDrawings.use(OBC.LinearAnnotations);
const data = drawing.annotations.getBySystem(dims);
// DataMap<annotationUuid, LinearAnnotation>
```

***

### far

> **far**: `number` = `10`

Depth of the projection capture volume, in world units, measured from the
drawing plane along the local -Y axis (the projection direction).

Used by [TechnicalDrawingHelper](TechnicalDrawingHelper.md) to visualise the volume, and by
`addProjectionFromItems` to set the far clipping plane of the
[EdgeProjector](EdgeProjector.md) automatically.

Defaults to `10`.

***

### layers

> `readonly` **layers**: [`DrawingLayers`](DrawingLayers.md)

Layer manager for this drawing.
Use it to create layers, set colors, control visibility, and subscribe to
lifecycle events for reactive UI.

```ts
drawing.layers.create("walls", { color: 0x333333 });
drawing.layers.setColor("walls", 0x888888);
drawing.layers.setVisibility("walls", false);
```

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`void`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

***

### three

> `readonly` **three**: `Group`\<`Object3DEventMap`\>

Root Three.js group for all 2D content belonging to this drawing.
All geometry (projection lines, dimensions) must be added as children so
they inherit its world transform.

***

### uuid

> `readonly` **uuid**: `string`

Unique identifier for this drawing instance.

***

### viewports

> `readonly` **viewports**: [`DrawingViewports`](DrawingViewports.md)

All viewports registered on this drawing, keyed by their UUID.

***

### world

> **world**: `null` \| [`World`](../interfaces/World.md) = `null`

The world that hosts this drawing. Set automatically by
[TechnicalDrawings.create](TechnicalDrawings.md#create) — do not assign manually unless you are
managing the drawing's scene integration yourself.

## Methods

### addProjectionFromItems()

> **addProjectionFromItems**(`modelIdMap`, `config`): `Promise`\<`void`\>

Projects the visible and hidden edges of the given BIM model items onto
this drawing using [EdgeProjector](EdgeProjector.md).

The projection direction is inferred from the drawing's current world
orientation (local `-Y` axis). The capture volume extends from the drawing
plane by [far](TechnicalDrawing.md#far) world units along that direction. Items outside the
volume are excluded automatically.

Both layer names must already exist on this drawing before calling this
method — create them with [DrawingLayers.create](DrawingLayers.md#create) beforehand.

```ts
drawing.layers.create("visible", { material: new THREE.LineBasicMaterial({ color: 0x000000 }) });
drawing.layers.create("hidden",  { material: new THREE.LineDashedMaterial({ color: 0x888888, dashSize: 0.2, gapSize: 0.1 }) });

await drawing.addProjectionFromItems(modelIdMap, {
  layers: { visible: "visible", hidden: "hidden" },
  onProgress: (msg, pct) => console.log(msg, pct),
});
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelIdMap` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | Items to project, keyed by model ID. |
| `config` | `object` | Required layer names and optional progress callback. |
| `config.layers` | `object` | - |
| `config.layers.hidden` | `string` | - |
| `config.layers.visible` | `string` | - |
| `config.onProgress`? | (`message`, `progress`?) => `void` | - |

#### Returns

`Promise`\<`void`\>

***

### addProjectionLines()

> **addProjectionLines**(`ls`, `layer`): `LineSegments`\<`BufferGeometry`\<`NormalBufferAttributes`, `BufferGeometryEventMap`\>, `Material` \| `Material`[], `Object3DEventMap`\>

Adds a `THREE.LineSegments` to this drawing's container and
automatically computes a BVH on its geometry so that [raycast](TechnicalDrawing.md#raycast) can
pick individual line segments efficiently.

Use this instead of `drawing.three.add()` whenever the geometry will
participate in picking. Plain `container.add()` still works for rendering,
but without BVH the raycast falls back to a brute-force O(n) test on every
segment — noticeably slow for dense projections.

The layer assignment and Three.js rendering-layer setup (layer 1) are handled
internally — the caller does not need to touch `userData` or `ls.layers`.
If the named layer has a color defined, it is applied to the material immediately.

```ts
drawing.layers.create("walls", { color: 0x333333 });
drawing.addProjectionLines(wallLines, "walls");
```

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ls` | `LineSegments`\<`BufferGeometry`\<`NormalBufferAttributes`, `BufferGeometryEventMap`\>, `Material` \| `Material`[], `Object3DEventMap`\> | `undefined` | The `LineSegments` to add. |
| `layer` | `string` | `"0"` | <p>Layer name to assign. Defaults to `"0"`. If the layer does not</p><p>  exist, a warning is logged and the lines fall back to `"0"`.</p> |

#### Returns

`LineSegments`\<`BufferGeometry`\<`NormalBufferAttributes`, `BufferGeometryEventMap`\>, `Material` \| `Material`[], `Object3DEventMap`\>

The same `LineSegments` instance, for chaining.

***

### alignTo()

> **alignTo**(`drawingPoints`, `worldPoints`): `void`

Aligns this drawing to a target plane in 3D world space using three
point correspondences.

Pass three points picked on the drawing (in drawing local space) and
three corresponding points picked on the 3D model (in world space).
The drawing's container will be repositioned, rotated, and uniformly
scaled so that the drawing points map to their world counterparts.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `drawingPoints` | `Vector3`[] | Three non-collinear points in drawing local space. |
| `worldPoints` | `Vector3`[] | Three corresponding points in world space. |

#### Returns

`void`

#### Throws

If either set of points is collinear or degenerate — see
  [computeAlignmentMatrix](../functions/computeAlignmentMatrix.md) for details.

***

### dispose()

> **dispose**(): `void`

Disposes all viewports, layers, annotations and removes the container (and all its Three.js geometry) from memory.

#### Returns

`void`

***

### orientTo()

> **orientTo**(`direction`): `void`

Orients the drawing to one of the six standard orthographic projection
directions.

Pass any of the six axis-aligned unit vectors. The method sets
`drawing.three.quaternion` to the correct rotation so that:
- The drawing's local **−Y** axis aligns with `direction`.
- The drawing's local **+X** axis points toward the right side of the
  screen when the drawing is viewed from that direction, ensuring
  annotations and text render without mirroring.

```ts
drawing.orientTo(new THREE.Vector3(0, -1,  0)); // top / plan
drawing.orientTo(new THREE.Vector3(0,  1,  0)); // bottom / RCP
drawing.orientTo(new THREE.Vector3(0,  0, -1)); // front elevation
drawing.orientTo(new THREE.Vector3(0,  0,  1)); // back elevation
drawing.orientTo(new THREE.Vector3(-1, 0,  0)); // right elevation
drawing.orientTo(new THREE.Vector3(1,  0,  0)); // left elevation
```

A console warning is emitted if `direction` does not match any of the six
standard axes.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `direction` | `Vector3` | Desired projection direction (need not be pre-normalized). |

#### Returns

`void`

***

### raycast()

> **raycast**(`ray`, `viewport`): `null` \| [`DrawingIntersection`](../interfaces/DrawingIntersection.md)

Intersects a pre-built ray against all layer-1 `LineSegments` in this drawing.

The caller is responsible for building the ray (via `THREE.Raycaster.setFromCamera`
or any other method) so this method stays agnostic to which camera or canvas
the pick originated from.

The returned [DrawingIntersection.point](../interfaces/DrawingIntersection.md#point) is in drawing **local space**
(XZ plane, Y = 0), ready to use for dimension creation or snapping.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `ray` | `Ray` | `undefined` | World-space ray to cast. |
| `viewport` | `null` \| [`DrawingViewport`](DrawingViewport.md) | `null` | <p>The viewport the ray was built from, if any. Pass `null`</p><p>  when picking from the 3D world camera.</p> |

#### Returns

`null` \| [`DrawingIntersection`](../interfaces/DrawingIntersection.md)

The closest intersection, or `null` if nothing was hit.

***

### toDrawingSpace()

> `static` **toDrawingSpace**(`ls`, `drawing`): `LineSegments`\<`BufferGeometry`\<`NormalBufferAttributes`, `BufferGeometryEventMap`\>, `Material` \| `Material`[], `Object3DEventMap`\>

Projects a `THREE.LineSegments` from any world-space position onto the
given drawing's local XZ plane (Y = 0), returning a new `THREE.LineSegments`
ready to be added to container.

Vertex coordinates are transformed from the input object's local space →
world space → drawing local space, then Y is zeroed.  The input object is
not modified.

```ts
const projected = TechnicalDrawing.toDrawingSpace(myIFCLines, drawing);
drawing.three.add(projected);
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ls` | `LineSegments`\<`BufferGeometry`\<`NormalBufferAttributes`, `BufferGeometryEventMap`\>, `Material` \| `Material`[], `Object3DEventMap`\> | <p>Source `LineSegments` to project. Its world matrix must be</p><p>  up-to-date (call `updateWorldMatrix(true, false)` if unsure).</p> |
| `drawing` | [`TechnicalDrawing`](TechnicalDrawing.md) | Target drawing whose local XZ plane is used as destination. |

#### Returns

`LineSegments`\<`BufferGeometry`\<`NormalBufferAttributes`, `BufferGeometryEventMap`\>, `Material` \| `Material`[], `Object3DEventMap`\>

A new `LineSegments` with the projected geometry in drawing local
  space. No material is assigned — set one before rendering.
