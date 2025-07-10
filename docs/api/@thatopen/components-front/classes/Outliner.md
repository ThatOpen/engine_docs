# Outliner

This component allows adding a colored outline with thickness to fragments in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Outliner). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Outliner).

## Extends

- `Component`

## Implements

- `Disposable_2`

## Properties

### styles

> **styles**: `DataSet`\<`string`\>

A set of Highlighter styles to be linked with the outliner.

#### Remarks

Use this or addItems directly but avoid using both at the same time to prevent unwanted results

***

### uuid

> `static` `readonly` **uuid**: `"2fd3bcc5-b3b6-4ded-9f64-f47a02854a10"`

A unique identifier for the component.

This UUID is used to register the component within the Components system.

## Accessors

### color

> `set` **color**(`value`): `void`

Sets the color for the outline.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `Color` |

***

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

***

### fillColor

> `set` **fillColor**(`value`): `void`

Sets the fill color for the outline effect in the postproduction pipeline.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `Color` |

***

### fillOpacity

> `set` **fillOpacity**(`value`): `void`

Sets the fill opacity for the outline pass in the postproduction renderer.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

***

### thickness

> `set` **thickness**(`value`): `void`

Sets the thickness of the outline effect in the post-production renderer.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

***

### world

> `set` **world**(`value`): `void`

The world where the outliner operates.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| `World` |

## Methods

### addItems()

> **addItems**(`modelIdMap`): `Promise`\<`void`\>

Adds items to be outlined.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelIdMap` | `ModelIdMap` | An object representing the model ID map to be added. |

#### Returns

`Promise`\<`void`\>

A promise that resolves once the outliner has been updated with the new model ID map.

***

### clean()

> **clean**(): `void`

Cleans up the outlines.

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

### removeItems()

> **removeItems**(`modelIdMap`): `Promise`\<`void`\>

Removes items from the current outlines.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelIdMap` | `ModelIdMap` | An object representing the mapping of model IDs to be removed. |

#### Returns

`Promise`\<`void`\>

A promise that resolves once the update operation is complete.

***

### update()

> **update**(`modelIdMap`): `Promise`\<`void`\>

Updates the outline effect with the current meshes from the mesher component.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `modelIdMap` | `ModelIdMap` |

#### Returns

`Promise`\<`void`\>
