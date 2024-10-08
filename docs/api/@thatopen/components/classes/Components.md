# Components

The entry point of the Components library. It can create, delete and access all the components of the library globally, update all the updatable components automatically and dispose all the components, preventing memory leaks.

## Implements

- [`Disposable`](../interfaces/Disposable.md)

## Properties

### enabled

> **enabled**: `boolean` = `false`

If disabled, the animation loop will be stopped.
Default value is false.

***

### list

> `readonly` **list**: `Map`\<`string`, [`Component`](Component.md)\>

The list of components created in this app.
The keys are UUIDs and the values are instances of the components.

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](Event.md)\<`void`\>

[Disposable.onDisposed](../interfaces/Disposable.md#ondisposed)

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`onDisposed`](../interfaces/Disposable.md#ondisposed)

***

### onInit

> `readonly` **onInit**: [`Event`](Event.md)\<`undefined`\>

Event that triggers the Components instance is initialized.

#### Remarks

This event is triggered once when the [Components.init](Components.md#init) method has been called and finish processing.
This is useful to set configuration placeholders that need to be executed when the components instance is initialized.
For example, enabling and configuring custom effects in a post-production renderer.

#### Example

```typescript
const components = new Components();
components.onInit.add(() => {
  // Enable custom effects in the post-production renderer
  // or any other operation dependant on the component initialization
});
components.init();
```

***

### release

> `static` `readonly` **release**: `"2.3.0"` = `"2.3.0"`

The version of the @thatopen/components library.

## Methods

### add()

`Internal`

> **add**(`uuid`, `instance`): `void`

Adds a component to the list of components.
Throws an error if a component with the same UUID already exists.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | The unique identifier of the component. |
| `instance` | [`Component`](Component.md) | The instance of the component to be added. |

#### Returns

`void`

#### Throws

Will throw an error if a component with the same UUID already exists.

***

### dispose()

> **dispose**(): `void`

Disposes the memory of all the components and tools of this instance of
the library. A memory leak will be created if:

- An instance of the library ends up out of scope and this function isn't
called. This is especially relevant in Single Page Applications (React,
Angular, Vue, etc).

- Any of the objects of this instance (meshes, geometries,materials, etc) is
referenced by a reference type (object or array).

You can learn more about how Three.js handles memory leaks
[here](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects).

#### Returns

`void`

#### Implementation of

[`Disposable`](../interfaces/Disposable.md) . [`dispose`](../interfaces/Disposable.md#dispose)

***

### get()

`Internal`

> **get**\<`U`\>(`Component`): `U`

Retrieves a component instance by its constructor function.
If the component does not exist in the list, it will be created and added.

#### Type parameters

| Type parameter | Description |
| :------ | :------ |
| `U` *extends* [`Component`](Component.md) | The type of the component to retrieve. |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `Component` | `Object` | The constructor function of the component to retrieve. |

#### Returns

`U`

The instance of the requested component.

#### Throws

Will throw an error if a component with the same UUID already exists.

***

### init()

> **init**(): `void`

Initializes the Components instance.
This method starts the animation loop, sets the enabled flag to true,
and calls the update method.

#### Returns

`void`
