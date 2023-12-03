---
id: "openbim_components.ScreenCuller"
title: "Class: ScreenCuller"
sidebar_label: "ScreenCuller"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).ScreenCuller

A tool to handle big scenes efficiently by automatically hiding the objects
that are not visible to the camera.

## Hierarchy

- [`Component`](openbim_components.Component.md)<`Map`<`string`, `THREE.InstancedMesh`\>\>

  ↳ **`ScreenCuller`**

## Implements

- [`Disposable`](../interfaces/openbim_components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](openbim_components.Component.md#enabled)

#### Overrides

[Component](openbim_components.Component.md).[enabled](openbim_components.Component.md#enabled)

#### Defined in

[src/core/ScreenCuller/index.ts:25](https://github.com/ifcjs/components/blob/e46138a/src/core/ScreenCuller/index.ts#L25)

___

### needsUpdate

• **needsUpdate**: `boolean` = `false`

Needs to check whether there are objects that need to be hidden or shown.
You can bind this to the camera movement, to a certain interval, etc.

#### Defined in

[src/core/ScreenCuller/index.ts:31](https://github.com/ifcjs/components/blob/e46138a/src/core/ScreenCuller/index.ts#L31)

___

### onViewUpdated

• `Readonly` **onViewUpdated**: [`Event`](openbim_components.Event.md)<`unknown`\>

Fires after hiding the objects that were not visible to the camera.

#### Defined in

[src/core/ScreenCuller/index.ts:22](https://github.com/ifcjs/components/blob/e46138a/src/core/ScreenCuller/index.ts#L22)

___

### renderDebugFrame

• **renderDebugFrame**: `boolean` = `false`

Render the internal scene used to determine the object visibility. Used
for debugging purposes.

#### Defined in

[src/core/ScreenCuller/index.ts:37](https://github.com/ifcjs/components/blob/e46138a/src/core/ScreenCuller/index.ts#L37)

## Methods

### add

▸ **add**(`mesh`): `void`

Adds a new mesh to be processed and managed by the culler.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\> \| `InstancedMesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\> |

#### Returns

`void`

**`Mesh`**

the mesh or instanced mesh to add.

#### Defined in

[src/core/ScreenCuller/index.ts:146](https://github.com/ifcjs/components/blob/e46138a/src/core/ScreenCuller/index.ts#L146)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[src/core/ScreenCuller/index.ts:112](https://github.com/ifcjs/components/blob/e46138a/src/core/ScreenCuller/index.ts#L112)

___

### get

▸ **get**(): `Map`<`string`, `InstancedMesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>\>

[Component.get](openbim_components.Component.md#get).

#### Returns

`Map`<`string`, `InstancedMesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>\>

the map of internal meshes used to determine visibility.

#### Overrides

[Component](openbim_components.Component.md).[get](openbim_components.Component.md#get)

#### Defined in

[src/core/ScreenCuller/index.ts:107](https://github.com/ifcjs/components/blob/e46138a/src/core/ScreenCuller/index.ts#L107)

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

### updateVisibility

▸ **updateVisibility**(`force?`): `Promise`<`void`\>

The function that the culler uses to reprocess the scene. Generally it's
better to call needsUpdate, but you can also call this to force it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `force?` | `boolean` | if true, it will refresh the scene even if needsUpdate is not true. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/ScreenCuller/index.ts:213](https://github.com/ifcjs/components/blob/e46138a/src/core/ScreenCuller/index.ts#L213)
