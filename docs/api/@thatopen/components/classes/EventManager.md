# EventManager

Simple class to easily toggle and reset event lists.

## Properties

### list

> **list**: `Set` \<[`Event`](Event.md)\<`any`\> \| [`AsyncEvent`](AsyncEvent.md)\<`any`\>\>

The list of events managed by this instance.

## Methods

### add()

> **add**(`events`): `void`

Adds events to this manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `events` | `Iterable` \<[`Event`](Event.md)\<`any`\> \| [`AsyncEvent`](AsyncEvent.md)\<`any`\>\> | the events to add. |

#### Returns

`void`

***

### remove()

> **remove**(`events`): `void`

Removes events from this manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `events` | `Iterable` \<[`Event`](Event.md)\<`any`\> \| [`AsyncEvent`](AsyncEvent.md)\<`any`\>\> | the events to remove. |

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Resets all the events managed by this instance.

#### Returns

`void`

***

### set()

> **set**(`active`): `void`

Sets all the events managed by this instance as enabled or disabled.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | whether to turn on or off the events. |

#### Returns

`void`
