# ContextMenu

Heloooooooooo

## Extends

- `LitElement`

## Methods

### updatePosition()

> **updatePosition**(`target`?): `Promise`\<`void`\>

Asynchronously updates the position of the context menu relative to a target element.
If no target element is provided, it attempts to use the parent node as the target.
The position is calculated using the `computePosition` function from `@floating-ui/dom`,
which considers various adjustments like offset, inline positioning, flipping, and shifting
to ensure the context menu is properly placed relative to the target element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `target`? | `HTMLElement` | <p>The target element relative to which the context menu should be positioned.</p><p>                                If not provided, the parent node is used as the target.</p> |

#### Returns

`Promise`\<`void`\>

A promise that resolves once the position has been updated. This method
                         does not explicitly return a value but updates the context menu's style
                         properties to position it on the screen.
