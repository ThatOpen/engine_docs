---
id: "openbim_components.EdgesPlane"
title: "Class: EdgesPlane"
sidebar_label: "EdgesPlane"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).EdgesPlane

A more advanced version of [SimpleClipper](openbim_components.SimpleClipper.md) that also includes
ClippingEdges with customizable lines.

## Hierarchy

- [`SimplePlane`](openbim_components.SimplePlane.md)

  ↳ **`EdgesPlane`**

## Properties

### edgesMaxUpdateRate

• **edgesMaxUpdateRate**: `number` = `50`

The max rate in milliseconds at which edges can be regenerated.
To disable this behaviour set this to 0.

#### Defined in

[src/navigation/EdgesClipper/src/edges-plane.ts:17](https://github.com/ThatOpen/engine_components/blob/178497c/src/navigation/EdgesClipper/src/edges-plane.ts#L17)

___

### name

• **name**: `string` = `"SimplePlane"`

Component.name

#### Inherited from

[SimplePlane](openbim_components.SimplePlane.md).[name](openbim_components.SimplePlane.md#name)

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:14](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L14)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](openbim_components.Event.md)<`undefined`\>

[Disposable.onDisposed](../interfaces/openbim_components.Disposable.md#ondisposed)

#### Inherited from

[SimplePlane](openbim_components.SimplePlane.md).[onDisposed](openbim_components.SimplePlane.md#ondisposed)

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:23](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L23)

___

### onDraggingEnded

• `Readonly` **onDraggingEnded**: [`Event`](openbim_components.Event.md)<`void`\>

Event that fires when the user stops dragging a clipping plane.

#### Inherited from

[SimplePlane](openbim_components.SimplePlane.md).[onDraggingEnded](openbim_components.SimplePlane.md#ondraggingended)

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:20](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L20)

___

### onDraggingStarted

• `Readonly` **onDraggingStarted**: [`Event`](openbim_components.Event.md)<`void`\>

Event that fires when the user starts dragging a clipping plane.

#### Inherited from

[SimplePlane](openbim_components.SimplePlane.md).[onDraggingStarted](openbim_components.SimplePlane.md#ondraggingstarted)

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:17](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L17)

## Accessors

### enabled

• `get` **enabled**(): `boolean`

[Component.enabled](openbim_components.Component.md#enabled)

#### Returns

`boolean`

#### Overrides

SimplePlane.enabled

#### Defined in

[src/navigation/EdgesClipper/src/edges-plane.ts:43](https://github.com/ThatOpen/engine_components/blob/178497c/src/navigation/EdgesClipper/src/edges-plane.ts#L43)

• `set` **enabled**(`state`): `void`

[Component.enabled](openbim_components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Overrides

SimplePlane.enabled

#### Defined in

[src/navigation/EdgesClipper/src/edges-plane.ts:37](https://github.com/ThatOpen/engine_components/blob/178497c/src/navigation/EdgesClipper/src/edges-plane.ts#L37)

___

### meshes

• `get` **meshes**(): `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

The meshes used for raycasting

#### Returns

`Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[]

#### Inherited from

SimplePlane.meshes

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:71](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L71)

___

### planeMaterial

• `get` **planeMaterial**(): `Material` \| `Material`[]

The material of the clipping plane representation.

#### Returns

`Material` \| `Material`[]

#### Inherited from

SimplePlane.planeMaterial

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:76](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L76)

• `set` **planeMaterial**(`material`): `void`

The material of the clipping plane representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `material` | `Material` \| `Material`[] |

#### Returns

`void`

#### Inherited from

SimplePlane.planeMaterial

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:81](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L81)

___

### size

• `get` **size**(): `number`

The size of the clipping plane representation.

#### Returns

`number`

#### Inherited from

SimplePlane.size

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:86](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L86)

• `set` **size**(`size`): `void`

Sets the size of the clipping plane representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

SimplePlane.size

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:91](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L91)

