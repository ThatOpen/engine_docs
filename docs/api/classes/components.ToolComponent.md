---
id: "components.ToolComponent"
title: "Class: ToolComponent"
sidebar_label: "ToolComponent"
custom_edit_url: null
---

[components](../modules/components.md).ToolComponent

An object to easily handle all the tools used (e.g. updating them, retrieving
them, performing batch operations, etc). A tool is a feature that achieves
something through user interaction (e.g. clipping planes, dimensions, etc).

## Hierarchy

- [`Component`](components.Component.md)<`Promise`<[`Component`](components.Component.md)<`any`\>\>\>

  ↳ **`ToolComponent`**

## Implements

- [`Disposable`](../interfaces/components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[enabled](components.Component.md#enabled)

#### Overrides

[Component](components.Component.md).[enabled](components.Component.md#enabled)

#### Defined in

temp/components/core/ToolsComponent/index.ts:32

___

### list

• **list**: `ToolsList`

The list of components created in this app.

#### Defined in

temp/components/core/ToolsComponent/index.ts:20

___

### token

• **token**: `string` = `""`

The auth token to get tools from That Open Platform.

#### Defined in

temp/components/core/ToolsComponent/index.ts:26

___

### uuid

• **uuid**: `string` = `"ToolComponent"`

Component.uuid

#### Defined in

temp/components/core/ToolsComponent/index.ts:29

___

### libraryUUIDs

▪ `Static` `Readonly` **libraryUUIDs**: `Set`<`unknown`\>

The list of UUIDs of all the components in this library.

#### Defined in

temp/components/core/ToolsComponent/index.ts:23

## Methods

### add

▸ **add**(`uuid`, `instance`): `void`

Adds a new tool. Use this in the constructor of your tools.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | The UUID of your tool. |
| `instance` | [`Component`](components.Component.md)<`any`\> | The instance of your tool (`this` inside the constructor). |

#### Returns

`void`

#### Defined in

temp/components/core/ToolsComponent/index.ts:47

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes all the MEMORY used by all the tools.

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/components.Disposable.md).[dispose](../interfaces/components.Disposable.md#dispose)

#### Defined in

temp/components/core/ToolsComponent/index.ts:93

___

### get

▸ **get**<`T`, `U`\>(`ToolClass`): `Promise`<`U`\>

Retrieves a tool component. If it already exists in this app, it returns the instance of the component. If it
doesn't exist, it will instance it automatically.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | extends [`Component`](components.Component.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ToolClass` | `Object` | The component to get or create. |

#### Returns

`Promise`<`U`\>

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/core/ToolsComponent/index.ts:59

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

### update

▸ **update**(`delta`): `Promise`<`void`\>

Updates all the registered tool components. Only the components where the
property [enabled](components.Component.md#enabled) is true will be updated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delta` | `number` | The [delta time](https://threejs.org/docs/#api/en/core/Clock) of the loop. |

#### Returns

`Promise`<`void`\>

#### Defined in

temp/components/core/ToolsComponent/index.ts:81
