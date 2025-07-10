# Views

The `Views` class is responsible for managing and interacting with a collection of 2D sections. It provides methods for creating, opening, closing, and managing views, as well as generating views from specific configurations such as IFC storeys or bounding boxes. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Views). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Views).

## Extends

- [`Component`](Component.md)

## Properties

### list

> `readonly` **list**: `DataMap`\<`string`, `View`\>

A readonly map that associates string keys with `View` instances.
This map is used to store and manage a collection of views.

***

### world

> **world**: `null` \| [`World`](../interfaces/World.md) = `null`

The default world to be used when creating views.

- If `world` is set to `null`, views can still specify another world directly in their instance.
- This property allows views to inherit a default world context unless explicitly overridden.

***

### defaultRange

> `static` **defaultRange**: `number` = `15`

The default range value used by the Views component.
This represents the standard range setting applied unless explicitly overridden.

## Accessors

### hasOpenViews

> `get` **hasOpenViews**(): `boolean`

Determines whether there are any open views in this component's list.

#### Returns

`boolean`

## Methods

### close()

> **close**(`id`?): `void`

Closes a view by its unique identifier and performs necessary cleanup operations.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id`? | `string` | The unique identifier of the view to be closed. If not provided, all opened views across worlds will be closed. |

#### Returns

`void`

#### Remarks

This method resets the world to use its default camera.

***

### create()

> **create**(`normal`, `point`, `config`?): `View`

Creates a new view with the specified normal vector, point, and optional configuration.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `normal` | `Vector3` | The normal vector defining the orientation of the view. |
| `point` | `Vector3` | The point in space where the view is centered. |
| `config`? | [`CreateViewConfig`](../interfaces/CreateViewConfig.md) | Optional configuration for the view creation. |

#### Returns

`View`

The newly created `View` instance.

#### Remarks

The created view will be added to the component's list data map.

***

### createElevations()

> **createElevations**(`config`?): `View`[]

Creates views representing the front, back, left, and right sides of bounding boxes for specified models or a combined bounding box of all models.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config`? | `object` | Optional configuration object for creating bounding views. |
| `config.combine`? | `boolean` | - |
| `config.modelIds`? | `RegExp`[] | - |
| `config.namingCallback`? | (`modelId`) => `object` | - |
| `config.world`? | [`World`](../interfaces/World.md) | - |

#### Returns

`View`[]

A promise that resolves to an array of `View` objects created from the boundings.

#### Remarks

The method calculates bounding boxes for the specified models, optionally combines them into a single bounding box, and creates views for the planes representing the bounding box sides.

***

### createFromIfcStoreys()

> **createFromIfcStoreys**(`config`?): `Promise`\<`View`[]\>

Creates views from IFC storeys based on the provided configuration.
This method iterates through the fragments of the model, filters storeys
based on the configuration, and generates views for each storey.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `config`? | [`CreateViewFromIfcStoreysConfig`](../interfaces/CreateViewFromIfcStoreysConfig.md) | Optional configuration for creating views from IFC storeys. |

#### Returns

`Promise`\<`View`[]\>

A promise that resolves to an array of `View` objects created from the IFC storeys.

#### Remarks

Each IfcBuilsingStorey is represented as a plane in 3D space, with its elevation adjusted by the `offset`. The created views will be added to the component's list data map.

***

### createFromPlane()

> **createFromPlane**(`plane`, `config`?): `View`

Creates a new view from the specified plane and optional configuration.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `plane` | `Plane` | The `THREE.Plane` object representing the plane to create the view from. |
| `config`? | [`CreateViewConfig`](../interfaces/CreateViewConfig.md) | Optional configuration for creating the view. |

#### Returns

`View`

The newly created `View` instance.

#### Remarks

The created view will be added to the component's list data map.

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

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`Component`](Component.md) . [`isUpdateable`](Component.md#isupdateable)

***

### open()

> **open**(`id`): `void`

Opens a view by its unique identifier. Ensures that no more than one view
is opened in the same world at a time. If the view is already open, the method
returns without performing any action.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The unique identifier of the view to open. |

#### Returns

`void`

#### Remarks

This method changes world camera to use the view's.
