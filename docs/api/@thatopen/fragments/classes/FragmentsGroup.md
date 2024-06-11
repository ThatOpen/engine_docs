# FragmentsGroup

A class representing a group of 3D fragments.
This class extends THREE.Group and adds additional properties and methods for managing and interacting with the fragments it contains.

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

### ifcMetadata

> **ifcMetadata**: [`IfcMetadata`](../interfaces/IfcMetadata.md)

An object representing metadata about the IFC model defined by the IFC schema.

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

> **baseFileName**: `string` = `""`

#### baseUrl

> **baseUrl**: `string` = `""`

#### ids

> **ids**: `Map`\<`number`, `number`\>

#### types

> **types**: `Map`\<`number`, `number`[]\>

## Accessors

### hasProperties

> `get` **hasProperties**(): `boolean`

A getter that checks if this group has properties, either locally defined or streamed from a data source.

#### Returns

`boolean`

## Methods

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
| `expressIDs` | `Iterable`\<`number`\> | An iterable of express IDs to create the map for. |

#### Returns

[`FragmentIdMap`](../interfaces/FragmentIdMap.md)

A map where the keys are fragment IDs and the values are sets of express IDs.

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
