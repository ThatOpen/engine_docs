# MeasurementUtils

Utility component for performing measurements on 3D meshes by providing methods for measuring distances between edges and faces. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/MeasurementUtils). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/MeasurementUtils).

## Extends

- [`Component`](Component.md)

## Properties

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

#### Overrides

[`Component`](Component.md) . [`enabled`](Component.md#enabled)

***

### uuid

> `static` **uuid**: `string` = `"267ca032-672f-4cb0-afa9-d24e904f39d6"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### getFace()

> **getFace**(`mesh`, `triangleIndex`, `instance`?): `null` \| `object`

Method to get the face of a mesh that contains a given triangle index.
It also returns the edges of the found face and their indices.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mesh` | `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `InstancedMesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[]\> | The mesh to get the face from. It must be indexed. |
| `triangleIndex` | `number` | The index of the triangle within the mesh. |
| `instance`? | `number` | The instance of the mesh (optional). |

#### Returns

`null` \| `object`

An object containing the edges of the found face and their indices, or null if no face was found.

***

### getVerticesAndNormal()

> **getVerticesAndNormal**(`mesh`, `faceIndex`, `instance`): `object`

Method to get the vertices and normal of a mesh face at a given index.
It also applies instance transformation if provided.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mesh` | `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `InstancedMesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[]\> | The mesh to get the face from. It must be indexed. |
| `faceIndex` | `number` | The index of the face within the mesh. |
| `instance` | `undefined` \| `number` | The instance of the mesh (optional). |

#### Returns

`object`

An object containing the vertices and normal of the face.

##### faceNormal

> **faceNormal**: `Vector3`

##### p1

> **p1**: `Vector3`

##### p2

> **p2**: `Vector3`

##### p3

> **p3**: `Vector3`

#### Throws

Will throw an error if the geometry is not indexed.

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any>`

#### Inherited from

[`Component`](Component.md) . [`isConfigurable`](Component.md#isconfigurable)

***

### isDisposeable()

> **isDisposeable**(): `this is Disposable`

Whether is component is [Disposable](../interfaces/Disposable.md).

#### Returns

`this is Disposable`

#### Inherited from

[`Component`](Component.md) . [`isDisposeable`](Component.md#isdisposeable)

***

### isHideable()

> **isHideable**(): `this is Hideable`

Whether is component is [Hideable](../interfaces/Hideable.md).

#### Returns

`this is Hideable`

#### Inherited from

[`Component`](Component.md) . [`isHideable`](Component.md#ishideable)

***

### isResizeable()

> **isResizeable**(): `this is Resizeable`

Whether is component is [Resizeable](../interfaces/Resizeable.md).

#### Returns

`this is Resizeable`

#### Inherited from

[`Component`](Component.md) . [`isResizeable`](Component.md#isresizeable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`Component`](Component.md) . [`isUpdateable`](Component.md#isupdateable)

***

### round()

> **round**(`vector`): `void`

Method to round the vector's components to a specified number of decimal places.
This is used to ensure numerical precision in edge detection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `vector` | `Vector3` | The vector to round. |

#### Returns

`void`

The vector with rounded components.

***

### distanceFromPointToLine()

> `static` **distanceFromPointToLine**(`point`, `lineStart`, `lineEnd`, `clamp`): `number`

Utility method to calculate the distance from a point to a line segment.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `point` | `Vector3` | `undefined` | The point from which to calculate the distance. |
| `lineStart` | `Vector3` | `undefined` | The start point of the line segment. |
| `lineEnd` | `Vector3` | `undefined` | The end point of the line segment. |
| `clamp` | `boolean` | `false` | If true, the distance will be clamped to the line segment's length. |

#### Returns

`number`

The distance from the point to the line segment.
