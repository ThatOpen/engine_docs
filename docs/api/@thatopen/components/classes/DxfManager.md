# DxfManager

Manages DXF import and export for technical drawings.

## Extends

- [`Component`](Component.md)

## Constructors

### new DxfManager()

> **new DxfManager**(`components`): [`DxfManager`](DxfManager.md)

```ts
const manager = components.get(OBC.DxfManager);
const dxf = manager.exporter.export([{ drawing, viewports: [{ viewport }] }]);
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `components` | [`Components`](Components.md) |

#### Returns

[`DxfManager`](DxfManager.md)

#### Overrides

`Component.constructor`

## Properties

### exporter

> `readonly` **exporter**: [`DxfExporter`](DxfExporter.md)

Handles DXF serialisation of [TechnicalDrawing](TechnicalDrawing.md) content.

## Methods

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
