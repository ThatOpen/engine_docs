---
id: "components.Createable"
title: "Interface: Createable"
sidebar_label: "Createable"
custom_edit_url: null
---

[components](../modules/components.md).Createable

Whether this component supports create and destroy operations. This generally
applies for components that work with instances, such as clipping planes or
dimensions.

## Implemented by

- [`SimpleClipper`](../classes/components.SimpleClipper.md)
- [`SimpleDimensions`](../classes/components.SimpleDimensions.md)

## Properties

### afterCreate

• **afterCreate**: [`Event`](../classes/components.Event.md)<`any`\>

Fired after successfully calling [()](components.Createable.md#create)

#### Defined in

temp/components/base-types/base-types.ts:144

___

### afterDelete

• **afterDelete**: [`Event`](../classes/components.Event.md)<`any`\>

Fired after successfully calling [()](components.Createable.md#delete)

#### Defined in

temp/components/base-types/base-types.ts:150

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

temp/components/base-types/base-types.ts:141

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

temp/components/base-types/base-types.ts:147
