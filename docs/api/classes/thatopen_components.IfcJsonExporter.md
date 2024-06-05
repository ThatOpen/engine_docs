---
id: "thatopen_components.IfcJsonExporter"
title: "Class: IfcJsonExporter"
sidebar_label: "IfcJsonExporter"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).IfcJsonExporter

Object to export all the properties from an IFC to a JS object.

## Hierarchy

- [`Component`](thatopen_components.Component.md)

  ↳ **`IfcJsonExporter`**

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](thatopen_components.Component.md#enabled)

#### Overrides

[Component](thatopen_components.Component.md).[enabled](thatopen_components.Component.md#enabled)

#### Defined in

[packages/core/src/ifc/IfcJsonExporter/index.ts:13](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/ifc/IfcJsonExporter/index.ts#L13)

## Methods

### export

▸ **export**(`webIfc`, `modelID`, `indirect?`, `recursiveSpatial?`): `Promise`<`IfcProperties`\>

Exports all the properties of an IFC into an array of JS objects.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `webIfc` | `IfcAPI` | `undefined` | The instance of [web-ifc][https://github.com/ThatOpen/engine_web-ifc](https://github.com/ThatOpen/engine_web-ifc) to use. |
| `modelID` | `number` | `undefined` | ID of the IFC model whose properties to extract. |
| `indirect` | `boolean` | `false` | whether to get the indirect relationships as well. |
| `recursiveSpatial` | `boolean` | `true` | whether to get the properties of spatial items recursively to make the location data available (e.g. absolute position of building). |

#### Returns

`Promise`<`IfcProperties`\>

#### Defined in

[packages/core/src/ifc/IfcJsonExporter/index.ts:28](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/ifc/IfcJsonExporter/index.ts#L28)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/thatopen_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](thatopen_components.Component.md).[isConfigurable](thatopen_components.Component.md#isconfigurable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:39](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base.ts#L39)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/thatopen_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](thatopen_components.Component.md).[isDisposeable](thatopen_components.Component.md#isdisposeable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:17](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base.ts#L17)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/thatopen_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](thatopen_components.Component.md).[isHideable](thatopen_components.Component.md#ishideable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:34](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base.ts#L34)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/thatopen_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](thatopen_components.Component.md).[isResizeable](thatopen_components.Component.md#isresizeable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:22](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base.ts#L22)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/thatopen_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](thatopen_components.Component.md).[isUpdateable](thatopen_components.Component.md#isupdateable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:27](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Types/src/base.ts#L27)
