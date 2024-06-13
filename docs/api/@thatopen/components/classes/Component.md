# `abstract` Component

Components are the building blocks of this library. Components are singleton elements that contain specific functionality. For instance, the Clipper Component can create, delete and handle 3D clipping planes. Components must be unique (they can't be instanced more than once per Components instance), and have a static UUID that identifies them uniquely. The can be accessed globally using the [Components](Components.md) instance.

## Extends

- [`Base`](Base.md)

## Extended by

- [`Disposer`](Disposer.md)
- [`Raycasters`](Raycasters.md)
- [`Worlds`](Worlds.md)
- [`Grids`](Grids.md)
- [`Clipper`](Clipper.md)
- [`Cullers`](Cullers.md)
- [`MiniMaps`](MiniMaps.md)
- [`BoundingBoxer`](BoundingBoxer.md)
- [`Classifier`](Classifier.md)
- [`Exploder`](Exploder.md)
- [`Hider`](Hider.md)
- [`IfcLoader`](IfcLoader.md)
- [`FragmentsManager`](FragmentsManager.md)
- [`IfcGeometryTiler`](IfcGeometryTiler.md)
- [`IfcPropertiesTiler`](IfcPropertiesTiler.md)
- [`IfcJsonExporter`](IfcJsonExporter.md)
- [`IfcRelationsIndexer`](IfcRelationsIndexer.md)
- [`IfcPropertiesManager`](IfcPropertiesManager.md)
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

> **isConfigurable**(): `this is Configurable<any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any>`

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

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`Base`](Base.md) . [`isUpdateable`](Base.md#isupdateable)
