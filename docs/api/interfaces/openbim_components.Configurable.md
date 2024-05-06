---
id: "openbim_components.Configurable"
title: "Interface: Configurable<T>"
sidebar_label: "Configurable"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).Configurable

Whether this component supports to be configured.

## Type parameters

| Name | Type                               |
| :--- | :--------------------------------- |
| `T`  | extends `Record`<`string`, `any`\> |

## Implemented by

- [`ScreenCuller`](../classes/openbim_components.ScreenCuller.md)
- [`SimpleScene`](../classes/openbim_components.SimpleScene.md)

## Properties

### config

• **config**: `Required`<`T`\>

Object holding the tool configuration. Is not meant to be edited directly, if you need
to make changes to this object, use [()](openbim_components.Configurable.md#setup) just after the tool is instantiated.

#### Defined in

[src/base-types/base-types.ts:188](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-types.ts#L188)

---

### isSetup

• **isSetup**: `boolean`

Wether this components has been already configured.

#### Defined in

[src/base-types/base-types.ts:177](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-types.ts#L177)

---

### onSetup

• `Readonly` **onSetup**: [`Event`](../classes/openbim_components.Event.md)<`any`\>

Fired after successfully calling [()](openbim_components.Configurable.md#setup)

#### Defined in

[src/base-types/base-types.ts:183](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-types.ts#L183)

---

### setup

• **setup**: (`config?`: `Partial`<`T`\>) => `Promise`<`void`\>

#### Type declaration

▸ (`config?`): `Promise`<`void`\>

Use the provided configuration to setup the tool.

##### Parameters

| Name      | Type            |
| :-------- | :-------------- |
| `config?` | `Partial`<`T`\> |

##### Returns

`Promise`<`void`\>

#### Defined in

[src/base-types/base-types.ts:180](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-types.ts#L180)
