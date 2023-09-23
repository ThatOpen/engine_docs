---
id: "components.LocalCacher"
title: "Class: LocalCacher"
sidebar_label: "LocalCacher"
custom_edit_url: null
---

[components](../modules/components.md).LocalCacher

A tool to cache files using the browser's IndexedDB API. This might
save loading time and infrastructure costs for files that need to be
fetched from the cloud.

## Hierarchy

- [`Component`](components.Component.md)<`any`\>

  ↳ **`LocalCacher`**

## Implements

- [`UI`](../interfaces/components.UI.md)
- [`Disposable`](../interfaces/components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](components.Component.md#enabled)

#### Overrides

[Component](components.Component.md).[enabled](components.Component.md#enabled)

#### Defined in

temp/components/core/LocalCacher/index.ts:24

___

### onFileLoaded

• `Readonly` **onFileLoaded**: [`Event`](components.Event.md)<{ `id`: `string`  }\>

Fires when a file has been loaded from cache.

#### Defined in

temp/components/core/LocalCacher/index.ts:18

___

### onItemSaved

• `Readonly` **onItemSaved**: [`Event`](components.Event.md)<{ `id`: `string`  }\>

Fires when a file has been saved into cache.

#### Defined in

temp/components/core/LocalCacher/index.ts:21

___

### uiElement

• **uiElement**: [`UIElement`](components.UIElement.md)<{ `floatingMenu`: `FloatingWindow` ; `loadButton`: `Button` ; `main`: `Button` ; `saveButton`: `Button`  }\>

[UI.uiElement](../interfaces/components.UI.md#uielement)

#### Implementation of

[UI](../interfaces/components.UI.md).[uiElement](../interfaces/components.UI.md#uielement)

#### Defined in

temp/components/core/LocalCacher/index.ts:27

## Accessors

### ids

• `get` **ids**(): `string`[]

The IDs of all the stored files.

#### Returns

`string`[]

#### Defined in

temp/components/core/LocalCacher/index.ts:40

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

temp/components/core/LocalCacher/index.ts:99

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

Deletes all the stored files.

#### Returns

`Promise`<`void`\>

#### Defined in

temp/components/core/LocalCacher/index.ts:111

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/components.Disposable.md).[dispose](../interfaces/components.Disposable.md#dispose)

#### Defined in

temp/components/core/LocalCacher/index.ts:120

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

temp/components/core/LocalCacher/index.ts:90

___

### get

▸ **get**(`id`): `Promise`<``null`` \| `Blob`\>

[Component.get](components.Component.md#get).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the ID of the file to fetch. |

#### Returns

`Promise`<``null`` \| `Blob`\>

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/core/LocalCacher/index.ts:58

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

temp/components/core/LocalCacher/index.ts:74
