# Createable

Whether this component supports create and destroy operations. This generally applies for components that work with instances, such as clipping planes or dimensions.

## Properties

### cancelCreation()?

> `optional` **cancelCreation**: (`data`) => `void`

Cancels the creation process of the component, going back to the state
before starting to create.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

***

### create()

> **create**: (`data`) => `void`

Creates a new instance of an element (e.g. a new Dimension).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

***

### delete()

> **delete**: (`data`) => `void`

Deletes an existing instance of an element (e.g. a Dimension).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

***

### endCreation()?

> `optional` **endCreation**: (`data`) => `void`

Finish the creation process of the component, successfully creating an
instance of whatever the component creates.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`
