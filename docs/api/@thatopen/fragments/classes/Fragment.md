# Fragment

Class representing a fragment of a 3D model. Fragments are just a simple wrapper around THREE.InstancedMesh. Each fragment can contain Items (identified by ItemID) which are mapped to one or many instances inside this THREE.InstancedMesh. Fragments also implement features like instance buffer resizing and hiding out of the box.

## Constructors

### new Fragment()

> **new Fragment**(`geometry`, `material`, `count`): [`Fragment`](Fragment.md)

Constructs a new Fragment.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | The geometry of the fragment. |
| `material` | `Material` \| `Material`[] | The material(s) of the fragment. |
| `count` | `number` | The initial number of instances in the fragment. |

#### Returns

[`Fragment`](Fragment.md)

## Properties

### capacity

> **capacity**: `number` = `0`

The amount of instances that this fragment can contain.

***

### capacityOffset

> **capacityOffset**: `number` = `10`

The amount by which to increase the capacity when necessary.

***

### group?

> `optional` **group**: [`FragmentsGroup`](FragmentsGroup.md)

The group of fragments to which this fragment belongs.

***

### hiddenItems

> **hiddenItems**: `Set`\<`number`\>

A set of item IDs of instances that are currently hidden.

***

### id

> **id**: `string`

The unique identifier of this fragment.

***

### ids

> **ids**: `Set`\<`number`\>

A set of unique item IDs associated with this fragment.

***

### instanceToItem

> **instanceToItem**: `Map`\<`number`, `number`\>

A map of instance IDs to item IDs.

***

### itemToInstances

> **itemToInstances**: `Map`\<`number`, `Set`\<`number`\>\>

A map of item IDs to sets of instance IDs.

***

### mesh

> **mesh**: [`FragmentMesh`](FragmentMesh.md)

The mesh associated with this fragment.

## Accessors

### uniqueVertices

> `get` **uniqueVertices**(): `Vector3`[]

A getter property that returns the unique vertices of the fragment's geometry.
The unique vertices are determined by comparing the vertex positions.

#### Returns

`Vector3`[]

An array of unique vertices.

## Methods

### add()

> **add**(`items`): `void`

Adds items to the fragment.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `items` | [`Item`](../interfaces/Item.md)[] | <p>An array of items to be added. Each item contains an ID, an array of transform matrices, and an optional array of colors.</p><p> If the necessary capacity to accommodate the new items exceeds the current capacity,</p><p> a new mesh with a larger capacity is created, and the old mesh is disposed.</p><p> The transform matrices and colors of the items are added to the respective attributes of the mesh.</p><p> The instance IDs, item IDs, and associations between instance IDs and item IDs are updated accordingly.</p><p> The instance color and matrix attributes of the mesh are updated.</p> |

#### Returns

`void`

***

### applyTransform()

> **applyTransform**(`itemIDs`, `transform`): `void`

Applies a transformation matrix to instances associated with given item IDs.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `itemIDs` | `Iterable`\<`number`\> | An iterable of item IDs to be affected. |
| `transform` | `Matrix4` | The transformation matrix to be applied. |

#### Returns

`void`

#### Remarks

This method applies the provided transformation matrix to the instances associated with the given item IDs.

#### Example

```typescript
fragment.applyTransform([1, 2, 3], new THREE.Matrix4().makeTranslation(1, 0, 0)); // Applies a translation of (1, 0, 0) to instances with IDs 1, 2, and 3.
```

***

### clear()

> **clear**(): `void`

Clears the fragment by resetting the hidden items, item IDs, instance-to-item associations,
instance-to-item map, and the count of instances in the fragment's mesh.

#### Returns

`void`

#### Remarks

This method is used to reset the fragment to its initial state.

#### Example

```typescript
fragment.clear();
```

***

### dispose()

> **dispose**(`disposeResources`): `void`

Disposes of the fragment and its associated resources.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `disposeResources` | `boolean` | `true` | If true, disposes geometries and materials associated with the fragment. If false, only disposes of the fragment itself. |

#### Returns

`void`

***

### exportData()

> **exportData**(): `object`

Exports the fragment's geometry and associated data.

#### Returns

`object`

An object containing the exported geometry, an array of IDs associated with the fragment, and the fragment's ID.

