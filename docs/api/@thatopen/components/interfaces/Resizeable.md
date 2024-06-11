# Resizeable

Whether this component can be resized. The meaning of this can vary depending on the component: resizing a [Renderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer) component could mean changing its resolution, whereas resizing a [Mesh](https://threejs.org/docs/#api/en/objects/Mesh) would change its scale.

## Properties

### getSize()

> **getSize**: () => `Vector2`

Gets the current size of this component (e.g. the resolution of a
[Renderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer)
component.

#### Returns

`Vector2`

***

### onResize

> **onResize**: [`Event`](../classes/Event.md)\<`Vector2`\>

Event that fires when the component has been resized.

***

### resize()

> **resize**: (`size`?) => `void`

Sets size of this component (e.g. the resolution of a
[Renderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer)
component.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `size`? | `Vector2` |

#### Returns

`void`
