# IfcPropertiesManager

Component to manage and edit properties and Psets in IFC files.

## Extends

- [`Component`](Component.md)

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### attributeListeners

> **attributeListeners**: [`AttributeListener`](../interfaces/AttributeListener.md) = `{}`

Map of attribute listeners.

***

### changeMap

> **changeMap**: [`ChangeMap`](../interfaces/ChangeMap.md) = `{}`

Map of changed entities in the model.

***

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

#### Overrides

[`Component`](Component.md) . [`enabled`](Component.md#enabled)

***

### ifcToExport

> **ifcToExport**: `null` \| `ArrayBuffer` = `null`

ArrayBuffer containing the IFC data to be exported.

***

### onDataChanged

> `readonly` **onDataChanged**: [`Event`](Event.md)\<`object`\>

Event triggered when data in the model changes.

#### Type declaration

##### expressID

> **expressID**: `number`

##### model

> **model**: `FragmentsGroup`

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`string`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### onElementToPset

> `readonly` **onElementToPset**: [`Event`](Event.md)\<`object`\>

Event triggered when an element is added to a Pset.

#### Type declaration

##### elementID

> **elementID**: `number`

##### model

> **model**: `FragmentsGroup`

##### psetID

> **psetID**: `number`

***

### onPropToPset

> `readonly` **onPropToPset**: [`Event`](Event.md)\<`object`\>

Event triggered when a property is added to a Pset.

#### Type declaration

##### model

> **model**: `FragmentsGroup`

##### propID

> **propID**: `number`

##### psetID

> **psetID**: `number`

***

### onPsetRemoved

> `readonly` **onPsetRemoved**: [`Event`](Event.md)\<`object`\>

Event triggered when a Pset is removed.

#### Type declaration

##### model

> **model**: `FragmentsGroup`

##### psetID

> **psetID**: `number`

***

### onRequestFile

> `readonly` **onRequestFile**: [`Event`](Event.md)\<`unknown`\>

Event triggered when a file is requested for export.

***

### selectedModel?

> `optional` **selectedModel**: `FragmentsGroup`

The currently selected model.

***

### wasm

> **wasm**: `object`

Configuration for the WebAssembly module.

#### absolute

> **absolute**: `boolean` = `false`

#### path

> **path**: `string` = `"/"`

***

### uuid

> `static` `readonly` **uuid**: `"58c2d9f0-183c-48d6-a402-dfcf5b9a34df"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### ~~addElementToPset()~~

> **addElementToPset**(`model`, `psetID`, ...`expressIDs`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | `FragmentsGroup` |
| `psetID` | `number` |
| ...`expressIDs` | `number`[] |

#### Returns

`void`

#### Deprecated

Use indexer.addEntitiesRelation instead. This will be removed in future releases.

***

### addPropToPset()

> **addPropToPset**(`model`, `psetID`, ...`propID`): `Promise`\<`void`\>

Adds elements to a Property Set (Pset) in the given model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The FragmentsGroup model in which to add the elements. |
| `psetID` | `number` | The express ID of the Pset to which to add the elements. |
| ...`propID` | `number`[] | - |

#### Returns

`Promise`\<`void`\>

A promise that resolves when all the elements have been added.

#### Throws

Will throw an error if the Pset or the elements to be added are not found in the model.

#### Throws

Will throw an error if the Pset to be added to is not of type `IFCPROPERTYSET`.

#### Throws

Will throw an error if no relation is found between the Pset and the model.

***

### createIfcRel()

> **createIfcRel**(`model`, `type`, `relatingID`, `relatedIDs`): `Promise`\<`any`\>

Creates a new instance of a relationship between entities in the IFC model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The FragmentsGroup model in which to create the relationship. |
| `type` | `160246688` \| `279856033` \| `307848117` \| `781010003` \| `919958153` \| `982818633` \| `1204542856` \| `1307041759` \| `2495723537` \| `2565941209` \| `2655215786` \| `2857406711` \| `3242617779` \| `3268803585` \| `4186316022` | The type of the relationship to create. |
| `relatingID` | `number` | The express ID of the entity that is related to the other entities. |
| `relatedIDs` | `number`[] | The express IDs of the entities that are related to the relating entity. |

#### Returns

`Promise`\<`any`\>

A promise that resolves with the newly created relationship.

#### Throws

Will throw an error if the relationship type is unsupported.

***

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### getEntityRef()

> **getEntityRef**(`model`, `type`): `Promise`\<`null` \| `Handle`\<`unknown`\>[]\>

Retrieves all the entities of a specific type from the model and returns their express IDs wrapped in Handles.
This is used to make references of an entity inside another entity attributes.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The FragmentsGroup model from which to retrieve the entities. |
| `type` | `number` | The type of the entities to retrieve. This should be the express ID of the IFC type. |

#### Returns

`Promise`\<`null` \| `Handle`\<`unknown`\>[]\>

A promise that resolves with an array of Handles, each containing the express ID of an entity of the specified type.

null if the model doesn't have any entity of that type

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

### newPset()

> **newPset**(`model`, `name`, `description`?): `Promise`\<`object`\>

Creates a new Property Set (Pset) in the given model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The FragmentsGroup model in which to create the Pset. |
| `name` | `string` | The name of the Pset. |
| `description`? | `string` | (Optional) The description of the Pset. |

#### Returns

`Promise`\<`object`\>

A promise that resolves with an object containing the newly created Pset and its relation.

##### pset

> **pset**: `IfcPropertySet` \| `IfcPropertySet` \| `IfcPropertySet`

#### Throws

Will throw an error if the IFC schema is not found in the model.

#### Throws

Will throw an error if no OwnerHistory is found in the model.

***

### newSingleBooleanProperty()

> **newSingleBooleanProperty**(`model`, `type`, `name`, `value`): `Promise`\<`IfcPropertySingleValue` \| `IfcPropertySingleValue` \| `IfcPropertySingleValue`\>

Creates a new single-value property of type boolean in the given model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The FragmentsGroup model in which to create the property. |
| `type` | [`BooleanPropTypes`](../type-aliases/BooleanPropTypes.md) | The type of the property value. Must be a boolean property type. |
| `name` | `string` | The name of the property. |
| `value` | `boolean` | The value of the property. Must be a boolean. |

#### Returns

`Promise`\<`IfcPropertySingleValue` \| `IfcPropertySingleValue` \| `IfcPropertySingleValue`\>

The newly created single-value property.

#### Throws

Will throw an error if the IFC schema is not found in the model.

#### Throws

Will throw an error if no OwnerHistory is found in the model.

***

### newSingleNumericProperty()

> **newSingleNumericProperty**(`model`, `type`, `name`, `value`): `Promise`\<`IfcPropertySingleValue` \| `IfcPropertySingleValue` \| `IfcPropertySingleValue`\>

Creates a new single-value property of type numeric in the given model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The FragmentsGroup model in which to create the property. |
| `type` | [`NumericPropTypes`](../type-aliases/NumericPropTypes.md) | The type of the property value. Must be a numeric property type. |
| `name` | `string` | The name of the property. |
| `value` | `number` | The value of the property. Must be a number. |

#### Returns

`Promise`\<`IfcPropertySingleValue` \| `IfcPropertySingleValue` \| `IfcPropertySingleValue`\>

The newly created single-value property.

#### Throws

Will throw an error if the IFC schema is not found in the model.

#### Throws

Will throw an error if no OwnerHistory is found in the model.

***

### newSingleStringProperty()

> **newSingleStringProperty**(`model`, `type`, `name`, `value`): `Promise`\<`IfcPropertySingleValue` \| `IfcPropertySingleValue` \| `IfcPropertySingleValue`\>

Creates a new single-value property of type string in the given model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The FragmentsGroup model in which to create the property. |
| `type` | [`StringPropTypes`](../type-aliases/StringPropTypes.md) | The type of the property value. Must be a string property type. |
| `name` | `string` | The name of the property. |
| `value` | `string` | The value of the property. Must be a string. |

#### Returns

`Promise`\<`IfcPropertySingleValue` \| `IfcPropertySingleValue` \| `IfcPropertySingleValue`\>

The newly created single-value property.

#### Throws

Will throw an error if the IFC schema is not found in the model.

#### Throws

Will throw an error if no OwnerHistory is found in the model.

***

### removePset()

> **removePset**(`model`, ...`psetID`): `Promise`\<`void`\>

Removes a Property Set (Pset) from the given model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The FragmentsGroup model from which to remove the Pset. |
| ...`psetID` | `number`[] | The express IDs of the Psets to be removed. |

#### Returns

`Promise`\<`void`\>

A promise that resolves when all the Psets have been removed.

#### Throws

Will throw an error if any of the `expressID` properties are missing in the `psetID` array.

#### Throws

Will throw an error if the Pset to be removed is not of type `IFCPROPERTYSET`.

#### Throws

Will throw an error if no relation is found between the Pset and the model.

***

### removePsetProp()

> **removePsetProp**(`model`, `psetID`, `propID`): `Promise`\<`void`\>

Removes a property from a Property Set (Pset) in the given model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The FragmentsGroup model from which to remove the property. |
| `psetID` | `number` | The express ID of the Pset from which to remove the property. |
| `propID` | `number` | The express ID of the property to be removed. |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the property has been removed.

#### Throws

Will throw an error if the Pset or the property to be removed are not found in the model.

#### Throws

Will throw an error if the Pset to be removed is not of type `IFCPROPERTYSET`.

***

### saveToIfc()

> **saveToIfc**(`model`, `ifcToSaveOn`): `Promise`\<`Uint8Array`\>

Saves the changes made to the model to a new IFC file.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The FragmentsGroup model from which to save the changes. |
| `ifcToSaveOn` | `Uint8Array` | The Uint8Array representing the original IFC file. |

#### Returns

`Promise`\<`Uint8Array`\>

A promise that resolves with the modified IFC data as a Uint8Array.

#### Throws

Will throw an error if any issues occur during the saving process.

***

### setAttributeListener()

> **setAttributeListener**(`model`, `expressID`, `attributeName`): `Promise` \<[`Event`](Event.md)\<`String` \| `Number` \| `Boolean`\>\>

Sets an attribute listener for a specific attribute of an entity in the model.
The listener will trigger an event whenever the attribute's value changes.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The FragmentsGroup model in which to set the attribute listener. |
| `expressID` | `number` | The express ID of the entity for which to set the listener. |
| `attributeName` | `string` | The name of the attribute for which to set the listener. |

#### Returns

`Promise` \<[`Event`](Event.md)\<`String` \| `Number` \| `Boolean`\>\>

The event that will be triggered when the attribute's value changes.

#### Throws

Will throw an error if the entity with the given expressID doesn't exist.

#### Throws

Will throw an error if the attribute is an array or null, and it can't have a listener.

#### Throws

Will throw an error if the attribute has a badly defined handle.

***

### setData()

> **setData**(`model`, ...`dataToSave`): `Promise`\<`void`\>

Method to add or update entity attributes in the model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The FragmentsGroup model in which to set the properties. |
| ...`dataToSave` | `Record`\<`string`, `any`\>[] | An array of objects representing the properties to be saved. Each object must have an `expressID` property, which is the express ID of the entity in the model. The rest of the properties will be set as the properties of the entity. |

#### Returns

`Promise`\<`void`\>

A promise that resolves when all the properties have been set.

#### Throws

Will throw an error if any of the `expressID` properties are missing in the `dataToSave` array.

***

### getIFCSchema()

> `static` **getIFCSchema**(`model`): `IfcSchema`

Static method to retrieve the IFC schema from a given model.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `model` | `FragmentsGroup` | The FragmentsGroup model from which to retrieve the IFC schema. |

#### Returns

`IfcSchema`

The IFC schema associated with the given model.

#### Throws

Will throw an error if the IFC schema is not found in the model.
