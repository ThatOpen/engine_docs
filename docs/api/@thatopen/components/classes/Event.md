# Event\<T\>

Simple event handler by [Jason Kleban](https://gist.github.com/JasonKleban/50cee44960c225ac1993c922563aa540). Keep in mind that if you want to remove it later, you might want to declare the callback as an object. If you want to maintain the reference to `this`, you will need to declare the callback as an arrow function.

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Methods

### add()

> **add**(`handler`): `void`

Add a callback to this event instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `handler` | `T` *extends* `void` ? () => `void` : (`data`) => `void` | the callback to be added to this event. |

#### Returns

`void`

***

### remove()

> **remove**(`handler`): `void`

Removes a callback from this event instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `handler` | `T` *extends* `void` ? () => `void` : (`data`) => `void` | the callback to be removed from this event. |

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Gets rid of all the suscribed events.

#### Returns

`void`

***

### trigger()

> **trigger**(`data`?): `void`

Triggers all the callbacks assigned to this event.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data`? | `T` |

#### Returns

`void`
