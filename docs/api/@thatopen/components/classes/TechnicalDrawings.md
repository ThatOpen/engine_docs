# TechnicalDrawings

OBC Component that creates and manages [TechnicalDrawing](TechnicalDrawing.md) instances.

## Extends

- [`Component`](Component.md)

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Constructors

### new TechnicalDrawings()

> **new TechnicalDrawings**(`components`): [`TechnicalDrawings`](TechnicalDrawings.md)

A TechnicalDrawing is a 2D drawing plane that lives in 3D world space.
It contains projection lines and dimension annotations (layer 1 geometry)
framed by one or more orthographic [DrawingViewport](DrawingViewport.md)s.

The drawing's `container` (a `THREE.Group`) can be freely transformed in the
3D world — all viewports and geometry move together as a single unit.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `components` | [`Components`](Components.md) |

#### Returns

[`TechnicalDrawings`](TechnicalDrawings.md)

#### Overrides

`Component.constructor`

#### Example

```ts
const techDrawings = components.get(TechnicalDrawings);
const drawing = techDrawings.create(world);

// Add layer-1 geometry to the drawing
const lines = new THREE.LineSegments(geometry, material);
lines.layers.set(1);
drawing.three.add(lines);

// Add viewports
const vp = drawing.viewports.create({ left: -1, right: 5, top: 1, bottom: -4 });
```

## Properties

### enabled

> **enabled**: `boolean` = `true`

[Component.enabled](Component.md#enabled)

#### Overrides

[`Component`](Component.md) . [`enabled`](Component.md#enabled)

***

### list

> `readonly` **list**: `DataMap`\<`string`, [`TechnicalDrawing`](TechnicalDrawing.md)\>

All active drawings, keyed by their UUID.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`unknown`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### systems

> `readonly` **systems**: `DataMap`\<`Function`, [`AnnotationSystem`](AnnotationSystem.md)\<`any`\>\>

Global system instances keyed by their constructor.
Register a system with [use](TechnicalDrawings.md#use); inspect or iterate here for UI purposes.

***

### uuid

> `static` `readonly` **uuid**: `"5c7d3b9a-4e8f-4a2b-9c1d-0e3f2a5b7c8d"`

A unique identifier for the component.
This UUID is used to register the component within the Components system.

## Methods

### create()

> **create**(`world`): [`TechnicalDrawing`](TechnicalDrawing.md)

Creates a new [TechnicalDrawing](TechnicalDrawing.md) hosted in the given world.

The drawing's Three.js group is added to the world's scene and its
lifecycle is tied to the world — it is automatically removed when the
world is disposed. Three.js rendering layer 1 is enabled on the world
camera so that annotation geometry is visible in the 3D view. Both
perspective and orthographic cameras are configured when using
[OrthoPerspectiveCamera](OrthoPerspectiveCamera.md).

To hide the drawing from the 3D view without removing it from the world,
either set `drawing.three.visible = false` or disable layer 1 on the
world camera: `world.camera.three.layers.disable(1)`.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `world` | [`World`](../interfaces/World.md) | The world that will host this drawing. |

#### Returns

[`TechnicalDrawing`](TechnicalDrawing.md)

The newly created drawing.

***

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

### use()

> **use**\<`T`\>(`SystemClass`): `T`

Returns the global singleton instance of the given system, creating it if it
does not yet exist. The system constructor must accept `Components` as its
only argument (new-style global systems). Safe to call multiple times — always
returns the same instance.

```ts
const dims = techDrawings.use(OBC.LinearAnnotations);
dims.styles.set("default", { ... });
```

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`AnnotationSystem`](AnnotationSystem.md)\<`any`\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `SystemClass` | `Object` |

#### Returns

`T`
