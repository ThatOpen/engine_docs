---
id: "openbim_components.LocalCacher"
title: "Class: LocalCacher"
sidebar_label: "LocalCacher"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).LocalCacher

A tool to cache files using the browser's IndexedDB API. This might
save loading time and infrastructure costs for files that need to be
fetched from the cloud.

## Hierarchy

- [`Component`](openbim_components.Component.md)<`any`\>

  ↳ **`LocalCacher`**

## Implements

- [`UI`](../interfaces/openbim_components.UI.md)
- [`Disposable`](../interfaces/openbim_components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](openbim_components.Component.md#enabled)

#### Overrides

[Component](openbim_components.Component.md).[enabled](openbim_components.Component.md#enabled)

#### Defined in

[temp/components/src/core/LocalCacher/index.ts:31](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/LocalCacher/index.ts#L31)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](openbim_components.Event.md)<`string`\>

[Disposable.onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Defined in

[temp/components/src/core/LocalCacher/index.ts:28](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/LocalCacher/index.ts#L28)

___

### onFileLoaded

• `Readonly` **onFileLoaded**: [`Event`](openbim_components.Event.md)<{ `id`: `string`  }\>

Fires when a file has been loaded from cache.

#### Defined in

[temp/components/src/core/LocalCacher/index.ts:22](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/LocalCacher/index.ts#L22)

___

### onItemSaved

• `Readonly` **onItemSaved**: [`Event`](openbim_components.Event.md)<{ `id`: `string`  }\>

Fires when a file has been saved into cache.

#### Defined in

[temp/components/src/core/LocalCacher/index.ts:25](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/LocalCacher/index.ts#L25)

___

### uiElement

• **uiElement**: [`UIElement`](openbim_components.UIElement.md)<{ `floatingMenu`: `FloatingWindow` ; `loadButton`: `Button` ; `main`: `Button` ; `saveButton`: `Button`  }\>

[UI.uiElement](../interfaces/openbim_components.UI.md#uielement)

#### Implementation of

[UI](../interfaces/openbim_components.UI.md).[uiElement](../interfaces/openbim_components.UI.md#uielement)

#### Defined in

[temp/components/src/core/LocalCacher/index.ts:34](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/LocalCacher/index.ts#L34)

## Accessors

### ids

• `get` **ids**(): `string`[]

The IDs of all the stored files.

#### Returns

`string`[]

#### Defined in

[temp/components/src/core/LocalCacher/index.ts:47](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/LocalCacher/index.ts#L47)

## Methods

### delete

▸ **delete**(`ids`): `Promise`<`void`\>

Deletes the files stored in the given ids.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | the identifiers of the files to delete. |

#### Returns

`Promise`<`void`\>

#### Defined in

[temp/components/src/core/LocalCacher/index.ts:106](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/LocalCacher/index.ts#L106)

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

Deletes all the stored files.

#### Returns

`Promise`<`void`\>

#### Defined in

[temp/components/src/core/LocalCacher/index.ts:118](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/LocalCacher/index.ts#L118)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[temp/components/src/core/LocalCacher/index.ts:127](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/LocalCacher/index.ts#L127)

___

### exists

▸ **exists**(`id`): `boolean`

Checks if there's a file stored with the given ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | to check. |

#### Returns

`boolean`

#### Defined in

[temp/components/src/core/LocalCacher/index.ts:97](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/LocalCacher/index.ts#L97)

___

### get

▸ **get**(`id`): `Promise`<``null`` \| `Blob`\>

[Component.get](openbim_components.Component.md#get).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the ID of the file to fetch. |

#### Returns

`Promise`<``null`` \| `Blob`\>

#### Overrides

[Component](openbim_components.Component.md).[get](openbim_components.Component.md#get)

#### Defined in

[temp/components/src/core/LocalCacher/index.ts:65](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/LocalCacher/index.ts#L65)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](openbim_components.Component.md).[hasUI](openbim_components.Component.md#hasui)

#### Defined in

[temp/components/src/base-types/component.ts:62](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](openbim_components.Component.md).[isConfigurable](openbim_components.Component.md#isconfigurable)

#### Defined in

[temp/components/src/base-types/component.ts:57](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](openbim_components.Component.md).[isDisposeable](openbim_components.Component.md#isdisposeable)

#### Defined in

[temp/components/src/base-types/component.ts:35](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](openbim_components.Component.md).[isHideable](openbim_components.Component.md#ishideable)

#### Defined in

[temp/components/src/base-types/component.ts:52](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](openbim_components.Component.md).[isResizeable](openbim_components.Component.md#isresizeable)

#### Defined in

[temp/components/src/base-types/component.ts:40](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](openbim_components.Component.md).[isUpdateable](openbim_components.Component.md#isupdateable)

#### Defined in

[temp/components/src/base-types/component.ts:45](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/base-types/component.ts#L45)

___

### save

▸ **save**(`id`, `url`): `Promise`<`void`\>

Saves the file with the given ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the ID to assign to the file. |
| `url` | `string` | the URL where the file is located. |

#### Returns

`Promise`<`void`\>

#### Defined in

[temp/components/src/core/LocalCacher/index.ts:81](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/LocalCacher/index.ts#L81)
