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

- [`SimpleScene`](../classes/openbim_components.SimpleScene.md)

## Properties

### config

• **config**: `Required`<`T`\>

Object holding the tool configuration. Is not meant to be edited directly, if you need
to make changes to this object, use [()](openbim_components.Configurable.md#setup) just after the tool is instantiated.

#### Defined in

[src/base-types/base-types.ts:181](https://github.com/ifcjs/components/blob/e46138a/src/base-types/base-types.ts#L181)

___

### onSetup

• `Readonly` **onSetup**: [`Event`](../classes/openbim_components.Event.md)<`any`\>

Fired after successfully calling [()](openbim_components.Configurable.md#setup)

#### Defined in

[src/base-types/base-types.ts:176](https://github.com/ifcjs/components/blob/e46138a/src/base-types/base-types.ts#L176)

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

[src/base-types/base-types.ts:173](https://github.com/ifcjs/components/blob/e46138a/src/base-types/base-types.ts#L173)
