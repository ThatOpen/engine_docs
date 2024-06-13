# Hider

A component that hides or isolates fragments within a 3D scene. It extends the base Component class and provides methods to control fragment visibility and isolation. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Hider). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Hider).

## Extends

- [`Component`](Component.md)

## Properties

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

#### Overrides

[`Component`](Component.md) . [`enabled`](Component.md#enabled)

***

### uuid

> `static` `readonly` **uuid**: `"dd9ccf2d-8a21-4821-b7f6-2949add16a29"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

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

### isolate()

> **isolate**(`items`): `void`

Isolates fragments within the 3D scene by hiding all other fragments and showing only the specified ones.
It calls the `set` method twice: first to hide all fragments, and then to show only the specified ones.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `items` | `FragmentIdMap` | A map of fragment IDs and their corresponding sub-fragment IDs to be isolated. If not provided, all fragments will be isolated. |

#### Returns

`void`

***

### set()

> **set**(`visible`, `items`?): `void`

Sets the visibility of fragments within the 3D scene.
If no `items` parameter is provided, all fragments will be set to the specified visibility.
If `items` is provided, only the specified fragments will be affected.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | The visibility state to set for the fragments. |
| `items`? | `FragmentIdMap` | An optional map of fragment IDs and their corresponding sub-fragment IDs to be affected. If not provided, all fragments will be affected. |

#### Returns

`void`
