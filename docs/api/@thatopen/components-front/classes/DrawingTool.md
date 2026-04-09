# `abstract` DrawingTool\<TCtx\>

Base class for all drawing tools.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `TCtx` | `unknown` |

## Constructors

### new DrawingTool()

> **new DrawingTool**\<`TCtx`\>(`components`): [`DrawingTool`](DrawingTool.md)\<`TCtx`\>

Provides built-in selection tracking: stores original materials, applies a
highlight on selection, and restores them on deselect or geometry rebuild.
Subclasses call `_applySelection(group)`, `_restoreSelection()`, and
`_disposeSelection()` — they do not manage the underlying material state directly.

Lifecycle:
- **Label subscription** (`attachToDrawing` / `detachFromDrawing`): always active.
- **Pointer routing** (`onActivate` / `onDeactivate` / `onPointerMove`): only the active tool.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `components` | `Components` |

#### Returns

[`DrawingTool`](DrawingTool.md)\<`TCtx`\>

## Properties

### activeMode

> **activeMode**: `string` = `"default"`

Key of the currently active placement mode. Defaults to `"default"`.

***

### modes

> `readonly` **modes**: `DataMap`\<`string`, [`PlacementMode`](../interfaces/PlacementMode.md)\<`TCtx`\>\>

Named placement strategies for this tool. Keyed by mode name.

***

### translatable

> `readonly` **translatable**: `boolean` = `false`

When true, this tool supports free-form translation via
`translateStart` / `translateUpdate` / `translateEnd` / `translateCancel`.
LinearAnnotations and AngleAnnotations leave this false because they
reference specific geometry lines and cannot be freely repositioned.

## Accessors

### isHandleHovered

> `get` **isHandleHovered**(): `boolean`

True when the cursor is hovering over a handle of the selected annotation.

#### Returns

`boolean`

***

### isIdle

> `get` **isIdle**(): `boolean`

Returns true when no placement or edit drag is in progress.
Override in subclasses to also check tool-specific edit state.

#### Returns

`boolean`

***

### selectedUuid

> `get` **selectedUuid**(): `null` \| `string`

UUID of the currently selected annotation, or null if none is selected.

#### Returns

`null` \| `string`

## Methods

### cancel()

> **cancel**(): `void`

Cancels any in-progress placement or drag, then deselects.
Override `_onCancel` in subclasses for tool-specific revert logic.

#### Returns

`void`

***

### delete()

> **delete**(): `void`

Delete the currently selected annotation (if any).
No-op by default; override in tools that support selection.

#### Returns

`void`

***

### highlightItems()

> **highlightItems**(`uuids`): `void`

Applies multi-selection highlight colour (0x44aaff) to the given uuids.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `uuids` | `string`[] |

#### Returns

`void`

***

### onActivate()

> `abstract` **onActivate**(): `void`

Called when this tool becomes the active pointer tool.

#### Returns

`void`

***

### onDeactivate()

> `abstract` **onDeactivate**(): `void`

Called when this tool is no longer the active pointer tool.
Must restore any in-progress drag/placement to a clean state.

#### Returns

`void`

***

### onDrawingChange()

> **onDrawingChange**(`_drawing`, `_fonts`): `void`

Called by [DrawingEditor](DrawingEditor.md) whenever the active drawing changes.
Tools should re-subscribe to drawing-specific state (labels, existing
annotations) and store `drawing` / `fonts` for later use.
Passing `null` for both signals that no drawing is currently active.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_drawing` | `null` \| `TechnicalDrawing` |
| `_fonts` | `null` \| [`FontManager`](FontManager.md) |

#### Returns

`void`

***

### onPointerClick()

> **onPointerClick**(`_e`): `void`

Called by [DrawingEditor.step](DrawingEditor.md#step) — the primary click action at the
current cursor position. No-op by default; override to handle placement.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_e` | [`DrawingPointerEvent`](../interfaces/DrawingPointerEvent.md) |

#### Returns

`void`

***

### onPointerMove()

> `abstract` **onPointerMove**(`e`): `void`

Called every mousemove on the active source — used for live drag feedback.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `e` | [`DrawingPointerEvent`](../interfaces/DrawingPointerEvent.md) |

#### Returns

`void`

***

### pick()

> **pick**(`ray`): `null` \| `string`

Returns the uuid of the annotation under the given ray, or null if none.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ray` | `Ray` |

#### Returns

`null` \| `string`

***

### registerMode()

> **registerMode**(`key`, `mode`): `void`

Register a named placement mode.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |
| `mode` | [`PlacementMode`](../interfaces/PlacementMode.md)\<`TCtx`\> |

#### Returns

`void`

***

### select()

> **select**(`uuid`): `void`

Selects the annotation with the given uuid without going through placement.
Used by [DrawingEditor](DrawingEditor.md) in null-mode pick. No-op by default; override in
tools that support single selection.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `uuid` | `string` |

#### Returns

`void`

***

### setMode()

> **setMode**(`key`): `void`

Switch the active placement mode. No-op if the key is not registered.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

***

### translateCancel()

> **translateCancel**(): `void`

Cancels the current group translation and restores original positions.

#### Returns

`void`

***

### translateEnd()

> **translateEnd**(): `void`

Commits the current group translation.

#### Returns

`void`

***

### translateStart()

> **translateStart**(`_uuids`, `_origin`): `void`

Begins a group translation drag.
`uuids` — the items to move. `origin` — drawing-local grab point.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_uuids` | `string`[] |
| `_origin` | `Vector3` |

#### Returns

`void`

***

### translateUpdate()

> **translateUpdate**(`_point`): `void`

Updates the group translation drag. `point` is the current drawing-local cursor.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_point` | `Vector3` |

#### Returns

`void`
