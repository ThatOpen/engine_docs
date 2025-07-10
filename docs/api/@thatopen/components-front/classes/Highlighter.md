# Highlighter

This component allows highlighting and selecting fragments in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Highlighter). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Highlighter).

## Extends

- `Component`

## Implements

- `Disposable_2`
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

> **multiple**: `"none"` \| `"shiftKey"` \| `"ctrlKey"` = `"ctrlKey"`

Determines the multiple selection behavior.

***

### onAfterUpdate

> `readonly` **onAfterUpdate**: `Event_2` \<[`Highlighter`](Highlighter.md)\>

OBC.Updateable.onAfterUpdate

***

### onBeforeUpdate

> `readonly` **onBeforeUpdate**: `Event_2` \<[`Highlighter`](Highlighter.md)\>

OBC.Updateable.onBeforeUpdate

***

### onDisposed

> `readonly` **onDisposed**: `Event_2`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### onSetup

> `readonly` **onSetup**: `Event_2` \<[`Highlighter`](Highlighter.md)\>

Event triggered when the Highlighter is setup.

***

### selectable

> **selectable**: `object` = `{}`

If defined, only the specified elements will be selected by the specified style.

#### Index signature

 \[`name`: `string`\]: `OBC.ModelIdMap`

***

### selection

> **selection**: `object` = `{}`

Stores the current selection.

#### Index signature

 \[`selectionID`: `string`\]: `OBC.ModelIdMap`

***

### styles

> `readonly` **styles**: `DataMap`\<`string`, `null` \| `Omit`\<`MaterialDefinition`, `"customId"`\>\>

Stores the styles used for highlighting selections. If null, the highlighter won't color geometries (useful for selection without coloring).

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

### ~~add()~~

> **add**(`style`): `void`

Adds a new selection with the given name and color.
Throws an error if a selection with the same name already exists.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `style` | `MaterialDefinition` & `object` |

#### Returns

`void`

#### Throws

Will throw an error if a selection with the same name already exists.

#### Deprecated

Use highlighter.styles.set() instead

***

### clear()

> **clear**(`name`?, `_filter`?): `Promise`\<`void`\>

Clears the selection for the given name or all selections if no name is provided.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name`? | `string` | The name of the selection to clear. If not provided, clears all selections. |
| `_filter`? | `ModelIdMap` | - |

#### Returns

`Promise`\<`void`\>

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

> **highlight**(`name`, `removePrevious`, `zoomToSelection`, `exclude`): `Promise`\<`void`\>

Highlights a fragment based on a raycast from the mouse position.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the selection. |
| `removePrevious` | `boolean` | `true` | Whether to remove previous highlights. |
| `zoomToSelection` | `boolean` | `undefined` | Whether to zoom to the highlighted selection. |
| `exclude` | `null` \| `ModelIdMap` | `null` | Fragments to exclude from the highlight. |

#### Returns

`Promise`\<`void`\>

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

> **highlightByID**(`name`, `modelIdMap`, `removePrevious`, `zoomToSelection`, `exclude`, `isPicking`): `Promise`\<`void`\>

Highlights a fragment based on a given fragment ID map.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the selection. |
| `modelIdMap` | `ModelIdMap` | `undefined` | The fragment ID map to highlight. |
| `removePrevious` | `boolean` | `true` | Whether to remove previous highlights. |
| `zoomToSelection` | `boolean` | `undefined` | Whether to zoom to the highlighted selection. |
| `exclude` | `null` \| `ModelIdMap` | `null` | Fragments to exclude from the highlight. |
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

### ~~remove()~~

> **remove**(`name`): `Promise`\<`void`\>

Removes the specified selection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the new selection. |

#### Returns

`Promise`\<`void`\>

#### Deprecated

use highlighter.styles.delete

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

### updateColors()

> **updateColors**(): `Promise`\<`void`\>

Updates the colors of highlighted fragments based on the current selection and styles.

#### Returns

`Promise`\<`void`\>

Resolves when all highlight updates and core state updates are completed.
