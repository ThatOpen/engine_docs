# DrawingEditor

Front component that centralises all interaction for OBC.TechnicalDrawing.

## Extends

- `Component`

## Constructors

### new DrawingEditor()

> **new DrawingEditor**(`components`): [`DrawingEditor`](DrawingEditor.md)

Responsibilities:
- **Coordinate pipeline** — converts mousemove to drawing-local space + snap internally.
- **Tool routing** — forwards pointer move and click events to the active [DrawingTool](DrawingTool.md).
- **Labels** — creates and positions text meshes for all built-in systems.
- **Snap / hover visuals** — snap marker and hover highlight managed internally.

```ts
const editor = components.get(DrawingEditor);
await editor.fonts.load("https://thatopen.github.io/engine_components/resources/fonts/PlusJakartaSans-Medium.ttf");

editor.activeDrawing = drawing;
editor.setSource(world);

editor.activeTool = LinearAnnotationsTool;
const dimTool = editor.use(LinearAnnotationsTool);

canvas.addEventListener("click", () => editor.step());
document.addEventListener("keydown", (e) => { if (e.key === "Escape") editor.cancel(); });
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `components` | `Components` |

#### Returns

[`DrawingEditor`](DrawingEditor.md)

#### Overrides

`OBC.Component.constructor`

## Properties

### cursor

> **cursor**: [`DrawingPointerEvent`](../interfaces/DrawingPointerEvent.md)

Last known drawing-local cursor state, updated on every mousemove on the active source.

***

### fonts

> `readonly` **fonts**: [`FontManager`](FontManager.md)

Manages font loading and text mesh creation for all built-in tools.

***

### onActiveDrawingChange

> `readonly` **onActiveDrawingChange**: `Event_2`\<`null` \| `TechnicalDrawing`\>

Fires when [activeDrawing](DrawingEditor.md#activedrawing) is set to a new drawing.

***

### onMultiSelectionChange

> `readonly` **onMultiSelectionChange**: `Event_2`\<`void`\>

Fires whenever the multi-selection set changes (item added, removed, or cleared).

***

### onStateChanged

> `readonly` **onStateChanged**: `Event_2`\<(`"activeDrawing"` \| `"activeTool"`)[]\>

Fires with the name of the property that changed (`"activeDrawing"` or `"activeTool"`).

## Accessors

### activeDrawing

> `get` **activeDrawing**(): `null` \| `TechnicalDrawing`

The currently active drawing, or null if none has been set.

> `set` **activeDrawing**(`drawing`): `void`

Sets the active drawing and notifies all known tools via [DrawingTool.onDrawingChange](DrawingTool.md#ondrawingchange).
The active tool is deactivated first (cancelling any in-progress placement), then
all tools receive the new drawing, and the active tool is reactivated.

```ts
editor.activeDrawing = drawing;
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `drawing` | `null` \| `TechnicalDrawing` |

#### Returns

`null` \| `TechnicalDrawing`

***

### activeTool

> `set` **activeTool**(`ToolClass`): `void`

Sets the active pointer tool by tool class.
Pass `null` to deactivate all tools.

```ts
editor.activeTool = LinearAnnotationsTool;
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ToolClass` | `null` \| `ToolConstructor` |

***

### isMultiDragging

> `get` **isMultiDragging**(): `boolean`

True when a multi-drag is currently in progress.

#### Returns

`boolean`

***

### isMultiTranslatable

> `get` **isMultiTranslatable**(): `boolean`

True when all selected tools support free translation (and at least one item is selected).

#### Returns

`boolean`

***

### multiSelCount

> `get` **multiSelCount**(): `number`

Total number of items currently multi-selected across all tools.

#### Returns

`number`

## Methods

### beginMultiDrag()

> **beginMultiDrag**(`origin`): `void`

Starts a group translation drag. `origin` — drawing-local point where the drag started.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `origin` | `Vector3` |

#### Returns

`void`

***

### cancel()

> **cancel**(): `void`

Cancels any in-progress operation on the active tool and restores original state.

#### Returns

`void`

***

### cancelMultiDrag()

> **cancelMultiDrag**(): `void`

Cancels the current group translation and restores original positions.

#### Returns

`void`

***

### clearHover()

> **clearHover**(): `void`

Hides snap marker and hover highlight.

#### Returns

`void`

***

### clearMultiSelect()

> **clearMultiSelect**(): `void`

Removes all items from the multi-selection and restores their original materials.

#### Returns

`void`

***

### clearSource()

> **clearSource**(`canvas`): `void`

Removes a previously registered source element, stopping all mouse
tracking on it. Call this when leaving paper-space edit mode.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `canvas` | `HTMLElement` |

#### Returns

`void`

***

### delete()

> **delete**(): `void`

Deletes the currently selected annotation on the active tool, if any.

#### Returns

`void`

***

### deleteMultiSelected()

> **deleteMultiSelected**(): `void`

Deletes all multi-selected items from their respective systems.

#### Returns

`void`

***

### endMultiDrag()

> **endMultiDrag**(): `void`

Commits the current group translation.

#### Returns

`void`

***

### pickAny()

> **pickAny**(`ray`): `null` \| `object`

Attempts to pick any annotation from registered tools at the given ray.
Returns the first match `{ tool, uuid }`, or null if nothing is hit.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ray` | `Ray` |

#### Returns

`null` \| `object`

***

### setSource()

> **setSource**(`source`, `viewport`?): `void`

Registers an interaction source for the editor.

- Pass an OBC.World to use the world renderer's canvas (3D source).
  The previous world source, if any, is automatically removed first.
- Pass an `HTMLElement` + a OBC.DrawingViewport to register a
  paper-space viewport element as a source.

```ts
editor.setSource(world);                    // 3D canvas
editor.setSource(vpEl, drawing.viewports.get(id)); // paper-space
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `source` | `HTMLElement` \| `World` |
| `viewport`? | `DrawingViewport` |

#### Returns

`void`

***

### step()

> **step**(): `void`

Triggers the primary click action on the active tool at the current cursor position.
Replaces per-tool click wiring in the consumer:

```ts
canvas.addEventListener("click", () => editor.step());
```

#### Returns

`void`

***

### system()

> **system**\<`T`\>(`SystemClass`): `T`

Returns the system instance for the active drawing.
Use this for system-level operations (styles, list, clear, update, events).

```ts
const dims = editor.system(OBC.LinearAnnotations);
dims.styles.set("bold", { ... });
```

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `AnnotationSystem`\<`any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `SystemClass` | `Object` |

#### Returns

`T`

***

### toggleMultiSelect()

> **toggleMultiSelect**(`tool`, `uuid`): `void`

Adds or removes an item from the multi-selection.
Only translatable tools can be added — non-translatable hits are silently ignored.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `tool` | [`DrawingTool`](DrawingTool.md)\<`unknown`\> |
| `uuid` | `string` |

#### Returns

`void`

***

### updateMultiDrag()

> **updateMultiDrag**(`point`): `void`

Updates the group translation drag. `point` is the current drawing-local cursor position.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `point` | `Vector3` |

#### Returns

`void`

***

### use()

> **use**\<`T`\>(`ToolClass`): `T`

Returns the singleton tool instance for the given class, creating it if needed.
Mirrors the `TechnicalDrawings.use()` pattern.

```ts
const dimTool = editor.use(LinearAnnotationsTool);
dimTool.system.styles.set("thick", { ... });
```

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`DrawingTool`](DrawingTool.md)\<`unknown`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ToolClass` | `Object` |

#### Returns

`T`
