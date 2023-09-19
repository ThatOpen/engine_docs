---
id: "components.Disposer"
title: "Class: Disposer"
sidebar_label: "Disposer"
custom_edit_url: null
---

[components](../modules/components.md).Disposer

A tool to safely remove meshes and geometries from memory to
[prevent memory leaks](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects).

## Hierarchy

- [`Component`](components.Component.md)<`Set`<`string`\>\>

  ↳ **`Disposer`**

## Properties

### enabled

• **enabled**: `boolean` = `true`

[enabled](components.Component.md#enabled)

#### Overrides

[Component](components.Component.md).[enabled](components.Component.md#enabled)

#### Defined in

temp/components/core/Disposer/index.ts:14

## Methods

### destroy

▸ **destroy**(`mesh`, `materials?`, `recursive?`): `void`

Removes a mesh, its geometry and its materials from memory. If you are
using any of these in other parts of the application, make sure that you
remove them from the mesh before disposing it.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `mesh` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\> \| `LineSegments`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\> | `undefined` | the [mesh](https://threejs.org/docs/#api/en/objects/Mesh) to remove. |
| `materials` | `boolean` | `true` | whether to dispose the materials of the mesh. |
| `recursive` | `boolean` | `true` | whether to recursively dispose the children of the mesh. |

#### Returns

`void`

#### Defined in

temp/components/core/Disposer/index.ts:43

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

temp/components/core/Disposer/index.ts:65

___

### get

▸ **get**(): `Set`<`string`\>

Component.uuid.

#### Returns

`Set`<`string`\>

the list of UUIDs of deleted components.

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/core/Disposer/index.ts:27

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
