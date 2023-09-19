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

- [`LengthMeasurement`](../classes/components.LengthMeasurement.md)
- [`SimpleClipper`](../classes/components.SimpleClipper.md)

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

temp/components/base-types/base-types.ts:153

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

temp/components/base-types/base-types.ts:135

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

temp/components/base-types/base-types.ts:162

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

temp/components/base-types/base-types.ts:144

___

### onAfterCancel

• `Readonly` **onAfterCancel**: [`Event`](../classes/components.Event.md)<`any`\>

Fired after calling [cancelCreation](components.Createable.md#cancelcreation).

#### Defined in

temp/components/base-types/base-types.ts:156

___

### onAfterCreate

• `Readonly` **onAfterCreate**: [`Event`](../classes/components.Event.md)<`any`\>

Fired after successfully calling [create](components.Createable.md#create)

#### Defined in

temp/components/base-types/base-types.ts:138

___

### onAfterDelete

• `Readonly` **onAfterDelete**: [`Event`](../classes/components.Event.md)<`any`\>

Fired after successfully calling [()](components.Createable.md#delete)

#### Defined in

temp/components/base-types/base-types.ts:165

___

### onBeforeCancel

• `Readonly` **onBeforeCancel**: [`Event`](../classes/components.Event.md)<`any`\>

Fired before calling [cancelCreation](components.Createable.md#cancelcreation).

#### Defined in

temp/components/base-types/base-types.ts:147

___

### onBeforeDelete

• `Readonly` **onBeforeDelete**: [`Event`](../classes/components.Event.md)<`any`\>

Fired before calling [delete](components.Createable.md#delete).

#### Defined in

temp/components/base-types/base-types.ts:159
