# ClipStyler

A component that can style Clipping Planes by adding edges and fills. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/ClipStyler). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/ClipStyler).

## Extends

- `Component`

## Implements

- `Disposable_2`

## Properties

### enabled

> **enabled**: `boolean` = `true`

OBC.Component.enabled

#### Overrides

`OBC.Component.enabled`

***

### onDisposed

> `readonly` **onDisposed**: `Event_2`\<`unknown`\>

OBC.Disposable.onDisposed

#### Implementation of

`OBC.Disposable.onDisposed`

***

### world

> **world**: `null` \| `World` = `null`

Represents the current world instance used by the ClipStyler.
This can be an instance of `OBC.World` or `null` if no world is set.
You can still specify other world during the ClipEdges creation.

***

### uuid

> `static` `readonly` **uuid**: `"24dfc306-a3c4-410f-8071-babc4afa5e4d"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Accessors

### visible

> `get` **visible**(): `boolean`

Gets the visibility state of the edges.

> `set` **visible**(`active`): `void`

Sets the visibility state of the edges.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `active` | `boolean` | The new visibility state. |

#### Returns

`boolean`

## Methods

### create()

> **create**(`plane`, `config`?): [`ClipEdges`](ClipEdges.md)

Creates a new instance of `ClipEdges` using the specified plane and optional configuration.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `plane` | `Plane` | The `THREE.Plane` object used to define the clipping plane. |
| `config`? | [`ClipEdgesCreationConfig`](../interfaces/ClipEdgesCreationConfig.md) | Optional configuration for the edges creation. |

#### Returns

[`ClipEdges`](ClipEdges.md)

A new instance of `ClipEdges` initialized with the specified plane and configuration.

#### Remarks

The given plane won't be copied during the ClipEdges creation.

***

### createFromClipping()

> **createFromClipping**(`id`, `config`?): [`ClipEdges`](ClipEdges.md)

Creates and returns styled edges from a clipping plane identified by its ID.
Optionally, a configuration object can be provided to customize the creation process.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The unique identifier of the clipping plane to create edges from. |
| `config`? | [`ClipEdgesCreationConfig`](../interfaces/ClipEdgesCreationConfig.md) | Optional configuration for edge creation, including visibility and linking behavior. |

#### Returns

[`ClipEdges`](ClipEdges.md)

The created edges styled from the clipping plane.

#### Remarks

- If `config.link` is `true` (default), the edges will automatically update when the clipping plane's dragging ends
  and will be disposed of when the clipping plane is disposed.

***

### createFromView()

> **createFromView**(`view`, `config`?): [`ClipEdges`](ClipEdges.md)

Creates and configures clip edges from a given view.

This method generates clip edges based on the provided view's plane and optional configuration.
If the `link` option in the configuration is enabled (default is `true`), the clip edges are
dynamically linked to the view's lifecycle events, ensuring proper disposal, updates, and visibility
synchronization with the view's state.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `view` | `View` | The view object from which the clip edges are created. |
| `config`? | [`ClipEdgesCreationConfig`](../interfaces/ClipEdgesCreationConfig.md) | Optional configuration for clip edge creation. |

#### Returns

[`ClipEdges`](ClipEdges.md)

The created clip edges object, configured and optionally linked to the view's lifecycle.

***

### dispose()

> **dispose**(): `void`

OBC.Disposable.dispose

#### Returns

`void`

#### Implementation of

`OBC.Disposable.dispose`
