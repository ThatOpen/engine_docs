---
id: "components.FragmentIfcLoader"
title: "Class: FragmentIfcLoader"
sidebar_label: "FragmentIfcLoader"
custom_edit_url: null
---

[components](../modules/components.md).FragmentIfcLoader

Reads all the geometry of the IFC file and generates a set of
[fragments](https://github.com/ifcjs/fragment). It can also return the
properties as a JSON file, as well as other sets of information within
the IFC file.

## Hierarchy

- [`Component`](components.Component.md)<`WEBIFC.IfcAPI`\>

  ↳ **`FragmentIfcLoader`**

## Implements

- [`Disposable`](../interfaces/components.Disposable.md)
- [`UI`](../interfaces/components.UI.md)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/components.Disposable.md).[dispose](../interfaces/components.Disposable.md#dispose)

#### Defined in

temp/components/fragments/FragmentIfcLoader/index.ts:59

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](components.Component.md).[hasUI](components.Component.md#hasui)

#### Defined in

temp/components/base-types/component.ts:50

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](components.Component.md).[isDisposeable](components.Component.md#isdisposeable)

#### Defined in

temp/components/base-types/component.ts:28

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](components.Component.md).[isHideable](components.Component.md#ishideable)

#### Defined in

temp/components/base-types/component.ts:45

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](components.Component.md).[isResizeable](components.Component.md#isresizeable)

#### Defined in

temp/components/base-types/component.ts:33

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](components.Component.md).[isUpdateable](components.Component.md#isupdateable)

#### Defined in

temp/components/base-types/component.ts:38

___

### load

▸ **load**(`data`, `name`): `Promise`<`FragmentsGroup`\>

Loads the IFC file and converts it to a set of fragments.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `name` | `string` |

#### Returns

`Promise`<`FragmentsGroup`\>

#### Defined in

temp/components/fragments/FragmentIfcLoader/index.ts:71
