---
id: "thatopen_components.Createable"
title: "Interface: Createable"
sidebar_label: "Createable"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).Createable

Whether this component supports create and destroy operations. This generally
applies for components that work with instances, such as clipping planes or
dimensions.

## Implemented by

- [`Clipper`](../classes/thatopen_components.Clipper.md)

## Properties

### cancelCreation

• `Optional` **cancelCreation**: (`data`: `any`) => `void`

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

[packages/core/src/core/Types/src/interfaces.ts:106](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/interfaces.ts#L106)

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

[packages/core/src/core/Types/src/interfaces.ts:94](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/interfaces.ts#L94)

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

[packages/core/src/core/Types/src/interfaces.ts:109](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/interfaces.ts#L109)

___

### endCreation

• `Optional` **endCreation**: (`data`: `any`) => `void`

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

[packages/core/src/core/Types/src/interfaces.ts:100](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/interfaces.ts#L100)
