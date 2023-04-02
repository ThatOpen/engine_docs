---
id: "components.Resizeable"
title: "Interface: Resizeable"
sidebar_label: "Resizeable"
custom_edit_url: null
---

[components](../modules/components.md).Resizeable

Whether this component can be resized. The meaning of this can vary depending
on the component: resizing a
[Renderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer)
component could mean changing its resolution, whereas resizing a
[Mesh](https://threejs.org/docs/#api/en/objects/Mesh) would change its scale.

## Implemented by

- [`BaseRenderer`](../classes/components.BaseRenderer.md)
- [`SimpleRenderer`](../classes/components.SimpleRenderer.md)

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

components/types/base-types.ts:93

___

### resize

• **resize**: (`size?`: `Vector2`) => `void`

#### Type declaration

▸ (`size?`): `void`

Sets size of this component (e.g. the resolution of a
[Renderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer)
component.

##### Parameters

| Name | Type |
| :------ | :------ |
| `size?` | `Vector2` |

##### Returns

`void`

#### Defined in

components/types/base-types.ts:88
