# TechnicalDrawingHelper

Visualises a [TechnicalDrawing](TechnicalDrawing.md)'s projection volume in the 3D scene and exposes three gizmo anchors for interactive control.

## Extends

- `Group`

## Constructors

### new TechnicalDrawingHelper()

> **new TechnicalDrawingHelper**(`drawing`): [`TechnicalDrawingHelper`](TechnicalDrawingHelper.md)

Works exactly like the built-in Three.js helpers (e.g. `THREE.CameraHelper`):
add it as a child of `drawing.three` so it inherits the drawing's world
transform automatically.

It renders on **layer 0** — visible to the perspective camera, invisible to
the drawing's orthographic cameras (which only render layer 1).

The helper draws three things:
- A rectangular frame on the drawing plane (Y = 0 in drawing local space).
- Four pillar lines dropping from each corner along the projection direction
  (local −Y) to the far boundary.
- A matching rectangle at the far boundary.

### Interactive control via gizmos

Three `THREE.Object3D` anchors are exposed for `TransformControls`:

| Anchor | Controls | Constrained axis |
|---|---|---|
| [farHandle](TechnicalDrawingHelper.md#farhandle) | `drawing.far` | local Y |
| [widthHandle](TechnicalDrawingHelper.md#widthhandle) | [width](TechnicalDrawingHelper.md#width) (symmetric) | local X |
| [heightHandle](TechnicalDrawingHelper.md#heighthandle) | [height](TechnicalDrawingHelper.md#height) (symmetric) | local Z |

Use the corresponding `attach*Gizmo` methods instead of configuring the
gizmos manually — they enforce the correct axis constraints, local space,
and change listeners automatically:

```ts
const helper = new TechnicalDrawingHelper(drawing);
helper.width = 20;
helper.height = 15;
drawing.three.add(helper);

// Main gizmo — full translate + rotate on drawing.three
const mainGizmo = new TransformControls(camera, domElement);
mainGizmo.attach(drawing.three);
scene.add(mainGizmo);

// Depth gizmo — controls drawing.far
const farGizmo = new TransformControls(camera, domElement);
scene.add(farGizmo);
helper.attachFarGizmo(farGizmo);

// Width gizmo
const widthGizmo = new TransformControls(camera, domElement);
scene.add(widthGizmo);
helper.attachWidthGizmo(widthGizmo);

// Height gizmo
const heightGizmo = new TransformControls(camera, domElement);
scene.add(heightGizmo);
helper.attachHeightGizmo(heightGizmo);
```

Call [update](TechnicalDrawingHelper.md#update) after changing [width](TechnicalDrawingHelper.md#width), [height](TechnicalDrawingHelper.md#height), or
`drawing.far` programmatically to rebuild the geometry.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `drawing` | `DrawingProjectionSource` |

#### Returns

[`TechnicalDrawingHelper`](TechnicalDrawingHelper.md)

#### Overrides

`THREE.Group.constructor`

## Properties

### farHandle

> `readonly` **farHandle**: `Object3D`\<`Object3DEventMap`\>

Gizmo anchor positioned at the centre of the bottom frame.
Pass a `TransformControls` instance to [attachFarGizmo](TechnicalDrawingHelper.md#attachfargizmo) — do not
manipulate this object's position directly.

***

### height

> **height**: `number` = `10`

Height of the drawing frame indicator along the local Z axis, in world
units. Call [update](TechnicalDrawingHelper.md#update) after changing this value programmatically.

***

### heightHandle

> `readonly` **heightHandle**: `Object3D`\<`Object3DEventMap`\>

Gizmo anchor positioned at the bottom-edge midpoint of the top frame.
Pass a `TransformControls` instance to [attachHeightGizmo](TechnicalDrawingHelper.md#attachheightgizmo) — do not
manipulate this object's position directly.

***

### width

> **width**: `number` = `10`

Width of the drawing frame indicator along the local X axis, in world
units. Call [update](TechnicalDrawingHelper.md#update) after changing this value programmatically.

***

### widthHandle

> `readonly` **widthHandle**: `Object3D`\<`Object3DEventMap`\>

Gizmo anchor positioned at the right-edge midpoint of the top frame.
Pass a `TransformControls` instance to [attachWidthGizmo](TechnicalDrawingHelper.md#attachwidthgizmo) — do not
manipulate this object's position directly.

## Methods

### attachFarGizmo()

> **attachFarGizmo**(`gizmo`): `void`

Configures a `TransformControls` instance to control `drawing.far` and
attaches it to the [farHandle](TechnicalDrawingHelper.md#farhandle).

The gizmo is constrained to the drawing's local Y axis (the projection
direction) and wired to update `drawing.far` on every change. Call this
once — calling it again on the same gizmo accumulates listeners.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `gizmo` | [`AxisGizmoLike`](../interfaces/AxisGizmoLike.md) | A `TransformControls` instance (or any [AxisGizmoLike](../interfaces/AxisGizmoLike.md)). |

#### Returns

`void`

***

### attachHeightGizmo()

> **attachHeightGizmo**(`gizmo`): `void`

Configures a `TransformControls` instance to control [height](TechnicalDrawingHelper.md#height) and
attaches it to the [heightHandle](TechnicalDrawingHelper.md#heighthandle).

The gizmo is constrained to the drawing's local Z axis. Height grows
symmetrically — dragging the bottom-edge handle outward expands both sides.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `gizmo` | [`AxisGizmoLike`](../interfaces/AxisGizmoLike.md) | A `TransformControls` instance (or any [AxisGizmoLike](../interfaces/AxisGizmoLike.md)). |

#### Returns

`void`

***

### attachWidthGizmo()

> **attachWidthGizmo**(`gizmo`): `void`

Configures a `TransformControls` instance to control [width](TechnicalDrawingHelper.md#width) and
attaches it to the [widthHandle](TechnicalDrawingHelper.md#widthhandle).

The gizmo is constrained to the drawing's local X axis. Width grows
symmetrically — dragging the right-edge handle outward expands both sides.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `gizmo` | [`AxisGizmoLike`](../interfaces/AxisGizmoLike.md) | A `TransformControls` instance (or any [AxisGizmoLike](../interfaces/AxisGizmoLike.md)). |

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Releases all Three.js geometry and material resources.

#### Returns

`void`

***

### update()

> **update**(): `void`

Rebuilds the helper geometry and repositions all gizmo anchors to match
the current [width](TechnicalDrawingHelper.md#width), [height](TechnicalDrawingHelper.md#height), and `drawing.far`. Call this
whenever any of those values change programmatically.

#### Returns

`void`