___

### visible

• `get` **visible**(): `boolean`

[Hideable.visible](../interfaces/openbim_components.Hideable.md#visible)

#### Returns

`boolean`

#### Inherited from

SimplePlane.visible

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:58](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L58)

• `set` **visible**(`state`): `void`

[Hideable.visible](../interfaces/openbim_components.Hideable.md#visible)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`void`

#### Inherited from

SimplePlane.visible

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:63](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L63)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

[Disposable.dispose](../interfaces/openbim_components.Disposable.md#dispose)

#### Returns

`Promise`<`void`\>

#### Overrides

[SimplePlane](openbim_components.SimplePlane.md).[dispose](openbim_components.SimplePlane.md#dispose)

#### Defined in

[src/navigation/EdgesClipper/src/edges-plane.ts:48](https://github.com/ThatOpen/engine_components/blob/178497c/src/navigation/EdgesClipper/src/edges-plane.ts#L48)

___

### get

▸ **get**(): `Plane`

[Component.get](openbim_components.Component.md#get)

#### Returns

`Plane`

#### Inherited from

[SimplePlane](openbim_components.SimplePlane.md).[get](openbim_components.SimplePlane.md#get)

#### Defined in

[src/core/SimpleClipper/simple-plane.ts:137](https://github.com/ThatOpen/engine_components/blob/178497c/src/core/SimpleClipper/simple-plane.ts#L137)

___

### hasUI

▸ **hasUI**(): this is UI

Whether is component implements any kind of [UI](../interfaces/openbim_components.UI.md).

#### Returns

this is UI

#### Inherited from

[SimplePlane](openbim_components.SimplePlane.md).[hasUI](openbim_components.SimplePlane.md#hasui)

#### Defined in

[src/base-types/component.ts:62](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L62)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/openbim_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

[SimplePlane](openbim_components.SimplePlane.md).[isConfigurable](openbim_components.SimplePlane.md#isconfigurable)

#### Defined in

[src/base-types/component.ts:57](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L57)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/openbim_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

[SimplePlane](openbim_components.SimplePlane.md).[isDisposeable](openbim_components.SimplePlane.md#isdisposeable)

#### Defined in

[src/base-types/component.ts:35](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L35)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/openbim_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

[SimplePlane](openbim_components.SimplePlane.md).[isHideable](openbim_components.SimplePlane.md#ishideable)

#### Defined in

[src/base-types/component.ts:52](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L52)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/openbim_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

[SimplePlane](openbim_components.SimplePlane.md).[isResizeable](openbim_components.SimplePlane.md#isresizeable)

#### Defined in

[src/base-types/component.ts:40](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L40)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/openbim_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

[SimplePlane](openbim_components.SimplePlane.md).[isUpdateable](openbim_components.SimplePlane.md#isupdateable)

#### Defined in

[src/base-types/component.ts:45](https://github.com/ThatOpen/engine_components/blob/178497c/src/base-types/component.ts#L45)

___

### setEnabled

▸ **setEnabled**(`state`): `Promise`<`void`\>

[Component.enabled](openbim_components.Component.md#enabled)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/navigation/EdgesClipper/src/edges-plane.ts:54](https://github.com/ThatOpen/engine_components/blob/178497c/src/navigation/EdgesClipper/src/edges-plane.ts#L54)

___

### update

▸ **update**(): `Promise`<`void`\>

[Updateable.update](../interfaces/openbim_components.Updateable.md#update)

#### Returns

`Promise`<`void`\>

#### Overrides

[SimplePlane](openbim_components.SimplePlane.md).[update](openbim_components.SimplePlane.md#update)

#### Defined in

[src/navigation/EdgesClipper/src/edges-plane.ts:76](https://github.com/ThatOpen/engine_components/blob/178497c/src/navigation/EdgesClipper/src/edges-plane.ts#L76)
