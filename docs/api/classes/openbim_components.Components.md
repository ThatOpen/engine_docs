---
id: "openbim_components.Components"
title: "Class: Components"
sidebar_label: "Components"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).Components

The entry point of Open BIM Components.
It contains the basic items to create a BIM 3D scene based on Three.js, as
well as all the tools provided by this library. It also manages the update
loop of everything. Each instance has to be initialized with [init](openbim_components.Components.md#init).

## Properties

### meshes

• `Readonly` **meshes**: `Mesh`<`BufferGeometry`<`NormalBufferAttributes`\>, `Material` \| `Material`[]\>[] = `[]`

All the loaded [meshes](https://threejs.org/docs/#api/en/objects/Mesh).
This includes fragments, 3D scans, etc.

#### Defined in

[src/core/Components/index.ts:29](https://github.com/ifcjs/components/blob/e46138a/src/core/Components/index.ts#L29)

___

### onInitialized

• `Readonly` **onInitialized**: [`Event`](openbim_components.Event.md)<[`Components`](openbim_components.Components.md)\>

Event that fires when this instance has been fully initialized and is
ready to work (scene, camera and renderer are ready).

#### Defined in

[src/core/Components/index.ts:35](https://github.com/ifcjs/components/blob/e46138a/src/core/Components/index.ts#L35)

___

### tools

• `Readonly` **tools**: [`ToolComponent`](openbim_components.ToolComponent.md)

[ToolComponent](openbim_components.ToolComponent.md)

#### Defined in

[src/core/Components/index.ts:23](https://github.com/ifcjs/components/blob/e46138a/src/core/Components/index.ts#L23)

___

### uiEnabled

• **uiEnabled**: `boolean` = `true`

Whether UI components should be created.

#### Defined in

[src/core/Components/index.ts:40](https://github.com/ifcjs/components/blob/e46138a/src/core/Components/index.ts#L40)

## Accessors

### camera

• `get` **camera**(): [`Component`](openbim_components.Component.md)<`Camera`\>

The [Three.js camera](https://threejs.org/docs/#api/en/cameras/Camera)
that determines the point of view of the renderer.

#### Returns

[`Component`](openbim_components.Component.md)<`Camera`\>

#### Defined in

[src/core/Components/index.ts:98](https://github.com/ifcjs/components/blob/e46138a/src/core/Components/index.ts#L98)

• `set` **camera**(`camera`): `void`

This needs to be initialized before calling init().

#### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | [`Component`](openbim_components.Component.md)<`Camera`\> |

#### Returns

`void`

#### Defined in

[src/core/Components/index.ts:108](https://github.com/ifcjs/components/blob/e46138a/src/core/Components/index.ts#L108)

___

### raycaster

• `get` **raycaster**(): `BaseRaycaster`

A component using the [Three.js raycaster](https://threejs.org/docs/#api/en/core/Raycaster)
used primarily to pick 3D items with the mouse or a touch screen.

#### Returns

`BaseRaycaster`

#### Defined in

[src/core/Components/index.ts:116](https://github.com/ifcjs/components/blob/e46138a/src/core/Components/index.ts#L116)

• `set` **raycaster**(`raycaster`): `void`

Although this is not necessary to make the library work, it's necessary
to initialize this if any component that needs a raycaster is used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `raycaster` | `BaseRaycaster` |

#### Returns

`void`

#### Defined in

[src/core/Components/index.ts:127](https://github.com/ifcjs/components/blob/e46138a/src/core/Components/index.ts#L127)

___

### renderer

• `get` **renderer**(): [`BaseRenderer`](openbim_components.BaseRenderer.md)

The [Three.js renderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer)
used to render the scene. This library provides multiple renderer
components with pre-made functionality (e.g. rendering of 2D CSS elements.

#### Returns

[`BaseRenderer`](openbim_components.BaseRenderer.md)

#### Defined in

[src/core/Components/index.ts:62](https://github.com/ifcjs/components/blob/e46138a/src/core/Components/index.ts#L62)

• `set` **renderer**(`renderer`): `void`

This needs to be initialized before calling init().

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`BaseRenderer`](openbim_components.BaseRenderer.md) |

#### Returns

`void`

#### Defined in

[src/core/Components/index.ts:72](https://github.com/ifcjs/components/blob/e46138a/src/core/Components/index.ts#L72)

___

### scene

• `get` **scene**(): [`Component`](openbim_components.Component.md)<`Scene`\>

The [Three.js scene](https://threejs.org/docs/#api/en/scenes/Scene)
where all the rendered items are placed.

#### Returns

[`Component`](openbim_components.Component.md)<`Scene`\>

#### Defined in

[src/core/Components/index.ts:80](https://github.com/ifcjs/components/blob/e46138a/src/core/Components/index.ts#L80)

• `set` **scene**(`scene`): `void`

This needs to be initialized before calling init().

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Component`](openbim_components.Component.md)<`Scene`\> |

#### Returns

`void`

#### Defined in

[src/core/Components/index.ts:90](https://github.com/ifcjs/components/blob/e46138a/src/core/Components/index.ts#L90)

___

### ui

• `get` **ui**(): [`UIManager`](openbim_components.UIManager.md)

[UIManager](openbim_components.UIManager.md)

#### Returns

[`UIManager`](openbim_components.UIManager.md)

#### Defined in

[src/core/Components/index.ts:50](https://github.com/ifcjs/components/blob/e46138a/src/core/Components/index.ts#L50)

## Methods

### dispose

▸ **dispose**(): `Promise`<`void`\>

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

`Promise`<`void`\>

#### Defined in

[src/core/Components/index.ts:169](https://github.com/ifcjs/components/blob/e46138a/src/core/Components/index.ts#L169)

___

### init

▸ **init**(): `Promise`<`void`\>

Initializes the library. It should be called at the start of the app after
initializing the scene, the renderer and the
camera. Additionally, if any component that need a raycaster is
used, the [raycaster](openbim_components.Components.md#raycaster) will need to be initialized.

#### Returns

`Promise`<`void`\>

#### Defined in

[src/core/Components/index.ts:143](https://github.com/ifcjs/components/blob/e46138a/src/core/Components/index.ts#L143)
