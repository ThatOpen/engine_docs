---
id: "Components"
title: "Class: Components"
sidebar_label: "Components"
sidebar_position: 0
custom_edit_url: null
---

The entry point of Open BIM Components.
It contains the basic items to create a BIM 3D scene based on Three.js, as
well as all the tools provided by this library. It also manages the update
loop of everything. Each instance has to be initialized with [init](Components.md#init).

## Properties

### meshes

• `Readonly` **meshes**: `Mesh`<`BufferGeometry`, `Material` \| `Material`[]\>[] = `[]`

All the loaded [meshes](https://threejs.org/docs/#api/en/objects/Mesh).
This includes IFC models, fragments, 3D scans, etc.

#### Defined in

types/components.ts:31

___

### tools

• `Readonly` **tools**: [`ToolComponents`](ToolComponents.md)

[ToolComponents](ToolComponents.md)

#### Defined in

types/components.ts:25

## Accessors

### camera

• `get` **camera**(): [`Component`](Component.md)<`Camera`\>

The [Three.js camera](https://threejs.org/docs/#api/en/cameras/Camera)
that determines the point of view of the renderer.
```

#### Returns

[`Component`](Component.md)<`Camera`\>

#### Defined in

types/components.ts:82

• `set` **camera**(`camera`): `void`

This needs to be initialized before calling init().

#### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | [`Component`](Component.md)<`Camera`\> |

#### Returns

`void`

#### Defined in

types/components.ts:92

___

### raycaster

• `get` **raycaster**(): [`Raycaster`](../interfaces/Raycaster.md)

A component using the [Three.js raycaster](https://threejs.org/docs/#api/en/core/Raycaster)
used primarily to pick 3D items with the mouse or a touch screen.

#### Returns

[`Raycaster`](../interfaces/Raycaster.md)

#### Defined in

types/components.ts:100

• `set` **raycaster**(`raycaster`): `void`

Although this is not necessary to make the library work, it's necessary
to initialize this if any component that needs a raycaster is used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `raycaster` | [`Raycaster`](../interfaces/Raycaster.md) |

#### Returns

`void`

#### Defined in

types/components.ts:111

___

### renderer

• `get` **renderer**(): [`BaseRenderer`](BaseRenderer.md)

The [Three.js renderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer)
used to render the scene. This library provides multiple renderer
components with pre-made functionality (e.g. rendering of 2D CSS elements.

#### Returns

[`BaseRenderer`](BaseRenderer.md)

#### Defined in

types/components.ts:45

• `set` **renderer**(`renderer`): `void`

This needs to be initialized before calling init().

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`BaseRenderer`](BaseRenderer.md) |

#### Returns

`void`

#### Defined in

types/components.ts:55

___

### scene

• `get` **scene**(): [`Component`](Component.md)<`Scene`\>

The [Three.js scene](https://threejs.org/docs/#api/en/scenes/Scene)
where all the rendered items are placed.

#### Returns

[`Component`](Component.md)<`Scene`\>

#### Defined in

types/components.ts:63

• `set` **scene**(`scene`): `void`

This needs to be initialized before calling init().

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Component`](Component.md)<`Scene`\> |

#### Returns

`void`

#### Defined in

types/components.ts:73

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

types/components.ts:147

___

### init

▸ **init**(): `void`

Initializes the library. It should be called at the start of the app after
initializing the scene, the renderer and the
camera. Additionally, if any component that need a raycaster is
used, the [raycaster](Components.md#raycaster) will need to be initialized.

#### Returns

`void`

#### Defined in

types/components.ts:127
