# VertexPicker

A class that provides functionality for picking vertices in a 3D scene.

## Extends

- [`Component`](Component.md)

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### components

> **components**: [`Components`](Components.md)

A reference to the Components instance associated with this VertexPicker.

#### Overrides

`Component.components`

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### onEnabled

> `readonly` **onEnabled**: [`Event`](Event.md)\<`boolean`\>

An event that is triggered when the picker is enabled or disabled

***

### onVertexFound

> `readonly` **onVertexFound**: [`Event`](Event.md)\<`Vector3`\>

An event that is triggered when a vertex is found.
The event passes a THREE.Vector3 representing the position of the found vertex.

***

### onVertexLost

> `readonly` **onVertexLost**: [`Event`](Event.md)\<`Vector3`\>

An event that is triggered when a vertex is lost.
The event passes a THREE.Vector3 representing the position of the lost vertex.

***

### workingPlane

> **workingPlane**: `null` \| `Plane` = `null`

A reference to the working plane used for vertex picking.
This plane is used to determine which vertices are considered valid for picking.
If this value is null, all vertices are considered valid.

## Accessors

### config

> `get` **config**(): `Partial` \<[`VertexPickerConfig`](../interfaces/VertexPickerConfig.md)\>

Gets the current configuration for the VertexPicker component.

#### Example

```typescript
const currentConfig = vertexPicker.config;
console.log(currentConfig.snapDistance); // Output: 0.25
```

> `set` **config**(`value`): `void`

Sets the configuration for the VertexPicker component.

#### Example

```typescript
vertexPicker.config = {
  snapDistance: 0.5,
  showOnlyVertex: true,
};
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `Partial` \<[`VertexPickerConfig`](../interfaces/VertexPickerConfig.md)\> | A Partial object containing the configuration properties to update. The properties not provided in the value object will retain their current values. |

#### Returns

`Partial` \<[`VertexPickerConfig`](../interfaces/VertexPickerConfig.md)\>

A copy of the current VertexPickerConfig object.

***

### enabled

> `get` **enabled**(): `boolean`

Gets the current enabled state of the VertexPicker.

> `set` **enabled**(`value`): `void`

Sets the enabled state of the VertexPicker.
When enabled, the VertexPicker will actively search for vertices in the 3D scene.
When disabled, the VertexPicker will stop searching for vertices and reset the picked point.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | The new enabled state. |

#### Returns

`boolean`

The current enabled state.

## Methods

### dispose()

> **dispose**(): `void`

[Disposable.dispose](../interfaces/Disposable.md#dispose)

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### get()

> **get**(`world`): `null` \| `Vector3`

Performs the vertex picking operation based on the current state of the VertexPicker.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | [`World`](../interfaces/World.md) | The World instance to use for raycasting. |

#### Returns

`null` \| `Vector3`

The current picked point, or null if no point is picked.

#### Remarks

This method checks if the VertexPicker is enabled. If not, it returns the current picked point.
If enabled, it performs raycasting to find the closest intersecting object.
It then determines the closest vertex or point on the face, based on the configuration settings.
If the picked point is on the working plane (if defined), it triggers the `onVertexFound` event and updates the `pickedPoint`.
If the picked point is not on the working plane, it resets the `pickedPoint`.
If no intersecting object is found, it triggers the `onVertexLost` event and resets the `pickedPoint`.

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
