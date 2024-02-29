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
- [`Configurable`](../interfaces/openbim_components.Configurable.md)<`CullerRendererSettings`\>

## Properties

### enabled

• **enabled**: `boolean` = `true`

[Component.enabled](openbim_components.Component.md#enabled)

#### Overrides

[Component](openbim_components.Component.md).[enabled](openbim_components.Component.md#enabled)

#### Defined in

[temp/components/src/core/ScreenCuller/index.ts:38](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/ScreenCuller/index.ts#L38)

___

### needsUpdate

• **needsUpdate**: `boolean` = `false`

Needs to check whether there are objects that need to be hidden or shown.
You can bind this to the camera movement, to a certain interval, etc.

#### Defined in

[temp/components/src/core/ScreenCuller/index.ts:44](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/ScreenCuller/index.ts#L44)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](openbim_components.Event.md)<`string`\>

[Disposable.onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Defined in

[temp/components/src/core/ScreenCuller/index.ts:32](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/ScreenCuller/index.ts#L32)

___

### onViewUpdated

• `get` **onViewUpdated**(): [`Event`](openbim_components.Event.md)<{ `seen`: `Set`<`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\> ; `unseen`: `Set`<`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\>  }\>

#### Returns

[`Event`](openbim_components.Event.md)<{ `seen`: `Set`<`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\> ; `unseen`: `Set`<`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\>  }\>

**`Deprecated`**

use ScreenCuller.elements.onViewUpdated instead.

#### Defined in

[temp/components/src/core/ScreenCuller/index.ts:35](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/ScreenCuller/index.ts#L35)

___

### renderDebugFrame

• `get` **renderDebugFrame**(): `boolean`

#### Returns

`boolean`

**`Deprecated`**

use ScreenCuller.elements.renderDebugFrame instead.

#### Defined in

[temp/components/src/core/ScreenCuller/index.ts:50](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/ScreenCuller/index.ts#L50)

## Methods

### add

▸ **add**(`mesh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mesh` | `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `InstancedMesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\> |

#### Returns

`void`

**`Deprecated`**

use ScreenCuller.elements.add instead.

#### Defined in

[temp/components/src/core/ScreenCuller/index.ts:169](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/ScreenCuller/index.ts#L169)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[temp/components/src/core/ScreenCuller/index.ts:132](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/ScreenCuller/index.ts#L132)

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

[temp/components/src/core/ScreenCuller/index.ts:127](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/ScreenCuller/index.ts#L127)

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

### updateVisibility

▸ **updateVisibility**(`force?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`Promise`<`void`\>

**`Deprecated`**

use ScreenCuller.elements.updateVisibility instead.

#### Defined in

[temp/components/src/core/ScreenCuller/index.ts:251](https://github.com/ThatOpen/engine_components/blob/0c38d20/src/core/ScreenCuller/index.ts#L251)
