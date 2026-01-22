# FastModelPicker

A fast model picker that uses color coding to identify fragment models under the mouse cursor. This is much faster than raycasting for simple model identification.

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### components

> **components**: [`Components`](Components.md)

The components instance to which this FastModelPicker belongs.

***

### debugMode

> **debugMode**: `boolean` = `false`

Whether debug mode is enabled. When enabled, shows the color-coded canvas.

***

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

***

### mouse

> `readonly` **mouse**: [`Mouse`](Mouse.md)

The position of the mouse in the screen.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### world

> **world**: [`World`](../interfaces/World.md)

A reference to the world instance to which this FastModelPicker belongs.
This is used to access the camera and scene.

## Methods

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### getModelAt()

> **getModelAt**(`position`?): `Promise`\<`null` \| `string`\>

Gets the model ID at the given screen position.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `position`? | `Vector2` | Optional screen position. If not provided, uses current mouse position. |

#### Returns

`Promise`\<`null` \| `string`\>

The model ID at the position, or null if no model is found.

***

### setDebugMode()

> **setDebugMode**(`enabled`): `void`

Enables or disables debug mode.
When enabled, shows a canvas with the color-coded render.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`void`
