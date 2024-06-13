# ShadowDropper

This component drops shadows on meshes in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/ShadowDropper). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/ShadowDropper).

## Extends

- `Component`

## Implements

- `Disposable`

## Properties

### amount

> **amount**: `number` = `3.5`

The amount of blur applied to the shadow.
A higher value makes the shadow more blurred.

***

### cameraHeight

> **cameraHeight**: `number` = `10`

Controls how far away the shadow is computed

***

### darkness

> **darkness**: `number` = `1.2`

The darkness of the shadow.
A higher value makes the shadow darker.

***

### enabled

> **enabled**: `boolean` = `true`

OBC.Component.enabled

#### Overrides

`OBC.Component.enabled`

***

### list

> **list**: [`Shadows`](../interfaces/Shadows.md) = `{}`

A collection of shadows, where each shadow is identified by a unique ID.

***

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### opacity

> **opacity**: `number` = `1`

The opacity of the shadow.
A higher value makes the shadow more opaque.

***

### planeColor

> **planeColor**: `number` = `0xffffff`

The color of the shadow plane.
This color is used when the ground color plane is enabled.

***

### resolution

> **resolution**: `number` = `512`

The resolution of the shadow texture.
A higher value results in a higher-quality shadow.

***

### shadowExtraScaleFactor

> **shadowExtraScaleFactor**: `number` = `1.5`

The extra scale factor applied to the shadow size.
A higher value makes the shadow larger.

***

### shadowOffset

> **shadowOffset**: `number` = `0`

The offset of the shadow from the ground.
A positive value moves the shadow upwards.

***

### uuid

> `static` `readonly` **uuid**: `"f833a09a-a3ab-4c58-b03e-da5298c7a1b6"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### create()

> **create**(`model`, `id`, `world`): `Group`\<`Object3DEventMap`\>

Creates a blurred dropped shadow of the given mesh.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>[] | the mesh whose shadow to generate. |
| `id` | `string` | the name of this shadow. |
| `world` | `World` | - |

#### Returns

`Group`\<`Object3DEventMap`\>

***

### deleteShadow()

> **deleteShadow**(`id`): `void`

Deletes the specified shadow (if it exists).

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the name of this shadow. |

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

OBC.Disposable.dispose

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`
