---
id: "ToolComponents"
title: "Class: ToolComponents"
sidebar_label: "ToolComponents"
sidebar_position: 0
custom_edit_url: null
---

An object to easily handle all the tools used (e.g. updating them, retrieving
them, performing batch operations, etc). A tool is a feature that achieves
something through user interaction (e.g. clipping planes, dimensions, etc).

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Methods

### add

▸ **add**(`tool`): `void`

Registers a new tool component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tool` | [`Component`](Component.md)<`any`\> | The tool to register in the application. |

#### Returns

`void`

#### Defined in

core/ToolsComponents/index.ts:16

___

### dispose

▸ **dispose**(): `void`

Disposes all the memory used by all the tools.

#### Returns

`void`

#### Implementation of

Disposable.dispose

#### Defined in

core/ToolsComponents/index.ts:58

___

### get

▸ **get**(`name`): `undefined` \| [`Component`](Component.md)<`any`\>

Retrieves a tool component by its name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The [name](Component.md#name) of the component.. |

#### Returns

`undefined` \| [`Component`](Component.md)<`any`\>

#### Defined in

core/ToolsComponents/index.ts:37

___

### remove

▸ **remove**(`tool`): `boolean`

Deletes a previously registered tool component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tool` | [`Component`](Component.md)<`any`\> | The tool to delete. |

#### Returns

`boolean`

#### Defined in

core/ToolsComponents/index.ts:24

___

### update

▸ **update**(`delta`): `void`

Updates all the registered tool components. Only the components where the
property [enabled](Component.md#enabled) is true will be updated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delta` | `number` | The [delta time](https://threejs.org/docs/#api/en/core/Clock) of the loop. |

#### Returns

`void`

#### Defined in

core/ToolsComponents/index.ts:47
