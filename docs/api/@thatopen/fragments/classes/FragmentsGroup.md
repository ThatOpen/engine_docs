# FragmentsGroup

A class representing a group of 3D fragments. This class extends THREE.Group and adds additional properties and methods for managing and interacting with the fragments it contains.

## Extends

- `Group`

## Constructors

### new FragmentsGroup()

> **new FragmentsGroup**(): [`FragmentsGroup`](FragmentsGroup.md)

Creates a new Group.

#### Returns

[`FragmentsGroup`](FragmentsGroup.md)

#### Inherited from

`THREE.Group.constructor`

## Properties

### boundingBox

> **boundingBox**: `Box3`

A THREE.Box3 object representing the bounding box of all fragments in this group.

***

### civilData?

> `optional` **civilData**: `object`

An optional object containing civil engineering data.

#### alignments

> **alignments**: `Map`\<`number`, [`Alignment`](Alignment.md)\>

#### coordinationMatrix

> **coordinationMatrix**: `Matrix4`

***

### coordinationMatrix

> **coordinationMatrix**: `Matrix4`

A THREE.Matrix4 object representing the coordination matrix of this group.

***

### data

> **data**: `Map`\<`number`, [`number`[], `number`[]]\>

A Map object where the keys are express IDs and the values are arrays of two arrays.
The first array contains fragment keys to which this asset belongs, and the second array contains floor and category IDs.

***

### geometryIDs

> **geometryIDs**: `object`

An object with two Map properties, 'opaque' and 'transparent', representing the geometry IDs and keys of opaque and transparent fragments. They must be distinguished because THREE.js doesn't support transparency per instance in InstancedMesh.

#### opaque

> **opaque**: `Map`\<`number`, `number`\>

#### transparent

> **transparent**: `Map`\<`number`, `number`\>

***

### globalToExpressIDs

> **globalToExpressIDs**: `Map`\<`string`, `number`\>

A Map object where the keys are global IDs and the values are expressIDs.

***

### ifcMetadata

> **ifcMetadata**: [`IfcMetadata`](../interfaces/IfcMetadata.md)

An object representing metadata about the IFC model defined by the IFC schema.

***

### isStreamed

> **isStreamed**: `boolean` = `false`

Whether this fragments group is being streamed or not.

***

### items

> **items**: [`Fragment`](Fragment.md)[] = `[]`

An array of Fragment objects that are part of this group.

***

### keyFragments

> **keyFragments**: `Map`\<`number`, `string`\>

A Map object where the keys are uints and the values are strings representing fragment IDs.
This is used to save memory by mapping keys to fragment IDs.

***

### streamSettings

> **streamSettings**: `object`

An object containing settings for streaming data, including base URL, base file name, IDs, and types.

#### baseFileName

> **baseFileName**: `string`

#### ~~baseUrl?~~

> `optional` **baseUrl**: `string`

##### Deprecated

use FragmentsGroup.baseUrl instead

#### ids

> **ids**: `Map`\<`number`, `number`\>

#### types

> **types**: `Map`\<`number`, `number`[]\>

***

### propertiesDB

> `static` **propertiesDB**: `null` \| `StreamerFileDb` = `null`

The object in charge of caching property files locally to save requests over the network.

***

### url

> `static` **url**: `string` = `""`

Default URL for requesting property tiles. Feel free to change this, or override the FragmentsGroup.fetch method for more granular control.

***

### useCache

> `static` **useCache**: `boolean` = `true`

Whether to use local cache when streaming properties.

## Accessors

### hasProperties

> `get` **hasProperties**(): `boolean`

A getter that checks if this group has properties, either locally defined or streamed from a data source.

#### Returns

`boolean`

## Methods

### cloneGroup()

> **cloneGroup**(`items`?): [`FragmentsGroup`](FragmentsGroup.md)

Creates a copy of the whole group or a part of it. Each fragment clone shares the geometry of with its respective original fragment, but has its own InstancedMesh data, so it also needs to be disposed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `items`? | [`FragmentIdMap`](../interfaces/FragmentIdMap.md) | Optional - The part of the group to be cloned. If not given, the whole group is cloned. |

#### Returns

[`FragmentsGroup`](FragmentsGroup.md)

***

### dispose()

> **dispose**(`disposeResources`): `void`

Method to dispose of the resources used by the FragmentsGroup.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `disposeResources` | `boolean` | `true` | If true, also dispose of the resources used by the fragments (geometries and materials). Default is true. |

#### Returns

`void`

***

### getAllPropertiesIDs()

> **getAllPropertiesIDs**(): `number`[]

Method to retrieve all property IDs from either local properties or streamed properties.

#### Returns

`number`[]

- An array of property IDs.

#### Example

```typescript
const propertyIDs = fragmentsGroup.getAllPropertiesIDs();
console.log(propertyIDs); // Output: [12345, 67890,...]
```

***

### getAllPropertiesOfType()

