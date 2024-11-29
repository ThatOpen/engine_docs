# Classifier

The Classifier component is responsible for classifying and categorizing fragments based on various criteria. It provides methods to add, remove, find, and filter fragments based on their classification. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Classifier). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Classifier).

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

### list

> **list**: [`Classification`](../interfaces/Classification.md) = `{}`

A map representing the classification systems.
The key is the system name, and the value is an object representing the classes within the system.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### uuid

> `static` `readonly` **uuid**: `"e25a7f3c-46c4-4a14-9d3d-5115f24ebeb7"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### byEntity()

> **byEntity**(`group`): `void`

Classifies fragments based on their entity type.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `group` | `FragmentsGroup` | The FragmentsGroup containing the fragments to be classified. |

#### Returns

`void`

#### Remarks

This method iterates through the relations of the fragments in the provided group,
and classifies them based on their entity type.
The classification is stored in the `list.entities` property,
with the entity type as the key and a map of fragment IDs to their respective express IDs as the value.

#### Throws

Will throw an error if the fragment ID is not found.

***

### byIfcRel()

> **byIfcRel**(`group`, `ifcRel`, `systemName`): `Promise`\<`void`\>

Classifies fragments based on a specific IFC relationship.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `group` | `FragmentsGroup` | The FragmentsGroup containing the fragments to be classified. |
| `ifcRel` | `number` | The IFC relationship number to classify fragments by. |
| `systemName` | `string` | The name of the classification system to store the classification. |

#### Returns

`Promise`\<`void`\>

#### Remarks

This method iterates through the relations of the fragments in the provided group,
and classifies them based on the specified IFC relationship.
The classification is stored in the `list` property under the specified system name,
with the relationship name as the class name and a map of fragment IDs to their respective express IDs as the value.

#### Throws

Will throw an error if the fragment ID is not found or if the IFC relationship is not valid.

***

### byModel()

> **byModel**(`modelID`, `group`): `void`

Classifies fragments based on their modelID.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelID` | `string` | The unique identifier of the model to classify fragments by. |
| `group` | `FragmentsGroup` | The FragmentsGroup containing the fragments to be classified. |

#### Returns

`void`

#### Remarks

This method iterates through the fragments in the provided group,
and classifies them based on their modelID.
The classification is stored in the `list.models` property,
with the modelID as the key and a map of fragment IDs to their respective express IDs as the value.

***

### byPredefinedType()

> **byPredefinedType**(`group`): `Promise`\<`void`\>

Classifies fragments based on their PredefinedType property.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `group` | `FragmentsGroup` | The FragmentsGroup containing the fragments to be classified. |

#### Returns

`Promise`\<`void`\>

#### Remarks

This method iterates through the properties of the fragments in the provided group,
and classifies them based on their PredefinedType property.
The classification is stored in the `list.predefinedTypes` property,
with the PredefinedType as the key and a map of fragment IDs to their respective express IDs as the value.

#### Throws

Will throw an error if the fragment ID is not found.

***

### bySpatialStructure()

> **bySpatialStructure**(`model`, `config`): `Promise`\<`void`\>

Classifies fragments based on their spatial structure in the IFC model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The FragmentsGroup containing the fragments to be classified. |
| `config` | `object` | <p>The configuration for the classifier. It includes "useProperties", which is true by default</p><p>(if false, the classification will use the expressIDs instead of the names), and "isolate", which will make</p><p> the classifier just pick the WEBIFC categories provided.</p> |
| `config.isolate`? | `Set`\<`number`\> | - |
| `config.systemName`? | `string` | - |
| `config.useProperties`? | `boolean` | - |

#### Returns

`Promise`\<`void`\>

#### Remarks

This method iterates through the relations of the fragments in the provided group,
and classifies them based on their spatial structure in the IFC model.
The classification is stored in the `list` property under the system name "spatialStructures",
with the relationship name as the class name and a map of fragment IDs to their respective express IDs as the value.

#### Throws

Will throw an error if the fragment ID is not found or if the model relations do not exist.

***

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### export()

> **export**(): `ExportedClassification`

Exports the computed classification to persists them and import them back
later for faster loading.

#### Returns

`ExportedClassification`

***

### find()

> **find**(`filter`?): `FragmentIdMap`

Finds and returns fragments based on the provided filter criteria.
If no filter is provided, it returns all fragments.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `filter`? | `object` | An optional object containing filter criteria. The keys of the object represent the classification system names, and the values are arrays of class names to match. |

#### Returns

`FragmentIdMap`

A map of fragment GUIDs to their respective express IDs,
where the express IDs are filtered based on the provided filter criteria.

#### Throws

Will throw an error if the fragments map is malformed.

***

### import()

> **import**(`data`): `void`

Imports a classification previously exported with .export().

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `ExportedClassification` | the serialized classification to import. |

#### Returns

`void`

***

### isConfigurable()

> **isConfigurable**(): `this is Configurable<any, any>`

Whether is component is [Configurable](../interfaces/Configurable.md).

#### Returns

`this is Configurable<any, any>`

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

### remove()

> **remove**(`guid`): `void`

Removes a fragment from the classification based on its unique identifier (guid).
This method iterates through all classification systems and classes, and deletes the fragment with the specified guid from the respective group.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | The unique identifier of the fragment to be removed. |

#### Returns

`void`

***

### resetColor()

> **resetColor**(`items`): `void`

Resets the color of the specified fragments to their original color.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `items` | `FragmentIdMap` | A map of fragment IDs to their respective express IDs. |

#### Returns

`void`

#### Remarks

This method iterates through the provided fragment IDs, retrieves the corresponding fragments,
and resets their color using the `resetColor` method of the FragmentsGroup class.

#### Throws

Will throw an error if the fragment with the specified ID is not found.

***

### setColor()

> **setColor**(`items`, `color`, `override`): `void`

Sets the color of the specified fragments.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `items` | `FragmentIdMap` | `undefined` | A map of fragment IDs to their respective express IDs. |
| `color` | `Color` | `undefined` | The color to set for the fragments. |
| `override` | `boolean` | `false` | A boolean indicating whether to override the existing color of the fragments. |

#### Returns

`void`

#### Remarks

This method iterates through the provided fragment IDs, retrieves the corresponding fragments,
and sets their color using the `setColor` method of the FragmentsGroup class.

#### Throws

Will throw an error if the fragment with the specified ID is not found.
