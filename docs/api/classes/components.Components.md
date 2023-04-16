---
id: "components.Components"
title: "Class: Components"
sidebar_label: "Components"
custom_edit_url: null
---

[components](../modules/components.md).Components

The entry point of Open BIM Components.
It contains the basic items to create a BIM 3D scene based on Three.js, as
well as all the tools provided by this library. It also manages the update
loop of everything. Each instance has to be initialized with [init](components.Components.md#init).

## Properties

### meshes

• `Readonly` **meshes**: `Mesh`<`BufferGeometry`, `Material` \| `Material`[]\>[] = `[]`

All the loaded [meshes](https://threejs.org/docs/#api/en/objects/Mesh).
This includes IFC models, fragments, 3D scans, etc.

#### Defined in

components/types/components.ts:37

___

### tools

• `Readonly` **tools**: [`ToolComponent`](components.ToolComponent.md)

[ToolComponent](components.ToolComponent.md)

#### Defined in

components/types/components.ts:26

___

### ui

• `Readonly` **ui**: `UIManager`

UIManager

#### Defined in

components/types/components.ts:31

## Accessors

### camera

• `get` **camera**(): [`Component`](components.Component.md)<`Camera`\>

The [Three.js camera](https://threejs.org/docs/#api/en/cameras/Camera)
that determines the point of view of the renderer.

#### Returns

[`Component`](components.Component.md)<`Camera`\>

#### Defined in

components/types/components.ts:87

• `set` **camera**(`camera`): `void`

This needs to be initialized before calling init().

#### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | [`Component`](components.Component.md)<`Camera`\> |

#### Returns

`void`

#### Defined in

components/types/components.ts:97

___

### raycaster

• `get` **raycaster**(): [`Raycaster`](../interfaces/components.Raycaster.md)

A component using the [Three.js raycaster](https://threejs.org/docs/#api/en/core/Raycaster)
used primarily to pick 3D items with the mouse or a touch screen.

#### Returns

[`Raycaster`](../interfaces/components.Raycaster.md)

#### Defined in

components/types/components.ts:105

• `set` **raycaster**(`raycaster`): `void`

Although this is not necessary to make the library work, it's necessary
to initialize this if any component that needs a raycaster is used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `raycaster` | [`Raycaster`](../interfaces/components.Raycaster.md) |

#### Returns

`void`

#### Defined in

components/types/components.ts:116

___

### renderer

• `get` **renderer**(): [`BaseRenderer`](components.BaseRenderer.md)

The [Three.js renderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer)
used to render the scene. This library provides multiple renderer
components with pre-made functionality (e.g. rendering of 2D CSS elements.

#### Returns

[`BaseRenderer`](components.BaseRenderer.md)

#### Defined in

components/types/components.ts:51

• `set` **renderer**(`renderer`): `void`

This needs to be initialized before calling init().

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`BaseRenderer`](components.BaseRenderer.md) |

#### Returns

`void`

#### Defined in

components/types/components.ts:61

___

### scene

• `get` **scene**(): [`Component`](components.Component.md)<`Scene`\>

The [Three.js scene](https://threejs.org/docs/#api/en/scenes/Scene)
where all the rendered items are placed.

#### Returns

[`Component`](components.Component.md)<`Scene`\>

#### Defined in

components/types/components.ts:69

• `set` **scene**(`scene`): `void`

This needs to be initialized before calling init().

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Component`](components.Component.md)<`Scene`\> |

#### Returns

`void`

#### Defined in

components/types/components.ts:79

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

#### Defined in

components/types/components.ts:154

___

### init

▸ **init**(): `void`

Initializes the library. It should be called at the start of the app after
initializing the scene, the renderer and the
camera. Additionally, if any component that need a raycaster is
used, the [raycaster](components.Components.md#raycaster) will need to be initialized.

#### Returns

`void`

#### Defined in

components/types/components.ts:133
