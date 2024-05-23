---
id: "thatopen_components.SimpleRenderer"
title: "Class: SimpleRenderer"
sidebar_label: "SimpleRenderer"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).SimpleRenderer

A basic renderer capable of rendering
([Objec3Ds](https://threejs.org/docs/#api/en/core/Object3D).

## Hierarchy

- `BaseRenderer`

  ↳ **`SimpleRenderer`**

## Properties

### clippingPlanes

• **clippingPlanes**: `Plane`[] = `[]`

The list of [clipping planes](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes) used by this
instance of the renderer.

#### Inherited from

BaseRenderer.clippingPlanes

#### Defined in

[packages/core/src/core/Types/src/base-renderer.ts:42](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base-renderer.ts#L42)

___

### container

• **container**: `HTMLElement`

The HTML container of the THREE.js canvas where the scene is rendered.

#### Defined in

[packages/core/src/core/Worlds/src/simple-renderer.ts:19](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-renderer.ts#L19)

___

### onAfterUpdate

• **onAfterUpdate**: [`Event`](thatopen_components.Event.md)<`unknown`\>

[Updateable.onBeforeUpdate](../interfaces/thatopen_components.Updateable.md#onbeforeupdate)

#### Inherited from

BaseRenderer.onAfterUpdate

#### Defined in

[packages/core/src/core/Types/src/base-renderer.ts:14](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base-renderer.ts#L14)

___

### onBeforeUpdate

• **onBeforeUpdate**: [`Event`](thatopen_components.Event.md)<`unknown`\>

[Updateable.onAfterUpdate](../interfaces/thatopen_components.Updateable.md#onafterupdate)

#### Inherited from

BaseRenderer.onBeforeUpdate

#### Defined in

[packages/core/src/core/Types/src/base-renderer.ts:17](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base-renderer.ts#L17)

___

### onClippingPlanesUpdated

• `Readonly` **onClippingPlanesUpdated**: [`Event`](thatopen_components.Event.md)<`unknown`\>

Event that fires when there has been a change to the list of clipping
planes used by the active renderer.

#### Inherited from

BaseRenderer.onClippingPlanesUpdated

#### Defined in

[packages/core/src/core/Types/src/base-renderer.ts:28](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base-renderer.ts#L28)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](thatopen_components.Event.md)<`undefined`\>

[Disposable.onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Inherited from

BaseRenderer.onDisposed

#### Defined in

[packages/core/src/core/Types/src/base-renderer.ts:20](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base-renderer.ts#L20)

## Methods

### dispose

▸ **dispose**(): `void`

[Disposable.dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Returns

`void`

#### Overrides

BaseRenderer.dispose

#### Defined in

[packages/core/src/core/Worlds/src/simple-renderer.ts:74](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-renderer.ts#L74)

___

### getSize

▸ **getSize**(): `Vector2`

[Resizeable.getSize](../interfaces/thatopen_components.Resizeable.md#getsize).

#### Returns

`Vector2`

#### Overrides

BaseRenderer.getSize

#### Defined in

[packages/core/src/core/Worlds/src/simple-renderer.ts:88](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-renderer.ts#L88)

___

### isConfigurable

▸ **isConfigurable**(): this is Configurable<any\>

Whether is component is [Configurable](../interfaces/thatopen_components.Configurable.md).

#### Returns

this is Configurable<any\>

#### Inherited from

BaseRenderer.isConfigurable

#### Defined in

[packages/core/src/core/Types/src/base.ts:39](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L39)

___

### isDisposeable

▸ **isDisposeable**(): this is Disposable

Whether is component is [Disposable](../interfaces/thatopen_components.Disposable.md).

#### Returns

this is Disposable

#### Inherited from

BaseRenderer.isDisposeable

#### Defined in

[packages/core/src/core/Types/src/base.ts:17](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L17)

___

### isHideable

▸ **isHideable**(): this is Hideable

Whether is component is [Hideable](../interfaces/thatopen_components.Hideable.md).

#### Returns

this is Hideable

#### Inherited from

BaseRenderer.isHideable

#### Defined in

[packages/core/src/core/Types/src/base.ts:34](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L34)

___

### isResizeable

▸ **isResizeable**(): this is Resizeable

Whether is component is [Resizeable](../interfaces/thatopen_components.Resizeable.md).

#### Returns

this is Resizeable

#### Inherited from

BaseRenderer.isResizeable

#### Defined in

[packages/core/src/core/Types/src/base.ts:22](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L22)

___

### isUpdateable

▸ **isUpdateable**(): this is Updateable

Whether is component is [Updateable](../interfaces/thatopen_components.Updateable.md).

#### Returns

this is Updateable

#### Inherited from

BaseRenderer.isUpdateable

#### Defined in

[packages/core/src/core/Types/src/base.ts:27](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base.ts#L27)

___

### resize

▸ **resize**(`size?`): `void`

[Resizeable.resize](../interfaces/thatopen_components.Resizeable.md#resize)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size?` | `Vector2` |

#### Returns

`void`

#### Overrides

BaseRenderer.resize

#### Defined in

[packages/core/src/core/Worlds/src/simple-renderer.ts:96](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-renderer.ts#L96)

___

### setPlane

▸ **setPlane**(`active`, `plane`, `isLocal?`): `void`

Adds or removes a
[clipping plane](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.clippingPlanes)
to the renderer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |
| `plane` | `Plane` |
| `isLocal?` | `boolean` |

#### Returns

`void`

#### Inherited from

BaseRenderer.setPlane

#### Defined in

[packages/core/src/core/Types/src/base-renderer.ts:57](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base-renderer.ts#L57)

___

### update

▸ **update**(): `void`

[Updateable.update](../interfaces/thatopen_components.Updateable.md#update)

#### Returns

`void`

#### Overrides

BaseRenderer.update

#### Defined in

[packages/core/src/core/Worlds/src/simple-renderer.ts:61](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Worlds/src/simple-renderer.ts#L61)

___

### updateClippingPlanes

▸ **updateClippingPlanes**(): `void`

Forces the update of the clipping planes and all components that depend
on them that are subscribed to `onClippingPlanesUpdated`.

#### Returns

`void`

#### Inherited from

BaseRenderer.updateClippingPlanes

#### Defined in

[packages/core/src/core/Types/src/base-renderer.ts:48](https://github.com/ThatOpen/engine_components/blob/7affdb6/packages/core/src/core/Types/src/base-renderer.ts#L48)
