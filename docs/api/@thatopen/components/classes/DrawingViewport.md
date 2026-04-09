# DrawingViewport

Represents a framed orthographic window into a [TechnicalDrawing](TechnicalDrawing.md).

## Constructors

### new DrawingViewport()

> **new DrawingViewport**(`config`): [`DrawingViewport`](DrawingViewport.md)

The viewport lives in the drawing's local coordinate system (XZ plane, Y = 0).
Its [camera](DrawingViewport.md#camera) must be added as a child of the drawing's container so that
any world-space transform applied to the container automatically moves the camera.

The camera uses **layer 1** exclusively, so only geometry explicitly assigned
to layer 1 (projection lines, dimensions) is visible in paper-space renders.

Local coordinate convention:
- X right → world +X
- Y up (screen) → world -Z
- Normal (out of plane) → world +Y

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `config` | [`DrawingViewportConfig`](../interfaces/DrawingViewportConfig.md) |

#### Returns

[`DrawingViewport`](DrawingViewport.md)

## Properties

### camera

> `readonly` **camera**: `OrthographicCamera`

The Three.js orthographic camera for this viewport.
Add it to the drawing container via DrawingViewports.add.

***

### name

> **name**: `string`

Human-readable label for this viewport.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`void`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

***

### uuid

> `readonly` **uuid**: `string`

Unique identifier for this viewport instance.

## Accessors

### bbox

> `get` **bbox**(): `Box3`

Axis-aligned bounding box of this viewport in world drawing space (Y = 0).
Used by [clipLine](DrawingViewport.md#clipline) and PDF/DXF exporters.

Because screen-up = world −Z, the world Z range visible to the camera is
[−top, −bottom], not [bottom, top].

#### Returns

`Box3`

***

### drawingScale

> `get` **drawingScale**(): `number`

Drawing scale denominator (e.g. 100 = 1:100).

#### Returns

`number`

***

### helper

> `get` **helper**(): [`DrawingViewportHelper`](DrawingViewportHelper.md)

The [DrawingViewportHelper](DrawingViewportHelper.md) for this viewport.

The helper is created lazily on first access and cached. It is a
`THREE.Group` on layer 0, so it is visible to the perspective camera but
invisible to the viewport's own orthographic camera (layer 1 only).

Use [helperVisible](DrawingViewport.md#helpervisible) to attach/detach it to the drawing container
automatically, or manage it manually with `drawing.three.add/remove`.

#### Returns

[`DrawingViewportHelper`](DrawingViewportHelper.md)

***

### helperVisible

> `get` **helperVisible**(): `boolean`

Shows or hides the [DrawingViewportHelper](DrawingViewportHelper.md) by attaching it to or
removing it from the drawing's container group.

Setting this to `true` before the viewport has been registered via
`DrawingViewports.add()` has no effect until registration occurs.

#### Returns

`boolean`

***

### localXAxis

> `get` **localXAxis**(): `Vector3`

Local X axis direction (world +X).

#### Returns

`Vector3`

***

### localYAxis

> `get` **localYAxis**(): `Vector3`

Local Y axis direction (world -Z).

#### Returns

`Vector3`

***

### normal

> `get` **normal**(): `Vector3`

Drawing plane normal (world +Y).

#### Returns

`Vector3`

***

### size

> `get` **size**(): `Vector2`

Viewport size in millimetres (based on local units × 1000).

#### Returns

`Vector2`

## Methods

### clipLine()

> **clipLine**(`line`): `null` \| `Line3`

Clips a line segment to this viewport's bounding box.
Returns `null` when the line is entirely outside the viewport.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `line` | `Line3` |

#### Returns

`null` \| `Line3`

***

### dispose()

> **dispose**(): `void`

Destroys this viewport. The camera must be removed from its parent separately.

#### Returns

`void`

***

### setContainer()

`Internal`

> **setContainer**(`container`): `void`

Called by `DrawingViewports.add` after the viewport is registered.
Stores a reference to the drawing container so that [helperVisible](DrawingViewport.md#helpervisible)
can attach the helper automatically.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `container` | `Group`\<`Object3DEventMap`\> |

#### Returns

`void`
