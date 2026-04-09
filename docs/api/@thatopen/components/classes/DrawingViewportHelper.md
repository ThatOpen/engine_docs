# DrawingViewportHelper

Visualises the bounds of a `DrawingViewport` as a rectangle in the 3D scene.

## Extends

- `Group`

## Constructors

### new DrawingViewportHelper()

> **new DrawingViewportHelper**(`viewport`): [`DrawingViewportHelper`](DrawingViewportHelper.md)

Works exactly like the built-in Three.js helpers (e.g. `THREE.CameraHelper`):
the result is a plain `THREE.Group` you can add wherever you like in the scene
graph.  It renders on **layer 0**, so it is visible to the perspective camera
but invisible to the viewport's own orthographic camera (which only renders
layer 1).

Typically you do not construct this directly — use
`DrawingViewport.helperVisible = true` instead, which attaches the helper to
the drawing container automatically.

When editable is `true`, two kinds of interaction are enabled:

- **Resize** — hover one of the eight handle spheres (corners + edge midpoints)
  and drag to resize the viewport in that direction.
- **Move** — hover the border rectangle itself and drag to translate the
  entire viewport while keeping its width and height constant.

In both cases the border and the hovered element turn orange as visual
feedback, and [isDragging](DrawingViewportHelper.md#isdragging) becomes `true` for the duration of the drag.

The class contains no browser API references and is safe in Node.js
environments; the consumer forwards events:

```ts
container.addEventListener("mousemove", (e) => {
  raycaster.setFromCamera(getNDC(e), camera);
  viewport.helper.onPointerMove(raycaster.ray);
});
container.addEventListener("mousedown", (e) => {
  raycaster.setFromCamera(getNDC(e), camera);
  viewport.helper.onPointerDown(raycaster.ray);
});
container.addEventListener("mouseup", () => viewport.helper.onPointerUp());
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `viewport` | `ViewportBoundsController` |

#### Returns

[`DrawingViewportHelper`](DrawingViewportHelper.md)

#### Overrides

`THREE.Group.constructor`

## Accessors

### isDragging

> `get` **isDragging**(): `boolean`

`true` while either a resize or a move drag is in progress.

#### Returns

`boolean`

***

### movable

> `get` **movable**(): `boolean`

When `true`, hovering and dragging the border rectangle translates the
entire viewport while keeping its width and height constant.

#### Returns

`boolean`

***

### resizable

> `get` **resizable**(): `boolean`

When `true`, the eight handle spheres are shown and resize drag is enabled.

#### Returns

`boolean`

## Methods

### dispose()

> **dispose**(): `void`

Releases all Three.js geometry and material resources.

#### Returns

`void`

***

### onPointerDown()

> **onPointerDown**(`ray`): `void`

Forward `mousedown` events here.

- If a handle is hovered, begins a **resize drag**.
- If the border is hovered (and no handle), begins a **move drag**.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ray` | `Ray` | World-space ray at the moment of the press. |

#### Returns

`void`

***

### onPointerMove()

> **onPointerMove**(`ray`): `void`

Forward `mousemove` events here.

- **Resize drag active**: updates the bound(s) controlled by the active handle.
- **Move drag active**: translates all four bounds by the cursor delta,
  preserving the viewport's width and height.
- **No drag**: highlights handles on hover; highlights the border when the
  cursor is over it and no handle is hovered.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ray` | `Ray` | World-space ray, e.g. from `THREE.Raycaster.setFromCamera`. |

#### Returns

`void`

***

### onPointerUp()

> **onPointerUp**(): `void`

Forward `mouseup` events here to end any active drag.

#### Returns

`void`

***

### update()

> **update**(): `void`

Rebuilds the border geometry and repositions all handles to match the
current viewport bounds.  Called automatically by the viewport whenever
any bound changes; you rarely need to call this yourself.

#### Returns

`void`
