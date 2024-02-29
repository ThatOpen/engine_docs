---
id: "openbim_components.ToolComponent"
title: "Class: ToolComponent"
sidebar_label: "ToolComponent"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).ToolComponent

An object to easily handle all the tools used (e.g. updating them, retrieving
them, performing batch operations, etc). A tool is a feature that achieves
something through user interaction (e.g. clipping planes, dimensions, etc).

## Hierarchy

- [`Component`](openbim_components.Component.md)<[`Component`](openbim_components.Component.md)<`any`\>\>

  ↳ **`ToolComponent`**

## Implements

- [`Disposable`](../interfaces/openbim_components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](openbim_components.Component.md#enabled)

#### Overrides

[Component](openbim_components.Component.md).[enabled](openbim_components.Component.md#enabled)

#### Defined in

[temp/engine_components/src/core/ToolsComponent/index.ts:31](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ToolsComponent/index.ts#L31)

___

### list

• **list**: `Record`<`string`, [`Component`](openbim_components.Component.md)<`any`\>\> = `{}`

The list of components created in this app.

#### Defined in

[temp/engine_components/src/core/ToolsComponent/index.ts:16](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ToolsComponent/index.ts#L16)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](openbim_components.Event.md)<`undefined`\>

[Disposable.onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Defined in

[temp/engine_components/src/core/ToolsComponent/index.ts:19](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ToolsComponent/index.ts#L19)

___

### token

• **token**: `string` = `""`

The auth token to get tools from That Open Platform.

#### Defined in

[temp/engine_components/src/core/ToolsComponent/index.ts:25](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ToolsComponent/index.ts#L25)

___

### uuid

• **uuid**: `string` = `"ToolComponent"`

Component.uuid

#### Defined in

[temp/engine_components/src/core/ToolsComponent/index.ts:28](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ToolsComponent/index.ts#L28)

___

### libraryUUIDs

▪ `Static` `Readonly` **libraryUUIDs**: `Set`<`unknown`\>

The list of UUIDs of all the components in this library.

#### Defined in

[temp/engine_components/src/core/ToolsComponent/index.ts:22](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ToolsComponent/index.ts#L22)

## Methods

### add

▸ **add**(`uuid`, `instance`): `void`

Adds a new tool. Use this in the constructor of your tools.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | The UUID of your tool. |
| `instance` | [`Component`](openbim_components.Component.md)<`any`\> | The instance of your tool (`this` inside the constructor). |

#### Returns

`void`

#### Defined in

[temp/engine_components/src/core/ToolsComponent/index.ts:58](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ToolsComponent/index.ts#L58)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

Disposes all the MEMORY used by all the tools.

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[temp/engine_components/src/core/ToolsComponent/index.ts:107](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ToolsComponent/index.ts#L107)

___

### get

▸ **get**<`T`, `U`\>(`ToolClass`): `U`

Retrieves a tool component. If it already exists in this app, it returns the instance of the component. If it
doesn't exist, it will instance it automatically.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `U` | extends [`Component`](openbim_components.Component.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ToolClass` | `Object` | The component to get or create. |

#### Returns

`U`

#### Overrides

[Component](openbim_components.Component.md).[get](openbim_components.Component.md#get)

#### Defined in

[temp/engine_components/src/core/ToolsComponent/index.ts:74](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ToolsComponent/index.ts#L74)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](openbim_components.Component.md).[hasUI](openbim_components.Component.md#hasui)

#### Defined in

[temp/engine_components/src/base-types/component.ts:62](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L62)

___

### init

▸ **init**(`OBC`): `void`

Pass the whole library object as argument.

#### Parameters

| Name | Type |
| :------ | :------ |
| `OBC` | `any` |

#### Returns

`void`

#### Defined in

[temp/engine_components/src/core/ToolsComponent/index.ts:46](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ToolsComponent/index.ts#L46)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](openbim_components.Component.md).[isConfigurable](openbim_components.Component.md#isconfigurable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:57](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](openbim_components.Component.md).[isDisposeable](openbim_components.Component.md#isdisposeable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:35](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](openbim_components.Component.md).[isHideable](openbim_components.Component.md#ishideable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:52](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](openbim_components.Component.md).[isResizeable](openbim_components.Component.md#isresizeable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:40](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](openbim_components.Component.md).[isUpdateable](openbim_components.Component.md#isupdateable)

#### Defined in

[temp/engine_components/src/base-types/component.ts:45](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/base-types/component.ts#L45)

___

### update

▸ **update**(`delta`): `Promise`<`void`\>

Updates all the registered tool components. Only the components where the
property [Component.enabled](openbim_components.Component.md#enabled) is true will be updated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delta` | `number` | The [delta time](https://threejs.org/docs/#api/en/core/Clock) of the loop. |

#### Returns

`Promise`<`void`\>

#### Defined in

[temp/engine_components/src/core/ToolsComponent/index.ts:95](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ToolsComponent/index.ts#L95)
