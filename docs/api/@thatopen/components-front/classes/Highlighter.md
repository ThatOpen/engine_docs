# Highlighter

This component allows highlighting and selecting fragments in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Highlighter). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Highlighter).

## Extends

- `Component`

## Implements

- `Disposable`
- `Eventable`

## Properties

### autoToggle

> **autoToggle**: `Set`\<`string`\>

Styles with auto toggle will be unselected when selected twice.

***

### backupColor

> **backupColor**: `null` \| `Color` = `null`

Stores the backup color before selection.

***

### colors

> **colors**: `Map`\<`string`, `null` \| `Color`\>

Stores the colors used for highlighting selections. If null, the highlighter won't color geometries (useful for selection without coloring).

***

### config

> **config**: `Required` \<[`HighlighterConfig`](../interfaces/HighlighterConfig.md)\>

Stores the configuration options for the Highlighter.

***

### enabled

> **enabled**: `boolean` = `true`

OBC.Component.enabled

#### Overrides

`OBC.Component.enabled`

***

### eventManager

> **eventManager**: `EventManager`

Manager to easily toggle and reset all events.

#### Implementation of

`OBC.Eventable.eventManager`

***

### events

> **events**: [`HighlightEvents`](../interfaces/HighlightEvents.md) = `{}`

Stores the events triggered by the Highlighter.

***

### isSetup

> **isSetup**: `boolean` = `false`

Indicates whether the Highlighter is setup.

***

### mouseMoveThreshold

> **mouseMoveThreshold**: `number` = `5`

Threshhold on how much the mouse have to move until its considered movement

***

### multiple

> **multiple**: `"none"` \| `"ctrlKey"` \| `"shiftKey"` = `"ctrlKey"`

Determines the multiple selection behavior.

***

### onAfterUpdate

> `readonly` **onAfterUpdate**: `Event` \<[`Highlighter`](Highlighter.md)\>

OBC.Updateable.onAfterUpdate

***

### onBeforeUpdate

> `readonly` **onBeforeUpdate**: `Event` \<[`Highlighter`](Highlighter.md)\>

OBC.Updateable.onBeforeUpdate

***

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### onSetup

> `readonly` **onSetup**: `Event` \<[`Highlighter`](Highlighter.md)\>

Event triggered when the Highlighter is setup.

***

### selectable

> **selectable**: `object` = `{}`

If defined, only the specified elements will be selected by the specified style.

#### Index signature

 \[`name`: `string`\]: `FragmentIdMap`

***

### selection

> **selection**: `object` = `{}`

Stores the current selection.

#### Index signature

 \[`selectionID`: `string`\]: `FRAGS.FragmentIdMap`

***

### zoomFactor

> **zoomFactor**: `number` = `1.5`

Zoom factor applied when zooming to selection.

***

### zoomToSelection

> **zoomToSelection**: `boolean` = `false`

Indicates whether to zoom to the selection when highlighting.

***

### uuid

> `static` `readonly` **uuid**: `"cb8a76f2-654a-4b50-80c6-66fd83cafd77"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### add()

> **add**(`name`, `color`): `void`

Adds a new selection with the given name and color.
Throws an error if a selection with the same name already exists.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the new selection. |
| `color` | `null` \| `Color` | The color to be used for highlighting the selection. |

#### Returns

`void`

#### Throws

Will throw an error if a selection with the same name already exists.

***

### clear()

> **clear**(`name`?, `filter`?): `void`

Clears the selection for the given name or all selections if no name is provided.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name`? | `string` | The name of the selection to clear. If not provided, clears all selections. |
| `filter`? | `FragmentIdMap` | The only items to unselect. If not provided, all items will be unselected. |

#### Returns

`void`

***

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposable.dispose

#### Returns

`Promise`\<`void`\>

#### Implementation of

`OBC.Disposable.dispose`

***

### highlight()

> **highlight**(`name`, `removePrevious`, `zoomToSelection`, `exclude`): `Promise`\<`null` \| `object`\>

Highlights a fragment based on a raycast from the mouse position.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the selection. |
| `removePrevious` | `boolean` | `true` | Whether to remove previous highlights. |
| `zoomToSelection` | `boolean` | `undefined` | Whether to zoom to the highlighted selection. |
| `exclude` | `FragmentIdMap` | `{}` | Fragments to exclude from the highlight. |

#### Returns

`Promise`\<`null` \| `object`\>

The highlighted fragment and its ID, or null if no fragment was highlighted.

#### Throws

Will throw an error if the world or a required component is not found.

#### Throws

Will throw an error if the selection does not exist.

#### Throws

Will throw an error if the fragment or its geometry is not found.

#### Throws

Will throw an error if the item ID is not found.

#### Throws

Will throw an error if the fragment does not belong to a FragmentsGroup.

***

### highlightByID()

> **highlightByID**(`name`, `fragmentIdMap`, `removePrevious`, `zoomToSelection`, `exclude`, `fillMesh`, `isPicking`): `Promise`\<`void`\>

Highlights a fragment based on a given fragment ID map.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the selection. |
| `fragmentIdMap` | `FragmentIdMap` | `undefined` | The fragment ID map to highlight. |
| `removePrevious` | `boolean` | `true` | Whether to remove previous highlights. |
| `zoomToSelection` | `boolean` | `undefined` | Whether to zoom to the highlighted selection. |
| `exclude` | `FragmentIdMap` | `{}` | Fragments to exclude from the highlight. |
| `fillMesh` | `undefined` \| `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> | `undefined` | The fill mesh to also highlight, if any. |
| `isPicking` | `boolean` | `false` | Whether this function is called when picking with the mouse. |

#### Returns

`Promise`\<`void`\>

Promise that resolves when the highlighting is complete.

#### Throws

Will throw an error if the selection does not exist.

#### Throws

Will throw an error if the fragment or its geometry is not found.

#### Throws

Will throw an error if the item ID is not found.

#### Throws

Will throw an error if the fragment does not belong to a FragmentsGroup.

***

### remove()

> **remove**(`name`): `void`

Removes the specified selection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the new selection. |

#### Returns

`void`

***

### setup()

> **setup**(`config`?): `void`

Sets up the Highlighter with the provided configuration.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config`? | `Partial` \<[`HighlighterConfig`](../interfaces/HighlighterConfig.md)\> | Optional configuration for the Highlighter. If not provided, the Highlighter will use the default configuration. |

#### Returns

`void`

#### Throws

Will throw an error if the world or a required component is not found.

#### Throws

Will throw an error if the selection already exists.

#### Throws

Will throw an error if the fragment or its geometry is not found.

#### Throws

Will throw an error if the item ID is not found.

#### Throws

Will throw an error if the fragment does not belong to a FragmentsGroup.

***

### updateFragments()

> **updateFragments**(`fragments`): `void`

Applies all the existing styles to the given fragments. Useful when combining the highlighter with streaming.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fragments` | `Iterable`\<`Fragment`\> | The list of fragment to update. |

#### Returns

`void`
