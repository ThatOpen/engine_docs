---
id: "components.ScreenCuller"
title: "Class: ScreenCuller"
sidebar_label: "ScreenCuller"
custom_edit_url: null
---

[components](../modules/components.md).ScreenCuller

A tool to handle big scenes efficiently by automatically hiding the objects
that are not visible to the camera.

## Hierarchy

- [`Component`](components.Component.md)<`Map`<`string`, `THREE.InstancedMesh`\>\>

  ↳ **`ScreenCuller`**

## Implements

- [`Disposable`](../interfaces/components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `true`

[enabled](components.Component.md#enabled)

#### Overrides

[Component](components.Component.md).[enabled](components.Component.md#enabled)

#### Defined in

temp/components/core/ScreenCuller/index.ts:25

___

### needsUpdate

• **needsUpdate**: `boolean` = `false`

Needs to check whether there are objects that need to be hidden or shown.
You can bind this to the camera movement, to a certain interval, etc.

#### Defined in

temp/components/core/ScreenCuller/index.ts:31

___

### onViewUpdated

• `Readonly` **onViewUpdated**: [`Event`](components.Event.md)<`unknown`\>

Fires after hiding the objects that were not visible to the camera.

#### Defined in

temp/components/core/ScreenCuller/index.ts:22

___

### renderDebugFrame

• **renderDebugFrame**: `boolean` = `false`

Render the internal scene used to determine the object visibility. Used
for debugging purposes.

#### Defined in

temp/components/core/ScreenCuller/index.ts:37

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

temp/components/core/ScreenCuller/index.ts:146

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[dispose](../interfaces/components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/components.Disposable.md).[dispose](../interfaces/components.Disposable.md#dispose)

#### Defined in

temp/components/core/ScreenCuller/index.ts:112

___

### get

▸ **get**(): `Map`<`string`, `InstancedMesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>\>

[get](components.Component.md#get).

#### Returns

`Map`<`string`, `InstancedMesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>\>

the map of internal meshes used to determine visibility.

#### Overrides

[Component](components.Component.md).[get](components.Component.md#get)

#### Defined in

temp/components/core/ScreenCuller/index.ts:107

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

temp/components/core/ScreenCuller/index.ts:213
