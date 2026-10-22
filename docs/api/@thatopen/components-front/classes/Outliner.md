# Outliner

This component allows adding colored outlines with thickness to fragments in
a 3D scene. Supports multiple named outline groups so different selections
can be outlined with different colors / thicknesses at the same time. 📕
[Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Outliner). 📘
[API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Outliner).

## Extends

- `Component`

## Implements

- `Disposable_2`

## Properties

### styles

> **styles**: `DataSet`\<`string`\>

A set of Highlighter styles linked with the default outline group.

#### Remarks

Use this or addItems directly but avoid using both at the same
time to prevent unwanted results. For per-group routing, wire the
Highlighter events manually with a group name:
`highlighter.events.select.onHighlight.add(m => outliner.addItems(m, "my-group"))`

***

### uuid

> `static` `readonly` **uuid**: `"2fd3bcc5-b3b6-4ded-9f64-f47a02854a10"`

A unique identifier for the component.

This UUID is used to register the component within the Components system.

## Accessors

### color

> `get` **color**(): `Color`

Outline color for the default group.

#### Returns

`Color`

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

> `get` **fillColor**(): `Color`

Fill color for the default group.

#### Returns

`Color`

***

### fillOpacity

> `get` **fillOpacity**(): `number`

Fill opacity for the default group.

#### Returns

`number`

***

### thickness

> `get` **thickness**(): `number`

Thickness for the default group.

#### Returns

`number`

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

> **addItems**(`modelIdMap`, `group`): `Promise`\<`void`\>

Adds items to be outlined in a specific group (defaults to "default").

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `modelIdMap` | `ModelIdMap` | `undefined` |
| `group` | `string` | `DEFAULT_GROUP` |

#### Returns

`Promise`\<`void`\>

***

### bindStyle()

> **bindStyle**(`style`, `group`): `boolean`

Wires a Highlighter style to a specific outline group. Equivalent to
`outliner.styles.add(style)` but routes the items to the given group
instead of the default.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `style` | `string` | `undefined` |
| `group` | `string` | `DEFAULT_GROUP` |

#### Returns

`boolean`

***

### clean()

> **clean**(`group`?): `void`

Cleans up outlines. Without arguments, clears every group. With a group
name, clears that group only.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `group`? | `string` |

#### Returns

`void`

***

### configure()

> **configure**(`name`, `config`): `void`

Updates an existing group's visual configuration.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `config` | [`OutlineGroupConfig`](../interfaces/OutlineGroupConfig.md) |

#### Returns

`void`

***

### create()

> **create**(`name`, `config`): `void`

Creates (or reconfigures) a named outline group. Each group renders with
its own outline color, fill and thickness independently of the others.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Unique group name. "default" is reserved for the legacy singular API and cannot be removed. |
| `config` | [`OutlineGroupConfig`](../interfaces/OutlineGroupConfig.md) | Optional visual configuration. |

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

### list()

> **list**(): `string`[]

Returns the names of all currently created groups.

#### Returns

`string`[]

***

### remove()

> **remove**(`name`): `void`

Removes a group together with all items routed to it.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

***

### removeItems()

> **removeItems**(`modelIdMap`, `group`): `Promise`\<`void`\>

Removes items from a specific group (defaults to "default").

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `modelIdMap` | `ModelIdMap` | `undefined` |
| `group` | `string` | `DEFAULT_GROUP` |

#### Returns

`Promise`\<`void`\>

***

### ~~update()~~

> **update**(`modelIdMap`?, `group`?): `Promise`\<`void`\>

Adds `modelIdMap` to the group's selection (the default group if omitted)
and refreshes that group's outline. Identical to [addItems](Outliner.md#additems); calling
it with no map just refreshes the group without changing what it holds.

Note this changed: `modelIdMap` used to be accepted and ignored, so the
call was always a plain refresh and the group's selection only ever came
from [addItems](Outliner.md#additems). It now joins the group's map, which is what the
argument always claimed to do. Pass nothing for the old behaviour.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `modelIdMap`? | `ModelIdMap` |
| `group`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Deprecated

call [addItems](Outliner.md#additems) instead.
