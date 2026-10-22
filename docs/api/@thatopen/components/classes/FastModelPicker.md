# FastModelPicker

GPU-readback picker that identifies what's under a screen position
without going through the worker raycast.

- [getModelAt](FastModelPicker.md#getmodelat) returns the model id under the cursor.
- [getItemAt](FastModelPicker.md#getitemat) returns the item itself (`modelId` + `localId`).
- [getPointAt](FastModelPicker.md#getpointat) / [getNormalAt](FastModelPicker.md#getnormalat) return the surface point and normal.
- [getFullPick](FastModelPicker.md#getfullpick) returns all of the above from the same pick.

Every query goes through renderPick: one render of the BIM scene
into a 1×1 multiple-render-target, through a camera whose frustum covers
only the pixel under the cursor. The pick shader writes the item id,
depth and normal of that pixel into one attachment each, so they always
describe the same fragment; each query reads back only the attachments
it needs.

What can be picked is what is drawn. An item that fragments currently draws
at a reduced LOD — a line mesh carrying no `id` attribute — is not pickable,
and the pick resolves to whatever is behind it; the worker raycast tests the
authored geometry instead, so the two can disagree on small or distant
items, see collectPickables.

Item id encoding (one pixel). The id is written as `itemId + 1` so that
an unwritten pixel (all zeroes) decodes as "no item" rather than item 0:
  R = modelByte (1..254, 0 = void / unwritten)
  G = ((itemId + 1) >> 16) & 0xff
  B = ((itemId + 1) >> 8)  & 0xff
  A = (itemId + 1)         & 0xff

`modelByte` is assigned per-pick, so the assignment is stable for the
duration of the pick but doesn't grow over the session.

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### components

> **components**: [`Components`](Components.md)

Components instance this picker belongs to.

***

### debugMode

> **debugMode**: `boolean` = `false`

When `true`, mirrors the id output of the whole viewport to a debug
canvas pinned in the top-right corner. Each model shows up as a
near-uniform red band (the model byte) modulated by varying greens /
blues from the per-item id encoding.

***

### depthPackBody

> `readonly` **depthPackBody**: "\n  float packDepthValue = gl\_FragCoord.z;\n  vec4 packedDepth = vec4(\n    fract(packDepthValue \* 16777216.0),\n    fract(packDepthValue \* 65536.0),\n    fract(packDepthValue \* 256.0),\n    packDepthValue\n  );\n  packedDepth.yzw -= packedDepth.xyz \* (1.0 / 256.0);\n  packedDepth \*= (256.0 / 255.0);\n" = `DEPTH_PACK_BODY`

Just the depth packing expression (no `main`, no clipping, no output
write): given `gl_FragCoord.z` in scope it declares `vec4 packedDepth`,
packed exactly like the picker's own depth output. Contributors splice it
into their own fragment shader (after any `discard` logic of their own)
and write `packedDepth` to their output.

***

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

***

### mouse

> `readonly` **mouse**: [`Mouse`](Mouse.md)

Position helper bound to the world's canvas.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### pickDepthContributors

> `readonly` **pickDepthContributors**: `Set` \<[`PickDepthContributor`](../type-aliases/PickDepthContributor.md)\>

Depth-only contributors (point clouds, splats: geometry that is not a
fragments model). When a pick asks for depth ([getPointAt](FastModelPicker.md#getpointat),
[getFullPick](FastModelPicker.md#getfullpick)), each contributor re-renders its geometry with a
[depthPackBody](FastModelPicker.md#depthpackbody) material into a separate single-attachment target
(bound, cleared and scissored to the pixel under the cursor, depth shared
between contributors so the nearest wins). The picker then keeps whichever
is nearer to the camera: the BIM surface or the contributor surface. When
a contributor wins, the normal is `null` (contributors write no normal).

Contributors carry no item ids, so [getItemAt](FastModelPicker.md#getitemat) / [getModelAt](FastModelPicker.md#getmodelat)
are untouched. A contributor must leave renderer state as it found it
(the picker restores target / scissor / clear colour afterwards).

WebGL only for now: under a WebGPU renderer contributors are skipped (the
pack body is GLSL).

***

### world

> **world**: [`World`](../interfaces/World.md)

World this picker renders against.

***

### MAX\_MODELS

> `static` `readonly` **MAX\_MODELS**: `254` = `254`

Maximum models the picker can disambiguate in a single pick. Capped
by the 8-bit `modelByte`. In practice we never approach this.

## Methods

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### getFullPick()

> **getFullPick**(`position`?): `Promise`\<`null` \| `object`\>

One-shot pick that produces the full result shape consumers need:
`{ modelId, localId, point, normal, distance }`, all from the same
render.

Returns `null` if the cursor is over empty space, the id output
decodes to the void sentinel, or the depth round-trip yields the
far plane.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `position`? | `Vector2` |

#### Returns

`Promise`\<`null` \| `object`\>

***

### getItemAt()

> **getItemAt**(`position`?): `Promise`\<`null` \| `object`\>

Returns `{ modelId, localId }` for the item under the given screen
position, or `null` if the cursor is over empty space.

The vertex `id` attribute encodes the internal **itemId** (the
FlatBuffer `sample.item()` index, key for `boxes.sampleOf`) rather
than the user-facing localId, which unblocks the snap path's O(1)
sample lookup. The trade-off: resolving `localId` takes one worker
round-trip. Internal consumers that only need itemId (e.g. snap) can
read it from the result directly.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `position`? | `Vector2` | <p>Normalized device coords. Defaults to the</p><p>  picker's last known mouse position.</p> |

#### Returns

`Promise`\<`null` \| `object`\>

***

### getModelAt()

> **getModelAt**(`position`?): `Promise`\<`null` \| `string`\>

Returns the model id under the given screen position, or `null` if
the cursor is over empty space.

Cheaper than [getItemAt](FastModelPicker.md#getitemat) because we don't resolve the
`localId`; we just read the model byte.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `position`? | `Vector2` | <p>Normalized device coords. Defaults to the</p><p>  picker's last known mouse position.</p> |

#### Returns

`Promise`\<`null` \| `string`\>

***

### getNormalAt()

> **getNormalAt**(`position`?): `Promise`\<`null` \| `Vector3`\>

Returns the world-space surface normal under the cursor, or `null`
if the cursor is over empty space.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `position`? | `Vector2` | <p>Normalized device coords. Defaults to the</p><p>  picker's last known mouse position.</p> |

#### Returns

`Promise`\<`null` \| `Vector3`\>

***

### getPointAt()

> **getPointAt**(`position`?): `Promise`\<`null` \| `Vector3`\>

Returns the world-space point under the given screen position, or
`null` if the cursor is over empty space.

Reads the packed `gl_FragCoord.z` of the picked pixel and unprojects
it through the pick camera. Useful for things like "set camera orbit
center to what the user just clicked on".

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `position`? | `Vector2` | <p>Normalized device coords. Defaults to the</p><p>  picker's last known mouse position.</p> |

#### Returns

`Promise`\<`null` \| `Vector3`\>

***

### setDebugMode()

> **setDebugMode**(`enabled`): `void`

Toggle the debug overlay. When enabled the picker mirrors the id
output of the whole viewport to a small canvas pinned in the
top-right corner so you can see what the picks see.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`
