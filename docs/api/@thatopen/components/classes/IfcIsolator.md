# IfcIsolator

Component to isolate certain elements from an IFC and export to another IFC. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IfcIsolator). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IfcIsolator).

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

> `static` `readonly` **uuid**: `"6eb0ba2f-71c0-464e-bcec-2d7c335186b2"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### export()

> **export**(`webIfc`, `modelID`, `isolatedElements`): `Promise`\<`Uint8Array`\>

Exports isolated elements to the new model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `webIfc` | `IfcAPI` | The instance of [web-ifc](https://github.com/ThatOpen/engine_web-ifc) to use. |
| `modelID` | `number` | ID of the new IFC model. |
| `isolatedElements` | `any`[] | The array of isolated elements |

#### Returns

`Promise`\<`Uint8Array`\>

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
