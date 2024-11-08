# IfcGeometryTiler

A component that handles the tiling of IFC geometries for efficient streaming. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IfcGeometryTiler). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IfcGeometryTiler).

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

### onAssetStreamed

> `readonly` **onAssetStreamed**: [`AsyncEvent`](AsyncEvent.md) \<[`StreamedAsset`](../interfaces/StreamedAsset.md)[]\>

Event triggered when assets are streamed.
Contains the streamed assets.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### onGeometryStreamed

> `readonly` **onGeometryStreamed**: [`AsyncEvent`](AsyncEvent.md)\<`object`\>

Event triggered when geometry is streamed.
Contains the streamed geometry data and its buffer.

#### Type declaration

##### buffer

> **buffer**: `Uint8Array`

##### data

> **data**: [`StreamedGeometries`](../interfaces/StreamedGeometries.md)

***

### onIfcLoaded

> `readonly` **onIfcLoaded**: [`AsyncEvent`](AsyncEvent.md)\<`Uint8Array`\>

Event triggered when the IFC file is loaded.
Contains the loaded IFC file data.

***

### onProgress

> `readonly` **onProgress**: [`AsyncEvent`](AsyncEvent.md)\<`number`\>

Event triggered to indicate the progress of the streaming process.
Contains the progress percentage.

***

### settings

> **settings**: [`IfcStreamingSettings`](IfcStreamingSettings.md)

Settings for the IfcGeometryTiler.

***

### webIfc

> **webIfc**: `IfcAPI`

The WebIFC API instance used for IFC file processing.

***

### uuid

> `static` `readonly` **uuid**: `"d9999a00-e1f5-4d3f-8cfe-c56e08609764"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

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

This method streams the IFC file from a given buffer.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | The Uint8Array containing the IFC file data. |

#### Returns

`Promise`\<`void`\>

A Promise that resolves when the streaming process is complete.

#### Remarks

This method cleans up any resources after the streaming process is complete.

#### Example

```typescript
const ifcData = await fetch('path/to/ifc/file.ifc');
const rawBuffer = await response.arrayBuffer();
const ifcBuffer = new Uint8Array(rawBuffer);
await ifcGeometryTiler.streamFromBuffer(ifcBuffer);
```

***

### streamFromCallBack()

> **streamFromCallBack**(`loadCallback`): `Promise`\<`void`\>

This method streams the IFC file from a given callback.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `loadCallback` | `ModelLoadCallback` | The callback function that will be used to load the IFC file. |

#### Returns

`Promise`\<`void`\>

A Promise that resolves when the streaming process is complete.

#### Remarks

This method cleans up any resources after the streaming process is complete.
