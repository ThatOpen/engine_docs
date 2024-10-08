# IfcPropertiesTiler

A component that converts the properties of an IFC file to tiles. It uses the Web-IFC library to read and process the IFC data. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IfcPropertiesTiler). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IfcPropertiesTiler).

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

> `readonly` **onDisposed**: [`Event`](Event.md)\<`string`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### onIndicesStreamed

> `readonly` **onIndicesStreamed**: [`AsyncEvent`](AsyncEvent.md)\<`Map`\<`number`, `Map`\<`number`, `number`[]\>\>\>

An event that is triggered when indices are streamed from the IFC file.
The event provides a map of indices, where the key is the entity type and the value is another map of indices.

***

### onProgress

> `readonly` **onProgress**: [`AsyncEvent`](AsyncEvent.md)\<`number`\>

An event that is triggered to indicate the progress of the streaming process.
The event provides a number between 0 and 1 representing the progress percentage.

***

### onPropertiesStreamed

> `readonly` **onPropertiesStreamed**: [`AsyncEvent`](AsyncEvent.md)\<`object`\>

An event that is triggered when properties are streamed from the IFC file.
The event provides the type of the IFC entity and the corresponding data.

#### Type declaration

##### data

> **data**: `object`

###### Index signature

 \[`id`: `number`\]: `any`

##### type

> **type**: `number`

***

### settings

> **settings**: [`PropertiesStreamingSettings`](PropertiesStreamingSettings.md)

An instance of the PropertiesStreamingSettings class, which holds the settings for the streaming process.

***

### webIfc

> **webIfc**: `IfcAPI`

An instance of the IfcAPI class from the Web-IFC library, which provides methods for reading and processing IFC data.

***

### uuid

> `static` `readonly` **uuid**: `"88d2c89c-ce32-47d7-8cb6-d51e4b311a0b"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

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

### streamFromBuffer()

> **streamFromBuffer**(`data`): `Promise`\<`void`\>

This method converts properties from an IFC file to tiles given its data as a Uint8Array.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The Uint8Array containing the IFC file data. |

#### Returns

`Promise`\<`void`\>

A Promise that resolves when the streaming process is complete.

***

### streamFromCallBack()

> **streamFromCallBack**(`loadCallback`): `Promise`\<`void`\>

This method converts properties from an IFC file to tiles using a given callback function to read the file.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `loadCallback` | `ModelLoadCallback` | A callback function that loads the IFC file data. |

#### Returns

`Promise`\<`void`\>

A Promise that resolves when the streaming process is complete.
