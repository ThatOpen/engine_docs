# Hoverer

The `Hoverer` component applies a material overlay to whichever
fragment item is under the cursor. It identifies the hovered item
via the GPU-readback picker (no worker raycast) and visualizes it by
attaching small proxy meshes that share the source tiles' geometry
attributes — no `Mesher.get`, no fresh `BufferGeometry` per hover, no
GPU memory allocation per item.

Per-hover cost when the chunks cache is warm: one picker render +
4-byte readback + a couple of proxy attach/detach calls. First hover
on a new item adds one worker round-trip for the chunks query; the
result is cached forever (until the model unloads). 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Hoverer). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Hoverer).

## Extends

- `Component`

## Implements

- `Disposable_2`

## Properties

### fade

> **fade**: `boolean` = `true`

When `true`, fade the hover material's opacity in and out over
[fadeDuration](Hoverer.md#fadeduration). When `false`, the visualization pops in and
out instantly with no animation.

***

### fadeDuration

> **fadeDuration**: `number` = `200`

Fade animation duration in milliseconds. Ignored when [fade](Hoverer.md#fade) is `false`.

***

### mode

> **mode**: [`HovererMode`](../enumerations/HovererMode.md) = `HovererMode.MOUSE_MOVE`

Cursor-input mode. See [HovererMode](../enumerations/HovererMode.md). Defaults to
`MOUSE_MOVE` — picking is fast enough that there's no reason to
wait for the cursor to settle.

## Methods

### clear()

> **clear**(): `void`

Manually detach the current hover visualization. The next
mousemove will identify a fresh item and re-attach.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Disposable.dispose

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`

***

### hover()

> **hover**(): `Promise`\<`void`\>

Run a single hover detection at the current mouse position. Public
so callers can drive it manually if they're not using the
automatic mousemove listener.

#### Returns

`Promise`\<`void`\>
