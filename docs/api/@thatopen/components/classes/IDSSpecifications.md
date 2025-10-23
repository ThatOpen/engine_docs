# IDSSpecifications

Component that manages Information Delivery Specification (IDS) data. It provides functionality for importing, exporting, and manipulating IDS data. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IDSSpecifications). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IDSSpecifications).

## Extends

- [`Component`](Component.md)

## Methods

### create()

> **create**(`name`, `ifcVersion`, `identifier`?): [`IDSSpecification`](IDSSpecification.md)

Creates a new IDSSpecification instance and adds it to the list.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the IDSSpecification. |
| `ifcVersion` | `IfcVersion`[] | An array of IfcVersion values that the specification supports. |
| `identifier`? | `string` | - |

#### Returns

[`IDSSpecification`](IDSSpecification.md)

The newly created IDSSpecification instance.

***

### export()

> **export**(`info`, `specifications`): `string`

Exports the IDSSpecifications data into an XML string.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `info` | `IDSInfo` | The metadata information for the exported XML. |
| `specifications` | `Iterable` \<[`IDSSpecification`](IDSSpecification.md)\> | An optional iterable of IDSSpecification instances to export. If not provided, all specifications in the list will be exported. |

#### Returns

`string`

A string containing the exported IDSSpecifications data in XML format.

***

### getModelIdMap()

> **getModelIdMap**(`result`): `object`

Processes the results of an IDS check and categorizes the items into passing and failing.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `result` | [`IDSCheckResult`](../type-aliases/IDSCheckResult.md) | An `IDSCheckResult` object containing the check results for various model IDs. |

#### Returns

`object`

An object containing two `ModelIdMap` objects:
         - `pass`: A ModelIdMap representing items that passed the check.
         - `fail`: A ModelIdMap representing items that failed the check.

##### fail

> **fail**: [`ModelIdMap`](../type-aliases/ModelIdMap.md)

##### pass

> **pass**: [`ModelIdMap`](../type-aliases/ModelIdMap.md)

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

### isSerializable()

> **isSerializable**(): `this is Serializable<any, Record<string, any>>`

Whether is component is Serializable.

#### Returns

`this is Serializable<any, Record<string, any>>`

#### Inherited from

[`Component`](Component.md) . [`isSerializable`](Component.md#isserializable)

***

### isUpdateable()

> **isUpdateable**(): `this is Updateable`

Whether is component is [Updateable](../interfaces/Updateable.md).

#### Returns

`this is Updateable`

#### Inherited from

[`Component`](Component.md) . [`isUpdateable`](Component.md#isupdateable)

***

### load()

> **load**(`data`): [`IDSSpecification`](IDSSpecification.md)[]

Parses and processes an XML string containing Information Delivery Specification (IDS) data.
It creates IDSSpecification instances based on the parsed data and returns them in an array.
Also, the instances are added to the list array.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | The XML string to parse. |

#### Returns

[`IDSSpecification`](IDSSpecification.md)[]

An array of IDSSpecification instances created from the parsed data.
