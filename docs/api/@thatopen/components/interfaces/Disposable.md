# Disposable

Whether this component has to be manually destroyed once you are done with it to prevent [memory leaks](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects). This also ensures that the DOM events created by that component will be cleaned up.

## Extended by

- [`World`](World.md)

## Properties

### dispose()

> **dispose**: () => `void` \| `Promise`\<`void`\>

Destroys the object from memory to prevent a
[memory leak](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects).

#### Returns

`void` \| `Promise`\<`void`\>

***

### onDisposed

> `readonly` **onDisposed**: [`Event`](../classes/Event.md)\<`any`\>

Fired after the tool has been disposed.
