# Configurable\<T, U\>

Whether this component supports to be configured.

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `U` |

## Properties

### config

> **config**: `Required`\<`T`\>

Object holding the tool configuration. You can edit this directly to change the object.

***

### isSetup

> **isSetup**: `boolean`

Wether this components has been already configured.

***

### onSetup

> `readonly` **onSetup**: [`Event`](../classes/Event.md)\<`any`\>

Fired after successfully calling [()](Configurable.md#setup)

***

### setup()

> **setup**: (`config`?) => `void` \| `Promise`\<`void`\>

Use the provided configuration to set up the tool.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `config`? | `Partial`\<`U`\> |

#### Returns

`void` \| `Promise`\<`void`\>
