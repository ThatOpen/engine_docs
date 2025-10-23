# `abstract` Component

Components are the building blocks of this library. Components are singleton elements that contain specific functionality. For instance, the Clipper Component can create, delete and handle 3D clipping planes. Components must be unique (they can't be instanced more than once per Components instance), and have a static UUID that identifies them uniquely. The can be accessed globally using the [Components](Components.md) instance.

## Extends

- [`Base`](Base.md)

## Extended by

- [`ConfigManager`](ConfigManager.md)
- [`Disposer`](Disposer.md)
- [`Grids`](Grids.md)
- [`Worlds`](Worlds.md)
- [`Raycasters`](Raycasters.md)
- [`Clipper`](Clipper.md)
- [`Views`](Views.md)
- [`VertexPicker`](VertexPicker.md)
- [`FragmentsManager`](FragmentsManager.md)
- [`IfcLoader`](IfcLoader.md)
- [`Hider`](Hider.md)
- [`BoundingBoxer`](BoundingBoxer.md)
- [`ItemsFinder`](ItemsFinder.md)
- [`Classifier`](Classifier.md)
- [`BCFTopics`](BCFTopics.md)
- [`IDSSpecifications`](IDSSpecifications.md)
- [`MeasurementUtils`](MeasurementUtils.md)

## Properties

### enabled

> `abstract` **enabled**: `boolean`

Whether this component is active or not. The behaviour can vary depending
on the type of component. E.g. a disabled dimension tool will stop creating
dimensions, while a disabled camera will stop moving. A disabled component
will not be updated automatically each frame.

## Methods

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any, any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any, any>`

#### Inherited from

[`Base`](Base.md) . [`isConfigurable`](Base.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`Base`](Base.md) . [`isDisposeable`](Base.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`Base`](Base.md) . [`isHideable`](Base.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`Base`](Base.md) . [`isResizeable`](Base.md#isresizeable)

***

### isSerializable()

> **isSerializable**(): `this is Serializable<any, Record<string, any>>`

Whether is component is Serializable.

#### Returns

`this is Serializable<any, Record<string, any>>`

#### Inherited from

[`Base`](Base.md) . [`isSerializable`](Base.md#isserializable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`Base`](Base.md) . [`isUpdateable`](Base.md#isupdateable)
