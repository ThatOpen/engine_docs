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

[src/core/LocalCacher/index.ts:24](https://github.com/ifcjs/components/blob/e46138a/src/core/LocalCacher/index.ts#L24)

___

### onFileLoaded

• `Readonly` **onFileLoaded**: [`Event`](openbim_components.Event.md)<{ `id`: `string`  }\>

Fires when a file has been loaded from cache.

#### Defined in

[src/core/LocalCacher/index.ts:18](https://github.com/ifcjs/components/blob/e46138a/src/core/LocalCacher/index.ts#L18)

___

### onItemSaved

• `Readonly` **onItemSaved**: [`Event`](openbim_components.Event.md)<{ `id`: `string`  }\>

Fires when a file has been saved into cache.

#### Defined in

[src/core/LocalCacher/index.ts:21](https://github.com/ifcjs/components/blob/e46138a/src/core/LocalCacher/index.ts#L21)

___

### uiElement

• **uiElement**: [`UIElement`](openbim_components.UIElement.md)<{ `floatingMenu`: `FloatingWindow` ; `loadButton`: `Button` ; `main`: `Button` ; `saveButton`: `Button`  }\>

[UI.uiElement](../interfaces/openbim_components.UI.md#uielement)

#### Implementation of

[UI](../interfaces/openbim_components.UI.md).[uiElement](../interfaces/openbim_components.UI.md#uielement)

#### Defined in

[src/core/LocalCacher/index.ts:27](https://github.com/ifcjs/components/blob/e46138a/src/core/LocalCacher/index.ts#L27)

## Accessors

### ids

• `get` **ids**(): `string`[]

The IDs of all the stored files.

#### Returns

`string`[]

#### Defined in

[src/core/LocalCacher/index.ts:40](https://github.com/ifcjs/components/blob/e46138a/src/core/LocalCacher/index.ts#L40)

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

[src/core/LocalCacher/index.ts:99](https://github.com/ifcjs/components/blob/e46138a/src/core/LocalCacher/index.ts#L99)

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

Deletes all the stored files.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/LocalCacher/index.ts:111](https://github.com/ifcjs/components/blob/e46138a/src/core/LocalCacher/index.ts#L111)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[src/core/LocalCacher/index.ts:120](https://github.com/ifcjs/components/blob/e46138a/src/core/LocalCacher/index.ts#L120)

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

[src/core/LocalCacher/index.ts:90](https://github.com/ifcjs/components/blob/e46138a/src/core/LocalCacher/index.ts#L90)

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

[src/core/LocalCacher/index.ts:58](https://github.com/ifcjs/components/blob/e46138a/src/core/LocalCacher/index.ts#L58)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](openbim_components.Component.md).[hasUI](openbim_components.Component.md#hasui)

#### Defined in

[src/base-types/component.ts:62](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](openbim_components.Component.md).[isConfigurable](openbim_components.Component.md#isconfigurable)

#### Defined in

[src/base-types/component.ts:57](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](openbim_components.Component.md).[isDisposeable](openbim_components.Component.md#isdisposeable)

#### Defined in

[src/base-types/component.ts:35](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](openbim_components.Component.md).[isHideable](openbim_components.Component.md#ishideable)

#### Defined in

[src/base-types/component.ts:52](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](openbim_components.Component.md).[isResizeable](openbim_components.Component.md#isresizeable)

#### Defined in

[src/base-types/component.ts:40](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](openbim_components.Component.md).[isUpdateable](openbim_components.Component.md#isupdateable)

#### Defined in

[src/base-types/component.ts:45](https://github.com/ifcjs/components/blob/e46138a/src/base-types/component.ts#L45)

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

[src/core/LocalCacher/index.ts:74](https://github.com/ifcjs/components/blob/e46138a/src/core/LocalCacher/index.ts#L74)
