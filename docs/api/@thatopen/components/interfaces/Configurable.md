# Configurable\<T\>

Whether this component supports to be configured.

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* `Record`\<`string`, `any`\> |

## Properties

### config

> **config**: `Required`\<`T`\>

Object holding the tool configuration. Is not meant to be edited directly, if you need
to make changes to this object, use [()](Configurable.md#setup) just after the tool is instantiated.

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

Use the provided configuration to setup the tool.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `config`? | `Partial`\<`T`\> |

#### Returns

`void` \| `Promise`\<`void`\>
