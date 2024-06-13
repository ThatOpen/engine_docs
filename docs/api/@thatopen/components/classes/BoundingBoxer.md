# BoundingBoxer

A simple implementation of bounding box that works for fragments. The resulting bbox is not 100% precise, but it's fast, and should suffice for general use cases such as camera zooming or general boundary determination. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/BoundingBoxer). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/BoundingBoxer).

## Extends

- [`Component`](Component.md)

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

#### Overrides

[`Component`](Component.md) . [`enabled`](Component.md#enabled)

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

## Methods

### add()

> **add**(`group`): `void`

Adds a FragmentsGroup to the BoundingBoxer.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `group` | `FragmentsGroup` | The FragmentsGroup to add. |

#### Returns

`void`

#### Remarks

This method iterates through each fragment in the provided FragmentsGroup,
and calls the `addMesh` method for each fragment's mesh.

#### Example

```typescript
const boundingBoxer = components.get(BoundingBoxer);
boundingBoxer.add(fragmentsGroup);
```

***

### addMesh()

> **addMesh**(`mesh`, `itemIDs`?): `void`

Adds a mesh to the BoundingBoxer and calculates the bounding box.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mesh` | `Mesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[], `Object3DEventMap`\> \| `InstancedMesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[]\> \| `CurveMesh`\<`BufferGeometry`\<`NormalBufferAttributes`\>, `Material` \| `Material`[]\> | The mesh to add. It can be an instance of THREE.InstancedMesh, THREE.Mesh, or FRAGS.CurveMesh. |
| `itemIDs`? | `Iterable`\<`number`\> | An optional iterable of numbers representing the item IDs. |

#### Returns

`void`

#### Remarks

This method calculates the bounding box of the provided mesh and updates the internal minimum and maximum vectors.
If the mesh is an instance of THREE.InstancedMesh, it calculates the bounding box for each instance.
If the mesh is an instance of FRAGS.FragmentMesh and itemIDs are provided, it calculates the bounding box for the specified item IDs.

#### Example

```typescript
const boundingBoxer = components.get(BoundingBoxer);
boundingBoxer.addMesh(mesh);
```

***

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### get()

> **get**(): `Box3`

Returns the bounding box of the calculated fragments.

#### Returns

`Box3`

A new THREE.Box3 instance representing the bounding box.

#### Remarks

This method clones the internal minimum and maximum vectors and returns a new THREE.Box3 instance.
The returned box represents the bounding box of the calculated fragments.

#### Example

```typescript
const boundingBox = boundingBoxer.get();
console.log(boundingBox); // Output: Box3 { min: Vector3 { x: -10, y: -10, z: -10 }, max: Vector3 { x: 10, y: 10, z: 10 } }
```

***

### getMesh()

> **getMesh**(): `Mesh`\<`BoxGeometry`, `Material` \| `Material`[], `Object3DEventMap`\>

Returns a THREE.Mesh instance representing the bounding box.

#### Returns

`Mesh`\<`BoxGeometry`, `Material` \| `Material`[], `Object3DEventMap`\>

A new THREE.Mesh instance representing the bounding box.

#### Remarks

This method calculates the dimensions of the bounding box using the `getDimensions` method.
It then creates a new THREE.BoxGeometry with the calculated dimensions.
A new THREE.Mesh is created using the box geometry, and it is added to the `_meshes` array.
The position of the mesh is set to the center of the bounding box.

#### Example

```typescript
const boundingBoxer = components.get(BoundingBoxer);
boundingBoxer.add(fragmentsGroup);
const boundingBoxMesh = boundingBoxer.getMesh();
scene.add(boundingBoxMesh);
```

***

### getSphere()

> **getSphere**(): `Sphere`

Calculates and returns a sphere that encompasses the entire bounding box.

#### Returns

`Sphere`

A new THREE.Sphere instance representing the calculated sphere.

#### Remarks

This method calculates the center and radius of a sphere that encompasses the entire bounding box.
The center is calculated as the midpoint between the minimum and maximum bounds of the bounding box.
The radius is calculated as the distance from the center to the minimum bound.

#### Example

```typescript
const boundingBoxer = components.get(BoundingBoxer);
boundingBoxer.add(fragmentsGroup);
const boundingSphere = boundingBoxer.getSphere();
console.log(boundingSphere); // Output: Sphere { center: Vector3 { x: 0, y: 0, z: 0 }, radius: 10 }
```

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

### reset()

> **reset**(): `void`

Resets the internal minimum and maximum vectors to positive and negative infinity, respectively.
This method is used to prepare the BoundingBoxer for a new set of fragments.

#### Returns

`void`

#### Remarks

This method is called when a new set of fragments is added to the BoundingBoxer.
It ensures that the bounding box calculations are accurate and up-to-date.

#### Example

```typescript
const boundingBoxer = components.get(BoundingBoxer);
boundingBoxer.add(fragmentsGroup);
// ...
boundingBoxer.reset();
```

***

### getBounds()

> `static` **getBounds**(`points`, `min`?, `max`?): `Box3`

A static method to calculate the bounding box of a set of points.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `points` | `Vector3`[] | An array of THREE.Vector3 representing the points. |
| `min`? | `Vector3` | An optional THREE.Vector3 representing the minimum bounds. If not provided, it will be calculated. |
| `max`? | `Vector3` | An optional THREE.Vector3 representing the maximum bounds. If not provided, it will be calculated. |

#### Returns

`Box3`

A THREE.Box3 representing the bounding box of the given points.

#### Remarks

This method calculates the bounding box of a set of points by iterating through each point and updating the minimum and maximum bounds accordingly.
If the `min` or `max` parameters are provided, they will be used as the initial bounds. Otherwise, the initial bounds will be set to positive and negative infinity.

#### Example

```typescript
const points = [
  new THREE.Vector3(1, 2, 3),
  new THREE.Vector3(4, 5, 6),
  new THREE.Vector3(7, 8, 9),
];

const bbox = BoundingBoxer.getBounds(points);
console.log(bbox); // Output: Box3 { min: Vector3 { x: 1, y: 2, z: 3 }, max: Vector3 { x: 7, y: 8, z: 9 } }
```

***

### getDimensions()

> `static` **getDimensions**(`bbox`): `object`

A static method to calculate the dimensions of a given bounding box.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `bbox` | `Box3` | The bounding box to calculate the dimensions for. |

#### Returns

`object`

An object containing the width, height, depth, and center of the bounding box.

##### center

> **center**: `Vector3`

##### depth

> **depth**: `number`

##### height

> **height**: `number`

##### width

> **width**: `number`

***

### newBound()

> `static` **newBound**(`positive`): `Vector3`

A static method to create a new bounding box boundary.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `positive` | `boolean` | A boolean indicating whether to create a boundary for positive or negative values. |

#### Returns

`Vector3`

A new THREE.Vector3 representing the boundary.

#### Remarks

This method is used to create a new boundary for calculating bounding boxes.
It sets the x, y, and z components of the returned vector to positive or negative infinity,
depending on the value of the `positive` parameter.

#### Example

```typescript
const positiveBound = BoundingBoxer.newBound(true);
console.log(positiveBound); // Output: Vector3 { x: Infinity, y: Infinity, z: Infinity }

const negativeBound = BoundingBoxer.newBound(false);
console.log(negativeBound); // Output: Vector3 { x: -Infinity, y: -Infinity, z: -Infinity }
```
