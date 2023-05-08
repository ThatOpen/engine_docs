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

- [`Component`](components.Component.md)<[`Component`](components.Component.md)<`any`\> \| `undefined`\>

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

temp/components/core/ToolsComponent/index.ts:20

___

### name

• **name**: `string` = `"ToolComponent"`

[name](components.Component.md#name)

#### Overrides

[Component](components.Component.md).[name](components.Component.md#name)

#### Defined in

temp/components/core/ToolsComponent/index.ts:17

## Methods

### add

▸ **add**(`...tool`): `void`

Registers a new tool component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...tool` | [`Component`](components.Component.md)<`any`\>[] | The tool to register in the application. |

#### Returns

`void`

#### Defined in

temp/components/core/ToolsComponent/index.ts:31

___

### dispose

▸ **dispose**(): `void`

Disposes all the memory used by all the tools.

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

temp/components/core/ToolsComponent/index.ts:91

___

### get

▸ **get**(`name`): `undefined` \| [`Component`](components.Component.md)<`any`\>

Retrieves a tool component by its name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The [name](components.Component.md#name) of the component.. |

#### Returns

`undefined` \| [`Component`](components.Component.md)<`any`\>

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/core/ToolsComponent/index.ts:56

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](components.Component.md).[hasUI](components.Component.md#hasui)

#### Defined in

temp/components/base-types/component.ts:48

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

temp/components/base-types/component.ts:43

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

### remove

▸ **remove**(`tool`): `boolean`

Deletes a previously registered tool component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tool` | [`Component`](components.Component.md)<`any`\> | The tool to delete. |

#### Returns

`boolean`

#### Defined in

temp/components/core/ToolsComponent/index.ts:42

___

### update

▸ **update**(`delta`): `void`

Updates all the registered tool components. Only the components where the
property [enabled](components.Component.md#enabled) is true will be updated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delta` | `number` | The [delta time](https://threejs.org/docs/#api/en/core/Clock) of the loop. |

#### Returns

`void`

#### Defined in

temp/components/core/ToolsComponent/index.ts:80

___

### use

▸ **use**<`T`\>(`token`, `id`): `Promise`<\>

Gets one of your tools of That Open Platform. You can pass the type of
component as the generic parameter T to get the types and intellisense
for the component.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | The authentication token to authorise this request. |
| `id` | `string` | The ID of the tool you want to get |

#### Returns

`Promise`<\>

#### Defined in

temp/components/core/ToolsComponent/index.ts:67
