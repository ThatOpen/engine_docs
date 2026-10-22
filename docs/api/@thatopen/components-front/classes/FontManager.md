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

> **createTextMesh**(`text`, `fontSize`, `color`, `opacity`): `null` \| `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`, `BufferGeometryEventMap`\>, `Material`\<`MaterialEventMap`\> \| `Material`\<`MaterialEventMap`\>[], `Object3DEventMap`\>

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

`null` \| `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`, `BufferGeometryEventMap`\>, `Material`\<`MaterialEventMap`\> \| `Material`\<`MaterialEventMap`\>[], `Object3DEventMap`\>

***

### load()

> **load**(`url`): `Promise`\<`void`\>

Loads a TTF font from `url`.

`TTFLoader` is imported here, at the point of use, and not at the top of
the module: since three r185 it imports opentype.js from a CDN
(`https://cdn.jsdelivr.net/...`), so a static import made every consumer
of this package fetch that URL on load (and fail to link in Node), even
apps that never load a font. Rejects if the loader, opentype.js or the
font cannot be fetched.

Apps that must not reach a CDN can alias that URL to a local copy of
opentype.js in their bundler, or assign an already parsed font to
FontManager.font directly.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`\<`void`\>
