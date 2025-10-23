# Hider

A component that manages visibility of fragments within a 3D scene. It extends the base Component class and provides methods to control fragment visibility and isolation. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Hider). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Hider).

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

### getVisibilityMap()

> **getVisibilityMap**(`state`, `modelIds`?): `Promise`\<`Record`\<`string`, `number`[]\>\>

Asynchronously retrieves a map of model IDs to their corresponding item IDs based on visibility state.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `state` | `boolean` | The visibility state to filter items by. |
| `modelIds`? | `string`[] | Optional array of model IDs to filter the items. If not provided, all models will be considered. |

#### Returns

`Promise`\<`Record`\<`string`, `number`[]\>\>

A promise that resolves to a ModelIdMap record where the keys are model IDs and the values are arrays of item IDs that match the visibility state.

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any, any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any, any>`

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

### isSerializable()

> **isSerializable**(): `this is Serializable<any, Record<string, any>>`

Whether is component is Serializable.

#### Returns

`this is Serializable<any, Record<string, any>>`

#### Inherited from

[`Component`](Component.md) . [`isSerializable`](Component.md#isserializable)

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

> **isolate**(`modelIdMap`): `Promise`\<`void`\>

Isolates fragments within the 3D scene by hiding all other fragments and showing only the specified ones.
It calls the `set` method twice: first to hide all fragments, and then to show only the specified ones.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelIdMap` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | A map of model IDs and their corresponding itemIds to be isolated. |

#### Returns

`Promise`\<`void`\>

***

### set()

> **set**(`visible`, `modelIdMap`?): `Promise`\<`void`\>

Sets the visibility of fragment items within the 3D scene.
If no `modelIdMap` parameter is provided, all fragments will be set to the specified visibility.
If it is provided, only the specified fragment items will be affected.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | The visibility state to set for the items. |
| `modelIdMap`? | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | An optional map of modelIds and their corresponding itemIds to be affected. If not provided, all fragment items will be affected. |

#### Returns

`Promise`\<`void`\>

***

### toggle()

> **toggle**(`modelIdMap`): `Promise`\<`void`\>

Toggles the visibility of specified items in the fragments.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelIdMap` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | An object where the keys are model IDs and the values are arrays of local IDs representing the fragments to be toggled. |

#### Returns

`Promise`\<`void`\>

A promise that resolves when all visibility toggles and the core update are complete.
