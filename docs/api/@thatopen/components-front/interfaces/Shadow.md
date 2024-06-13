# Shadow

Represents a shadow object used in the application.

## Properties

### blurPlane

> **blurPlane**: `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>

The mesh used for blurring the shadow.

***

### camera

> **camera**: `Camera`

The camera used to render the shadow.

***

### root

> **root**: `Group`\<`Object3DEventMap`\>

The root group of the shadow.

***

### rt

> **rt**: `WebGLRenderTarget`\<`Texture`\>

The render target for the shadow texture.

***

### rtBlur

> **rtBlur**: `WebGLRenderTarget`\<`Texture`\>

The render target for the blurred shadow texture.

***

### world

> **world**: `World`

The world in which the shadow is rendered.
