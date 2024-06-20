# Exploder

The Exploder component is responsible for managing the explosion of 3D model fragments (generally by floor). 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Exploder). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Exploder).

## Extends

- [`Component`](Component.md)

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

#### Overrides

[`Component`](Component.md) . [`enabled`](Component.md#enabled)

***

### groupName

> **groupName**: `string` = `"spatialStructures"`

The group name used for the explosion animation.
This property specifies the group of fragments that will be affected by the explosion.
Default value is "storeys".

***

### height

> **height**: `number` = `10`

The height of the explosion animation.
This property determines the vertical distance by which fragments are moved during the explosion.
Default value is 10.

***

### list

> **list**: `Set`\<`string`\>

A set of strings representing the exploded items.
This set is used to keep track of which items have been exploded.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### uuid

> `static` `readonly` **uuid**: `"d260618b-ce88-4c7d-826c-6debb91de3e2"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any>`

#### Inherited from

[`Component`](Component.md) . [`isConfigurable`](Component.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`Component`](Component.md) . [`isDisposeable`](Component.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`Component`](Component.md) . [`isHideable`](Component.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`Component`](Component.md) . [`isResizeable`](Component.md#isresizeable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`Component`](Component.md) . [`isUpdateable`](Component.md#isupdateable)

***

### set()

> **set**(`active`): `void`

Sets the explosion state of the fragments.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | A boolean indicating whether to activate or deactivate the explosion. |

#### Returns

`void`

#### Remarks

This method applies a vertical transformation to the fragments based on the `active` parameter.
If `active` is true, the fragments are moved upwards by a distance determined by the `height` property.
If `active` is false, the fragments are moved back to their original position.

The method also keeps track of the exploded items using the `list` set.

#### Throws

Will throw an error if the `Classifier` or `FragmentsManager` components are not found in the `components` system.