##### colors

> **colors**: `number`[]

##### groups

> **groups**: `number`[]

##### id

> **id**: `string`

##### ids

> **ids**: `number`[]

##### index

> **index**: `number`[]

##### materials

> **materials**: `number`[]

##### matrices

> **matrices**: `number`[]

##### normal

> **normal**: `Float32Array`

##### position

> **position**: `Float32Array`

#### Remarks

This method is used to export the fragment's geometry and associated data for further processing or storage.

#### Example

```typescript
const exportedData = fragment.exportData();
// Use the exportedData object for further processing or storage
```

***

### get()

> **get**(`itemID`): [`Item`](../interfaces/Item.md)

Retrieves the transform matrices and colors of instances associated with a given item ID.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `itemID` | `number` | The unique identifier of the item. |

#### Returns

[`Item`](../interfaces/Item.md)

An object containing the item ID, an array of transform matrices, and an optional array of colors.
If no colors are found, the colors array will be undefined.

#### Throws

Will throw an error if the item is not found.

***

### getInstancesIDs()

> **getInstancesIDs**(`itemID`): `null` \| `Set`\<`number`\>

Retrieves the instance IDs associated with a given item ID.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `itemID` | `number` | The unique identifier of the item. |

#### Returns

`null` \| `Set`\<`number`\>

The set of instance IDs associated with the item, or null if no association exists.

***

### getItemID()

> **getItemID**(`instanceID`): `null` \| `number`

Retrieves the item ID associated with a given instance ID.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `instanceID` | `number` | The unique identifier of the instance. |

#### Returns

`null` \| `number`

The item ID associated with the instance, or null if no association exists.

***

### remove()

> **remove**(`itemsIDs`): `void`

Removes items from the fragment.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `itemsIDs` | `Iterable`\<`number`\> | <p>An iterable of item IDs to be removed.</p><p> The instance IDs, item IDs, and associations between instance IDs and item IDs are updated accordingly.</p><p> The instance color and matrix attributes of the mesh are updated.</p> |

#### Returns

`void`

#### Throws

Will throw an error if the instances are not found.

***

### resetColor()

> **resetColor**(`itemIDs`): `void`

Resets the color of items in the fragment to their original colors.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `itemIDs` | `Iterable`\<`number`\> | An iterable of item IDs to be affected. If not provided, all items in the fragment will be affected. |

#### Returns

`void`

#### Example

```typescript
fragment.resetColor([1, 2, 3]); // Resets the color of items with IDs 1, 2, and 3 to their original colors.
fragment.resetColor(); // Resets the color of all items in the fragment to their original colors.
```

***

### setColor()

> **setColor**(`color`, `itemIDs`, `override`): `void`

Sets the color of items in the fragment.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color` | `Color` | `undefined` | The color to be set for the items. |
| `itemIDs` | `Iterable`\<`number`\> | `undefined` | An iterable of item IDs to be affected. If not provided, all items in the fragment will be affected. |
| `override` | `boolean` | `false` | A boolean indicating whether the original color should be overridden. If true, the original color will be replaced with the new color. |

#### Returns

`void`

#### Example

```typescript
fragment.setColor(new THREE.Color(0xff0000), [1, 2, 3], true); // Sets the color of items with IDs 1, 2, and 3 to red, overriding their original colors.
fragment.setColor(new THREE.Color(0x00ff00)); // Sets the color of all items in the fragment to green.
```

***

### setVisibility()

> **setVisibility**(`visible`, `itemIDs`): `void`

Sets the visibility of items in the fragment.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | A boolean indicating whether the items should be visible or hidden. |
| `itemIDs` | `Iterable`\<`number`\> | An iterable of item IDs to be affected. If not provided, all items in the fragment will be affected. |

#### Returns

`void`

#### Remarks

This method updates the visibility of items in the fragment based on the provided visibility flag.

#### Example

```typescript
fragment.setVisibility(true, [1, 2, 3]); // Makes items with IDs 1, 2, and 3 visible.
fragment.setVisibility(false); // Makes all items in the fragment hidden.
```

***

### update()

> **update**(): `void`

Updates the instance color and matrix attributes of the fragment's mesh.
This method should be called whenever the instance color or matrix attributes
need to be updated.

#### Returns

`void`
