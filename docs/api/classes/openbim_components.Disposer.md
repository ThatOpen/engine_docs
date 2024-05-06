---
id: "openbim_components.Disposer"
title: "Class: Disposer"
sidebar_label: "Disposer"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).Disposer

A tool to safely remove meshes and geometries from memory to
[prevent memory leaks](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects).

## Hierarchy

- [`Component`](openbim_components.Component.md)<`Set`<`string`\>\>

  ↳ **`Disposer`**

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](openbim_components.Component.md#enabled)

#### Overrides

[Component](openbim_components.Component.md).[enabled](openbim_components.Component.md#enabled)

#### Defined in

[src/core/Disposer/index.ts:14](https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/Disposer/index.ts#L14)

## Methods

### destroy

▸ **destroy**(`object`, `materials?`, `recursive?`): `void`

Removes a mesh, its geometry and its materials from memory. If you are
using any of these in other parts of the application, make sure that you
remove them from the mesh before disposing it.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `object` | `Object3D`<`Object3DEventMap`\> | `undefined` | the [object](https://threejs.org/docs/#api/en/core/Object3D) to remove. |
| `materials` | `boolean` | `true` | whether to dispose the materials of the mesh. |
| `recursive` | `boolean` | `true` | whether to recursively dispose the children of the mesh. |

#### Returns

`void`

#### Defined in

[src/core/Disposer/index.ts:43](https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/Disposer/index.ts#L43)

___

### disposeGeometry

▸ **disposeGeometry**(`geometry`): `void`

Disposes a geometry from memory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`<`NormalBufferAttributes`\> | the [geometry](https://threejs.org/docs/#api/en/core/BufferGeometry) to remove. |

#### Returns

`void`

#### Defined in

[src/core/Disposer/index.ts:64](https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/Disposer/index.ts#L64)

___

### get

▸ **get**(): `Set`<`string`\>

Component.uuid.

#### Returns

`Set`<`string`\>

the list of UUIDs of deleted components.

#### Overrides

[Component](openbim_components.Component.md).[get](openbim_components.Component.md#get)

#### Defined in

[src/core/Disposer/index.ts:27](https://github.com/ThatOpen/engine_components/blob/444e81a/src/core/Disposer/index.ts#L27)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[Component](openbim_components.Component.md).[hasUI](openbim_components.Component.md#hasui)

#### Defined in

[src/base-types/component.ts:62](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](openbim_components.Component.md).[isConfigurable](openbim_components.Component.md#isconfigurable)

#### Defined in

[src/base-types/component.ts:57](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](openbim_components.Component.md).[isDisposeable](openbim_components.Component.md#isdisposeable)

#### Defined in

[src/base-types/component.ts:35](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](openbim_components.Component.md).[isHideable](openbim_components.Component.md#ishideable)

#### Defined in

[src/base-types/component.ts:52](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](openbim_components.Component.md).[isResizeable](openbim_components.Component.md#isresizeable)

#### Defined in

[src/base-types/component.ts:40](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](openbim_components.Component.md).[isUpdateable](openbim_components.Component.md#isupdateable)

#### Defined in

[src/base-types/component.ts:45](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/component.ts#L45)
