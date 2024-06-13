# EdgesStyles

A class representing styles for clipping edges in a 3D scene.

## Implements

- `Disposable`
- `Updateable`

## Properties

### enabled

> **enabled**: `boolean` = `true`

A boolean indicating whether the styles are enabled.
Default value is `true`.

***

### list

> **list**: [`LineStyles`](../type-aliases/LineStyles.md) = `{}`

A dictionary of [ClipStyle](../interfaces/ClipStyle.md) objects, where the keys are the names of the styles.
Default value is an empty object.

***

### onAfterUpdate

> **onAfterUpdate**: `Event` \<[`LineStyles`](../type-aliases/LineStyles.md)\>

OBC.Updateable.onAfterUpdate

#### Implementation of

`OBC.Updateable.onAfterUpdate`

***

### onBeforeUpdate

> **onBeforeUpdate**: `Event` \<[`LineStyles`](../type-aliases/LineStyles.md)\>

OBC.Updateable.onBeforeUpdate

#### Implementation of

`OBC.Updateable.onBeforeUpdate`

***

### onDisposed

> `readonly` **onDisposed**: `Event`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

## Methods

### create()

> **create**(`name`, `meshes`, `world`, `lineMaterial`?, `fillMaterial`?, `outlineMaterial`?): [`ClipStyle`](../interfaces/ClipStyle.md)

Creates a new style that applies to all clipping edges for generic models.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the style. |
| `meshes` | `Set`\<`Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\>\> | A set of meshes to apply the style to. |
| `world` | `World` | The world where the meshes are located. |
| `lineMaterial`? | `LineBasicMaterial` | The material for the lines of the style. If not provided, the default material is used. |
| `fillMaterial`? | `Material` | The material for the fill of the style. |
| `outlineMaterial`? | `MeshBasicMaterial` | The material for the outline of the style. |

#### Returns

[`ClipStyle`](../interfaces/ClipStyle.md)

The newly created style.

#### Throws

Will throw an error if the given world doesn't have a renderer.

***

### deleteStyle()

> **deleteStyle**(`id`, `disposeMaterials`): `void`

Deletes a style from the list and optionally disposes of its materials.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | The id of the style to delete. |
| `disposeMaterials` | `boolean` | `true` | <p>A boolean indicating whether to dispose of the materials associated with the style.</p><p>                          Default value is `true`.</p> |

#### Returns

`void`

#### Throws

Will throw an error if the style with the given id doesn't exist in the list.

***

### dispose()

> **dispose**(): `void`

OBC.Disposable.dispose

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`

***

### update()

> **update**(`_delta`): `void`

OBC.Updateable.update

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_delta` | `number` |

#### Returns

`void`

#### Implementation of

`OBC.Updateable.update`
