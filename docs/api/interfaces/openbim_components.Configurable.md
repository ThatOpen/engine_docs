---
id: "openbim_components.Configurable"
title: "Interface: Configurable<T>"
sidebar_label: "Configurable"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).Configurable

Whether this component supports to be configured.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> |

## Implemented by

- [`ScreenCuller`](../classes/openbim_components.ScreenCuller.md)
- [`SimpleScene`](../classes/openbim_components.SimpleScene.md)

## Properties

### config

• **config**: `Required`<`T`\>

Object holding the tool configuration. Is not meant to be edited directly, if you need
to make changes to this object, use [()](openbim_components.Configurable.md#setup) just after the tool is instantiated.

#### Defined in

[temp/components/src/base-types/base-types.ts:185](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/base-types.ts#L185)

___

### onSetup

• `Readonly` **onSetup**: [`Event`](../classes/openbim_components.Event.md)<`any`\>

Fired after successfully calling [()](openbim_components.Configurable.md#setup)

#### Defined in

[temp/components/src/base-types/base-types.ts:180](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/base-types.ts#L180)

___

### setup

• **setup**: (`config?`: `Partial`<`T`\>) => `Promise`<`void`\>

#### Type declaration

▸ (`config?`): `Promise`<`void`\>

Use the provided configuration to setup the tool.

##### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `Partial`<`T`\> |

##### Returns

`Promise`<`void`\>

#### Defined in

[temp/components/src/base-types/base-types.ts:177](https://github.com/IFCjs/components/blob/0c38d20/src/base-types/base-types.ts#L177)
