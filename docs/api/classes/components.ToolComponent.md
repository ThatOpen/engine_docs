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

## Implements

- [`Disposable`](../interfaces/components.Disposable.md)

## Methods

### add

▸ **add**(`tool`): `void`

Registers a new tool component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tool` | [`Component`](components.Component.md)<`any`\> | The tool to register in the application. |

#### Returns

`void`

#### Defined in

components/core/ToolsComponent/index.ts:17

___

### dispose

▸ **dispose**(): `void`

Disposes all the memory used by all the tools.

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

components/core/ToolsComponent/index.ts:73

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

#### Defined in

components/core/ToolsComponent/index.ts:38

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

components/core/ToolsComponent/index.ts:25

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

components/core/ToolsComponent/index.ts:62

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

components/core/ToolsComponent/index.ts:49
