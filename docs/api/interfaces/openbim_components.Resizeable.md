---
id: "openbim_components.Resizeable"
title: "Interface: Resizeable"
sidebar_label: "Resizeable"
custom_edit_url: null
---

[openbim-components](../modules/openbim_components.md).Resizeable

Whether this component can be resized. The meaning of this can vary depending
on the component: resizing a
[Renderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer)
component could mean changing its resolution, whereas resizing a
[Mesh](https://threejs.org/docs/#api/en/objects/Mesh) would change its scale.

## Implemented by

- [`BaseRenderer`](../classes/openbim_components.BaseRenderer.md)
- [`Simple2DScene`](../classes/openbim_components.Simple2DScene.md)
- [`SimpleRenderer`](../classes/openbim_components.SimpleRenderer.md)

## Properties

### getSize

• **getSize**: () => `Vector2`

#### Type declaration

▸ (): `Vector2`

Gets the current size of this component (e.g. the resolution of a
[Renderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer)
component.

##### Returns

`Vector2`

#### Defined in

[src/base-types/base-types.ts:103](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-types.ts#L103)

---

### onResize

• **onResize**: [`Event`](../classes/openbim_components.Event.md)<`Vector2`\>

Event that fires when the component has been resized.

#### Defined in

[src/base-types/base-types.ts:96](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-types.ts#L96)

---

### resize

• **resize**: (`size?`: `Vector2`) => `void`

#### Type declaration

▸ (`size?`): `void`

Sets size of this component (e.g. the resolution of a
[Renderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer)
component.

##### Parameters

| Name    | Type      |
| :------ | :-------- |
| `size?` | `Vector2` |

##### Returns

`void`

#### Defined in

[src/base-types/base-types.ts:93](https://github.com/ThatOpen/engine_components/blob/444e81a/src/base-types/base-types.ts#L93)
