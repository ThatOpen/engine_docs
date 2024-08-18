# Outliner

This component allows adding a colored outline with thickness to fragments in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Highlighter). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Outliner).

## Extends

- `Component`

## Implements

- `Disposable`

## Properties

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### world?

> `optional` **world**: `World`

The world where the outliner operates.

***

### uuid

> `static` `readonly` **uuid**: `"2fd3bcc5-b3b6-4ded-9f64-f47a02854a10"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Accessors

### enabled

> `get` **enabled**(): `boolean`

OBC.Component.enabled

> `set` **enabled**(`value`): `void`

OBC.Component.enabled

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

## Methods

### add()

> **add**(`name`, `items`): `void`

Adds fragments to the specified outlining style.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the style. |
| `items` | `FragmentIdMap` | The fragments to add to the style. |

#### Returns

`void`

***

### clear()

> **clear**(`name`?): `void`

Clears the specified style. If no style is specified, clear all styles.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name`? | `string` | Optional: the style to clear. |

#### Returns

`void`

***

### create()

> **create**(`name`, `material`): `void`

Creates a new outlining style.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the style. |
| `material` | `MeshBasicMaterial` | The material to use for the style. The color controls the line color and the opacity controls the line thickness. |

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

OBC.Disposable.dispose

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`
