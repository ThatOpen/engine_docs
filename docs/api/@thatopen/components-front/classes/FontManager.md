# FontManager

Manages font loading and creates Three.js text meshes for annotation labels.

## Constructors

### new FontManager()

> **new FontManager**(): [`FontManager`](FontManager.md)

Owned by [DrawingEditor](DrawingEditor.md) and shared across all built-in tools.

#### Returns

[`FontManager`](FontManager.md)

## Methods

### createTextMesh()

> **createTextMesh**(`text`, `fontSize`, `color`, `opacity`): `null` \| `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`, `BufferGeometryEventMap`\>, `Material` \| `Material`[], `Object3DEventMap`\>

Creates a text mesh in the XZ plane (rotation.x = -π/2).
Returns null if the font is not yet loaded.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `fontSize` | `number` | `undefined` |
| `color` | `number` | `undefined` |
| `opacity` | `number` | `1` |

#### Returns

`null` \| `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`, `BufferGeometryEventMap`\>, `Material` \| `Material`[], `Object3DEventMap`\>
