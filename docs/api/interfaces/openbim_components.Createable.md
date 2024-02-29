---
id: "openbim_components.Createable"
title: "Interface: Createable"
sidebar_label: "Createable"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).Createable

Whether this component supports create and destroy operations. This generally
applies for components that work with instances, such as clipping planes or
dimensions.

## Implemented by

- [`LengthMeasurement`](../classes/openbim_components.LengthMeasurement.md)
- [`SimpleClipper`](../classes/openbim_components.SimpleClipper.md)

## Properties

### cancelCreation

• **cancelCreation**: (`data`: `any`) => `void`

#### Type declaration

▸ (`data`): `void`

Cancels the creation process of the component, going back to the state
before starting to create.

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

##### Returns

`void`

#### Defined in

[temp/engine_components/src/base-types/base-types.ts:157](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/base-types.ts#L157)

___

### create

• **create**: (`data`: `any`) => `void`

#### Type declaration

▸ (`data`): `void`

Creates a new instance of an element (e.g. a new Dimension).

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

##### Returns

`void`

#### Defined in

[temp/engine_components/src/base-types/base-types.ts:139](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/base-types.ts#L139)

___

### delete

• **delete**: (`data`: `any`) => `void`

#### Type declaration

▸ (`data`): `void`

Deletes an existing instance of an element (e.g. a Dimension).

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

##### Returns

`void`

#### Defined in

[temp/engine_components/src/base-types/base-types.ts:166](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/base-types.ts#L166)

___

### endCreation

• **endCreation**: (`data`: `any`) => `void`

#### Type declaration

▸ (`data`): `void`

Finish the creation process of the component, successfully creating an
instance of whatever the component creates.

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

##### Returns

`void`

#### Defined in

[temp/engine_components/src/base-types/base-types.ts:148](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/base-types.ts#L148)

___

### onAfterCancel

• `Readonly` **onAfterCancel**: [`Event`](../classes/openbim_components.Event.md)<`any`\>

Fired after calling [Createable.cancelCreation](openbim_components.Createable.md#cancelcreation).

#### Defined in

[temp/engine_components/src/base-types/base-types.ts:160](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/base-types.ts#L160)

___

### onAfterCreate

• `Readonly` **onAfterCreate**: [`Event`](../classes/openbim_components.Event.md)<`any`\>

Fired after successfully calling [Createable.create](openbim_components.Createable.md#create)

#### Defined in

[temp/engine_components/src/base-types/base-types.ts:142](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/base-types.ts#L142)

___

### onAfterDelete

• `Readonly` **onAfterDelete**: [`Event`](../classes/openbim_components.Event.md)<`any`\>

Fired after successfully calling [()](openbim_components.Createable.md#delete)

#### Defined in

[temp/engine_components/src/base-types/base-types.ts:169](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/base-types.ts#L169)

___

### onBeforeCancel

• `Readonly` **onBeforeCancel**: [`Event`](../classes/openbim_components.Event.md)<`any`\>

Fired before calling [Createable.cancelCreation](openbim_components.Createable.md#cancelcreation).

#### Defined in

[temp/engine_components/src/base-types/base-types.ts:151](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/base-types.ts#L151)

___

### onBeforeDelete

• `Readonly` **onBeforeDelete**: [`Event`](../classes/openbim_components.Event.md)<`any`\>

Fired before calling [Createable.delete](openbim_components.Createable.md#delete).

#### Defined in

[temp/engine_components/src/base-types/base-types.ts:163](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/base-types.ts#L163)
