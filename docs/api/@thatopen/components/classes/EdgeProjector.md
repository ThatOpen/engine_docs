# EdgeProjector

Component that generates 2D edge projections from fragment model items.

## Extends

- [`Component`](Component.md)

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### cullerPixelsPerMeter

> **cullerPixelsPerMeter**: `number` = `0.05`

Resolution of the visibility culler in pixels per meter.
Higher values = more accurate occlusion but slower culling.

***

### farPlane

> **farPlane**: `number` = `Infinity`

Far clipping plane along the projection direction.
Meshes whose AABB is fully "beyond" this plane (farther from the viewer) are excluded.
Set to Infinity to disable.

***

### generator

> `readonly` **generator**: `any`

The underlying ProjectionGenerator from three-edge-projection.
You can configure angleThreshold, iterationTime, includeIntersectionEdges, and useWebGPU.

***

### nearPlane

> **nearPlane**: `number` = `-Infinity`

Near clipping plane along the projection direction.
Meshes whose AABB is fully "behind" this plane (closer to the viewer) are excluded.
Set to -Infinity to disable.

***

### projectionDirection

> `readonly` **projectionDirection**: `Vector3`

The direction the projector looks along. Meshes are projected onto the plane
perpendicular to this direction. Default is top-down (plan view).

Common values:
- Top/Plan: `(0, -1, 0)`
- Front: `(0, 0, -1)`
- Back: `(0, 0, 1)`
- Left: `(-1, 0, 0)`
- Right: `(1, 0, 0)`

## Methods

### get()

> **get**(`modelIdMap`, `world`, `config`?): `Promise` \<[`EdgeProjectionResult`](../interfaces/EdgeProjectionResult.md)\>

Generates 2D edge projections for the given model items.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `modelIdMap` | [`ModelIdMap`](../type-aliases/ModelIdMap.md) | A map of model IDs to sets of local IDs specifying items to project. |
| `world` | [`World`](../interfaces/World.md) | The world whose renderer will be used for visibility culling. |
| `config`? | `object` | Optional configuration. |
| `config.onProgress`? | (`message`, `progress`?) => `void` | Optional progress callback receiving (message, progress?, collector?). |

#### Returns

`Promise` \<[`EdgeProjectionResult`](../interfaces/EdgeProjectionResult.md)\>

Visible/hidden geometries with a `group` vertex attribute, and a groups mapping.

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
