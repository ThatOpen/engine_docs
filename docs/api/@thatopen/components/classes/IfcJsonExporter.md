# IfcJsonExporter

Component to export all the properties from an IFC to a JS object. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IfcJsonExporter). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IfcJsonExporter).

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

> `static` `readonly` **uuid**: `"b32c4332-cd67-436e-ba7f-196646c7a635"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### export()

> **export**(`webIfc`, `modelID`, `indirect`, `recursiveSpatial`): `Promise`\<`IfcProperties`\>

Exports all the properties of an IFC into an array of JS objects.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `webIfc` | `IfcAPI` | `undefined` | The instance of [web-ifc](https://github.com/ThatOpen/engine_web-ifc) to use. |
| `modelID` | `number` | `undefined` | ID of the IFC model whose properties to extract. |
| `indirect` | `boolean` | `false` | whether to get the indirect relationships as well. |
| `recursiveSpatial` | `boolean` | `true` | whether to get the properties of spatial items recursively to make the location data available (e.g. absolute position of building). |

#### Returns

`Promise`\<`IfcProperties`\>

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
