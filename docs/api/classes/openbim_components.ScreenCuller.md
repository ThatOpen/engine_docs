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

### onDisposed

• `Readonly` **onDisposed**: [`Event`](openbim_components.Event.md)<`string`\>

[Disposable.onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Defined in

[temp/engine_components/src/core/ScreenCuller/index.ts:27](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ScreenCuller/index.ts#L27)

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[Component.enabled](openbim_components.Component.md#enabled)

#### Returns

`boolean`

#### Overrides

Component.enabled

#### Defined in

[temp/engine_components/src/core/ScreenCuller/index.ts:30](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ScreenCuller/index.ts#L30)

___

### needsUpdate

• `get` **needsUpdate**(): `boolean`

#### Returns

`boolean`

**`Deprecated`**

use ScreenCuller.elements.needsUpdate instead.

#### Defined in

[temp/engine_components/src/core/ScreenCuller/index.ts:50](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ScreenCuller/index.ts#L50)

• `set` **needsUpdate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

**`Deprecated`**

use ScreenCuller.elements.needsUpdate instead.

#### Defined in

[temp/engine_components/src/core/ScreenCuller/index.ts:55](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ScreenCuller/index.ts#L55)

___

### onViewUpdated

• `get` **onViewUpdated**(): [`Event`](openbim_components.Event.md)<{ `seen`: `Set`<`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\> ; `unseen`: `Set`<`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\>  }\>

#### Returns

[`Event`](openbim_components.Event.md)<{ `seen`: `Set`<`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\> ; `unseen`: `Set`<`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\>  }\>

**`Deprecated`**

use ScreenCuller.elements.onViewUpdated instead.

#### Defined in

[temp/engine_components/src/core/ScreenCuller/index.ts:45](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ScreenCuller/index.ts#L45)

___

### renderDebugFrame

• `get` **renderDebugFrame**(): `boolean`

#### Returns

`boolean`

**`Deprecated`**

use ScreenCuller.elements.renderDebugFrame instead.

#### Defined in

[temp/engine_components/src/core/ScreenCuller/index.ts:60](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ScreenCuller/index.ts#L60)

• `set` **renderDebugFrame**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

**`Deprecated`**

use ScreenCuller.elements.renderDebugFrame instead.

#### Defined in

[temp/engine_components/src/core/ScreenCuller/index.ts:65](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ScreenCuller/index.ts#L65)

___

### renderer

• `get` **renderer**(): `WebGLRenderer`

#### Returns

`WebGLRenderer`

**`Deprecated`**

use ScreenCuller.elements.get instead.

#### Defined in

[temp/engine_components/src/core/ScreenCuller/index.ts:81](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ScreenCuller/index.ts#L81)

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

[temp/engine_components/src/core/ScreenCuller/index.ts:125](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ScreenCuller/index.ts#L125)

___

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Implementation of

[Disposable](../interfaces/openbim_components.Disposable.md).[dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Defined in

[temp/engine_components/src/core/ScreenCuller/index.ts:115](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ScreenCuller/index.ts#L115)

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

[temp/engine_components/src/core/ScreenCuller/index.ts:110](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ScreenCuller/index.ts#L110)

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

[temp/engine_components/src/core/ScreenCuller/index.ts:132](https://github.com/ThatOpen/engine_components/blob/31b6f97/src/core/ScreenCuller/index.ts#L132)
