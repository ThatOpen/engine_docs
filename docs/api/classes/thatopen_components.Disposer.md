---
id: "thatopen_components.Disposer"
title: "Class: Disposer"
sidebar_label: "Disposer"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).Disposer

A tool to safely remove meshes and geometries from memory to
[prevent memory leaks](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects).

## Hierarchy

- [`Component`](thatopen_components.Component.md)

  ↳ **`Disposer`**

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](thatopen_components.Component.md#enabled)

#### Overrides

[Component](thatopen_components.Component.md).[enabled](thatopen_components.Component.md#enabled)

#### Defined in

[packages/core/src/core/Disposer/index.ts:13](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Disposer/index.ts#L13)

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

[packages/core/src/core/Disposer/index.ts:42](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Disposer/index.ts#L42)

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

[packages/core/src/core/Disposer/index.ts:63](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Disposer/index.ts#L63)

___

### get

▸ **get**(): `Set`<`string`\>

Component.uuid.

#### Returns

`Set`<`string`\>

the list of UUIDs of deleted components.

#### Defined in

[packages/core/src/core/Disposer/index.ts:26](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Disposer/index.ts#L26)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/thatopen_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[Component](thatopen_components.Component.md).[isConfigurable](thatopen_components.Component.md#isconfigurable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:39](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L39)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/thatopen_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[Component](thatopen_components.Component.md).[isDisposeable](thatopen_components.Component.md#isdisposeable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:17](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L17)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/thatopen_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[Component](thatopen_components.Component.md).[isHideable](thatopen_components.Component.md#ishideable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:34](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L34)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/thatopen_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[Component](thatopen_components.Component.md).[isResizeable](thatopen_components.Component.md#isresizeable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:22](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L22)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/thatopen_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[Component](thatopen_components.Component.md).[isUpdateable](thatopen_components.Component.md#isupdateable)

#### Defined in

[packages/core/src/core/Types/src/base.ts:27](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L27)
