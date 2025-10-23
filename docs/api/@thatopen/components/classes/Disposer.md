# Disposer

A tool to safely remove meshes, geometries, materials and other items from memory to [prevent memory leaks](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Disposer).

## Extends

- [`Component`](Component.md)

## Properties

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

#### Overrides

[`Component`](Component.md) . [`enabled`](Component.md#enabled)

***

### uuid

> `static` `readonly` **uuid**: `"76e9cd8e-ad8f-4753-9ef6-cbc60f7247fe"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### destroy()

> **destroy**(`object`, `materials`, `recursive`): `void`

Removes a mesh, its geometry and its materials from memory. If you are
using any of these in other parts of the application, make sure that you
remove them from the mesh before disposing it.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `object` | `Object3D`\<`Object3DEventMap`\> | `undefined` | the [object](https://threejs.org/docs/#api/en/core/Object3D) to remove. |
| `materials` | `boolean` | `true` | whether to dispose the materials of the mesh. |
| `recursive` | `boolean` | `true` | whether to recursively dispose the children of the mesh. |

#### Returns

`void`

***

### disposeGeometry()

> **disposeGeometry**(`geometry`): `void`

Disposes a geometry from memory.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `geometry` | `BufferGeometry`\<`NormalBufferAttributes`\> | <p>the</p><p>[geometry](https://threejs.org/docs/#api/en/core/BufferGeometry)</p><p> to remove.</p> |

#### Returns

`void`

***

### get()

> **get**(): `Set`\<`string`\>

Return the UUIDs of all disposed components.

#### Returns

`Set`\<`string`\>

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
