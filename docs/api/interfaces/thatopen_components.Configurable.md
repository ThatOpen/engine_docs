---
id: "thatopen_components.Configurable"
title: "Interface: Configurable<T>"
sidebar_label: "Configurable"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).Configurable

Whether this component supports to be configured.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

## Implemented by

- [`SimpleScene`](../classes/thatopen_components.SimpleScene.md)

## Properties

### config

• **config**: `Required`<`T`\>

Object holding the tool configuration. Is not meant to be edited directly, if you need
to make changes to this object, use [()](thatopen_components.Configurable.md#setup) just after the tool is instantiated.

#### Defined in

[packages/core/src/core/Types/src/interfaces.ts:128](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/interfaces.ts#L128)

___

### isSetup

• **isSetup**: `boolean`

Wether this components has been already configured.

#### Defined in

[packages/core/src/core/Types/src/interfaces.ts:117](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/interfaces.ts#L117)

___

### onSetup

• `Readonly` **onSetup**: [`Event`](../classes/thatopen_components.Event.md)<`any`\>

Fired after successfully calling [()](thatopen_components.Configurable.md#setup)

#### Defined in

[packages/core/src/core/Types/src/interfaces.ts:123](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/interfaces.ts#L123)

___

### setup

• **setup**: (`config?`: `Partial`<`T`\>) => `void` \| `Promise`<`void`\>

#### Type declaration

▸ (`config?`): `void` \| `Promise`<`void`\>

Use the provided configuration to setup the tool.

##### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `Partial`<`T`\> |

##### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[packages/core/src/core/Types/src/interfaces.ts:120](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/interfaces.ts#L120)