> **getAllPropertiesOfType**(`type`): `Promise`\<`null` \| [`IfcProperties`](../interfaces/IfcProperties.md)\>

Method to retrieve all properties of a specific type from either local properties or streamed properties.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | `number` | The type of properties to retrieve. |

#### Returns

`Promise`\<`null` \| [`IfcProperties`](../interfaces/IfcProperties.md)\>

A Promise that resolves to an object containing properties of type IfcProperties, or null if no properties of the specified type are found.

#### Example

```typescript
const type = 1001; // Example type
fragmentsGroup.getAllPropertiesOfType(type).then((properties) => {
  if (properties) {
    for (const id in properties) {
      const property = properties[id];
      console.log(`ID: ${id}, Name: ${property.name}, Type: ${property.type}`);
    }
  } else {
    console.log(`No properties of type ${type} found.`);
  }
});
```

***

### getAllPropertiesTypes()

> **getAllPropertiesTypes**(): `number`[]

Method to retrieve all property types from either local properties or streamed properties.

#### Returns

`number`[]

- An array of unique property types.

#### Example

```typescript
const propertyTypes = fragmentsGroup.getAllPropertiesTypes();
console.log(propertyTypes); // Output: [1001, 1002,...]
```

***

### getFragmentMap()

> **getFragmentMap**(`expressIDs`): [`FragmentIdMap`](../interfaces/FragmentIdMap.md)

A method to create a map of fragment IDs and express IDs contained within them. This is useful because if you want to get "a chair", it might be made of 4 different geometries, and thus the subsets of 4 different fragments. Using this method, you would get exactly the fragments of where that chair is.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `expressIDs` | `Iterable`\<`number`\> | An iterable of express IDs to create the map for. If not provided, returns the fragment ID map for the whole group. |

#### Returns

[`FragmentIdMap`](../interfaces/FragmentIdMap.md)

A map where the keys are fragment IDs and the values are sets of express IDs.

***

### getItemVertices()

> **getItemVertices**(`itemID`): `Vector3`[]

Method to retrieve the vertices of a specific item within the fragments.
This method finds the fragments that contain the specified item,
then retrieves the vertices of those fragments.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `itemID` | `number` | The ID of the item for which to retrieve vertices. Usually, an IFC expressID. |

#### Returns

`Vector3`[]

An array of THREE.Vector3 objects representing the vertices of the specified item.

#### Example

```typescript
const itemVertices = fragmentsGroup.getItemVertices(12345);
for (const vertex of itemVertices) {
  console.log(`Vertex: ${vertex.x}, ${vertex.y}, ${vertex.z}`);
}
```

***

### getLocalProperties()

> **getLocalProperties**(): `undefined` \| [`IfcProperties`](../interfaces/IfcProperties.md)

Method to retrieve the local properties of the fragments in this group.

#### Returns

`undefined` \| [`IfcProperties`](../interfaces/IfcProperties.md)

- An object containing properties of type IfcProperties.
The keys of the object are express IDs as strings, and the values are objects representing the properties of the corresponding express ID.
If no local properties are set, it returns `undefined`.

#### Example

```typescript
const properties = fragmentsGroup.getLocalProperties();
if (properties) {
  for (const id in properties) {
    const property = properties[id];
    console.log(`ID: ${id}, Name: ${property.name}, Type: ${property.type}`);
  }
}
```

***

### setLocalProperties()

> **setLocalProperties**(`properties`): `void`

Method to set local properties of the fragments in this group.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `properties` | [`IfcProperties`](../interfaces/IfcProperties.md) | An object containing properties of type IfcProperties. The keys of the object are express IDs as strings, and the values are objects representing the properties of the corresponding express ID. |

#### Returns

`void`

#### Example

```typescript
const properties: IfcProperties = {
  "12345": {
    name: "Chair",
    type: 1001,
    color: [0.5, 0.5, 0.5],
    //... other properties
  },
  "67890": {
    name: "Table",
    type: 1002,
    color: [0.8, 0.8, 0.8],
    //... other properties
  },
  //... more properties
};

fragmentsGroup.setLocalProperties(properties);
```

***

### setProperties()

> **setProperties**(`id`, `value`): `Promise`\<`void`\>

Method to set properties of a specific fragment in this group.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | The ID of the fragment for which to set properties. |
| `value` | `null` \| `object` | The new properties to set for the fragment. If null, it deletes the properties for the fragment. |

#### Returns

`Promise`\<`void`\>

#### Throws

Will throw an error if writing streamed properties, as it is not supported yet.

#### Example

```typescript
const properties: IfcProperties = {
  "12345": {
    name: "Chair",
    type: 1001,
    color: [0.5, 0.5, 0.5],
    //... other properties
  },
};

fragmentsGroup.setProperties(12345, properties[12345]);
```

***

### setPropertiesDB()

> `static` **setPropertiesDB**(`enabled`): `void`

Enables or disables the local property caching system.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `enabled` | `boolean` | Whether to enable or disable it. |

#### Returns

`void`
