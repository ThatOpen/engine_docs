# ClipEdges

The `ClipEdges` class is responsible for managing and rendering clipped edges and fills in a ThreeJS scene based on specified styles and models. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/ClipStyler). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/ClipEdges).

## Implements

- `Disposable_2`

## Properties

### plane

> `readonly` **plane**: `Plane`

A readonly property representing the ThreeJS plane used to created the edges and fills.

***

### three

> `readonly` **three**: `Group`\<`Object3DEventMap`\>

The ThreeJS group that holds all the edges and fills together

## Accessors

### visible

> `set` **visible**(`value`): `void`

Sets the visibility of the object in the scene.
When set to `true`, the object is added to the scene if the `world` property is defined.
When set to `false`, the object is removed from its parent.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

***

### world

> `set` **world**(`value`): `void`

The world in which the edges and fills will be placed. Setting it
(re)subscribes to the renderer's `onClippingPlanesUpdated` event so
the sections re-track the active clipping planes whenever they
change (add / remove / enable / disable / view open-close).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `null` \| `World` |

## Methods

### dispose()

> **dispose**(): `void`

OBC.Disposable.dispose

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`

***

### syncStyle()

> **syncStyle**(`styleName`): `void`

Copy the visual properties (color, opacity, line width) of a shared
style onto this ClipEdges' per-instance material clones. Each section
renders with a *clone* of the style material (so it can carry its own
`clippingPlanes` and be disposed safely without affecting other
sections), so mutating the shared style material alone won't update
the rendered section. This propagates the change.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `styleName` | `string` |

#### Returns

`void`

***

### update()

> **update**(`groups`?): `Promise`\<`void`\>

Updates the clip edges based on the provided groups and their associated styles and data.
If no groups are specified, all items will be updated.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `groups`? | `string`[] | An optional array of group names to filter which items should be updated. |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the update process is complete.
