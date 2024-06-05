---
id: "thatopen_components.Components"
title: "Class: Components"
sidebar_label: "Components"
custom_edit_url: null
---

[@thatopen/components](../modules/thatopen_components.md).Components

The entry point of the Components library.
It can:
- Create and access all the components of the library.
- Update all the updatable components automatically.
- Dispose all the components, preventing memory leaks.

## Implements

- [`Disposable`](../interfaces/thatopen_components.Disposable.md)

## Properties

### enabled

• **enabled**: `boolean` = `false`

If disabled, the animation loop will be stopped.

#### Defined in

[packages/core/src/core/Components/index.ts:27](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Components/index.ts#L27)

___

### list

• `Readonly` **list**: `Map`<`string`, [`Component`](thatopen_components.Component.md)\>

The list of components created in this app.

#### Defined in

[packages/core/src/core/Components/index.ts:24](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Components/index.ts#L24)

___

### onDisposed

• `Readonly` **onDisposed**: [`Event`](thatopen_components.Event.md)<`void`\>

[Disposable.onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Implementation of

[Disposable](../interfaces/thatopen_components.Disposable.md).[onDisposed](../interfaces/thatopen_components.Disposable.md#ondisposed)

#### Defined in

[packages/core/src/core/Components/index.ts:21](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Components/index.ts#L21)

## Methods

### dispose

▸ **dispose**(): `void`

Disposes the memory of all the components and tools of this instance of
the library. A memory leak will be created if:

- An instance of the library ends up out of scope and this function isn't
called. This is especially relevant in Single Page Applications (React,
Angular, Vue, etc).

- Any of the objects of this instance (meshes, geometries, etc) is
referenced by a reference type (object or array).

You can learn more about how Three.js handles memory leaks
[here](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects).

#### Returns

`void`

#### Implementation of

[Disposable](../interfaces/thatopen_components.Disposable.md).[dispose](../interfaces/thatopen_components.Disposable.md#dispose)

#### Defined in

[packages/core/src/core/Components/index.ts:91](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Components/index.ts#L91)

___

### get

▸ **get**<`U`\>(`Component`): `U`

Retrieves a component. If it already exists in this app, it returns the instance of the component. If it
doesn't exist, it will instance it automatically.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`Component`](thatopen_components.Component.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Component` | `Object` | The component to get or create. |

#### Returns

`U`

#### Defined in

[packages/core/src/core/Components/index.ts:46](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Components/index.ts#L46)

___

### init

▸ **init**(): `void`

Initializes the library. It should be called at the start of the app after
initializing the scene, the renderer and the
camera. Additionally, if any component that need a raycaster is
used, the raycaster will need to be initialized.

#### Returns

`void`

#### Defined in

[packages/core/src/core/Components/index.ts:70](https://github.com/ThatOpen/engine_components/blob/630a314/packages/core/src/core/Components/index.ts#L70)
